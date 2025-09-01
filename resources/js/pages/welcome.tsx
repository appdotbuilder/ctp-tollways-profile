import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    featured_image: string | null;
    location: string | null;
    completion_date: string | null;
}

interface NewsArticle {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    featured_image: string | null;
    published_at: string;
    author: {
        name: string;
    };
}

interface Service {
    id: number;
    title: string;
    slug: string;
    description: string;
    icon: string | null;
}

interface Props {
    featuredProjects: Project[];
    recentNews: NewsArticle[];
    services: Service[];
    [key: string]: unknown;
}

export default function Welcome({ featuredProjects, recentNews, services }: Props) {
    const { auth } = usePage<SharedData>().props;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Head title="PT CTP Tollways - Leading Toll Road Infrastructure Developer">
                <meta name="description" content="PT CTP Tollways is Indonesia's premier toll road infrastructure developer. We build world-class toll roads that connect communities and drive economic growth." />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
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
                                    <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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
                                    <Link href="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                        Contact
                                    </Link>
                                    <Link href="/pages/profile" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                        Profile
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                🏗️ Building Indonesia's Future
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                                Leading toll road infrastructure developer connecting communities and driving economic growth across Indonesia
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/projects"
                                    className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    View Our Projects 📋
                                </Link>
                                <Link
                                    href="/contact"
                                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Get In Touch 💬
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">20+</div>
                                <div className="text-gray-600">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">2,000+</div>
                                <div className="text-gray-600">Kilometers Built</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
                                <div className="text-gray-600">Projects Completed</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1,500+</div>
                                <div className="text-gray-600">Team Members</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                🔧 Our Services
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Comprehensive toll road infrastructure solutions from planning to maintenance
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service) => (
                                <Link
                                    key={service.id}
                                    href={`/services/${service.slug}`}
                                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                                >
                                    <div className="text-2xl mb-4">⚙️</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href="/services"
                                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                            >
                                View All Services →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Featured Projects */}
                {featuredProjects.length > 0 && (
                    <section className="bg-white py-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    🏆 Featured Projects
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Showcase of our landmark toll road infrastructure developments
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {featuredProjects.map((project) => (
                                    <Link
                                        key={project.id}
                                        href={`/projects/${project.slug}`}
                                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden"
                                    >
                                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                            <span className="text-4xl">🛣️</span>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 mb-3">
                                                {project.description}
                                            </p>
                                            {project.location && (
                                                <p className="text-sm text-blue-600 font-medium">
                                                    📍 {project.location}
                                                </p>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="text-center mt-12">
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    View All Projects →
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* Recent News */}
                {recentNews.length > 0 && (
                    <section className="bg-gray-50 py-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    📰 Latest News
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Stay updated with our latest developments and industry insights
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {recentNews.map((article) => (
                                    <Link
                                        key={article.id}
                                        href={`/news/${article.slug}`}
                                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden"
                                    >
                                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                            <span className="text-4xl">📰</span>
                                        </div>
                                        <div className="p-6">
                                            <div className="text-sm text-blue-600 font-medium mb-2">
                                                {formatDate(article.published_at)} • {article.author.name}
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-600 line-clamp-3">
                                                {article.excerpt}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="text-center mt-12">
                                <Link
                                    href="/news"
                                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    View All News →
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="bg-blue-600 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Build the Future? 🚀
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Partner with Indonesia's leading toll road infrastructure developer. Let's discuss your next project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Start a Project 🏗️
                            </Link>
                            <Link
                                href="/pages/profile"
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Company Profile 📖
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
                                <div className="text-sm text-gray-400">
                                    Building Indonesia's future, one road at a time.
                                </div>
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
                                    <Link href="/pages/profile" className="block text-gray-300 hover:text-white">Company Profile</Link>
                                    <Link href="/pages/safety-quality" className="block text-gray-300 hover:text-white">Safety & Quality</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                            © 2024 PT CTP Tollways. All rights reserved. Built with ❤️ for Indonesia's infrastructure.
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}