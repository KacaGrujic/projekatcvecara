<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_id',
        'quantity',
        'flower_id',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function flower()
    {
        return $this->belongsTo(Flower::class);
    }
}