import React, { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
    [key: string]: string;
}



export default function ContactIndex() {
    const { flash, errors } = usePage<SharedData & { 
        flash: { success?: string }; 
        errors: { [key: string]: string } 
    }>().props;

    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        router.post('/contact', formData, {
            onFinish: () => setIsSubmitting(false),
            onSuccess: () => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    subject: '',
                    message: ''
                });
            }
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <Head title="Contact Us - PT CTP Tollways">
                <meta name="description" content="Get in touch with PT CTP Tollways for toll road infrastructure projects, partnerships, and inquiries. We're here to help build Indonesia's future." />
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
                                    <Link href="/services" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                        Services
                                    </Link>
                                    <Link href="/projects" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                        Projects
                                    </Link>
                                    <Link href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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
                                📞 Get In Touch
                            </h1>
                            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                                Ready to discuss your infrastructure project? We're here to help bring your vision to life
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Information */}
                            <div>
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                        🏢 Contact Information
                                    </h2>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="text-2xl mr-4">🏢</div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Head Office</h3>
                                                <p className="text-gray-600">
                                                    Jl. Sudirman No. 123<br />
                                                    Jakarta Selatan 12190<br />
                                                    Indonesia
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="text-2xl mr-4">📱</div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                                <p className="text-gray-600">+62 21 1234 5678</p>
                                                <p className="text-gray-600">+62 21 1234 5679 (Fax)</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="text-2xl mr-4">📧</div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                                <p className="text-gray-600">info@ctptollways.com</p>
                                                <p className="text-gray-600">projects@ctptollways.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="text-2xl mr-4">⏰</div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                                                <p className="text-gray-600">
                                                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                                                    Saturday: 8:00 AM - 1:00 PM<br />
                                                    Sunday: Closed
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-gray-200">
                                        <h3 className="font-semibold text-gray-900 mb-4">🌏 Regional Offices</h3>
                                        <div className="space-y-3 text-sm">
                                            <div>
                                                <span className="font-medium">Surabaya:</span>
                                                <span className="text-gray-600 ml-2">Jl. Basuki Rahmat No. 45</span>
                                            </div>
                                            <div>
                                                <span className="font-medium">Medan:</span>
                                                <span className="text-gray-600 ml-2">Jl. Gatot Subroto No. 78</span>
                                            </div>
                                            <div>
                                                <span className="font-medium">Bandung:</span>
                                                <span className="text-gray-600 ml-2">Jl. Dago No. 234</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div>
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                        📝 Send Us a Message
                                    </h2>

                                    {flash.success && (
                                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                                            <div className="text-green-800">
                                                ✅ {flash.success}
                                            </div>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                                        errors.name ? 'border-red-300' : 'border-gray-300'
                                                    }`}
                                                    placeholder="Your full name"
                                                />
                                                {errors.name && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                                        errors.email ? 'border-red-300' : 'border-gray-300'
                                                    }`}
                                                    placeholder="your@email.com"
                                                />
                                                {errors.email && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="+62 xxx xxxx xxxx"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="Your company name"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                                    errors.subject ? 'border-red-300' : 'border-gray-300'
                                                }`}
                                                placeholder="Project inquiry, Partnership, etc."
                                            />
                                            {errors.subject && (
                                                <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                                    errors.message ? 'border-red-300' : 'border-gray-300'
                                                }`}
                                                placeholder="Tell us about your project or inquiry..."
                                            />
                                            {errors.message && (
                                                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full px-6 py-3 rounded-md font-semibold text-white transition-colors ${
                                                    isSubmitting 
                                                        ? 'bg-gray-400 cursor-not-allowed' 
                                                        : 'bg-blue-600 hover:bg-blue-700'
                                                }`}
                                            >
                                                {isSubmitting ? '📤 Sending...' : '🚀 Send Message'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
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