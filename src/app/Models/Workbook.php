<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workbook extends Model
{
    use HasFactory;

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
    public function todos()
    {
        return $this->hasManyThrough(Question::class, Todo::class);
    }
    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }
    protected $appends = ['subject_name'];
    public function getSubjectNameAttribute()
    {
        return $this->subject->name;
    }

}
