const express = require("express"); //importing express
const cors = require("cors");//import CORS- cross origin resource sharing

const app = express();//create our app variable which is an instance of express
const port = 8000;//declaring a port for the backend api to run in (localhost:8000)

//NEED THIS TO HANDLE POST REQUESTS. HAVE THESE TWO LINES BEFORE THE ROUTES
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());//enable cors so that we can share resources back and forth bewteen the backend and frontend


require("./server/config/mongoose.config");

require("./server/routes/pet.routes")(app);


app.listen(port, () => console.log(`Listening on port: ${port}`));