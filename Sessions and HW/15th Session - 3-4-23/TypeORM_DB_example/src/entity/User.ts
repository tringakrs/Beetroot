import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
//kena kriju nje obj dhe kena thon mos e thirre vetmen nje klase po disa prej tyre. krejt keto jane klasa ne vete.

@Entity()
//keto jane decorators ne nest ne gjuhe tjera annotations. kjo eshte kur inicializoje amo ma clean per sy.
export class User {
//emri klases pasqyron emrin e tabeles
    @PrimaryGeneratedColumn()
//ky decorator vet e bon automatikisht nje id per user qe krijojme
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    age: number

    @Column({nullable:true})
    test: string
//nuk len alter se e kena shtu edhe se kena thon qe osht null ne kllapa

}
