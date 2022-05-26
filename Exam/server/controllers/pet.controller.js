const Pet = require('../models/pet.model')



module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allDaPets => res.json({pet: allDaPets }))
        .catch(err => res.json({message: 'Something went wrong', error: err }));
}

module.exports.findOneSinglePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(oneSinglePet => res.json({pet: oneSinglePet }))
        .catch(err => res.json({message: 'Something went wrong', error: err }));
}

module.exports.createNewPet = (req, res) => {
    Pet.create(req.body)
        .then(newlyCreatedPet => res.json({pet: newlyCreatedPet }))
        .catch(err => res.json({message: 'Something went wrong', error: err }));
}

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },//specify which quote to update
        req.body,//specify the form information to update the quote with
        { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({pet: updatedPet }))
        .catch(err => res.json({message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingPet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet => res.json({results: deletedPet}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}