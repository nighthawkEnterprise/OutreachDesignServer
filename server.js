const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cors =require('cors');
const mongoose = require('mongoose');
const registerRoutes = express.Router();


app.use(cors());
app.use(bodyParser.json());
app.use('/register', registerRoutes);
let registration = require('./models/Models');

mongoose.connect('mongodb+srv://outreach:outreach21@cluster0.sumbh.mongodb.net/<dbname>?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', function(){
    console.log("Mongodb connected!")

})
registerRoutes.route('/').get(function(req, res) {
    console.log("Outreach Design")
    res.send({message:"Welcome to the backend!"})
})
registerRoutes.route('/register').post(function(req, res) {
    let newForm = {
        User_name: "simret",
        User_email: "Simret@gmail.com",
        User_password: 9798
    }
        let newRegistration = new registration(newForm);
        console.log("new registration form", newRegistration)
            newRegistration.save()
                .then(res => {
                res.json({message: 'succesful!'});
                })
                .catch(err => {
                    res.send(err);
                })
        })

registerRoutes.route('/retrive').get(function(req,res){
    registration.find()
    .then(registration =>{
        res.json(registration);
    })
})

registerRoutes.route('/delete').post(function(req,res){
    registration.findByIdAndRemove(id)
    .then(deleted => {
        console.log(deleted)
    } )
})
app.listen(process.env.PORT || 3002, () =>{

 console.log("Server is running in port 3004")
})