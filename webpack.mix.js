const mix = require('laravel-mix');

const postCss = [
    require('tailwindcss')('./tailwind.config.js'),
];

mix.js('resources/js/site.js', 'public/js')
    .sass('resources/scss/app.scss', 'public/css/app.css')
    .options({
        processCssUrls: false,
        postCss: postCss,
    })
    .version();
