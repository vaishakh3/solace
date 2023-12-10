import mongoose from 'mongoose'; 

const preferenceSchema = new mongoose.Schema({
    PreferenceID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    SongID: {
        type: String,
        required: true
    },
    Liked: {
        type: Boolean,
        default: false
    },
    Skipped: {
        type: Boolean,
        default: false
    },
    PlayedCount: {
        type: Number,
        default: 0
    }
});

const Preference =
    mongoose.models && "Preference" in mongoose.models
        ? mongoose.models.Preference
        : mongoose.model("Preference", preferenceSchema, "preference");

export default Preference;