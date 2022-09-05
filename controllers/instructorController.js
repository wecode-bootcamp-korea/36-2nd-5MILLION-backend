const instructorService = require("../services/instructorService");

const getInstructors = async (req, res) => {
    try {
        const { limit, offset } = req.query;

        if (!limit || !offset) {
            return res.status(400).json({ message : "KEY_ERROR"});
        }
        const getInstructors = await instructorService.getInstructors(limit, offset);
        return res.status(200).json({ instructors : getInstructors});

    } catch (err) {
        return res.status(err.statusCode || 500).json({ message : err.message });
    }
};

module.exports = {
    getInstructors
};
