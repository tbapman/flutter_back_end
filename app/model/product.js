// app/model/student.js
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
 
  const HomeSchema = new Schema({
    categoryId:{type:String},
    categorySubId:{type:String},
    image:{type:String},
    oriPrice:{type:Number},
    presentPrice:{type:Number},
    goodsName:{type:String},
    goodsId:{type:String},
  });
  // 以上定义了表数据的类型
 
  return mongoose.model('product', HomeSchema,'productInfo');
  // model(参数1，参数2，参数3）参数3是你数据表中需要操作的表的名字，
  // 比如我现在要操作的是名字叫mongoTest里面的叫studentInfo的表
}

