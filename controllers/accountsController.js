
const { render } = require('express/lib/response');
const accountModels = require('../model/account');

class AccountController{
// [POST] /api/account/register
        create(req,res,next){
                   let userName = req.body.userName;
                   let password = req.body.password;
                accountModels.create({
                        userName,
                        password
                })
                .then(data=>{
                        res.json(data);
                })
        }
          // [GET] /api/account
          render(req,res,next){
          accountModels.find({})
                  .then(data=>{
                          res.json(data);
                  })
       
       }
        // [UPDATE] /api/account/:id
        update(req,res,next){
                let idAccount = req.params.id;
                let newPassword = req.body.newPassword;
            
                accountModels.findByIdAndUpdate(idAccount,{
                        password: newPassword
                })
                        .then(data=>{
                                res.json("update thành công");
                        })
                        .catch(err=>{
                                res.send(err);
                        })
        }
          // [DELETE] /api/account/:id
        delete(req,res,next){
                let idAccount = req.params.id;
                accountModels.deleteOne({_id: idAccount})
                .then((dataDelete)=>{
                        res.json(dataDelete);
                })
                .catch(err=>{
                        res.status(500).json("lỗi server");
                })
        }


      
}

module.exports = new AccountController;