// src/components/Dashboard.jsx

import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { userRole } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p className="text-gray-600 mb-4">
          Logged in as: <strong>{userRole}</strong>
        </p>

        {/* Admin Dashboard */}
        {userRole === "admin" && (
          <div className="space-y-4">
            <div className="bg-blue-100 p-4 rounded">👤 Manage Users</div>
            <div className="bg-green-100 p-4 rounded">📊 View Analytics</div>
            <div className="bg-yellow-100 p-4 rounded">⚙️ System Settings</div>
            <div className="bg-purple-100 p-4 rounded">📁 Access Files</div>
            <div className="bg-red-100 p-4 rounded">🛡️ Security Controls</div>
          </div>
        )}

        {/* User Dashboard */}
        {userRole === "user" && (
          <div className="space-y-4">
            <div className="bg-green-100 p-4 rounded">📄 View Reports</div>
            <div className="bg-blue-100 p-4 rounded">👤 Profile Settings</div>
          </div>
        )}

        {/* Guest Dashboard */}
        {userRole === "guest" && (
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded">
              📖 Read Public Content
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
