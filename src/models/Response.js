import { Schema, model, models } from 'mongoose';

const ResponseSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  questionID: {
    type: Number,
    required: true
  },
  answer: {
    type: String,
    enum: ['A', 'B', 'C', 'D'],
    required: true
  },
  responseTime: {
    type: Number,
    required: true
  },
  hoverCount: {
    type: Number,
    required: true
  },
  selectCount: {
    type: Number,
    required: true
  }
});

export const Response =
   models && "Response" in models
        ? models.Response
        : model("Response", ResponseSchema, "response");
export default Response;