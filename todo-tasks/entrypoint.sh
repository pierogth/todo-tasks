#!/bin/sh

# Run the default command
docker-php-entrypoint "$@"

# Run the migration and seeding
php artisan migrate:fresh --seed

php artisan serve --host=0.0.0.0