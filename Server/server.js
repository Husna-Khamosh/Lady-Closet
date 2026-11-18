const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const productsRoutes = require("./routes/products.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use(logger);


app.use("/api/products", productsRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




