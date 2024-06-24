const mongoose = require('mongoose');

const citySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'A city must have a name'],
        },
        state: {
            type: String,
            required: [true, 'A city must have a state']
        }
    }
)

const City = mongoose.model('City', citySchema);

module.exports = City;
