<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\Creation::class, function (Faker $faker) {
    return [
        'creator_id' => 1,
        'name' => $faker->sentence(3),
        'description' => $faker->paragraph(4),
        'created_at' => $faker->date()
    ];
});
