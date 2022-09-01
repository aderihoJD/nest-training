import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chain, ChainDocument } from 'src/db/schemas/chain.schema';
import { CreateChainDto } from './dto/create-chain.dto';
import { UpdateChainDto } from './dto/update-chain.dto';

@Injectable()
export class ChainService {

  constructor(@InjectModel(Chain.name) private chainModel: Model<ChainDocument>) {}

  // private readonly chains: CreateChainDto[] = [];

  async create(createChainDto: CreateChainDto): Promise<Chain> {
    
    const createdChain = new this.chainModel(createChainDto);

    return createdChain.save();
  }

  async findAll(): Promise<Chain[]> {
    return this.chainModel.find().exec();
  }

  findOne(id: number) {
    return `This action will return the chain with #${id}`;
  }

  update(id: number, updateChainDto: UpdateChainDto) {
    return `This action updates a #${id} chain`;
  }

  remove(id: number) {
    return `This action removes a #${id} chain`;
  }
}
