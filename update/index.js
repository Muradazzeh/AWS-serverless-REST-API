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
    

    
let response={statusCode:null,body:null}
try{
    const request = JSON.parse(event.body);
    const { id } = request;

    const result = await peopleModel.delete({ id });
response.statusCode=200;
response.body=JSON.stringify(result)
}
catch(error){
response.statusCode=500;
response.body=JSON.stringify(error.message)
}
return response
}