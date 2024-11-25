import {
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Cat extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;

  @Column({ defaultValue: false })
  isDeleted: boolean;
}
