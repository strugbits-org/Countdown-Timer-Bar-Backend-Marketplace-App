var timerSchema = require("../models/timerSchema");
//var targetSchema = require("../models/targetconfiguration")

//creating timer by adding adta in db
exports.createTimer = async (req,res,next) => {
    try{
        console.log("timer created");
        console.log(req.body)
        var {name, messageBeforeTimer, messageAfterTimer, linkUrl, barClickable, buttonText, newTab, closeButton, timer, styleSchema, targetSchema} = req.body
        const timerData = new timerSchema({
            name,
            messageBeforeTimer,
            messageAfterTimer,
            linkUrl,
            barClickable,
            buttonText,
            newTab,
            closeButton,
            timer,
            styleSchema,
            targetSchema
        })
        await timerData.save();
        console.log('targetSchema',targetSchema)
        return res.status(200).json({timerData: timerData})
    }catch (err){
        console.log(err);
        res.status(400).json({msg: "Timer Data doesn't added"})

    }
  

}

//deleting timer
exports.deleteTimer = async (req,res,next) => {
    console.log("deleted");
    var id = req.body.id;
    console.log(id);
    var resultDeleted = await timerSchema.findByIdAndRemove(id)
    console.log(resultDeleted);
    if(resultDeleted){
        return res.status(200).json({msg: "Timer Deleted"});
    }else{
         return res.status(400).json({msg: "Timer not deleted"})
    }
}

//fetch timer data
exports.fetchTimer = async (req,res,next) => {
    try{
        var displayTimer = await timerSchema.find()
        console.log(displayTimer)
        if(displayTimer){
            return res.status(200).json({ timerData: displayTimer})
        }
    }catch(err) {
        res.status(400).json({msg: "Timer data doesnt exist"})
            
    }

}


//update timer
exports.updateTimer = async (req,res,next) => {
    try{
        var id = req.query.id;
        console.log(id);
        var {name, messageBeforeTimer, messageAfterTimer, linkUrl, barClickable, closeButton, timer, styleSchema, targetSchema} = req.body
        timerSchema.findByIdAndUpdate(id, {
           name,
           messageBeforeTimer,
           messageAfterTimer,
           linkUrl,
           barClickable,
           closeButton,
           timer,
           styleSchema,
           targetSchema
        }, (result) => {
            console.log("timer updated", result);
            res.status(200).json({timerData: result})
        });
    
    }catch(err) {
    return res.status(400).json({msg: "Timer doesn't updated!"})
}
    
}


//fetch a single timer
exports.fetchSingleTimer = (req,res,next) => {
    try{
        const id = req.query.id;
        console.log(id);
        timerSchema.findById(id).then(result => {
            console.log(result);
            res.status(200).json({timerData: result})
        })
    
    }catch(err){
        res.status(400).json({msg: "Error"})
    }
   
}