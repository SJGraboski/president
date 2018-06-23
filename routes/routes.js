const router = require("express").Router();
const playersController = require("../controllers/playersControllers");
const gameController = require('../controllers/gamesControllers');


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

 
    
 module.exports = router;   



