/**
 * config
 */

const path = require('path');
const siteName = 'BTC210区块链媒体';
var config = {

  home: {
    title: `BTC210_区块链媒体, 门户导航及大数据平台`,
    keywords: '区块链导航,区块链网址大全, 区块链评论,区块链项目,区块链大数据,区块链点评,区块链教程,区块链开发,比特币矿机,以太坊,比特币怎么挖,区块链,比特币是什么,比特币今日价格,比特币交易平台,比特币,bitcoin,比特币网址导航,比特币行情,比特币价格,比特币价格K线图,比特币资讯,比特币挖矿,比特币网址大全',
    description: '区块链大数据平台。提供区块链行业（包括区块链项目,虚拟货币等）项目数据, 网址导航, 用户评论和历史记录。'
  },
  detail: {
    title: '区块链项目', 
    keywords: '',
    description: ''  
  },
  postProject: {
    title: '项目提交',
    keywords: '区块链项目提交,区块链项目审核',
    description: '提交区块链项目, 立即让全世界知道你的项目'
  },
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
