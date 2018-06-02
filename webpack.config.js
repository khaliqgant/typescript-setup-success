module.exports = {

    entry: './src/server.ts',
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    mode: 'none',

    output: {
        filename: 'server.js'
    },

    // Source maps support ('inline-source-map' also works)
    //devtool: 'source-map',

    // Add the loader for .ts files.
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};
