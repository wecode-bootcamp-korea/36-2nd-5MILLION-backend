const instructorService = require("../services/instructorService");

const getInstructorDetail = async (req, res) => {
    try { 
        const { instructorId } = req.params;

        const getInstructorDetail = await instructorService.getInstructorDetail(instructorId);
        return res.status(200).json({ instructor : getInstructorDetail });

    } catch (err) {
        return res.status(err.statusCode || 500).json({ message : err.message });
    }
};

module.exports = {
    getInstructorDetail
};