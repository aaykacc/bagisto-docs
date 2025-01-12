# Package development

A package is a unit added to your application for enhancement which includes routes, controllers, views, and configuration specifically. Packages are created to manage your large applications into smaller units.

In Bagisto, we have created plenty of packages at path `packages/Webkul/`. You can find a basic tree-structure of the package below:

~~~directory-structure
- Webkul/Blog/
  - publishable/assets
    - css/
      - admin.css
      - default.css
      - velocity.css
    - images/
      - blog-icon.png
    - js/
      - app.js
  - src/
    - Config/
      - acl.php
      - admin-menu.php
      - system.php
    - Console/
      - Commands/
    - Contracts/
      - Post.php
    - Database/
      - Migrations/
        - 2023_04_21_173057_create_posts_table
      - Seeders/
    - Events/
    - Http/
      - Controllers/
        - Admin/
          - PostController.php
        - Shop/
          - PostController.php
      - Middleware/
      - Requests/
    - Listeners/
    - Mail/
    - Models/
      - Post.php
      - PostProxy.php
    - Providers/
      - BlogServiceProvider.php
      - ModuleServiceProvider.php
    - Routes
      - admin-routes.php
      - shop-routes.php
    - Repositories/
      - PostRepository.php
    - Resources/
      - assets/
        - images/
          - blog-icon.png
        - js/
          - app.js
        - sass/
          - admin.scss
          - default.scss
          - velocity.scss
      - lang/
        - app.php
      - views/
        - admin/
          - layouts/
            - style.blade.php
          - index.blade.php
          - create.blade.php
          - edit.blade.php
        - shop/
          - default/
            - layouts/
              - style.blade.php
            - index.blade.php
            - blog-details.blade.php
          - velocity/
            - layouts/
              - style.blade.php
            - index.blade.php
            - blog-details.blade.php
  - package.json
  - webpack.mix.js
~~~
