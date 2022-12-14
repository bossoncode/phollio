import mongoose from "mongoose";
const { Schema } = mongoose;

const linkSchema = new Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  userId: {
    type: String,
  },
  isOn: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Link = mongoose.model("Link", linkSchema);

export default Link;
