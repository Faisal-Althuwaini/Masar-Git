import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  items = [
    { id: 1, name: 'item 1', price: 20 },
    { id: 2, name: 'item 2', price: 40 },
    { id: 3, name: 'item 3', price: 60 },
  ];

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getTest(): string {
    return 'This is a test for endpoint';
  }

  @Post('/test')
  postTest(): string {
    return 'this is a test for post endpoint';
  }

  @Put('/test-response')
  putTest() {
    return { name: 'Faisal', Age: 22 };
  }

  @Post('/find-sum')
  findSum(@Query('num1') number1: number, @Query('num2') number2: number) {
    return this.appService.getSum(Number(number1), Number(number2));
  }

  @Post('/find-sub')
  findSub(@Query('num1') number1, @Query('num2') number2) {
    return this.appService.getSub(Number(number1), Number(number2));
  }

  @Post('/find-mult')
  findMult(@Query('num1') number1, @Query('num2') number2) {
    return this.appService.getMult(Number(number1), Number(number2));
  }

  @Post('/find-div')
  findDiv(@Query('num1') number1, @Query('num2') number2) {
    return this.appService.getDiv(Number(number1), Number(number2));
  }

  @Post('/calculate')
  findCalculate(@Query('num1') number1, @Query('num2') number2) {
    return this.appService.getCalcAll(Number(number1), Number(number2));
  }

  // path params

  @Get('/items')
  getItems() {
    return this.items;
  }

  @Get('/items/:id')
  getItem(@Param('id') id: number) {
    let foundItem = null;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == id) {
        foundItem = this.items[i];
        break;
      }
    }

    if (!foundItem) {
      throw new HttpException('Item not found', 404);
    }

    return foundItem;
  }

  // body params

  @Post('/items')
  createItem(@Body('name') name: string, @Body('price') price: number) {
    const newItem = {
      id: this.items.length + 1,
      name: name,
      price: price,
    };

    this.items.push(newItem);
    return newItem;
  }
}
