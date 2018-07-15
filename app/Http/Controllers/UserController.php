<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function listRaw() {
        return User::all();
    }
    public function reveal($email) {
        // $email = request('email');
        
        $user = User::where('email', $email)->firstOrFail();

        // return [$messages = $user->messages, $user];

        return response()->json([
            "user" => $user->messages
        ], 200);
   }
}
