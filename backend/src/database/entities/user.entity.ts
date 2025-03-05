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

    @Column({ length: 100, nullable: false })
    name!: string;

    @Column({ length: 100, nullable: false, unique: true })
    email!: string;

    @Column({ length: 255, nullable: false })
    password!: string;

    @Column({ length: 14, nullable: true, unique: true, default: null })
    doc?: string;

    @Column({ type: "date", nullable: true, default: null })
    birth?: Date;

    @Column({ length: 15, nullable: true, default: null })
    phone?: string;

    @Column({ length: 100, nullable: true, default: null })
    address?: string;

    @Column({ length: 100, nullable: true, default: null })
    city?: string;

    @Column({ length: 2, nullable: true, default: null })
    state?: string;

    @Column({ length: 9, nullable: true, default: null })
    zipcode?: string;

    @Column({ length: 50, nullable: true, default: null })
    country?: string;

    @Column({
        type: "varchar",
        nullable: true,
        default: null
    })
    gender?: "male" | "female" | null;

    @Column({ default: true })
    active!: boolean;

    @Column({ length: 255, nullable: true, default: null })
    avatar?: string;

    @Column({
        type: "varchar",
        length: 50,
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