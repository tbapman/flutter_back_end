module.exports = app => {
  const { router, controller } = app;
  // router.get('/getStudentList', controller.student.list); 
  router.post('/add', controller.student.add);
  router.post('/home/add',controller.home.add);
  router.get('/home/get',controller.home.get);
};