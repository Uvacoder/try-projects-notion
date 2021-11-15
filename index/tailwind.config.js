import colors from 'https://cdn.skypack.dev/tailwindcss/colors'

tailwind.config = {
    theme: {
        darkMode: 'class',
        fontFamily: {
            body: ['Basically A Sans Serif', 'sans-serif']
        },
        container: {
            center: true
        },
        extend: {
            colors: {
                gray: colors.blueGray,
                primary: '#006cff',
                'twitter': '#1da1f2',
                'twitter-dark': '#0D94E7',
                'discord': '#5964f0',
                'discord-dark': '#4450EE',
                'youtube': '#ff0000',
                'youtube-dark': '#E00000',
                'github': '#24292e',
                'github-light': '#363D45'
            },
            spacing: {
                108: '28rem'
            }
        }
    }
}

