<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
	    // Implicitly grant "admin" role all permission checks using can()
	    Gate::before(static function ($user, $ability) {
		    if ($user->hasRole('admin')) {
			    return true;
		    }
	    });
    }
}
