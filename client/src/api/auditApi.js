import axios from "./axios";

export const getLogs = (params) => {
    return axios.get("/logs", { params });
};

export const uploadLogs = (data) => {
    return axios.post("/logs/upload", data);
};