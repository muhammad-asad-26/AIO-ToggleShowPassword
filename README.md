## ToggleShowPassword
Display a toggle to show/hide password input fields

## Features and limitations

### Features
Display an icon for switching a password input to visible text. Then dislpaying another icon for switching back. 

In many cases this would be images such as eyes open and eyes closed.

### Limitations
There are no default images at this moment. Inserting your own images is required. The used images can be SVG, though they are still added as image (no dynamic colors options right now).

## Dependencies
Place close to a password textbox.

## Installation
Install the widget and configure the 2 icons. Then place close by a password textbox field.

## Bugs
none known at this moment.

## Development and contribution
1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.