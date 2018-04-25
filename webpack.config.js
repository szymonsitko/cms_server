const backend = {
    entry: [
        './index.js'
    ],
    output: {
       filename: 'index.js'
    },
    target: 'node',
    mode: 'development',
    watch: true
};

module.exports = [
    Object.assign({}, backend)
]

