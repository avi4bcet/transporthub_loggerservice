var express = require('express');
var router = express.Router();
var Task=require('../models/Geo');

router.get('/',function(req,res,next){



 Task.getGeoLog(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
 
    });
	

});


router.get('/:username/:pass',function(req,res,next){


 Task.getLoginCheck(function(req,res,next){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(req.body);
        }
 
    });
	

});



router.post('/login',function(req,res,next){

        Task.getLoginCheck(req.body,function(err,rows){

            //console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(rows);//or return count for 1 & 0
            }
        });
});



router.post('/',function(req,res,next){

        Task.addUsers(req.body,function(err,count){

            //console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(req.body);//or return count for 1 & 0
            }
        });
});
 router.post('/:id',function(req,res,next){
  Task.deleteAll(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
  });
});
router.delete('/delete/(:id)',function(req,res,next){

        Task.deleteParts(req.params.id,function(err,count){

            if(err)
            {
				console.log('error');
                res.json(err);
            }
            else
            {
				console.log(count);
                res.json(count);
            }

        });
});
router.put('/:id',function(req,res,next){

    Task.updateTask(req.params.id,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;