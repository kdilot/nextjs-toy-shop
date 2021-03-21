module.exports = {
    async redirects() {
        return [
            {
                source: '/main',
                destination: '/',
                permanent: false,
            },
        ]
    },
}
