import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate password reset
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#8B001C] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center justify-center mb-8">
          <Star className="w-8 h-8 text-[#8B001C]" />
          <span className="ml-2 text-2xl font-bold">talenter</span>
        </div>
        <h2 className="text-2xl font-bold text-center mb-8">APPLICANTS TRACKING SYSTEM</h2>
        <h3 className="text-xl font-semibold text-center mb-6">Reset Password</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="E-mail Address"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <input type="checkbox" id="recaptcha" className="w-4 h-4" required />
            <label htmlFor="recaptcha" className="text-sm text-gray-600">
              I'm not a robot
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF0844] text-white py-3 rounded-lg hover:bg-[#d9073a] transition-colors"
          >
            Reset Password
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="w-full text-[#FF0844] text-sm hover:underline"
          >
            Back to login
          </button>
        </form>
      </div>
    </div>
  );
}