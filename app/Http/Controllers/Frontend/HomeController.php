<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Helpers\Render;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Load the correct view
     *
     * @return \Inertia\Response
     */
    public function __invoke(): Response
    {
        // render the view [with data]
        return Render::frontend('home', [
            'versions' => [
                'php' => PHP_VERSION,
                'laravel' => \Illuminate\Foundation\Application::VERSION
            ],
        ]);
    }
}
