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
    const queryStringParameters = event.queryStringParameters;
    const { id } = queryStringParameters;

    const result = await peopleModel.delete({ id });
response.statusCode=200;
response.body=JSON.stringify(`the user with the id ${id} deleted successfuly`)
}
catch(error){
response.statusCode=500;
response.body=JSON.stringify(error.message)
}
return response
}