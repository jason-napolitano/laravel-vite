<?php

namespace App\Http\Controllers\Auth;

use Inertia\Response;
use App\Helpers\Render;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Providers\RouteServiceProvider;
use App\Http\Requests\Auth\LoginRequest;

class LoginController extends Controller
{
    /**
     * Render the login page
     *
     * @return \Inertia\Response
     */
    public function index(): Response
    {
        // Render the view
        return Render::auth('login');
    }

    /**
     * Account login action
     *
     * @param \App\Http\Requests\Auth\LoginRequest $request
     *
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        // Authenticate the user
        $request->authenticate();

        // Generate the session data
        $request->session()->regenerate();

        // Redirect with flash data
        return to_route(RouteServiceProvider::HOME, auth()->user())->with([
            'message' => 'You\'ve been successfully logged in',
            'context' => 'success',
        ]);
    }
}
