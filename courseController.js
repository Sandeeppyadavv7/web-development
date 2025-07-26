const Course = require('../models/Course');

exports.getAllCourses = async (req, res) => {
  const courses = await Course.find().populate('instructor', 'name');
  res.json(courses);
};

exports.createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
