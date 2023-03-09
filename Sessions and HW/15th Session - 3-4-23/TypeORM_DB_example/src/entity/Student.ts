import {Entity, PrimaryGeneratedColumn, Column, Generated} from "typeorm";
@Entity()
export class Student {
 @PrimaryGeneratedColumn()
 id: number;
 @Column()
 @Generated("uuid")
 uuid: string;
 info: { firstName: string, lastName: string, age: number };
    projects: any;
    name: string;
}