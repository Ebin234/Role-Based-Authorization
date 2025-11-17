const getAdminPage = (req, res) => {
  try {
    const user = req.user;
    res.json({
      data: user,
      message: `${user.email} can access the admin page`,
    });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

const getManagerPage = (req, res) => {
  try {
    const user = req.user;
    res.json({
      data: user,
      message: `${user.email} can access the manager page`,
    });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

const getUserPage = (req, res) => {
  try {
    const user = req.user;
    res.json({
      data: user,
      message: `${user.email} can access the user page`,
    });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

module.exports = { getAdminPage, getManagerPage, getUserPage };