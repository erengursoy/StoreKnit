module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',

            widest: '7px',
        },

        extend: {
            backgroundImage: {


                'home': "url('~/assets/image/11062b_0446c8c911d8433cb2c8550ccc97e582_mv2_d_4368_2912_s_4_2.webp')"

            },
            spacing: {
                '8.9': '8.9rem',
                '15.7': '15.7rem',
                '3px': '3px',
                '300px': '300px',
            },
            colors: {
                'our-models-card': '#f6f3ef',
                'our-pet-products': 'rgb(127 89 57)',
            }



        },
    },

}