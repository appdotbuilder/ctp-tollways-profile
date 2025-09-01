import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Service {
    id: number;
    title: string;
    slug: string;
    description: string;
    content: string;
    icon: string | null;
}

interface Props {
    services: Service[];
    [key: string]: unknown;
}

export default function ServicesIndex({ services }: Props) {
    return (
        <>
            <Head title="Services - PT CTP Tollways">
                <meta name="description" content="Comprehensive toll road infrastructure services from PT CTP Tollways, including construction, planning, project management, maintenance, and environmental consulting." />
            </Head>

            <div className="min-h-screen bg-gray-50">
                {/* Navigation */}
                <nav className="bg-white shadow-sm border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex-shrink-0">
                                <Link href="/" className="text-2xl font-bold text-blue-600">
                                    🛣️ PT CTP Tollways
                                </Link>
                            </div>
                            
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                        Home
                                    </Link>
                                    <Link href="/news" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                        News
                                    </Link>
                                    <Link href="/services" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                        Services
                                    </Link>
                                    <Link href="/projects" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                        Projects
                                    </Link>
                                    <Link href="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                        Contact
                                    </Link>
                                    <Link href="/pages/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                        About
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Header */}
                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                🔧 Our Services
                            </h1>
                            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                                Comprehensive toll road infrastructure solutions from planning and design to construction and maintenance
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {services.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {services.map((service) => (
                                    <Link
                                        key={service.id}
                                        href={`/services/${service.slug}`}
                                        className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all border border-gray-200 overflow-hidden group"
                                    >
                                        <div className="p-8">
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 mr-6">
                                                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                                        <span className="text-2xl">⚙️</span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow">
                                                    <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                        {service.title}
                                                    </h2>
                                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                    <div className="text-blue-600 font-medium text-sm">
                                                        Learn more →
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">⚙️</div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">No services listed yet</h2>
                                <p className="text-gray-600">Our comprehensive service offerings will be available soon.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                🏆 Why Choose PT CTP Tollways?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Two decades of excellence in toll road infrastructure development
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                                <p className="text-gray-600 text-sm">
                                    1,500+ experienced professionals with deep expertise in infrastructure development
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                                <p className="text-gray-600 text-sm">
                                    50+ successful projects across Indonesia with 2,000+ kilometers of roads built
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🔬</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Technology</h3>
                                <p className="text-gray-600 text-sm">
                                    State-of-the-art equipment and innovative construction methodologies
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🌱</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainability Focus</h3>
                                <p className="text-gray-600 text-sm">
                                    Committed to environmentally responsible development and green construction
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-blue-600 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Start Your Project? 🚀
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Let's discuss how our comprehensive services can bring your infrastructure vision to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Get Started 💬
                            </Link>
                            <Link
                                href="/projects"
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                View Our Work 🏗️
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="md:col-span-2">
                                <h3 className="text-2xl font-bold mb-4">🛣️ PT CTP Tollways</h3>
                                <p className="text-gray-300 mb-4">
                                    Indonesia's premier toll road infrastructure developer, connecting communities and driving economic growth for over 20 years.
                                </p>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold mb-4">Quick Links</h4>
                                <div className="space-y-2 text-sm">
                                    <Link href="/news" className="block text-gray-300 hover:text-white">News</Link>
                                    <Link href="/services" className="block text-gray-300 hover:text-white">Services</Link>
                                    <Link href="/projects" className="block text-gray-300 hover:text-white">Projects</Link>
                                    <Link href="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold mb-4">Company</h4>
                                <div className="space-y-2 text-sm">
                                    <Link href="/pages/about" className="block text-gray-300 hover:text-white">About Us</Link>
                                    <Link href="/pages/profile" className="block text-gray-300 hover:text-white">Company Profile</Link>
                                    <Link href="/pages/safety-quality" className="block text-gray-300 hover:text-white">Safety & Quality</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                            © 2024 PT CTP Tollways. All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}