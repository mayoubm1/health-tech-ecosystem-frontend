'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCurrentUser, signOut } from '@/lib/auth';
import type { User } from '@/lib/auth';

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Failed to load user:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.href = '/';
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Health Tech Ecosystem</h1>
            <p className="text-gray-600 mt-1">Welcome, {user?.email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* System Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* OmniCognitor Card */}
          <Link href="/dashboard/omnicognitor">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer transform hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">OmniCognitor</h2>
              <p className="text-gray-600 text-sm mb-4">
                AI Platform - Central intelligence system for integrating AI agents
              </p>
              <span className="text-blue-500 font-semibold text-sm">Explore →</span>
            </div>
          </Link>

          {/* Healthcare Hub Card */}
          <Link href="/dashboard/healthcare">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer transform hover:scale-105">
              <div className="text-4xl mb-4">🏥</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Healthcare Hub</h2>
              <p className="text-gray-600 text-sm mb-4">
                Patient & Provider Management - Complete health records system
              </p>
              <span className="text-blue-500 font-semibold text-sm">Explore →</span>
            </div>
          </Link>

          {/* Telemed Services Card */}
          <Link href="/dashboard/telemed">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer transform hover:scale-105">
              <div className="text-4xl mb-4">📞</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Telemed Services</h2>
              <p className="text-gray-600 text-sm mb-4">
                Telemedicine - Virtual consultations and appointments
              </p>
              <span className="text-blue-500 font-semibold text-sm">Explore →</span>
            </div>
          </Link>

          {/* M23M Research Card */}
          <Link href="/dashboard/research">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer transform hover:scale-105">
              <div className="text-4xl mb-4">🔬</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">M23M Research</h2>
              <p className="text-gray-600 text-sm mb-4">
                Research System - Data management and collaboration
              </p>
              <span className="text-blue-500 font-semibold text-sm">Explore →</span>
            </div>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">4</div>
              <p className="text-gray-600 mt-2">Core Components</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">100%</div>
              <p className="text-gray-600 mt-2">Integration Ready</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">24/7</div>
              <p className="text-gray-600 mt-2">Availability</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">∞</div>
              <p className="text-gray-600 mt-2">Scalability</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  ✓
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">JWT Authentication</h3>
                <p className="mt-2 text-gray-600">Secure token-based authentication across all services</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  ✓
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Real-time Updates</h3>
                <p className="mt-2 text-gray-600">WebSocket support for live data synchronization</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  ✓
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">HIPAA Compliant</h3>
                <p className="mt-2 text-gray-600">Healthcare data protection and privacy standards</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  ✓
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Microservices</h3>
                <p className="mt-2 text-gray-600">Modular architecture for independent scaling</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
