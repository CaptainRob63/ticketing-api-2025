import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPersonalisedHello(name: string, day: string, num: string) {
    return `Hello ${name} have a nice ${day} num: ${num}`;
  }
}
