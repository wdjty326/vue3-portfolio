const glob = require("glob");
const path = require("path");
const fs = require("fs");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const publicPath = "/dist/";


const pages = (() => {
	const result = {};
	const match = glob.sync(path.resolve(__dirname, "src", "Pages", "**/*"));
	match.forEach((v) => {
		const exists = fs.existsSync(v);
		if (exists) {
			const filename = v.substring(v.lastIndexOf("/") + 1, v.lastIndexOf("."));
			const ext = v.substring(v.lastIndexOf(".") + 1, v.length);
			if (ext === "ts") result[filename] = v;
		}
	});
	return result;
})();

module.exports = () => {
	const config = {
		entry: pages,
		output: {
			path: path.resolve(__dirname, "dist"),
			publicPath,
			filename: "[name].js",
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: "vue-loader",
				}, {
					test: /\.(ts|tsx)$/,
					loader: "ts-loader",
					exclude: /node_modules/,
					options: {
						appendTsSuffixTo: [/\.vue$/],
					}
				}, {
					test: /\.css$/,
					use: [
						"vue-style-loader",
						"css-loader",
					],
				}
			]
		},
		resolve: {
			extensions: [".ts", ".js", ".vue", ".tsx"],
		},
		plugins: [
			new VueLoaderPlugin(),
		].concat(Object.keys(pages).map(v => new HtmlWebpackPlugin({
			chunks: [v],
			template: "./src/Templates/index.html",
			filename: v + ".html",
			minify: false,
			cache: true,
			publicPath,
		}))),
	};
	return config;
};
