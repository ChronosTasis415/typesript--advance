import { expectType } from 'tsd';

console.log('hello world');

expectType<string>('string')

expectType<number>(11)