# Getting started with Tailwind CSS

## Installation 

There are many ways to install Tailwind CSS, I'll be going over how you can install it with your React app. If you are interested in installing it a different way you can follow the installation setup [here](https://tailwindcss.com/docs/installation)

1. Start by creating your React app
    #### `$ yarn create react-app app-name`
    #### `$ cd app-name`

2. Install Tailwind CSS
    #### `$ yarn add -D tailwindcss postcss autoprefixer`
    #### `$ yarn tailwind init -p`

3. Configure template paths in `tailwind.config.js`
    ```
    content: [
        "./src/App.js
    ],
    ```
    Make sure to restart your server everytime you add more template paths, you'll get errors otherwise.
4. Add Tailwind CSS directives in `./src/index.css`
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5. Start your React app
    #### `$ yarn start`

6. Now you're ready to start using Tailwind CSS!

## Helpful Tools

I would recomment downloading the VS Code extension Tailwind CSS IntelliSense [here](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) as it provides us with autocomplete, hover previews, syntax highlighting, and linting!