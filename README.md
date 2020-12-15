支持app的应用

1.支持less的配置
   安装 npm install --save-dev less less-loader
   运行 npm run eject 来拉取配置文件, 如果有问题，是git的问题
          拉取之后会出现一个config的文件夹

  修改config/webpack.config.js中的配置，增加less的配置  (参考sass的配置修改)
  (1)// style files regexes
   const cssRegex = /\.css$/;
    const cssModuleRegex = /\.module\.css$/;
     const sassRegex = /\.(scss|sass)$/;
      const sassModuleRegex = /\.module\.(scss|sass)$/;
     const lessRegex = /\.less$/;
    const lessModuleRegex = /\.module\.less$/;

    (2)
      {
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                },
                'less-loader'
              ),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },

            (3)
                {
              test: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                  modules: {
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                },
                'less-loader'
              ),
            },

2.支持rem
直接用代码放在index.html的header中   
      <script>
      (function (doc, win) {
          var docEl = doc.documentElement,
                  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                  recalc = function () {
                      var clientWidth = docEl.clientWidth;
                      if (!clientWidth) return;
                      if(clientWidth>=750){
                          docEl.style.fontSize = '100px';
                      }else{
                          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                      }
                  };

          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
      })(document, window);
    </script>        
3.路由
npm install --save react-router react-router-dom

