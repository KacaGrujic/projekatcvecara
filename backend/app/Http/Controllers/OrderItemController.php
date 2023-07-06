<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\OrderItemResource;
use Illuminate\Support\Facades\Validator;

class OrderItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return OrderItem::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        //
    }

    /**
     * Store a newly created resource in storage.
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
            'order_id' => $request->korpa_id,
            'flower_id' => $request->proizvod_id,
            'quantity' => $request->kolicina,




        ]);
        return response()->json(["Product item successfully created", $oi]);
        ;

    }
    

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return OrderItem::find($id);
    
    
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrderItem $orderItem): Response
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OrderItem $orderItem): RedirectResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderItem $orderItem): RedirectResponse
    {
        //
    }
}
