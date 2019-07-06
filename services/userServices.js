const userSchema = require("../models/user");
const mongoose = require("mongoose");

const saveUser=(params)=>{
    let newUser=new userSchema(params)
    return newUser.save()
}


const getUsers = function(){
    return userSchema.find().exec();
    // sort({'createdAt':-1}).skip(parseResult.skip).limit(parseResult.limit).populate('category', 'name').populate('subcategory','name').populate('company'
}

module.exports={
    saveUser,
    getUsers
}