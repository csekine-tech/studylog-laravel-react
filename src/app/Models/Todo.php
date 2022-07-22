<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;
    public function workbook()
    {
        return $this->hasOneThrough(Question::class, Workbook::class);
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
