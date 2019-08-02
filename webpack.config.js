
const path = require('path');
module.exports = {
    entry:["babel-polyfill", "./src/js/script.js"],
    watch: true,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname,"dist"),
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            }
        ]
    }
}