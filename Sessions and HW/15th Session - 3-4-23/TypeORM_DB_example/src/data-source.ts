import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Student } from './entity/Student';
import { Result } from './entity/Result';
import { Grade } from "./entity/Grade";
import { Details } from './entity/Details';
import { Customer } from './entity/Costumer';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "tringa123",
    database: "session_15",
    synchronize: true,
    logging: false,
    entities: [User, Student, Result, Grade, Details, Customer,],
    migrations: [],
    subscribers: [],
})

export const Conn2 = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "tringa123",
    database: "fffff",
    synchronize: true,
    logging: false,
    entities: [User, Student, Result, Grade, Details, Customer,],
    migrations: [],
    subscribers: [],
})