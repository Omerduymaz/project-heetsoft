import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Star, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#8B001C] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center justify-center mb-8">
          <Star className="w-8 h-8 text-[#8B001C]" />
          <span className="ml-2 text-2xl font-bold">talenter</span>
        </div>
        <h2 className="text-2xl font-bold text-center mb-8">APPLICANTS TRACKING SYSTEM</h2>
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
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-500" />
              ) : (
                <Eye className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
          <Link
            to="/reset-password"
            className="block text-center text-sm text-[#FF0844] hover:underline"
          >
            I forgot my password
          </Link>
          <button
            type="submit"
            className="w-full bg-[#FF0844] text-white py-3 rounded-lg hover:bg-[#d9073a] transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}