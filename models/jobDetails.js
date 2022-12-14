const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobDetails = new Schema(
  {
    companyName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    hiringStatus: { type: String },
    jobDateAdded: { type: String },
    dateApplied: { type: String },
    applicationStatus: { type: String, required: true },
    contactEmail: { type: String },
    notes: { type: String },
    urls: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('jobDetails', JobDetails)
