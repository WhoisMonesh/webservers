// Logger middleware example
const logger = (req, res, next) => {
  console.log(${req.method}  - );
  next();
};

// Authentication middleware example
const authenticate = (req, res, next) => {
  const authToken = req.headers['authorization'];
  
  if (!authToken || authToken !== 'secret-token') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  next();
};

// Error handling middleware example
const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = {
  logger,
  authenticate,
  errorHandler
};
