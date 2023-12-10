import mongoose, {Schema, models, model} from 'mongoose';


const userMoodSchema = new Schema({
    AssessmentID: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    UserID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    DetectedMood: {
        type: String,
        required: true
    },
    UserCorrectedMood: {
        type: String,
        required: false
    },
    AssessmentDate: {
        type: Date,
        default: Date.now
    }
});

export const UserMood =
    mongoose.models && "UserMood" in mongoose.models
        ? mongoose.models.UserMood
        : mongoose.model("UserMood", userMoodSchema, "usermood");
export default UserMood;