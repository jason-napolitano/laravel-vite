<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Tests\ResetDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use ResetDatabase;

    public function testLoginProcessCompletesWithCorrectCredentials(): void
    {
        $admin = User::find(2);

        $this
            ->followingRedirects()
            ->post(
                route('login.store', [
                    'email'    => 'admin@example.com',
                    'password' => 'password',
                ])
            )
            ->assertOk()
            ->assertInertia(
                fn (AssertableInertia $page) => $page->where('errors', [])
            );

        $this->assertAuthenticatedAs($admin);
    }

    public function testLoginProcessFailsWithIncorrectPassword(): void
    {
        $this
            ->followingRedirects()
            ->post(
                route('login.store', [
                    'email'    => 'admin@example.com',
                    'password' => 'wrong_password'
                ])
            )
            ->assertOk()
            ->assertInertia(
                fn (AssertableInertia $page) => $page->where(
                    'errors.email',
                    'These credentials do not match our records.'
                )
            );
    }

    public function testLoginProcessFailsWithoutPassword(): void
    {
        $this
            ->followingRedirects()
            ->post(
                route('login.store', [
                    'email'    => 'admin@example.com',
                ])
            )
            ->assertOk()
            ->assertInertia(
                fn (AssertableInertia $page) => $page->where(
                    'errors.password',
                    'The password field is required.'
                )
            );
    }

    public function testLoginRouteExists(): void
    {
        $this->get(route('login.index'))->assertOk();
    }
}
