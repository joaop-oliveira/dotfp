import { Left, Right } from '../either';
import { fromEmpty } from '../from';
import { tryCatch } from '../try';

export const itemToNumber = (arr: any[], item: string): Left | Right =>
  fromEmpty(arr).fold(
    () => Left('Erro Array nao pode ser vazia na funcao itemToNumber'),
    (result) => tryCatch(() => result.map((obj) => ({ ...obj, [item]: Number(obj[item].replace(',', '.')) }))),
  );
