import { CreateChainDto } from './dto/create-chain.dto';
import { UpdateChainDto } from './dto/update-chain.dto';
export declare class ChainService {
    create(createChainDto: CreateChainDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChainDto: UpdateChainDto): string;
    remove(id: number): string;
}
