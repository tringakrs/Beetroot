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

import {AppDataSource} from "./data-source"

import {Useri} from "./entity/Useri";
import {Role} from "./entity/Role";
import {LessThan, MoreThanOrEqual} from "typeorm";
import {User} from "./entity/User";


async function test(): Promise<boolean> {
    return true;
}

AppDataSource.initialize().then(async () => {


    const conn = AppDataSource.manager;
    const useriRepo = conn.getRepository(Useri)
    const roleRepo = conn.getRepository(Role)

    //  const role1 = new Role()
    //  role1.name = "Admin"
    // await roleRepo.manager.save(role1)
    //
    //
    //
    //
    //  const role2 = new Role()
    //  role2.name = "Agent"
    //  await  roleRepo.manager.save(role2)
    //
    //
    //  const role3 = new Role()
    //  role3.name = "User"
    // await roleRepo.manager.save(role3)


    const role1 = await roleRepo.createQueryBuilder('role').where("role.id = :id", {id: 1}).getOne()
    const role2 = await roleRepo.createQueryBuilder('role').where("role.id = :id", {id: 2}).getOne()
    const role3 = await roleRepo.createQueryBuilder('role').where("role.id = :id", {id: 3}).getOne()


    // const useri2 = new Useri()
    // useri2.username  = "Filan"
    // useri2.age = 22
    // useri2.email = "filan@gmail.com"
    // useri2.role = role2
    // await useriRepo.manager.save(useri2);


    // const result = await useriRepo.createQueryBuilder().where("Useri.roleId = :id", {id: 1}).getMany()
    // console.log(result)

    // const useri3 = new Useri()
    // useri3.username = "Albi"
    // useri3.age = 24
    // useri3.email = "albi@gmail.com"
    // useri3.role = role1
    // await useriRepo.manager.save(useri3)



    //Te shfaqen te gjithe users
    // const allUsers = await useriRepo.createQueryBuilder().select().getMany()
    // console.log(allUsers)


    //Shfaq vetem nje user nga tabela User
    // const oneUser = await useriRepo.createQueryBuilder().select().getOne()
    // console.log(oneUser)

    //Shfaq listen duke selektuar vetem emrat e userve
    // const userNames = await useriRepo.createQueryBuilder("user").select(["user.username"]).getMany()
    // console.log(userNames)



    //Te shfaqen users qe i takojn roli, lloji i rolit te caktohet ne parameter te metodes

    // const usersRole = await useriRepo.createQueryBuilder("user").where("user.roleId =:id",{id: 1}).getMany()
    // console.log(usersRole)


    //Te shfaqen vetem user qe kan moshe me te madhe ose te barabart me 18 vjete
    // const usersAge = await useriRepo.createQueryBuilder("user").where({age:MoreThanOrEqual(18)}).getMany()
    // console.log(usersAge)


    //Te behet update nje user nese egziston aj user
    // const updateUser = await useriRepo.createQueryBuilder("user").update(Useri).set({username: "Hello",age:17}).where("id=:id",{id:1}).execute()

    //Shfaq numrin total te rows ne tablen user dhe role
    // const numberOfRows = await useriRepo.createQueryBuilder("user").getManyAndCount();
    // console.log(numberOfRows)


    // Shfaq të gjithë useret me role qe jan assign
    // const usersRole = await  useriRepo.createQueryBuilder("user").leftJoinAndSelect("user.role","roleId").getMany()
    // console.log(usersRole)

}).catch(error => console.log(error))