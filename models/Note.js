const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        maxlength: [40, 'Title must be at least 40 characters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'Description must be at least 200 characters']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);



