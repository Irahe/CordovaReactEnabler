module.exports = {
    watch: true,
    entry: [
        './src/index.js' // react entrypoint
    ],
    output: {
        path: __dirname + '/www/dist',// where the bundle files should be placed
        publicPath: './dist/', // where assets can be mapped from
        filename: 'bundle.js' //bundle filename
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets/imgs"
                    }
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};