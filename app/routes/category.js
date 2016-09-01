module.exports = (app) => {
    
    var ctrl = app.controllers.category;
    
    app.route('/api/category')
        .get(ctrl.getCategories)
        .post(ctrl.createCategory)
        .put(ctrl.updateCategory);
    
    app.route('/api/category/:id')
        .get(ctrl.getCategory)
        .delete(ctrl.deleteCategory);
    
};