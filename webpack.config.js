const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin  = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  plugins: [    
    new HtmlWebpackPlugin({ 
      template: './src/index.html',
      favicon: './src/dragon.ico'
    }),
    /*new WebpackPwaManifestPlugin({
      name: 'Comparte Ride - Dale la vuelta al hoy no trancita',
      short_name: 'CRide',
      description: 'Con Comparte Ride puedes encontrar la solucion al hoy no trancita.',
      background_color: '#ffffff',
      theme_color: '#2196f3',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('./src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve('./src/assets/icon.png'),
          size: '1024x1024' // you can also use the specifications pattern
        },
        {
          src: path.resolve('./src/assets/icon.png'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'), // Son las direcciones desde las que está cargando las imagenes, si usamos django hay que poner la url de los estaticos
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-servertoflamas-eo4hko47y.vercel.app'), // Donde se hizo el deploy
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })*/
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|gif|jpg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: 'assets/[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
}
