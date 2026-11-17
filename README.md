# StudyShelf – setup (overlay for a fresh Laravel 11/12 app)
1. `composer create-project laravel/laravel studyshelf && cd studyshelf`
2. Copy this folder's contents over the project (merge `app/`, `database/`, `resources/`, `routes/`; replace routes/web.php and DatabaseSeeder.php).
3. Create a MySQL DB (XAMPP → phpMyAdmin) and set DB_* in `.env`.
4. `php artisan migrate --seed && php artisan storage:link && php artisan serve`
5. Public site: http://127.0.0.1:8000 · Admin: /admin/login → admin@example.com / ChangeMe123!  (CHANGE IT immediately)
Note: Tailwind and PDF.js load from CDN for zero-build setup.
