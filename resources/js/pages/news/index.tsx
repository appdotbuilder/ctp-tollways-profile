import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Author {
    name: string;
}

interface NewsArticle {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    featured_image: string | null;
    published_at: string;
    author: Author;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedNews {
    data: NewsArticle[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props {
    news: PaginatedNews;
    [key: string]: unknown;
}

export default function NewsIndex({ news }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Head title="News - PT CTP Tollways">
                <meta name="description" content="Stay updated with the latest news and developments from PT CTP Tollways, Indonesia's leading toll road infrastructure developer." />
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
                                    <Link href="/news" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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
                        </div>
                    </div>
                </nav>

                {/* Header */}
                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                📰 Latest News & Updates
                            </h1>
                            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                                Stay informed about our latest projects, industry insights, and company developments
                            </p>
                        </div>
                    </div>
                </section>

                {/* News Grid */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {news.data.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {news.data.map((article) => (
                                        <Link
                                            key={article.id}
                                            href={`/news/${article.slug}`}
                                            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden group"
                                        >
                                            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
                                                <span className="text-4xl">📰</span>
                                            </div>
                                            <div className="p-6">
                                                <div className="text-sm text-blue-600 font-medium mb-2">
                                                    {formatDate(article.published_at)} • {article.author.name}
                                                </div>
                                                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                    {article.title}
                                                </h2>
                                                <p className="text-gray-600 line-clamp-3">
                                                    {article.excerpt}
                                                </p>
                                                <div className="mt-4 text-blue-600 font-medium text-sm">
                                                    Read more →
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {news.last_page > 1 && (
                                    <div className="flex justify-center mt-12">
                                        <div className="flex items-center space-x-1">
                                            {news.links.map((link, index) => {
                                                if (link.url === null) {
                                                    return (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-2 text-gray-400 cursor-not-allowed"
                                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                                        />
                                                    );
                                                }

                                                return (
                                                    <Link
                                                        key={index}
                                                        href={link.url}
                                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                                            link.active
                                                                ? 'bg-blue-600 text-white'
                                                                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                                        }`}
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">📰</div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">No news articles yet</h2>
                                <p className="text-gray-600">Check back soon for the latest updates and developments.</p>
                            </div>
                        )}
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