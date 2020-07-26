// app/service/user.js
const Service = require("egg").Service;

class HomeService extends Service {
  async get() {
    const ctx = this.ctx;
    return ctx.model.Home.find({})
      .then((res) => {
        return { success: true, data: res, code: 0 };
      })
      .catch((err) => {
        return { success: false, err };
      });
    // ctx.model.User.find({"title":"111"}) 表示在数据库中查找title 为111的对应数据
  }
  // 添加
  async add(req) {
    const ctx = this.ctx;
    return ctx.model.Home.create(req)
      .then((res) => {
        return { success: true, msg: res, code: 0 };
      })
      .catch((err) => {
        return { success: false, err };
      });
  }
  // 火爆专区添加
  async addHotProduct(req) {
    const ctx = this.ctx;
    return ctx.model.HotProduct.create(req)
      .then((res) => {
        return { success: true, msg: res, code: 0 };
      })
      .catch((err) => {
        return { success: false, err };
      });
  }
  //火爆专区获取
  async getHotProduct(current) {
    const ctx = this.ctx;
    return ctx.model.HotProduct.find({})
      .skip((current - 1) * 10)
      .limit(10)
      .then((res) => {
        return { success: true, data: res, code: 0 };
      })
      .catch((err) => {
        return { success: false, err };
      });
    // ctx.model.User.find({"title":"111"}) 表示在数据库中查找title 为111的对应数据
  }
  //新增商品分类
  async addCategory(req) {
    const ctx = this.ctx;
    return ctx.model.Category.create(req)
      .then((res) => {
        return { success: true, msg: res, code: 0 };
      })
      .catch((err) => {
        return { success: false, err };
      });
  }
  //获取商品分类
  async getCategory() {
    const ctx = this.ctx;
    return ctx.model.Category.find({})
      .then((res) => {
        return { success: true, data: res[0].detail, code: 0 };
      })
      .catch((err) => {
        return { success: false, err };
      });
    // ctx.model.User.find({"title":"111"}) 表示在数据库中查找title 为111的对应数据
  }

  async addProduct(req) {
    const ctx = this.ctx;
    return ctx.model.Product.create(req)
      .then((res) => {
        return { success: true, msg: res, code: 0 };
      })
      .catch((err) => {
        return { success: false, err };
      });
  }

  async getProduct(query) {
    const ctx = this.ctx;
    console.log(query);
    let { categoryId, categorySubId, page } = query;
    let obj = {};
    if (categorySubId) {
      obj.categoryId = categoryId;
      obj.categorySubId = categorySubId;
    } else {
      obj.categoryId = categoryId;
    }
    console.log(obj);
    return ctx.model.Product.find(obj)
      .skip((page - 1) * 10)
      .limit(10)
      .then((res) => {
        return { success: true, data: res, code: 0 };
      })
      .catch((err) => {
        return { success: false, err };
      });
    // ctx.model.User.find({"title":"111"}) 表示在数据库中查找title 为111的对应数据
  }
  async addDetail(req) {
    const ctx = this.ctx;
    return ctx.model.Detail.create(req)
      .then((res) => {
        return { success: true, msg: res, code: 0 };
      })
      .catch((err) => {
        return { success: false, err };
      });
  }
  async getDetail(query) {
    const ctx = this.ctx;
    return ctx.model.Detail.find(query)
      .then((res) => {
        if (res.length) {
          return { success: true, data: res[0], code: 0 };
        } else {
          return { success: false, data: {}, code: 1 };
        }
      })
      .catch((err) => {
        return { success: false, err };
      });
    // ctx.model.User.find({"title":"111"}) 表示在数据库中查找title 为111的对应数据
  }
}
module.exports = HomeService;
