<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Flower;


class Category extends Model
{
    use HasFactory;
    protected $guarded=[];
    public $timestamps=false;
    protected $primaryKey = 'category_id';

    public function flower()
    {
        return $this->hasMany(Flower::class);
    }  
}
