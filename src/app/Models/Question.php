<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Question extends Model
{
    use HasFactory;
    public function workbook()
    {
        return $this->belongsTo(Workbook::class);
    }
    public function todos()
    {
        return $this->hasMany(Todo::class);
    }
    public function user()
    {
        return $this->hasOneThrough(User::class, Workbook::class);
    }

    protected $appends = ['workbook_name'];
    public function getWorkbookNameAttribute()
    {
        return $this->workbook->name;
    }
    public static function boot()
    {
        parent::boot();

        static::created(function ($question) {
            $todo = new Todo;
            $todo->question_id = $question->id;
            $todo->user_id=Auth::user()->id;
            $todo->save();
        });
    }
}
