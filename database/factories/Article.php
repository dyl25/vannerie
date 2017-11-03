<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\Article::class, function (Faker $faker) {
    $title = $faker->sentence();
    return [
        'user_id' => 1,
        'title' => $title,
        'slug' => str_slug($title, '-'),
        'content' => $faker->paragraph(9),
        'created_at' => $faker->date()
    ];
});
