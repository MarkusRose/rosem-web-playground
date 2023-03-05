import { Injectable } from '@nestjs/common';
import { Message, WeekDays } from '@rosem-playground/api-interfaces';
import { MongoClient, ServerApiVersion } from 'mongodb';

@Injectable()
export class AppService {
  weekDays: string[];
  db_uri: string;

  constructor() {
    this.weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    this.db_uri =
      'mongodb+srv://markusmrose:mothball-placate-december-vista-monsoon-angling@sandbox.diqjrsw.mongodb.net/?retryWrites=true&w=majority';
  }

  public getData(): Message {
    return { message: 'Welcome to api!' };
  }

  public async getWeekDays(): Promise<WeekDays> {
    const weekDays = await this.getAllWeekDays();
    this.weekDays = weekDays;
    console.log(this.weekDays);
    return { days: [...this.weekDays] };
  }

  public async addWeekDay(value: string) {
    await this.addWeekValue(value);
  }

  private async connectToCluster(uri: string): Promise<MongoClient> {
    let client: MongoClient;

    try {
      client = new MongoClient(uri);
      console.log('Connecting to MongoDB Atlas cluster...');
      await client.connect();
      console.log('Successfully connected to MongoDB Atlas!');
      return client;
    } catch (error) {
      console.log('Connection to MongoDB Atlas failed!', error);
      process.exit();
    }
  }

  private async addWeekValue(value: string) {
    let client: MongoClient;

    try {
      client = await this.connectToCluster(this.db_uri);
      const db = client.db('nest_app_test');
      const collection = db.collection('weekDaysCollection');
      console.log('adding week day ', value);
      await collection.insertOne({ name: value });
    } finally {
      await client.close();
    }
  }

  private async getAllWeekDays(): Promise<any> {
    let client: MongoClient;

    try {
      client = await this.connectToCluster(this.db_uri);
      const db = client.db('nest_app_test');
      const collection = db.collection('weekDaysCollection');
      console.log('Collecting all week days.');
      return (await collection.find({}).toArray()).map((entry) => entry.name);
    } finally {
      await client.close();
    }
  }
}
