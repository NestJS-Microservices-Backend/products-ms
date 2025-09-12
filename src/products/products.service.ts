import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client';

import { CreateProductDto, UpdateProductDto } from './dto';



@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger( 'ProductsService' );

  onModuleInit() {
    this.$connect();
    this.logger.log( 'Database connected' );
  }

  create( createProductDto: CreateProductDto ) {
    return this.product.create( {
      data: createProductDto
    } );
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne( id: string ) {
    return `This action returns a #${ id } product`;
  }

  update( id: string, updateProductDto: UpdateProductDto ) {
    return `This action updates a #${ id } product`;
  }

  remove( id: string ) {
    return `This action removes a #${ id } product`;
  }
}
