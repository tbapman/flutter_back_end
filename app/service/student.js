// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async list() {
    const ctx = this.ctx;
    return ctx.model.Student.find({})
    // ctx.model.User.find({"title":"111"}) 表示在数据库中查找title 为111的对应数据
  }
  // 添加用户
  async add(req) {
    const ctx = this.ctx
    return ctx.model.Student.create(req).then(res => {
      return { success: true, msg: res, code: 0 };
    }).catch(err => {
      return { success: false, err };
    });
  }
}
module.exports = UserService;