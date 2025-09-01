import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Author {
    name: string;
}

interface NewsArticle {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    featured_image: string | null;
    published_at: string;
    author: Author;
}

interface RelatedNews {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    published_at: string;
}

interface Props {
    news: NewsArticle;
    relatedNews: RelatedNews[];
    [key: string]: unknown;
}

export default function NewsShow({ news, relatedNews }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Head title={`${news.title} - PT CTP Tollways News`}>
                <meta name="description" content={news.excerpt} />
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
                                    <Link href="/pages/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                        About
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Breadcrumb */}
                <div className="bg-white border-b border-gray-200">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-blue-600">Home</Link>
                            <span>/</span>
                            <Link href="/news" className="hover:text-blue-600">News</Link>
                            <span>/</span>
                            <span className="text-gray-900">{news.title}</span>
                        </div>
                    </div>
                </div>

                {/* Article */}
                <article className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            {/* Article Header */}
                            <div className="p-8 border-b border-gray-200">
                                <div className="text-sm text-blue-600 font-medium mb-4">
                                    📰 News • {formatDate(news.published_at)} • By {news.author.name}
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    {news.title}
                                </h1>
                                <p className="text-xl text-gray-600">
                                    {news.excerpt}
                                </p>
                            </div>

                            {/* Featured Image Placeholder */}
                            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                <span className="text-6xl">📰</span>
                            </div>

                            {/* Article Content */}
                            <div className="p-8">
                                <div 
                                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900"
                                    dangerouslySetInnerHTML={{ __html: news.content }}
                                />
                            </div>

                            {/* Article Footer */}
                            <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-gray-600">
                                        Published on {formatDate(news.published_at)} by {news.author.name}
                                    </div>
                                    <Link
                                        href="/news"
                                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                                    >
                                        ← Back to News
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related News */}
                {relatedNews.length > 0 && (
                    <section className="py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                📚 Related Articles
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedNews.map((article) => (
                                    <Link
                                        key={article.id}
                                        href={`/news/${article.slug}`}
                                        className="bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow group overflow-hidden"
                                    >
                                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
                                            <span className="text-3xl">📰</span>
                                        </div>
                                        <div className="p-4">
                                            <div className="text-xs text-blue-600 font-medium mb-2">
                                                {formatDate(article.published_at)}
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                {article.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 line-clamp-2">
                                                {article.excerpt}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

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