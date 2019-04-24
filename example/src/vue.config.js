module.exports = {
    devServer: {
      port: 80,
      host: "127.0.0.1",
      open: true,
      proxy: {
        "/exa": {
          target: "http://127.0.0.1:3000",
          changeOrigin: true,
          pathRewrite: {
            "^/exa": "/"
          }
        }
      }
    }
  };
  