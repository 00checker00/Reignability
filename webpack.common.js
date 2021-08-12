const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const fs = require("fs");
const createjs = require("createjs-def");
const mkdirp = require("mkdirp");

module.exports = {
    // Change to your "entry-point".
    entry: ["babel-regenerator-runtime",'./app/main'], 
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                // Include ts, tsx, js, and jsx files.
                test: /.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /.svg$/,
                type: "asset/resource"
            },
            {
                test: /.s[ac]ss$/i,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== "production"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /.(png|jpe?g|gif|ttf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "app/index.html",
            favicon: "app/images/fav_icon.png"
        }),
        new HtmlWebpackInlineSVGPlugin({
            runPreEmit: true,
            svgoConfig: [
                { cleanupAttrs: false },
                { mergeStyles: false },
                { inlineStyles: false },
                { removeDoctype: false },
                { removeXMLProcInst: false },
                { removeComments: false },
                { removeMetadata: false },
                { removeTitle: false },
                { removeDesc: false },
                { removeUselessDefs: false },
                { removeEditorsNSData: false },
                { removeEmptyAttrs: false },
                { removeHiddenElems: false },
                { removeEmptyText: false },
                { removeEmptyContainers: false },
                { removeViewBox: false },
                { cleanupEnableBackground: false },
                { minifyStyles: false },
                { convertColors: false },
                { convertPathData: false },
                { convertTransform: false },
                { removeUnknownsAndDefaults: false },
                { removeNonInheritableGroupAttrs: false },
                { removeUselessStrokeAndFill: false },
                { removeUnusedNS: false },
                { cleanupIDs: false },
                { cleanupNumericValues: false },
                { moveElemsAttrsToGroup: false },
                { moveGroupAttrsToElems: false },
                { collapseGroups: false },
                { mergePaths: false },
                { convertShapeToPath: false },
                { convertEllipseToCircle: false },
                { sortDefsChildren: false },]
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "public"
                }
            ],
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        {
            apply: (compiler) => 
            {
                compiler.hooks.beforeCompile.tap("CreateJS_Definition",(compilation)=>
                {
                    const data = fs.readFileSync("public/Animate.js","utf8");
                    const definitions = createjs.createDef('Animate', data, 'typescript');
                    mkdirp.sync("_build/@types");
                    fs.writeFileSync("_build/@types/Animate.d.ts",definitions);

                })
            }
        }
    ]
};