const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        port: 3000
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
    })]
};
