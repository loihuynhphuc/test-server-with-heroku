const accountRouter =  require('./account');

const routerAuthor = require('./author'); 

function router(app){

        app.use('/v1/author',routerAuthor);
        
        app.use('/api/account',accountRouter);

        app.use('/',accountRouter);
}

module.exports = router;