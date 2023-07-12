<?php

namespace App\Http\Controllers;

use App\Http\Resources\FlowerResource;

use App\Models\Flower;

use Illuminate\Http\Request;
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
                'name' => 'required',
                'description' => 'required|string|max:100',
                'price' => 'required',
                'category' => 'required',
                'image' => 'required'

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
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Flower  $flower
     * @return \Illuminate\Http\Response
     */
    public function edit(Proizvod $proizvod)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Flower  $flower
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [


        ]);

        if ($validator->fails())
            return response()->json($validator->errors());

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