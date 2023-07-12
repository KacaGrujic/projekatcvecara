<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OrderItem::all();
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
                'order_id' => 'required',
                'flower_id' => 'required',
                'quantity' => 'required',

            ]
        );
        if ($validator->fails())
            return response()->json($validator->errors());





        $oi = OrderItem::create([
            'order_id' => $request->order_id,
            'flower_id' => $request->flower_id,
            'quantity' => $request->quantity,




        ]);
        return response()->json(["Order item successfully created", $oi]);
        ;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrderItem $orderItem
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return OrderItem::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OrderItem $orderItem
     * @return \Illuminate\Http\Response
     */
    public function edit(OrderItem $orderItem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrderItem $orderItem
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StavkaKorpe $stavkaKorpe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrderItem $orderItem
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrderItem $orderItem)
    {
        //
    }
}