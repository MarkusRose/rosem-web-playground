import { Injectable } from '@nestjs/common';
import { Message, WeekDays } from '@rosem-playground/api-interfaces';

@Injectable()
export class AppService {
  weekDays: string[];

  constructor() {
    this.weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getWeekDays(): WeekDays {
    return { days: [...this.weekDays] };
  }

  addWeekDay(value: string) {
    this.weekDays.push(value);
  }
}
