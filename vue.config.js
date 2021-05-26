module.exports = {
    publicPath: '.',
    pages: {
        index: {
            entry: 'src/pages/home/home.js',
            template: 'src/pages/home/home.html',
            filename: 'home.html'
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