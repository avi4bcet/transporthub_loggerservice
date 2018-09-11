var db=require('../dbconnection');

var Task={

getAllGroups:function(callback){

return db.query("Select * from tbl_grp order by id desc",callback);

},
getContactById:function(id,callback){

    return db.query("select * from tbl_contact where group_id=?",[id],callback);
},


//getAllPartDetails:function(callback){

//return db.query("SELECT * FROM tbl_part_type,tbl_part_details,tbl_bin where tbl_part_type.id=tbl_part_details.part_id AND tbl_bin.id=tbl_part_details.binname ORDER BY tbl_part_details.id DESC",callback);

//},



addContact:function(Task,callback){

   //console.log("inside service");
 // console.log(Task);
   
   var id='';
	var status = 'A';

return db.query("Insert into tbl_contact values(?,?,?,?,?,?)",[id,Task.contactName,Task.contactNumber,Task.grpname,Task.usersid,status],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
deleteContact:function(id,callback){

    return db.query("delete from tbl_contact where Id=?",[id],callback);
},
updateContact:function(id,Task,callback){

	console.log(Task);
	
    return  db.query("update tbl_contact set status=? where Id=?",[Task,id],callback);
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