<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Arrangement;


class Category extends Model
{
    use HasFactory;
    protected $guarded=[];
    public $timestamps=false;
    protected $primaryKey = 'category_id';

    public function arrangement()
    {
        return $this->hasMany(Arrangement::class);
    }  
}
