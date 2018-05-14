const backend = {
    entry: [
        './_tmp/index.js'
    ],
    output: {
       filename: './index.js'
    },
    target: 'node',
    mode: 'development',
    watch: false
};

module.exports = [
    Object.assign({}, backend)
]

