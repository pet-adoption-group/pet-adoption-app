// server/models/Appointment.js
import mongoose from 'mongoose';

const appointmentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'canceled'],
    default: 'pending',
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
