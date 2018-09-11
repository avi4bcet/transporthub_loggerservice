var db=require('../dbconnection');

var Task={

getAllUsers:function(callback){

return db.query("Select * from tbl_users order by id desc",callback);

},

getLoginCheck:function(Task,callback) {
//console.log(SELECT count(id) FROM tbl_users where email=avi4bcet@gmail.com AND password=Pass@1234);



return db.query("SELECT id FROM tbl_users where email=? AND password=?",[Task.username,Task.pass],callback);

},


//getAllPartDetails:function(callback){

//return db.query("SELECT * FROM tbl_part_type,tbl_part_details,tbl_bin where tbl_part_type.id=tbl_part_details.part_id AND tbl_bin.id=tbl_part_details.binname ORDER BY tbl_part_details.id DESC",callback);

//},



addUsers:function(Task,callback){
   //console.log("inside service");
   //console.log(Task);
   var name = Task.fname+" "+Task.lname;
   console.log(name);
   Task.id = '';
return db.query("Insert into tbl_users values(?,?,?,?,?,?)",[Task.Id,name,Task.email,Task.password,Task.phone,Task.aadhar],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
deleteParts:function(id,callback){
    return db.query("delete from tbl_part_type where id=?",[id],callback);
},
updateTask:function(id,Task,callback){
    return  db.query("update tbl_part_type set partname=? where id=?",[Task.partname,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from tbl_part_type where Id in (?)",[delarr],callback);
}
};
module.exports=Task;