module.exports = {
    publicPath: '.', // comment out when developing
    pages: {
        index: {
            entry: 'src/assets/javascript/default.js',
            template: 'public/index.html',
            filename: 'index.html'
        },
        thema: {
            entry: 'src/assets/javascript/pages/thema.js',
            template: 'src/pages/thema.html',
            filename: 'thema.html'
        },
        opening: {
            entry: 'src/assets/javascript/default.js',
            template: 'src/pages/opening.html',
            filename: 'opening.html'
        },
        // lustrumweek: {
        //     entry: 'src/pages/lustrumweek/lustrumweek.js',
        //     template: 'src/pages/lustrumweek/lustrumweek.html',
        //     filename: 'lustrumweek.html'
        // },

    }
};