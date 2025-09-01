<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('content');
            $table->text('excerpt');
            $table->string('featured_image')->nullable();
            $table->boolean('is_published')->default(true);
            $table->datetime('published_at')->nullable();
            $table->unsignedBigInteger('author_id');
            $table->timestamps();
            
            $table->foreign('author_id')->references('id')->on('users');
            $table->index('slug');
            $table->index('is_published');
            $table->index('published_at');
            $table->index(['is_published', 'published_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news');
    }
};