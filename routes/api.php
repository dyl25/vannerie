<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('subscribe', 'Auth\RegisterController@register');
Route::post('login', 'Auth\LoginController@login');
Route::post('refresh', 'Auth\LoginController@refresh');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->group(function() {
    Route::get('/user', function (Request $request) {
        return Auth::user();
    });
    Route::post('logout', 'Auth\LoginController@logout');
});

Route::get('articles', 'ArticleController@index');
Route::get('articles/{article}', 'ArticleController@show');
Route::post('articles', 'ArticleController@store');
Route::patch('articles/{article}', 'ArticleController@update');
Route::delete('articles/{article}', 'ArticleController@delete');

Route::get('creations', 'CreationController@index');
Route::get('creations/{creation}', 'CreationController@show');
Route::post('creations', 'CreationController@store');
Route::patch('creations/{creation}', 'CreationController@update');
Route::delete('creations/{creation}', 'CreationController@delete');
