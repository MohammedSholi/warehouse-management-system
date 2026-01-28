export default function ShipmentStatusOverview({ stats }) {
  return (
    <div className="shipment-status">
      <h2>Shipment Status Overview</h2>
      <div className="status-bar">
        <p className="pending">Pending: {stats.pendingShipments}</p>
        <p className="in-transit">In Transit: {stats.activeShipments}</p>
        <p className="delivered">Delivered: {stats.deliveredToday}</p>
        <p className="delayed">Delayed: {stats.delayedShipments}</p>
      </div>
    </div>
  );
}
