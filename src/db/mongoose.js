const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        
    }   
})

const me = new User({
    // name: 'Talib Waseem',
    age: 27
})

me.save().then (()=>{
    console.log(me)
}).catch((error)=>{
    console.log(error)
})

const Task = mongoose.model('Task',{
    description:{
        type:String,
        required: true
    },
    completed:{
        type: Boolean
    }
})

// const task = new Task({
//     description: 'Learn the Mongoose Library',
//     completed:false
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })