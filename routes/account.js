const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountsController');
// register
    router.post('/register',accountController.create);

 // lấy dữ liệu
 router.get('/',accountController.render)
//tạo mới dữ liệu
router.post('/',(req,res,next)=>{
        
})
//cập nhật dữ liệu
router.put('/:id',accountController.update)
//xóa dữ liệu
router.delete('/:id',accountController.delete)


module.exports = router;