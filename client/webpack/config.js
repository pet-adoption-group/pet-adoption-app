export default {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [

            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
              enforce: 'pre',
              exclude: /node_modules/, // Exclude node_modules to prevent parsing source maps for libraries
            },
            {
              loader: 'file-loader',
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 75
                },
                optipng: {
                  enabled: true,
                },
                pngquant: {
                  quality: [0.65, 0.90],
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75
                }
              },
            },
          ],
        },
      ],
    },
  };
  