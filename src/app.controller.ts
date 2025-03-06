import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello/:name')
  getPersonalisedHello(
    @Param('name') name: string,
    @Query('day') day: string,
    @Query('num') num: string,
  ) {
    return this.appService.getPersonalisedHello(name, day, num);
  }
}
