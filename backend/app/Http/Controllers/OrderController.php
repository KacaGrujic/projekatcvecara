<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MessageController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Message::all();
    }





    public function recieveAMessage(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [

                'name' => 'required|string|max:100',
                'email' => 'required|string|max:100|email',
                'message' => 'string'

            ]
        );
        if ($validator->fails())
            return response()->json(['success' => 'aaa']);





        $poruka = Message::create([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message
        ]);



        return response()->json(['success' => true]);
    }
}