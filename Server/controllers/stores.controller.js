const fs = require("fs");
const path = require("path");
const storePath = path.join(__dirname, "../data/stores.json");

const storesData = fs.readFileSync(storePath, "utf-8");
const stores = JSON.parse(storesData);

function getAllStores(req, res){
    res.json({
        success : true,
        count: stores.length,
        data: stores
    })
}

function getStoresById(req, res){
    const StoreId = req.params.id;

    const store = stores.find(function(item){
        return item.id === Number(StoreId);
    });

    if (!store){
        return res.status(404).json({
            success : false,
            message: "Store Not found"
        })
    }
    
    return res.json({
    success: true,
    data: store
    });

}

module.exports = {
    getAllStores,
    getStoresById
};