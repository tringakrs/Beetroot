// import {Column, Entity, Generated, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
// import {User} from "./User";
// import {type} from "os";


// @Entity()
// export class Post{
//     @PrimaryGeneratedColumn()
//     id: number


//     @Column({nullable:true})
//     name:string


//     @Column({length:100,nullable:true})
//     description: string

//     @Column("int",{nullable:true})
//     numberofPost: number


//     // @ManyToOne(type => User, user => user.posts)
//     // user: User;


//     @OneToOne(type=>User)
//     @JoinColumn()
//     user: User;



// }