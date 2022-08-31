function errorHandler(asyncController) {
    return async (req, res) => {
        try {
            await asyncController(req, res)
        } catch (err) {
            if (err.message === "KEY_ERROR" || "BAD_REQUEST") {
                res.status(err.statusCode ? err.statusCode : 400).json({ message : err.message });
            } else if (err.message === "INVALID_DATA_INPUT") {
                res.status(err.statusCode ? err.statusCode : 500).json({ message : err.message });
            } else if (err.message === "EXIST_USER" || "USER_DOES_NOT_EXIST") {
                res.status(err.statusCode ? err.statusCode : 409).json({ message : err.message });
            }
        }
    }

}

module.exports = errorHandler;