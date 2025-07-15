

const express = require('express'); 
const app = express();          

const PORT = 8080;

app.set('view engine', 'ejs');


//  Middleware to parse form POST data
app.use(express.urlencoded({ extended: false }));

const messages = require('./messages');

app.listen(PORT, () => 
  console.log(`Server is running on http://localhost:${PORT}`)
);

app.get('/', (req, res) => {
console.log('Received a request for the root path');
  //res.sendStatus(500).json({message:"error"}); // This line will cause an error
  res.render('index',{messages: messages});
});


const userRouter = require('./routes/users');
app.use("/users", userRouter);

