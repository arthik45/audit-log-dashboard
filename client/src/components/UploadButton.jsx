import { uploadLogs } from "../api/auditApi";

function UploadButton({ fetchLogs }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const text = await file.text();

    const data = JSON.parse(text);

    await uploadLogs(data);

    fetchLogs();
  };

  return (
    <label className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
      Upload JSON

      <input
        hidden
        type="file"
        accept=".json"
        onChange={handleUpload}
      />

    </label>
  );
}

export default UploadButton;