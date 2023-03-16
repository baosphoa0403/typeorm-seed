import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageEntity } from './image.entity';

@Module({ imports: [TypeOrmModule.forFeature([ImageEntity])] })
export class ImageModule {}
