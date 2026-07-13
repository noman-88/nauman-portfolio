const getHealth = (_req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'poth-foliyo-api',
  });
};

module.exports = {
  getHealth,
};
