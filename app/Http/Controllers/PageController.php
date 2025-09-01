<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    /**
     * Display the specified page.
     */
    public function show(Page $page)
    {
        // Only show published pages to public
        if (!$page->is_published) {
            abort(404);
        }

        return Inertia::render('pages/show', [
            'page' => $page,
        ]);
    }
}