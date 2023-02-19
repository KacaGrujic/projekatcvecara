<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArrangementResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            // return parent::toArray($request);
           'arrangement_id'=>$this->resource->arrangement_id,
           'name'=>$this->resource->name,
           'description'=>$this->resource->description,
           'quantity'=>$this->resource->quantity,
           'category_id'=>$this->resource->category,
           'flower_id'=>$this->resource->flower
        ];
    }

}