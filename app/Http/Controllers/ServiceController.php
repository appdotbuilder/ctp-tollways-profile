<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display a listing of the services.
     */
    public function index()
    {
        $services = Service::published()
            ->ordered()
            ->get();

        return Inertia::render('services/index', [
            'services' => $services,
        ]);
    }

    /**
     * Display the specified service.
     */
    public function show(Service $service)
    {
        // Only show published services to public
        if (!$service->is_published) {
            abort(404);
        }

        $relatedServices = Service::published()
            ->where('id', '!=', $service->id)
            ->ordered()
            ->limit(3)
            ->get();

        return Inertia::render('services/show', [
            'service' => $service,
            'relatedServices' => $relatedServices,
        ]);
    }
}