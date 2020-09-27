function logger(req, res, next) {
    console.log(`[Logger]: Requsting to ${req.method} ${req.url}`);
    next();
}

module.exports = logger;