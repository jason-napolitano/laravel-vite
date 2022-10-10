<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Response;
use App\Helpers\Render;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Providers\RouteServiceProvider;
use App\Http\Requests\Auth\RegisterRequest;

class RegisterController extends Controller
{
	/**
	 * Render the registration page
	 *
	 * @return \Inertia\Response
	 */
	public function index(): Response
	{
		// Render the view
		return Render::auth('register');
	}
	
	/**
	 * Register action
	 *
	 * @param \App\Http\Requests\Auth\RegisterRequest $request
	 *
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function store(RegisterRequest $request): RedirectResponse
	{
		// Validate the request data
		$request->validated();
		
		// Create a new user record
		$user = User::create([
			'username' => $request['username'],
			'name'     => $request['name'],
			'email'    => $request['email'],
			'password' => bcrypt($request['password']),
			'image'    => $request->image ?? 'uploads/no-avatar.jpg',
		]);
		
		// Assign a default role
		$user->assignRole('member');
		
		// Redirect with flash data
		return redirect()->route(RouteServiceProvider::HOME)->with([
			'message' => 'You\'ve been successfully registered',
			'context' => 'success',
		]);
	}
}
