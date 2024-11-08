import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  name: string;

  @Column({ defaultValue: false })
  isDeleted: boolean;
}
