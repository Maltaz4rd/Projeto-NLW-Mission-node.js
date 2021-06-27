import { Expose } from "class-transformer";
import { CreateDateColumn, Column, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("tags")
class Tags {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @Expose({ name: "name_custom" })
    name_custom(): string {
        return `#${this.nome}`
    }

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Tags }