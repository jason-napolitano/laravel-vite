<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // users
        Permission::create(['name' => 'view_all_users']);
        Permission::create(['name' => 'manage_users']);
        Permission::create(['name' => 'restore_user']);
        Permission::create(['name' => 'create_user']);
        Permission::create(['name' => 'update_user']);
        Permission::create(['name' => 'delete_user']);

        // profiles
        Permission::create(['name' => 'manage_profile']);
        Permission::create(['name' => 'update_profile']);
        Permission::create(['name' => 'delete_profile']);
        Permission::create(['name' => 'view_profile']);

        // dashboard
        Permission::create(['name' => 'view_dashboard']);

        // admin wildcard for the client application
        // @see resources/js/Utils/index.js -> can()
        Permission::create(['name' => '*']);

        // --------------------------------------------
        // regular member
        $member = Role::create(['name' => 'member']);

        // profiles
        $member->givePermissionTo('manage_profile');
        $member->givePermissionTo('update_profile');
        $member->givePermissionTo('delete_profile');
        $member->givePermissionTo('view_profile');

        // dashboard
        $member->givePermissionTo('view_dashboard');

        $user = User::factory()->create([
            'username' => 'member',
            'name'     => 'Regular Member',
            'email'    => 'member@example.com',
        ]);
        $user->assignRole($member);


        // --------------------------------------------
        // administrator
        $admin = Role::create(['name' => 'admin']);
        $admin->givePermissionTo('*');
        $user = User::factory()->create([
            'username' => 'administrator',
            'name'     => 'Administrator',
            'email'    => 'admin@example.com',
        ]);
        $user->assignRole($admin);
    }
}
