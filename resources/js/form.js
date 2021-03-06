import axios from "axios";

export default (redirectUrl = null) => ({
    redirectUrl: redirectUrl,
    token: '',
    errors: {},
    error: false,
    success: false,
    init() {
        axios.get('/api/csrf').then(data => {
            if (data && data.status == 200) {
                this.token = data.data.token;
            }
        }).catch(() => {
            this.error = true;
        });
    },
    submit() {
        this.$el.querySelector('[name="_token"]').value = this.token;

        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.post(this.$el.action, new FormData(this.$el))
            .then(({status}) => {
                if (status == 200) {
                    this.resetResponse();
                    this.success = true;

                    if (this.redirectUrl) window.location.href = this.redirectUrl;
                }
            }).catch(error => {
            if (error.response && error.response.status == 400) {
                this.errors = error.response.data.error;
            } else {
                this.error = true;
            }
        });
    },
    resetResponse() {
        this.error = false;
        this.errors = {};
        this.success = false;
    }
})
