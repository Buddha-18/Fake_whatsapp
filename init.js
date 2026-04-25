const mongoose = require('mongoose');
const Chat = require("./models/chat.js")
main()
.then(()=>{
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats = [
    {
        from:"Buddha",
        to:"Lala",
        msg:"Give my money",
        created_at: new Date()
    },
    {
        from:"Shantu",
        to:"Saheb",
        msg:"Please sent the vedios",
        created_at: new Date()
    },
    {
        from:"suman",
        to:"mahi",
        msg:"Hey how are you",
        created_at: new Date()
    },
    {
        from:"Lala",
        to:"suman",
        msg:"when you give the money back?",
        created_at: new Date()
    },
    
]

Chat.insertMany(allChats);

