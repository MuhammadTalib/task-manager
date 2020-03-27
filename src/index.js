

const express = require('express') 
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT;

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)  

app.listen(port,()=>{
    console.log('Server is up on port '+port)
})

// const multer = require('multer')
// const upload = multer({
//     dest: 'images'
// })
// app.post('/upload',upload.single('upload') ,(req,res)=>{
//     res.send() 
// })


// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('GET requests are disable ')
//     }else {
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down. cHECK back soon')
// })


// const Task = require('./models/task')

// const main = async()=>{
//     // const task = await Task.findById('5e798967b918791f70f08aec')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)


//     const user = await  User.findById('5e7987a06ac2121778daaa5a')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()

//Hashing
// const bcrypt = require('bcryptjs')

// const myFunction = async()=>{
//     const password = "Red12345!"
//     const hashedPassword = await bcrypt.hash(password,8)
    
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare("Red1234 5!",hashedPassword)
//     console.log(isMatch)

// }

// myFunction()