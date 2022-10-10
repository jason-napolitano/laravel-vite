<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to
     * make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return !auth()->user();
    }

    /**
     * Get the validation rules that apply to the
     * request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'name'                  => ['required', 'string', 'max:255'],
            'email'                 => ['required', 'string', 'email', 'max:255', Rule::unique(User::class)],
            'username'              => ['required', 'string', 'max:255', Rule::unique(User::class)],
            'image'                 => ['mimes:jpg,png,jpeg,gif'],
            'password'              => [
                'required',
                'string',
                'confirmed',
                Password::min(8)//->numbers()->mixedCase()->symbols(),
            ],
            'password_confirmation' => ['required', 'string'],
        ];
    }
}
