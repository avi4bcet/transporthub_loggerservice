var db=require('../dbconnection');

var Task={

getAllGroups:function(callback){

return db.query("Select * from tbl_bin order by id desc",callback);

},
getGroupById:function(id,callback){

    return db.query("select * from tbl_bin where Id=?",[id],callback);
},
addTask:function(Task,callback){
 var id='';  

 console.log(Task);
return db.query("Insert into tbl_bin values(?,?,?,?,?)",[id,Task.bins_name,Task.bins_number,Task.box_name,Task.box_number],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
//console.log(Task);
},
deleteTask:function(id,callback){
    return db.query("delete from tbl_bin where id=?",[id],callback);
},
updateTask:function(id,Task,callback){
    return  db.query("update tbl_bin set bins_name=?,bins_number=?, box_name=?, box_number=? where id=?",[Task.bins_name,Task.bins_number,Task.box_name,Task.box_number,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from tbl_bin where Id in (?)",[delarr],callback);
}
};
module.exports=Task;