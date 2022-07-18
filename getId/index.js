`use strict`
const dynamoose =require("dynamoose")

const peopleSchema= new dynamoose.Schema({
    'id': String,
    'age':String,
    'major':String,
    'name':String

})

const peopleModel=dynamoose.model('people',peopleSchema)

exports.handler=async (event)=>{
    try{
    const queryStringParameters = event.queryStringParameters;
    const { id } = queryStringParameters;
const data=await peopleModel.get({id})
return{
    statusCode:200,
    body:JSON.stringify(data)
}
    }

    catch(error){
        return{
            statusCode:500,
            body:JSON.stringify({
                error:'True',
                message:error.message,
            })
        }
        


    }

}