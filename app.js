



import expres from "express";
import { sequelize } from "./models/index.js"
import userRoute from "./routes/userRoute.js"

import suggestionRoute from "./routes/suggestionRoute.js"
import moodRoute from "./routes/moodRoute.js"

import dotenv from "dotenv"
dotenv.config()

const app = expres()

const PORT = process.env.PORT

//parse the json body
app.use(expres.json())  

// test the route
app.get("/", (req, res) => {
    res.send("moodmate api is live")
})

// routes
app.use("/api/user", userRoute)
app.use("/api/moods", moodRoute)
app.use("/api/suggestions", suggestionRoute)  

 const startSever = async () => {  

    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({ alter: true})    
    console.log("database synced")

    //   await sequelize.sync({ force: true})
    //   console.log("database dropped and recreated")
      
    app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)  
    })  

    } catch (error) {   
    console.error('Unable to connect to the database:', error);
    }  
 }  


startSever()    

export default app  


// will start authentication in mthe morning
