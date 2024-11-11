import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Users, UserCheck, Activity, Star } from 'lucide-react';

const nationalityData = [
  { name: 'France', value: 35 },
  { name: 'Germany', value: 24 },
  { name: 'England', value: 22 },
  { name: 'Spain', value: 18 },
  { name: 'Italy', value: 16 },
  { name: 'Sweden', value: 11 },
  { name: 'Algeria', value: 9 },
  { name: 'Greece', value: 6 },
  { name: 'Russian F.', value: 4 },
];

const COLORS = ['#FF0844', '#FF4D79', '#FF99B1', '#FFB3C6', '#FFCCD9'];

const StatsCard = ({ title, value, change, icon: Icon }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p className={`text-sm mt-1 ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change > 0 ? '+' : ''}{change}% This Month
        </p>
      </div>
      <Icon className="w-12 h-12 text-[#FF0844] opacity-20" />
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Welcome, Emily</h1>
        <div className="flex space-x-2">
          <button className="p-2 rounded-lg hover:bg-gray-200">
            <img src="/excel.png" alt="Excel" className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-200">
            <img src="/word.png" alt="Word" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Applicants"
          value="10,245"
          change={14.03}
          icon={Users}
        />
        <StatsCard
          title="Hired"
          value="54"
          change={25.27}
          icon={UserCheck}
        />
        <StatsCard
          title="Active Procedures"
          value="11"
          change={-24.07}
          icon={Activity}
        />
        <StatsCard
          title="Happiness Rate"
          value="4.1"
          change={6.21}
          icon={Star}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Nationalities</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={nationalityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#FF0844" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Applications Status</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Applicants', value: 5737 },
                    { name: 'Shortlisting', value: 2971 },
                    { name: 'Final Listing', value: 1536 },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#FF0844"
                  dataKey="value"
                  label
                >
                  {nationalityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}