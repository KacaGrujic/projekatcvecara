<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FlowerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public static $wrap='flowers';
    public function toArray(Request $request): array
    { return [
        //return parent::toArray($request);
      'flower_id'=>$this->resource->flower_id,
      'name'=>$this->resource->name,
      // 'description'=>$this->resource->description,
      // 'price'=>$this->resource->price,
      // 'category'=>$this->resource->category,
    ];
    }
}
