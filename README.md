# Random quotes OOP with API

Welcome to the Random Quotes app!

This project consists of a client-side Vanilla JavaScript app and a server-side Express Node.js app.

## Running the App

### Running the App in the Development Mode

#### Run server

1. Navigate to the root directory of the project.
2. Open a terminal window.
3. Change directory to the server subfolder:

`cd server`

4. Install server dependencies by running the folowing command:

`npm install`

5. Run server in the development mode with hot reload feature:

`npm run dev`

#### Run client

1. Open a new terminal window in the root of the project.
2. Run client in the development mode with hot reload:

`npx live-server client`

3. Client will be running at the http://localhost:8080

### Running the App in the Production Mode

#### Run server

1. Navigate to the root directory of the project.
2. Open a terminal window.
3. Change directory to the server subfolder:

`cd server`

4. Install server dependencies by running the folowing command:

`npm install`

5. Run server in the production mode with hot reload feature:

`npm start`

6. Configure hosting server where you run application to forward all requests to the
   http://localhost:3000
7. Take assigned by the hosting provider URL for your backend API server for example
   https://my-random-quotes-api.com

#### Run client

1. There is no need to build the client as it already contains HTML, CSS, JS files.
2. In the `client/config.js` replace http://localhost:3000 with URL assigned to the server API in the step 7 of the previous section.
3. Host all client files from the `client` subfolder on the public web server.
4. Get assigned by the hosting provider URL for your client frontend application.
