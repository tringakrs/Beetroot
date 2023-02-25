API
API e ka nje format te vet qe din me bo req edhe me kthy res.
Ato qe i zhvillojme ne jane GRPC, GraphQL, Restful.

Ne kemi me msu Restful API.

Client komunikon me Server me API por kur nje server deshiron me komuniku me 1 server sepse qajo e dhene nuk gjendet te server 1 vetem e kemi dergu request te serveri 2 dhe merret e dhena.
Te dhenat jane ne format JSON.

Jane disa parakushte per API nje environment, dokumentim.

POSTMAN edhe Swagger.

Status code 200 qe kthen dicka, 4040 Not Found, 403 Frobidden kur nuk ni access dmth me marre request etj.

Endpoint

Scraping
Kur ne dojme me kriju nje site tone me disa te dhenat bojme scraping ja u marrim lajmet pa ne diktu. Osht dhe nuk eshte ilegale.

app.js te e_app_two
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//12th Session
//Nese nuk gjen route na kthen 404 e bon handle

Swagger - API documentation tool
https://fakerestapi.azurewebsites.net/index.html
Ka beenfite se integrohet ne projketin ku punojme si dependency.
Ka decorator ose anotation.
Merr paramentra nga metodat dhe i vendos ne API.

Te krijohet express new app CRUD per entitetitn Person. Fillimisht te krijohet klasa Person qe permban konstruktor me property id name dhe age. Ne app.js:
Te thirret klasa person.js dhe te krijohet nje array pople e cila thirr 3 inctanca te person p.sh let pople=[new Person(1,‘Emri’,30),…]
Te krijohet endpoint qe kthen ne formatin json te gjith personat
Te krijohet endpoint qe kthen personin permes parametrit id
Te krijohet endpoint qe shton person ne people array
Te krijohet endpoint qe ben update permes parametrit id personin specifik
Te krijohet endpoint qe ben delete permes parametrit id personin specifik
Nese ne metodat ku kemi parameter id dhe nuk egziston ajo id ne array duhet te kthehet status code 404

TypeScript
I shikon data types per ate eshte kriju.