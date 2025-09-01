<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ContactSubmission
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string|null $phone
 * @property string|null $company
 * @property string $subject
 * @property string $message
 * @property bool $is_read
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission query()
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission whereCompany($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission whereIsRead($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission whereSubject($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission unread()
 * @method static \Illuminate\Database\Eloquent\Builder|ContactSubmission recent()
 * @method static \Database\Factories\ContactSubmissionFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class ContactSubmission extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'company',
        'subject',
        'message',
        'is_read',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_read' => 'boolean',
    ];

    /**
     * Scope a query to only include unread submissions.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeUnread($query)
    {
        return $query->where('is_read', false);
    }

    /**
     * Scope a query to order by most recent first.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeRecent($query)
    {
        return $query->orderBy('created_at', 'desc');
    }
}