# CYOA Jumpchain Journal

Journalpage for storing adventures

### Notes

- Data is imported from CYOA's built with [CYOA Viewer](https://github.com/aronedwards91/CYOA-Viewer)

- Signle Embedded HTML file, so can be sued as app (not optimised for web hosting)

- Image linked will auto embed up to 6MB (over 6 is left out just as a warning as this creates very slow & large html files, most images are small and only require around 300x400 for big screens.)

#### TODO
- journalling
- backup / restore character
- collapsable jump
- mobile styling

## Setup & other stuff

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Then Ejected to Webpack to allow for single html packaging thanks to [pomo](https://stackoverflow.com/questions/51949719/is-there-a-way-to-build-a-react-app-in-a-single-html-file)

#### Available Scripts

In the project directory, you can run:

- `yarn start`

Runs the development mode @ <br />
Open [http://localhost:3000](http://localhost:3000). Hot reloads.

- `yarn build`

Builds the app for production to the `build` folder.<br />
Other files will be in the folder but only the index.html is required.
