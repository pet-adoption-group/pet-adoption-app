// server/models/Pet.js
import mongoose from 'mongoose';

const petSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  available: { type: Boolean, default: true },
});

const Pet = mongoose.model('Pet', petSchema);

export default Pet;
