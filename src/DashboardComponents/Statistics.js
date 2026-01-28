export default function Statistics({ stats }) {
  return (
    <div className="statistics">
      <div className="statistic_item">
        <h3>Total active shipments :</h3>
        <p>{stats.activeShipments}</p>
      </div>

      <div className="statistic_item">
        <h3>Total parcels in warehouse :</h3>
        <p>{stats.totalParcels}</p>
      </div>

      <div className="statistic_item">
        <h3>Number of pallets in use :</h3>
        <p>{stats.palletsInUse}</p>
      </div>

      <div className="statistic_item">
        <h3>Number of branches :</h3>
        <p>{stats.branches}</p>
      </div>
    </div>
  );
}
