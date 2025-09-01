<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Project;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the homepage with featured content.
     */
    public function index()
    {
        $featuredProjects = Project::published()
            ->featured()
            ->ordered()
            ->limit(3)
            ->get();

        $recentNews = News::published()
            ->recent()
            ->limit(3)
            ->with('author')
            ->get();

        $services = Service::published()
            ->ordered()
            ->limit(6)
            ->get();

        return Inertia::render('welcome', [
            'featuredProjects' => $featuredProjects,
            'recentNews' => $recentNews,
            'services' => $services,
        ]);
    }
}