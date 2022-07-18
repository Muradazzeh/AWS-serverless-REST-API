`use strict`
const dynamoose =require("dynamoose")

const peopleSchema= new dynamoose.Schema({
    'id': String,
    'age':String,
    'major':String,
    'name':String

})

const peopleModel=dynamoose.model('people',peopleSchema)

exports.handler=async(event)=>{
let {id,age,major,name}=event.queryStringParameters;
let newRecord={id,age,major,name}
let response={statusCode:null,body:null}
try{
let posted=await peopleModel.create(newRecord)
response.statusCode=200;
response.body=JSON.stringify(posted)
}
catch(error){
response.statusCode=500;
response.body=JSON.stringify(error.message)
}
return response
}