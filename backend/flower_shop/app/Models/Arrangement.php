<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Flower;
use App\Models\Category;


class Arrangement extends Model
{
    use HasFactory;
    protected $guarded=[];
    public $timestamps=false;
    protected $primaryKey = 'arrangement_id';

    public function flower()
    {
        return $this->belongsTo(Flower::class,'flower_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }

    // public function order()
    // {
    //     return $this->hasMany(Order::class);
    // }


   
}
