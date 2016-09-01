module.exports = (app) => {
    
    var ctrl = app.controllers.product;
    
    app.route('/api/product')
        .get(ctrl.getProducts)
        .post(ctrl.createProduct)
        .put(ctrl.updateProduct);
    
    app.route('/api/product/:id')
        .get(ctrl.getProduct)
        .delete(ctrl.deleteProduct);
    
};