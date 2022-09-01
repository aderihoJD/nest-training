import { ChainService } from './chain.service';
import { CreateChainDto } from './dto/create-chain.dto';
import { UpdateChainDto } from './dto/update-chain.dto';
export declare class ChainController {
    private readonly chainService;
    constructor(chainService: ChainService);
    create(createChainDto: CreateChainDto, requestBody: any): string;
    findAll(requestBody: any): string;
    findOne(id: number): string;
    update(id: string, updateChainDto: UpdateChainDto): string;
    remove(id: string): string;
}
