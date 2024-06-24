const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!']
    },
    gender: {
        type: String
    },
    birthDate: {
        type: Date,
        required: [true, 'Please tell us your birthday!']
    },
    city: String,
    clientId: { type: String, unique: true, default: uuidv4 }
})

clientSchema.virtual('age').get(function() {
    const today = new Date();
    const birthDate = new Date(this.birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    // Ajuste se o aniversário ainda não tiver ocorrido no ano atual
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;