import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import dns from "node:dns/promises";
import router from "./routes/shortUrlRoutes.js";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config();
connectDB();
const app = express();
// Parse incoming JSON request bodies (application/json).
app.use(express.json());
// Parse form data from HTML forms (application/x-www-form-urlencoded).
app.use(express.urlencoded({ extended: true }));
// Allow frontend at localhost:5173 to call this API with cookies/auth headers.
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use("/api", router);
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Hello World its me after configuring tsconfig.json and package.json");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map