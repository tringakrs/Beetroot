NestJs
https://docs.nestjs.com/

Build on Express dallon ne strukturim
Nest perkrah modulet
Ma e pershtatshme per mikroservise meqe ato jane pakashume si module

Installing NestJs
npm i -g @nestjs/cli
nest new project-name

Get started with the other commands:
cd test-nest-project
npm run start

Nese ne Nest dikujt i bon diqka e ty jo me fshi package-lock.json

File controller, service dhe module
Kontrolleri i menaxhon krejt req edhe res qe vine, serviset perdoren per mos me pase kontrolleri kontaktin e pare me databaze.
KOntrolleri eshte nje klase qe definohet si kontroller. Mbrenda kontrolleri mundemi me zhvillu logjike me shtu kod amo nuk preferohet sidomos me MVC pattern nuk perfillet pattern-i.

  @Get()
  getHello(): string {
    return this.appService.getHello();
    //this i referohet obj te kesaj klase
  }

  fillimisht behen entitetet, repot pastaj serviset

real time ndryshimet i detekton kur behet run
  nest start --watch

jest na mundeson testim ne NestJs

 Schematics available on @nestjs/schematics collection:
nest --help

nest g service
permission
krijohet folder premission
spec.ts na mundeson unit testing
na e largon qat file testues
nest g service presmission --no--specs
nest g controller presmission
nest g module premission   

DSH
Me lexu overview edhe funamentals of NestJs