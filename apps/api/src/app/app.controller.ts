import { Body, Controller, Get, Post } from '@nestjs/common';

import { Message, WeekDays } from '@rosem-playground/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('days')
  getWeekDaysData(): WeekDays {
    return this.appService.getWeekDays();
  }

  @Post('days')
  postSingleWeekDay(@Body('value') value: string): string {
    this.appService.addWeekDay(value);
    return JSON.stringify({ result: `Day \"${value}\" added.` });
  }
}
