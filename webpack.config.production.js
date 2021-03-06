const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require("path");
const webpack = require("webpack");
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

const CSSApp = new ExtractTextPlugin('css/app.css');
const CSSAppExtract = CSSApp.extract({fallback: 'style-loader',use: ['css-loader', 'sass-loader']});

module.exports = {
    entry: {
        index: "./src/index.js",
        demo: "./src/demo.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].bundle.js"
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            assets: path.join(__dirname, 'assets/')
        }
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015','react', 'stage-0']
                },
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                use: CSSAppExtract
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(gif|png|jpe?g|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "./html/index.html", to: "index.html" },
            { from: "./html/demo.html", to: "demo.html" },
            { from: "./html/assets/", to: "assets"},
            { from: "./html/lang/", to: "lang"},
            { from: "./html/fonts/", to: "fonts"},
            { from: "./node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff2", to: "fonts/glyphicons-halflings-regular.woff2"}
        ]),
        new MergeIntoSingleFilePlugin({
            "js/vendor.js":[
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/bootstrap/dist/js/bootstrap.min.js'
            ],
            "css/vendor.css":[
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/react-select/dist/react-select.css'
            ]
        }),
        CSSApp,
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
};
