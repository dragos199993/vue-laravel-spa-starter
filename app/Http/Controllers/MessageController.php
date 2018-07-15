<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;
use JWTAuth;

class MessageController extends Controller
{
    public function new(Request $request) {
        $userId = JWTAuth::parseToken()->authenticate()->id;
        $content = $request->content;

        $user  = Message::create([
            'user_id' => $userId,
            'content' => $content
        ]);

        return response()->json([
            "user" => $user
        ], 200);

    }
}
