const {MongoClient} = require('mongodb');
const uri ="mongodb://localhost:27017";
const client = new MongoClient(uri);

const databasename = "sample_data";
const collectionName = "data_insertion";

async function insertData(data){
    try{
        await client.connect();
        const database =client.db(databasename);
        const collection = database.collection(collectionName);

        const result = await collection.insertOne(data)
        console.log(`Doccument inserted with Id : ${result.insertedId}`);
    }catch(error){
        console.error(error);
    }finally{
        await client.close();
    }
}
const myData ={name:"Jone Doe",age:30 , address:"Hinjawadi Phase one ",email:"kishan1156@gmail.com"};
insertData(myData);
