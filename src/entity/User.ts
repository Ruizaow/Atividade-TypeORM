// para o TypeORM rodar no TypeScript sem erro, altere a opção "strictPropertyInitialization" em 'tsconfig.json' para FALSE

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: false})
    isActive: boolean;
}
