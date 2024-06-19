export default (taxonomies, firstActive = '') => ({
    taxonomies: taxonomies,
    firstActive: firstActive,
    init() {

        for (const taxonomie of this.taxonomies) {
            this[taxonomie] = false;
        }

        if (this.firstActive) {

            let taxonomie = this.firstActive;
            if (!this[taxonomie]) this.taxonomies.push(taxonomie);

            this[taxonomie] = true;
        }
    },
    show(candidate) {
        for (const taxonomie of this.taxonomies) {
            this[taxonomie] = candidate === taxonomie;
        }
    }
});
