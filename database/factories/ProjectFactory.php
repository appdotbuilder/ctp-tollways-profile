<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->words(4, true),
            'slug' => fake()->slug(),
            'description' => fake()->paragraph(2),
            'content' => fake()->paragraphs(6, true),
            'client' => fake()->company(),
            'location' => fake()->city() . ', ' . fake()->countryCode(),
            'start_date' => fake()->dateTimeBetween('-3 years', '-1 month'),
            'completion_date' => fake()->dateTimeBetween('-2 years', 'now'),
            'status' => fake()->randomElement(['completed', 'in_progress', 'planned']),
            'featured_image' => null,
            'gallery_images' => null,
            'is_published' => fake()->boolean(85),
            'is_featured' => fake()->boolean(20),
            'sort_order' => fake()->numberBetween(0, 100),
        ];
    }

    /**
     * Indicate that the project is completed.
     */
    public function completed(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'completed',
            'completion_date' => fake()->dateTimeBetween('-2 years', 'now'),
        ]);
    }

    /**
     * Indicate that the project is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
            'is_published' => true,
        ]);
    }

    /**
     * Indicate that the project is published.
     */
    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_published' => true,
        ]);
    }

    /**
     * Indicate that the project is in progress.
     */
    public function inProgress(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'in_progress',
            'completion_date' => null,
        ]);
    }
}