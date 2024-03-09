import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: { createdAt: true, updatedAt: true } })
export class MongooseCollection {
  @Prop()
  key: string;

  @Prop()
  data: string;
}

export type MongooseDocument = HydratedDocument<MongooseCollection>;

export const MongooseSchema = SchemaFactory.createForClass(MongooseCollection);
