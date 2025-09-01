<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactSubmissionRequest;
use App\Models\ContactSubmission;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display the contact page.
     */
    public function index()
    {
        return Inertia::render('contact/index');
    }

    /**
     * Store a contact submission.
     */
    public function store(StoreContactSubmissionRequest $request)
    {
        ContactSubmission::create($request->validated());

        return redirect()->route('contact.index')
            ->with('success', 'Thank you for your message! We will get back to you soon.');
    }
}