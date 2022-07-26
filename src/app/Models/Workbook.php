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
    public function user(){
        return $this->belongsTo(User::class);
    }
    protected $appends = ['subject_name'];
    public function getSubjectNameAttribute()
    {
        return $this->subject->name;
    }

    public static function boot()
    {
        parent::boot();

        static::created(function ($workbook) {
            $count = $workbook->count;
            for ($i = 1; $i <= $count; $i++) {
                $question = new Question;
                $question->workbook_id = $workbook->id;
                $question->number = $i;
                $question->save();
            }
        });

        static::deleting(function ($workbook) {
            $workbook->questions->each(function($question){
                $question->delete();
            });
        });
    }
}
