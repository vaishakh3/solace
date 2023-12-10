import mongoose, { Schema, models, model } from 'mongoose';


const activitySchema = new Schema({
    ActivityID: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    UserID: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    ActivityType: {
        type: String,
        required: true
    },
    Timestamp: {
        type: Date,
        default: Date.now
    }
});


export const Activity =
    mongoose.models && "Activity" in mongoose.models
        ? mongoose.models.Activity
        : mongoose.model("Activity", activitySchema, "activity");
export default Activity;