const glob = require("glob");
const path = require("path");
const fs = require("fs");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const publicPath = "/";

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

const htmlPages = (() => {
	return Object.keys(pages).map(v => new HtmlWebpackPlugin({
		chunks: [v],
		template: "./src/Templates/index.html",
		filename: v + ".html",
		minify: false,
		cache: true,
		publicPath,
		inject: false,
	}));
})();

module.exports = (env, option) => {
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
					test: /\.(ts|tsx)$/,
					loader: "ts-loader",
					exclude: /node_modules/,
					options: {
						appendTsSuffixTo: [/\.vue$/],
					}
				}, {
					test: /\.vue$/,
					loader: "vue-loader",
					options: {
						extractCSS: true,
						// loaders: {
						// 	css: ExtractTextPlugin.extract({
						// 		use: "css-loader",
						// 		fallback: "vue-style-loader", // `vue-loader` 의존성 플러그인
						// 	})
						// }
					}
				}, {
					test: /\.sass$|\.scss$/,
					use: [
						"vue-style-loader",
						MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
							options: { modules: true }
						},
						{
							loader: "sass-loader",
							options: {
								additionalData: "$env: " + option.mode + ";\n @import \"@/Themes/_main.scss\";",
							},
						},
					],
				}
			]
		},
		resolve: {
			extensions: [".ts", ".js", ".tsx"],
			alias: {
				"@": path.resolve(__dirname, "src/"),
				"@Pages": path.resolve(__dirname, "src/Pages"),
				"@Templates": path.resolve(__dirname, "src/Templates"),
				"@Themes": path.resolve(__dirname, "src/Themes"),
			}
		},
		plugins: [
			new CleanWebpackPlugin(),
			new VueLoaderPlugin(),
			new MiniCssExtractPlugin({
				filename: "css/[name].css",
				ignoreOrder: false
			}),
		]
			.concat(htmlPages),
			// .concat(cssPages),
		// devServer: {
		// 	contentBase: path.join(__dirname, 'dist'),
		// 	compress: true,
		// 	port: 9000
		// 	}
	};

	if (option.mode === "development") {
		config.devServer = {
			contentBase: path.join(__dirname, "dist"),
			compress: true,
			port: 9000,
		};
	}
	
	return config;
};
