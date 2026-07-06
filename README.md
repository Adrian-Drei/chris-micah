# Wedding App (invitation for guests)  - VueJS

This is an application uses as wedding invitation for guests.

The app is a fork of my personal application I have developed for my own wedding (`I took time to clean and anonymize all personal information for this public repository`). I was thinking of building this kind of app to avoid sending letter invitations to all my guests (a small action to preserve the planet 🌍).

I use it to handle and provide all the necessary wedding information for my guests: 
- wedding planning, 
- timeline related to the bride and groom, 
- form to ask presence on the different days of the wedding, number of guests per family and food preferences.

The template used comes from [Neela by WiselyThemes](https://themeforest.net/item/neela-onepagemultipage-wedding-html5-template/34245021). I came from this template to convert it into a VueJS application. And adding it new features like:
- URL parsing, 
- form validation,
- connection with Firestore to store all guest responses.

_Note: The Wedding App is translated into French (my wedding was attended in France)._

![Home Screen](docs/home_screen.gif?raw=true "Home")

## Screenshots

DEMO links available:
-  [Home page](https://wedding-vuejs-demo.netlify.app)
-  [RSVP example page](https://wedding-vuejs-demo.netlify.app/rsvp?key=6cd71050-6335-59d3-a8eb-2361be550579)

| Wedding Invitation                                                |                                               Story Timeline                                            |                                                Wedding Planning                                          |                                                 Wedding Location                                          |
| :---------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| ![Wedding Invitation Screen](docs/wedding_invitation.png?raw=true "Wedding Invitation") | ![Story Timeline Screen](docs/story_timeline.png?raw=true "Story Timeline") | ![Wedding Planning Screen](docs/wedding_planning.png?raw=true "Wedding Planning") | ![Wedding Location Screen](docs/wedding_location.png?raw=true "Wedding Location") |


| Bridesmaids & Groomsmen                                                 |                                                RSVP Form                                                 |                                                Wedding Countdown                                         |                                                 Wedding Testimonials                                      |
| :---------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| ![Bridesmaids & Groomsmen Screen](docs/bridesmaids_groomsmen.png?raw=true "Home") | ![RSVP Form Screen](docs/rsvp_form.png?raw=true "RSVP Form") | ![Wedding Countdown Screen](docs/wedding_countdown.png?raw=true "Wedding Countdown") | ![Wedding Testimonials Screen](docs/wedding_testimonials.png?raw=true "Wedding Testimonials") |

## Getting started

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```