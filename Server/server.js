const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

const productsRoutes = require("./routes/products.routes");
const storesRoutes = require("./routes/stores.routes");
const categoriesRoutes = require("./routes/categories.routes");


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/products", productsRoutes);
app.use("/api/stores", storesRoutes);
app.use("/api/categories", categoriesRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



