export default function RecentActivity({ shipments }) {
  return (
    <div className="recent-activity_log">
      <h2>Recent Activity</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment.id}>
              <td>{shipment.id}</td>
              <td>{shipment.fromBranch}</td>
              <td>{shipment.toBranch}</td>
              <td
                style={{
                  color:
                    shipment.status === "Delivered"
                      ? "#5cb85c"
                      : shipment.status === "Pending"
                      ? "#f0ad4e"
                      : shipment.status === "In Transit"
                      ? "#5bc0de"
                      : "#d9534f",
                }}
              >
                {shipment.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
