import mongoose, {Schema, models, model} from 'mongoose';

const questionSchema = new Schema({
    questionID: {
        type: String,
        required: true,
        unique: true
    },
    questionText: {
        type: String,
        required: true
    },
    options: {
        type: Schema.Types.Mixed,
        required: true
    }
});



export const Questions =
    mongoose.models && "Questions" in mongoose.models
        ? mongoose.models.Questions
        : mongoose.model("Questions", questionSchema, "questions");
export default Questions;