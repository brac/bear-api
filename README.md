# An API example using Express and PG

##Installation:
```
npm install
```

##Usage:
Using your favorite HTTP send/request method you can POST to ```localhost:3000/api/bears``` with an object of
```
{
  "name": "bearName"
}
```
To enter a new entry into the database.

You can access individual bears by GETting from
```localhost:3000/api/bears/1``` for example, where the number is a bears unique identifier. In the same manner you can DELETE a bear with a DELETE request.

Lastly you can get all the bears in the database by preforming a GET on ```localhost:3000/api/bears/```