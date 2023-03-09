KOM MUNGU SHENIMET E ARTINES
shenime :
te relacioni many to many, krijohet nje pivot table lidh dy tabelat qe e kan
relacionin many to many, pivot table tabela ndihmse i mer dy idt e tabelave
edhe i lidh njo me shume idt me tabelat, ma leht lexojm me pivot table se i kemi
veq idt
https://orkhan.gitbook.io/typeorm/docs/many-to-many-relations
te qeky link i kena bo

tane e kena bo deleting many to many amo prej qety linkit nuk na ka bo, tane deri sa e gjet errorin profa

e ka qu nchat prit ta qoj

qeshtu u dasht mu bo delete :
const categoryToRemove = { id: 1 }
const questionRepository = dataSource.getRepository(Question)
const question = await questionRepository.findOne({
    where: { id: 1 },
    relations: ['categories'],
});
question.categories = question.categories.filter((category) => {
    return category.id !== categoryToRemove.id
})
await questionRepository.save(question)

tani e kena bo edhe loading many to many qe osht te qaj linki

edhe bi directional relations

edhe qet detyren na ka dhon :
Te ktijohen dy entitete
User (id,username, email,age,created_at,updated_at)
Role(id,name)
Te krijohen relation te nevojshme
Te shtohen disa user dhe role duke i shtuar role te caktuara
Te shfaqen te gjith users
Shfaq vetem nje user nga tabela User
Shfaq listen duke selektuar vetem emrat e userve
Te shfaqen users qe i takojn roli, lloji i rolit te caktohet ne parameter te metodes
Te shfaqen vetem user qe kan moshe me te madhe ose te barabart me 18 vjete
Te behet update nje user nese egziston aj user
Shfaq numrin total te rows ne tablen user dhe role
Shfaq të gjithë useret me role qe jan assign
me repo ose me querybuilder me bo