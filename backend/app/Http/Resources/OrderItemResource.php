<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\FlowerResource;

class OrderItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'order' => $this->order_id,
            'flower' => new FlowerResource(Flower::find($this->resource->flower_id)),
            'user'=>new UserResource(User::find($this->resource->user_id)),
            'quantity' => $this->quantity,
       
        ];
    }
}
