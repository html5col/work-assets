"use strict";
let moment = require('moment'),
    Project = require('../models/Project'),
    User = require('../models/User');
const marked = require('marked');
const coHandle = require('../common/coHandler');
const seo = require('../config/seo');
const config = require('../common/get-config');

module.exports = {
      makeDir: (req,res) => {
        let categories = config.categories;
        coHandle(function*(){
            let weeklyRec = yield Project.findOne({weeklyRecommend: true}).exec();
            res.render('form/singleProject', {
                user: req.user ? req.user.processUser(req.user) : '',
                categories: categories,
                data:{weeklyRec},
                seo: {
                    title: seo.postProject.title,
                    keywords: seo.postProject.keywords,
                    description: seo.postProject.description,
                },
                messages: {
                      error: req.flash('error'),
                      success: req.flash('success'),
                      info: req.flash('info'),
                }
            });  
        })

      },

      postDir: (req, res) => {
          let user = req.user ? req.user.processUser(req.user) : '';
          let body = req.body;
          body.detail = marked(body.detail);
          
          let project = new Project(body);
          if(user){
              project.author = user._id;   
          }
          
          coHandle(function * (){
              yield project.save();
              res.redirect('/dir/detail?id=' + project._id);
          });
      },

      detail: (req, res) => {

        let id = req.query.id;
        let project,author;
        let user = req.user;
        coHandle(function * (){
           project = yield Project.findOne({_id: id}).populate('author').exec();
           console.log(`project: ${project}`);
           res.render('dir/detail', {
            user: user ? user.processUser(user) : '',
            project: project,
            seo: {
                title: project.projectName + ' | ' + seo.detail.title,
                keywords: `${project.projectName},${project.projectName + ' 项目详情'}`,
                description: `${project.brief}`,
            },
            messages: {
                  error: req.flash('error'),
                  success: req.flash('success'),
                  info: req.flash('info'),
            }
           });
        });

      },


      


    
}