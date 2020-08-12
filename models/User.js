const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  accessToken: {
    type: String
  },
  refreshToken: {
    type: String
  },
  displayName: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  image: {
    type: String
  },
  hours: {
    type: Number,
    default: 0
  },
  grade: {
    type: Number,
    default: 0
  },
  contacts: {
    type: Array,
    default: []
  },
  contacts_data: {
    type: Map,
    default: new Map()
  },
  chat_passwords: {
    type: Map,
    default: new Map()
  },
  subjects: {
    type: Array,
    default: []
  },
  bio: {
    type: String,
    default: ''
  },
  tutorAvailability: {
    type: Array,
    default: []
  },
  appointments: {
    type: Array,
    default: []
  },
  pastAppointments: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
