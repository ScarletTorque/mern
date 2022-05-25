const Product = require('../models/product.model')


module.exports.sayHello = (req,res)=>{
    res.json({msg: "wazaaa"});
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allDaProducts => res.json({product: allDaProducts }))
        .catch(err => res.json({message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => res.json({ product: oneSingleProduct }))
        .catch(err => res.json({message: 'Something went wrong', error: err }));
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
        .catch(err => res.json({message: 'Something went wrong', error: err }));
}

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },//specify which quote to update
        req.body,//specify the form information to update the quote with
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct => res.json({results: deletedProduct}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}