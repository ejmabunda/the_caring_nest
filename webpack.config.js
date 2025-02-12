const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/gallery.html',
            filename: 'gallery.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/about.html',
            filename: 'about.html',
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: 'src/img', to: 'img' }], // Copy all images to dist/img/
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/, // Match SCSS files
                use: ['style-loader', 'css-loader', 'sass-loader'], // Process SCSS -> CSS -> Inject into HTML
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i, // Match image files
                type: 'asset/resource', // Move images to `dist/`
                generator: {
                    filename: 'img/[name][ext]', // Keep original names inside `/dist/img/`
                },
            },
        ],
    },
};