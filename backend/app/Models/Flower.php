<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flower extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'price',
        'quantity',
        'image',
        'category'
    ];

    public function category()
    {
       return $this->belongsTo(Category::class);
    }
    public function orderItems()
    {
       return $this->belongsTo(OrderItem::class);
    }


}
