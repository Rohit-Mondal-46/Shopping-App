import React from 'react';
import { useUser } from '../contexts/User/UserContextProvider';
import { Link } from 'react-router-dom';

function MyAccount() {
  const { user } = useUser();

  return (
    <div className="w-full h-full flex flex-col items-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <h1 className="text-4xl font-bold text-white mb-8">My Account</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 space-y-8">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-indigo-500"
          />
          <div>
            <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Address</h2>
          <p className="text-gray-600">{user.address}</p>
        </div>
        <div>
        <Link to="/myorder" className="text-2xl font-bold hover:text-gray-200 transition duration-300">
            <button className="bg-indigo-600 text-white rounded-lg px-6 py-3 transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105">
              Orders
            </button>
          </Link>
        </div>
        <div className="flex justify-end">
          <button className="bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;