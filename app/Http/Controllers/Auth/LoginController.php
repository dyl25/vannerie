<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Laravel\Passport\Client;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller {
    /*
      |--------------------------------------------------------------------------
      | Login Controller
      |--------------------------------------------------------------------------
      |
      | This controller handles authenticating users for the application and
      | redirecting them to your home screen. The controller uses a trait
      | to conveniently provide its functionality to your applications.
      |
     */

use AuthenticatesUsers;

    use IssueTokenTrait;

    private $client;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('guest')->except('logout');
        $this->client = Client::find(1);
    }

    public function login(Request $request) {
        $this->validate($request, [
            'username' => 'required|string',
            'password' => 'required|string'
        ]);

        return $this->issueToken($request, 'password');
    }
    
    public function refresh(Request $request) {
        $this->validate($request, [
            'refresh_token' => 'required'
        ]);

        return $this->issueToken($request, 'refresh_token');
    }
    
    public function logout() {
        $accessToken = Auth::user()->token();
        
        DB::table('oauth_refresh_tokens')
                ->where('access_token_id', $accessToken->id)
                ->update(['revoked' => true]);
        
        $accessToken->revoke();
        
        return response()->json([], 204);
    }

}
