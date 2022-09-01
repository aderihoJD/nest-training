import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ChainDocument = Chain & Document;

@Schema()
export class Chain {
    @Prop()
    name: string;
    @Prop()
    timestamp: number;
    @Prop()
    data: string;
}

export const ChainSchema = SchemaFactory.createForClass(Chain);