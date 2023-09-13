const Course = require("../models/Course");
const { mutipleMongooseToObject } = require('../../util/mongose')  // Cach 2 de thay cho cach 1. Chi la tao ra 1 file rieng
class SiteController {
  // [GET] /home
  index(req, res, next) {
    Course.find({})
      .then((courses) => { 
        // courses = courses.map(course => course.toObject())    // Cach 1 pho thong dùng handlebars thì mỗi khi lấy dữ liệu từ database đều phải chuyển dữ liệu kiểu này
        res.render('home', { courses: mutipleMongooseToObject(courses) })
      })
      .catch(next);

    // res.json({name: 'minh'})
    // res.render('home');
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
