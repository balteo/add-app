export default {
    proxy: {
        // with options
        '/api': {
            target: 'http://localhost:3001',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
        }
    }
}
