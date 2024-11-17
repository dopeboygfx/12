
const webpack = require('@nativescript/webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env) => {
    webpack.init(env);

    webpack.chainWebpack((config) => {
        // Add aliases for cleaner imports
        config.resolve.alias.set('@components', path.resolve(__dirname, 'src/components'));
        config.resolve.alias.set('@screens', path.resolve(__dirname, 'src/screens'));
        config.resolve.alias.set('@store', path.resolve(__dirname, 'src/store'));
        config.resolve.alias.set('@navigation', path.resolve(__dirname, 'src/navigation'));
        
        // Add support for environment variables
        config.plugin('dotenv').use(Dotenv);
    });

    return webpack.resolveConfig();
};
