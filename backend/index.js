const express = require('express')
const app = express()
const port = 3001;
const AdminRouter = require('./Router/AdminnRouter');
const StudentRouter = require('./Router/StudentRouter');



app.use(express.json()); // to receive json format data
const cors = require('cors'); // npm i cors
app.use(cors()) 


const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/SunShine');

 }

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/admin', AdminRouter);
app.use('/student', StudentRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
