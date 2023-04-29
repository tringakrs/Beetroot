Projekti Kutia NestJs

npm i
copy paste prej .env.example ne .env
krijoje databazen

husky per git
templates jane pejse e views. jane disa raste ne API qe na duhet me kthy HTML file per ate eshte template psh me dergu email.
test me testu me jest na lejon.
starter na mundeson me bo run edhe ne docker.
.env-jat ketu kur jemi ne proejkte reale dhe punojme me grup ktu i shtojme var qe i kemi shtu ne task tone dhe i bejme push qe me i dale edhe tjerve kur e bejne pull dhe secili i pershtat me creds te veta.
docker compose serviset qe i kemi te ketij app momentalisht service nest, pgadmin, mailhog plus 1
docker file nga file fiziksiht i kthen ne docker
package.json i kemi disa librari psh winston logger qe i kap logs i gjun neper file qe nese deshton sistemi me mujt me i lexu, argon2 encrypt per token etj.
service
main perafersisht i ngajshem si me session te kalum por plus disa instanca si setGlobalPrefix i cili ne kontroller cakton path me qene qaaj localhost.
Nese env ndryshe nga prod mos me qite pjesen e swagger apo dokumentimit kurse ne localhost mundemi me pa si devs.
te swagger kemi title, descp, version, addBasicAuth qe me mujt me u auth. 
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('Nestjs Node v18 Starter')
      .setDescription('Nestjs Node v18 Starter API Documentation')
      .setVersion('1.0')
      .addTag('Node v18')
      .addBearerAuth()
      .addBasicAuth()

      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }
  senet statike qiten ne env qe nuk ndryshohen.
  kur nuk ish dasht me pase kontroller nje starter?
  kur req nuk i vine ketij moduli psh kur krijojme nje model qe ju sherben moduleve tjera se klienti asnjehere nuk i qaset por vetem moduli.
  per me punu endpoint ne Swagger na duhet me marre token kur ja jepim user dhe pass, njejte shkon per Postman ku mundemi me kriju variablen globale token