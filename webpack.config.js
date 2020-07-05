const path = require('path');

module.exports = {
    // 指定模式（这个指定可以用来区分开发模式和生产模式，可选值有：'devvlopment','production','none'）
    mode: 'none',
    // 入口
    entry: {
        main: path.resolve(__dirname, './index.js')
    },

    // 出口
    output: {
        // 出口文件
        path: path.resolve(__dirname, './dist'),
        // 文件名
        filename: './[name][hash:3].js',
    },

    // 加载器
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
}