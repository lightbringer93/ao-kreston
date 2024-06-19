const mix = require('laravel-mix');

const postCss = [
    require('tailwindcss')('./tailwind.config.js'),
];

mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/scss/app.scss', 'public/css/app.css')
    .options({
        processCssUrls: false,
        postCss: postCss,
    })
    .version();
