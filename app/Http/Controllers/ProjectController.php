<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the projects.
     */
    public function index()
    {
        $featuredProjects = Project::published()
            ->featured()
            ->ordered()
            ->get();

        $projects = Project::published()
            ->where('is_featured', false)
            ->ordered()
            ->paginate(9);

        return Inertia::render('projects/index', [
            'featuredProjects' => $featuredProjects,
            'projects' => $projects,
        ]);
    }

    /**
     * Display the specified project.
     */
    public function show(Project $project)
    {
        // Only show published projects to public
        if (!$project->is_published) {
            abort(404);
        }

        $relatedProjects = Project::published()
            ->where('id', '!=', $project->id)
            ->ordered()
            ->limit(3)
            ->get();

        return Inertia::render('projects/show', [
            'project' => $project,
            'relatedProjects' => $relatedProjects,
        ]);
    }
}