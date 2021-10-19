import { IResultError } from '../interfaces/IResultError';

export class Result<R, E extends IResultError = IResultError> {
  public isSuccess: boolean;
  public isFailure: boolean;
  private _error: E;
  private _value: R;

  protected constructor(isSuccess: boolean, error?: E, value?: R) {
    if (isSuccess && error) {
      throw new Error(
        `InvalidOperation: A result cannot be succesful and contain an error`,
      );
    }

    if (!isSuccess && !error) {
      throw new Error(
        `InvalidOperation: A failing result needs to contain an error message`,
      );
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this._error = error;
    this._value = value;

    Object.freeze(this);
  }


  public getValue(): R | null {
    return this.isSuccess ? this._value : null;
  }


  public errorValue(): E | null {
    return this.isFailure ? this._error : null;
  }


  public map<T>(func: (a: R) => T): Result<T> {
    return this.isSuccess
      ? Result.Ok(func(this._value))
      : Result.Fail(this._error);
  }


  public async mapAsync<T>(func: (a: R) => Promise<T>): Promise<Result<T>> {
    return this.isSuccess
      ? Result.Ok(await func(this._value))
      : Result.Fail(this._error);
  }


  public mapOr<T>(def: T, func: (a: R) => T): T {
    return this.isSuccess ? func(this._value) : def;
  }


  public async mapOrAsync<T>(
    def: T,
    func: (a: R) => T | Promise<T>,
  ): Promise<T> {
    return this.isSuccess ? func(this._value) : def;
  }


  public async mapOrElseAsync<T>(
    def: (a: E) => Promise<T>,
    func: (a: R) => Promise<T>,
  ): Promise<T> {
    return this.isSuccess ? func(this._value) : def(this._error);
  }


  public mapOrElse<T>(def: (a: E) => T, func: (a: R) => T): T {
    return this.isSuccess ? func(this._value) : def(this._error);
  }


  public async mapOrErrorAsync<F extends IResultError = IResultError>(
    func: (a: E) => Promise<F>,
  ): Promise<Result<R, F>> {
    return this.isFailure
      ? Result.Fail<R, F>(await func(this._error))
      : Result.Ok<R, F>(this._value);
  }


  public mapOrError<F extends IResultError = IResultError>(
    func: (a: E) => F,
  ): Result<R, F> {
    return this.isFailure
      ? Result.Fail<R, F>(func(this._error))
      : Result.Ok<R, F>(this._value);
  }


  public and<U>(res: Result<U, E>): Result<U, E> {
    return this.isSuccess ? res : Result.Fail(this._error);
  }


  public async andThenAsync<U>(
    func: (val: R) => Promise<Result<U, E>>,
  ): Promise<Result<U, E>> {
    return this.isSuccess ? await func(this._value) : Result.Fail(this._error);
  }


  public andThen<U>(func: (val: R) => Result<U, E>): Result<U, E> {
    return this.isSuccess ? func(this._value) : Result.Fail(this._error);
  }

  public or<F extends IResultError = IResultError>(
    res: Result<R, F>,
  ): Result<R, F> {
    return this.isSuccess ? Result.Ok<R, F>(this._value) : res;
  }


  public async orElseAsync<F extends IResultError = IResultError>(
    func: (err: E) => Promise<Result<R, F>>,
  ): Promise<Result<R, F>> {
    return this.isSuccess ? Result.Ok<R, F>(this._value) : func(this._error);
  }


  public orElse<F extends IResultError = IResultError>(
    func: (err: E) => Result<R, F>,
  ): Result<R, F> {
    return this.isSuccess ? Result.Ok<R, F>(this._value) : func(this._error);
  }

  public expect(msg: string): R {
    if (this.isFailure) throw new Error(msg);
    return this._value;
  }


  public unwrap(): R {
    if (this.isFailure) this._error.throw();
    return this._value;
  }


  public unwrapOr(def: R): R {
    return this.isSuccess ? this._value : def;
  }


  public async unwrapOrElseAsync(func: (err: E) => R | Promise<R>): Promise<R> {
    return this.isSuccess ? this._value : func(this._error);
  }


  public unwrapOrElse(func: (err: E) => R): R {
    return this.isSuccess ? this._value : func(this._error);
  }


  public unwrapError(): E {
    if (this.isSuccess) throw new Error(`Unwraping error in 'Ok' result`);
    return this._error;
  }


  public static Ok<U, E extends IResultError = IResultError>(
    value?: U,
  ): Result<U, E> {
    return new Result<U, E>(true, null, value);
  }


  public static Fail<U, E extends IResultError = IResultError>(
    error: E,
  ): Result<U, E> {
    return new Result<U, E>(false, error);
  }

}
