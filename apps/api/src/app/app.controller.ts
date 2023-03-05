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
  async getWeekDaysData(): Promise<WeekDays> {
    return await this.appService.getWeekDays();
  }

  @Post('days')
  async postSingleWeekDay(@Body('value') value: string): Promise<string> {
    await this.appService.addWeekDay(value);
    return JSON.stringify({ result: `Day \"${value}\" added.` });
  }
}
