import React, { useState } from "react";
import { Menu, LogOut, FileText, ClipboardList, Pencil, Trash2, Plus, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [items, setItems] = useState([
    { id: 1, name: "Paracetamol", quantity: 2, rate: 50 },
    { id: 2, name: "Ibuprofen", quantity: 1, rate: 30 },
  ]);

  const [editItemId, setEditItemId] = useState(null);
  const [editData, setEditData] = useState({ id: null, name: "", quantity: 0, rate: 0 });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));

  const startEditing = (item) => {
    setEditItemId(item.id);
    setEditData(item);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    setItems(items.map(item => (item.id === editItemId ? editData : item)));
    setEditItemId(null);
  };

  // Function to Add New Medicine
  const addMedicine = () => {
    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem = { id: newId, name: "New Medicine", quantity: 1, rate: 10 };
    setItems([...items, newItem]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-blue-900 text-white p-5 space-y-6 ${isSidebarOpen ? "w-64" : "w-18"} transition-all duration-300`}>
        <button onClick={toggleSidebar} className="text-white focus:outline-none mb-4">
          <Menu size={28} />
        </button>
        {isSidebarOpen && <h1 className="text-xl font-bold">Pharma Dashboard</h1>}
        <div className="space-y-4">
        <button className={`flex items-center ${isSidebarOpen ? "space-x-2 px-3" : "justify-center"} w-full py-2 bg-blue-700 rounded-md hover:bg-blue-600`}>
  <ClipboardList className="w-5 h-5" />
  {isSidebarOpen && <span>Details</span>}
</button>

<button className={`flex items-center ${isSidebarOpen ? "space-x-2 px-3" : "justify-center"} w-full py-2 bg-blue-700 rounded-md hover:bg-blue-600`}>
  <FileText className="w-5 h-5" />
  {isSidebarOpen && <span>Bill Generator</span>}
</button>

        </div>
        <div className="absolute bottom-5 left-5">
          <button onClick={() => navigate("/signin")} className="flex items-center space-x-2 w-full py-2 px-3 bg-red-600 rounded-md hover:bg-red-500">
            <LogOut />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <button onClick={() => navigate("/prescription")} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center space-x-2">
            <Plus /> <span>Prescription</span>
          </button>
        </div>

        {/* Table Section */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md overflow-x-auto max-h-[580px] overflow-y-auto">
        {/* Add Medicine Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={addMedicine}
              className="bg-green-600  text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center space-x-2"
            >
              <Plus /> <span>Add Medicine</span>
            </button>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Rate</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="p-2">{item.id}</td>

                  {/* Edit Mode */}
                  {editItemId === item.id ? (
                    <>
                      <td className="p-2">
                        <input
                          type="text"
                          name="name"
                          value={editData.name}
                          onChange={handleEditChange}
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          name="quantity"
                          value={editData.quantity}
                          onChange={handleEditChange}
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          name="rate"
                          value={editData.rate}
                          onChange={handleEditChange}
                          className="border p-1 rounded w-full"
                        />
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-2">{item.name}</td>
                      <td className="p-2">{item.quantity}</td>
                      <td className="p-2">₹{item.rate}</td>
                    </>
                  )}

                  {/* Actions */}
                  <td className="p-2 flex justify-center space-x-4">
                    {editItemId === item.id ? (
                      <button onClick={saveEdit} className="text-green-600 hover:text-green-800">
                        <Check size={20} />
                      </button>
                    ) : (
                      <button onClick={() => startEditing(item)} className="text-blue-500 hover:text-blue-700">
                        <Pencil size={20} />
                      </button>
                    )}
                    <button onClick={() => deleteItem(item.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
