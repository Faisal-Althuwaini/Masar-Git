import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSum(number1, number2): any {
    const sum = Number(number1) + Number(number2);
    return {
      total: sum,
    };
  }

  getSub(number1, number2): any {
    const sub = Number(number1) - Number(number2);
    return {
      total: sub,
    };
  }

  getMult(number1, number2): any {
    const mult = Number(number1) * Number(number2);
    return {
      total: mult,
    };
  }

  getDiv(number1, number2): any {
    const div = Number(number1) / Number(number2);

    if (Number(number2) === 0) {
      return { Error: 'Division By Zero is not possible' };
    } else
      return {
        total: div,
      };
  }

  getCalcAll(number1, number2): any {
    const sum = Number(number1) + Number(number2);
    const sub = Number(number1) - Number(number2);
    const mult = Number(number1) * Number(number2);
    const div = Number(number1) / Number(number2);

    if (Number(number2) === 0) {
      return {
        Addition: sum,
        Substraction: sub,
        Multiplication: mult,
        Divison: 'Error: Divison by Zero is not possible',
      };
    } else {
      return {
        Addition: sum,
        Substraction: sub,
        Multiplication: mult,
        Divison: div,
      };
    }
  }
}
