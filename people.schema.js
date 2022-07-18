`use strict`
const dynamoose =require("dynamoose")

const peopleSchema= new dynamoose.Schema({
    'id': String,
    'age':String,
    'major':String,
    'name':String

})

module.exports=dynamoose.model('people',peopleSchema)