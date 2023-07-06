<?php

namespace App\Http\Controllers;

use App\Models\Flower;
use Illuminate\Http\Request;
use App\Http\Resources\FlowerResource;
use App\Http\Resources\FlowerCollection;
use Illuminate\Support\Facades\Validator;

class FlowerController extends Controller
{

    public function index()
    {
        $flowers = Flower::all();
    
        return new FlowerCollection($flowers);
    }
    
    public function show($id)
    {
        $flower = Flower::find($id);
    
        return new FlowerResource($flower);
    }
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
            'name' => 'required|string',
            'description' => 'required|string|max:100',
            'price' => 'required',
            'image' => 'required',
            'category' => 'required',
        ]
    );

    if ($validator->fails())
    return response()->json($validator->errors());

    $f = Flower::create([
        'name' => $request->name,
        'price' => $request->price,
        'description' => $request->description,
        'quantity' => 0,
        'category' => $request->category,
        'image' => $request->image

    ]);
    return response()->json(["Flower succcessfully added", $f]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [


        ]);

        $f = Flower::find($request->id);
        if ($f) {
            $f->name = $request->name;
            $f->description = $request->description;
            $f->price = $request->price;
            $f->category = $request->category;
            $f->image = $request->image;
            $f->quantity = 0;



            $f->save();
            return response()->json(['Flower is successfully updated!', new FlowerResource($f)]);
        } else {
            return response()->json('Certain flower does not exist.');
        }
    }

    public function destroy($id)
    {
        $f = Flower::find($id);
        if ($f) {
            $f->delete();
            return response()->json("Flower is successfully deleted!");
        } else {

            return response()->json([
                'message' => 'Flower does not exist.',
            ], 400);
        }
    }
}
