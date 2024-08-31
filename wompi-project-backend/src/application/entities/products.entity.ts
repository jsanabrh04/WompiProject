import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  idProduct: number;

  @Column({ type: 'varchar', length: 255 })
  nameProduct: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  priceProduct: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  categoryProduct: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imageUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
