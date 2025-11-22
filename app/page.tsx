'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth';

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

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

  if (isAuthenticated) {
    router.push('/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏥</span>
            <span className="text-xl font-bold text-gray-900">Health Tech Ecosystem</span>
          </div>
          <div className="space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Unified Healthcare Technology Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Integrated ecosystem connecting AI intelligence, patient management, telemedicine services, and advanced research capabilities.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/signup"
              className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Start Free Trial
            </Link>
            <Link
              href="/login"
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* OmniCognitor */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">OmniCognitor</h3>
            <p className="text-gray-600 text-sm">
              AI platform integrating external agents for intelligent healthcare solutions
            </p>
          </div>

          {/* Healthcare Hub */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Hub</h3>
            <p className="text-gray-600 text-sm">
              Complete patient and provider management with comprehensive health records
            </p>
          </div>

          {/* Telemed Services */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Telemed Services</h3>
            <p className="text-gray-600 text-sm">
              State-of-the-art virtual consultations and appointment management
            </p>
          </div>

          {/* M23M Research */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">M23M Research</h3>
            <p className="text-gray-600 text-sm">
              Advanced research system for data management and collaboration
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-lg shadow-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Built with Modern Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">⚛️</div>
              <p className="font-semibold text-gray-900">Next.js</p>
              <p className="text-sm text-gray-600">Frontend Framework</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🐍</div>
              <p className="font-semibold text-gray-900">Flask</p>
              <p className="text-sm text-gray-600">Backend API</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🗄️</div>
              <p className="font-semibold text-gray-900">PostgreSQL</p>
              <p className="text-sm text-gray-600">Database</p>
            </div>
            <div>
              <div className="text-3xl mb-2">☁️</div>
              <p className="font-semibold text-gray-900">Supabase</p>
              <p className="text-sm text-gray-600">Backend as Service</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Security & Compliance</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">HIPAA Compliant healthcare data protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">JWT-based authentication and authorization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">End-to-end encryption for sensitive data</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">Role-based access control (RBAC)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">Real-time WebSocket communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">Microservices architecture for scalability</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">RESTful API design with comprehensive documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">Responsive design for all devices</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join the unified digital ecosystem and revolutionize healthcare delivery
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">Features</Link></li>
                <li><Link href="#" className="hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">About</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white">API Reference</Link></li>
                <li><Link href="#" className="hover:text-white">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms</Link></li>
                <li><Link href="#" className="hover:text-white">Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Health Tech Ecosystem. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
