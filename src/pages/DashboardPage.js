import "./pages.css";
import { dashboardStats, recentShipments,  } from "../data/mockData";
export default function Dashboard() {
    console.log(dashboardStats.pendingShipments);
  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <div className="dashboard-container">
          <div className="statistics">
            <div className="statistic_item">
              <h3>Total active shipments :</h3>
              <p>{dashboardStats.activeShipments}</p>
            </div>

            <div className="statistic_item">
              <h3>Total parcels in warehouse :</h3>
              <p>{dashboardStats.totalParcels}</p>
            </div>

            <div className="statistic_item">
              <h3>Number of pallets in use :</h3>
              <p>{dashboardStats.palletsInUse}</p>
            </div>

            <div className="statistic_item">
              <h3>Number of branches :</h3>
              <p>{dashboardStats.branches}</p>
            </div>
          </div>

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
                {recentShipments.map((shipment) => {
                  return (
                    <tr key={shipment.id}>
                      <td>{shipment.id}</td>
                      <td>{shipment.fromBranch}</td>
                      <td>{shipment.toBranch}</td>
                      <td
                        style={{
                          color:
                            shipment.status == "Delivered"
                              ? "#5cb85c"
                              : shipment.status == "Pending"
                                ? "#f0ad4e"
                                : shipment.status == "In Transit"
                                  ? "#5bc0de"
                                  : "#d9534f",
                        }}
                      >
                        {shipment.status}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="quick-action">
            <h2>Quick Actions</h2>
            <div className="action-buttons">
              <button>Create New Shipment</button>
              <button>Add Parcel</button>
              <button>View All Shipments</button>
              <button>Generate Report</button>
            </div>
          </div>

          <div className="shipment-status">
            <h2>Shipment Status Overview</h2>
            <div className="status-bar">
              <p className="pending">Pending: {dashboardStats.pendingShipments}</p>
              <p className="in-transit">In Transit: {dashboardStats.activeShipments}</p>
              <p className="delivered">Delivered: {dashboardStats.deliveredToday}</p>
              <p className="delayed">Delayed: {dashboardStats.delayedShipments}</p>
            </div>
          </div>

          <div className="warnings">
            <h2>System Warnings</h2>
            <div>
                <p>{dashboardStats.pendingShipments > 0 ? `There are ${dashboardStats.pendingShipments} pending shipments.` : "No pending shipments."}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
