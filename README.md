# ManageThis

#### An Epicodus Independent Project JavaScript week #3

#### By Michael Koceja

## Description

* This is a project showing my ability with Angular CLI with just one week of training.

## User Story:

* As a user, I'd like to visit a page to see a list of all team or club members.
* As a user, I'd like to click a team or club member's entry in the list to visit their profile page, which should include more details about them.
* As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do.
* As a user, I'd like all data persisted in a database, so it's always there when I need it.
* As an manager, I want to add new users to the club. (User authentication is not required).
* As an manager, I want to edit user profiles, in case I make a mistake, or need to update their details.
* As an manager, need the option to delete a user, in case they leave the club or team.

## Installation Requirements

* You must install or have installed a current version of:

  * [Node and npm](https://nodejs.org/en/)

  * [TypeScript](https://www.typescriptlang.org/#download-links)

  * [Angular CLI](https://github.com/angular/angular-cli)


## Setup

* Clone this repository

  `$ git clone https://github.com/michaelkoceja/club-manager`


* Run the following commands from the root directory:

  `$ npm install`

  `$ bower install`

  This will download the project's dependencies

  * Within the src folder create a file in the app directory called `api-keys.ts`

    Copy and Paste this code to the file:

    `export var masterFirebaseConfig = {
      apiKey: "AIzaSyBdb-uo3SPKfQKD-Co2wXzSioRTOzW5dqs",
      authDomain: "club-manager-66d98.firebaseapp.com",
      databaseURL: "https://club-manager-66d98.firebaseio.com",
      projectId: "club-manager-66d98",
      storageBucket: "",
      messagingSenderId: "756780267293"
      };
  `

* Build the project,

  Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

* Run the server,

  Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* The project should load!

## Known Bugs

There are currently no known bugs at this time.

## Support and contact details

For questions, concerns, or feedback, email me at michael.koceja@gmail.com

## Technologies Used

* HTML
* TypeScript
* JavaScript
* Angular 2
* Angular CLI
* Firebase
* jQuery
* NPM
* Bower
* Bootstrap

### License

MIT

Copyright (c) 2017 Michael Koceja
