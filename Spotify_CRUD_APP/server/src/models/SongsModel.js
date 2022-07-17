const mongoose = require('mongoose');


const SongSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    DateOfRelease: {
        type:String,   
        required: true
    },
    Cover:{
        data: Buffer,
        contentType: String
        
    },
    Artist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    }]
},
{timestamps: true}
);
module.exports = mongoose.model('Song', SongSchema);

    
