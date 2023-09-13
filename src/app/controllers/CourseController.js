const Course = require("../models/Course");
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongose')  // Cach 2 de thay cho cach 1. Chi la tao ra 1 file rieng
class CourseController {
  // [GET] /home

  //[GET] /courses/:slug
  show(req, res) {
    Course.findOne({ slug: req.params.slug })
    .then(course => {
      res.render('courses/show', { course: mongooseToObject(course) });
    })
  }
}

module.exports = new CourseController();
