<?php

namespace App\Helpers;

use Inertia\Response;
use Inertia\ResponseFactory;

/**
 * A trait to help
 *
 * @package App\Helpers
 * @version 1.0.0
 */
class Render
{
    /**
     * Load the backend template
     *
     * @param string $view
     * @param array  $props
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public static function backend(string $view, array $props = []): Response|ResponseFactory
    {
        return inertia("backend/$view", $props);
    }

    /**
     * Load the backend template
     *
     * @param string $view
     * @param array  $props
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public static function view(string $view, array $props = []): Response|ResponseFactory
    {
        return inertia($view, $props);
    }

    /**
     * Load the auth template
     *
     * @param string $view
     * @param array  $props
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public static function auth(string $view, array $props = []): Response|ResponseFactory
    {
        return inertia("auth/$view", $props);
    }

    /**
     * Load the frontend template
     *
     * @param string $view
     * @param array  $props
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public static function frontend(string $view, array $props = []): Response|ResponseFactory
    {
        return inertia("frontend/$view", $props);
    }

    /**
     * Load the common template
     *
     * @param string $view
     * @param array  $props
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public static function common(string $view, array $props = []): Response|ResponseFactory
    {
        return inertia("common/$view", $props);
    }
}
