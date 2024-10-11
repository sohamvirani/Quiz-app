const errorHandler = (error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({
        success: false,
        message: error.message || 'An unexpected server error occurred'
    });
};

module.exports = errorHandler;
