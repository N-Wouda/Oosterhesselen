const webpack = require('webpack');

module.exports = {
    entry: './public/main.js',
    output: { path: './public/', filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    watch: true
};