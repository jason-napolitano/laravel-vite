<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    /** @var array|string[] $user */
    public array $user =  [
        'username'              => 'John Doe',
        'name'                  => 'john_doe',
        'email'                 => 'john_doe@example.com',
        'password'              => 'password',
        'password_confirmation' => 'password',
    ];
}
