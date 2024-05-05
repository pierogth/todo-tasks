#!/bin/sh

# Build assets
npm run build

#remove hot file that cause CORS problem with VITE
rm -rf /app/public/hot

# Run the migration and seeding
php artisan migrate:fresh --seed

php artisan serve --host=0.0.0.0