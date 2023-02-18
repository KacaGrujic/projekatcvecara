<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;


class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap='orders';
    public function toArray(Request $request): array
    {
        return[
       // return parent::toArray($request);
      'order_id'=>$this->resource->order_id,
      'flower_id'=>$this->resource->flower_id,
      'quantity'=>$this->resource->quantity,
      'date_of_order'=>$this->resource->date_of_order,
      'order_id'=>$this->resource->order_id,
      'user'=>new UserResource($this->resource->user)
        ];
    
    }
}
