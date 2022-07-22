<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    protected $appends = ['workbook_name'];
    public function getWorkbookNameAttribute()
    {
        return $this->workbook->name;
    }
}
