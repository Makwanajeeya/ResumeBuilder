import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      await register(formData.email, formData.name);
      navigate('/dashboard');
    } catch (error) {
      setMessage('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#6D28D9] via-[#D946EF] to-[#F472B6] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-white/80">Join us to build your professional resume</p>
        </div>

        {message && (
          <div className="mb-6 p-4 bg-white/10 rounded-lg text-white text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-transparent text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-colors"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-transparent text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-transparent text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-colors"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-transparent text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-colors"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 rounded border-gray-300 text-[#FFD700] focus:ring-[#FFD700]"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-white">
              I agree to the{' '}
              <Link to="/terms" className="text-[#FFD700] hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-[#FFD700] hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-lg bg-[#FFD700] text-[#6D28D9] font-medium hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="mt-8 text-center text-white">
          Already have an account?{' '}
          <Link to="/login" className="text-[#FFD700] hover:underline font-medium">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register; 