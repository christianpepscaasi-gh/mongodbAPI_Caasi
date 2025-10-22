const validateProduct = (req, res, next) => {
    const { name, price, category, stock } = req.body;

    const errorrs = [];

    if ( !name || name.trim().length === 0) {
        errorrs.push('Product name is required');
    }
    if ( !price || isNaN(price) || price < 0) {
        errorrs.push('Valid price is required');
    }
    if ( !category || category.trim().length === 0) {
        errorrs.push('Category is required');
    }
    if ( stock !== undefined && (isNaN(stock) || stock < 0)) {
        errorrs.push('Stock must be a non-negative number');
    }
    if (errorrs.length > 0){
        return res.status(400).json({ errors });
    }

    next();


};

module.exports = validateProduct;