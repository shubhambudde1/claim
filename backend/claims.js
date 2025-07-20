const express = require('express');
const router = express.Router();
const User = require('./User');
const ClaimHistory = require('./ClaimHistory');

router.post('/', async (req, res) => {
  const { userId } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const points = Math.floor(Math.random() * 10) + 1;
  user.totalPoints += points;
  await user.save();

  const history = new ClaimHistory({ userId, userName: user.name, points });
  await history.save();

  res.json({ user, points });
});

router.get('/leaderboard', async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
});

router.get('/history', async (req, res) => {
  const history = await ClaimHistory.find().sort({ claimedAt: -1 });
  res.json(history);
});

module.exports = router;