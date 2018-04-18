/**
 * config
 */

const path = require('path');
const siteName = '瀛太投资';
var config = {

  home: {
    title: `瀛太投资`,
    keywords: '不良资产',
    description: '以太投资专注不良资产投资领域！'
  },
  // detail: {
  //   title: '区块链项目', 
  //   keywords: '',
  //   description: ''  
  // },
  // postProject: {
  //   title: '项目提交',
  //   keywords: '区块链项目提交,区块链项目审核',
  //   description: '提交区块链项目, 立即让全世界知道你的项目'
  // },
  personalPage: {
    title: '我的页面',
    keywords: '',
    description: '的个人页面',
  },
  login: {
    title: `登录 | ${siteName}`,
    keywords: `登录, 登录${siteName}`,
    description: `登录${siteName}`
  },
  signup: {
    title: `注册 | ${siteName}`,
    keywords: `注册, 注册${siteName}`,
    description: `注册 ${siteName}`
  }
};

module.exports = config;
