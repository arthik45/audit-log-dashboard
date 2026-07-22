import AuditLog from "../modal/AuditLog.js";

// Upload 10,000 logs
export const uploadLogs = async (req, res) => {
    try {
        const logs = req.body;

        if (!Array.isArray(logs) || logs.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Please provide an array of audit logs.",
            });
        }

        const result = await AuditLog.insertMany(logs);

        res.status(201).json({
            success: true,
            message: `${result.length} logs uploaded successfully.`,
            count: result.length,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get logs with search, filter, sort, pagination
export const getLogs = async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            search,
            severity,
            status,
            role,
            action,
            resourceType,
            sort = "timestamp",
            order = "desc",
        } = req.query;

        const query = {};

        // Search by actor or resource
        if (search) {
            query.$or = [
                { actor: { $regex: search, $options: "i" } },
                { resource: { $regex: search, $options: "i" } },
            ];
        }

        // Filters
        if (severity) query.severity = severity;
        if (status) query.status = status;
        if (role) query.role = role;
        if (action) query.action = action;
        if (resourceType) query.resourceType = resourceType;

        const skip = (Number(page) - 1) * Number(limit);

        const sortOption = {
            [sort]: order === "asc" ? 1 : -1,
        };

        const total = await AuditLog.countDocuments(query);

        const logs = await AuditLog.find(query)
            .sort(sortOption)
            .skip(skip)
            .limit(Number(limit));

        res.status(200).json({
            success: true,
            total,
            currentPage: Number(page),
            totalPages: Math.ceil(total / limit),
            logs,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};