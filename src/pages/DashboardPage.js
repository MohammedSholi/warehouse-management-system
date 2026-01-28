import "./DashboardPages.css";
import { dashboardStats, recentShipments } from "../data/mockData";
import Statistics from "../DashboardComponents/Statistics";
import RecentActivity from "../DashboardComponents/RecentActivity";
import QuickActions from "../DashboardComponents/QuickActions";
import ShipmentStatusOverview from "../DashboardComponents/ShipmentStatusOverview";
import Warnings from "../DashboardComponents/Warnings";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard-container">
        <Statistics stats={dashboardStats} />
        <RecentActivity shipments={recentShipments} />
        <QuickActions />
        <ShipmentStatusOverview stats={dashboardStats} />
        <Warnings stats={dashboardStats} />
      </div>
    </>
  );
}
