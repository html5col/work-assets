"use strict";
let moment = require('moment'),
    Project = require('../models/Project'),
    User = require('../models/User'),
    dirProxy = require('../db_proxy/dir');
const seo = require('../config/seo');
let coHandle = require('../common/coHandler');
const config = require('../common/get-config');
module.exports = {
    projectsList: (req, res) => {
        // let id = req.query.id;
        let projects;
        let user = req.user;
        coHandle(function * (){
           projects = yield Project.find().populate('author').exec();
           console.log(`projects: ${projects}`)
           
           projects = projects.map(function(v){
               v.author = v.author;
               v.createdAt = v.time(v.createdAt);
               return v;
           });
           //console.log(`projects: ${projects}`);
           res.render('admin/projects', {
            user: user ? user.processUser(user) : '',
            projects: projects,
            seo: {
                title: '管理项目列表',
                keywords: `项目列表`,
                description: `管理项目列表`,
            },
            messages: {
                  error: req.flash('error'),
                  success: req.flash('success'),
                  info: req.flash('info'),
            }
           });
        });
    },//projectsList

    weeklyrec: (req, res) => {
        let id = req.query.id;
        coHandle(function*(){
            let project = yield Project.findOne({_id: id}).exec();
            project.weeklyRecommend = !project.weeklyRecommend;
            yield project.save();
            return res.redirect('back');
        })

    },



}