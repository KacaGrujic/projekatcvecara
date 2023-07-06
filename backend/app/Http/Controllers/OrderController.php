<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Http\Resources\OrderItemCollection;
use App\Models\Order;
use App\Models\Flower;
use App\Models\OrderItem;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return Order::all();
    }

    /**
     * Show the form for creating a new resource.
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
        ]);
        
        if ($validator->fails()) 
            return response()->json($validator->errors()); 
        //ako ista korpa postoji ne treba nam 2 puta
        $order = Order::where('user_id', $request['user_id']);
        if($order){
            return response()->json(["Order already exists", $order ]);
        }else{

       
            $o = Order::create([
                    'user_id' =>   $request->user_id,  
            ]);
            return response()->json(["Order is created",new OrderResource($o)]);
         }
    }

    /**
     * Display the specified resource.
     *  @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
   

    /**
     * Show the form for editing the specified resource.
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *      * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *      * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order): RedirectResponse
    {
        //
    }
}
