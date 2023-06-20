

const express = require('express');
const app =  express();
const people = require('./people.json');

const server = app.listen(7001, () => {
	console.log('Express running ->  PORT ${server.address().port}');
});

app.set('view engine', 'pug')

app.use(express.static(__dirname +'/public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/index', (req, res) => {
  res.render('index',
	{
	  title:'My Family',
	  people:people.profiles
	});
});

app.get('/profile', (req, res) => {
  const person = people.profiles.find(p => p.id === req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});
