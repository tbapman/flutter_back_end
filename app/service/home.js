// app/service/user.js
const Service = require('egg').Service;

class HomeService extends Service {
  async get() {
    const ctx = this.ctx;
    return ctx.model.Home.find({}).then(res=>{
      return {success:true,data:res,code:0};
    }).catch(err=>{
      return {success:false,err};
    })
    // ctx.model.User.find({"title":"111"}) 表示在数据库中查找title 为111的对应数据
  }
  // 添加用户
  async add(req) {
    const ctx = this.ctx
    return ctx.model.Home.create(req).then(res => {
      return { success: true, msg: res, code: 0 };
    }).catch(err => {
      return { success: false, err };
    });
  }
}
module.exports = HomeService;