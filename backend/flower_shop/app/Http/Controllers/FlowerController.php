<?php

namespace App\Http\Controllers;

use App\Models\Flower;
use App\Http\Resources\FlowerResource;
use App\Http\Resources\FlowerCollection;
use Illuminate\Http\Request;


class FlowerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $flowers=Flower::all();
        return new FlowerCollection($flowers);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator=Validator::make($request->all(),[
            'flower_id'=>'required|min:5',
            'name'=>'required',
            'description'=>'required',
            'category_id'=>'required',
            'price'=>'required'
          ]);
          if ($validator->fails()){
              return response()->json($validator->errors());
          }
  
  $f=Flower::create([
      'flower_id'=>$request->flower_id,
      'name'=>$request->name,
      'description'=>$request->description,
      'category_id'=>$request->category_id,
      'price'=>$request->price
  ]);
  
  return response()
  ->json(['Post created successfully.', new FlowerResource($r)]);
  }
    
    

    /**
     * Display the specified resource.
     */
    public function show(Flower $flower)
    {
        return new FlowerResource($flower);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Flower $flower)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Flower $flower)
    {
        $validator=Validator::make($request->all(),[
            'name'=>'required',
            'description'=>'required',
            'category_id'=>'required',
            'price'=>'required'
          ]);
          if ($validator->fails()){
              return response()->json($validator->errors());
          }


$reservation->name=$request->name;
$description->name=$request->description;
$category_id->name=$request->category_id;
$price->name=$request->price;

$flower->save();

return response()
->json(['Reservation updated successfully.', new FlowerResource($flower)]);
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Flower $flower): RedirectResponse
    {
        $flower->delete();
        return response()->json('Reservation deleted successfully.');
    }
}
