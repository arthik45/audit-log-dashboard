function LogTable({ logs, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table className="w-full bg-white shadow">

      <thead>

        <tr className="bg-gray-200">

          <th className="p-3">Actor</th>
          <th>Action</th>
          <th>Severity</th>
          <th>Status</th>
          <th>Time</th>

        </tr>

      </thead>

      <tbody>

        {logs.map((log) => (

          <tr key={log._id} className="border-b">

            <td className="p-3">{log.actor}</td>

            <td>{log.action}</td>

            <td>{log.severity}</td>

            <td>{log.status}</td>

            <td>
              {new Date(log.timestamp).toLocaleString()}
            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default LogTable;