#!/bin/sh

# Build assets
npm run build

# Run the migration and seeding
php artisan migrate:fresh --seed

php artisan serve --host=0.0.0.0