<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ArrangementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $arrangements=Arrangement::all();
        return new ArrangementCollection($arrangements);
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
          
            'arrangement_id'=>'required',
            'name'=>'required',
            'description'=>'required',
            'category_id'=>'required',
            'price'=>'required',
            'quantity'=>'required',
            'flower_id'=>'required',


          ]);
          if ($validator->fails()){
              return response()->json($validator->errors());
          }
  
  $a=Arrangement::create([
      'arrangement_id'=>$request->arrangement_id,
      'name'=>$request->name,
      'description'=>$request->description,
      'category_id'=>$request->category_id,
      'price'=>$request->price,
      'quantity'=>$request->quantity,
      'flower_id'=>$request->flower_id


  ]);
  
  return response()
  ->json(['Post created successfully.', new FlowerResource($r)]);
  }
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new ArrangementResource($order);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validator=Validator::make($request->all(),[
         
            'name'=>'required',
            'description'=>'required',
            'category_id'=>'required',
            'price'=>'required',
            'quantity'=>'required',
            'flower_id'=>'required'
          ]);
          if ($validator->fails()){
              return response()->json($validator->errors());
          }


$arrangement->name=$request->name;
$arrangement->description=$request->description;
$arrangement->category_id=$request->category_id;
$arrangement->price=$request->price;
$arrangement->quantity=$request->quantity;
$arrangement->flower_id=$request->flower_id;




$flower->save();

return response()
->json(['Reservation updated successfully.', new FlowerResource($flower)]);
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): RedirectResponse
    {
        //
    }
}
