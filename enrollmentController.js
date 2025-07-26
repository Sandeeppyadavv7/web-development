const Enrollment = require('../models/Enrollment');

exports.enrollUser = async (req, res) => {
  try {
    const enrollment = new Enrollment(req.body);
    await enrollment.save();
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEnrollments = async (req, res) => {
  const data = await Enrollment.find().populate('user course');
  res.json(data);
};
