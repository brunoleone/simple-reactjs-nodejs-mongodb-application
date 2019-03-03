const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    // Get Paginated
    async index(req, res) {
        const {
            page = 1
        } = req.query;
        const products = await Product.paginate({}, {
            page,
            limit: 10
        });
        return res.json(products);
    },

    // Details
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    // Create
    async story(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    // Update
    async update(req, res) {
        const produt = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(produt);
    },

    // Delete
    async destroy(req, res) {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.send();
    }
};