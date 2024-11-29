const path = require("path");

module.exports = {
    resolve: {
        alias: {
            "react-native$": "react-native-web", // Redirect React Native imports to react-native-web
        },
        extensions: [".web.js", ".js", ".json"], // Enable support for .web.js files
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
};
