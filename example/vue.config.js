module.exports = {
    devServer: {
      port: 80,
      host: "127.0.0.1",
      open: true,
<<<<<<< HEAD
      proxy: {
        "/exa": {
          target: "http://188.131.188.119",
          changeOrigin: true,
          pathRewrite: {
            "^/exa": "/"
          }
        }
      }
=======
      // proxy: {
      //   "/ele": {
      //     target: "http://188.131.188.119",
      //     changeOrigin: true,
      //     pathRewrite: {
      //       "^/ele": ""
      //     }
      //   }
      // }
>>>>>>> 496d633ad918743275747a85c42173cb67fe9e8c
    }
  };
  