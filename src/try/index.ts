import { Left as LeftType, Right as RightType } from '../definitions';
import { Left, Right } from '../either';

export function tryCatch<L, R, T>(func: () => T): RightType<R>;
export function tryCatch<L, R, T>(func: () => T): LeftType<L>;
export function tryCatch<L, R, T>(func: () => T): LeftType<L> | RightType<R> {
  try {
    return Right<R>(func());
  } catch (error) {
    return Left<L>(error);
  }
}

// export function asyncTryCatch<L, R, T>(func: () => Promise<T>): Promise<RightType<R>>;
// export function asyncTryCatch<L, R, T>(func: () => Promise<T>): Promise<LeftType<L>>;
// export function asyncTryCatch<L, R, T>(func: () => Promise<T>): Promise<LeftType<L>> | Promise<RightType<R>> {
//   return func().then((res) => Right<R>(res)).catch((err) => Left<L>(err))
// }
