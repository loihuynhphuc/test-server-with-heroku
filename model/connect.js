const mongoose = require('mongoose');

main().catch(err => console.log(err))
        .then(()=>{
            console.log("connect successfully");
        });

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test_db');
}