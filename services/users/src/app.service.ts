import { Injectable } from '@nestjs/common';
import { enviroment } from '@services/common/environment/config';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Production: ' + enviroment.prod;
  }
}
