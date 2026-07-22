import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema({
    actor : String,
    role: String,
    action: String,
    resource: String,
    resourceType: String,
    ipAddress: String,
    region: String,
    severity: String,
    status: String,
    timestamp: Date,
}, { timestamps: true })
export default mongoose.model("AuditLog", auditLogSchema)