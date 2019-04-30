module.exports = {
    devServer: {
      port: 80,
      host: "127.0.0.1",
      open: true,
      proxy: {
        "/exa": {
          target: "http://188.131.188.119",
          changeOrigin: true,
          pathRewrite: {
            "^/exa": "/"
          }
        }
      }
    }
  };
  