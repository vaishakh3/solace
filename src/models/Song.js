import mongoose, {Schema, model, models} from 'mongoose';

const songSchema = new Schema({
    SongID: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    Title: {
        type: String,
        required: true
    },
    Artist: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        required: true
    },
    Duration: {
        type: Number,
        required: true
    }
});


export const Song =
    mongoose.models && "Song" in mongoose.models
        ? mongoose.models.Song
        : mongoose.model("Song", songSchema, "song");
export default Song;