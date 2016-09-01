module.exports = (app) => {
  
    var db = app.get('models');
    var CategoryCtrl = {};
    
    CategoryCtrl.getCategories = (req, res) => {
        db.Category
            .findAll()
            .then(categories => {
                res.json(categories)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    CategoryCtrl.createCategory = (req, res) => {
        
        var category = req.body;
        
        console.log(category);
        
        db.Category
            .create(category)
            .then(category => {
                res.json(category)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    CategoryCtrl.updateCategory = (req, res) => {
        
        var category = req.body;
        
        db.Category
            .update(category, {
                where: {id: category.id}
            }).then(category => {
                res.json(category)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    CategoryCtrl.getCategory = (req, res) => {
        
        var id = req.params.id;
        
        db.Category
            .findById(id)
            .then(category => {
                res.json(category)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    CategoryCtrl.deleteCategory = (req, res) => {
        
        var id = req.params.id;
        
        db.Category
            .destroy({
                where: {id: id}
            }).then(category => {
                res.json(category)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    return CategoryCtrl;
    
};