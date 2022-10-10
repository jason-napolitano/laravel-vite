<?php

namespace Tests\Feature\Auth;

use Inertia\Testing\AssertableInertia;
use Tests\ResetDatabase;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use ResetDatabase;

    public function testRegistrationProcessCompletesWithCorrectCredentials(): void
    {
        $this
            ->followingRedirects()
            ->post(route('register.store', $this->user))
            ->assertOk()
            ->assertInertia(
                fn (AssertableInertia $page) => $page->where('errors', [])
            );
    }

    public function testRegistrationProcessFailsWithNoFormData(): void
    {
        $this
            ->followingRedirects()
            ->post(route('register.store', []))
            ->assertOk()
            ->assertInertia(
                fn (AssertableInertia $page) => $page
                    ->where('errors.name', 'The name field is required.')
                    ->where('errors.email', 'The email field is required.')
                    ->where('errors.username', 'The username field is required.')
                    ->where('errors.password', 'The password field is required.')
            );
    }

    public function testRegistrationPageRendersCorrectly(): void
    {
        $this
            ->get(route('register.index'))
            ->assertOk()
            ->assertInertia(
                fn (AssertableInertia $page) => $page
                    ->component('auth/register', false)
            );
    }

    public function testRegistrationRouteExists(): void
    {
        $this->get(route('register.index'))->assertOk();
    }
}
