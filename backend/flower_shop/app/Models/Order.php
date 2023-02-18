<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Flower;
use App\Models\User;



class Order extends Model
{
   
    use HasFactory;
    protected $guarded=[];
    protected $primaryKey = 'order_id';

    public function flower()
    {
        return $this->belongsTo(Flower::class,'flower_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
