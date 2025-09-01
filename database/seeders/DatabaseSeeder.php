<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\News;
use App\Models\Project;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        $admin = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@ctptollways.com',
        ]);

        // Create test user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Seed static content
        $this->call([
            PageSeeder::class,
            ServiceSeeder::class,
        ]);

        // Create sample news articles
        News::factory()->count(12)
            ->published()
            ->create(['author_id' => $admin->id]);

        // Create sample projects
        Project::factory()->count(8)
            ->completed()
            ->published()
            ->create();

        Project::factory()->count(3)
            ->featured()
            ->completed()
            ->create();

        Project::factory()->count(2)
            ->inProgress()
            ->published()
            ->create();
    }
}
