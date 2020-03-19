var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        chuncai: './src/app'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            },
            {
                test: /\.jpg$|\.png/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50000,
                        name: '[contenthash:8].[ext]',
                        outputPath: 'img/',
                    }
                }]
            }
        ]
    },
    resolve: {
        // root: path.join(__dirname, 'src'),
        // extensions: ['', '.js', '.json', '.less'],
        // alias: { // 设置别名

        // }
    },
    optimization: {
        minimize: true
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: JSON.stringify("production")
        //     }
        // })
    ],
    externals: {
        'jquery': 'jQuery'
    }
};