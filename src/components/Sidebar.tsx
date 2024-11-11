import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Star,
  LayoutDashboard,
  ClipboardList,
  FolderPlus,
  Users,
  Calendar,
  Library,
  UserCircle,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Sidebar() {
  const { user } = useAuth();

  const links = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/procedures', icon: ClipboardList, label: 'Procedures' },
    { to: '/create', icon: FolderPlus, label: 'Create Procedures' },
    { to: '/employees', icon: Users, label: 'Employees' },
    { to: '/calendar', icon: Calendar, label: 'Calendar' },
    { to: '/library', icon: Library, label: 'Library' },
  ];

  return (
    <div className="flex flex-col w-64 bg-[#8B001C] text-white">
      <div className="flex items-center justify-center h-16 border-b border-[#a01f39]">
        <Star className="w-6 h-6" />
        <span className="ml-2 text-lg font-semibold">talenter</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 hover:bg-[#a01f39] transition-colors ${
                isActive ? 'bg-[#a01f39]' : ''
              }`
            }
          >
            <link.icon className="w-5 h-5" />
            <span className="ml-3">{link.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-[#a01f39]">
        <div className="flex items-center">
          <UserCircle className="w-8 h-8" />
          <div className="ml-3">
            <p className="font-medium">{user?.name}</p>
            <p className="text-sm opacity-75">{user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}