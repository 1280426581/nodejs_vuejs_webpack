const express=require('express');
const mysql = require('mysql');
var db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'cuiqingjin',
  database: 'static'
});
const pathlib=require('path');
const fs=require('fs');
module.exports = function() {
  var router = express.Router();
  router.get('/get_news',function(req,res){
    db.query('select * from news',function(err,data){
      if (err) {
        console.error(err);
        res.json({code: '1',msg: '数据库错误'}).end();
      } else{
        res.json(data).end();
      }
    })
  });

  router.post('/login',function(req,res){
    console.log('登录post数据',req.body);
    var username = "'" + req.body.user + "'";
    var password=req.body.password;
    var sql=`select * from user where username=${username}`;
    console.log(sql);
    db.query(sql,function(err,data){
      if(err){
        res.json({code: '1',msg: '数据库错误'});
        console.log(err);
      }else{
          if(data.length==0){
            res.json({code: '1',msg: '没有这个人'});
          }else{
            // console.log(data[0].password,password);
            if(data[0].password==password){
              req.session.admin_id=data[0].ID;
              req.session.username=data[0].username;
              console.log(req.session.admin_id,req.session.username);
              res.json({code: '2',msg: '登陆成功',user:req.body.user});
            }else {
              res.json({code: '3',msg: '密码错误',user:req.body.user});
            }
          }
        }
    })
  });

  router.post('/get_username',function(req,res){
    console.log(req.session.username);
    if (!req.session.username) {
      res.json({code: '1',msg: '没有登陆'});
    } else {
      res.json({code: '2',msg: '登陆成功',user:req.session.username});
    }
  });
  router.post('/logout',function(req,res){
    req.session=null;
    res.json({code: '1',msg: '退出成功！'});
  });

  router.post('/userreg',function(req,res){
    console.log('注册post数据',req.body);
    var username = req.body.user;
    var password=req.body.password;
    var sql=`insert into user (username,password) value('${username}','${password}')`;
    db.query(sql,function(err,data){
      if(err){
        res.json({code: '1',msg: '数据库错误'});
        console.log(err);
      }else{
        res.json({code: '2',msg: '注册成功',user:req.body.user});
      }
    })
  });

  router.post('/search',function(req,res){
    console.log('搜索post数据:',req.body);
    var searchtext=req.body.searchtext;
    var searchsql= `select * from news where title like '%${searchtext}%' `;
    console.log(searchsql);
    db.query(searchsql,function(err,data){
      if(err){
        res.json({code: '1',msg: '数据库错误'});
        console.log(err);
      }else{
        res.json(data).end();
      }
    })
  });
  router.post('/newsshow',function(req,res){
    console.log('文章post数据:',req.body);
    var articleid=req.body.id;
    if (req.body.id == null) {
      res.redirect('/');
    }else{
      var newsshowsql = `select * from news where ID=${req.body.id}`;
      console.log(newsshowsql);
      db.query(newsshowsql,function(err,data){
      if(err){
        res.json({code: '1',msg: '数据库错误'});
        console.log(err);
      }else{
      res.json(data).end();
      }
      })
    }
  });
  router.post('/article',function(req,res){
    console.log(req.body);
    var title=req.body.title;
      var content=req.body.content;
      var username=req.session.username;
    console.log('文章信息：',title,content,username);
    console.log('文件信息',req.files[0]);
    var oldfilename=req.files[0].filename;
      var oldfilepath=req.files[0].path;
      var ext=pathlib.parse(req.files[0].originalname).ext;
      var newfilename=req.files[0].filename+ext;
      var newfilepath=req.files[0].path+ext;
      console.log("文件名称：",oldfilename,oldfilepath,newfilename,newfilepath);
            fs.rename(oldfilepath,newfilepath,function(err){
        if(err){
        res.status(500).send('file opration error').end();
        }else{
          var sql=`insert into news (title,content,author,img) value('${title}','${content}','${username}','${newfilename}')`
          console.log('添加文章',sql);
          db.query(sql,function(err,data){
            if(err){
              console.log(err);
              res.status(500).send('database error').end();
            }else{
              res.redirect('/user');
            }
          })
        }
      })
  })
  return router;
};
