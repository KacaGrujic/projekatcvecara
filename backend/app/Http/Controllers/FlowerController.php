<?php

namespace App\Http\Controllers;

use App\Models\Flower;
use Illuminate\Http\Request;
use App\Http\Resources\FlowerResource;

use Illuminate\Support\Facades\Validator;

class FlowerController extends Controller
{
 /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FlowerResource::collection(Flower::all());
    }
    
     /**
     * Display the specified resource.
     *
     * @param  \App\Models\Flower  $flower
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new FlowerResource(Flower::find($id));
    }

 /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

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

  /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Flower  $flower
     * @return \Illuminate\Http\Response
     */

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
   /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Flower  $flower
     * @return \Illuminate\Http\Response
     */

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
