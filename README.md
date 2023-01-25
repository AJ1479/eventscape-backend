# eventscape-backend

A fully featured event management platform, written in `Node.js` and `EJS`.

## Features

- MongoDB integration through `mongoose`
- Frontend written in `EJS`
- Password hashing and salting
- Login sessions
- Thumbnail upload using `multer`
- Fetches upcoming events by category 

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL`

`PORT`

## Deployment

To deploy this project, first install packages using

```bash
  npm i
```

Then start the server with

```bash
  npm start
```


## API Reference

#### Home

```
  GET /home
```

Returns the rendered page with dynamic data

```
  POST /home
```

Route to search for event based on name, redirects to `/search/:search`

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `event`   | `string` | Event name  |

#### Login

```
  GET /login
```

Renders the Login page

#### Register

```
  GET /signup
```

Returns the web page to Sign-up

```
  POST /
```

| Parameter         | Type     | Description      |
| :---------------- | :------- | :--------------- |
| `username`        | `string` | Username         |
| `email`           | `string` | Email            |
| `password`        | `string` | Password         |
| `confirmpassword` | `string` | Confirm password |

#### Add Event

```
 GET /addevent/
```

Renders the data collection page to add a new event

```
  POST /addevent/
```

| Parameter          | Type     | Description           |
| :----------------- | :------- | :-------------------- |
| `eventname`        | `string` | Name of the event     |
| `fees`             | `string` | Entry fees            |
| `eventtype`        | `string` | Type of the event     |
| `eventvenue`       | `string` | Venue description     |
| `eventtech`        | `string` | eventtech             |
| `eventdate`        | `string` | Date of event         |
| `eventtime`        | `string` | Start time            |
| `eventlink`        | `string` | Link to event website |
| `eventdescription` | `string` | Event Description     |

Redirected to `/event/:eventname`

#### Search

```
  GET /search/:event
```

Search and view the details of an event

| Parameter | Type     | Description              |
| :-------- | :------- | :----------------------- |
| `event`   | `string` | Event name to search for |

#### Event

```
  GET /event/:event
```

Display the details of an event

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `event`   | `string` | Event name  |
