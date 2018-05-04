<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Creation extends Model
{
    protected $fillable = ['name', 'description'];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
