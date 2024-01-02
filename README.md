# webdev_template

This is a personal template for projects setup with webpack and tailwind and prettier

Instructions from scratch:

Webpack Setup:

    npm init -y
    npm install webpack webpack-cli webpack-dev-server style-loader css-loader postcss-loader --save-dev

    <!-- Create webpack.config.js file as shown -->
        <!-- this sets entry, output, css and image modules, dev server -->
    <!-- Create .gitignore as shown -->
        <!-- this ignores node_modules in git-->
    <!-- Add "build" and "start" scripts to package.json as shown-->
        <!-- this sets scripts for ease of use -->

Template Files and Structure Setup:

    <!-- Create files in ./src (index.js style.css) and ./dist (index.html) folders-->
    <!-- Add structure and script tag to index.html as shown-->
        <!-- this points html file to index.js -->

Tailwind Setup:

    npm install tailwindcss postcss autoprefixer --save-dev
    npx tailwindcss init

    <!-- Create postcss.config.js as shown -->
        <!-- this sets up tailwind and autoprefixer plugins with postcss which loads into webpack -->
    <!-- Add content value to tailwind.config.js as shown -->
        <!-- this points tailwind to search for tailwind classes in your html and js files -->
    <!-- Add tailwind directives to styles.css as shown -->
        <!-- this points your css file to tailwind -->
    <!-- Add import css statement to index.js as shown -->
        <!-- this imports css into index.js for so that webpack can compile it -->

Prettier + TailwindPlugin Setup:

    npm install prettier prettier-plugin-tailwindcss --save-dev

    <!-- Create prettier.config.js as shown -->
        <!-- this adds the tailwind plugin to the prettier config -->
    <!-- Create .prettierignore file as shown -->
        <!-- this ignores formatting our bundle.js file -->

Run following to install dependencies:

    npm install
