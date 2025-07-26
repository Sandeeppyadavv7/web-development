const Discussion = require('../models/Discussion');

exports.addMessage = async (req, res) => {
  try {
    const msg = new Discussion(req.body);
    await msg.save();
    res.status(201).json(msg);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMessages = async (req, res) => {
  const messages = await Discussion.find({ course: req.params.courseId }).populate('user', 'name');
  res.json(messages);
};
