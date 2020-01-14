// ENV module
const ENV = process.env.NODE_ENV;
// webpack-dev-server open page
const WEBPACK_OPEN_PAGE = "spp";
// webpack-dev-server host
const WEBPACK_DEV_SERVER_HOST = "0.0.0.0";
// webpack-dev-server port
const WEBPACK_DEV_SERVER_PORT = 8888;
// webpack-dev-server proxy target
const WEBPACK_DEV_SERVER_PROXY_TARGET = "http://192.168.20.28:18011";
//启动项目自动获取本机ip
const getIPAdress = () => {
  let localIPAddress = ''
  let interfaces = require('os').networkInterfaces()
  for (let devName in interfaces) {
    let iface = interfaces[devName]
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        localIPAddress = alias.address
      }
    }
  }
  return localIPAddress
}


// axios timeout
const TIMEOUT = 0;
const getProject = (url, project) => `${url}/${project}`
// axios baseURL
let backend = ENV === 'production' ? '' : '/api';
// let login_userdata
switch (ENV) {
    // 生产环境
  case "production":
    backend = 'http://192.168.20.28:18011'
    break;
    // 本地开发
  default:
    backend = "/api"
}
// FRONTEND_DOMAIN module for mock data @ development
// const FRONTEND_DOMAIN = `/${WEBPACK_OPEN_PAGE}#`
const BACKEND_DOMAIN = backend;
// const LOGIN_USERDATA = login_userdata;
module.exports = {
  // FRONTEND_DOMAIN,/
  BACKEND_DOMAIN,
  WEBPACK_DEV_SERVER_HOST: getIPAdress(),
  WEBPACK_DEV_SERVER_PORT,
  WEBPACK_DEV_SERVER_PROXY_TARGET,
  ENV,
  TIMEOUT,


}
