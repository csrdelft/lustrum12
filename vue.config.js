module.exports = {
    publicPath: '.', // comment out when developing
    pages: {
        index: {
            entry: 'src/assets/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        },
        opening: {
            entry: 'src/pages/opening/opening.js',
            template: 'src/pages/opening/opening.html',
            filename: 'opening.html'
        },
        lustrumweek: {
            entry: 'src/pages/lustrumweek/lustrumweek.js',
            template: 'src/pages/lustrumweek/lustrumweek.html',
            filename: 'lustrumweek.html'
        },
        thema: {
            entry: 'src/pages/thema/thema.js',
            template: 'src/pages/thema/thema.html',
            filename: 'thema.html'
        }
    }
};