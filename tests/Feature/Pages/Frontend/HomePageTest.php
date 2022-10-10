<?php

namespace Tests\Feature\Pages\Frontend;

use Tests\TestCase;
use Inertia\Testing\AssertableInertia;

class HomePageTest extends TestCase
{
    /**
     * Does the route correctly render the view file?
     *
     * @return void
     *
     * @test
     */
    public function homePageRendersCorrectly(): void
    {
        $this
            ->get(route('home'))
            ->assertOk()
            ->assertInertia(
                fn (AssertableInertia $page) => $page
                    ->component('frontend/home', false)
            );
    }

    /**
     * Let's make sure the route is working properly
     *
     * @return void
     *
     * @test
     */
    public function homeRouteExists(): void
    {
        $response = $this->get(route('home'))->assertOk();
    }
}
