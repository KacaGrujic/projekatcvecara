<?php

namespace App\Http\Resources;

use App\Models\Flower;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\FlowerResource;

class OrderItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        return [
            'order' => $this->resource->order_id,
            'flower' => new FlowerResource(Flower::find($this->resource->flower_id)),
            'user'=>new UserResource(User::find($this->resource->user_id)),
            'quantity' => $this->resource->quantity,
       
        ];
    }
}
