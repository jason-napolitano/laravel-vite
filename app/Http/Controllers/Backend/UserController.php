<?php

namespace App\Http\Controllers\Backend;

use App\Models\User;
use Inertia\Response;
use App\Helpers\Render;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
	/**
	 * Load the correct view
	 *
	 * @return \Inertia\Response
	 */
    public function __invoke(): Response
    {
		// User data
        $users = User::paginate(5);
		
		// Render the view [with data]
        return Render::backend('users', [
            'users' => $users
        ]);
    }
}
