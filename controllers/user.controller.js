const getUsers = (req, res) => {
  res.json({
    ok: true,
    data: [],
  });
};

module.exports = { getUsers, };
