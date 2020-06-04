'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  //首页新增
  async add() {
    const ctx = this.ctx;
    const req = ctx.request.body
    // 获取请求体的内容
    ctx.body = await ctx.service.home.add(req);
  }
  //首页获取
  async get() {
    const ctx = this.ctx;
    var aa = await ctx.service.home.get()
    // 此处我们将操作数据库，所以调用的是 service 文件夹里面的user.js 文件里面的 list方法
    // 调用玩这个方法后，会返回一个数据，我们用 aa 来接收
    ctx.body = aa
    // 将接收到返回的数据渲染出来
  }
}

module.exports = HomeController;
