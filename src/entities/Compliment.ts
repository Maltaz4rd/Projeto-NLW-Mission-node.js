import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Tags } from "./Tags";
import { User } from "./User";


@Entity("compliments")
class Compliment {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    //join ({name: "nome da coluna referenciada"})
    @JoinColumn({ name: "user_sender" })
    @ManyToOne(() => User)
    userSender: User

    @Column()
    user_receiver: string;

    //join ({name: "nome da coluna referenciada"})
    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => User)
    userReceiver: User

    @Column()
    tag_id: string;

    //join ({name: "nome da coluna referenciada"})
    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => Tags)
    tag: Tags

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Compliment }