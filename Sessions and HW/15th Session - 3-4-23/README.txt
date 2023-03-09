Projekti i ri
npm init
npm install typeorm --save - me install typeorm
npm install typeorm -g - me install globaly
npm install reflect-metadata --save
npm install @types/node --save
npm install mysql --save
npm install pg --save - To install PostgreSQL package, use the below command:

3.TypeORM - Creating a Simple Project
npm i -g typeorm
typeorm init --name FirstProject --database postgres
amo na duhet komanden ma poshte se e kena bo projketin

data-source.ts
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "tringa123",
    database: "session_15",
    synchronize: true,
    kjo dmth nese ne kemi true sa here ne shtojme nje entitet te ri dhe thojme annotation kjo e pasqyron ne db
    kjo duhet me qene gjithmone flase ne production
    logging: false,
    gjenerohen logs per query qe i bojme
    entities: [User],
    Cdo typeorm duhet me pase entitet dhe e thirrim permbrenda connections te typeorm
    migrations: [],
    subscribers: [],
})

async dhe await
const conn = AppDataSource.manager;
const userRepository = await conn.getRepository(User);
console.log(await userRepository.createQueryBuilder('user').select().getMany());
await si te promise then me sprit procesin deri te perfundoj pastaj vazhdon me procesin tjeter

eslint
ESLint is a popular open-source linting utility for JavaScript code. It is used to analyze and identify potential errors, bugs, and stylistic issues in JavaScript code, with the aim of improving code quality and consistency.
ESLint is highly configurable and can be customized to meet the needs of individual developers and teams. It comes with a wide range of built-in rules that cover common coding issues, such as syntax errors, unused variables, and formatting inconsistencies. 
It also supports the creation of custom rules, which can be used to enforce specific coding standards or conventions.
ESLint can be integrated into a variety of development environments and workflows, including code editors like Visual Studio Code and Sublime Text, as well as build tools like Webpack and Grunt. It can also be integrated into continuous integration and delivery (CI/CD) pipelines to catch issues early in the development process.
Overall, ESLint is a powerful tool for improving the quality and maintainability of JavaScript code. By identifying and addressing potential issues early in the development process, it can help developers to write cleaner, more efficient, and more maintainable code.
npm install eslint --global

const ma efikase ne memorie sesa let