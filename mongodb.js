
//Start database --> /users/talib/mongodb/bin/mongod.exe --dbpath=/users/talib/mongodb-data

//CRUD create update delete and update

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID()

const { MongoClient,ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL,{useUnifiedTopology: true, useNewUrlParser:true },(error,client)=>{
    if(error){
       return console.log('Unable to connect to Database')
    }

    const db = client.db(databaseName)
//INSERT
    // db.collection('users').insertOne({
    //     _id: id,
    //     name:'Vikran',
    //     age:22
    // },(error,result)=>{
    //     if(error){
    //     }
    // }) 

    // db.collection('users').insertMany([
    //     {
    //         name:'Jen',
    //         age:28
    //     },{
    //         name:"Ganthar",
    //         age:27
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert users!')
    //     }
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Clean the house',
    //         completed: true
    //     },{
    //         description:'Pot the plants',
    //         completed: false
    //     },{
    //         description:'Renew inspection',
    //         completed: false
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    // })

//READ
    // db.collection('users').findOne({_id:new ObjectID('5e6a7e897fa9c321f0aaba83')},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age:22}).toArray((error,users)=>{
    //     console.log(users)
    // })

    // db.collection('users').find({age:22}).count((error,count)=>{
    //     console.log(count)
    // }) 

    // db.collection('tasks').findOne({_id:new ObjectID('5e6a7b735919b80a003e45ce')},(error,task)=>{
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
    //     console.log(tasks)
    // })
    
//UPDATE

    // db.collection('users').updateOne({
    //     _id:new ObjectID('5e6a7e897fa9c321f0aaba83')
    // },{
    //     $inc:{
    //         age:1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch(error=>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set:{
    //         completed: true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch(error=>{
    //     console.log(error)
    // })

//DELETE
    // db.collection('users').deleteMany({
    //     age:27
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description:'Clean the house'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})
