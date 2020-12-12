### React 项目搭建

    1：创建react项目工程 命令 create-react-app myapp

    2: 暴露webpack配置，下载插件，命令  yarn eject  

    3：下载less， 命令 yarn add less less-loader -D

    4：配置less， 暴露出webpack配置之后， 打开webpack.config.js 文件

                （1） 找到样式正则配置 style files regexes

                （2） 在样式正则部分添加less正则：  

                                                const lessRegex = /\.less$/;

                                                const lessModuleRegex = /\.module\.less$/; 

                                                在114行的位置添加： {
                                                                        loader: require.resolve('less-loader'),
                                                                    },

                (3)   找到sassRegex;sassModuleRegex 等相关配置下面添加：


                                                 {
                                                    test: lessRegex,
                                                    exclude: lessModuleRegex,
                                                    use: getStyleLoaders(
                                                        {
                                                        importLoaders: 2,
                                                        sourceMap: isEnvProduction
                                                            ? shouldUseSourceMap
                                                            : isEnvDevelopment,
                                                        },
                                                        'less-loader'
                                                    ),
                                                    
                                                    sideEffects: true,
                                                    },               
                                                    {
                                                    test: lessModuleRegex,
                                                    use: getStyleLoaders(
                                                        {
                                                        importLoaders: 2,
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
    
    5: 下载Ui 框架：这里是使用Antd移动端的， 下载命令 yarn add antd --save

    6：为了提高性能节约资源， 实现UI框架组件的按需引入，下载按需引入的插件 yarn add babel-plugin-import --save-dev （npm i -D @babel/core）

    7：如果遇到报错， 很可能是版本不一致的导致的， 解决方案：不要使用yarn，卸载npm un babel-core，重装npm i -D @babel/core

    8：按需引入组件的配置， 打开webpack.config.js 找到 js 的正则部分  Process application JS with Babel.下面的 plugins 下面添加一个配置数组  
                                                   
                                                   
            ['import',{
                  libraryName:'antd',
                  style:true
            }],

    9： 下载常用插件，以及路由等， yarn add axios    yarn add react-router-dom
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### 记录bug

1：重复点击同一个路由文件页面数据不刷新还会有警告，在NavLink中加上replace，可以有效的解决

2：echarts的使用：

                    import echarts from 'echarts/lib/echarts'; // 主模块
                    
                    import  'echarts/lib/chart/bar'; // 柱状图
                   
                    import  'echarts/lib/chart/line';  //折线图
                    
                    import  'echarts/lib/chart/pie'; // 饼图

                    import 'echarts/lib/component/tooltip'; 

                    import 'echarts/lib/component/title'; // 标题

                    import 'echarts/lib/component/legend'; // legend


3：页面刷新之后默认选中的侧边栏目会回到首页， 内容却是刷新之前的内容页面：


                    解决方法：selectedKeys 获取当前页面路由设置左侧菜单选中数组

                    这样解决如果刷新之前选中的是二级菜单那么刷新之后二级菜单会被折叠

                    解决方式：暂时未解决
