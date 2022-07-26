<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Todo extends Model
{
    use HasFactory;
    public function workbook()
    {
        return $this->hasOneThrough(Workbook::class, Question::class);
    }
    public function question()
    {
        return $this->belongsTo(Question::class);
    }
    protected $appends = ['workbook_name'];
    public function getWorkbookNameAttribute()
    {
        return $this->question->workbook->name;
    }

}
