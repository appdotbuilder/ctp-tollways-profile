<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the news articles.
     */
    public function index()
    {
        $news = News::published()
            ->recent()
            ->with('author')
            ->paginate(9);

        return Inertia::render('news/index', [
            'news' => $news,
        ]);
    }

    /**
     * Display the specified news article.
     */
    public function show(News $news)
    {
        // Only show published news to public
        if (!$news->is_published) {
            abort(404);
        }

        $news->load('author');

        $relatedNews = News::published()
            ->where('id', '!=', $news->id)
            ->recent()
            ->limit(3)
            ->get();

        return Inertia::render('news/show', [
            'news' => $news,
            'relatedNews' => $relatedNews,
        ]);
    }
}