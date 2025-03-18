import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true },
  fitnessGoals: { type: [String], required: true },
  fitnessGoalTimeframe: { type: String, required: true },
  fitnessLevel: { type: String, required: true },
  exerciseFrequency: { type: String, required: true },
  previousTraining: { type: String, required: true },
  workoutPreferences: { type: [String], required: true },
  workoutLocation: { type: String, required: true },
  workoutDuration: { type: String, required: true },
  workoutDays: { type: String, required: true },
  physicalLimitations: { type: String },
  conditions: { type: [String], required: true },
  motivation: { type: String, required: true },
  trainingStyle: { type: String, required: true },
  workoutAloneOrGroup: { type: String, required: true },
  trackProgress: { type: String, required: true },
  dietaryRecommendations: { type: String, required: true },
  updateFrequency: { type: String, required: true },
  additionalNotes: { type: String }
});

export const Contact = mongoose.model("Contact", contactSchema);