const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

//This round sends Hello to the default page
app.get('/', (req, res) => {
  res.send('Welcome to ExpressJs');
});

//this route takes input name from query params and returns name in upperCase
app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upperCase = name.toUpperCase();
  res.send(upperCase);
});

//This route take firstName and LastName as query params and returns the concatenated Full Name as a response
app.get('/fullName', (request, response) => {
  let firstName = request.query.firstName;
  let lastName = request.query.lastName;
  let fullName = firstName + ' ' + lastName;
  console.log('FullName is :' + fullName);
  response.send(fullName);
});

//This route takes Month and year as query params and returns the formatted Date as 'Month, year'
app.get('/date', (request, response) => {
  let month = request.query.month;
  let year = request.query.year;
  let formattedDate = month + ', ' + year;
  response.send(formattedDate);
});

//This routes greets as 'Namaste, name', for the name passed through the query params
app.get('/greet', (request, response) => {
  let name = request.query.name;
  let message = 'Namaste, ' + name + '!';
  response.send(message);
});

//This route formats the Address for the Street, State and City passed in Query Params.
app.get('/address', (request, response) => {
  let street = request.query.street;
  let state = request.query.state;
  let city = request.query.city;
  let address = street + ', ' + city + ',' + state;
  response.send(address);
});

//This route formats the email using userName and domainName from the query params.
app.get('/email', (request, response) => {
  let userName = request.query.userName;
  let domain = request.query.domain;
  let email = userName + '@' + domain;
  response.send(email);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
