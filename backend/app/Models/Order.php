<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Arrangement;
use App\Models\User;



class Order extends Model
{
   
    use HasFactory;
    protected $guarded=[];
    protected $primaryKey = 'order_id';

    public function arrangement()
    {
        return $this->belongsTo(Arrangement::class,'arrangement_id');
    }
    

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
