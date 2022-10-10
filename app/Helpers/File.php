<?php

namespace App\Helpers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class File
{
    /** @var string|null */
    public static ?string $upload = null;

    /**
     * Upload a file to the file system
     *
     * @param Request     $request The request object
     * @param string      $field   The form field
     * @param string|null $path    Additional path details
     *
     * @return void
     */
    public static function upload(Request $request, string $field = 'file', string $path = null): void
    {
        if ($request->hasFile($field)) {
            $file = $request->file($field);
            $file->hashName();
            static::$upload = $file->store('uploads' . $path ? "/$path" : '');
        }
    }

    /**
     * Delete a file from the filesystem
     *
     * @param string $filename
     *
     * @return void
     */
    public static function delete(string $filename): void
    {
        if (Storage::exists($filename)) {
            Storage::delete($filename);
        }
    }
}
