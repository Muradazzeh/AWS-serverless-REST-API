# AWS-serverless-REST-API

* in this lap we are going to make API gataway from amzon web service and connect it to the dynamo db

* we need to make CRUD without server using lambda function and API Gateway

* lets start we have to create database , and the table using dynamo db in AWS , then we have to start with API gateway as shown 

![link](./image/Screenshot%20(425).png)

* then we have to make routes from API gatway as shown for get and post update and delete 

![link](./image/Screenshot%20(423).png)

* then we have to creat lambda function and we add trigger for API gateway , for each method we have to create it is own lambda function 

> note that we have to add some permition for each lambda function 
* AdministratorAccess
* AmazonDynamoDBFullAccess
* AmazonAPIGatewayAdministrator


* then we will start testing using swagger inspector 

![link](./image/Screenshot%20(427).png)
![link](./image/Screenshot%20(428).png)
![link](./image/Screenshot%20(429).png)
![link](./image/Screenshot%20(430).png)


* I also add get by ID , and update and delete , update didnt work , delete worked well 

![link](./image/Screenshot%20(422).png)

* and the delete result 

![link](./image/Screenshot%20(424).png)
