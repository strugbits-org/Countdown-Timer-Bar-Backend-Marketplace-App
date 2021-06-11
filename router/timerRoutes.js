var express = require("express");
var router = express.Router();
//importing controller
var timerController = require("../controller/timer")

//calling route forcreating timer
router.post("/createtimer", timerController.createTimer);

//calling delete api
router.delete("/deletetimer", timerController.deleteTimer);

//fetching timer
router.get("/gettimer", timerController.fetchTimer);

//calling api for timer update
router.post("/updatetimer", timerController.updateTimer);

//get a single timer through id
router.get("/singleTimer", timerController.fetchSingleTimer)



module.exports = router;