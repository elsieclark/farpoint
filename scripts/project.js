module.exports = {
    entryPoints: {
        main: './client/main/main.jsx'
    },
    assetExts: ['*.jpg', '*.png', '*.otf', '*.woff', '*.woff2', '*.ico', '*.ttf', '*.svg'],
    shared: ['./client'],
    libs: [
        'react',
        'react-dom',
        'create-react-class',
        'pico-router',
        'classnames',
        'pixi.js',
        'lodash/core',
        'lodash',
    ]
};