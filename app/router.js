module.exports = app => {
  const { router, controller } = app;
  router.get('/getStudentList', controller.student.list); 
  // 1、我定义这个接口是获取表格中所有学生的信息, 这是一个get请求
  // 2、对应的是controller下面的student.js文件里面的list方法
  router.post('/add', controller.student.add);
  // 这是一个post请求，调用的是controller里面的add方法
};