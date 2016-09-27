# An Angular 1.x and ES6 bookmark manager
Bookmark manager built with AngularJS, ES6, Webpack, and Gulp.

## Installing
```bash
npm i
gulp
```

## Generating Components
There is a convenient Gulp task called `component` to generate components. To do so, simply run `gulp component --name componentName`.

The parameter following the `--name` flag is the name of the component to be created. Ensure that it is unique or it will overwrite the preexisting identically-named component.

The component will be created, by default, inside `client/app/components`. To change this, apply the `--parent` flag, followed by a path relative to `client/app/components/`.

Because the argument to `--name` applies to the folder name **and** the actual component name, make sure to camelcase the component names.

## Resources

https://themify.me/themify-icons


