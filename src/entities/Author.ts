import { PrimaryKey } from '@mikro-orm/core';
import { Entity, Property } from '@mikro-orm/core';

@Entity()
export class Author {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  name: string;

  @Property()
  email: string;

  @Property()
  age?: number;

  @Property()
  termsAccepted = false;

  @Property()
  born?: Date;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
