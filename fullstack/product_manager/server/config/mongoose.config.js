const mongoose = require('mongoose');//importing mongoose

mongoose.connect('mongodb+srv://munsonm151:<password>@cluster0.fmal6.mongodb.net/product_manager_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));