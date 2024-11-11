import React from 'react';
import { Search, Bell, MessageSquare, Globe } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center flex-1">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search People"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0844] focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF0844] text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          <button className="relative">
            <MessageSquare className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF0844] text-white text-xs rounded-full flex items-center justify-center">
              5
            </span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600">
            <Globe className="w-5 h-5" />
            <span>ENG</span>
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 text-sm text-[#FF0844] hover:underline"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}