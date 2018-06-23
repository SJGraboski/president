const router = require("express").Router();
const playersController = require("../controllers/playersControllers");
const gameController = require('../controllers/gamesControllers');
var authController = require('../controllers/authController')


router.route('api/players')
    .get(playersController.findAll)
    .post(playersController.create);

router.route('api/players/:id')
    .get(playersController.findOne)
    .post(playersController.findOneAndUpdate);


 router.route('api/games')
    .create(gameController.create);

  router.route('api/games/:id')
    .post(gameController.findOneAndUpdate);  


// AUTHENTICATION ROUTES 
    router.post('/:username', function(req, res, next) {
        authController.login(req.body.username, req.body.password, function(err, result){
            if(err){  
                console.log(err);
                res.status(500).json({
                    success: 0,
                    error: err
                })
                return;
            }
    
            if(result){
                res.status(200).json({
                    success: 1,
                    data: {tokenID: result, username: req.body.username}
                });
            }else{
                res.status(401).json({
                    success: 0,
                    data: result
                });
            }
        });
    });
    
    router.post('/', function(req, res, next) {
        authController.register(req.body.username, req.body.password, function(err, result){
            if(err){  
                console.log(err);
                res.status(500).json({
                    success: 0,
                    error: err
                })
                return;
            }
            if(result){
                res.status(200).json({
                    success: 1,
                    data: {tokenID: result, username: req.body.username}
                });
            }else{
                res.status(401).json({
                    success: 0,
                    data: result
                });
            }
        });
    
    });   

 
    
 module.exports = router;   



