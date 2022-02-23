module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './resources/**/*.antlers.html',
            './resources/**/*.blade.php',
            './content/**/*.md'
        ]
    },
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '0.9375rem',
                sm: '1.25rem'
            }
        },
        fontSize: {
            xs: '0.75rem', // 12px
            sm: '0.875rem', // 14px
            base: '1rem', // 16px
            lg: '1.125rem', // 18px
            xl: '1.25rem', // 20px
            xxl: '1.375rem', // 22px
            '2xl': '1.5rem', // 24px
            '3xl': '1.625rem', // 26px
            '4xl': '1.75rem', // 28px
            '5xl': '2.1875rem', // 35px
            '6xl': '2.875rem', // 46px
            '7xl': '3.375rem', // 54px
            '8xl': '4.275rem' // 70px
        },
        extend: {
            fontFamily: {
                display: ['arboria', 'Helvetica', 'Arial', 'sans-serif'],
                body: ['open-sans', 'Helvetica', 'Arial', 'sans-serif'],
            },
            colors: {
                primary: {
                    '100': '#CFFBFD',
                    '200': '#A1F1FB',
                    '300': '#70DCF3',
                    '400': '#4CC1E7',
                    '500': '#179CD7',
                    '600': '#107AB8',
                    '700': '#0B5B9A',
                    '800': '#07417C',
                    '900': '#042E67',
                },
                secondary: {
                    '100': '#DAFCF4',
                    '200': '#B7F9EE',
                    '300': '#8FEEE6',
                    '400': '#6FDDDD',
                    '500': '#43BCC7',
                    '600': '#3096AB',
                    '700': '#21748F',
                    '800': '#155473',
                    '900': '#0C3D5F',
                },
                tertiary: {
                    '100': '#FEF0DA',
                    '200': '#FDDDB6',
                    '300': '#FAC391',
                    '400': '#F6AB75',
                    '500': '#F18449',
                    '600': '#CF6135',
                    '700': '#AD4324',
                    '800': '#8B2A17',
                    '900': '#73180E',
                },
                gray: {
                     '50': '#F9F9F9',
                    '100': '#F5F8F9',
                    '200': '#ECF1F4',
                    '300': '#D4DADF',
                    '400': '#B3BABF',
                    '500': '#898F95',
                    '600': '#647080',
                    '700': '#3E505F',
                    '800': '#243746',
                    '900': '#1A2B3C',
                },
                success: {
                    '100': '#EAF9D1',
                    '200': '#D1F4A6',
                    '300': '#A8DF74',
                    '400': '#7EC04C',
                    '500': '#4A961E',
                    '600': '#368115',
                    '700': '#256C0F',
                    '800': '#175709',
                    '900': '#0D4805',
                },
                info: {
                    '100': '#CDF2FE',
                    '200': '#9BDFFE',
                    '300': '#69C7FD',
                    '400': '#44AFFB',
                    '500': '#0788F9',
                    '600': '#0569D6',
                    '700': '#034EB3',
                    '800': '#023790',
                    '900': '#012777',
                },
                warning: {
                    '100': '#FFFACC',
                    '200': '#FFF499',
                    '300': '#FFEC66',
                    '400': '#FFE43F',
                    '500': '#FFD800',
                    '600': '#DBB600',
                    '700': '#B79500',
                    '800': '#937600',
                    '900': '#7A5F00',
                },
                danger: {
                    '100': '#FFE3D3',
                    '200': '#FFC0A9',
                    '300': '#FF967E',
                    '400': '#FF6E5D',
                    '500': '#FF2C28',
                    '600': '#DB1D29',
                    '700': '#B7142D',
                    '800': '#930C2C',
                    '900': '#7A072C'
                },
                facebook: {
                    '100': '#D0ECFE',
                    '200': '#A2D6FD',
                    '300': '#73BAFB',
                    '400': '#50A0F7',
                    '500': '#1877F2',
                    '600': '#115CD0',
                    '700': '#0C44AE',
                    '800': '#072F8C',
                    '900': '#042174',
                },
                youtube: {
                    '100': '#FFDDCC',
                    '200': '#FFB399',
                    '300': '#FF8066',
                    '400': '#FF503F',
                    '500': '#FF0000',
                    '600': '#DB0012',
                    '700': '#B7001F',
                    '800': '#930026',
                    '900': '#7A002A',
                },
                whatsapp: {
                    '100': '#D4FCD3',
                    '200': '#A7FAAE',
                    '300': '#7AF18F',
                    '400': '#57E47E',
                    '500': '#25D366',
                    '600': '#1BB564',
                    '700': '#12975E',
                    '800': '#0B7A55',
                    '900': '#07654F',
                },
                twitter: {
                    '100': '#D1F6FE',
                    '200': '#A4E9FD',
                    '300': '#76D4FA',
                    '400': '#53BEF6',
                    '500': '#1D9BF0',
                    '600': '#1578CE',
                    '700': '#0E5AAC',
                    '800': '#09408B',
                    '900': '#052D73',
                },
                instagram: {
                    '100': '#FBD7DD',
                    '200': '#F8B0C3',
                    '300': '#EC85AB',
                    '400': '#D9639A',
                    '500': '#C13584',
                    '600': '#A5267B',
                    '700': '#8A1A70',
                    '800': '#6F1062',
                    '900': '#5C0A59',
                },
                linkedin: {
                    '100': '#CCEDFB',
                    '200': '#9AD7F8',
                    '300': '#66B6EC',
                    '400': '#3F94DA',
                    '500': '#0A66C2',
                    '600': '#074FA6',
                    '700': '#053A8B',
                    '800': '#032970',
                    '900': '#011D5D',
                },
                xing: {
                    '100': '#C5F7E7',
                    '200': '#8FEFD9',
                    '300': '#53D1BE',
                    '400': '#28A39B',
                    '500': '#006567',
                    '600': '#004F58',
                    '700': '#003C4A',
                    '800': '#002B3B',
                    '900': '#001F31',
                },
                tiktok: {
                    '100': '#E3FCF6',
                    '200': '#C8FAF1',
                    '300': '#A9F0E9',
                    '400': '#8EE2E1',
                    '500': '#69C9D0',
                    '600': '#4CA3B2',
                    '700': '#347F95',
                    '800': '#215D78',
                    '900': '#144463',
                },
                skype: {
                    '100': '#CBFEFD',
                    '200': '#98F7FD',
                    '300': '#64E6FA',
                    '400': '#3DD0F6',
                    '500': '#00AFF0',
                    '600': '#0088CE',
                    '700': '#0066AC',
                    '800': '#00488B',
                    '900': '#003473',
                },
            },
            spacing: {
                px:  '0.0625rem', // 1px
                logo: '135px',
                '0': '0',
                '1': '0.3125rem', // 5px
                '2': '0.625rem', // 10px
                '3': '0.9375rem', // 15px
                '4': '1.25rem', // 20px
                '5': '1.5625rem', // 25px
                '6': '1.875rem', // 30px
                '7': '2.1875rem', // 35px
                '8': '2.5rem', // 40px
                '9': '2.8125rem', // 45px
                '10': '3.125rem', // 50px
                '11': '3.4375rem', // 55px
                '12': '3.75rem', // 60px
                '13': '4.0625rem', // 65px
                '14': '4.375rem', // 70px
                '15': '6.6875rem', // 75px
                '16': '5rem', // 80px
                '17': '5.3125rem', // 85px
                '18': '5.625rem', // 90px
                '19': '5.9375rem', // 95px
                '20': '6.25rem', // 100px
                '21': '6.5625rem', // 105px
                '22': '6.875rem', // 110px
                '23': '7.1875rem', // 115px
                '24': '7.5rem', // 120px
                '25': '7.8125rem', // 125px
                '26': '8.125rem', // 130px
            },
            zIndex: {
                under: '-2',
                below: '-1',
                '1':    '1',
                '2':    '2',
                '3':    '3',
                'over9k': '9999',
            },
        }
    },
    variants: {

    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
