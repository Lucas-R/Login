import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { UserProps } from "../../schemas/user";

@Entity("user")
export class UserEntity implements UserProps{
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    login_id!: string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column({ default: null })
    doc?: string;

    @Column({ default: null })
    birth?: number;

    @Column({ default: null })
    death?: number;

    @Column({ default: null })
    phone?: string;

    @Column({ default: null })
    address?: string;

    @Column({ default: null })
    city?: string;

    @Column({ default: null })
    state?: string;

    @Column({ default: null })
    zipcode?: string;

    @Column({ default: null })
    country?: string;

    @Column({
        type: "varchar",
        default: null
    })
    gender?: "male" | "female" | null;

    @Column({ default: true })
    active!: boolean;

    @Column({ default: null })
    avatar?: string;

    @Column({
        type: "varchar",
        default: "normal",
    })
    account!: "normal" | "premium";

    @CreateDateColumn({ 
        type: "timestamp", 
        default: () => "CURRENT_TIMESTAMP", 
    })
    created_at!: Date;

    @UpdateDateColumn({ 
        type: "timestamp", 
        default: () => "CURRENT_TIMESTAMP", 
        onUpdate: "CURRENT_TIMESTAMP" 
    })
    updated_at!: Date;
}