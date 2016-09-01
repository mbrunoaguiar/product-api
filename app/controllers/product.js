module.exports = (app) => {
  
    var db = app.get('models');
    var ProductCtrl = {};
    
    ProductCtrl.getProducts = (req, res) => {
        db.Product
            .findAll({
              include: [db.Category]  
            }).then(products => {
                res.json(products)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    ProductCtrl.createProduct = (req, res) => {
        
        var product = req.body;
        
        db.Product
            .create(product).then(product => {
                res.json(product)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    ProductCtrl.updateProduct = (req, res) => {
        
        var product = req.body;
        
        db.Product
            .update(product, {
                where: {id: product.id}
            }).then(product => {
                res.json(product)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    ProductCtrl.getProduct = (req, res) => {
        
        var id = req.params.id;
        
        db.Product
            .findById(id)
            .then(product => {
                res.json(product)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    ProductCtrl.deleteProduct = (req, res) => {
        
        var id = req.params.id;
        
        db.Product
            .destroy({
                where: {id: id}
            }).then(product => {
                res.json(product)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    return ProductCtrl;
    
};