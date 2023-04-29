import { AppDataSource, Conn2 } from './data-source';
import { User } from "./entity/User"
import { Student } from "./entity/Student"; //import Student entity
import { Customer } from "./entity/Costumer";
import { Details } from "./entity/Details";
import { Category } from './entity/Category';
import { Question } from './entity/Question';

//async 
function test(): boolean{
    return true;
}

//nuk bon se nuk kthen promise
async function test2() : Promise<boolean>{
    return true;
}

Conn2.initialize().then(async ()=>{
    const conn = Conn2.manager;
    const userRepository = await conn.getRepository(User);
    console.log("Connect");
    
}).catch(err => console.error(err))

AppDataSource.initialize().then(async () => {
    const conn = AppDataSource.manager;
    const userRepository = await conn.getRepository(User);
    const result = await userRepository.createQueryBuilder('user').select().getMany();
    //console.log(result);
    
    

    // // console.log("Inserting a new user into the database...")
    // // const user = new User()
    // // user.firstName = "Timber"
    // // user.lastName = "Saw"
    // // user.email = "timbersaw@gmail.com"
    // // user.age = 25
    // // await AppDataSource.manager.save(user)
    // // console.log("Saved a new user with id: " + user.id)

    // // console.log("Loading users from the database...")
    // // const users = await AppDataSource.manager.find(User)
    // // console.log("Loaded users: ", users)

    // //create student object
    // const stud = new Student();
    // //Assign student name, lastname and age here
    // stud.info = { firstName: "John", lastName: "Michael", age:23 };
    // //save student object in connection
    // await AppDataSource.manager.save(stud);
    // console.log("Saved a new user with id: " + stud.id);
    // console.log("Loading users from the database...");
    // //Display student saved records
    // const students = await AppDataSource.manager.find(Student)
    // console.log("Loaded users: ", stud)

    // const details = new Details();
    // details.gender = "female";
    // details.country= "Germany"
    // await AppDataSource.manager.save(details);

    // const customer = new Customer();
    // customer.name = 'customer1';
    // customer.details = details;
    // await AppDataSource.manager.save(customer);

    //Session 16 - Many to Many
    const category = new Category();
    category.name = "Dicka"
    await AppDataSource.manager.save(category);

    const question = new Question();
    question.title = "Titulli 1"
    question.text = "Pershkrimi"

    question.categories = [category];
    await AppDataSource.manager.save(question);
   



    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
