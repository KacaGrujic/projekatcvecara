<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order;


class Flower extends Model
{
    use HasFactory;
    protected $guarded=[];
    public $timestamps=false;
    protected $primaryKey = 'flower_id';

    public function order()
    {
        return $this->hasMany(Order::class);
    }
}
