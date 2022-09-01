import { Controller, Get, Post, Body, Patch, Param, Delete, Req, HttpCode, Res, HttpException, HttpStatus, HttpVersionNotSupportedException, UseFilters, ParseIntPipe, UsePipes, UseGuards, SetMetadata, UseInterceptors } from '@nestjs/common';
import { Request, Response, response } from 'express';
import { GetUserAgent } from 'src/decorators/custom.decorator';
import { ExcludeNullInterceptor } from 'src/helper/exclude-null.interceptor';
import { CustomHttpExceptionFilter } from 'src/helper/http-exception.filter';
import { JoiValidationPipe } from 'src/helper/joi-validation.pipe';
import { LoggingInterceptor } from 'src/helper/logging.interceptor';
import { Roles } from 'src/helper/roles.decorator';
import { RolesGuard } from 'src/helper/roles.guard';
import { TransformInterceptor } from 'src/helper/transform.interceptor';
import { ChainService } from './chain.service';
import { CreateChainDto } from './dto/create-chain.dto';
import { UpdateChainDto } from './dto/update-chain.dto';

@Controller('chain')
@UseFilters(CustomHttpExceptionFilter)
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor,TransformInterceptor,ExcludeNullInterceptor)
export class ChainController {
  constructor(private chainService: ChainService) {}

  @Post()
  // @SetMetadata('roles', ['admin'])
  // @Roles('admin')
  // @UsePipes(new JoiValidationPipe(schema))
  create(@Body() createChainDto: CreateChainDto, @GetUserAgent() requestBody: any) {
    console.log(requestBody);
    return this.chainService.create(createChainDto);
  }

  @Get()
  // @HttpCode(203)
  async findAll(@GetUserAgent() requestBody: any): Promise<CreateChainDto[]> {
    // console.info(request.headers);
    // response.send(205);
    // throw new Error;
    // throw new HttpVersionNotSupportedException();
    // console.log(requestBody);
    return this.chainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.chainService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChainDto: UpdateChainDto) {
    return this.chainService.update(+id, updateChainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chainService.remove(+id);
  }
}
