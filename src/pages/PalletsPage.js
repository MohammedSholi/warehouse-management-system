import "./PalletsPage.css";
import { pallets } from "../data/mockData";
import { useState } from "react";
// const pallets = [
//   {
//     id: 1,
//     code: "PLT-001",
//     capacity: 50,
//     currentLoad: 45,
//     status: "In Use",
//     location: "Cairo Main Warehouse",
//   },
//   {
//     id: 2,
//     code: "PLT-002",
//     capacity: 50,
//     currentLoad: 50,
//     status: "Full",
//     location: "Cairo Main Warehouse",
//   },
//   {
//     id: 3,
//     code: "PLT-003",
//     capacity: 50,
//     currentLoad: 30,
//     status: "In Use",
//     location: "Alexandria Branch",
//   },
// ];
export default function PalletsPage() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterLocation, setFilterLocation] = useState("All");
  const [filteredPallets, setFilteredPallets] = useState(pallets);
  const handleFilter = () => {
    let filteredPallets = pallets;
    if (filterStatus !== "All") {
      filteredPallets = filteredPallets.filter(
        (pallet) => pallet.status === filterStatus
        );
    }
    if (filterLocation !== "All") {
      filteredPallets = filteredPallets.filter(
        (pallet) => pallet.location === filterLocation
      );
    }
    setFilteredPallets(filteredPallets);
    };
  return (
    <>
      <h1>Pallets Management</h1>
      <div className="pallets-container">
        <div className="pallets-table">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Location</th>
                <th>Status</th>
                <th>Load</th>
                <th>Capacity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPallets.map((pallet) => (
                <tr key={pallet.id}>
                  <td>{pallet.code}</td>
                  <td>{pallet.location}</td>
                  <td>{pallet.status}</td>
                  <td>{pallet.currentLoad}</td>
                  <td>{pallet.capacity}</td>
                  <td>
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="filters">
          <h2>Filters</h2>
          <div className="filter-group">
            <label>Status:</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option>All</option>
              <option>In Use</option>
              <option>Full</option>
              <option>Empty</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Location:</label>
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
            >
              <option>All</option>
              <option>Cairo Main Warehouse</option>
              <option>Alexandria Branch</option>
              <option>Giza Distribution Center</option>
              <option>Mansoura Hub</option>
            </select>
          </div>
          <button onClick={handleFilter}>Apply Filters</button>
        </div>

        <div className="status-summary">
          <h2>Status Summary</h2>
          <p>Total Pallets: {filteredPallets.length}</p>
          <p>In Use: {filteredPallets.filter((p) => p.status === "In Use").length}</p>
          <p>Full: {filteredPallets.filter((p) => p.status === "Full").length}</p>
          <p>Empty: {filteredPallets.filter((p) => p.status === "Empty").length}</p>
        </div>
      </div>
    </>
  );
}
