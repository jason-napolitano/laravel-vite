> A boilerplate built on Laravel, Vite, Typescript and Vue. Loosely opinionated codebase but
> tested and well organized in a way that makes sense to me. It uses Bootstrap, Font Awesome
> and ElementUI for the UI & UX.
>
> Also included is a fully functional RBAC on both the server, and the client
> with a [`can()`](https://github.com/jason-napolitano/laravel-vite/blob/main/resources/utils/index.ts#L249) function for the frontend to check the permissions
> on the backend.
>
> Other cool features are included that are just all around helpful in my experience
> in building high-grade applications. All code is tested using PHPUnit and a custom 
> test trait that resets the database by running fresh migrations and seeding the 
> database. There are also some well sorted [Javascript helper files](https://github.com/jason-napolitano/laravel-vite/tree/main/resources/utils) that assist in parsing
> laravel dates (using dayjs) and some other cool functionality

[![Build Status](https://app.travis-ci.com/jason-napolitano/laravel-vite.svg?branch=main)](https://app.travis-ci.com/jason-napolitano/laravel-vite)

## Install, Run & Optimize

- Before running the commands below, copy the `.env.example` file to `.env` and change your settings (database, app
  title, etc)

### Installation

```bash
# server dependencies
$ composer install
# client dependencies
$ npm install
# generate application key
$ composer key
# migrate & seed
$ composer build
```

### Run

```bash
# client (development)
$ npm run dev
# client (production)
$ npm run build
# server (development)
$ php artisan serve
```

### Optimize & test

```bash
# optimize codebase
$ composer prettify # laravel (psr-12)
$ npm run prettify  # vue-js (prettier)
# clear all caches
$ composer optimize
# server tests
$ php artisan test
# client tests
$ npm run test
```

## Accounts

### Admin:

```
username: admin@example.com
password: password 
```

### Member:

```
username: member@example.com
password: password 
```

## License

Copyright (c) 2022 Jason Napolitano

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
