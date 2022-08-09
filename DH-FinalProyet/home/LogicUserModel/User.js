const fs = require('fs');

const User = {
    filename: './data/users.json',
    getData: function(){
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'))
    },
   findAll: function(){
    return this.getData();
   },
   generateId: function(){
    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
    if(lastUser){
        return lastUser.id + 1;
    }else{
        return 1
    }
   },
   findByField: function(field,text){
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field] == text );
    return userFound;
   },
   findByPk : function(id){
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser.id == id);
    return userFound;
   },
   create: function(userInfo){
    let allUsers= this.findAll();
    let newUser = {
        id: this.generateId(),
        //spread operator (agrega lo que pongas despues de los puntitos en el obj)
        ... userInfo
    }
    allUsers.push(newUser);
    fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ' '));
    return newUser;

},
delete: function(id){
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter(oneUser => oneUser.id != id);
    fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null , ' '));
    return true; // es obligatorio?
}
}
module.exports = User;