"use strict";
let moment = require('moment'),
    Project = require('../models/Project'),
    User = require('../models/User');

const seo = require('../config/seo');

const marked = require('marked');

let coHandle = require('../common/coHandler');

const config = require('../common/get-config');
    //Post = require('../models/Post'),
    // Comment = require('../models/Comment'),
    // postProxy = require('../db_proxy/post'),
    // tagProxy = require('../db_proxy/tag');
module.exports = {
      makeDir: (req,res) => {
        let categories = config.categories;
        
        res.render('form/singleProject', {
            user: req.user ? req.user.processUser(req.user) : '',
            categories: categories,
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
              res.redirect('/')
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

      }
    
}