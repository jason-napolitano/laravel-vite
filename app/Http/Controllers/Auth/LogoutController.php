<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use App\Providers\RouteServiceProvider;

class LogoutController extends Controller
{
	/**
	 * Perform the logout action
	 *
	 * @param \Illuminate\Http\Request $request
	 *
	 * @return \Illuminate\Http\RedirectResponse
	 */
    public function __invoke(Request $request): RedirectResponse
    {
        // Logout of account
        Auth::guard('web')->logout();

        // Invalidate session data
        $request->session()->invalidate();

        // Regenerate session token
        $request->session()->regenerateToken();

        // Redirect with flash data
        return to_route(RouteServiceProvider::HOME)->with([
            'message' => 'You\'ve been successfully logged out',
            'context' => 'success',
        ]);
    }
}
