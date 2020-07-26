module.exports = app => {
  const { router, controller } = app;
  // router.get('/getStudentList', controller.student.list); 
  router.post('/add', controller.student.add);
  router.post('/home/add',controller.home.add);
  router.get('/home/get',controller.home.get);
  router.post('/home/addHotProduct',controller.home.addHotProduct);
  router.get('/home/getHotProduct',controller.home.getHotProduct);
  router.post('/home/addCategory',controller.home.addCategory);
  router.get('/home/getCategory',controller.home.getCategory);
  router.post('/home/addProduct',controller.home.addProduct);
  router.get('/home/getProduct',controller.home.getProduct);
  router.post('/home/addDetail',controller.home.addDetail);
  router.get('/home/getDetail',controller.home.getDetail);
};