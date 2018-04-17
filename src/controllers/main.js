"use strict";
const //User = require('../models/User'),
      //util = require('../libs/utility'),
      coHandle = require('../common/coHandler');
//const seo = require('../config/seo');
module.exports = {
        home(req, res){
            coHandle(function*(){
                    res.render('home/index', {
                        seo: {
                            // title: seo.home.title,
                            // keywords: seo.home.keywords,
                            // description: seo.home.description,
                        },
                        //user: req.user ? req.user.processUser(req.user) : req.user,
                        messages: {
                            error: req.flash('error'),
                            success: req.flash('success'),
                            info: req.flash('info'),
                        }, // get the user out of session and pass to template
                    }); //render            
            })//end of coHandle
        }
};

