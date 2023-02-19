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
      'arrangement_id'=>$this->resource->arrangement,
      'quantity'=>$this->resource->quantity,
      'date_of_order'=>$this->resource->date_of_order,
      'user'=>new UserResource($this->resource->user)
        ];
    
    }
}
