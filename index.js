// blog_app/index.js
import express from "express";
import ArticleRouter from "./routes/ArticleRouter.js"; 
import mongoose from "mongoose"; 

mongoose.set('strictQuery', true);

// Connect to MongoDB
mongoose.connect('mongodb://mongoDb:27017/keploy', 
{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send({ message: "Hello from an Express API!" });
});
app.use("/api", ArticleRouter);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
