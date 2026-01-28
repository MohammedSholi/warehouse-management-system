export default function Warnings({ stats }) {
  return (
    <div className="warnings">
      <h2>System Warnings</h2>
      <div>
        <p>
          {stats.pendingShipments > 0
            ? `There are ${stats.pendingShipments} pending shipments.`
            : "No pending shipments."}
        </p>
      </div>
    </div>
  );
}
