
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string
  ra: number
  password: string
  email: string
  campi: string
  role: string
}

/**
 * Model Sport
 * 
 */
export type Sport = {
  id: string
  name: string
  maxAmount: string | null
}

/**
 * Model Court
 * 
 */
export type Court = {
  id: string
  name: string
}

/**
 * Model Reservation
 * 
 */
export type Reservation = {
  id: string
  startDateTime: Date | null
  endDateTime: Date | null
  created_at: Date
  manager_id: string
  max_participants: number
  sportId: string
  courtId: string
  description: string
}

/**
 * Model dayOfTheWeek
 * 
 */
export type dayOfTheWeek = {
  id: string
  name: string
}

/**
 * Model unavailableTime
 * 
 */
export type unavailableTime = {
  id: string
  startDateTime: Date
  endDateTime: Date
  startTime: Date
  endTime: Date
  created_at: Date
  courtId: string
}

/**
 * Model UnavailableTimeHasDayOfTheWeek
 * 
 */
export type UnavailableTimeHasDayOfTheWeek = {
  unavailableTimeId: string
  active: boolean
  created_at: Date
  updated_at: Date | null
  dayOfTheWeekId: string
}

/**
 * Model CourtHasSports
 * 
 */
export type CourtHasSports = {
  court_id: string
  active: boolean
  created_at: Date
  updated_at: Date | null
  sportsId: string | null
}

/**
 * Model ReservationHasUsers
 * 
 */
export type ReservationHasUsers = {
  reservation_id: string
  user_id: string
  created_at: Date
}

/**
 * Model ReservationHasRequestedUsers
 * 
 */
export type ReservationHasRequestedUsers = {
  reservation_id: string
  user_id: string
  created_at: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.sport`: Exposes CRUD operations for the **Sport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sports
    * const sports = await prisma.sport.findMany()
    * ```
    */
  get sport(): Prisma.SportDelegate<GlobalReject>;

  /**
   * `prisma.court`: Exposes CRUD operations for the **Court** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courts
    * const courts = await prisma.court.findMany()
    * ```
    */
  get court(): Prisma.CourtDelegate<GlobalReject>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<GlobalReject>;

  /**
   * `prisma.dayOfTheWeek`: Exposes CRUD operations for the **dayOfTheWeek** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DayOfTheWeeks
    * const dayOfTheWeeks = await prisma.dayOfTheWeek.findMany()
    * ```
    */
  get dayOfTheWeek(): Prisma.dayOfTheWeekDelegate<GlobalReject>;

  /**
   * `prisma.unavailableTime`: Exposes CRUD operations for the **unavailableTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnavailableTimes
    * const unavailableTimes = await prisma.unavailableTime.findMany()
    * ```
    */
  get unavailableTime(): Prisma.unavailableTimeDelegate<GlobalReject>;

  /**
   * `prisma.unavailableTimeHasDayOfTheWeek`: Exposes CRUD operations for the **UnavailableTimeHasDayOfTheWeek** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnavailableTimeHasDayOfTheWeeks
    * const unavailableTimeHasDayOfTheWeeks = await prisma.unavailableTimeHasDayOfTheWeek.findMany()
    * ```
    */
  get unavailableTimeHasDayOfTheWeek(): Prisma.UnavailableTimeHasDayOfTheWeekDelegate<GlobalReject>;

  /**
   * `prisma.courtHasSports`: Exposes CRUD operations for the **CourtHasSports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourtHasSports
    * const courtHasSports = await prisma.courtHasSports.findMany()
    * ```
    */
  get courtHasSports(): Prisma.CourtHasSportsDelegate<GlobalReject>;

  /**
   * `prisma.reservationHasUsers`: Exposes CRUD operations for the **ReservationHasUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservationHasUsers
    * const reservationHasUsers = await prisma.reservationHasUsers.findMany()
    * ```
    */
  get reservationHasUsers(): Prisma.ReservationHasUsersDelegate<GlobalReject>;

  /**
   * `prisma.reservationHasRequestedUsers`: Exposes CRUD operations for the **ReservationHasRequestedUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservationHasRequestedUsers
    * const reservationHasRequestedUsers = await prisma.reservationHasRequestedUsers.findMany()
    * ```
    */
  get reservationHasRequestedUsers(): Prisma.ReservationHasRequestedUsersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.1
   * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Sport: 'Sport',
    Court: 'Court',
    Reservation: 'Reservation',
    dayOfTheWeek: 'dayOfTheWeek',
    unavailableTime: 'unavailableTime',
    UnavailableTimeHasDayOfTheWeek: 'UnavailableTimeHasDayOfTheWeek',
    CourtHasSports: 'CourtHasSports',
    ReservationHasUsers: 'ReservationHasUsers',
    ReservationHasRequestedUsers: 'ReservationHasRequestedUsers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    reservations: number
    requestedReservations: number
    managerOfReservations: number
  }

  export type UserCountOutputTypeSelect = {
    reservations?: boolean
    requestedReservations?: boolean
    managerOfReservations?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type SportCountOutputType
   */


  export type SportCountOutputType = {
    courts: number
    reservation: number
  }

  export type SportCountOutputTypeSelect = {
    courts?: boolean
    reservation?: boolean
  }

  export type SportCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SportCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SportCountOutputType
    : S extends undefined
    ? never
    : S extends SportCountOutputTypeArgs
    ?'include' extends U
    ? SportCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SportCountOutputType ? SportCountOutputType[P] : never
  } 
    : SportCountOutputType
  : SportCountOutputType




  // Custom InputTypes

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SportCountOutputType
     * 
    **/
    select?: SportCountOutputTypeSelect | null
  }



  /**
   * Count Type CourtCountOutputType
   */


  export type CourtCountOutputType = {
    sports: number
    reservation: number
    unavailableTime: number
  }

  export type CourtCountOutputTypeSelect = {
    sports?: boolean
    reservation?: boolean
    unavailableTime?: boolean
  }

  export type CourtCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CourtCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CourtCountOutputType
    : S extends undefined
    ? never
    : S extends CourtCountOutputTypeArgs
    ?'include' extends U
    ? CourtCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CourtCountOutputType ? CourtCountOutputType[P] : never
  } 
    : CourtCountOutputType
  : CourtCountOutputType




  // Custom InputTypes

  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CourtCountOutputType
     * 
    **/
    select?: CourtCountOutputTypeSelect | null
  }



  /**
   * Count Type ReservationCountOutputType
   */


  export type ReservationCountOutputType = {
    participants: number
    requested_participants: number
  }

  export type ReservationCountOutputTypeSelect = {
    participants?: boolean
    requested_participants?: boolean
  }

  export type ReservationCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ReservationCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ReservationCountOutputType
    : S extends undefined
    ? never
    : S extends ReservationCountOutputTypeArgs
    ?'include' extends U
    ? ReservationCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ReservationCountOutputType ? ReservationCountOutputType[P] : never
  } 
    : ReservationCountOutputType
  : ReservationCountOutputType




  // Custom InputTypes

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     * 
    **/
    select?: ReservationCountOutputTypeSelect | null
  }



  /**
   * Count Type DayOfTheWeekCountOutputType
   */


  export type DayOfTheWeekCountOutputType = {
    UnavailableTimeHasDayOfTheWeek: number
  }

  export type DayOfTheWeekCountOutputTypeSelect = {
    UnavailableTimeHasDayOfTheWeek?: boolean
  }

  export type DayOfTheWeekCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DayOfTheWeekCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DayOfTheWeekCountOutputType
    : S extends undefined
    ? never
    : S extends DayOfTheWeekCountOutputTypeArgs
    ?'include' extends U
    ? DayOfTheWeekCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DayOfTheWeekCountOutputType ? DayOfTheWeekCountOutputType[P] : never
  } 
    : DayOfTheWeekCountOutputType
  : DayOfTheWeekCountOutputType




  // Custom InputTypes

  /**
   * DayOfTheWeekCountOutputType without action
   */
  export type DayOfTheWeekCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DayOfTheWeekCountOutputType
     * 
    **/
    select?: DayOfTheWeekCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    ra: number | null
  }

  export type UserSumAggregateOutputType = {
    ra: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    ra: number | null
    password: string | null
    email: string | null
    campi: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ra: number | null
    password: string | null
    email: string | null
    campi: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    ra: number
    password: number
    email: number
    campi: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    ra?: true
  }

  export type UserSumAggregateInputType = {
    ra?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    ra?: true
    password?: true
    email?: true
    campi?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    ra?: true
    password?: true
    email?: true
    campi?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    ra?: true
    password?: true
    email?: true
    campi?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string
    ra: number
    password: string
    email: string
    campi: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    ra?: boolean
    password?: boolean
    email?: boolean
    campi?: boolean
    role?: boolean
    reservations?: boolean | ReservationHasUsersFindManyArgs
    requestedReservations?: boolean | ReservationHasRequestedUsersFindManyArgs
    managerOfReservations?: boolean | ReservationFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    reservations?: boolean | ReservationHasUsersFindManyArgs
    requestedReservations?: boolean | ReservationHasRequestedUsersFindManyArgs
    managerOfReservations?: boolean | ReservationFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'reservations' ? Array < ReservationHasUsersGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'requestedReservations' ? Array < ReservationHasRequestedUsersGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'managerOfReservations' ? Array < ReservationGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'reservations' ? Array < ReservationHasUsersGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'requestedReservations' ? Array < ReservationHasRequestedUsersGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'managerOfReservations' ? Array < ReservationGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    reservations<T extends ReservationHasUsersFindManyArgs = {}>(args?: Subset<T, ReservationHasUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ReservationHasUsers>>, PrismaPromise<Array<ReservationHasUsersGetPayload<T>>>>;

    requestedReservations<T extends ReservationHasRequestedUsersFindManyArgs = {}>(args?: Subset<T, ReservationHasRequestedUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ReservationHasRequestedUsers>>, PrismaPromise<Array<ReservationHasRequestedUsersGetPayload<T>>>>;

    managerOfReservations<T extends ReservationFindManyArgs = {}>(args?: Subset<T, ReservationFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Reservation>>, PrismaPromise<Array<ReservationGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Sport
   */


  export type AggregateSport = {
    _count: SportCountAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  export type SportMinAggregateOutputType = {
    id: string | null
    name: string | null
    maxAmount: string | null
  }

  export type SportMaxAggregateOutputType = {
    id: string | null
    name: string | null
    maxAmount: string | null
  }

  export type SportCountAggregateOutputType = {
    id: number
    name: number
    maxAmount: number
    _all: number
  }


  export type SportMinAggregateInputType = {
    id?: true
    name?: true
    maxAmount?: true
  }

  export type SportMaxAggregateInputType = {
    id?: true
    name?: true
    maxAmount?: true
  }

  export type SportCountAggregateInputType = {
    id?: true
    name?: true
    maxAmount?: true
    _all?: true
  }

  export type SportAggregateArgs = {
    /**
     * Filter which Sport to aggregate.
     * 
    **/
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     * 
    **/
    orderBy?: Enumerable<SportOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sports
    **/
    _count?: true | SportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportMaxAggregateInputType
  }

  export type GetSportAggregateType<T extends SportAggregateArgs> = {
        [P in keyof T & keyof AggregateSport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSport[P]>
      : GetScalarType<T[P], AggregateSport[P]>
  }




  export type SportGroupByArgs = {
    where?: SportWhereInput
    orderBy?: Enumerable<SportOrderByWithAggregationInput>
    by: Array<SportScalarFieldEnum>
    having?: SportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportCountAggregateInputType | true
    _min?: SportMinAggregateInputType
    _max?: SportMaxAggregateInputType
  }


  export type SportGroupByOutputType = {
    id: string
    name: string
    maxAmount: string | null
    _count: SportCountAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  type GetSportGroupByPayload<T extends SportGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportGroupByOutputType[P]>
            : GetScalarType<T[P], SportGroupByOutputType[P]>
        }
      >
    >


  export type SportSelect = {
    id?: boolean
    name?: boolean
    maxAmount?: boolean
    courts?: boolean | CourtHasSportsFindManyArgs
    reservation?: boolean | ReservationFindManyArgs
    _count?: boolean | SportCountOutputTypeArgs
  }

  export type SportInclude = {
    courts?: boolean | CourtHasSportsFindManyArgs
    reservation?: boolean | ReservationFindManyArgs
    _count?: boolean | SportCountOutputTypeArgs
  }

  export type SportGetPayload<
    S extends boolean | null | undefined | SportArgs,
    U = keyof S
      > = S extends true
        ? Sport
    : S extends undefined
    ? never
    : S extends SportArgs | SportFindManyArgs
    ?'include' extends U
    ? Sport  & {
    [P in TrueKeys<S['include']>]:
        P extends 'courts' ? Array < CourtHasSportsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'reservation' ? Array < ReservationGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? SportCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'courts' ? Array < CourtHasSportsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'reservation' ? Array < ReservationGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? SportCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Sport ? Sport[P] : never
  } 
    : Sport
  : Sport


  type SportCountArgs = Merge<
    Omit<SportFindManyArgs, 'select' | 'include'> & {
      select?: SportCountAggregateInputType | true
    }
  >

  export interface SportDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Sport that matches the filter.
     * @param {SportFindUniqueArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SportFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SportFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Sport'> extends True ? CheckSelect<T, Prisma__SportClient<Sport>, Prisma__SportClient<SportGetPayload<T>>> : CheckSelect<T, Prisma__SportClient<Sport | null >, Prisma__SportClient<SportGetPayload<T> | null >>

    /**
     * Find the first Sport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SportFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SportFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Sport'> extends True ? CheckSelect<T, Prisma__SportClient<Sport>, Prisma__SportClient<SportGetPayload<T>>> : CheckSelect<T, Prisma__SportClient<Sport | null >, Prisma__SportClient<SportGetPayload<T> | null >>

    /**
     * Find zero or more Sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sports
     * const sports = await prisma.sport.findMany()
     * 
     * // Get first 10 Sports
     * const sports = await prisma.sport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportWithIdOnly = await prisma.sport.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SportFindManyArgs>(
      args?: SelectSubset<T, SportFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Sport>>, PrismaPromise<Array<SportGetPayload<T>>>>

    /**
     * Create a Sport.
     * @param {SportCreateArgs} args - Arguments to create a Sport.
     * @example
     * // Create one Sport
     * const Sport = await prisma.sport.create({
     *   data: {
     *     // ... data to create a Sport
     *   }
     * })
     * 
    **/
    create<T extends SportCreateArgs>(
      args: SelectSubset<T, SportCreateArgs>
    ): CheckSelect<T, Prisma__SportClient<Sport>, Prisma__SportClient<SportGetPayload<T>>>

    /**
     * Create many Sports.
     *     @param {SportCreateManyArgs} args - Arguments to create many Sports.
     *     @example
     *     // Create many Sports
     *     const sport = await prisma.sport.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SportCreateManyArgs>(
      args?: SelectSubset<T, SportCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Sport.
     * @param {SportDeleteArgs} args - Arguments to delete one Sport.
     * @example
     * // Delete one Sport
     * const Sport = await prisma.sport.delete({
     *   where: {
     *     // ... filter to delete one Sport
     *   }
     * })
     * 
    **/
    delete<T extends SportDeleteArgs>(
      args: SelectSubset<T, SportDeleteArgs>
    ): CheckSelect<T, Prisma__SportClient<Sport>, Prisma__SportClient<SportGetPayload<T>>>

    /**
     * Update one Sport.
     * @param {SportUpdateArgs} args - Arguments to update one Sport.
     * @example
     * // Update one Sport
     * const sport = await prisma.sport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SportUpdateArgs>(
      args: SelectSubset<T, SportUpdateArgs>
    ): CheckSelect<T, Prisma__SportClient<Sport>, Prisma__SportClient<SportGetPayload<T>>>

    /**
     * Delete zero or more Sports.
     * @param {SportDeleteManyArgs} args - Arguments to filter Sports to delete.
     * @example
     * // Delete a few Sports
     * const { count } = await prisma.sport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SportDeleteManyArgs>(
      args?: SelectSubset<T, SportDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SportUpdateManyArgs>(
      args: SelectSubset<T, SportUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Sport.
     * @param {SportUpsertArgs} args - Arguments to update or create a Sport.
     * @example
     * // Update or create a Sport
     * const sport = await prisma.sport.upsert({
     *   create: {
     *     // ... data to create a Sport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sport we want to update
     *   }
     * })
    **/
    upsert<T extends SportUpsertArgs>(
      args: SelectSubset<T, SportUpsertArgs>
    ): CheckSelect<T, Prisma__SportClient<Sport>, Prisma__SportClient<SportGetPayload<T>>>

    /**
     * Find one Sport that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SportFindUniqueOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SportFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SportFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SportClient<Sport>, Prisma__SportClient<SportGetPayload<T>>>

    /**
     * Find the first Sport that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SportFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SportFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SportClient<Sport>, Prisma__SportClient<SportGetPayload<T>>>

    /**
     * Count the number of Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportCountArgs} args - Arguments to filter Sports to count.
     * @example
     * // Count the number of Sports
     * const count = await prisma.sport.count({
     *   where: {
     *     // ... the filter for the Sports we want to count
     *   }
     * })
    **/
    count<T extends SportCountArgs>(
      args?: Subset<T, SportCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SportAggregateArgs>(args: Subset<T, SportAggregateArgs>): PrismaPromise<GetSportAggregateType<T>>

    /**
     * Group by Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportGroupByArgs['orderBy'] }
        : { orderBy?: SportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Sport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SportClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    courts<T extends CourtHasSportsFindManyArgs = {}>(args?: Subset<T, CourtHasSportsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CourtHasSports>>, PrismaPromise<Array<CourtHasSportsGetPayload<T>>>>;

    reservation<T extends ReservationFindManyArgs = {}>(args?: Subset<T, ReservationFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Reservation>>, PrismaPromise<Array<ReservationGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Sport base type for findUnique actions
   */
  export type SportFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Sport
     * 
    **/
    select?: SportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SportInclude | null
    /**
     * Filter, which Sport to fetch.
     * 
    **/
    where: SportWhereUniqueInput
  }

  /**
   * Sport: findUnique
   */
  export interface SportFindUniqueArgs extends SportFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sport base type for findFirst actions
   */
  export type SportFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Sport
     * 
    **/
    select?: SportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SportInclude | null
    /**
     * Filter, which Sport to fetch.
     * 
    **/
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     * 
    **/
    orderBy?: Enumerable<SportOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     * 
    **/
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     * 
    **/
    distinct?: Enumerable<SportScalarFieldEnum>
  }

  /**
   * Sport: findFirst
   */
  export interface SportFindFirstArgs extends SportFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sport findMany
   */
  export type SportFindManyArgs = {
    /**
     * Select specific fields to fetch from the Sport
     * 
    **/
    select?: SportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SportInclude | null
    /**
     * Filter, which Sports to fetch.
     * 
    **/
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     * 
    **/
    orderBy?: Enumerable<SportOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sports.
     * 
    **/
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SportScalarFieldEnum>
  }


  /**
   * Sport create
   */
  export type SportCreateArgs = {
    /**
     * Select specific fields to fetch from the Sport
     * 
    **/
    select?: SportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SportInclude | null
    /**
     * The data needed to create a Sport.
     * 
    **/
    data: XOR<SportCreateInput, SportUncheckedCreateInput>
  }


  /**
   * Sport createMany
   */
  export type SportCreateManyArgs = {
    /**
     * The data used to create many Sports.
     * 
    **/
    data: Enumerable<SportCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Sport update
   */
  export type SportUpdateArgs = {
    /**
     * Select specific fields to fetch from the Sport
     * 
    **/
    select?: SportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SportInclude | null
    /**
     * The data needed to update a Sport.
     * 
    **/
    data: XOR<SportUpdateInput, SportUncheckedUpdateInput>
    /**
     * Choose, which Sport to update.
     * 
    **/
    where: SportWhereUniqueInput
  }


  /**
   * Sport updateMany
   */
  export type SportUpdateManyArgs = {
    /**
     * The data used to update Sports.
     * 
    **/
    data: XOR<SportUpdateManyMutationInput, SportUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     * 
    **/
    where?: SportWhereInput
  }


  /**
   * Sport upsert
   */
  export type SportUpsertArgs = {
    /**
     * Select specific fields to fetch from the Sport
     * 
    **/
    select?: SportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SportInclude | null
    /**
     * The filter to search for the Sport to update in case it exists.
     * 
    **/
    where: SportWhereUniqueInput
    /**
     * In case the Sport found by the `where` argument doesn't exist, create a new Sport with this data.
     * 
    **/
    create: XOR<SportCreateInput, SportUncheckedCreateInput>
    /**
     * In case the Sport was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SportUpdateInput, SportUncheckedUpdateInput>
  }


  /**
   * Sport delete
   */
  export type SportDeleteArgs = {
    /**
     * Select specific fields to fetch from the Sport
     * 
    **/
    select?: SportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SportInclude | null
    /**
     * Filter which Sport to delete.
     * 
    **/
    where: SportWhereUniqueInput
  }


  /**
   * Sport deleteMany
   */
  export type SportDeleteManyArgs = {
    /**
     * Filter which Sports to delete
     * 
    **/
    where?: SportWhereInput
  }


  /**
   * Sport: findUniqueOrThrow
   */
  export type SportFindUniqueOrThrowArgs = SportFindUniqueArgsBase
      

  /**
   * Sport: findFirstOrThrow
   */
  export type SportFindFirstOrThrowArgs = SportFindFirstArgsBase
      

  /**
   * Sport without action
   */
  export type SportArgs = {
    /**
     * Select specific fields to fetch from the Sport
     * 
    **/
    select?: SportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SportInclude | null
  }



  /**
   * Model Court
   */


  export type AggregateCourt = {
    _count: CourtCountAggregateOutputType | null
    _min: CourtMinAggregateOutputType | null
    _max: CourtMaxAggregateOutputType | null
  }

  export type CourtMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CourtMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CourtCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CourtMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CourtMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CourtCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CourtAggregateArgs = {
    /**
     * Filter which Court to aggregate.
     * 
    **/
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     * 
    **/
    orderBy?: Enumerable<CourtOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courts
    **/
    _count?: true | CourtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourtMaxAggregateInputType
  }

  export type GetCourtAggregateType<T extends CourtAggregateArgs> = {
        [P in keyof T & keyof AggregateCourt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourt[P]>
      : GetScalarType<T[P], AggregateCourt[P]>
  }




  export type CourtGroupByArgs = {
    where?: CourtWhereInput
    orderBy?: Enumerable<CourtOrderByWithAggregationInput>
    by: Array<CourtScalarFieldEnum>
    having?: CourtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourtCountAggregateInputType | true
    _min?: CourtMinAggregateInputType
    _max?: CourtMaxAggregateInputType
  }


  export type CourtGroupByOutputType = {
    id: string
    name: string
    _count: CourtCountAggregateOutputType | null
    _min: CourtMinAggregateOutputType | null
    _max: CourtMaxAggregateOutputType | null
  }

  type GetCourtGroupByPayload<T extends CourtGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CourtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourtGroupByOutputType[P]>
            : GetScalarType<T[P], CourtGroupByOutputType[P]>
        }
      >
    >


  export type CourtSelect = {
    id?: boolean
    name?: boolean
    sports?: boolean | CourtHasSportsFindManyArgs
    reservation?: boolean | ReservationFindManyArgs
    unavailableTime?: boolean | unavailableTimeFindManyArgs
    _count?: boolean | CourtCountOutputTypeArgs
  }

  export type CourtInclude = {
    sports?: boolean | CourtHasSportsFindManyArgs
    reservation?: boolean | ReservationFindManyArgs
    unavailableTime?: boolean | unavailableTimeFindManyArgs
    _count?: boolean | CourtCountOutputTypeArgs
  }

  export type CourtGetPayload<
    S extends boolean | null | undefined | CourtArgs,
    U = keyof S
      > = S extends true
        ? Court
    : S extends undefined
    ? never
    : S extends CourtArgs | CourtFindManyArgs
    ?'include' extends U
    ? Court  & {
    [P in TrueKeys<S['include']>]:
        P extends 'sports' ? Array < CourtHasSportsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'reservation' ? Array < ReservationGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'unavailableTime' ? Array < unavailableTimeGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? CourtCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'sports' ? Array < CourtHasSportsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'reservation' ? Array < ReservationGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'unavailableTime' ? Array < unavailableTimeGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? CourtCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Court ? Court[P] : never
  } 
    : Court
  : Court


  type CourtCountArgs = Merge<
    Omit<CourtFindManyArgs, 'select' | 'include'> & {
      select?: CourtCountAggregateInputType | true
    }
  >

  export interface CourtDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Court that matches the filter.
     * @param {CourtFindUniqueArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourtFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CourtFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Court'> extends True ? CheckSelect<T, Prisma__CourtClient<Court>, Prisma__CourtClient<CourtGetPayload<T>>> : CheckSelect<T, Prisma__CourtClient<Court | null >, Prisma__CourtClient<CourtGetPayload<T> | null >>

    /**
     * Find the first Court that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindFirstArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourtFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CourtFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Court'> extends True ? CheckSelect<T, Prisma__CourtClient<Court>, Prisma__CourtClient<CourtGetPayload<T>>> : CheckSelect<T, Prisma__CourtClient<Court | null >, Prisma__CourtClient<CourtGetPayload<T> | null >>

    /**
     * Find zero or more Courts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courts
     * const courts = await prisma.court.findMany()
     * 
     * // Get first 10 Courts
     * const courts = await prisma.court.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courtWithIdOnly = await prisma.court.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourtFindManyArgs>(
      args?: SelectSubset<T, CourtFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Court>>, PrismaPromise<Array<CourtGetPayload<T>>>>

    /**
     * Create a Court.
     * @param {CourtCreateArgs} args - Arguments to create a Court.
     * @example
     * // Create one Court
     * const Court = await prisma.court.create({
     *   data: {
     *     // ... data to create a Court
     *   }
     * })
     * 
    **/
    create<T extends CourtCreateArgs>(
      args: SelectSubset<T, CourtCreateArgs>
    ): CheckSelect<T, Prisma__CourtClient<Court>, Prisma__CourtClient<CourtGetPayload<T>>>

    /**
     * Create many Courts.
     *     @param {CourtCreateManyArgs} args - Arguments to create many Courts.
     *     @example
     *     // Create many Courts
     *     const court = await prisma.court.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourtCreateManyArgs>(
      args?: SelectSubset<T, CourtCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Court.
     * @param {CourtDeleteArgs} args - Arguments to delete one Court.
     * @example
     * // Delete one Court
     * const Court = await prisma.court.delete({
     *   where: {
     *     // ... filter to delete one Court
     *   }
     * })
     * 
    **/
    delete<T extends CourtDeleteArgs>(
      args: SelectSubset<T, CourtDeleteArgs>
    ): CheckSelect<T, Prisma__CourtClient<Court>, Prisma__CourtClient<CourtGetPayload<T>>>

    /**
     * Update one Court.
     * @param {CourtUpdateArgs} args - Arguments to update one Court.
     * @example
     * // Update one Court
     * const court = await prisma.court.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourtUpdateArgs>(
      args: SelectSubset<T, CourtUpdateArgs>
    ): CheckSelect<T, Prisma__CourtClient<Court>, Prisma__CourtClient<CourtGetPayload<T>>>

    /**
     * Delete zero or more Courts.
     * @param {CourtDeleteManyArgs} args - Arguments to filter Courts to delete.
     * @example
     * // Delete a few Courts
     * const { count } = await prisma.court.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourtDeleteManyArgs>(
      args?: SelectSubset<T, CourtDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courts
     * const court = await prisma.court.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourtUpdateManyArgs>(
      args: SelectSubset<T, CourtUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Court.
     * @param {CourtUpsertArgs} args - Arguments to update or create a Court.
     * @example
     * // Update or create a Court
     * const court = await prisma.court.upsert({
     *   create: {
     *     // ... data to create a Court
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Court we want to update
     *   }
     * })
    **/
    upsert<T extends CourtUpsertArgs>(
      args: SelectSubset<T, CourtUpsertArgs>
    ): CheckSelect<T, Prisma__CourtClient<Court>, Prisma__CourtClient<CourtGetPayload<T>>>

    /**
     * Find one Court that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CourtFindUniqueOrThrowArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourtFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CourtFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CourtClient<Court>, Prisma__CourtClient<CourtGetPayload<T>>>

    /**
     * Find the first Court that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindFirstOrThrowArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourtFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CourtFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CourtClient<Court>, Prisma__CourtClient<CourtGetPayload<T>>>

    /**
     * Count the number of Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtCountArgs} args - Arguments to filter Courts to count.
     * @example
     * // Count the number of Courts
     * const count = await prisma.court.count({
     *   where: {
     *     // ... the filter for the Courts we want to count
     *   }
     * })
    **/
    count<T extends CourtCountArgs>(
      args?: Subset<T, CourtCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Court.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourtAggregateArgs>(args: Subset<T, CourtAggregateArgs>): PrismaPromise<GetCourtAggregateType<T>>

    /**
     * Group by Court.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourtGroupByArgs['orderBy'] }
        : { orderBy?: CourtGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourtGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Court.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CourtClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    sports<T extends CourtHasSportsFindManyArgs = {}>(args?: Subset<T, CourtHasSportsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CourtHasSports>>, PrismaPromise<Array<CourtHasSportsGetPayload<T>>>>;

    reservation<T extends ReservationFindManyArgs = {}>(args?: Subset<T, ReservationFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Reservation>>, PrismaPromise<Array<ReservationGetPayload<T>>>>;

    unavailableTime<T extends unavailableTimeFindManyArgs = {}>(args?: Subset<T, unavailableTimeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<unavailableTime>>, PrismaPromise<Array<unavailableTimeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Court base type for findUnique actions
   */
  export type CourtFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Court
     * 
    **/
    select?: CourtSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtInclude | null
    /**
     * Filter, which Court to fetch.
     * 
    **/
    where: CourtWhereUniqueInput
  }

  /**
   * Court: findUnique
   */
  export interface CourtFindUniqueArgs extends CourtFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Court base type for findFirst actions
   */
  export type CourtFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Court
     * 
    **/
    select?: CourtSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtInclude | null
    /**
     * Filter, which Court to fetch.
     * 
    **/
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     * 
    **/
    orderBy?: Enumerable<CourtOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courts.
     * 
    **/
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courts.
     * 
    **/
    distinct?: Enumerable<CourtScalarFieldEnum>
  }

  /**
   * Court: findFirst
   */
  export interface CourtFindFirstArgs extends CourtFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Court findMany
   */
  export type CourtFindManyArgs = {
    /**
     * Select specific fields to fetch from the Court
     * 
    **/
    select?: CourtSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtInclude | null
    /**
     * Filter, which Courts to fetch.
     * 
    **/
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     * 
    **/
    orderBy?: Enumerable<CourtOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courts.
     * 
    **/
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CourtScalarFieldEnum>
  }


  /**
   * Court create
   */
  export type CourtCreateArgs = {
    /**
     * Select specific fields to fetch from the Court
     * 
    **/
    select?: CourtSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtInclude | null
    /**
     * The data needed to create a Court.
     * 
    **/
    data: XOR<CourtCreateInput, CourtUncheckedCreateInput>
  }


  /**
   * Court createMany
   */
  export type CourtCreateManyArgs = {
    /**
     * The data used to create many Courts.
     * 
    **/
    data: Enumerable<CourtCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Court update
   */
  export type CourtUpdateArgs = {
    /**
     * Select specific fields to fetch from the Court
     * 
    **/
    select?: CourtSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtInclude | null
    /**
     * The data needed to update a Court.
     * 
    **/
    data: XOR<CourtUpdateInput, CourtUncheckedUpdateInput>
    /**
     * Choose, which Court to update.
     * 
    **/
    where: CourtWhereUniqueInput
  }


  /**
   * Court updateMany
   */
  export type CourtUpdateManyArgs = {
    /**
     * The data used to update Courts.
     * 
    **/
    data: XOR<CourtUpdateManyMutationInput, CourtUncheckedUpdateManyInput>
    /**
     * Filter which Courts to update
     * 
    **/
    where?: CourtWhereInput
  }


  /**
   * Court upsert
   */
  export type CourtUpsertArgs = {
    /**
     * Select specific fields to fetch from the Court
     * 
    **/
    select?: CourtSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtInclude | null
    /**
     * The filter to search for the Court to update in case it exists.
     * 
    **/
    where: CourtWhereUniqueInput
    /**
     * In case the Court found by the `where` argument doesn't exist, create a new Court with this data.
     * 
    **/
    create: XOR<CourtCreateInput, CourtUncheckedCreateInput>
    /**
     * In case the Court was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CourtUpdateInput, CourtUncheckedUpdateInput>
  }


  /**
   * Court delete
   */
  export type CourtDeleteArgs = {
    /**
     * Select specific fields to fetch from the Court
     * 
    **/
    select?: CourtSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtInclude | null
    /**
     * Filter which Court to delete.
     * 
    **/
    where: CourtWhereUniqueInput
  }


  /**
   * Court deleteMany
   */
  export type CourtDeleteManyArgs = {
    /**
     * Filter which Courts to delete
     * 
    **/
    where?: CourtWhereInput
  }


  /**
   * Court: findUniqueOrThrow
   */
  export type CourtFindUniqueOrThrowArgs = CourtFindUniqueArgsBase
      

  /**
   * Court: findFirstOrThrow
   */
  export type CourtFindFirstOrThrowArgs = CourtFindFirstArgsBase
      

  /**
   * Court without action
   */
  export type CourtArgs = {
    /**
     * Select specific fields to fetch from the Court
     * 
    **/
    select?: CourtSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtInclude | null
  }



  /**
   * Model Reservation
   */


  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    max_participants: number | null
  }

  export type ReservationSumAggregateOutputType = {
    max_participants: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    startDateTime: Date | null
    endDateTime: Date | null
    created_at: Date | null
    manager_id: string | null
    max_participants: number | null
    sportId: string | null
    courtId: string | null
    description: string | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    startDateTime: Date | null
    endDateTime: Date | null
    created_at: Date | null
    manager_id: string | null
    max_participants: number | null
    sportId: string | null
    courtId: string | null
    description: string | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    startDateTime: number
    endDateTime: number
    created_at: number
    manager_id: number
    max_participants: number
    sportId: number
    courtId: number
    description: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    max_participants?: true
  }

  export type ReservationSumAggregateInputType = {
    max_participants?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    startDateTime?: true
    endDateTime?: true
    created_at?: true
    manager_id?: true
    max_participants?: true
    sportId?: true
    courtId?: true
    description?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    startDateTime?: true
    endDateTime?: true
    created_at?: true
    manager_id?: true
    max_participants?: true
    sportId?: true
    courtId?: true
    description?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    startDateTime?: true
    endDateTime?: true
    created_at?: true
    manager_id?: true
    max_participants?: true
    sportId?: true
    courtId?: true
    description?: true
    _all?: true
  }

  export type ReservationAggregateArgs = {
    /**
     * Filter which Reservation to aggregate.
     * 
    **/
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     * 
    **/
    orderBy?: Enumerable<ReservationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs = {
    where?: ReservationWhereInput
    orderBy?: Enumerable<ReservationOrderByWithAggregationInput>
    by: Array<ReservationScalarFieldEnum>
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }


  export type ReservationGroupByOutputType = {
    id: string
    startDateTime: Date | null
    endDateTime: Date | null
    created_at: Date
    manager_id: string
    max_participants: number
    sportId: string
    courtId: string
    description: string
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect = {
    id?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    created_at?: boolean
    manager_id?: boolean
    manager?: boolean | UserArgs
    participants?: boolean | ReservationHasUsersFindManyArgs
    requested_participants?: boolean | ReservationHasRequestedUsersFindManyArgs
    max_participants?: boolean
    sport?: boolean | SportArgs
    sportId?: boolean
    court?: boolean | CourtArgs
    courtId?: boolean
    description?: boolean
    _count?: boolean | ReservationCountOutputTypeArgs
  }

  export type ReservationInclude = {
    manager?: boolean | UserArgs
    participants?: boolean | ReservationHasUsersFindManyArgs
    requested_participants?: boolean | ReservationHasRequestedUsersFindManyArgs
    sport?: boolean | SportArgs
    court?: boolean | CourtArgs
    _count?: boolean | ReservationCountOutputTypeArgs
  }

  export type ReservationGetPayload<
    S extends boolean | null | undefined | ReservationArgs,
    U = keyof S
      > = S extends true
        ? Reservation
    : S extends undefined
    ? never
    : S extends ReservationArgs | ReservationFindManyArgs
    ?'include' extends U
    ? Reservation  & {
    [P in TrueKeys<S['include']>]:
        P extends 'manager' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'participants' ? Array < ReservationHasUsersGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'requested_participants' ? Array < ReservationHasRequestedUsersGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'sport' ? SportGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'court' ? CourtGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends '_count' ? ReservationCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'manager' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'participants' ? Array < ReservationHasUsersGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'requested_participants' ? Array < ReservationHasRequestedUsersGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'sport' ? SportGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'court' ? CourtGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends '_count' ? ReservationCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Reservation ? Reservation[P] : never
  } 
    : Reservation
  : Reservation


  type ReservationCountArgs = Merge<
    Omit<ReservationFindManyArgs, 'select' | 'include'> & {
      select?: ReservationCountAggregateInputType | true
    }
  >

  export interface ReservationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReservationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReservationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Reservation'> extends True ? CheckSelect<T, Prisma__ReservationClient<Reservation>, Prisma__ReservationClient<ReservationGetPayload<T>>> : CheckSelect<T, Prisma__ReservationClient<Reservation | null >, Prisma__ReservationClient<ReservationGetPayload<T> | null >>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReservationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReservationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Reservation'> extends True ? CheckSelect<T, Prisma__ReservationClient<Reservation>, Prisma__ReservationClient<ReservationGetPayload<T>>> : CheckSelect<T, Prisma__ReservationClient<Reservation | null >, Prisma__ReservationClient<ReservationGetPayload<T> | null >>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReservationFindManyArgs>(
      args?: SelectSubset<T, ReservationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Reservation>>, PrismaPromise<Array<ReservationGetPayload<T>>>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
    **/
    create<T extends ReservationCreateArgs>(
      args: SelectSubset<T, ReservationCreateArgs>
    ): CheckSelect<T, Prisma__ReservationClient<Reservation>, Prisma__ReservationClient<ReservationGetPayload<T>>>

    /**
     * Create many Reservations.
     *     @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     *     @example
     *     // Create many Reservations
     *     const reservation = await prisma.reservation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReservationCreateManyArgs>(
      args?: SelectSubset<T, ReservationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
    **/
    delete<T extends ReservationDeleteArgs>(
      args: SelectSubset<T, ReservationDeleteArgs>
    ): CheckSelect<T, Prisma__ReservationClient<Reservation>, Prisma__ReservationClient<ReservationGetPayload<T>>>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReservationUpdateArgs>(
      args: SelectSubset<T, ReservationUpdateArgs>
    ): CheckSelect<T, Prisma__ReservationClient<Reservation>, Prisma__ReservationClient<ReservationGetPayload<T>>>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReservationDeleteManyArgs>(
      args?: SelectSubset<T, ReservationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReservationUpdateManyArgs>(
      args: SelectSubset<T, ReservationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
    **/
    upsert<T extends ReservationUpsertArgs>(
      args: SelectSubset<T, ReservationUpsertArgs>
    ): CheckSelect<T, Prisma__ReservationClient<Reservation>, Prisma__ReservationClient<ReservationGetPayload<T>>>

    /**
     * Find one Reservation that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ReservationFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ReservationClient<Reservation>, Prisma__ReservationClient<ReservationGetPayload<T>>>

    /**
     * Find the first Reservation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReservationFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ReservationClient<Reservation>, Prisma__ReservationClient<ReservationGetPayload<T>>>

    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReservationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    manager<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    participants<T extends ReservationHasUsersFindManyArgs = {}>(args?: Subset<T, ReservationHasUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ReservationHasUsers>>, PrismaPromise<Array<ReservationHasUsersGetPayload<T>>>>;

    requested_participants<T extends ReservationHasRequestedUsersFindManyArgs = {}>(args?: Subset<T, ReservationHasRequestedUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ReservationHasRequestedUsers>>, PrismaPromise<Array<ReservationHasRequestedUsersGetPayload<T>>>>;

    sport<T extends SportArgs = {}>(args?: Subset<T, SportArgs>): CheckSelect<T, Prisma__SportClient<Sport | null >, Prisma__SportClient<SportGetPayload<T> | null >>;

    court<T extends CourtArgs = {}>(args?: Subset<T, CourtArgs>): CheckSelect<T, Prisma__CourtClient<Court | null >, Prisma__CourtClient<CourtGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Reservation base type for findUnique actions
   */
  export type ReservationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Reservation
     * 
    **/
    select?: ReservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationInclude | null
    /**
     * Filter, which Reservation to fetch.
     * 
    **/
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation: findUnique
   */
  export interface ReservationFindUniqueArgs extends ReservationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Reservation base type for findFirst actions
   */
  export type ReservationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Reservation
     * 
    **/
    select?: ReservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationInclude | null
    /**
     * Filter, which Reservation to fetch.
     * 
    **/
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     * 
    **/
    orderBy?: Enumerable<ReservationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     * 
    **/
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     * 
    **/
    distinct?: Enumerable<ReservationScalarFieldEnum>
  }

  /**
   * Reservation: findFirst
   */
  export interface ReservationFindFirstArgs extends ReservationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Reservation
     * 
    **/
    select?: ReservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationInclude | null
    /**
     * Filter, which Reservations to fetch.
     * 
    **/
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     * 
    **/
    orderBy?: Enumerable<ReservationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     * 
    **/
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ReservationScalarFieldEnum>
  }


  /**
   * Reservation create
   */
  export type ReservationCreateArgs = {
    /**
     * Select specific fields to fetch from the Reservation
     * 
    **/
    select?: ReservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationInclude | null
    /**
     * The data needed to create a Reservation.
     * 
    **/
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }


  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs = {
    /**
     * The data used to create many Reservations.
     * 
    **/
    data: Enumerable<ReservationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Reservation update
   */
  export type ReservationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Reservation
     * 
    **/
    select?: ReservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationInclude | null
    /**
     * The data needed to update a Reservation.
     * 
    **/
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     * 
    **/
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs = {
    /**
     * The data used to update Reservations.
     * 
    **/
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     * 
    **/
    where?: ReservationWhereInput
  }


  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Reservation
     * 
    **/
    select?: ReservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationInclude | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     * 
    **/
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     * 
    **/
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }


  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Reservation
     * 
    **/
    select?: ReservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationInclude | null
    /**
     * Filter which Reservation to delete.
     * 
    **/
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs = {
    /**
     * Filter which Reservations to delete
     * 
    **/
    where?: ReservationWhereInput
  }


  /**
   * Reservation: findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs = ReservationFindUniqueArgsBase
      

  /**
   * Reservation: findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs = ReservationFindFirstArgsBase
      

  /**
   * Reservation without action
   */
  export type ReservationArgs = {
    /**
     * Select specific fields to fetch from the Reservation
     * 
    **/
    select?: ReservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationInclude | null
  }



  /**
   * Model dayOfTheWeek
   */


  export type AggregateDayOfTheWeek = {
    _count: DayOfTheWeekCountAggregateOutputType | null
    _min: DayOfTheWeekMinAggregateOutputType | null
    _max: DayOfTheWeekMaxAggregateOutputType | null
  }

  export type DayOfTheWeekMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DayOfTheWeekMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DayOfTheWeekCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DayOfTheWeekMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DayOfTheWeekMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DayOfTheWeekCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DayOfTheWeekAggregateArgs = {
    /**
     * Filter which dayOfTheWeek to aggregate.
     * 
    **/
    where?: dayOfTheWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dayOfTheWeeks to fetch.
     * 
    **/
    orderBy?: Enumerable<dayOfTheWeekOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: dayOfTheWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dayOfTheWeeks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dayOfTheWeeks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dayOfTheWeeks
    **/
    _count?: true | DayOfTheWeekCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayOfTheWeekMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayOfTheWeekMaxAggregateInputType
  }

  export type GetDayOfTheWeekAggregateType<T extends DayOfTheWeekAggregateArgs> = {
        [P in keyof T & keyof AggregateDayOfTheWeek]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDayOfTheWeek[P]>
      : GetScalarType<T[P], AggregateDayOfTheWeek[P]>
  }




  export type DayOfTheWeekGroupByArgs = {
    where?: dayOfTheWeekWhereInput
    orderBy?: Enumerable<dayOfTheWeekOrderByWithAggregationInput>
    by: Array<DayOfTheWeekScalarFieldEnum>
    having?: dayOfTheWeekScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayOfTheWeekCountAggregateInputType | true
    _min?: DayOfTheWeekMinAggregateInputType
    _max?: DayOfTheWeekMaxAggregateInputType
  }


  export type DayOfTheWeekGroupByOutputType = {
    id: string
    name: string
    _count: DayOfTheWeekCountAggregateOutputType | null
    _min: DayOfTheWeekMinAggregateOutputType | null
    _max: DayOfTheWeekMaxAggregateOutputType | null
  }

  type GetDayOfTheWeekGroupByPayload<T extends DayOfTheWeekGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DayOfTheWeekGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayOfTheWeekGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayOfTheWeekGroupByOutputType[P]>
            : GetScalarType<T[P], DayOfTheWeekGroupByOutputType[P]>
        }
      >
    >


  export type dayOfTheWeekSelect = {
    id?: boolean
    name?: boolean
    UnavailableTimeHasDayOfTheWeek?: boolean | UnavailableTimeHasDayOfTheWeekFindManyArgs
    _count?: boolean | DayOfTheWeekCountOutputTypeArgs
  }

  export type dayOfTheWeekInclude = {
    UnavailableTimeHasDayOfTheWeek?: boolean | UnavailableTimeHasDayOfTheWeekFindManyArgs
    _count?: boolean | DayOfTheWeekCountOutputTypeArgs
  }

  export type dayOfTheWeekGetPayload<
    S extends boolean | null | undefined | dayOfTheWeekArgs,
    U = keyof S
      > = S extends true
        ? dayOfTheWeek
    : S extends undefined
    ? never
    : S extends dayOfTheWeekArgs | dayOfTheWeekFindManyArgs
    ?'include' extends U
    ? dayOfTheWeek  & {
    [P in TrueKeys<S['include']>]:
        P extends 'UnavailableTimeHasDayOfTheWeek' ? Array < UnavailableTimeHasDayOfTheWeekGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? DayOfTheWeekCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'UnavailableTimeHasDayOfTheWeek' ? Array < UnavailableTimeHasDayOfTheWeekGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? DayOfTheWeekCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof dayOfTheWeek ? dayOfTheWeek[P] : never
  } 
    : dayOfTheWeek
  : dayOfTheWeek


  type dayOfTheWeekCountArgs = Merge<
    Omit<dayOfTheWeekFindManyArgs, 'select' | 'include'> & {
      select?: DayOfTheWeekCountAggregateInputType | true
    }
  >

  export interface dayOfTheWeekDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one DayOfTheWeek that matches the filter.
     * @param {dayOfTheWeekFindUniqueArgs} args - Arguments to find a DayOfTheWeek
     * @example
     * // Get one DayOfTheWeek
     * const dayOfTheWeek = await prisma.dayOfTheWeek.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dayOfTheWeekFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, dayOfTheWeekFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'dayOfTheWeek'> extends True ? CheckSelect<T, Prisma__dayOfTheWeekClient<dayOfTheWeek>, Prisma__dayOfTheWeekClient<dayOfTheWeekGetPayload<T>>> : CheckSelect<T, Prisma__dayOfTheWeekClient<dayOfTheWeek | null >, Prisma__dayOfTheWeekClient<dayOfTheWeekGetPayload<T> | null >>

    /**
     * Find the first DayOfTheWeek that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dayOfTheWeekFindFirstArgs} args - Arguments to find a DayOfTheWeek
     * @example
     * // Get one DayOfTheWeek
     * const dayOfTheWeek = await prisma.dayOfTheWeek.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dayOfTheWeekFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, dayOfTheWeekFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'dayOfTheWeek'> extends True ? CheckSelect<T, Prisma__dayOfTheWeekClient<dayOfTheWeek>, Prisma__dayOfTheWeekClient<dayOfTheWeekGetPayload<T>>> : CheckSelect<T, Prisma__dayOfTheWeekClient<dayOfTheWeek | null >, Prisma__dayOfTheWeekClient<dayOfTheWeekGetPayload<T> | null >>

    /**
     * Find zero or more DayOfTheWeeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dayOfTheWeekFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DayOfTheWeeks
     * const dayOfTheWeeks = await prisma.dayOfTheWeek.findMany()
     * 
     * // Get first 10 DayOfTheWeeks
     * const dayOfTheWeeks = await prisma.dayOfTheWeek.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayOfTheWeekWithIdOnly = await prisma.dayOfTheWeek.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends dayOfTheWeekFindManyArgs>(
      args?: SelectSubset<T, dayOfTheWeekFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<dayOfTheWeek>>, PrismaPromise<Array<dayOfTheWeekGetPayload<T>>>>

    /**
     * Create a DayOfTheWeek.
     * @param {dayOfTheWeekCreateArgs} args - Arguments to create a DayOfTheWeek.
     * @example
     * // Create one DayOfTheWeek
     * const DayOfTheWeek = await prisma.dayOfTheWeek.create({
     *   data: {
     *     // ... data to create a DayOfTheWeek
     *   }
     * })
     * 
    **/
    create<T extends dayOfTheWeekCreateArgs>(
      args: SelectSubset<T, dayOfTheWeekCreateArgs>
    ): CheckSelect<T, Prisma__dayOfTheWeekClient<dayOfTheWeek>, Prisma__dayOfTheWeekClient<dayOfTheWeekGetPayload<T>>>

    /**
     * Create many DayOfTheWeeks.
     *     @param {dayOfTheWeekCreateManyArgs} args - Arguments to create many DayOfTheWeeks.
     *     @example
     *     // Create many DayOfTheWeeks
     *     const dayOfTheWeek = await prisma.dayOfTheWeek.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends dayOfTheWeekCreateManyArgs>(
      args?: SelectSubset<T, dayOfTheWeekCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DayOfTheWeek.
     * @param {dayOfTheWeekDeleteArgs} args - Arguments to delete one DayOfTheWeek.
     * @example
     * // Delete one DayOfTheWeek
     * const DayOfTheWeek = await prisma.dayOfTheWeek.delete({
     *   where: {
     *     // ... filter to delete one DayOfTheWeek
     *   }
     * })
     * 
    **/
    delete<T extends dayOfTheWeekDeleteArgs>(
      args: SelectSubset<T, dayOfTheWeekDeleteArgs>
    ): CheckSelect<T, Prisma__dayOfTheWeekClient<dayOfTheWeek>, Prisma__dayOfTheWeekClient<dayOfTheWeekGetPayload<T>>>

    /**
     * Update one DayOfTheWeek.
     * @param {dayOfTheWeekUpdateArgs} args - Arguments to update one DayOfTheWeek.
     * @example
     * // Update one DayOfTheWeek
     * const dayOfTheWeek = await prisma.dayOfTheWeek.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dayOfTheWeekUpdateArgs>(
      args: SelectSubset<T, dayOfTheWeekUpdateArgs>
    ): CheckSelect<T, Prisma__dayOfTheWeekClient<dayOfTheWeek>, Prisma__dayOfTheWeekClient<dayOfTheWeekGetPayload<T>>>

    /**
     * Delete zero or more DayOfTheWeeks.
     * @param {dayOfTheWeekDeleteManyArgs} args - Arguments to filter DayOfTheWeeks to delete.
     * @example
     * // Delete a few DayOfTheWeeks
     * const { count } = await prisma.dayOfTheWeek.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dayOfTheWeekDeleteManyArgs>(
      args?: SelectSubset<T, dayOfTheWeekDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayOfTheWeeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dayOfTheWeekUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DayOfTheWeeks
     * const dayOfTheWeek = await prisma.dayOfTheWeek.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dayOfTheWeekUpdateManyArgs>(
      args: SelectSubset<T, dayOfTheWeekUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DayOfTheWeek.
     * @param {dayOfTheWeekUpsertArgs} args - Arguments to update or create a DayOfTheWeek.
     * @example
     * // Update or create a DayOfTheWeek
     * const dayOfTheWeek = await prisma.dayOfTheWeek.upsert({
     *   create: {
     *     // ... data to create a DayOfTheWeek
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DayOfTheWeek we want to update
     *   }
     * })
    **/
    upsert<T extends dayOfTheWeekUpsertArgs>(
      args: SelectSubset<T, dayOfTheWeekUpsertArgs>
    ): CheckSelect<T, Prisma__dayOfTheWeekClient<dayOfTheWeek>, Prisma__dayOfTheWeekClient<dayOfTheWeekGetPayload<T>>>

    /**
     * Find one DayOfTheWeek that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {dayOfTheWeekFindUniqueOrThrowArgs} args - Arguments to find a DayOfTheWeek
     * @example
     * // Get one DayOfTheWeek
     * const dayOfTheWeek = await prisma.dayOfTheWeek.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends dayOfTheWeekFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, dayOfTheWeekFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__dayOfTheWeekClient<dayOfTheWeek>, Prisma__dayOfTheWeekClient<dayOfTheWeekGetPayload<T>>>

    /**
     * Find the first DayOfTheWeek that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dayOfTheWeekFindFirstOrThrowArgs} args - Arguments to find a DayOfTheWeek
     * @example
     * // Get one DayOfTheWeek
     * const dayOfTheWeek = await prisma.dayOfTheWeek.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends dayOfTheWeekFindFirstOrThrowArgs>(
      args?: SelectSubset<T, dayOfTheWeekFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__dayOfTheWeekClient<dayOfTheWeek>, Prisma__dayOfTheWeekClient<dayOfTheWeekGetPayload<T>>>

    /**
     * Count the number of DayOfTheWeeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dayOfTheWeekCountArgs} args - Arguments to filter DayOfTheWeeks to count.
     * @example
     * // Count the number of DayOfTheWeeks
     * const count = await prisma.dayOfTheWeek.count({
     *   where: {
     *     // ... the filter for the DayOfTheWeeks we want to count
     *   }
     * })
    **/
    count<T extends dayOfTheWeekCountArgs>(
      args?: Subset<T, dayOfTheWeekCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayOfTheWeekCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DayOfTheWeek.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOfTheWeekAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayOfTheWeekAggregateArgs>(args: Subset<T, DayOfTheWeekAggregateArgs>): PrismaPromise<GetDayOfTheWeekAggregateType<T>>

    /**
     * Group by DayOfTheWeek.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOfTheWeekGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayOfTheWeekGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayOfTheWeekGroupByArgs['orderBy'] }
        : { orderBy?: DayOfTheWeekGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayOfTheWeekGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayOfTheWeekGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for dayOfTheWeek.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__dayOfTheWeekClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    UnavailableTimeHasDayOfTheWeek<T extends UnavailableTimeHasDayOfTheWeekFindManyArgs = {}>(args?: Subset<T, UnavailableTimeHasDayOfTheWeekFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UnavailableTimeHasDayOfTheWeek>>, PrismaPromise<Array<UnavailableTimeHasDayOfTheWeekGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * dayOfTheWeek base type for findUnique actions
   */
  export type dayOfTheWeekFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the dayOfTheWeek
     * 
    **/
    select?: dayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dayOfTheWeekInclude | null
    /**
     * Filter, which dayOfTheWeek to fetch.
     * 
    **/
    where: dayOfTheWeekWhereUniqueInput
  }

  /**
   * dayOfTheWeek: findUnique
   */
  export interface dayOfTheWeekFindUniqueArgs extends dayOfTheWeekFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dayOfTheWeek base type for findFirst actions
   */
  export type dayOfTheWeekFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the dayOfTheWeek
     * 
    **/
    select?: dayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dayOfTheWeekInclude | null
    /**
     * Filter, which dayOfTheWeek to fetch.
     * 
    **/
    where?: dayOfTheWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dayOfTheWeeks to fetch.
     * 
    **/
    orderBy?: Enumerable<dayOfTheWeekOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dayOfTheWeeks.
     * 
    **/
    cursor?: dayOfTheWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dayOfTheWeeks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dayOfTheWeeks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dayOfTheWeeks.
     * 
    **/
    distinct?: Enumerable<DayOfTheWeekScalarFieldEnum>
  }

  /**
   * dayOfTheWeek: findFirst
   */
  export interface dayOfTheWeekFindFirstArgs extends dayOfTheWeekFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dayOfTheWeek findMany
   */
  export type dayOfTheWeekFindManyArgs = {
    /**
     * Select specific fields to fetch from the dayOfTheWeek
     * 
    **/
    select?: dayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dayOfTheWeekInclude | null
    /**
     * Filter, which dayOfTheWeeks to fetch.
     * 
    **/
    where?: dayOfTheWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dayOfTheWeeks to fetch.
     * 
    **/
    orderBy?: Enumerable<dayOfTheWeekOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dayOfTheWeeks.
     * 
    **/
    cursor?: dayOfTheWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dayOfTheWeeks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dayOfTheWeeks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DayOfTheWeekScalarFieldEnum>
  }


  /**
   * dayOfTheWeek create
   */
  export type dayOfTheWeekCreateArgs = {
    /**
     * Select specific fields to fetch from the dayOfTheWeek
     * 
    **/
    select?: dayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dayOfTheWeekInclude | null
    /**
     * The data needed to create a dayOfTheWeek.
     * 
    **/
    data: XOR<dayOfTheWeekCreateInput, dayOfTheWeekUncheckedCreateInput>
  }


  /**
   * dayOfTheWeek createMany
   */
  export type dayOfTheWeekCreateManyArgs = {
    /**
     * The data used to create many dayOfTheWeeks.
     * 
    **/
    data: Enumerable<dayOfTheWeekCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * dayOfTheWeek update
   */
  export type dayOfTheWeekUpdateArgs = {
    /**
     * Select specific fields to fetch from the dayOfTheWeek
     * 
    **/
    select?: dayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dayOfTheWeekInclude | null
    /**
     * The data needed to update a dayOfTheWeek.
     * 
    **/
    data: XOR<dayOfTheWeekUpdateInput, dayOfTheWeekUncheckedUpdateInput>
    /**
     * Choose, which dayOfTheWeek to update.
     * 
    **/
    where: dayOfTheWeekWhereUniqueInput
  }


  /**
   * dayOfTheWeek updateMany
   */
  export type dayOfTheWeekUpdateManyArgs = {
    /**
     * The data used to update dayOfTheWeeks.
     * 
    **/
    data: XOR<dayOfTheWeekUpdateManyMutationInput, dayOfTheWeekUncheckedUpdateManyInput>
    /**
     * Filter which dayOfTheWeeks to update
     * 
    **/
    where?: dayOfTheWeekWhereInput
  }


  /**
   * dayOfTheWeek upsert
   */
  export type dayOfTheWeekUpsertArgs = {
    /**
     * Select specific fields to fetch from the dayOfTheWeek
     * 
    **/
    select?: dayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dayOfTheWeekInclude | null
    /**
     * The filter to search for the dayOfTheWeek to update in case it exists.
     * 
    **/
    where: dayOfTheWeekWhereUniqueInput
    /**
     * In case the dayOfTheWeek found by the `where` argument doesn't exist, create a new dayOfTheWeek with this data.
     * 
    **/
    create: XOR<dayOfTheWeekCreateInput, dayOfTheWeekUncheckedCreateInput>
    /**
     * In case the dayOfTheWeek was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<dayOfTheWeekUpdateInput, dayOfTheWeekUncheckedUpdateInput>
  }


  /**
   * dayOfTheWeek delete
   */
  export type dayOfTheWeekDeleteArgs = {
    /**
     * Select specific fields to fetch from the dayOfTheWeek
     * 
    **/
    select?: dayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dayOfTheWeekInclude | null
    /**
     * Filter which dayOfTheWeek to delete.
     * 
    **/
    where: dayOfTheWeekWhereUniqueInput
  }


  /**
   * dayOfTheWeek deleteMany
   */
  export type dayOfTheWeekDeleteManyArgs = {
    /**
     * Filter which dayOfTheWeeks to delete
     * 
    **/
    where?: dayOfTheWeekWhereInput
  }


  /**
   * dayOfTheWeek: findUniqueOrThrow
   */
  export type dayOfTheWeekFindUniqueOrThrowArgs = dayOfTheWeekFindUniqueArgsBase
      

  /**
   * dayOfTheWeek: findFirstOrThrow
   */
  export type dayOfTheWeekFindFirstOrThrowArgs = dayOfTheWeekFindFirstArgsBase
      

  /**
   * dayOfTheWeek without action
   */
  export type dayOfTheWeekArgs = {
    /**
     * Select specific fields to fetch from the dayOfTheWeek
     * 
    **/
    select?: dayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dayOfTheWeekInclude | null
  }



  /**
   * Model unavailableTime
   */


  export type AggregateUnavailableTime = {
    _count: UnavailableTimeCountAggregateOutputType | null
    _min: UnavailableTimeMinAggregateOutputType | null
    _max: UnavailableTimeMaxAggregateOutputType | null
  }

  export type UnavailableTimeMinAggregateOutputType = {
    id: string | null
    startDateTime: Date | null
    endDateTime: Date | null
    startTime: Date | null
    endTime: Date | null
    created_at: Date | null
    courtId: string | null
  }

  export type UnavailableTimeMaxAggregateOutputType = {
    id: string | null
    startDateTime: Date | null
    endDateTime: Date | null
    startTime: Date | null
    endTime: Date | null
    created_at: Date | null
    courtId: string | null
  }

  export type UnavailableTimeCountAggregateOutputType = {
    id: number
    startDateTime: number
    endDateTime: number
    startTime: number
    endTime: number
    created_at: number
    courtId: number
    _all: number
  }


  export type UnavailableTimeMinAggregateInputType = {
    id?: true
    startDateTime?: true
    endDateTime?: true
    startTime?: true
    endTime?: true
    created_at?: true
    courtId?: true
  }

  export type UnavailableTimeMaxAggregateInputType = {
    id?: true
    startDateTime?: true
    endDateTime?: true
    startTime?: true
    endTime?: true
    created_at?: true
    courtId?: true
  }

  export type UnavailableTimeCountAggregateInputType = {
    id?: true
    startDateTime?: true
    endDateTime?: true
    startTime?: true
    endTime?: true
    created_at?: true
    courtId?: true
    _all?: true
  }

  export type UnavailableTimeAggregateArgs = {
    /**
     * Filter which unavailableTime to aggregate.
     * 
    **/
    where?: unavailableTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unavailableTimes to fetch.
     * 
    **/
    orderBy?: Enumerable<unavailableTimeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: unavailableTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unavailableTimes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unavailableTimes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned unavailableTimes
    **/
    _count?: true | UnavailableTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnavailableTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnavailableTimeMaxAggregateInputType
  }

  export type GetUnavailableTimeAggregateType<T extends UnavailableTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateUnavailableTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnavailableTime[P]>
      : GetScalarType<T[P], AggregateUnavailableTime[P]>
  }




  export type UnavailableTimeGroupByArgs = {
    where?: unavailableTimeWhereInput
    orderBy?: Enumerable<unavailableTimeOrderByWithAggregationInput>
    by: Array<UnavailableTimeScalarFieldEnum>
    having?: unavailableTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnavailableTimeCountAggregateInputType | true
    _min?: UnavailableTimeMinAggregateInputType
    _max?: UnavailableTimeMaxAggregateInputType
  }


  export type UnavailableTimeGroupByOutputType = {
    id: string
    startDateTime: Date
    endDateTime: Date
    startTime: Date
    endTime: Date
    created_at: Date
    courtId: string
    _count: UnavailableTimeCountAggregateOutputType | null
    _min: UnavailableTimeMinAggregateOutputType | null
    _max: UnavailableTimeMaxAggregateOutputType | null
  }

  type GetUnavailableTimeGroupByPayload<T extends UnavailableTimeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UnavailableTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnavailableTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnavailableTimeGroupByOutputType[P]>
            : GetScalarType<T[P], UnavailableTimeGroupByOutputType[P]>
        }
      >
    >


  export type unavailableTimeSelect = {
    id?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    startTime?: boolean
    endTime?: boolean
    court?: boolean | CourtArgs
    created_at?: boolean
    courtId?: boolean
    daysOfTheWeek?: boolean | UnavailableTimeHasDayOfTheWeekArgs
  }

  export type unavailableTimeInclude = {
    court?: boolean | CourtArgs
    daysOfTheWeek?: boolean | UnavailableTimeHasDayOfTheWeekArgs
  }

  export type unavailableTimeGetPayload<
    S extends boolean | null | undefined | unavailableTimeArgs,
    U = keyof S
      > = S extends true
        ? unavailableTime
    : S extends undefined
    ? never
    : S extends unavailableTimeArgs | unavailableTimeFindManyArgs
    ?'include' extends U
    ? unavailableTime  & {
    [P in TrueKeys<S['include']>]:
        P extends 'court' ? CourtGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'daysOfTheWeek' ? UnavailableTimeHasDayOfTheWeekGetPayload<Exclude<S['include'], undefined | null>[P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'court' ? CourtGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'daysOfTheWeek' ? UnavailableTimeHasDayOfTheWeekGetPayload<Exclude<S['select'], undefined | null>[P]> | null :  P extends keyof unavailableTime ? unavailableTime[P] : never
  } 
    : unavailableTime
  : unavailableTime


  type unavailableTimeCountArgs = Merge<
    Omit<unavailableTimeFindManyArgs, 'select' | 'include'> & {
      select?: UnavailableTimeCountAggregateInputType | true
    }
  >

  export interface unavailableTimeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one UnavailableTime that matches the filter.
     * @param {unavailableTimeFindUniqueArgs} args - Arguments to find a UnavailableTime
     * @example
     * // Get one UnavailableTime
     * const unavailableTime = await prisma.unavailableTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends unavailableTimeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, unavailableTimeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'unavailableTime'> extends True ? CheckSelect<T, Prisma__unavailableTimeClient<unavailableTime>, Prisma__unavailableTimeClient<unavailableTimeGetPayload<T>>> : CheckSelect<T, Prisma__unavailableTimeClient<unavailableTime | null >, Prisma__unavailableTimeClient<unavailableTimeGetPayload<T> | null >>

    /**
     * Find the first UnavailableTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unavailableTimeFindFirstArgs} args - Arguments to find a UnavailableTime
     * @example
     * // Get one UnavailableTime
     * const unavailableTime = await prisma.unavailableTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends unavailableTimeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, unavailableTimeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'unavailableTime'> extends True ? CheckSelect<T, Prisma__unavailableTimeClient<unavailableTime>, Prisma__unavailableTimeClient<unavailableTimeGetPayload<T>>> : CheckSelect<T, Prisma__unavailableTimeClient<unavailableTime | null >, Prisma__unavailableTimeClient<unavailableTimeGetPayload<T> | null >>

    /**
     * Find zero or more UnavailableTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unavailableTimeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnavailableTimes
     * const unavailableTimes = await prisma.unavailableTime.findMany()
     * 
     * // Get first 10 UnavailableTimes
     * const unavailableTimes = await prisma.unavailableTime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unavailableTimeWithIdOnly = await prisma.unavailableTime.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends unavailableTimeFindManyArgs>(
      args?: SelectSubset<T, unavailableTimeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<unavailableTime>>, PrismaPromise<Array<unavailableTimeGetPayload<T>>>>

    /**
     * Create a UnavailableTime.
     * @param {unavailableTimeCreateArgs} args - Arguments to create a UnavailableTime.
     * @example
     * // Create one UnavailableTime
     * const UnavailableTime = await prisma.unavailableTime.create({
     *   data: {
     *     // ... data to create a UnavailableTime
     *   }
     * })
     * 
    **/
    create<T extends unavailableTimeCreateArgs>(
      args: SelectSubset<T, unavailableTimeCreateArgs>
    ): CheckSelect<T, Prisma__unavailableTimeClient<unavailableTime>, Prisma__unavailableTimeClient<unavailableTimeGetPayload<T>>>

    /**
     * Create many UnavailableTimes.
     *     @param {unavailableTimeCreateManyArgs} args - Arguments to create many UnavailableTimes.
     *     @example
     *     // Create many UnavailableTimes
     *     const unavailableTime = await prisma.unavailableTime.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends unavailableTimeCreateManyArgs>(
      args?: SelectSubset<T, unavailableTimeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UnavailableTime.
     * @param {unavailableTimeDeleteArgs} args - Arguments to delete one UnavailableTime.
     * @example
     * // Delete one UnavailableTime
     * const UnavailableTime = await prisma.unavailableTime.delete({
     *   where: {
     *     // ... filter to delete one UnavailableTime
     *   }
     * })
     * 
    **/
    delete<T extends unavailableTimeDeleteArgs>(
      args: SelectSubset<T, unavailableTimeDeleteArgs>
    ): CheckSelect<T, Prisma__unavailableTimeClient<unavailableTime>, Prisma__unavailableTimeClient<unavailableTimeGetPayload<T>>>

    /**
     * Update one UnavailableTime.
     * @param {unavailableTimeUpdateArgs} args - Arguments to update one UnavailableTime.
     * @example
     * // Update one UnavailableTime
     * const unavailableTime = await prisma.unavailableTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends unavailableTimeUpdateArgs>(
      args: SelectSubset<T, unavailableTimeUpdateArgs>
    ): CheckSelect<T, Prisma__unavailableTimeClient<unavailableTime>, Prisma__unavailableTimeClient<unavailableTimeGetPayload<T>>>

    /**
     * Delete zero or more UnavailableTimes.
     * @param {unavailableTimeDeleteManyArgs} args - Arguments to filter UnavailableTimes to delete.
     * @example
     * // Delete a few UnavailableTimes
     * const { count } = await prisma.unavailableTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends unavailableTimeDeleteManyArgs>(
      args?: SelectSubset<T, unavailableTimeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnavailableTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unavailableTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnavailableTimes
     * const unavailableTime = await prisma.unavailableTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends unavailableTimeUpdateManyArgs>(
      args: SelectSubset<T, unavailableTimeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UnavailableTime.
     * @param {unavailableTimeUpsertArgs} args - Arguments to update or create a UnavailableTime.
     * @example
     * // Update or create a UnavailableTime
     * const unavailableTime = await prisma.unavailableTime.upsert({
     *   create: {
     *     // ... data to create a UnavailableTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnavailableTime we want to update
     *   }
     * })
    **/
    upsert<T extends unavailableTimeUpsertArgs>(
      args: SelectSubset<T, unavailableTimeUpsertArgs>
    ): CheckSelect<T, Prisma__unavailableTimeClient<unavailableTime>, Prisma__unavailableTimeClient<unavailableTimeGetPayload<T>>>

    /**
     * Find one UnavailableTime that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {unavailableTimeFindUniqueOrThrowArgs} args - Arguments to find a UnavailableTime
     * @example
     * // Get one UnavailableTime
     * const unavailableTime = await prisma.unavailableTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends unavailableTimeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, unavailableTimeFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__unavailableTimeClient<unavailableTime>, Prisma__unavailableTimeClient<unavailableTimeGetPayload<T>>>

    /**
     * Find the first UnavailableTime that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unavailableTimeFindFirstOrThrowArgs} args - Arguments to find a UnavailableTime
     * @example
     * // Get one UnavailableTime
     * const unavailableTime = await prisma.unavailableTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends unavailableTimeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, unavailableTimeFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__unavailableTimeClient<unavailableTime>, Prisma__unavailableTimeClient<unavailableTimeGetPayload<T>>>

    /**
     * Count the number of UnavailableTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unavailableTimeCountArgs} args - Arguments to filter UnavailableTimes to count.
     * @example
     * // Count the number of UnavailableTimes
     * const count = await prisma.unavailableTime.count({
     *   where: {
     *     // ... the filter for the UnavailableTimes we want to count
     *   }
     * })
    **/
    count<T extends unavailableTimeCountArgs>(
      args?: Subset<T, unavailableTimeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnavailableTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnavailableTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnavailableTimeAggregateArgs>(args: Subset<T, UnavailableTimeAggregateArgs>): PrismaPromise<GetUnavailableTimeAggregateType<T>>

    /**
     * Group by UnavailableTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableTimeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnavailableTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnavailableTimeGroupByArgs['orderBy'] }
        : { orderBy?: UnavailableTimeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnavailableTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnavailableTimeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for unavailableTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__unavailableTimeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    court<T extends CourtArgs = {}>(args?: Subset<T, CourtArgs>): CheckSelect<T, Prisma__CourtClient<Court | null >, Prisma__CourtClient<CourtGetPayload<T> | null >>;

    daysOfTheWeek<T extends UnavailableTimeHasDayOfTheWeekArgs = {}>(args?: Subset<T, UnavailableTimeHasDayOfTheWeekArgs>): CheckSelect<T, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeek | null >, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeekGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * unavailableTime base type for findUnique actions
   */
  export type unavailableTimeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the unavailableTime
     * 
    **/
    select?: unavailableTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unavailableTimeInclude | null
    /**
     * Filter, which unavailableTime to fetch.
     * 
    **/
    where: unavailableTimeWhereUniqueInput
  }

  /**
   * unavailableTime: findUnique
   */
  export interface unavailableTimeFindUniqueArgs extends unavailableTimeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * unavailableTime base type for findFirst actions
   */
  export type unavailableTimeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the unavailableTime
     * 
    **/
    select?: unavailableTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unavailableTimeInclude | null
    /**
     * Filter, which unavailableTime to fetch.
     * 
    **/
    where?: unavailableTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unavailableTimes to fetch.
     * 
    **/
    orderBy?: Enumerable<unavailableTimeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for unavailableTimes.
     * 
    **/
    cursor?: unavailableTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unavailableTimes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unavailableTimes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of unavailableTimes.
     * 
    **/
    distinct?: Enumerable<UnavailableTimeScalarFieldEnum>
  }

  /**
   * unavailableTime: findFirst
   */
  export interface unavailableTimeFindFirstArgs extends unavailableTimeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * unavailableTime findMany
   */
  export type unavailableTimeFindManyArgs = {
    /**
     * Select specific fields to fetch from the unavailableTime
     * 
    **/
    select?: unavailableTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unavailableTimeInclude | null
    /**
     * Filter, which unavailableTimes to fetch.
     * 
    **/
    where?: unavailableTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unavailableTimes to fetch.
     * 
    **/
    orderBy?: Enumerable<unavailableTimeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing unavailableTimes.
     * 
    **/
    cursor?: unavailableTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unavailableTimes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unavailableTimes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UnavailableTimeScalarFieldEnum>
  }


  /**
   * unavailableTime create
   */
  export type unavailableTimeCreateArgs = {
    /**
     * Select specific fields to fetch from the unavailableTime
     * 
    **/
    select?: unavailableTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unavailableTimeInclude | null
    /**
     * The data needed to create a unavailableTime.
     * 
    **/
    data: XOR<unavailableTimeCreateInput, unavailableTimeUncheckedCreateInput>
  }


  /**
   * unavailableTime createMany
   */
  export type unavailableTimeCreateManyArgs = {
    /**
     * The data used to create many unavailableTimes.
     * 
    **/
    data: Enumerable<unavailableTimeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * unavailableTime update
   */
  export type unavailableTimeUpdateArgs = {
    /**
     * Select specific fields to fetch from the unavailableTime
     * 
    **/
    select?: unavailableTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unavailableTimeInclude | null
    /**
     * The data needed to update a unavailableTime.
     * 
    **/
    data: XOR<unavailableTimeUpdateInput, unavailableTimeUncheckedUpdateInput>
    /**
     * Choose, which unavailableTime to update.
     * 
    **/
    where: unavailableTimeWhereUniqueInput
  }


  /**
   * unavailableTime updateMany
   */
  export type unavailableTimeUpdateManyArgs = {
    /**
     * The data used to update unavailableTimes.
     * 
    **/
    data: XOR<unavailableTimeUpdateManyMutationInput, unavailableTimeUncheckedUpdateManyInput>
    /**
     * Filter which unavailableTimes to update
     * 
    **/
    where?: unavailableTimeWhereInput
  }


  /**
   * unavailableTime upsert
   */
  export type unavailableTimeUpsertArgs = {
    /**
     * Select specific fields to fetch from the unavailableTime
     * 
    **/
    select?: unavailableTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unavailableTimeInclude | null
    /**
     * The filter to search for the unavailableTime to update in case it exists.
     * 
    **/
    where: unavailableTimeWhereUniqueInput
    /**
     * In case the unavailableTime found by the `where` argument doesn't exist, create a new unavailableTime with this data.
     * 
    **/
    create: XOR<unavailableTimeCreateInput, unavailableTimeUncheckedCreateInput>
    /**
     * In case the unavailableTime was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<unavailableTimeUpdateInput, unavailableTimeUncheckedUpdateInput>
  }


  /**
   * unavailableTime delete
   */
  export type unavailableTimeDeleteArgs = {
    /**
     * Select specific fields to fetch from the unavailableTime
     * 
    **/
    select?: unavailableTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unavailableTimeInclude | null
    /**
     * Filter which unavailableTime to delete.
     * 
    **/
    where: unavailableTimeWhereUniqueInput
  }


  /**
   * unavailableTime deleteMany
   */
  export type unavailableTimeDeleteManyArgs = {
    /**
     * Filter which unavailableTimes to delete
     * 
    **/
    where?: unavailableTimeWhereInput
  }


  /**
   * unavailableTime: findUniqueOrThrow
   */
  export type unavailableTimeFindUniqueOrThrowArgs = unavailableTimeFindUniqueArgsBase
      

  /**
   * unavailableTime: findFirstOrThrow
   */
  export type unavailableTimeFindFirstOrThrowArgs = unavailableTimeFindFirstArgsBase
      

  /**
   * unavailableTime without action
   */
  export type unavailableTimeArgs = {
    /**
     * Select specific fields to fetch from the unavailableTime
     * 
    **/
    select?: unavailableTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unavailableTimeInclude | null
  }



  /**
   * Model UnavailableTimeHasDayOfTheWeek
   */


  export type AggregateUnavailableTimeHasDayOfTheWeek = {
    _count: UnavailableTimeHasDayOfTheWeekCountAggregateOutputType | null
    _min: UnavailableTimeHasDayOfTheWeekMinAggregateOutputType | null
    _max: UnavailableTimeHasDayOfTheWeekMaxAggregateOutputType | null
  }

  export type UnavailableTimeHasDayOfTheWeekMinAggregateOutputType = {
    unavailableTimeId: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    dayOfTheWeekId: string | null
  }

  export type UnavailableTimeHasDayOfTheWeekMaxAggregateOutputType = {
    unavailableTimeId: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    dayOfTheWeekId: string | null
  }

  export type UnavailableTimeHasDayOfTheWeekCountAggregateOutputType = {
    unavailableTimeId: number
    active: number
    created_at: number
    updated_at: number
    dayOfTheWeekId: number
    _all: number
  }


  export type UnavailableTimeHasDayOfTheWeekMinAggregateInputType = {
    unavailableTimeId?: true
    active?: true
    created_at?: true
    updated_at?: true
    dayOfTheWeekId?: true
  }

  export type UnavailableTimeHasDayOfTheWeekMaxAggregateInputType = {
    unavailableTimeId?: true
    active?: true
    created_at?: true
    updated_at?: true
    dayOfTheWeekId?: true
  }

  export type UnavailableTimeHasDayOfTheWeekCountAggregateInputType = {
    unavailableTimeId?: true
    active?: true
    created_at?: true
    updated_at?: true
    dayOfTheWeekId?: true
    _all?: true
  }

  export type UnavailableTimeHasDayOfTheWeekAggregateArgs = {
    /**
     * Filter which UnavailableTimeHasDayOfTheWeek to aggregate.
     * 
    **/
    where?: UnavailableTimeHasDayOfTheWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnavailableTimeHasDayOfTheWeeks to fetch.
     * 
    **/
    orderBy?: Enumerable<UnavailableTimeHasDayOfTheWeekOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnavailableTimeHasDayOfTheWeeks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnavailableTimeHasDayOfTheWeeks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnavailableTimeHasDayOfTheWeeks
    **/
    _count?: true | UnavailableTimeHasDayOfTheWeekCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnavailableTimeHasDayOfTheWeekMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnavailableTimeHasDayOfTheWeekMaxAggregateInputType
  }

  export type GetUnavailableTimeHasDayOfTheWeekAggregateType<T extends UnavailableTimeHasDayOfTheWeekAggregateArgs> = {
        [P in keyof T & keyof AggregateUnavailableTimeHasDayOfTheWeek]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnavailableTimeHasDayOfTheWeek[P]>
      : GetScalarType<T[P], AggregateUnavailableTimeHasDayOfTheWeek[P]>
  }




  export type UnavailableTimeHasDayOfTheWeekGroupByArgs = {
    where?: UnavailableTimeHasDayOfTheWeekWhereInput
    orderBy?: Enumerable<UnavailableTimeHasDayOfTheWeekOrderByWithAggregationInput>
    by: Array<UnavailableTimeHasDayOfTheWeekScalarFieldEnum>
    having?: UnavailableTimeHasDayOfTheWeekScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnavailableTimeHasDayOfTheWeekCountAggregateInputType | true
    _min?: UnavailableTimeHasDayOfTheWeekMinAggregateInputType
    _max?: UnavailableTimeHasDayOfTheWeekMaxAggregateInputType
  }


  export type UnavailableTimeHasDayOfTheWeekGroupByOutputType = {
    unavailableTimeId: string
    active: boolean
    created_at: Date
    updated_at: Date | null
    dayOfTheWeekId: string
    _count: UnavailableTimeHasDayOfTheWeekCountAggregateOutputType | null
    _min: UnavailableTimeHasDayOfTheWeekMinAggregateOutputType | null
    _max: UnavailableTimeHasDayOfTheWeekMaxAggregateOutputType | null
  }

  type GetUnavailableTimeHasDayOfTheWeekGroupByPayload<T extends UnavailableTimeHasDayOfTheWeekGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UnavailableTimeHasDayOfTheWeekGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnavailableTimeHasDayOfTheWeekGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnavailableTimeHasDayOfTheWeekGroupByOutputType[P]>
            : GetScalarType<T[P], UnavailableTimeHasDayOfTheWeekGroupByOutputType[P]>
        }
      >
    >


  export type UnavailableTimeHasDayOfTheWeekSelect = {
    unavailableTime?: boolean | unavailableTimeArgs
    unavailableTimeId?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    dayOfTheWeek?: boolean | dayOfTheWeekArgs
    dayOfTheWeekId?: boolean
  }

  export type UnavailableTimeHasDayOfTheWeekInclude = {
    unavailableTime?: boolean | unavailableTimeArgs
    dayOfTheWeek?: boolean | dayOfTheWeekArgs
  }

  export type UnavailableTimeHasDayOfTheWeekGetPayload<
    S extends boolean | null | undefined | UnavailableTimeHasDayOfTheWeekArgs,
    U = keyof S
      > = S extends true
        ? UnavailableTimeHasDayOfTheWeek
    : S extends undefined
    ? never
    : S extends UnavailableTimeHasDayOfTheWeekArgs | UnavailableTimeHasDayOfTheWeekFindManyArgs
    ?'include' extends U
    ? UnavailableTimeHasDayOfTheWeek  & {
    [P in TrueKeys<S['include']>]:
        P extends 'unavailableTime' ? unavailableTimeGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'dayOfTheWeek' ? dayOfTheWeekGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'unavailableTime' ? unavailableTimeGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'dayOfTheWeek' ? dayOfTheWeekGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof UnavailableTimeHasDayOfTheWeek ? UnavailableTimeHasDayOfTheWeek[P] : never
  } 
    : UnavailableTimeHasDayOfTheWeek
  : UnavailableTimeHasDayOfTheWeek


  type UnavailableTimeHasDayOfTheWeekCountArgs = Merge<
    Omit<UnavailableTimeHasDayOfTheWeekFindManyArgs, 'select' | 'include'> & {
      select?: UnavailableTimeHasDayOfTheWeekCountAggregateInputType | true
    }
  >

  export interface UnavailableTimeHasDayOfTheWeekDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one UnavailableTimeHasDayOfTheWeek that matches the filter.
     * @param {UnavailableTimeHasDayOfTheWeekFindUniqueArgs} args - Arguments to find a UnavailableTimeHasDayOfTheWeek
     * @example
     * // Get one UnavailableTimeHasDayOfTheWeek
     * const unavailableTimeHasDayOfTheWeek = await prisma.unavailableTimeHasDayOfTheWeek.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UnavailableTimeHasDayOfTheWeekFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UnavailableTimeHasDayOfTheWeekFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UnavailableTimeHasDayOfTheWeek'> extends True ? CheckSelect<T, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeek>, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeekGetPayload<T>>> : CheckSelect<T, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeek | null >, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeekGetPayload<T> | null >>

    /**
     * Find the first UnavailableTimeHasDayOfTheWeek that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableTimeHasDayOfTheWeekFindFirstArgs} args - Arguments to find a UnavailableTimeHasDayOfTheWeek
     * @example
     * // Get one UnavailableTimeHasDayOfTheWeek
     * const unavailableTimeHasDayOfTheWeek = await prisma.unavailableTimeHasDayOfTheWeek.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UnavailableTimeHasDayOfTheWeekFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UnavailableTimeHasDayOfTheWeekFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UnavailableTimeHasDayOfTheWeek'> extends True ? CheckSelect<T, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeek>, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeekGetPayload<T>>> : CheckSelect<T, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeek | null >, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeekGetPayload<T> | null >>

    /**
     * Find zero or more UnavailableTimeHasDayOfTheWeeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableTimeHasDayOfTheWeekFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnavailableTimeHasDayOfTheWeeks
     * const unavailableTimeHasDayOfTheWeeks = await prisma.unavailableTimeHasDayOfTheWeek.findMany()
     * 
     * // Get first 10 UnavailableTimeHasDayOfTheWeeks
     * const unavailableTimeHasDayOfTheWeeks = await prisma.unavailableTimeHasDayOfTheWeek.findMany({ take: 10 })
     * 
     * // Only select the `unavailableTimeId`
     * const unavailableTimeHasDayOfTheWeekWithUnavailableTimeIdOnly = await prisma.unavailableTimeHasDayOfTheWeek.findMany({ select: { unavailableTimeId: true } })
     * 
    **/
    findMany<T extends UnavailableTimeHasDayOfTheWeekFindManyArgs>(
      args?: SelectSubset<T, UnavailableTimeHasDayOfTheWeekFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UnavailableTimeHasDayOfTheWeek>>, PrismaPromise<Array<UnavailableTimeHasDayOfTheWeekGetPayload<T>>>>

    /**
     * Create a UnavailableTimeHasDayOfTheWeek.
     * @param {UnavailableTimeHasDayOfTheWeekCreateArgs} args - Arguments to create a UnavailableTimeHasDayOfTheWeek.
     * @example
     * // Create one UnavailableTimeHasDayOfTheWeek
     * const UnavailableTimeHasDayOfTheWeek = await prisma.unavailableTimeHasDayOfTheWeek.create({
     *   data: {
     *     // ... data to create a UnavailableTimeHasDayOfTheWeek
     *   }
     * })
     * 
    **/
    create<T extends UnavailableTimeHasDayOfTheWeekCreateArgs>(
      args: SelectSubset<T, UnavailableTimeHasDayOfTheWeekCreateArgs>
    ): CheckSelect<T, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeek>, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeekGetPayload<T>>>

    /**
     * Create many UnavailableTimeHasDayOfTheWeeks.
     *     @param {UnavailableTimeHasDayOfTheWeekCreateManyArgs} args - Arguments to create many UnavailableTimeHasDayOfTheWeeks.
     *     @example
     *     // Create many UnavailableTimeHasDayOfTheWeeks
     *     const unavailableTimeHasDayOfTheWeek = await prisma.unavailableTimeHasDayOfTheWeek.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UnavailableTimeHasDayOfTheWeekCreateManyArgs>(
      args?: SelectSubset<T, UnavailableTimeHasDayOfTheWeekCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UnavailableTimeHasDayOfTheWeek.
     * @param {UnavailableTimeHasDayOfTheWeekDeleteArgs} args - Arguments to delete one UnavailableTimeHasDayOfTheWeek.
     * @example
     * // Delete one UnavailableTimeHasDayOfTheWeek
     * const UnavailableTimeHasDayOfTheWeek = await prisma.unavailableTimeHasDayOfTheWeek.delete({
     *   where: {
     *     // ... filter to delete one UnavailableTimeHasDayOfTheWeek
     *   }
     * })
     * 
    **/
    delete<T extends UnavailableTimeHasDayOfTheWeekDeleteArgs>(
      args: SelectSubset<T, UnavailableTimeHasDayOfTheWeekDeleteArgs>
    ): CheckSelect<T, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeek>, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeekGetPayload<T>>>

    /**
     * Update one UnavailableTimeHasDayOfTheWeek.
     * @param {UnavailableTimeHasDayOfTheWeekUpdateArgs} args - Arguments to update one UnavailableTimeHasDayOfTheWeek.
     * @example
     * // Update one UnavailableTimeHasDayOfTheWeek
     * const unavailableTimeHasDayOfTheWeek = await prisma.unavailableTimeHasDayOfTheWeek.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UnavailableTimeHasDayOfTheWeekUpdateArgs>(
      args: SelectSubset<T, UnavailableTimeHasDayOfTheWeekUpdateArgs>
    ): CheckSelect<T, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeek>, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeekGetPayload<T>>>

    /**
     * Delete zero or more UnavailableTimeHasDayOfTheWeeks.
     * @param {UnavailableTimeHasDayOfTheWeekDeleteManyArgs} args - Arguments to filter UnavailableTimeHasDayOfTheWeeks to delete.
     * @example
     * // Delete a few UnavailableTimeHasDayOfTheWeeks
     * const { count } = await prisma.unavailableTimeHasDayOfTheWeek.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UnavailableTimeHasDayOfTheWeekDeleteManyArgs>(
      args?: SelectSubset<T, UnavailableTimeHasDayOfTheWeekDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnavailableTimeHasDayOfTheWeeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableTimeHasDayOfTheWeekUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnavailableTimeHasDayOfTheWeeks
     * const unavailableTimeHasDayOfTheWeek = await prisma.unavailableTimeHasDayOfTheWeek.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UnavailableTimeHasDayOfTheWeekUpdateManyArgs>(
      args: SelectSubset<T, UnavailableTimeHasDayOfTheWeekUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UnavailableTimeHasDayOfTheWeek.
     * @param {UnavailableTimeHasDayOfTheWeekUpsertArgs} args - Arguments to update or create a UnavailableTimeHasDayOfTheWeek.
     * @example
     * // Update or create a UnavailableTimeHasDayOfTheWeek
     * const unavailableTimeHasDayOfTheWeek = await prisma.unavailableTimeHasDayOfTheWeek.upsert({
     *   create: {
     *     // ... data to create a UnavailableTimeHasDayOfTheWeek
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnavailableTimeHasDayOfTheWeek we want to update
     *   }
     * })
    **/
    upsert<T extends UnavailableTimeHasDayOfTheWeekUpsertArgs>(
      args: SelectSubset<T, UnavailableTimeHasDayOfTheWeekUpsertArgs>
    ): CheckSelect<T, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeek>, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeekGetPayload<T>>>

    /**
     * Find one UnavailableTimeHasDayOfTheWeek that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UnavailableTimeHasDayOfTheWeekFindUniqueOrThrowArgs} args - Arguments to find a UnavailableTimeHasDayOfTheWeek
     * @example
     * // Get one UnavailableTimeHasDayOfTheWeek
     * const unavailableTimeHasDayOfTheWeek = await prisma.unavailableTimeHasDayOfTheWeek.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UnavailableTimeHasDayOfTheWeekFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UnavailableTimeHasDayOfTheWeekFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeek>, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeekGetPayload<T>>>

    /**
     * Find the first UnavailableTimeHasDayOfTheWeek that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableTimeHasDayOfTheWeekFindFirstOrThrowArgs} args - Arguments to find a UnavailableTimeHasDayOfTheWeek
     * @example
     * // Get one UnavailableTimeHasDayOfTheWeek
     * const unavailableTimeHasDayOfTheWeek = await prisma.unavailableTimeHasDayOfTheWeek.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UnavailableTimeHasDayOfTheWeekFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UnavailableTimeHasDayOfTheWeekFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeek>, Prisma__UnavailableTimeHasDayOfTheWeekClient<UnavailableTimeHasDayOfTheWeekGetPayload<T>>>

    /**
     * Count the number of UnavailableTimeHasDayOfTheWeeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableTimeHasDayOfTheWeekCountArgs} args - Arguments to filter UnavailableTimeHasDayOfTheWeeks to count.
     * @example
     * // Count the number of UnavailableTimeHasDayOfTheWeeks
     * const count = await prisma.unavailableTimeHasDayOfTheWeek.count({
     *   where: {
     *     // ... the filter for the UnavailableTimeHasDayOfTheWeeks we want to count
     *   }
     * })
    **/
    count<T extends UnavailableTimeHasDayOfTheWeekCountArgs>(
      args?: Subset<T, UnavailableTimeHasDayOfTheWeekCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnavailableTimeHasDayOfTheWeekCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnavailableTimeHasDayOfTheWeek.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableTimeHasDayOfTheWeekAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnavailableTimeHasDayOfTheWeekAggregateArgs>(args: Subset<T, UnavailableTimeHasDayOfTheWeekAggregateArgs>): PrismaPromise<GetUnavailableTimeHasDayOfTheWeekAggregateType<T>>

    /**
     * Group by UnavailableTimeHasDayOfTheWeek.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableTimeHasDayOfTheWeekGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnavailableTimeHasDayOfTheWeekGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnavailableTimeHasDayOfTheWeekGroupByArgs['orderBy'] }
        : { orderBy?: UnavailableTimeHasDayOfTheWeekGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnavailableTimeHasDayOfTheWeekGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnavailableTimeHasDayOfTheWeekGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UnavailableTimeHasDayOfTheWeek.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UnavailableTimeHasDayOfTheWeekClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    unavailableTime<T extends unavailableTimeArgs = {}>(args?: Subset<T, unavailableTimeArgs>): CheckSelect<T, Prisma__unavailableTimeClient<unavailableTime | null >, Prisma__unavailableTimeClient<unavailableTimeGetPayload<T> | null >>;

    dayOfTheWeek<T extends dayOfTheWeekArgs = {}>(args?: Subset<T, dayOfTheWeekArgs>): CheckSelect<T, Prisma__dayOfTheWeekClient<dayOfTheWeek | null >, Prisma__dayOfTheWeekClient<dayOfTheWeekGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UnavailableTimeHasDayOfTheWeek base type for findUnique actions
   */
  export type UnavailableTimeHasDayOfTheWeekFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UnavailableTimeHasDayOfTheWeek
     * 
    **/
    select?: UnavailableTimeHasDayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UnavailableTimeHasDayOfTheWeekInclude | null
    /**
     * Filter, which UnavailableTimeHasDayOfTheWeek to fetch.
     * 
    **/
    where: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
  }

  /**
   * UnavailableTimeHasDayOfTheWeek: findUnique
   */
  export interface UnavailableTimeHasDayOfTheWeekFindUniqueArgs extends UnavailableTimeHasDayOfTheWeekFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UnavailableTimeHasDayOfTheWeek base type for findFirst actions
   */
  export type UnavailableTimeHasDayOfTheWeekFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UnavailableTimeHasDayOfTheWeek
     * 
    **/
    select?: UnavailableTimeHasDayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UnavailableTimeHasDayOfTheWeekInclude | null
    /**
     * Filter, which UnavailableTimeHasDayOfTheWeek to fetch.
     * 
    **/
    where?: UnavailableTimeHasDayOfTheWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnavailableTimeHasDayOfTheWeeks to fetch.
     * 
    **/
    orderBy?: Enumerable<UnavailableTimeHasDayOfTheWeekOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnavailableTimeHasDayOfTheWeeks.
     * 
    **/
    cursor?: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnavailableTimeHasDayOfTheWeeks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnavailableTimeHasDayOfTheWeeks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnavailableTimeHasDayOfTheWeeks.
     * 
    **/
    distinct?: Enumerable<UnavailableTimeHasDayOfTheWeekScalarFieldEnum>
  }

  /**
   * UnavailableTimeHasDayOfTheWeek: findFirst
   */
  export interface UnavailableTimeHasDayOfTheWeekFindFirstArgs extends UnavailableTimeHasDayOfTheWeekFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UnavailableTimeHasDayOfTheWeek findMany
   */
  export type UnavailableTimeHasDayOfTheWeekFindManyArgs = {
    /**
     * Select specific fields to fetch from the UnavailableTimeHasDayOfTheWeek
     * 
    **/
    select?: UnavailableTimeHasDayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UnavailableTimeHasDayOfTheWeekInclude | null
    /**
     * Filter, which UnavailableTimeHasDayOfTheWeeks to fetch.
     * 
    **/
    where?: UnavailableTimeHasDayOfTheWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnavailableTimeHasDayOfTheWeeks to fetch.
     * 
    **/
    orderBy?: Enumerable<UnavailableTimeHasDayOfTheWeekOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnavailableTimeHasDayOfTheWeeks.
     * 
    **/
    cursor?: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnavailableTimeHasDayOfTheWeeks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnavailableTimeHasDayOfTheWeeks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UnavailableTimeHasDayOfTheWeekScalarFieldEnum>
  }


  /**
   * UnavailableTimeHasDayOfTheWeek create
   */
  export type UnavailableTimeHasDayOfTheWeekCreateArgs = {
    /**
     * Select specific fields to fetch from the UnavailableTimeHasDayOfTheWeek
     * 
    **/
    select?: UnavailableTimeHasDayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UnavailableTimeHasDayOfTheWeekInclude | null
    /**
     * The data needed to create a UnavailableTimeHasDayOfTheWeek.
     * 
    **/
    data: XOR<UnavailableTimeHasDayOfTheWeekCreateInput, UnavailableTimeHasDayOfTheWeekUncheckedCreateInput>
  }


  /**
   * UnavailableTimeHasDayOfTheWeek createMany
   */
  export type UnavailableTimeHasDayOfTheWeekCreateManyArgs = {
    /**
     * The data used to create many UnavailableTimeHasDayOfTheWeeks.
     * 
    **/
    data: Enumerable<UnavailableTimeHasDayOfTheWeekCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UnavailableTimeHasDayOfTheWeek update
   */
  export type UnavailableTimeHasDayOfTheWeekUpdateArgs = {
    /**
     * Select specific fields to fetch from the UnavailableTimeHasDayOfTheWeek
     * 
    **/
    select?: UnavailableTimeHasDayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UnavailableTimeHasDayOfTheWeekInclude | null
    /**
     * The data needed to update a UnavailableTimeHasDayOfTheWeek.
     * 
    **/
    data: XOR<UnavailableTimeHasDayOfTheWeekUpdateInput, UnavailableTimeHasDayOfTheWeekUncheckedUpdateInput>
    /**
     * Choose, which UnavailableTimeHasDayOfTheWeek to update.
     * 
    **/
    where: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
  }


  /**
   * UnavailableTimeHasDayOfTheWeek updateMany
   */
  export type UnavailableTimeHasDayOfTheWeekUpdateManyArgs = {
    /**
     * The data used to update UnavailableTimeHasDayOfTheWeeks.
     * 
    **/
    data: XOR<UnavailableTimeHasDayOfTheWeekUpdateManyMutationInput, UnavailableTimeHasDayOfTheWeekUncheckedUpdateManyInput>
    /**
     * Filter which UnavailableTimeHasDayOfTheWeeks to update
     * 
    **/
    where?: UnavailableTimeHasDayOfTheWeekWhereInput
  }


  /**
   * UnavailableTimeHasDayOfTheWeek upsert
   */
  export type UnavailableTimeHasDayOfTheWeekUpsertArgs = {
    /**
     * Select specific fields to fetch from the UnavailableTimeHasDayOfTheWeek
     * 
    **/
    select?: UnavailableTimeHasDayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UnavailableTimeHasDayOfTheWeekInclude | null
    /**
     * The filter to search for the UnavailableTimeHasDayOfTheWeek to update in case it exists.
     * 
    **/
    where: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
    /**
     * In case the UnavailableTimeHasDayOfTheWeek found by the `where` argument doesn't exist, create a new UnavailableTimeHasDayOfTheWeek with this data.
     * 
    **/
    create: XOR<UnavailableTimeHasDayOfTheWeekCreateInput, UnavailableTimeHasDayOfTheWeekUncheckedCreateInput>
    /**
     * In case the UnavailableTimeHasDayOfTheWeek was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UnavailableTimeHasDayOfTheWeekUpdateInput, UnavailableTimeHasDayOfTheWeekUncheckedUpdateInput>
  }


  /**
   * UnavailableTimeHasDayOfTheWeek delete
   */
  export type UnavailableTimeHasDayOfTheWeekDeleteArgs = {
    /**
     * Select specific fields to fetch from the UnavailableTimeHasDayOfTheWeek
     * 
    **/
    select?: UnavailableTimeHasDayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UnavailableTimeHasDayOfTheWeekInclude | null
    /**
     * Filter which UnavailableTimeHasDayOfTheWeek to delete.
     * 
    **/
    where: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
  }


  /**
   * UnavailableTimeHasDayOfTheWeek deleteMany
   */
  export type UnavailableTimeHasDayOfTheWeekDeleteManyArgs = {
    /**
     * Filter which UnavailableTimeHasDayOfTheWeeks to delete
     * 
    **/
    where?: UnavailableTimeHasDayOfTheWeekWhereInput
  }


  /**
   * UnavailableTimeHasDayOfTheWeek: findUniqueOrThrow
   */
  export type UnavailableTimeHasDayOfTheWeekFindUniqueOrThrowArgs = UnavailableTimeHasDayOfTheWeekFindUniqueArgsBase
      

  /**
   * UnavailableTimeHasDayOfTheWeek: findFirstOrThrow
   */
  export type UnavailableTimeHasDayOfTheWeekFindFirstOrThrowArgs = UnavailableTimeHasDayOfTheWeekFindFirstArgsBase
      

  /**
   * UnavailableTimeHasDayOfTheWeek without action
   */
  export type UnavailableTimeHasDayOfTheWeekArgs = {
    /**
     * Select specific fields to fetch from the UnavailableTimeHasDayOfTheWeek
     * 
    **/
    select?: UnavailableTimeHasDayOfTheWeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UnavailableTimeHasDayOfTheWeekInclude | null
  }



  /**
   * Model CourtHasSports
   */


  export type AggregateCourtHasSports = {
    _count: CourtHasSportsCountAggregateOutputType | null
    _min: CourtHasSportsMinAggregateOutputType | null
    _max: CourtHasSportsMaxAggregateOutputType | null
  }

  export type CourtHasSportsMinAggregateOutputType = {
    court_id: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    sportsId: string | null
  }

  export type CourtHasSportsMaxAggregateOutputType = {
    court_id: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    sportsId: string | null
  }

  export type CourtHasSportsCountAggregateOutputType = {
    court_id: number
    active: number
    created_at: number
    updated_at: number
    sportsId: number
    _all: number
  }


  export type CourtHasSportsMinAggregateInputType = {
    court_id?: true
    active?: true
    created_at?: true
    updated_at?: true
    sportsId?: true
  }

  export type CourtHasSportsMaxAggregateInputType = {
    court_id?: true
    active?: true
    created_at?: true
    updated_at?: true
    sportsId?: true
  }

  export type CourtHasSportsCountAggregateInputType = {
    court_id?: true
    active?: true
    created_at?: true
    updated_at?: true
    sportsId?: true
    _all?: true
  }

  export type CourtHasSportsAggregateArgs = {
    /**
     * Filter which CourtHasSports to aggregate.
     * 
    **/
    where?: CourtHasSportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourtHasSports to fetch.
     * 
    **/
    orderBy?: Enumerable<CourtHasSportsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CourtHasSportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourtHasSports from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourtHasSports.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourtHasSports
    **/
    _count?: true | CourtHasSportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourtHasSportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourtHasSportsMaxAggregateInputType
  }

  export type GetCourtHasSportsAggregateType<T extends CourtHasSportsAggregateArgs> = {
        [P in keyof T & keyof AggregateCourtHasSports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourtHasSports[P]>
      : GetScalarType<T[P], AggregateCourtHasSports[P]>
  }




  export type CourtHasSportsGroupByArgs = {
    where?: CourtHasSportsWhereInput
    orderBy?: Enumerable<CourtHasSportsOrderByWithAggregationInput>
    by: Array<CourtHasSportsScalarFieldEnum>
    having?: CourtHasSportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourtHasSportsCountAggregateInputType | true
    _min?: CourtHasSportsMinAggregateInputType
    _max?: CourtHasSportsMaxAggregateInputType
  }


  export type CourtHasSportsGroupByOutputType = {
    court_id: string
    active: boolean
    created_at: Date
    updated_at: Date | null
    sportsId: string | null
    _count: CourtHasSportsCountAggregateOutputType | null
    _min: CourtHasSportsMinAggregateOutputType | null
    _max: CourtHasSportsMaxAggregateOutputType | null
  }

  type GetCourtHasSportsGroupByPayload<T extends CourtHasSportsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CourtHasSportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourtHasSportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourtHasSportsGroupByOutputType[P]>
            : GetScalarType<T[P], CourtHasSportsGroupByOutputType[P]>
        }
      >
    >


  export type CourtHasSportsSelect = {
    court?: boolean | CourtArgs
    court_id?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    sport?: boolean | SportArgs
    sportsId?: boolean
  }

  export type CourtHasSportsInclude = {
    court?: boolean | CourtArgs
    sport?: boolean | SportArgs
  }

  export type CourtHasSportsGetPayload<
    S extends boolean | null | undefined | CourtHasSportsArgs,
    U = keyof S
      > = S extends true
        ? CourtHasSports
    : S extends undefined
    ? never
    : S extends CourtHasSportsArgs | CourtHasSportsFindManyArgs
    ?'include' extends U
    ? CourtHasSports  & {
    [P in TrueKeys<S['include']>]:
        P extends 'court' ? CourtGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'sport' ? SportGetPayload<Exclude<S['include'], undefined | null>[P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'court' ? CourtGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'sport' ? SportGetPayload<Exclude<S['select'], undefined | null>[P]> | null :  P extends keyof CourtHasSports ? CourtHasSports[P] : never
  } 
    : CourtHasSports
  : CourtHasSports


  type CourtHasSportsCountArgs = Merge<
    Omit<CourtHasSportsFindManyArgs, 'select' | 'include'> & {
      select?: CourtHasSportsCountAggregateInputType | true
    }
  >

  export interface CourtHasSportsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CourtHasSports that matches the filter.
     * @param {CourtHasSportsFindUniqueArgs} args - Arguments to find a CourtHasSports
     * @example
     * // Get one CourtHasSports
     * const courtHasSports = await prisma.courtHasSports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourtHasSportsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CourtHasSportsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CourtHasSports'> extends True ? CheckSelect<T, Prisma__CourtHasSportsClient<CourtHasSports>, Prisma__CourtHasSportsClient<CourtHasSportsGetPayload<T>>> : CheckSelect<T, Prisma__CourtHasSportsClient<CourtHasSports | null >, Prisma__CourtHasSportsClient<CourtHasSportsGetPayload<T> | null >>

    /**
     * Find the first CourtHasSports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtHasSportsFindFirstArgs} args - Arguments to find a CourtHasSports
     * @example
     * // Get one CourtHasSports
     * const courtHasSports = await prisma.courtHasSports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourtHasSportsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CourtHasSportsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CourtHasSports'> extends True ? CheckSelect<T, Prisma__CourtHasSportsClient<CourtHasSports>, Prisma__CourtHasSportsClient<CourtHasSportsGetPayload<T>>> : CheckSelect<T, Prisma__CourtHasSportsClient<CourtHasSports | null >, Prisma__CourtHasSportsClient<CourtHasSportsGetPayload<T> | null >>

    /**
     * Find zero or more CourtHasSports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtHasSportsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourtHasSports
     * const courtHasSports = await prisma.courtHasSports.findMany()
     * 
     * // Get first 10 CourtHasSports
     * const courtHasSports = await prisma.courtHasSports.findMany({ take: 10 })
     * 
     * // Only select the `court_id`
     * const courtHasSportsWithCourt_idOnly = await prisma.courtHasSports.findMany({ select: { court_id: true } })
     * 
    **/
    findMany<T extends CourtHasSportsFindManyArgs>(
      args?: SelectSubset<T, CourtHasSportsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<CourtHasSports>>, PrismaPromise<Array<CourtHasSportsGetPayload<T>>>>

    /**
     * Create a CourtHasSports.
     * @param {CourtHasSportsCreateArgs} args - Arguments to create a CourtHasSports.
     * @example
     * // Create one CourtHasSports
     * const CourtHasSports = await prisma.courtHasSports.create({
     *   data: {
     *     // ... data to create a CourtHasSports
     *   }
     * })
     * 
    **/
    create<T extends CourtHasSportsCreateArgs>(
      args: SelectSubset<T, CourtHasSportsCreateArgs>
    ): CheckSelect<T, Prisma__CourtHasSportsClient<CourtHasSports>, Prisma__CourtHasSportsClient<CourtHasSportsGetPayload<T>>>

    /**
     * Create many CourtHasSports.
     *     @param {CourtHasSportsCreateManyArgs} args - Arguments to create many CourtHasSports.
     *     @example
     *     // Create many CourtHasSports
     *     const courtHasSports = await prisma.courtHasSports.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourtHasSportsCreateManyArgs>(
      args?: SelectSubset<T, CourtHasSportsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CourtHasSports.
     * @param {CourtHasSportsDeleteArgs} args - Arguments to delete one CourtHasSports.
     * @example
     * // Delete one CourtHasSports
     * const CourtHasSports = await prisma.courtHasSports.delete({
     *   where: {
     *     // ... filter to delete one CourtHasSports
     *   }
     * })
     * 
    **/
    delete<T extends CourtHasSportsDeleteArgs>(
      args: SelectSubset<T, CourtHasSportsDeleteArgs>
    ): CheckSelect<T, Prisma__CourtHasSportsClient<CourtHasSports>, Prisma__CourtHasSportsClient<CourtHasSportsGetPayload<T>>>

    /**
     * Update one CourtHasSports.
     * @param {CourtHasSportsUpdateArgs} args - Arguments to update one CourtHasSports.
     * @example
     * // Update one CourtHasSports
     * const courtHasSports = await prisma.courtHasSports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourtHasSportsUpdateArgs>(
      args: SelectSubset<T, CourtHasSportsUpdateArgs>
    ): CheckSelect<T, Prisma__CourtHasSportsClient<CourtHasSports>, Prisma__CourtHasSportsClient<CourtHasSportsGetPayload<T>>>

    /**
     * Delete zero or more CourtHasSports.
     * @param {CourtHasSportsDeleteManyArgs} args - Arguments to filter CourtHasSports to delete.
     * @example
     * // Delete a few CourtHasSports
     * const { count } = await prisma.courtHasSports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourtHasSportsDeleteManyArgs>(
      args?: SelectSubset<T, CourtHasSportsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourtHasSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtHasSportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourtHasSports
     * const courtHasSports = await prisma.courtHasSports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourtHasSportsUpdateManyArgs>(
      args: SelectSubset<T, CourtHasSportsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CourtHasSports.
     * @param {CourtHasSportsUpsertArgs} args - Arguments to update or create a CourtHasSports.
     * @example
     * // Update or create a CourtHasSports
     * const courtHasSports = await prisma.courtHasSports.upsert({
     *   create: {
     *     // ... data to create a CourtHasSports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourtHasSports we want to update
     *   }
     * })
    **/
    upsert<T extends CourtHasSportsUpsertArgs>(
      args: SelectSubset<T, CourtHasSportsUpsertArgs>
    ): CheckSelect<T, Prisma__CourtHasSportsClient<CourtHasSports>, Prisma__CourtHasSportsClient<CourtHasSportsGetPayload<T>>>

    /**
     * Find one CourtHasSports that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CourtHasSportsFindUniqueOrThrowArgs} args - Arguments to find a CourtHasSports
     * @example
     * // Get one CourtHasSports
     * const courtHasSports = await prisma.courtHasSports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourtHasSportsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CourtHasSportsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CourtHasSportsClient<CourtHasSports>, Prisma__CourtHasSportsClient<CourtHasSportsGetPayload<T>>>

    /**
     * Find the first CourtHasSports that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtHasSportsFindFirstOrThrowArgs} args - Arguments to find a CourtHasSports
     * @example
     * // Get one CourtHasSports
     * const courtHasSports = await prisma.courtHasSports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourtHasSportsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CourtHasSportsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CourtHasSportsClient<CourtHasSports>, Prisma__CourtHasSportsClient<CourtHasSportsGetPayload<T>>>

    /**
     * Count the number of CourtHasSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtHasSportsCountArgs} args - Arguments to filter CourtHasSports to count.
     * @example
     * // Count the number of CourtHasSports
     * const count = await prisma.courtHasSports.count({
     *   where: {
     *     // ... the filter for the CourtHasSports we want to count
     *   }
     * })
    **/
    count<T extends CourtHasSportsCountArgs>(
      args?: Subset<T, CourtHasSportsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourtHasSportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourtHasSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtHasSportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourtHasSportsAggregateArgs>(args: Subset<T, CourtHasSportsAggregateArgs>): PrismaPromise<GetCourtHasSportsAggregateType<T>>

    /**
     * Group by CourtHasSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtHasSportsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourtHasSportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourtHasSportsGroupByArgs['orderBy'] }
        : { orderBy?: CourtHasSportsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourtHasSportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourtHasSportsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CourtHasSports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CourtHasSportsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    court<T extends CourtArgs = {}>(args?: Subset<T, CourtArgs>): CheckSelect<T, Prisma__CourtClient<Court | null >, Prisma__CourtClient<CourtGetPayload<T> | null >>;

    sport<T extends SportArgs = {}>(args?: Subset<T, SportArgs>): CheckSelect<T, Prisma__SportClient<Sport | null >, Prisma__SportClient<SportGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CourtHasSports base type for findUnique actions
   */
  export type CourtHasSportsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CourtHasSports
     * 
    **/
    select?: CourtHasSportsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtHasSportsInclude | null
    /**
     * Filter, which CourtHasSports to fetch.
     * 
    **/
    where: CourtHasSportsWhereUniqueInput
  }

  /**
   * CourtHasSports: findUnique
   */
  export interface CourtHasSportsFindUniqueArgs extends CourtHasSportsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CourtHasSports base type for findFirst actions
   */
  export type CourtHasSportsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CourtHasSports
     * 
    **/
    select?: CourtHasSportsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtHasSportsInclude | null
    /**
     * Filter, which CourtHasSports to fetch.
     * 
    **/
    where?: CourtHasSportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourtHasSports to fetch.
     * 
    **/
    orderBy?: Enumerable<CourtHasSportsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourtHasSports.
     * 
    **/
    cursor?: CourtHasSportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourtHasSports from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourtHasSports.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourtHasSports.
     * 
    **/
    distinct?: Enumerable<CourtHasSportsScalarFieldEnum>
  }

  /**
   * CourtHasSports: findFirst
   */
  export interface CourtHasSportsFindFirstArgs extends CourtHasSportsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CourtHasSports findMany
   */
  export type CourtHasSportsFindManyArgs = {
    /**
     * Select specific fields to fetch from the CourtHasSports
     * 
    **/
    select?: CourtHasSportsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtHasSportsInclude | null
    /**
     * Filter, which CourtHasSports to fetch.
     * 
    **/
    where?: CourtHasSportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourtHasSports to fetch.
     * 
    **/
    orderBy?: Enumerable<CourtHasSportsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourtHasSports.
     * 
    **/
    cursor?: CourtHasSportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourtHasSports from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourtHasSports.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CourtHasSportsScalarFieldEnum>
  }


  /**
   * CourtHasSports create
   */
  export type CourtHasSportsCreateArgs = {
    /**
     * Select specific fields to fetch from the CourtHasSports
     * 
    **/
    select?: CourtHasSportsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtHasSportsInclude | null
    /**
     * The data needed to create a CourtHasSports.
     * 
    **/
    data: XOR<CourtHasSportsCreateInput, CourtHasSportsUncheckedCreateInput>
  }


  /**
   * CourtHasSports createMany
   */
  export type CourtHasSportsCreateManyArgs = {
    /**
     * The data used to create many CourtHasSports.
     * 
    **/
    data: Enumerable<CourtHasSportsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CourtHasSports update
   */
  export type CourtHasSportsUpdateArgs = {
    /**
     * Select specific fields to fetch from the CourtHasSports
     * 
    **/
    select?: CourtHasSportsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtHasSportsInclude | null
    /**
     * The data needed to update a CourtHasSports.
     * 
    **/
    data: XOR<CourtHasSportsUpdateInput, CourtHasSportsUncheckedUpdateInput>
    /**
     * Choose, which CourtHasSports to update.
     * 
    **/
    where: CourtHasSportsWhereUniqueInput
  }


  /**
   * CourtHasSports updateMany
   */
  export type CourtHasSportsUpdateManyArgs = {
    /**
     * The data used to update CourtHasSports.
     * 
    **/
    data: XOR<CourtHasSportsUpdateManyMutationInput, CourtHasSportsUncheckedUpdateManyInput>
    /**
     * Filter which CourtHasSports to update
     * 
    **/
    where?: CourtHasSportsWhereInput
  }


  /**
   * CourtHasSports upsert
   */
  export type CourtHasSportsUpsertArgs = {
    /**
     * Select specific fields to fetch from the CourtHasSports
     * 
    **/
    select?: CourtHasSportsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtHasSportsInclude | null
    /**
     * The filter to search for the CourtHasSports to update in case it exists.
     * 
    **/
    where: CourtHasSportsWhereUniqueInput
    /**
     * In case the CourtHasSports found by the `where` argument doesn't exist, create a new CourtHasSports with this data.
     * 
    **/
    create: XOR<CourtHasSportsCreateInput, CourtHasSportsUncheckedCreateInput>
    /**
     * In case the CourtHasSports was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CourtHasSportsUpdateInput, CourtHasSportsUncheckedUpdateInput>
  }


  /**
   * CourtHasSports delete
   */
  export type CourtHasSportsDeleteArgs = {
    /**
     * Select specific fields to fetch from the CourtHasSports
     * 
    **/
    select?: CourtHasSportsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtHasSportsInclude | null
    /**
     * Filter which CourtHasSports to delete.
     * 
    **/
    where: CourtHasSportsWhereUniqueInput
  }


  /**
   * CourtHasSports deleteMany
   */
  export type CourtHasSportsDeleteManyArgs = {
    /**
     * Filter which CourtHasSports to delete
     * 
    **/
    where?: CourtHasSportsWhereInput
  }


  /**
   * CourtHasSports: findUniqueOrThrow
   */
  export type CourtHasSportsFindUniqueOrThrowArgs = CourtHasSportsFindUniqueArgsBase
      

  /**
   * CourtHasSports: findFirstOrThrow
   */
  export type CourtHasSportsFindFirstOrThrowArgs = CourtHasSportsFindFirstArgsBase
      

  /**
   * CourtHasSports without action
   */
  export type CourtHasSportsArgs = {
    /**
     * Select specific fields to fetch from the CourtHasSports
     * 
    **/
    select?: CourtHasSportsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourtHasSportsInclude | null
  }



  /**
   * Model ReservationHasUsers
   */


  export type AggregateReservationHasUsers = {
    _count: ReservationHasUsersCountAggregateOutputType | null
    _min: ReservationHasUsersMinAggregateOutputType | null
    _max: ReservationHasUsersMaxAggregateOutputType | null
  }

  export type ReservationHasUsersMinAggregateOutputType = {
    reservation_id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type ReservationHasUsersMaxAggregateOutputType = {
    reservation_id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type ReservationHasUsersCountAggregateOutputType = {
    reservation_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type ReservationHasUsersMinAggregateInputType = {
    reservation_id?: true
    user_id?: true
    created_at?: true
  }

  export type ReservationHasUsersMaxAggregateInputType = {
    reservation_id?: true
    user_id?: true
    created_at?: true
  }

  export type ReservationHasUsersCountAggregateInputType = {
    reservation_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type ReservationHasUsersAggregateArgs = {
    /**
     * Filter which ReservationHasUsers to aggregate.
     * 
    **/
    where?: ReservationHasUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationHasUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ReservationHasUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ReservationHasUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationHasUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationHasUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservationHasUsers
    **/
    _count?: true | ReservationHasUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationHasUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationHasUsersMaxAggregateInputType
  }

  export type GetReservationHasUsersAggregateType<T extends ReservationHasUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateReservationHasUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservationHasUsers[P]>
      : GetScalarType<T[P], AggregateReservationHasUsers[P]>
  }




  export type ReservationHasUsersGroupByArgs = {
    where?: ReservationHasUsersWhereInput
    orderBy?: Enumerable<ReservationHasUsersOrderByWithAggregationInput>
    by: Array<ReservationHasUsersScalarFieldEnum>
    having?: ReservationHasUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationHasUsersCountAggregateInputType | true
    _min?: ReservationHasUsersMinAggregateInputType
    _max?: ReservationHasUsersMaxAggregateInputType
  }


  export type ReservationHasUsersGroupByOutputType = {
    reservation_id: string
    user_id: string
    created_at: Date
    _count: ReservationHasUsersCountAggregateOutputType | null
    _min: ReservationHasUsersMinAggregateOutputType | null
    _max: ReservationHasUsersMaxAggregateOutputType | null
  }

  type GetReservationHasUsersGroupByPayload<T extends ReservationHasUsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ReservationHasUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationHasUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationHasUsersGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationHasUsersGroupByOutputType[P]>
        }
      >
    >


  export type ReservationHasUsersSelect = {
    reservation?: boolean | ReservationArgs
    reservation_id?: boolean
    user?: boolean | UserArgs
    user_id?: boolean
    created_at?: boolean
  }

  export type ReservationHasUsersInclude = {
    reservation?: boolean | ReservationArgs
    user?: boolean | UserArgs
  }

  export type ReservationHasUsersGetPayload<
    S extends boolean | null | undefined | ReservationHasUsersArgs,
    U = keyof S
      > = S extends true
        ? ReservationHasUsers
    : S extends undefined
    ? never
    : S extends ReservationHasUsersArgs | ReservationHasUsersFindManyArgs
    ?'include' extends U
    ? ReservationHasUsers  & {
    [P in TrueKeys<S['include']>]:
        P extends 'reservation' ? ReservationGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'user' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'reservation' ? ReservationGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'user' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof ReservationHasUsers ? ReservationHasUsers[P] : never
  } 
    : ReservationHasUsers
  : ReservationHasUsers


  type ReservationHasUsersCountArgs = Merge<
    Omit<ReservationHasUsersFindManyArgs, 'select' | 'include'> & {
      select?: ReservationHasUsersCountAggregateInputType | true
    }
  >

  export interface ReservationHasUsersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ReservationHasUsers that matches the filter.
     * @param {ReservationHasUsersFindUniqueArgs} args - Arguments to find a ReservationHasUsers
     * @example
     * // Get one ReservationHasUsers
     * const reservationHasUsers = await prisma.reservationHasUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReservationHasUsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReservationHasUsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ReservationHasUsers'> extends True ? CheckSelect<T, Prisma__ReservationHasUsersClient<ReservationHasUsers>, Prisma__ReservationHasUsersClient<ReservationHasUsersGetPayload<T>>> : CheckSelect<T, Prisma__ReservationHasUsersClient<ReservationHasUsers | null >, Prisma__ReservationHasUsersClient<ReservationHasUsersGetPayload<T> | null >>

    /**
     * Find the first ReservationHasUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasUsersFindFirstArgs} args - Arguments to find a ReservationHasUsers
     * @example
     * // Get one ReservationHasUsers
     * const reservationHasUsers = await prisma.reservationHasUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReservationHasUsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReservationHasUsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ReservationHasUsers'> extends True ? CheckSelect<T, Prisma__ReservationHasUsersClient<ReservationHasUsers>, Prisma__ReservationHasUsersClient<ReservationHasUsersGetPayload<T>>> : CheckSelect<T, Prisma__ReservationHasUsersClient<ReservationHasUsers | null >, Prisma__ReservationHasUsersClient<ReservationHasUsersGetPayload<T> | null >>

    /**
     * Find zero or more ReservationHasUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasUsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservationHasUsers
     * const reservationHasUsers = await prisma.reservationHasUsers.findMany()
     * 
     * // Get first 10 ReservationHasUsers
     * const reservationHasUsers = await prisma.reservationHasUsers.findMany({ take: 10 })
     * 
     * // Only select the `reservation_id`
     * const reservationHasUsersWithReservation_idOnly = await prisma.reservationHasUsers.findMany({ select: { reservation_id: true } })
     * 
    **/
    findMany<T extends ReservationHasUsersFindManyArgs>(
      args?: SelectSubset<T, ReservationHasUsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ReservationHasUsers>>, PrismaPromise<Array<ReservationHasUsersGetPayload<T>>>>

    /**
     * Create a ReservationHasUsers.
     * @param {ReservationHasUsersCreateArgs} args - Arguments to create a ReservationHasUsers.
     * @example
     * // Create one ReservationHasUsers
     * const ReservationHasUsers = await prisma.reservationHasUsers.create({
     *   data: {
     *     // ... data to create a ReservationHasUsers
     *   }
     * })
     * 
    **/
    create<T extends ReservationHasUsersCreateArgs>(
      args: SelectSubset<T, ReservationHasUsersCreateArgs>
    ): CheckSelect<T, Prisma__ReservationHasUsersClient<ReservationHasUsers>, Prisma__ReservationHasUsersClient<ReservationHasUsersGetPayload<T>>>

    /**
     * Create many ReservationHasUsers.
     *     @param {ReservationHasUsersCreateManyArgs} args - Arguments to create many ReservationHasUsers.
     *     @example
     *     // Create many ReservationHasUsers
     *     const reservationHasUsers = await prisma.reservationHasUsers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReservationHasUsersCreateManyArgs>(
      args?: SelectSubset<T, ReservationHasUsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ReservationHasUsers.
     * @param {ReservationHasUsersDeleteArgs} args - Arguments to delete one ReservationHasUsers.
     * @example
     * // Delete one ReservationHasUsers
     * const ReservationHasUsers = await prisma.reservationHasUsers.delete({
     *   where: {
     *     // ... filter to delete one ReservationHasUsers
     *   }
     * })
     * 
    **/
    delete<T extends ReservationHasUsersDeleteArgs>(
      args: SelectSubset<T, ReservationHasUsersDeleteArgs>
    ): CheckSelect<T, Prisma__ReservationHasUsersClient<ReservationHasUsers>, Prisma__ReservationHasUsersClient<ReservationHasUsersGetPayload<T>>>

    /**
     * Update one ReservationHasUsers.
     * @param {ReservationHasUsersUpdateArgs} args - Arguments to update one ReservationHasUsers.
     * @example
     * // Update one ReservationHasUsers
     * const reservationHasUsers = await prisma.reservationHasUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReservationHasUsersUpdateArgs>(
      args: SelectSubset<T, ReservationHasUsersUpdateArgs>
    ): CheckSelect<T, Prisma__ReservationHasUsersClient<ReservationHasUsers>, Prisma__ReservationHasUsersClient<ReservationHasUsersGetPayload<T>>>

    /**
     * Delete zero or more ReservationHasUsers.
     * @param {ReservationHasUsersDeleteManyArgs} args - Arguments to filter ReservationHasUsers to delete.
     * @example
     * // Delete a few ReservationHasUsers
     * const { count } = await prisma.reservationHasUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReservationHasUsersDeleteManyArgs>(
      args?: SelectSubset<T, ReservationHasUsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationHasUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservationHasUsers
     * const reservationHasUsers = await prisma.reservationHasUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReservationHasUsersUpdateManyArgs>(
      args: SelectSubset<T, ReservationHasUsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ReservationHasUsers.
     * @param {ReservationHasUsersUpsertArgs} args - Arguments to update or create a ReservationHasUsers.
     * @example
     * // Update or create a ReservationHasUsers
     * const reservationHasUsers = await prisma.reservationHasUsers.upsert({
     *   create: {
     *     // ... data to create a ReservationHasUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservationHasUsers we want to update
     *   }
     * })
    **/
    upsert<T extends ReservationHasUsersUpsertArgs>(
      args: SelectSubset<T, ReservationHasUsersUpsertArgs>
    ): CheckSelect<T, Prisma__ReservationHasUsersClient<ReservationHasUsers>, Prisma__ReservationHasUsersClient<ReservationHasUsersGetPayload<T>>>

    /**
     * Find one ReservationHasUsers that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ReservationHasUsersFindUniqueOrThrowArgs} args - Arguments to find a ReservationHasUsers
     * @example
     * // Get one ReservationHasUsers
     * const reservationHasUsers = await prisma.reservationHasUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReservationHasUsersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ReservationHasUsersFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ReservationHasUsersClient<ReservationHasUsers>, Prisma__ReservationHasUsersClient<ReservationHasUsersGetPayload<T>>>

    /**
     * Find the first ReservationHasUsers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasUsersFindFirstOrThrowArgs} args - Arguments to find a ReservationHasUsers
     * @example
     * // Get one ReservationHasUsers
     * const reservationHasUsers = await prisma.reservationHasUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReservationHasUsersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReservationHasUsersFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ReservationHasUsersClient<ReservationHasUsers>, Prisma__ReservationHasUsersClient<ReservationHasUsersGetPayload<T>>>

    /**
     * Count the number of ReservationHasUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasUsersCountArgs} args - Arguments to filter ReservationHasUsers to count.
     * @example
     * // Count the number of ReservationHasUsers
     * const count = await prisma.reservationHasUsers.count({
     *   where: {
     *     // ... the filter for the ReservationHasUsers we want to count
     *   }
     * })
    **/
    count<T extends ReservationHasUsersCountArgs>(
      args?: Subset<T, ReservationHasUsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationHasUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservationHasUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationHasUsersAggregateArgs>(args: Subset<T, ReservationHasUsersAggregateArgs>): PrismaPromise<GetReservationHasUsersAggregateType<T>>

    /**
     * Group by ReservationHasUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationHasUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationHasUsersGroupByArgs['orderBy'] }
        : { orderBy?: ReservationHasUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationHasUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationHasUsersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservationHasUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReservationHasUsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    reservation<T extends ReservationArgs = {}>(args?: Subset<T, ReservationArgs>): CheckSelect<T, Prisma__ReservationClient<Reservation | null >, Prisma__ReservationClient<ReservationGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ReservationHasUsers base type for findUnique actions
   */
  export type ReservationHasUsersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ReservationHasUsers
     * 
    **/
    select?: ReservationHasUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasUsersInclude | null
    /**
     * Filter, which ReservationHasUsers to fetch.
     * 
    **/
    where: ReservationHasUsersWhereUniqueInput
  }

  /**
   * ReservationHasUsers: findUnique
   */
  export interface ReservationHasUsersFindUniqueArgs extends ReservationHasUsersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ReservationHasUsers base type for findFirst actions
   */
  export type ReservationHasUsersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ReservationHasUsers
     * 
    **/
    select?: ReservationHasUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasUsersInclude | null
    /**
     * Filter, which ReservationHasUsers to fetch.
     * 
    **/
    where?: ReservationHasUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationHasUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ReservationHasUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationHasUsers.
     * 
    **/
    cursor?: ReservationHasUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationHasUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationHasUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationHasUsers.
     * 
    **/
    distinct?: Enumerable<ReservationHasUsersScalarFieldEnum>
  }

  /**
   * ReservationHasUsers: findFirst
   */
  export interface ReservationHasUsersFindFirstArgs extends ReservationHasUsersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ReservationHasUsers findMany
   */
  export type ReservationHasUsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the ReservationHasUsers
     * 
    **/
    select?: ReservationHasUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasUsersInclude | null
    /**
     * Filter, which ReservationHasUsers to fetch.
     * 
    **/
    where?: ReservationHasUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationHasUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ReservationHasUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservationHasUsers.
     * 
    **/
    cursor?: ReservationHasUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationHasUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationHasUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ReservationHasUsersScalarFieldEnum>
  }


  /**
   * ReservationHasUsers create
   */
  export type ReservationHasUsersCreateArgs = {
    /**
     * Select specific fields to fetch from the ReservationHasUsers
     * 
    **/
    select?: ReservationHasUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasUsersInclude | null
    /**
     * The data needed to create a ReservationHasUsers.
     * 
    **/
    data: XOR<ReservationHasUsersCreateInput, ReservationHasUsersUncheckedCreateInput>
  }


  /**
   * ReservationHasUsers createMany
   */
  export type ReservationHasUsersCreateManyArgs = {
    /**
     * The data used to create many ReservationHasUsers.
     * 
    **/
    data: Enumerable<ReservationHasUsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ReservationHasUsers update
   */
  export type ReservationHasUsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the ReservationHasUsers
     * 
    **/
    select?: ReservationHasUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasUsersInclude | null
    /**
     * The data needed to update a ReservationHasUsers.
     * 
    **/
    data: XOR<ReservationHasUsersUpdateInput, ReservationHasUsersUncheckedUpdateInput>
    /**
     * Choose, which ReservationHasUsers to update.
     * 
    **/
    where: ReservationHasUsersWhereUniqueInput
  }


  /**
   * ReservationHasUsers updateMany
   */
  export type ReservationHasUsersUpdateManyArgs = {
    /**
     * The data used to update ReservationHasUsers.
     * 
    **/
    data: XOR<ReservationHasUsersUpdateManyMutationInput, ReservationHasUsersUncheckedUpdateManyInput>
    /**
     * Filter which ReservationHasUsers to update
     * 
    **/
    where?: ReservationHasUsersWhereInput
  }


  /**
   * ReservationHasUsers upsert
   */
  export type ReservationHasUsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the ReservationHasUsers
     * 
    **/
    select?: ReservationHasUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasUsersInclude | null
    /**
     * The filter to search for the ReservationHasUsers to update in case it exists.
     * 
    **/
    where: ReservationHasUsersWhereUniqueInput
    /**
     * In case the ReservationHasUsers found by the `where` argument doesn't exist, create a new ReservationHasUsers with this data.
     * 
    **/
    create: XOR<ReservationHasUsersCreateInput, ReservationHasUsersUncheckedCreateInput>
    /**
     * In case the ReservationHasUsers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ReservationHasUsersUpdateInput, ReservationHasUsersUncheckedUpdateInput>
  }


  /**
   * ReservationHasUsers delete
   */
  export type ReservationHasUsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the ReservationHasUsers
     * 
    **/
    select?: ReservationHasUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasUsersInclude | null
    /**
     * Filter which ReservationHasUsers to delete.
     * 
    **/
    where: ReservationHasUsersWhereUniqueInput
  }


  /**
   * ReservationHasUsers deleteMany
   */
  export type ReservationHasUsersDeleteManyArgs = {
    /**
     * Filter which ReservationHasUsers to delete
     * 
    **/
    where?: ReservationHasUsersWhereInput
  }


  /**
   * ReservationHasUsers: findUniqueOrThrow
   */
  export type ReservationHasUsersFindUniqueOrThrowArgs = ReservationHasUsersFindUniqueArgsBase
      

  /**
   * ReservationHasUsers: findFirstOrThrow
   */
  export type ReservationHasUsersFindFirstOrThrowArgs = ReservationHasUsersFindFirstArgsBase
      

  /**
   * ReservationHasUsers without action
   */
  export type ReservationHasUsersArgs = {
    /**
     * Select specific fields to fetch from the ReservationHasUsers
     * 
    **/
    select?: ReservationHasUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasUsersInclude | null
  }



  /**
   * Model ReservationHasRequestedUsers
   */


  export type AggregateReservationHasRequestedUsers = {
    _count: ReservationHasRequestedUsersCountAggregateOutputType | null
    _min: ReservationHasRequestedUsersMinAggregateOutputType | null
    _max: ReservationHasRequestedUsersMaxAggregateOutputType | null
  }

  export type ReservationHasRequestedUsersMinAggregateOutputType = {
    reservation_id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type ReservationHasRequestedUsersMaxAggregateOutputType = {
    reservation_id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type ReservationHasRequestedUsersCountAggregateOutputType = {
    reservation_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type ReservationHasRequestedUsersMinAggregateInputType = {
    reservation_id?: true
    user_id?: true
    created_at?: true
  }

  export type ReservationHasRequestedUsersMaxAggregateInputType = {
    reservation_id?: true
    user_id?: true
    created_at?: true
  }

  export type ReservationHasRequestedUsersCountAggregateInputType = {
    reservation_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type ReservationHasRequestedUsersAggregateArgs = {
    /**
     * Filter which ReservationHasRequestedUsers to aggregate.
     * 
    **/
    where?: ReservationHasRequestedUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationHasRequestedUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ReservationHasRequestedUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ReservationHasRequestedUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationHasRequestedUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationHasRequestedUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservationHasRequestedUsers
    **/
    _count?: true | ReservationHasRequestedUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationHasRequestedUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationHasRequestedUsersMaxAggregateInputType
  }

  export type GetReservationHasRequestedUsersAggregateType<T extends ReservationHasRequestedUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateReservationHasRequestedUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservationHasRequestedUsers[P]>
      : GetScalarType<T[P], AggregateReservationHasRequestedUsers[P]>
  }




  export type ReservationHasRequestedUsersGroupByArgs = {
    where?: ReservationHasRequestedUsersWhereInput
    orderBy?: Enumerable<ReservationHasRequestedUsersOrderByWithAggregationInput>
    by: Array<ReservationHasRequestedUsersScalarFieldEnum>
    having?: ReservationHasRequestedUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationHasRequestedUsersCountAggregateInputType | true
    _min?: ReservationHasRequestedUsersMinAggregateInputType
    _max?: ReservationHasRequestedUsersMaxAggregateInputType
  }


  export type ReservationHasRequestedUsersGroupByOutputType = {
    reservation_id: string
    user_id: string
    created_at: Date
    _count: ReservationHasRequestedUsersCountAggregateOutputType | null
    _min: ReservationHasRequestedUsersMinAggregateOutputType | null
    _max: ReservationHasRequestedUsersMaxAggregateOutputType | null
  }

  type GetReservationHasRequestedUsersGroupByPayload<T extends ReservationHasRequestedUsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ReservationHasRequestedUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationHasRequestedUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationHasRequestedUsersGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationHasRequestedUsersGroupByOutputType[P]>
        }
      >
    >


  export type ReservationHasRequestedUsersSelect = {
    reservation?: boolean | ReservationArgs
    reservation_id?: boolean
    user?: boolean | UserArgs
    user_id?: boolean
    created_at?: boolean
  }

  export type ReservationHasRequestedUsersInclude = {
    reservation?: boolean | ReservationArgs
    user?: boolean | UserArgs
  }

  export type ReservationHasRequestedUsersGetPayload<
    S extends boolean | null | undefined | ReservationHasRequestedUsersArgs,
    U = keyof S
      > = S extends true
        ? ReservationHasRequestedUsers
    : S extends undefined
    ? never
    : S extends ReservationHasRequestedUsersArgs | ReservationHasRequestedUsersFindManyArgs
    ?'include' extends U
    ? ReservationHasRequestedUsers  & {
    [P in TrueKeys<S['include']>]:
        P extends 'reservation' ? ReservationGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'user' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'reservation' ? ReservationGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'user' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof ReservationHasRequestedUsers ? ReservationHasRequestedUsers[P] : never
  } 
    : ReservationHasRequestedUsers
  : ReservationHasRequestedUsers


  type ReservationHasRequestedUsersCountArgs = Merge<
    Omit<ReservationHasRequestedUsersFindManyArgs, 'select' | 'include'> & {
      select?: ReservationHasRequestedUsersCountAggregateInputType | true
    }
  >

  export interface ReservationHasRequestedUsersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ReservationHasRequestedUsers that matches the filter.
     * @param {ReservationHasRequestedUsersFindUniqueArgs} args - Arguments to find a ReservationHasRequestedUsers
     * @example
     * // Get one ReservationHasRequestedUsers
     * const reservationHasRequestedUsers = await prisma.reservationHasRequestedUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReservationHasRequestedUsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReservationHasRequestedUsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ReservationHasRequestedUsers'> extends True ? CheckSelect<T, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsers>, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsersGetPayload<T>>> : CheckSelect<T, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsers | null >, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsersGetPayload<T> | null >>

    /**
     * Find the first ReservationHasRequestedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasRequestedUsersFindFirstArgs} args - Arguments to find a ReservationHasRequestedUsers
     * @example
     * // Get one ReservationHasRequestedUsers
     * const reservationHasRequestedUsers = await prisma.reservationHasRequestedUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReservationHasRequestedUsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReservationHasRequestedUsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ReservationHasRequestedUsers'> extends True ? CheckSelect<T, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsers>, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsersGetPayload<T>>> : CheckSelect<T, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsers | null >, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsersGetPayload<T> | null >>

    /**
     * Find zero or more ReservationHasRequestedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasRequestedUsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservationHasRequestedUsers
     * const reservationHasRequestedUsers = await prisma.reservationHasRequestedUsers.findMany()
     * 
     * // Get first 10 ReservationHasRequestedUsers
     * const reservationHasRequestedUsers = await prisma.reservationHasRequestedUsers.findMany({ take: 10 })
     * 
     * // Only select the `reservation_id`
     * const reservationHasRequestedUsersWithReservation_idOnly = await prisma.reservationHasRequestedUsers.findMany({ select: { reservation_id: true } })
     * 
    **/
    findMany<T extends ReservationHasRequestedUsersFindManyArgs>(
      args?: SelectSubset<T, ReservationHasRequestedUsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ReservationHasRequestedUsers>>, PrismaPromise<Array<ReservationHasRequestedUsersGetPayload<T>>>>

    /**
     * Create a ReservationHasRequestedUsers.
     * @param {ReservationHasRequestedUsersCreateArgs} args - Arguments to create a ReservationHasRequestedUsers.
     * @example
     * // Create one ReservationHasRequestedUsers
     * const ReservationHasRequestedUsers = await prisma.reservationHasRequestedUsers.create({
     *   data: {
     *     // ... data to create a ReservationHasRequestedUsers
     *   }
     * })
     * 
    **/
    create<T extends ReservationHasRequestedUsersCreateArgs>(
      args: SelectSubset<T, ReservationHasRequestedUsersCreateArgs>
    ): CheckSelect<T, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsers>, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsersGetPayload<T>>>

    /**
     * Create many ReservationHasRequestedUsers.
     *     @param {ReservationHasRequestedUsersCreateManyArgs} args - Arguments to create many ReservationHasRequestedUsers.
     *     @example
     *     // Create many ReservationHasRequestedUsers
     *     const reservationHasRequestedUsers = await prisma.reservationHasRequestedUsers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReservationHasRequestedUsersCreateManyArgs>(
      args?: SelectSubset<T, ReservationHasRequestedUsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ReservationHasRequestedUsers.
     * @param {ReservationHasRequestedUsersDeleteArgs} args - Arguments to delete one ReservationHasRequestedUsers.
     * @example
     * // Delete one ReservationHasRequestedUsers
     * const ReservationHasRequestedUsers = await prisma.reservationHasRequestedUsers.delete({
     *   where: {
     *     // ... filter to delete one ReservationHasRequestedUsers
     *   }
     * })
     * 
    **/
    delete<T extends ReservationHasRequestedUsersDeleteArgs>(
      args: SelectSubset<T, ReservationHasRequestedUsersDeleteArgs>
    ): CheckSelect<T, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsers>, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsersGetPayload<T>>>

    /**
     * Update one ReservationHasRequestedUsers.
     * @param {ReservationHasRequestedUsersUpdateArgs} args - Arguments to update one ReservationHasRequestedUsers.
     * @example
     * // Update one ReservationHasRequestedUsers
     * const reservationHasRequestedUsers = await prisma.reservationHasRequestedUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReservationHasRequestedUsersUpdateArgs>(
      args: SelectSubset<T, ReservationHasRequestedUsersUpdateArgs>
    ): CheckSelect<T, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsers>, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsersGetPayload<T>>>

    /**
     * Delete zero or more ReservationHasRequestedUsers.
     * @param {ReservationHasRequestedUsersDeleteManyArgs} args - Arguments to filter ReservationHasRequestedUsers to delete.
     * @example
     * // Delete a few ReservationHasRequestedUsers
     * const { count } = await prisma.reservationHasRequestedUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReservationHasRequestedUsersDeleteManyArgs>(
      args?: SelectSubset<T, ReservationHasRequestedUsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationHasRequestedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasRequestedUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservationHasRequestedUsers
     * const reservationHasRequestedUsers = await prisma.reservationHasRequestedUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReservationHasRequestedUsersUpdateManyArgs>(
      args: SelectSubset<T, ReservationHasRequestedUsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ReservationHasRequestedUsers.
     * @param {ReservationHasRequestedUsersUpsertArgs} args - Arguments to update or create a ReservationHasRequestedUsers.
     * @example
     * // Update or create a ReservationHasRequestedUsers
     * const reservationHasRequestedUsers = await prisma.reservationHasRequestedUsers.upsert({
     *   create: {
     *     // ... data to create a ReservationHasRequestedUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservationHasRequestedUsers we want to update
     *   }
     * })
    **/
    upsert<T extends ReservationHasRequestedUsersUpsertArgs>(
      args: SelectSubset<T, ReservationHasRequestedUsersUpsertArgs>
    ): CheckSelect<T, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsers>, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsersGetPayload<T>>>

    /**
     * Find one ReservationHasRequestedUsers that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ReservationHasRequestedUsersFindUniqueOrThrowArgs} args - Arguments to find a ReservationHasRequestedUsers
     * @example
     * // Get one ReservationHasRequestedUsers
     * const reservationHasRequestedUsers = await prisma.reservationHasRequestedUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReservationHasRequestedUsersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ReservationHasRequestedUsersFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsers>, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsersGetPayload<T>>>

    /**
     * Find the first ReservationHasRequestedUsers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasRequestedUsersFindFirstOrThrowArgs} args - Arguments to find a ReservationHasRequestedUsers
     * @example
     * // Get one ReservationHasRequestedUsers
     * const reservationHasRequestedUsers = await prisma.reservationHasRequestedUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReservationHasRequestedUsersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReservationHasRequestedUsersFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsers>, Prisma__ReservationHasRequestedUsersClient<ReservationHasRequestedUsersGetPayload<T>>>

    /**
     * Count the number of ReservationHasRequestedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasRequestedUsersCountArgs} args - Arguments to filter ReservationHasRequestedUsers to count.
     * @example
     * // Count the number of ReservationHasRequestedUsers
     * const count = await prisma.reservationHasRequestedUsers.count({
     *   where: {
     *     // ... the filter for the ReservationHasRequestedUsers we want to count
     *   }
     * })
    **/
    count<T extends ReservationHasRequestedUsersCountArgs>(
      args?: Subset<T, ReservationHasRequestedUsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationHasRequestedUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservationHasRequestedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasRequestedUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationHasRequestedUsersAggregateArgs>(args: Subset<T, ReservationHasRequestedUsersAggregateArgs>): PrismaPromise<GetReservationHasRequestedUsersAggregateType<T>>

    /**
     * Group by ReservationHasRequestedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationHasRequestedUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationHasRequestedUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationHasRequestedUsersGroupByArgs['orderBy'] }
        : { orderBy?: ReservationHasRequestedUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationHasRequestedUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationHasRequestedUsersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservationHasRequestedUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReservationHasRequestedUsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    reservation<T extends ReservationArgs = {}>(args?: Subset<T, ReservationArgs>): CheckSelect<T, Prisma__ReservationClient<Reservation | null >, Prisma__ReservationClient<ReservationGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ReservationHasRequestedUsers base type for findUnique actions
   */
  export type ReservationHasRequestedUsersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ReservationHasRequestedUsers
     * 
    **/
    select?: ReservationHasRequestedUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasRequestedUsersInclude | null
    /**
     * Filter, which ReservationHasRequestedUsers to fetch.
     * 
    **/
    where: ReservationHasRequestedUsersWhereUniqueInput
  }

  /**
   * ReservationHasRequestedUsers: findUnique
   */
  export interface ReservationHasRequestedUsersFindUniqueArgs extends ReservationHasRequestedUsersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ReservationHasRequestedUsers base type for findFirst actions
   */
  export type ReservationHasRequestedUsersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ReservationHasRequestedUsers
     * 
    **/
    select?: ReservationHasRequestedUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasRequestedUsersInclude | null
    /**
     * Filter, which ReservationHasRequestedUsers to fetch.
     * 
    **/
    where?: ReservationHasRequestedUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationHasRequestedUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ReservationHasRequestedUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationHasRequestedUsers.
     * 
    **/
    cursor?: ReservationHasRequestedUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationHasRequestedUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationHasRequestedUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationHasRequestedUsers.
     * 
    **/
    distinct?: Enumerable<ReservationHasRequestedUsersScalarFieldEnum>
  }

  /**
   * ReservationHasRequestedUsers: findFirst
   */
  export interface ReservationHasRequestedUsersFindFirstArgs extends ReservationHasRequestedUsersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ReservationHasRequestedUsers findMany
   */
  export type ReservationHasRequestedUsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the ReservationHasRequestedUsers
     * 
    **/
    select?: ReservationHasRequestedUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasRequestedUsersInclude | null
    /**
     * Filter, which ReservationHasRequestedUsers to fetch.
     * 
    **/
    where?: ReservationHasRequestedUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationHasRequestedUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ReservationHasRequestedUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservationHasRequestedUsers.
     * 
    **/
    cursor?: ReservationHasRequestedUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationHasRequestedUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationHasRequestedUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ReservationHasRequestedUsersScalarFieldEnum>
  }


  /**
   * ReservationHasRequestedUsers create
   */
  export type ReservationHasRequestedUsersCreateArgs = {
    /**
     * Select specific fields to fetch from the ReservationHasRequestedUsers
     * 
    **/
    select?: ReservationHasRequestedUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasRequestedUsersInclude | null
    /**
     * The data needed to create a ReservationHasRequestedUsers.
     * 
    **/
    data: XOR<ReservationHasRequestedUsersCreateInput, ReservationHasRequestedUsersUncheckedCreateInput>
  }


  /**
   * ReservationHasRequestedUsers createMany
   */
  export type ReservationHasRequestedUsersCreateManyArgs = {
    /**
     * The data used to create many ReservationHasRequestedUsers.
     * 
    **/
    data: Enumerable<ReservationHasRequestedUsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ReservationHasRequestedUsers update
   */
  export type ReservationHasRequestedUsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the ReservationHasRequestedUsers
     * 
    **/
    select?: ReservationHasRequestedUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasRequestedUsersInclude | null
    /**
     * The data needed to update a ReservationHasRequestedUsers.
     * 
    **/
    data: XOR<ReservationHasRequestedUsersUpdateInput, ReservationHasRequestedUsersUncheckedUpdateInput>
    /**
     * Choose, which ReservationHasRequestedUsers to update.
     * 
    **/
    where: ReservationHasRequestedUsersWhereUniqueInput
  }


  /**
   * ReservationHasRequestedUsers updateMany
   */
  export type ReservationHasRequestedUsersUpdateManyArgs = {
    /**
     * The data used to update ReservationHasRequestedUsers.
     * 
    **/
    data: XOR<ReservationHasRequestedUsersUpdateManyMutationInput, ReservationHasRequestedUsersUncheckedUpdateManyInput>
    /**
     * Filter which ReservationHasRequestedUsers to update
     * 
    **/
    where?: ReservationHasRequestedUsersWhereInput
  }


  /**
   * ReservationHasRequestedUsers upsert
   */
  export type ReservationHasRequestedUsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the ReservationHasRequestedUsers
     * 
    **/
    select?: ReservationHasRequestedUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasRequestedUsersInclude | null
    /**
     * The filter to search for the ReservationHasRequestedUsers to update in case it exists.
     * 
    **/
    where: ReservationHasRequestedUsersWhereUniqueInput
    /**
     * In case the ReservationHasRequestedUsers found by the `where` argument doesn't exist, create a new ReservationHasRequestedUsers with this data.
     * 
    **/
    create: XOR<ReservationHasRequestedUsersCreateInput, ReservationHasRequestedUsersUncheckedCreateInput>
    /**
     * In case the ReservationHasRequestedUsers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ReservationHasRequestedUsersUpdateInput, ReservationHasRequestedUsersUncheckedUpdateInput>
  }


  /**
   * ReservationHasRequestedUsers delete
   */
  export type ReservationHasRequestedUsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the ReservationHasRequestedUsers
     * 
    **/
    select?: ReservationHasRequestedUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasRequestedUsersInclude | null
    /**
     * Filter which ReservationHasRequestedUsers to delete.
     * 
    **/
    where: ReservationHasRequestedUsersWhereUniqueInput
  }


  /**
   * ReservationHasRequestedUsers deleteMany
   */
  export type ReservationHasRequestedUsersDeleteManyArgs = {
    /**
     * Filter which ReservationHasRequestedUsers to delete
     * 
    **/
    where?: ReservationHasRequestedUsersWhereInput
  }


  /**
   * ReservationHasRequestedUsers: findUniqueOrThrow
   */
  export type ReservationHasRequestedUsersFindUniqueOrThrowArgs = ReservationHasRequestedUsersFindUniqueArgsBase
      

  /**
   * ReservationHasRequestedUsers: findFirstOrThrow
   */
  export type ReservationHasRequestedUsersFindFirstOrThrowArgs = ReservationHasRequestedUsersFindFirstArgsBase
      

  /**
   * ReservationHasRequestedUsers without action
   */
  export type ReservationHasRequestedUsersArgs = {
    /**
     * Select specific fields to fetch from the ReservationHasRequestedUsers
     * 
    **/
    select?: ReservationHasRequestedUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReservationHasRequestedUsersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CourtHasSportsScalarFieldEnum: {
    court_id: 'court_id',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    sportsId: 'sportsId'
  };

  export type CourtHasSportsScalarFieldEnum = (typeof CourtHasSportsScalarFieldEnum)[keyof typeof CourtHasSportsScalarFieldEnum]


  export const CourtScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CourtScalarFieldEnum = (typeof CourtScalarFieldEnum)[keyof typeof CourtScalarFieldEnum]


  export const DayOfTheWeekScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DayOfTheWeekScalarFieldEnum = (typeof DayOfTheWeekScalarFieldEnum)[keyof typeof DayOfTheWeekScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ReservationHasRequestedUsersScalarFieldEnum: {
    reservation_id: 'reservation_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type ReservationHasRequestedUsersScalarFieldEnum = (typeof ReservationHasRequestedUsersScalarFieldEnum)[keyof typeof ReservationHasRequestedUsersScalarFieldEnum]


  export const ReservationHasUsersScalarFieldEnum: {
    reservation_id: 'reservation_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type ReservationHasUsersScalarFieldEnum = (typeof ReservationHasUsersScalarFieldEnum)[keyof typeof ReservationHasUsersScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    startDateTime: 'startDateTime',
    endDateTime: 'endDateTime',
    created_at: 'created_at',
    manager_id: 'manager_id',
    max_participants: 'max_participants',
    sportId: 'sportId',
    courtId: 'courtId',
    description: 'description'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const SportScalarFieldEnum: {
    id: 'id',
    name: 'name',
    maxAmount: 'maxAmount'
  };

  export type SportScalarFieldEnum = (typeof SportScalarFieldEnum)[keyof typeof SportScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UnavailableTimeHasDayOfTheWeekScalarFieldEnum: {
    unavailableTimeId: 'unavailableTimeId',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    dayOfTheWeekId: 'dayOfTheWeekId'
  };

  export type UnavailableTimeHasDayOfTheWeekScalarFieldEnum = (typeof UnavailableTimeHasDayOfTheWeekScalarFieldEnum)[keyof typeof UnavailableTimeHasDayOfTheWeekScalarFieldEnum]


  export const UnavailableTimeScalarFieldEnum: {
    id: 'id',
    startDateTime: 'startDateTime',
    endDateTime: 'endDateTime',
    startTime: 'startTime',
    endTime: 'endTime',
    created_at: 'created_at',
    courtId: 'courtId'
  };

  export type UnavailableTimeScalarFieldEnum = (typeof UnavailableTimeScalarFieldEnum)[keyof typeof UnavailableTimeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ra: 'ra',
    password: 'password',
    email: 'email',
    campi: 'campi',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    ra?: IntFilter | number
    password?: StringFilter | string
    email?: StringFilter | string
    campi?: StringFilter | string
    role?: StringFilter | string
    reservations?: ReservationHasUsersListRelationFilter
    requestedReservations?: ReservationHasRequestedUsersListRelationFilter
    managerOfReservations?: ReservationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ra?: SortOrder
    password?: SortOrder
    email?: SortOrder
    campi?: SortOrder
    role?: SortOrder
    reservations?: ReservationHasUsersOrderByRelationAggregateInput
    requestedReservations?: ReservationHasRequestedUsersOrderByRelationAggregateInput
    managerOfReservations?: ReservationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ra?: SortOrder
    password?: SortOrder
    email?: SortOrder
    campi?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    ra?: IntWithAggregatesFilter | number
    password?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    campi?: StringWithAggregatesFilter | string
    role?: StringWithAggregatesFilter | string
  }

  export type SportWhereInput = {
    AND?: Enumerable<SportWhereInput>
    OR?: Enumerable<SportWhereInput>
    NOT?: Enumerable<SportWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    maxAmount?: StringNullableFilter | string | null
    courts?: CourtHasSportsListRelationFilter
    reservation?: ReservationListRelationFilter
  }

  export type SportOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    maxAmount?: SortOrder
    courts?: CourtHasSportsOrderByRelationAggregateInput
    reservation?: ReservationOrderByRelationAggregateInput
  }

  export type SportWhereUniqueInput = {
    id?: string
  }

  export type SportOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    maxAmount?: SortOrder
    _count?: SportCountOrderByAggregateInput
    _max?: SportMaxOrderByAggregateInput
    _min?: SportMinOrderByAggregateInput
  }

  export type SportScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SportScalarWhereWithAggregatesInput>
    OR?: Enumerable<SportScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SportScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    maxAmount?: StringNullableWithAggregatesFilter | string | null
  }

  export type CourtWhereInput = {
    AND?: Enumerable<CourtWhereInput>
    OR?: Enumerable<CourtWhereInput>
    NOT?: Enumerable<CourtWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    sports?: CourtHasSportsListRelationFilter
    reservation?: ReservationListRelationFilter
    unavailableTime?: UnavailableTimeListRelationFilter
  }

  export type CourtOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sports?: CourtHasSportsOrderByRelationAggregateInput
    reservation?: ReservationOrderByRelationAggregateInput
    unavailableTime?: unavailableTimeOrderByRelationAggregateInput
  }

  export type CourtWhereUniqueInput = {
    id?: string
  }

  export type CourtOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CourtCountOrderByAggregateInput
    _max?: CourtMaxOrderByAggregateInput
    _min?: CourtMinOrderByAggregateInput
  }

  export type CourtScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CourtScalarWhereWithAggregatesInput>
    OR?: Enumerable<CourtScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CourtScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type ReservationWhereInput = {
    AND?: Enumerable<ReservationWhereInput>
    OR?: Enumerable<ReservationWhereInput>
    NOT?: Enumerable<ReservationWhereInput>
    id?: StringFilter | string
    startDateTime?: DateTimeNullableFilter | Date | string | null
    endDateTime?: DateTimeNullableFilter | Date | string | null
    created_at?: DateTimeFilter | Date | string
    manager_id?: StringFilter | string
    manager?: XOR<UserRelationFilter, UserWhereInput>
    participants?: ReservationHasUsersListRelationFilter
    requested_participants?: ReservationHasRequestedUsersListRelationFilter
    max_participants?: IntFilter | number
    sport?: XOR<SportRelationFilter, SportWhereInput>
    sportId?: StringFilter | string
    court?: XOR<CourtRelationFilter, CourtWhereInput>
    courtId?: StringFilter | string
    description?: StringFilter | string
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    created_at?: SortOrder
    manager_id?: SortOrder
    manager?: UserOrderByWithRelationInput
    participants?: ReservationHasUsersOrderByRelationAggregateInput
    requested_participants?: ReservationHasRequestedUsersOrderByRelationAggregateInput
    max_participants?: SortOrder
    sport?: SportOrderByWithRelationInput
    sportId?: SortOrder
    court?: CourtOrderByWithRelationInput
    courtId?: SortOrder
    description?: SortOrder
  }

  export type ReservationWhereUniqueInput = {
    id?: string
  }

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    created_at?: SortOrder
    manager_id?: SortOrder
    max_participants?: SortOrder
    sportId?: SortOrder
    courtId?: SortOrder
    description?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReservationScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReservationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReservationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    startDateTime?: DateTimeNullableWithAggregatesFilter | Date | string | null
    endDateTime?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    manager_id?: StringWithAggregatesFilter | string
    max_participants?: IntWithAggregatesFilter | number
    sportId?: StringWithAggregatesFilter | string
    courtId?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
  }

  export type dayOfTheWeekWhereInput = {
    AND?: Enumerable<dayOfTheWeekWhereInput>
    OR?: Enumerable<dayOfTheWeekWhereInput>
    NOT?: Enumerable<dayOfTheWeekWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    UnavailableTimeHasDayOfTheWeek?: UnavailableTimeHasDayOfTheWeekListRelationFilter
  }

  export type dayOfTheWeekOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    UnavailableTimeHasDayOfTheWeek?: UnavailableTimeHasDayOfTheWeekOrderByRelationAggregateInput
  }

  export type dayOfTheWeekWhereUniqueInput = {
    id?: string
  }

  export type dayOfTheWeekOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: dayOfTheWeekCountOrderByAggregateInput
    _max?: dayOfTheWeekMaxOrderByAggregateInput
    _min?: dayOfTheWeekMinOrderByAggregateInput
  }

  export type dayOfTheWeekScalarWhereWithAggregatesInput = {
    AND?: Enumerable<dayOfTheWeekScalarWhereWithAggregatesInput>
    OR?: Enumerable<dayOfTheWeekScalarWhereWithAggregatesInput>
    NOT?: Enumerable<dayOfTheWeekScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type unavailableTimeWhereInput = {
    AND?: Enumerable<unavailableTimeWhereInput>
    OR?: Enumerable<unavailableTimeWhereInput>
    NOT?: Enumerable<unavailableTimeWhereInput>
    id?: StringFilter | string
    startDateTime?: DateTimeFilter | Date | string
    endDateTime?: DateTimeFilter | Date | string
    startTime?: DateTimeFilter | Date | string
    endTime?: DateTimeFilter | Date | string
    court?: XOR<CourtRelationFilter, CourtWhereInput>
    created_at?: DateTimeFilter | Date | string
    courtId?: StringFilter | string
    daysOfTheWeek?: XOR<UnavailableTimeHasDayOfTheWeekRelationFilter, UnavailableTimeHasDayOfTheWeekWhereInput> | null
  }

  export type unavailableTimeOrderByWithRelationInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    court?: CourtOrderByWithRelationInput
    created_at?: SortOrder
    courtId?: SortOrder
    daysOfTheWeek?: UnavailableTimeHasDayOfTheWeekOrderByWithRelationInput
  }

  export type unavailableTimeWhereUniqueInput = {
    id?: string
  }

  export type unavailableTimeOrderByWithAggregationInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    created_at?: SortOrder
    courtId?: SortOrder
    _count?: unavailableTimeCountOrderByAggregateInput
    _max?: unavailableTimeMaxOrderByAggregateInput
    _min?: unavailableTimeMinOrderByAggregateInput
  }

  export type unavailableTimeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<unavailableTimeScalarWhereWithAggregatesInput>
    OR?: Enumerable<unavailableTimeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<unavailableTimeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    startDateTime?: DateTimeWithAggregatesFilter | Date | string
    endDateTime?: DateTimeWithAggregatesFilter | Date | string
    startTime?: DateTimeWithAggregatesFilter | Date | string
    endTime?: DateTimeWithAggregatesFilter | Date | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    courtId?: StringWithAggregatesFilter | string
  }

  export type UnavailableTimeHasDayOfTheWeekWhereInput = {
    AND?: Enumerable<UnavailableTimeHasDayOfTheWeekWhereInput>
    OR?: Enumerable<UnavailableTimeHasDayOfTheWeekWhereInput>
    NOT?: Enumerable<UnavailableTimeHasDayOfTheWeekWhereInput>
    unavailableTime?: XOR<UnavailableTimeRelationFilter, unavailableTimeWhereInput>
    unavailableTimeId?: StringFilter | string
    active?: BoolFilter | boolean
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    dayOfTheWeek?: XOR<DayOfTheWeekRelationFilter, dayOfTheWeekWhereInput>
    dayOfTheWeekId?: StringFilter | string
  }

  export type UnavailableTimeHasDayOfTheWeekOrderByWithRelationInput = {
    unavailableTime?: unavailableTimeOrderByWithRelationInput
    unavailableTimeId?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    dayOfTheWeek?: dayOfTheWeekOrderByWithRelationInput
    dayOfTheWeekId?: SortOrder
  }

  export type UnavailableTimeHasDayOfTheWeekWhereUniqueInput = {
    unavailableTimeId?: string
    unavailableTimeId_dayOfTheWeekId?: UnavailableTimeHasDayOfTheWeekUnavailableTimeIdDayOfTheWeekIdCompoundUniqueInput
  }

  export type UnavailableTimeHasDayOfTheWeekOrderByWithAggregationInput = {
    unavailableTimeId?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    dayOfTheWeekId?: SortOrder
    _count?: UnavailableTimeHasDayOfTheWeekCountOrderByAggregateInput
    _max?: UnavailableTimeHasDayOfTheWeekMaxOrderByAggregateInput
    _min?: UnavailableTimeHasDayOfTheWeekMinOrderByAggregateInput
  }

  export type UnavailableTimeHasDayOfTheWeekScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UnavailableTimeHasDayOfTheWeekScalarWhereWithAggregatesInput>
    OR?: Enumerable<UnavailableTimeHasDayOfTheWeekScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UnavailableTimeHasDayOfTheWeekScalarWhereWithAggregatesInput>
    unavailableTimeId?: StringWithAggregatesFilter | string
    active?: BoolWithAggregatesFilter | boolean
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dayOfTheWeekId?: StringWithAggregatesFilter | string
  }

  export type CourtHasSportsWhereInput = {
    AND?: Enumerable<CourtHasSportsWhereInput>
    OR?: Enumerable<CourtHasSportsWhereInput>
    NOT?: Enumerable<CourtHasSportsWhereInput>
    court?: XOR<CourtRelationFilter, CourtWhereInput>
    court_id?: StringFilter | string
    active?: BoolFilter | boolean
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    sport?: XOR<SportRelationFilter, SportWhereInput> | null
    sportsId?: StringNullableFilter | string | null
  }

  export type CourtHasSportsOrderByWithRelationInput = {
    court?: CourtOrderByWithRelationInput
    court_id?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sport?: SportOrderByWithRelationInput
    sportsId?: SortOrder
  }

  export type CourtHasSportsWhereUniqueInput = {
    court_id?: string
  }

  export type CourtHasSportsOrderByWithAggregationInput = {
    court_id?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sportsId?: SortOrder
    _count?: CourtHasSportsCountOrderByAggregateInput
    _max?: CourtHasSportsMaxOrderByAggregateInput
    _min?: CourtHasSportsMinOrderByAggregateInput
  }

  export type CourtHasSportsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CourtHasSportsScalarWhereWithAggregatesInput>
    OR?: Enumerable<CourtHasSportsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CourtHasSportsScalarWhereWithAggregatesInput>
    court_id?: StringWithAggregatesFilter | string
    active?: BoolWithAggregatesFilter | boolean
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    sportsId?: StringNullableWithAggregatesFilter | string | null
  }

  export type ReservationHasUsersWhereInput = {
    AND?: Enumerable<ReservationHasUsersWhereInput>
    OR?: Enumerable<ReservationHasUsersWhereInput>
    NOT?: Enumerable<ReservationHasUsersWhereInput>
    reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
    reservation_id?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    user_id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
  }

  export type ReservationHasUsersOrderByWithRelationInput = {
    reservation?: ReservationOrderByWithRelationInput
    reservation_id?: SortOrder
    user?: UserOrderByWithRelationInput
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type ReservationHasUsersWhereUniqueInput = {
    reservation_id_user_id?: ReservationHasUsersReservation_idUser_idCompoundUniqueInput
  }

  export type ReservationHasUsersOrderByWithAggregationInput = {
    reservation_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: ReservationHasUsersCountOrderByAggregateInput
    _max?: ReservationHasUsersMaxOrderByAggregateInput
    _min?: ReservationHasUsersMinOrderByAggregateInput
  }

  export type ReservationHasUsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReservationHasUsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReservationHasUsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReservationHasUsersScalarWhereWithAggregatesInput>
    reservation_id?: StringWithAggregatesFilter | string
    user_id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ReservationHasRequestedUsersWhereInput = {
    AND?: Enumerable<ReservationHasRequestedUsersWhereInput>
    OR?: Enumerable<ReservationHasRequestedUsersWhereInput>
    NOT?: Enumerable<ReservationHasRequestedUsersWhereInput>
    reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
    reservation_id?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    user_id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
  }

  export type ReservationHasRequestedUsersOrderByWithRelationInput = {
    reservation?: ReservationOrderByWithRelationInput
    reservation_id?: SortOrder
    user?: UserOrderByWithRelationInput
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type ReservationHasRequestedUsersWhereUniqueInput = {
    reservation_id_user_id?: ReservationHasRequestedUsersReservation_idUser_idCompoundUniqueInput
  }

  export type ReservationHasRequestedUsersOrderByWithAggregationInput = {
    reservation_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: ReservationHasRequestedUsersCountOrderByAggregateInput
    _max?: ReservationHasRequestedUsersMaxOrderByAggregateInput
    _min?: ReservationHasRequestedUsersMinOrderByAggregateInput
  }

  export type ReservationHasRequestedUsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReservationHasRequestedUsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReservationHasRequestedUsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReservationHasRequestedUsersScalarWhereWithAggregatesInput>
    reservation_id?: StringWithAggregatesFilter | string
    user_id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    ra: number
    password: string
    email: string
    campi: string
    role?: string
    reservations?: ReservationHasUsersCreateNestedManyWithoutUserInput
    requestedReservations?: ReservationHasRequestedUsersCreateNestedManyWithoutUserInput
    managerOfReservations?: ReservationCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    ra: number
    password: string
    email: string
    campi: string
    role?: string
    reservations?: ReservationHasUsersUncheckedCreateNestedManyWithoutUserInput
    requestedReservations?: ReservationHasRequestedUsersUncheckedCreateNestedManyWithoutUserInput
    managerOfReservations?: ReservationUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ra?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campi?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationHasUsersUpdateManyWithoutUserNestedInput
    requestedReservations?: ReservationHasRequestedUsersUpdateManyWithoutUserNestedInput
    managerOfReservations?: ReservationUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ra?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campi?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationHasUsersUncheckedUpdateManyWithoutUserNestedInput
    requestedReservations?: ReservationHasRequestedUsersUncheckedUpdateManyWithoutUserNestedInput
    managerOfReservations?: ReservationUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    ra: number
    password: string
    email: string
    campi: string
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ra?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campi?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ra?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campi?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type SportCreateInput = {
    id?: string
    name: string
    maxAmount?: string | null
    courts?: CourtHasSportsCreateNestedManyWithoutSportInput
    reservation?: ReservationCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateInput = {
    id?: string
    name: string
    maxAmount?: string | null
    courts?: CourtHasSportsUncheckedCreateNestedManyWithoutSportInput
    reservation?: ReservationUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    courts?: CourtHasSportsUpdateManyWithoutSportNestedInput
    reservation?: ReservationUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    courts?: CourtHasSportsUncheckedUpdateManyWithoutSportNestedInput
    reservation?: ReservationUncheckedUpdateManyWithoutSportNestedInput
  }

  export type SportCreateManyInput = {
    id?: string
    name: string
    maxAmount?: string | null
  }

  export type SportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourtCreateInput = {
    id?: string
    name: string
    sports?: CourtHasSportsCreateNestedManyWithoutCourtInput
    reservation?: ReservationCreateNestedManyWithoutCourtInput
    unavailableTime?: unavailableTimeCreateNestedManyWithoutCourtInput
  }

  export type CourtUncheckedCreateInput = {
    id?: string
    name: string
    sports?: CourtHasSportsUncheckedCreateNestedManyWithoutCourtInput
    reservation?: ReservationUncheckedCreateNestedManyWithoutCourtInput
    unavailableTime?: unavailableTimeUncheckedCreateNestedManyWithoutCourtInput
  }

  export type CourtUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sports?: CourtHasSportsUpdateManyWithoutCourtNestedInput
    reservation?: ReservationUpdateManyWithoutCourtNestedInput
    unavailableTime?: unavailableTimeUpdateManyWithoutCourtNestedInput
  }

  export type CourtUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sports?: CourtHasSportsUncheckedUpdateManyWithoutCourtNestedInput
    reservation?: ReservationUncheckedUpdateManyWithoutCourtNestedInput
    unavailableTime?: unavailableTimeUncheckedUpdateManyWithoutCourtNestedInput
  }

  export type CourtCreateManyInput = {
    id?: string
    name: string
  }

  export type CourtUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourtUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    manager: UserCreateNestedOneWithoutManagerOfReservationsInput
    participants?: ReservationHasUsersCreateNestedManyWithoutReservationInput
    requested_participants?: ReservationHasRequestedUsersCreateNestedManyWithoutReservationInput
    max_participants: number
    sport: SportCreateNestedOneWithoutReservationInput
    court: CourtCreateNestedOneWithoutReservationInput
    description: string
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    manager_id: string
    participants?: ReservationHasUsersUncheckedCreateNestedManyWithoutReservationInput
    requested_participants?: ReservationHasRequestedUsersUncheckedCreateNestedManyWithoutReservationInput
    max_participants: number
    sportId: string
    courtId: string
    description: string
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutManagerOfReservationsNestedInput
    participants?: ReservationHasUsersUpdateManyWithoutReservationNestedInput
    requested_participants?: ReservationHasRequestedUsersUpdateManyWithoutReservationNestedInput
    max_participants?: IntFieldUpdateOperationsInput | number
    sport?: SportUpdateOneRequiredWithoutReservationNestedInput
    court?: CourtUpdateOneRequiredWithoutReservationNestedInput
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manager_id?: StringFieldUpdateOperationsInput | string
    participants?: ReservationHasUsersUncheckedUpdateManyWithoutReservationNestedInput
    requested_participants?: ReservationHasRequestedUsersUncheckedUpdateManyWithoutReservationNestedInput
    max_participants?: IntFieldUpdateOperationsInput | number
    sportId?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateManyInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    manager_id: string
    max_participants: number
    sportId: string
    courtId: string
    description: string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manager_id?: StringFieldUpdateOperationsInput | string
    max_participants?: IntFieldUpdateOperationsInput | number
    sportId?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type dayOfTheWeekCreateInput = {
    id?: string
    name: string
    UnavailableTimeHasDayOfTheWeek?: UnavailableTimeHasDayOfTheWeekCreateNestedManyWithoutDayOfTheWeekInput
  }

  export type dayOfTheWeekUncheckedCreateInput = {
    id?: string
    name: string
    UnavailableTimeHasDayOfTheWeek?: UnavailableTimeHasDayOfTheWeekUncheckedCreateNestedManyWithoutDayOfTheWeekInput
  }

  export type dayOfTheWeekUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    UnavailableTimeHasDayOfTheWeek?: UnavailableTimeHasDayOfTheWeekUpdateManyWithoutDayOfTheWeekNestedInput
  }

  export type dayOfTheWeekUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    UnavailableTimeHasDayOfTheWeek?: UnavailableTimeHasDayOfTheWeekUncheckedUpdateManyWithoutDayOfTheWeekNestedInput
  }

  export type dayOfTheWeekCreateManyInput = {
    id?: string
    name: string
  }

  export type dayOfTheWeekUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type dayOfTheWeekUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type unavailableTimeCreateInput = {
    id?: string
    startDateTime: Date | string
    endDateTime: Date | string
    startTime: Date | string
    endTime: Date | string
    court: CourtCreateNestedOneWithoutUnavailableTimeInput
    created_at?: Date | string
    daysOfTheWeek?: UnavailableTimeHasDayOfTheWeekCreateNestedOneWithoutUnavailableTimeInput
  }

  export type unavailableTimeUncheckedCreateInput = {
    id?: string
    startDateTime: Date | string
    endDateTime: Date | string
    startTime: Date | string
    endTime: Date | string
    created_at?: Date | string
    courtId: string
    daysOfTheWeek?: UnavailableTimeHasDayOfTheWeekUncheckedCreateNestedOneWithoutUnavailableTimeInput
  }

  export type unavailableTimeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    court?: CourtUpdateOneRequiredWithoutUnavailableTimeNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daysOfTheWeek?: UnavailableTimeHasDayOfTheWeekUpdateOneWithoutUnavailableTimeNestedInput
  }

  export type unavailableTimeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courtId?: StringFieldUpdateOperationsInput | string
    daysOfTheWeek?: UnavailableTimeHasDayOfTheWeekUncheckedUpdateOneWithoutUnavailableTimeNestedInput
  }

  export type unavailableTimeCreateManyInput = {
    id?: string
    startDateTime: Date | string
    endDateTime: Date | string
    startTime: Date | string
    endTime: Date | string
    created_at?: Date | string
    courtId: string
  }

  export type unavailableTimeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type unavailableTimeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courtId?: StringFieldUpdateOperationsInput | string
  }

  export type UnavailableTimeHasDayOfTheWeekCreateInput = {
    unavailableTime: unavailableTimeCreateNestedOneWithoutDaysOfTheWeekInput
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    dayOfTheWeek: dayOfTheWeekCreateNestedOneWithoutUnavailableTimeHasDayOfTheWeekInput
  }

  export type UnavailableTimeHasDayOfTheWeekUncheckedCreateInput = {
    unavailableTimeId: string
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    dayOfTheWeekId: string
  }

  export type UnavailableTimeHasDayOfTheWeekUpdateInput = {
    unavailableTime?: unavailableTimeUpdateOneRequiredWithoutDaysOfTheWeekNestedInput
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dayOfTheWeek?: dayOfTheWeekUpdateOneRequiredWithoutUnavailableTimeHasDayOfTheWeekNestedInput
  }

  export type UnavailableTimeHasDayOfTheWeekUncheckedUpdateInput = {
    unavailableTimeId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dayOfTheWeekId?: StringFieldUpdateOperationsInput | string
  }

  export type UnavailableTimeHasDayOfTheWeekCreateManyInput = {
    unavailableTimeId: string
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    dayOfTheWeekId: string
  }

  export type UnavailableTimeHasDayOfTheWeekUpdateManyMutationInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UnavailableTimeHasDayOfTheWeekUncheckedUpdateManyInput = {
    unavailableTimeId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dayOfTheWeekId?: StringFieldUpdateOperationsInput | string
  }

  export type CourtHasSportsCreateInput = {
    court: CourtCreateNestedOneWithoutSportsInput
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    sport?: SportCreateNestedOneWithoutCourtsInput
  }

  export type CourtHasSportsUncheckedCreateInput = {
    court_id: string
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    sportsId?: string | null
  }

  export type CourtHasSportsUpdateInput = {
    court?: CourtUpdateOneRequiredWithoutSportsNestedInput
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sport?: SportUpdateOneWithoutCourtsNestedInput
  }

  export type CourtHasSportsUncheckedUpdateInput = {
    court_id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sportsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourtHasSportsCreateManyInput = {
    court_id: string
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    sportsId?: string | null
  }

  export type CourtHasSportsUpdateManyMutationInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourtHasSportsUncheckedUpdateManyInput = {
    court_id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sportsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationHasUsersCreateInput = {
    reservation: ReservationCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutReservationsInput
    created_at?: Date | string
  }

  export type ReservationHasUsersUncheckedCreateInput = {
    reservation_id: string
    user_id: string
    created_at?: Date | string
  }

  export type ReservationHasUsersUpdateInput = {
    reservation?: ReservationUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasUsersUncheckedUpdateInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasUsersCreateManyInput = {
    reservation_id: string
    user_id: string
    created_at?: Date | string
  }

  export type ReservationHasUsersUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasUsersUncheckedUpdateManyInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasRequestedUsersCreateInput = {
    reservation: ReservationCreateNestedOneWithoutRequested_participantsInput
    user: UserCreateNestedOneWithoutRequestedReservationsInput
    created_at?: Date | string
  }

  export type ReservationHasRequestedUsersUncheckedCreateInput = {
    reservation_id: string
    user_id: string
    created_at?: Date | string
  }

  export type ReservationHasRequestedUsersUpdateInput = {
    reservation?: ReservationUpdateOneRequiredWithoutRequested_participantsNestedInput
    user?: UserUpdateOneRequiredWithoutRequestedReservationsNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasRequestedUsersUncheckedUpdateInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasRequestedUsersCreateManyInput = {
    reservation_id: string
    user_id: string
    created_at?: Date | string
  }

  export type ReservationHasRequestedUsersUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasRequestedUsersUncheckedUpdateManyInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type ReservationHasUsersListRelationFilter = {
    every?: ReservationHasUsersWhereInput
    some?: ReservationHasUsersWhereInput
    none?: ReservationHasUsersWhereInput
  }

  export type ReservationHasRequestedUsersListRelationFilter = {
    every?: ReservationHasRequestedUsersWhereInput
    some?: ReservationHasRequestedUsersWhereInput
    none?: ReservationHasRequestedUsersWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type ReservationHasUsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationHasRequestedUsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ra?: SortOrder
    password?: SortOrder
    email?: SortOrder
    campi?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    ra?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ra?: SortOrder
    password?: SortOrder
    email?: SortOrder
    campi?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ra?: SortOrder
    password?: SortOrder
    email?: SortOrder
    campi?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    ra?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type CourtHasSportsListRelationFilter = {
    every?: CourtHasSportsWhereInput
    some?: CourtHasSportsWhereInput
    none?: CourtHasSportsWhereInput
  }

  export type CourtHasSportsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SportCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    maxAmount?: SortOrder
  }

  export type SportMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    maxAmount?: SortOrder
  }

  export type SportMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    maxAmount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UnavailableTimeListRelationFilter = {
    every?: unavailableTimeWhereInput
    some?: unavailableTimeWhereInput
    none?: unavailableTimeWhereInput
  }

  export type unavailableTimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourtCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourtMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourtMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SportRelationFilter = {
    is?: SportWhereInput | null
    isNot?: SportWhereInput | null
  }

  export type CourtRelationFilter = {
    is?: CourtWhereInput
    isNot?: CourtWhereInput
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    created_at?: SortOrder
    manager_id?: SortOrder
    max_participants?: SortOrder
    sportId?: SortOrder
    courtId?: SortOrder
    description?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    max_participants?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    created_at?: SortOrder
    manager_id?: SortOrder
    max_participants?: SortOrder
    sportId?: SortOrder
    courtId?: SortOrder
    description?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    created_at?: SortOrder
    manager_id?: SortOrder
    max_participants?: SortOrder
    sportId?: SortOrder
    courtId?: SortOrder
    description?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    max_participants?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UnavailableTimeHasDayOfTheWeekListRelationFilter = {
    every?: UnavailableTimeHasDayOfTheWeekWhereInput
    some?: UnavailableTimeHasDayOfTheWeekWhereInput
    none?: UnavailableTimeHasDayOfTheWeekWhereInput
  }

  export type UnavailableTimeHasDayOfTheWeekOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dayOfTheWeekCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type dayOfTheWeekMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type dayOfTheWeekMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UnavailableTimeHasDayOfTheWeekRelationFilter = {
    is?: UnavailableTimeHasDayOfTheWeekWhereInput | null
    isNot?: UnavailableTimeHasDayOfTheWeekWhereInput | null
  }

  export type unavailableTimeCountOrderByAggregateInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    created_at?: SortOrder
    courtId?: SortOrder
  }

  export type unavailableTimeMaxOrderByAggregateInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    created_at?: SortOrder
    courtId?: SortOrder
  }

  export type unavailableTimeMinOrderByAggregateInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    created_at?: SortOrder
    courtId?: SortOrder
  }

  export type UnavailableTimeRelationFilter = {
    is?: unavailableTimeWhereInput
    isNot?: unavailableTimeWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DayOfTheWeekRelationFilter = {
    is?: dayOfTheWeekWhereInput
    isNot?: dayOfTheWeekWhereInput
  }

  export type UnavailableTimeHasDayOfTheWeekUnavailableTimeIdDayOfTheWeekIdCompoundUniqueInput = {
    unavailableTimeId: string
    dayOfTheWeekId: string
  }

  export type UnavailableTimeHasDayOfTheWeekCountOrderByAggregateInput = {
    unavailableTimeId?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    dayOfTheWeekId?: SortOrder
  }

  export type UnavailableTimeHasDayOfTheWeekMaxOrderByAggregateInput = {
    unavailableTimeId?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    dayOfTheWeekId?: SortOrder
  }

  export type UnavailableTimeHasDayOfTheWeekMinOrderByAggregateInput = {
    unavailableTimeId?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    dayOfTheWeekId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type CourtHasSportsCountOrderByAggregateInput = {
    court_id?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sportsId?: SortOrder
  }

  export type CourtHasSportsMaxOrderByAggregateInput = {
    court_id?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sportsId?: SortOrder
  }

  export type CourtHasSportsMinOrderByAggregateInput = {
    court_id?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sportsId?: SortOrder
  }

  export type ReservationRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type ReservationHasUsersReservation_idUser_idCompoundUniqueInput = {
    reservation_id: string
    user_id: string
  }

  export type ReservationHasUsersCountOrderByAggregateInput = {
    reservation_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type ReservationHasUsersMaxOrderByAggregateInput = {
    reservation_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type ReservationHasUsersMinOrderByAggregateInput = {
    reservation_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type ReservationHasRequestedUsersReservation_idUser_idCompoundUniqueInput = {
    reservation_id: string
    user_id: string
  }

  export type ReservationHasRequestedUsersCountOrderByAggregateInput = {
    reservation_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type ReservationHasRequestedUsersMaxOrderByAggregateInput = {
    reservation_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type ReservationHasRequestedUsersMinOrderByAggregateInput = {
    reservation_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type ReservationHasUsersCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReservationHasUsersCreateWithoutUserInput>, Enumerable<ReservationHasUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReservationHasUsersCreateOrConnectWithoutUserInput>
    createMany?: ReservationHasUsersCreateManyUserInputEnvelope
    connect?: Enumerable<ReservationHasUsersWhereUniqueInput>
  }

  export type ReservationHasRequestedUsersCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReservationHasRequestedUsersCreateWithoutUserInput>, Enumerable<ReservationHasRequestedUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReservationHasRequestedUsersCreateOrConnectWithoutUserInput>
    createMany?: ReservationHasRequestedUsersCreateManyUserInputEnvelope
    connect?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
  }

  export type ReservationCreateNestedManyWithoutManagerInput = {
    create?: XOR<Enumerable<ReservationCreateWithoutManagerInput>, Enumerable<ReservationUncheckedCreateWithoutManagerInput>>
    connectOrCreate?: Enumerable<ReservationCreateOrConnectWithoutManagerInput>
    createMany?: ReservationCreateManyManagerInputEnvelope
    connect?: Enumerable<ReservationWhereUniqueInput>
  }

  export type ReservationHasUsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReservationHasUsersCreateWithoutUserInput>, Enumerable<ReservationHasUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReservationHasUsersCreateOrConnectWithoutUserInput>
    createMany?: ReservationHasUsersCreateManyUserInputEnvelope
    connect?: Enumerable<ReservationHasUsersWhereUniqueInput>
  }

  export type ReservationHasRequestedUsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReservationHasRequestedUsersCreateWithoutUserInput>, Enumerable<ReservationHasRequestedUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReservationHasRequestedUsersCreateOrConnectWithoutUserInput>
    createMany?: ReservationHasRequestedUsersCreateManyUserInputEnvelope
    connect?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
  }

  export type ReservationUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<Enumerable<ReservationCreateWithoutManagerInput>, Enumerable<ReservationUncheckedCreateWithoutManagerInput>>
    connectOrCreate?: Enumerable<ReservationCreateOrConnectWithoutManagerInput>
    createMany?: ReservationCreateManyManagerInputEnvelope
    connect?: Enumerable<ReservationWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservationHasUsersUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReservationHasUsersCreateWithoutUserInput>, Enumerable<ReservationHasUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReservationHasUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReservationHasUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReservationHasUsersCreateManyUserInputEnvelope
    set?: Enumerable<ReservationHasUsersWhereUniqueInput>
    disconnect?: Enumerable<ReservationHasUsersWhereUniqueInput>
    delete?: Enumerable<ReservationHasUsersWhereUniqueInput>
    connect?: Enumerable<ReservationHasUsersWhereUniqueInput>
    update?: Enumerable<ReservationHasUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReservationHasUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReservationHasUsersScalarWhereInput>
  }

  export type ReservationHasRequestedUsersUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReservationHasRequestedUsersCreateWithoutUserInput>, Enumerable<ReservationHasRequestedUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReservationHasRequestedUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReservationHasRequestedUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReservationHasRequestedUsersCreateManyUserInputEnvelope
    set?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    disconnect?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    delete?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    connect?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    update?: Enumerable<ReservationHasRequestedUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReservationHasRequestedUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReservationHasRequestedUsersScalarWhereInput>
  }

  export type ReservationUpdateManyWithoutManagerNestedInput = {
    create?: XOR<Enumerable<ReservationCreateWithoutManagerInput>, Enumerable<ReservationUncheckedCreateWithoutManagerInput>>
    connectOrCreate?: Enumerable<ReservationCreateOrConnectWithoutManagerInput>
    upsert?: Enumerable<ReservationUpsertWithWhereUniqueWithoutManagerInput>
    createMany?: ReservationCreateManyManagerInputEnvelope
    set?: Enumerable<ReservationWhereUniqueInput>
    disconnect?: Enumerable<ReservationWhereUniqueInput>
    delete?: Enumerable<ReservationWhereUniqueInput>
    connect?: Enumerable<ReservationWhereUniqueInput>
    update?: Enumerable<ReservationUpdateWithWhereUniqueWithoutManagerInput>
    updateMany?: Enumerable<ReservationUpdateManyWithWhereWithoutManagerInput>
    deleteMany?: Enumerable<ReservationScalarWhereInput>
  }

  export type ReservationHasUsersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReservationHasUsersCreateWithoutUserInput>, Enumerable<ReservationHasUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReservationHasUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReservationHasUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReservationHasUsersCreateManyUserInputEnvelope
    set?: Enumerable<ReservationHasUsersWhereUniqueInput>
    disconnect?: Enumerable<ReservationHasUsersWhereUniqueInput>
    delete?: Enumerable<ReservationHasUsersWhereUniqueInput>
    connect?: Enumerable<ReservationHasUsersWhereUniqueInput>
    update?: Enumerable<ReservationHasUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReservationHasUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReservationHasUsersScalarWhereInput>
  }

  export type ReservationHasRequestedUsersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReservationHasRequestedUsersCreateWithoutUserInput>, Enumerable<ReservationHasRequestedUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReservationHasRequestedUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReservationHasRequestedUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReservationHasRequestedUsersCreateManyUserInputEnvelope
    set?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    disconnect?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    delete?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    connect?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    update?: Enumerable<ReservationHasRequestedUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReservationHasRequestedUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReservationHasRequestedUsersScalarWhereInput>
  }

  export type ReservationUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<Enumerable<ReservationCreateWithoutManagerInput>, Enumerable<ReservationUncheckedCreateWithoutManagerInput>>
    connectOrCreate?: Enumerable<ReservationCreateOrConnectWithoutManagerInput>
    upsert?: Enumerable<ReservationUpsertWithWhereUniqueWithoutManagerInput>
    createMany?: ReservationCreateManyManagerInputEnvelope
    set?: Enumerable<ReservationWhereUniqueInput>
    disconnect?: Enumerable<ReservationWhereUniqueInput>
    delete?: Enumerable<ReservationWhereUniqueInput>
    connect?: Enumerable<ReservationWhereUniqueInput>
    update?: Enumerable<ReservationUpdateWithWhereUniqueWithoutManagerInput>
    updateMany?: Enumerable<ReservationUpdateManyWithWhereWithoutManagerInput>
    deleteMany?: Enumerable<ReservationScalarWhereInput>
  }

  export type CourtHasSportsCreateNestedManyWithoutSportInput = {
    create?: XOR<Enumerable<CourtHasSportsCreateWithoutSportInput>, Enumerable<CourtHasSportsUncheckedCreateWithoutSportInput>>
    connectOrCreate?: Enumerable<CourtHasSportsCreateOrConnectWithoutSportInput>
    createMany?: CourtHasSportsCreateManySportInputEnvelope
    connect?: Enumerable<CourtHasSportsWhereUniqueInput>
  }

  export type ReservationCreateNestedManyWithoutSportInput = {
    create?: XOR<Enumerable<ReservationCreateWithoutSportInput>, Enumerable<ReservationUncheckedCreateWithoutSportInput>>
    connectOrCreate?: Enumerable<ReservationCreateOrConnectWithoutSportInput>
    createMany?: ReservationCreateManySportInputEnvelope
    connect?: Enumerable<ReservationWhereUniqueInput>
  }

  export type CourtHasSportsUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<Enumerable<CourtHasSportsCreateWithoutSportInput>, Enumerable<CourtHasSportsUncheckedCreateWithoutSportInput>>
    connectOrCreate?: Enumerable<CourtHasSportsCreateOrConnectWithoutSportInput>
    createMany?: CourtHasSportsCreateManySportInputEnvelope
    connect?: Enumerable<CourtHasSportsWhereUniqueInput>
  }

  export type ReservationUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<Enumerable<ReservationCreateWithoutSportInput>, Enumerable<ReservationUncheckedCreateWithoutSportInput>>
    connectOrCreate?: Enumerable<ReservationCreateOrConnectWithoutSportInput>
    createMany?: ReservationCreateManySportInputEnvelope
    connect?: Enumerable<ReservationWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CourtHasSportsUpdateManyWithoutSportNestedInput = {
    create?: XOR<Enumerable<CourtHasSportsCreateWithoutSportInput>, Enumerable<CourtHasSportsUncheckedCreateWithoutSportInput>>
    connectOrCreate?: Enumerable<CourtHasSportsCreateOrConnectWithoutSportInput>
    upsert?: Enumerable<CourtHasSportsUpsertWithWhereUniqueWithoutSportInput>
    createMany?: CourtHasSportsCreateManySportInputEnvelope
    set?: Enumerable<CourtHasSportsWhereUniqueInput>
    disconnect?: Enumerable<CourtHasSportsWhereUniqueInput>
    delete?: Enumerable<CourtHasSportsWhereUniqueInput>
    connect?: Enumerable<CourtHasSportsWhereUniqueInput>
    update?: Enumerable<CourtHasSportsUpdateWithWhereUniqueWithoutSportInput>
    updateMany?: Enumerable<CourtHasSportsUpdateManyWithWhereWithoutSportInput>
    deleteMany?: Enumerable<CourtHasSportsScalarWhereInput>
  }

  export type ReservationUpdateManyWithoutSportNestedInput = {
    create?: XOR<Enumerable<ReservationCreateWithoutSportInput>, Enumerable<ReservationUncheckedCreateWithoutSportInput>>
    connectOrCreate?: Enumerable<ReservationCreateOrConnectWithoutSportInput>
    upsert?: Enumerable<ReservationUpsertWithWhereUniqueWithoutSportInput>
    createMany?: ReservationCreateManySportInputEnvelope
    set?: Enumerable<ReservationWhereUniqueInput>
    disconnect?: Enumerable<ReservationWhereUniqueInput>
    delete?: Enumerable<ReservationWhereUniqueInput>
    connect?: Enumerable<ReservationWhereUniqueInput>
    update?: Enumerable<ReservationUpdateWithWhereUniqueWithoutSportInput>
    updateMany?: Enumerable<ReservationUpdateManyWithWhereWithoutSportInput>
    deleteMany?: Enumerable<ReservationScalarWhereInput>
  }

  export type CourtHasSportsUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<Enumerable<CourtHasSportsCreateWithoutSportInput>, Enumerable<CourtHasSportsUncheckedCreateWithoutSportInput>>
    connectOrCreate?: Enumerable<CourtHasSportsCreateOrConnectWithoutSportInput>
    upsert?: Enumerable<CourtHasSportsUpsertWithWhereUniqueWithoutSportInput>
    createMany?: CourtHasSportsCreateManySportInputEnvelope
    set?: Enumerable<CourtHasSportsWhereUniqueInput>
    disconnect?: Enumerable<CourtHasSportsWhereUniqueInput>
    delete?: Enumerable<CourtHasSportsWhereUniqueInput>
    connect?: Enumerable<CourtHasSportsWhereUniqueInput>
    update?: Enumerable<CourtHasSportsUpdateWithWhereUniqueWithoutSportInput>
    updateMany?: Enumerable<CourtHasSportsUpdateManyWithWhereWithoutSportInput>
    deleteMany?: Enumerable<CourtHasSportsScalarWhereInput>
  }

  export type ReservationUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<Enumerable<ReservationCreateWithoutSportInput>, Enumerable<ReservationUncheckedCreateWithoutSportInput>>
    connectOrCreate?: Enumerable<ReservationCreateOrConnectWithoutSportInput>
    upsert?: Enumerable<ReservationUpsertWithWhereUniqueWithoutSportInput>
    createMany?: ReservationCreateManySportInputEnvelope
    set?: Enumerable<ReservationWhereUniqueInput>
    disconnect?: Enumerable<ReservationWhereUniqueInput>
    delete?: Enumerable<ReservationWhereUniqueInput>
    connect?: Enumerable<ReservationWhereUniqueInput>
    update?: Enumerable<ReservationUpdateWithWhereUniqueWithoutSportInput>
    updateMany?: Enumerable<ReservationUpdateManyWithWhereWithoutSportInput>
    deleteMany?: Enumerable<ReservationScalarWhereInput>
  }

  export type CourtHasSportsCreateNestedManyWithoutCourtInput = {
    create?: XOR<Enumerable<CourtHasSportsCreateWithoutCourtInput>, Enumerable<CourtHasSportsUncheckedCreateWithoutCourtInput>>
    connectOrCreate?: Enumerable<CourtHasSportsCreateOrConnectWithoutCourtInput>
    createMany?: CourtHasSportsCreateManyCourtInputEnvelope
    connect?: Enumerable<CourtHasSportsWhereUniqueInput>
  }

  export type ReservationCreateNestedManyWithoutCourtInput = {
    create?: XOR<Enumerable<ReservationCreateWithoutCourtInput>, Enumerable<ReservationUncheckedCreateWithoutCourtInput>>
    connectOrCreate?: Enumerable<ReservationCreateOrConnectWithoutCourtInput>
    createMany?: ReservationCreateManyCourtInputEnvelope
    connect?: Enumerable<ReservationWhereUniqueInput>
  }

  export type unavailableTimeCreateNestedManyWithoutCourtInput = {
    create?: XOR<Enumerable<unavailableTimeCreateWithoutCourtInput>, Enumerable<unavailableTimeUncheckedCreateWithoutCourtInput>>
    connectOrCreate?: Enumerable<unavailableTimeCreateOrConnectWithoutCourtInput>
    createMany?: unavailableTimeCreateManyCourtInputEnvelope
    connect?: Enumerable<unavailableTimeWhereUniqueInput>
  }

  export type CourtHasSportsUncheckedCreateNestedManyWithoutCourtInput = {
    create?: XOR<Enumerable<CourtHasSportsCreateWithoutCourtInput>, Enumerable<CourtHasSportsUncheckedCreateWithoutCourtInput>>
    connectOrCreate?: Enumerable<CourtHasSportsCreateOrConnectWithoutCourtInput>
    createMany?: CourtHasSportsCreateManyCourtInputEnvelope
    connect?: Enumerable<CourtHasSportsWhereUniqueInput>
  }

  export type ReservationUncheckedCreateNestedManyWithoutCourtInput = {
    create?: XOR<Enumerable<ReservationCreateWithoutCourtInput>, Enumerable<ReservationUncheckedCreateWithoutCourtInput>>
    connectOrCreate?: Enumerable<ReservationCreateOrConnectWithoutCourtInput>
    createMany?: ReservationCreateManyCourtInputEnvelope
    connect?: Enumerable<ReservationWhereUniqueInput>
  }

  export type unavailableTimeUncheckedCreateNestedManyWithoutCourtInput = {
    create?: XOR<Enumerable<unavailableTimeCreateWithoutCourtInput>, Enumerable<unavailableTimeUncheckedCreateWithoutCourtInput>>
    connectOrCreate?: Enumerable<unavailableTimeCreateOrConnectWithoutCourtInput>
    createMany?: unavailableTimeCreateManyCourtInputEnvelope
    connect?: Enumerable<unavailableTimeWhereUniqueInput>
  }

  export type CourtHasSportsUpdateManyWithoutCourtNestedInput = {
    create?: XOR<Enumerable<CourtHasSportsCreateWithoutCourtInput>, Enumerable<CourtHasSportsUncheckedCreateWithoutCourtInput>>
    connectOrCreate?: Enumerable<CourtHasSportsCreateOrConnectWithoutCourtInput>
    upsert?: Enumerable<CourtHasSportsUpsertWithWhereUniqueWithoutCourtInput>
    createMany?: CourtHasSportsCreateManyCourtInputEnvelope
    set?: Enumerable<CourtHasSportsWhereUniqueInput>
    disconnect?: Enumerable<CourtHasSportsWhereUniqueInput>
    delete?: Enumerable<CourtHasSportsWhereUniqueInput>
    connect?: Enumerable<CourtHasSportsWhereUniqueInput>
    update?: Enumerable<CourtHasSportsUpdateWithWhereUniqueWithoutCourtInput>
    updateMany?: Enumerable<CourtHasSportsUpdateManyWithWhereWithoutCourtInput>
    deleteMany?: Enumerable<CourtHasSportsScalarWhereInput>
  }

  export type ReservationUpdateManyWithoutCourtNestedInput = {
    create?: XOR<Enumerable<ReservationCreateWithoutCourtInput>, Enumerable<ReservationUncheckedCreateWithoutCourtInput>>
    connectOrCreate?: Enumerable<ReservationCreateOrConnectWithoutCourtInput>
    upsert?: Enumerable<ReservationUpsertWithWhereUniqueWithoutCourtInput>
    createMany?: ReservationCreateManyCourtInputEnvelope
    set?: Enumerable<ReservationWhereUniqueInput>
    disconnect?: Enumerable<ReservationWhereUniqueInput>
    delete?: Enumerable<ReservationWhereUniqueInput>
    connect?: Enumerable<ReservationWhereUniqueInput>
    update?: Enumerable<ReservationUpdateWithWhereUniqueWithoutCourtInput>
    updateMany?: Enumerable<ReservationUpdateManyWithWhereWithoutCourtInput>
    deleteMany?: Enumerable<ReservationScalarWhereInput>
  }

  export type unavailableTimeUpdateManyWithoutCourtNestedInput = {
    create?: XOR<Enumerable<unavailableTimeCreateWithoutCourtInput>, Enumerable<unavailableTimeUncheckedCreateWithoutCourtInput>>
    connectOrCreate?: Enumerable<unavailableTimeCreateOrConnectWithoutCourtInput>
    upsert?: Enumerable<unavailableTimeUpsertWithWhereUniqueWithoutCourtInput>
    createMany?: unavailableTimeCreateManyCourtInputEnvelope
    set?: Enumerable<unavailableTimeWhereUniqueInput>
    disconnect?: Enumerable<unavailableTimeWhereUniqueInput>
    delete?: Enumerable<unavailableTimeWhereUniqueInput>
    connect?: Enumerable<unavailableTimeWhereUniqueInput>
    update?: Enumerable<unavailableTimeUpdateWithWhereUniqueWithoutCourtInput>
    updateMany?: Enumerable<unavailableTimeUpdateManyWithWhereWithoutCourtInput>
    deleteMany?: Enumerable<unavailableTimeScalarWhereInput>
  }

  export type CourtHasSportsUncheckedUpdateManyWithoutCourtNestedInput = {
    create?: XOR<Enumerable<CourtHasSportsCreateWithoutCourtInput>, Enumerable<CourtHasSportsUncheckedCreateWithoutCourtInput>>
    connectOrCreate?: Enumerable<CourtHasSportsCreateOrConnectWithoutCourtInput>
    upsert?: Enumerable<CourtHasSportsUpsertWithWhereUniqueWithoutCourtInput>
    createMany?: CourtHasSportsCreateManyCourtInputEnvelope
    set?: Enumerable<CourtHasSportsWhereUniqueInput>
    disconnect?: Enumerable<CourtHasSportsWhereUniqueInput>
    delete?: Enumerable<CourtHasSportsWhereUniqueInput>
    connect?: Enumerable<CourtHasSportsWhereUniqueInput>
    update?: Enumerable<CourtHasSportsUpdateWithWhereUniqueWithoutCourtInput>
    updateMany?: Enumerable<CourtHasSportsUpdateManyWithWhereWithoutCourtInput>
    deleteMany?: Enumerable<CourtHasSportsScalarWhereInput>
  }

  export type ReservationUncheckedUpdateManyWithoutCourtNestedInput = {
    create?: XOR<Enumerable<ReservationCreateWithoutCourtInput>, Enumerable<ReservationUncheckedCreateWithoutCourtInput>>
    connectOrCreate?: Enumerable<ReservationCreateOrConnectWithoutCourtInput>
    upsert?: Enumerable<ReservationUpsertWithWhereUniqueWithoutCourtInput>
    createMany?: ReservationCreateManyCourtInputEnvelope
    set?: Enumerable<ReservationWhereUniqueInput>
    disconnect?: Enumerable<ReservationWhereUniqueInput>
    delete?: Enumerable<ReservationWhereUniqueInput>
    connect?: Enumerable<ReservationWhereUniqueInput>
    update?: Enumerable<ReservationUpdateWithWhereUniqueWithoutCourtInput>
    updateMany?: Enumerable<ReservationUpdateManyWithWhereWithoutCourtInput>
    deleteMany?: Enumerable<ReservationScalarWhereInput>
  }

  export type unavailableTimeUncheckedUpdateManyWithoutCourtNestedInput = {
    create?: XOR<Enumerable<unavailableTimeCreateWithoutCourtInput>, Enumerable<unavailableTimeUncheckedCreateWithoutCourtInput>>
    connectOrCreate?: Enumerable<unavailableTimeCreateOrConnectWithoutCourtInput>
    upsert?: Enumerable<unavailableTimeUpsertWithWhereUniqueWithoutCourtInput>
    createMany?: unavailableTimeCreateManyCourtInputEnvelope
    set?: Enumerable<unavailableTimeWhereUniqueInput>
    disconnect?: Enumerable<unavailableTimeWhereUniqueInput>
    delete?: Enumerable<unavailableTimeWhereUniqueInput>
    connect?: Enumerable<unavailableTimeWhereUniqueInput>
    update?: Enumerable<unavailableTimeUpdateWithWhereUniqueWithoutCourtInput>
    updateMany?: Enumerable<unavailableTimeUpdateManyWithWhereWithoutCourtInput>
    deleteMany?: Enumerable<unavailableTimeScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutManagerOfReservationsInput = {
    create?: XOR<UserCreateWithoutManagerOfReservationsInput, UserUncheckedCreateWithoutManagerOfReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagerOfReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type ReservationHasUsersCreateNestedManyWithoutReservationInput = {
    create?: XOR<Enumerable<ReservationHasUsersCreateWithoutReservationInput>, Enumerable<ReservationHasUsersUncheckedCreateWithoutReservationInput>>
    connectOrCreate?: Enumerable<ReservationHasUsersCreateOrConnectWithoutReservationInput>
    createMany?: ReservationHasUsersCreateManyReservationInputEnvelope
    connect?: Enumerable<ReservationHasUsersWhereUniqueInput>
  }

  export type ReservationHasRequestedUsersCreateNestedManyWithoutReservationInput = {
    create?: XOR<Enumerable<ReservationHasRequestedUsersCreateWithoutReservationInput>, Enumerable<ReservationHasRequestedUsersUncheckedCreateWithoutReservationInput>>
    connectOrCreate?: Enumerable<ReservationHasRequestedUsersCreateOrConnectWithoutReservationInput>
    createMany?: ReservationHasRequestedUsersCreateManyReservationInputEnvelope
    connect?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
  }

  export type SportCreateNestedOneWithoutReservationInput = {
    create?: XOR<SportCreateWithoutReservationInput, SportUncheckedCreateWithoutReservationInput>
    connectOrCreate?: SportCreateOrConnectWithoutReservationInput
    connect?: SportWhereUniqueInput
  }

  export type CourtCreateNestedOneWithoutReservationInput = {
    create?: XOR<CourtCreateWithoutReservationInput, CourtUncheckedCreateWithoutReservationInput>
    connectOrCreate?: CourtCreateOrConnectWithoutReservationInput
    connect?: CourtWhereUniqueInput
  }

  export type ReservationHasUsersUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<Enumerable<ReservationHasUsersCreateWithoutReservationInput>, Enumerable<ReservationHasUsersUncheckedCreateWithoutReservationInput>>
    connectOrCreate?: Enumerable<ReservationHasUsersCreateOrConnectWithoutReservationInput>
    createMany?: ReservationHasUsersCreateManyReservationInputEnvelope
    connect?: Enumerable<ReservationHasUsersWhereUniqueInput>
  }

  export type ReservationHasRequestedUsersUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<Enumerable<ReservationHasRequestedUsersCreateWithoutReservationInput>, Enumerable<ReservationHasRequestedUsersUncheckedCreateWithoutReservationInput>>
    connectOrCreate?: Enumerable<ReservationHasRequestedUsersCreateOrConnectWithoutReservationInput>
    createMany?: ReservationHasRequestedUsersCreateManyReservationInputEnvelope
    connect?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutManagerOfReservationsNestedInput = {
    create?: XOR<UserCreateWithoutManagerOfReservationsInput, UserUncheckedCreateWithoutManagerOfReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagerOfReservationsInput
    upsert?: UserUpsertWithoutManagerOfReservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutManagerOfReservationsInput, UserUncheckedUpdateWithoutManagerOfReservationsInput>
  }

  export type ReservationHasUsersUpdateManyWithoutReservationNestedInput = {
    create?: XOR<Enumerable<ReservationHasUsersCreateWithoutReservationInput>, Enumerable<ReservationHasUsersUncheckedCreateWithoutReservationInput>>
    connectOrCreate?: Enumerable<ReservationHasUsersCreateOrConnectWithoutReservationInput>
    upsert?: Enumerable<ReservationHasUsersUpsertWithWhereUniqueWithoutReservationInput>
    createMany?: ReservationHasUsersCreateManyReservationInputEnvelope
    set?: Enumerable<ReservationHasUsersWhereUniqueInput>
    disconnect?: Enumerable<ReservationHasUsersWhereUniqueInput>
    delete?: Enumerable<ReservationHasUsersWhereUniqueInput>
    connect?: Enumerable<ReservationHasUsersWhereUniqueInput>
    update?: Enumerable<ReservationHasUsersUpdateWithWhereUniqueWithoutReservationInput>
    updateMany?: Enumerable<ReservationHasUsersUpdateManyWithWhereWithoutReservationInput>
    deleteMany?: Enumerable<ReservationHasUsersScalarWhereInput>
  }

  export type ReservationHasRequestedUsersUpdateManyWithoutReservationNestedInput = {
    create?: XOR<Enumerable<ReservationHasRequestedUsersCreateWithoutReservationInput>, Enumerable<ReservationHasRequestedUsersUncheckedCreateWithoutReservationInput>>
    connectOrCreate?: Enumerable<ReservationHasRequestedUsersCreateOrConnectWithoutReservationInput>
    upsert?: Enumerable<ReservationHasRequestedUsersUpsertWithWhereUniqueWithoutReservationInput>
    createMany?: ReservationHasRequestedUsersCreateManyReservationInputEnvelope
    set?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    disconnect?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    delete?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    connect?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    update?: Enumerable<ReservationHasRequestedUsersUpdateWithWhereUniqueWithoutReservationInput>
    updateMany?: Enumerable<ReservationHasRequestedUsersUpdateManyWithWhereWithoutReservationInput>
    deleteMany?: Enumerable<ReservationHasRequestedUsersScalarWhereInput>
  }

  export type SportUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<SportCreateWithoutReservationInput, SportUncheckedCreateWithoutReservationInput>
    connectOrCreate?: SportCreateOrConnectWithoutReservationInput
    upsert?: SportUpsertWithoutReservationInput
    connect?: SportWhereUniqueInput
    update?: XOR<SportUpdateWithoutReservationInput, SportUncheckedUpdateWithoutReservationInput>
  }

  export type CourtUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<CourtCreateWithoutReservationInput, CourtUncheckedCreateWithoutReservationInput>
    connectOrCreate?: CourtCreateOrConnectWithoutReservationInput
    upsert?: CourtUpsertWithoutReservationInput
    connect?: CourtWhereUniqueInput
    update?: XOR<CourtUpdateWithoutReservationInput, CourtUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationHasUsersUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<Enumerable<ReservationHasUsersCreateWithoutReservationInput>, Enumerable<ReservationHasUsersUncheckedCreateWithoutReservationInput>>
    connectOrCreate?: Enumerable<ReservationHasUsersCreateOrConnectWithoutReservationInput>
    upsert?: Enumerable<ReservationHasUsersUpsertWithWhereUniqueWithoutReservationInput>
    createMany?: ReservationHasUsersCreateManyReservationInputEnvelope
    set?: Enumerable<ReservationHasUsersWhereUniqueInput>
    disconnect?: Enumerable<ReservationHasUsersWhereUniqueInput>
    delete?: Enumerable<ReservationHasUsersWhereUniqueInput>
    connect?: Enumerable<ReservationHasUsersWhereUniqueInput>
    update?: Enumerable<ReservationHasUsersUpdateWithWhereUniqueWithoutReservationInput>
    updateMany?: Enumerable<ReservationHasUsersUpdateManyWithWhereWithoutReservationInput>
    deleteMany?: Enumerable<ReservationHasUsersScalarWhereInput>
  }

  export type ReservationHasRequestedUsersUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<Enumerable<ReservationHasRequestedUsersCreateWithoutReservationInput>, Enumerable<ReservationHasRequestedUsersUncheckedCreateWithoutReservationInput>>
    connectOrCreate?: Enumerable<ReservationHasRequestedUsersCreateOrConnectWithoutReservationInput>
    upsert?: Enumerable<ReservationHasRequestedUsersUpsertWithWhereUniqueWithoutReservationInput>
    createMany?: ReservationHasRequestedUsersCreateManyReservationInputEnvelope
    set?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    disconnect?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    delete?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    connect?: Enumerable<ReservationHasRequestedUsersWhereUniqueInput>
    update?: Enumerable<ReservationHasRequestedUsersUpdateWithWhereUniqueWithoutReservationInput>
    updateMany?: Enumerable<ReservationHasRequestedUsersUpdateManyWithWhereWithoutReservationInput>
    deleteMany?: Enumerable<ReservationHasRequestedUsersScalarWhereInput>
  }

  export type UnavailableTimeHasDayOfTheWeekCreateNestedManyWithoutDayOfTheWeekInput = {
    create?: XOR<Enumerable<UnavailableTimeHasDayOfTheWeekCreateWithoutDayOfTheWeekInput>, Enumerable<UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutDayOfTheWeekInput>>
    connectOrCreate?: Enumerable<UnavailableTimeHasDayOfTheWeekCreateOrConnectWithoutDayOfTheWeekInput>
    createMany?: UnavailableTimeHasDayOfTheWeekCreateManyDayOfTheWeekInputEnvelope
    connect?: Enumerable<UnavailableTimeHasDayOfTheWeekWhereUniqueInput>
  }

  export type UnavailableTimeHasDayOfTheWeekUncheckedCreateNestedManyWithoutDayOfTheWeekInput = {
    create?: XOR<Enumerable<UnavailableTimeHasDayOfTheWeekCreateWithoutDayOfTheWeekInput>, Enumerable<UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutDayOfTheWeekInput>>
    connectOrCreate?: Enumerable<UnavailableTimeHasDayOfTheWeekCreateOrConnectWithoutDayOfTheWeekInput>
    createMany?: UnavailableTimeHasDayOfTheWeekCreateManyDayOfTheWeekInputEnvelope
    connect?: Enumerable<UnavailableTimeHasDayOfTheWeekWhereUniqueInput>
  }

  export type UnavailableTimeHasDayOfTheWeekUpdateManyWithoutDayOfTheWeekNestedInput = {
    create?: XOR<Enumerable<UnavailableTimeHasDayOfTheWeekCreateWithoutDayOfTheWeekInput>, Enumerable<UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutDayOfTheWeekInput>>
    connectOrCreate?: Enumerable<UnavailableTimeHasDayOfTheWeekCreateOrConnectWithoutDayOfTheWeekInput>
    upsert?: Enumerable<UnavailableTimeHasDayOfTheWeekUpsertWithWhereUniqueWithoutDayOfTheWeekInput>
    createMany?: UnavailableTimeHasDayOfTheWeekCreateManyDayOfTheWeekInputEnvelope
    set?: Enumerable<UnavailableTimeHasDayOfTheWeekWhereUniqueInput>
    disconnect?: Enumerable<UnavailableTimeHasDayOfTheWeekWhereUniqueInput>
    delete?: Enumerable<UnavailableTimeHasDayOfTheWeekWhereUniqueInput>
    connect?: Enumerable<UnavailableTimeHasDayOfTheWeekWhereUniqueInput>
    update?: Enumerable<UnavailableTimeHasDayOfTheWeekUpdateWithWhereUniqueWithoutDayOfTheWeekInput>
    updateMany?: Enumerable<UnavailableTimeHasDayOfTheWeekUpdateManyWithWhereWithoutDayOfTheWeekInput>
    deleteMany?: Enumerable<UnavailableTimeHasDayOfTheWeekScalarWhereInput>
  }

  export type UnavailableTimeHasDayOfTheWeekUncheckedUpdateManyWithoutDayOfTheWeekNestedInput = {
    create?: XOR<Enumerable<UnavailableTimeHasDayOfTheWeekCreateWithoutDayOfTheWeekInput>, Enumerable<UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutDayOfTheWeekInput>>
    connectOrCreate?: Enumerable<UnavailableTimeHasDayOfTheWeekCreateOrConnectWithoutDayOfTheWeekInput>
    upsert?: Enumerable<UnavailableTimeHasDayOfTheWeekUpsertWithWhereUniqueWithoutDayOfTheWeekInput>
    createMany?: UnavailableTimeHasDayOfTheWeekCreateManyDayOfTheWeekInputEnvelope
    set?: Enumerable<UnavailableTimeHasDayOfTheWeekWhereUniqueInput>
    disconnect?: Enumerable<UnavailableTimeHasDayOfTheWeekWhereUniqueInput>
    delete?: Enumerable<UnavailableTimeHasDayOfTheWeekWhereUniqueInput>
    connect?: Enumerable<UnavailableTimeHasDayOfTheWeekWhereUniqueInput>
    update?: Enumerable<UnavailableTimeHasDayOfTheWeekUpdateWithWhereUniqueWithoutDayOfTheWeekInput>
    updateMany?: Enumerable<UnavailableTimeHasDayOfTheWeekUpdateManyWithWhereWithoutDayOfTheWeekInput>
    deleteMany?: Enumerable<UnavailableTimeHasDayOfTheWeekScalarWhereInput>
  }

  export type CourtCreateNestedOneWithoutUnavailableTimeInput = {
    create?: XOR<CourtCreateWithoutUnavailableTimeInput, CourtUncheckedCreateWithoutUnavailableTimeInput>
    connectOrCreate?: CourtCreateOrConnectWithoutUnavailableTimeInput
    connect?: CourtWhereUniqueInput
  }

  export type UnavailableTimeHasDayOfTheWeekCreateNestedOneWithoutUnavailableTimeInput = {
    create?: XOR<UnavailableTimeHasDayOfTheWeekCreateWithoutUnavailableTimeInput, UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutUnavailableTimeInput>
    connectOrCreate?: UnavailableTimeHasDayOfTheWeekCreateOrConnectWithoutUnavailableTimeInput
    connect?: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
  }

  export type UnavailableTimeHasDayOfTheWeekUncheckedCreateNestedOneWithoutUnavailableTimeInput = {
    create?: XOR<UnavailableTimeHasDayOfTheWeekCreateWithoutUnavailableTimeInput, UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutUnavailableTimeInput>
    connectOrCreate?: UnavailableTimeHasDayOfTheWeekCreateOrConnectWithoutUnavailableTimeInput
    connect?: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
  }

  export type CourtUpdateOneRequiredWithoutUnavailableTimeNestedInput = {
    create?: XOR<CourtCreateWithoutUnavailableTimeInput, CourtUncheckedCreateWithoutUnavailableTimeInput>
    connectOrCreate?: CourtCreateOrConnectWithoutUnavailableTimeInput
    upsert?: CourtUpsertWithoutUnavailableTimeInput
    connect?: CourtWhereUniqueInput
    update?: XOR<CourtUpdateWithoutUnavailableTimeInput, CourtUncheckedUpdateWithoutUnavailableTimeInput>
  }

  export type UnavailableTimeHasDayOfTheWeekUpdateOneWithoutUnavailableTimeNestedInput = {
    create?: XOR<UnavailableTimeHasDayOfTheWeekCreateWithoutUnavailableTimeInput, UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutUnavailableTimeInput>
    connectOrCreate?: UnavailableTimeHasDayOfTheWeekCreateOrConnectWithoutUnavailableTimeInput
    upsert?: UnavailableTimeHasDayOfTheWeekUpsertWithoutUnavailableTimeInput
    disconnect?: boolean
    delete?: boolean
    connect?: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
    update?: XOR<UnavailableTimeHasDayOfTheWeekUpdateWithoutUnavailableTimeInput, UnavailableTimeHasDayOfTheWeekUncheckedUpdateWithoutUnavailableTimeInput>
  }

  export type UnavailableTimeHasDayOfTheWeekUncheckedUpdateOneWithoutUnavailableTimeNestedInput = {
    create?: XOR<UnavailableTimeHasDayOfTheWeekCreateWithoutUnavailableTimeInput, UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutUnavailableTimeInput>
    connectOrCreate?: UnavailableTimeHasDayOfTheWeekCreateOrConnectWithoutUnavailableTimeInput
    upsert?: UnavailableTimeHasDayOfTheWeekUpsertWithoutUnavailableTimeInput
    disconnect?: boolean
    delete?: boolean
    connect?: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
    update?: XOR<UnavailableTimeHasDayOfTheWeekUpdateWithoutUnavailableTimeInput, UnavailableTimeHasDayOfTheWeekUncheckedUpdateWithoutUnavailableTimeInput>
  }

  export type unavailableTimeCreateNestedOneWithoutDaysOfTheWeekInput = {
    create?: XOR<unavailableTimeCreateWithoutDaysOfTheWeekInput, unavailableTimeUncheckedCreateWithoutDaysOfTheWeekInput>
    connectOrCreate?: unavailableTimeCreateOrConnectWithoutDaysOfTheWeekInput
    connect?: unavailableTimeWhereUniqueInput
  }

  export type dayOfTheWeekCreateNestedOneWithoutUnavailableTimeHasDayOfTheWeekInput = {
    create?: XOR<dayOfTheWeekCreateWithoutUnavailableTimeHasDayOfTheWeekInput, dayOfTheWeekUncheckedCreateWithoutUnavailableTimeHasDayOfTheWeekInput>
    connectOrCreate?: dayOfTheWeekCreateOrConnectWithoutUnavailableTimeHasDayOfTheWeekInput
    connect?: dayOfTheWeekWhereUniqueInput
  }

  export type unavailableTimeUpdateOneRequiredWithoutDaysOfTheWeekNestedInput = {
    create?: XOR<unavailableTimeCreateWithoutDaysOfTheWeekInput, unavailableTimeUncheckedCreateWithoutDaysOfTheWeekInput>
    connectOrCreate?: unavailableTimeCreateOrConnectWithoutDaysOfTheWeekInput
    upsert?: unavailableTimeUpsertWithoutDaysOfTheWeekInput
    connect?: unavailableTimeWhereUniqueInput
    update?: XOR<unavailableTimeUpdateWithoutDaysOfTheWeekInput, unavailableTimeUncheckedUpdateWithoutDaysOfTheWeekInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type dayOfTheWeekUpdateOneRequiredWithoutUnavailableTimeHasDayOfTheWeekNestedInput = {
    create?: XOR<dayOfTheWeekCreateWithoutUnavailableTimeHasDayOfTheWeekInput, dayOfTheWeekUncheckedCreateWithoutUnavailableTimeHasDayOfTheWeekInput>
    connectOrCreate?: dayOfTheWeekCreateOrConnectWithoutUnavailableTimeHasDayOfTheWeekInput
    upsert?: dayOfTheWeekUpsertWithoutUnavailableTimeHasDayOfTheWeekInput
    connect?: dayOfTheWeekWhereUniqueInput
    update?: XOR<dayOfTheWeekUpdateWithoutUnavailableTimeHasDayOfTheWeekInput, dayOfTheWeekUncheckedUpdateWithoutUnavailableTimeHasDayOfTheWeekInput>
  }

  export type CourtCreateNestedOneWithoutSportsInput = {
    create?: XOR<CourtCreateWithoutSportsInput, CourtUncheckedCreateWithoutSportsInput>
    connectOrCreate?: CourtCreateOrConnectWithoutSportsInput
    connect?: CourtWhereUniqueInput
  }

  export type SportCreateNestedOneWithoutCourtsInput = {
    create?: XOR<SportCreateWithoutCourtsInput, SportUncheckedCreateWithoutCourtsInput>
    connectOrCreate?: SportCreateOrConnectWithoutCourtsInput
    connect?: SportWhereUniqueInput
  }

  export type CourtUpdateOneRequiredWithoutSportsNestedInput = {
    create?: XOR<CourtCreateWithoutSportsInput, CourtUncheckedCreateWithoutSportsInput>
    connectOrCreate?: CourtCreateOrConnectWithoutSportsInput
    upsert?: CourtUpsertWithoutSportsInput
    connect?: CourtWhereUniqueInput
    update?: XOR<CourtUpdateWithoutSportsInput, CourtUncheckedUpdateWithoutSportsInput>
  }

  export type SportUpdateOneWithoutCourtsNestedInput = {
    create?: XOR<SportCreateWithoutCourtsInput, SportUncheckedCreateWithoutCourtsInput>
    connectOrCreate?: SportCreateOrConnectWithoutCourtsInput
    upsert?: SportUpsertWithoutCourtsInput
    disconnect?: boolean
    delete?: boolean
    connect?: SportWhereUniqueInput
    update?: XOR<SportUpdateWithoutCourtsInput, SportUncheckedUpdateWithoutCourtsInput>
  }

  export type ReservationCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<ReservationCreateWithoutParticipantsInput, ReservationUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutParticipantsInput
    connect?: ReservationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type ReservationUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<ReservationCreateWithoutParticipantsInput, ReservationUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutParticipantsInput
    upsert?: ReservationUpsertWithoutParticipantsInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<ReservationUpdateWithoutParticipantsInput, ReservationUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    upsert?: UserUpsertWithoutReservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type ReservationCreateNestedOneWithoutRequested_participantsInput = {
    create?: XOR<ReservationCreateWithoutRequested_participantsInput, ReservationUncheckedCreateWithoutRequested_participantsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutRequested_participantsInput
    connect?: ReservationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestedReservationsInput = {
    create?: XOR<UserCreateWithoutRequestedReservationsInput, UserUncheckedCreateWithoutRequestedReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestedReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type ReservationUpdateOneRequiredWithoutRequested_participantsNestedInput = {
    create?: XOR<ReservationCreateWithoutRequested_participantsInput, ReservationUncheckedCreateWithoutRequested_participantsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutRequested_participantsInput
    upsert?: ReservationUpsertWithoutRequested_participantsInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<ReservationUpdateWithoutRequested_participantsInput, ReservationUncheckedUpdateWithoutRequested_participantsInput>
  }

  export type UserUpdateOneRequiredWithoutRequestedReservationsNestedInput = {
    create?: XOR<UserCreateWithoutRequestedReservationsInput, UserUncheckedCreateWithoutRequestedReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestedReservationsInput
    upsert?: UserUpsertWithoutRequestedReservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRequestedReservationsInput, UserUncheckedUpdateWithoutRequestedReservationsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ReservationHasUsersCreateWithoutUserInput = {
    reservation: ReservationCreateNestedOneWithoutParticipantsInput
    created_at?: Date | string
  }

  export type ReservationHasUsersUncheckedCreateWithoutUserInput = {
    reservation_id: string
    created_at?: Date | string
  }

  export type ReservationHasUsersCreateOrConnectWithoutUserInput = {
    where: ReservationHasUsersWhereUniqueInput
    create: XOR<ReservationHasUsersCreateWithoutUserInput, ReservationHasUsersUncheckedCreateWithoutUserInput>
  }

  export type ReservationHasUsersCreateManyUserInputEnvelope = {
    data: Enumerable<ReservationHasUsersCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ReservationHasRequestedUsersCreateWithoutUserInput = {
    reservation: ReservationCreateNestedOneWithoutRequested_participantsInput
    created_at?: Date | string
  }

  export type ReservationHasRequestedUsersUncheckedCreateWithoutUserInput = {
    reservation_id: string
    created_at?: Date | string
  }

  export type ReservationHasRequestedUsersCreateOrConnectWithoutUserInput = {
    where: ReservationHasRequestedUsersWhereUniqueInput
    create: XOR<ReservationHasRequestedUsersCreateWithoutUserInput, ReservationHasRequestedUsersUncheckedCreateWithoutUserInput>
  }

  export type ReservationHasRequestedUsersCreateManyUserInputEnvelope = {
    data: Enumerable<ReservationHasRequestedUsersCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutManagerInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    participants?: ReservationHasUsersCreateNestedManyWithoutReservationInput
    requested_participants?: ReservationHasRequestedUsersCreateNestedManyWithoutReservationInput
    max_participants: number
    sport: SportCreateNestedOneWithoutReservationInput
    court: CourtCreateNestedOneWithoutReservationInput
    description: string
  }

  export type ReservationUncheckedCreateWithoutManagerInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    participants?: ReservationHasUsersUncheckedCreateNestedManyWithoutReservationInput
    requested_participants?: ReservationHasRequestedUsersUncheckedCreateNestedManyWithoutReservationInput
    max_participants: number
    sportId: string
    courtId: string
    description: string
  }

  export type ReservationCreateOrConnectWithoutManagerInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutManagerInput, ReservationUncheckedCreateWithoutManagerInput>
  }

  export type ReservationCreateManyManagerInputEnvelope = {
    data: Enumerable<ReservationCreateManyManagerInput>
    skipDuplicates?: boolean
  }

  export type ReservationHasUsersUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservationHasUsersWhereUniqueInput
    update: XOR<ReservationHasUsersUpdateWithoutUserInput, ReservationHasUsersUncheckedUpdateWithoutUserInput>
    create: XOR<ReservationHasUsersCreateWithoutUserInput, ReservationHasUsersUncheckedCreateWithoutUserInput>
  }

  export type ReservationHasUsersUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservationHasUsersWhereUniqueInput
    data: XOR<ReservationHasUsersUpdateWithoutUserInput, ReservationHasUsersUncheckedUpdateWithoutUserInput>
  }

  export type ReservationHasUsersUpdateManyWithWhereWithoutUserInput = {
    where: ReservationHasUsersScalarWhereInput
    data: XOR<ReservationHasUsersUpdateManyMutationInput, ReservationHasUsersUncheckedUpdateManyWithoutReservationsInput>
  }

  export type ReservationHasUsersScalarWhereInput = {
    AND?: Enumerable<ReservationHasUsersScalarWhereInput>
    OR?: Enumerable<ReservationHasUsersScalarWhereInput>
    NOT?: Enumerable<ReservationHasUsersScalarWhereInput>
    reservation_id?: StringFilter | string
    user_id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
  }

  export type ReservationHasRequestedUsersUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservationHasRequestedUsersWhereUniqueInput
    update: XOR<ReservationHasRequestedUsersUpdateWithoutUserInput, ReservationHasRequestedUsersUncheckedUpdateWithoutUserInput>
    create: XOR<ReservationHasRequestedUsersCreateWithoutUserInput, ReservationHasRequestedUsersUncheckedCreateWithoutUserInput>
  }

  export type ReservationHasRequestedUsersUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservationHasRequestedUsersWhereUniqueInput
    data: XOR<ReservationHasRequestedUsersUpdateWithoutUserInput, ReservationHasRequestedUsersUncheckedUpdateWithoutUserInput>
  }

  export type ReservationHasRequestedUsersUpdateManyWithWhereWithoutUserInput = {
    where: ReservationHasRequestedUsersScalarWhereInput
    data: XOR<ReservationHasRequestedUsersUpdateManyMutationInput, ReservationHasRequestedUsersUncheckedUpdateManyWithoutRequestedReservationsInput>
  }

  export type ReservationHasRequestedUsersScalarWhereInput = {
    AND?: Enumerable<ReservationHasRequestedUsersScalarWhereInput>
    OR?: Enumerable<ReservationHasRequestedUsersScalarWhereInput>
    NOT?: Enumerable<ReservationHasRequestedUsersScalarWhereInput>
    reservation_id?: StringFilter | string
    user_id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutManagerInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutManagerInput, ReservationUncheckedUpdateWithoutManagerInput>
    create: XOR<ReservationCreateWithoutManagerInput, ReservationUncheckedCreateWithoutManagerInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutManagerInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutManagerInput, ReservationUncheckedUpdateWithoutManagerInput>
  }

  export type ReservationUpdateManyWithWhereWithoutManagerInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutManagerOfReservationsInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: Enumerable<ReservationScalarWhereInput>
    OR?: Enumerable<ReservationScalarWhereInput>
    NOT?: Enumerable<ReservationScalarWhereInput>
    id?: StringFilter | string
    startDateTime?: DateTimeNullableFilter | Date | string | null
    endDateTime?: DateTimeNullableFilter | Date | string | null
    created_at?: DateTimeFilter | Date | string
    manager_id?: StringFilter | string
    max_participants?: IntFilter | number
    sportId?: StringFilter | string
    courtId?: StringFilter | string
    description?: StringFilter | string
  }

  export type CourtHasSportsCreateWithoutSportInput = {
    court: CourtCreateNestedOneWithoutSportsInput
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type CourtHasSportsUncheckedCreateWithoutSportInput = {
    court_id: string
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type CourtHasSportsCreateOrConnectWithoutSportInput = {
    where: CourtHasSportsWhereUniqueInput
    create: XOR<CourtHasSportsCreateWithoutSportInput, CourtHasSportsUncheckedCreateWithoutSportInput>
  }

  export type CourtHasSportsCreateManySportInputEnvelope = {
    data: Enumerable<CourtHasSportsCreateManySportInput>
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutSportInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    manager: UserCreateNestedOneWithoutManagerOfReservationsInput
    participants?: ReservationHasUsersCreateNestedManyWithoutReservationInput
    requested_participants?: ReservationHasRequestedUsersCreateNestedManyWithoutReservationInput
    max_participants: number
    court: CourtCreateNestedOneWithoutReservationInput
    description: string
  }

  export type ReservationUncheckedCreateWithoutSportInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    manager_id: string
    participants?: ReservationHasUsersUncheckedCreateNestedManyWithoutReservationInput
    requested_participants?: ReservationHasRequestedUsersUncheckedCreateNestedManyWithoutReservationInput
    max_participants: number
    courtId: string
    description: string
  }

  export type ReservationCreateOrConnectWithoutSportInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutSportInput, ReservationUncheckedCreateWithoutSportInput>
  }

  export type ReservationCreateManySportInputEnvelope = {
    data: Enumerable<ReservationCreateManySportInput>
    skipDuplicates?: boolean
  }

  export type CourtHasSportsUpsertWithWhereUniqueWithoutSportInput = {
    where: CourtHasSportsWhereUniqueInput
    update: XOR<CourtHasSportsUpdateWithoutSportInput, CourtHasSportsUncheckedUpdateWithoutSportInput>
    create: XOR<CourtHasSportsCreateWithoutSportInput, CourtHasSportsUncheckedCreateWithoutSportInput>
  }

  export type CourtHasSportsUpdateWithWhereUniqueWithoutSportInput = {
    where: CourtHasSportsWhereUniqueInput
    data: XOR<CourtHasSportsUpdateWithoutSportInput, CourtHasSportsUncheckedUpdateWithoutSportInput>
  }

  export type CourtHasSportsUpdateManyWithWhereWithoutSportInput = {
    where: CourtHasSportsScalarWhereInput
    data: XOR<CourtHasSportsUpdateManyMutationInput, CourtHasSportsUncheckedUpdateManyWithoutCourtsInput>
  }

  export type CourtHasSportsScalarWhereInput = {
    AND?: Enumerable<CourtHasSportsScalarWhereInput>
    OR?: Enumerable<CourtHasSportsScalarWhereInput>
    NOT?: Enumerable<CourtHasSportsScalarWhereInput>
    court_id?: StringFilter | string
    active?: BoolFilter | boolean
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    sportsId?: StringNullableFilter | string | null
  }

  export type ReservationUpsertWithWhereUniqueWithoutSportInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutSportInput, ReservationUncheckedUpdateWithoutSportInput>
    create: XOR<ReservationCreateWithoutSportInput, ReservationUncheckedCreateWithoutSportInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutSportInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutSportInput, ReservationUncheckedUpdateWithoutSportInput>
  }

  export type ReservationUpdateManyWithWhereWithoutSportInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutReservationInput>
  }

  export type CourtHasSportsCreateWithoutCourtInput = {
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    sport?: SportCreateNestedOneWithoutCourtsInput
  }

  export type CourtHasSportsUncheckedCreateWithoutCourtInput = {
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    sportsId?: string | null
  }

  export type CourtHasSportsCreateOrConnectWithoutCourtInput = {
    where: CourtHasSportsWhereUniqueInput
    create: XOR<CourtHasSportsCreateWithoutCourtInput, CourtHasSportsUncheckedCreateWithoutCourtInput>
  }

  export type CourtHasSportsCreateManyCourtInputEnvelope = {
    data: Enumerable<CourtHasSportsCreateManyCourtInput>
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutCourtInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    manager: UserCreateNestedOneWithoutManagerOfReservationsInput
    participants?: ReservationHasUsersCreateNestedManyWithoutReservationInput
    requested_participants?: ReservationHasRequestedUsersCreateNestedManyWithoutReservationInput
    max_participants: number
    sport: SportCreateNestedOneWithoutReservationInput
    description: string
  }

  export type ReservationUncheckedCreateWithoutCourtInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    manager_id: string
    participants?: ReservationHasUsersUncheckedCreateNestedManyWithoutReservationInput
    requested_participants?: ReservationHasRequestedUsersUncheckedCreateNestedManyWithoutReservationInput
    max_participants: number
    sportId: string
    description: string
  }

  export type ReservationCreateOrConnectWithoutCourtInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutCourtInput, ReservationUncheckedCreateWithoutCourtInput>
  }

  export type ReservationCreateManyCourtInputEnvelope = {
    data: Enumerable<ReservationCreateManyCourtInput>
    skipDuplicates?: boolean
  }

  export type unavailableTimeCreateWithoutCourtInput = {
    id?: string
    startDateTime: Date | string
    endDateTime: Date | string
    startTime: Date | string
    endTime: Date | string
    created_at?: Date | string
    daysOfTheWeek?: UnavailableTimeHasDayOfTheWeekCreateNestedOneWithoutUnavailableTimeInput
  }

  export type unavailableTimeUncheckedCreateWithoutCourtInput = {
    id?: string
    startDateTime: Date | string
    endDateTime: Date | string
    startTime: Date | string
    endTime: Date | string
    created_at?: Date | string
    daysOfTheWeek?: UnavailableTimeHasDayOfTheWeekUncheckedCreateNestedOneWithoutUnavailableTimeInput
  }

  export type unavailableTimeCreateOrConnectWithoutCourtInput = {
    where: unavailableTimeWhereUniqueInput
    create: XOR<unavailableTimeCreateWithoutCourtInput, unavailableTimeUncheckedCreateWithoutCourtInput>
  }

  export type unavailableTimeCreateManyCourtInputEnvelope = {
    data: Enumerable<unavailableTimeCreateManyCourtInput>
    skipDuplicates?: boolean
  }

  export type CourtHasSportsUpsertWithWhereUniqueWithoutCourtInput = {
    where: CourtHasSportsWhereUniqueInput
    update: XOR<CourtHasSportsUpdateWithoutCourtInput, CourtHasSportsUncheckedUpdateWithoutCourtInput>
    create: XOR<CourtHasSportsCreateWithoutCourtInput, CourtHasSportsUncheckedCreateWithoutCourtInput>
  }

  export type CourtHasSportsUpdateWithWhereUniqueWithoutCourtInput = {
    where: CourtHasSportsWhereUniqueInput
    data: XOR<CourtHasSportsUpdateWithoutCourtInput, CourtHasSportsUncheckedUpdateWithoutCourtInput>
  }

  export type CourtHasSportsUpdateManyWithWhereWithoutCourtInput = {
    where: CourtHasSportsScalarWhereInput
    data: XOR<CourtHasSportsUpdateManyMutationInput, CourtHasSportsUncheckedUpdateManyWithoutSportsInput>
  }

  export type ReservationUpsertWithWhereUniqueWithoutCourtInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutCourtInput, ReservationUncheckedUpdateWithoutCourtInput>
    create: XOR<ReservationCreateWithoutCourtInput, ReservationUncheckedCreateWithoutCourtInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutCourtInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutCourtInput, ReservationUncheckedUpdateWithoutCourtInput>
  }

  export type ReservationUpdateManyWithWhereWithoutCourtInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutReservationInput>
  }

  export type unavailableTimeUpsertWithWhereUniqueWithoutCourtInput = {
    where: unavailableTimeWhereUniqueInput
    update: XOR<unavailableTimeUpdateWithoutCourtInput, unavailableTimeUncheckedUpdateWithoutCourtInput>
    create: XOR<unavailableTimeCreateWithoutCourtInput, unavailableTimeUncheckedCreateWithoutCourtInput>
  }

  export type unavailableTimeUpdateWithWhereUniqueWithoutCourtInput = {
    where: unavailableTimeWhereUniqueInput
    data: XOR<unavailableTimeUpdateWithoutCourtInput, unavailableTimeUncheckedUpdateWithoutCourtInput>
  }

  export type unavailableTimeUpdateManyWithWhereWithoutCourtInput = {
    where: unavailableTimeScalarWhereInput
    data: XOR<unavailableTimeUpdateManyMutationInput, unavailableTimeUncheckedUpdateManyWithoutUnavailableTimeInput>
  }

  export type unavailableTimeScalarWhereInput = {
    AND?: Enumerable<unavailableTimeScalarWhereInput>
    OR?: Enumerable<unavailableTimeScalarWhereInput>
    NOT?: Enumerable<unavailableTimeScalarWhereInput>
    id?: StringFilter | string
    startDateTime?: DateTimeFilter | Date | string
    endDateTime?: DateTimeFilter | Date | string
    startTime?: DateTimeFilter | Date | string
    endTime?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
    courtId?: StringFilter | string
  }

  export type UserCreateWithoutManagerOfReservationsInput = {
    id?: string
    name: string
    ra: number
    password: string
    email: string
    campi: string
    role?: string
    reservations?: ReservationHasUsersCreateNestedManyWithoutUserInput
    requestedReservations?: ReservationHasRequestedUsersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagerOfReservationsInput = {
    id?: string
    name: string
    ra: number
    password: string
    email: string
    campi: string
    role?: string
    reservations?: ReservationHasUsersUncheckedCreateNestedManyWithoutUserInput
    requestedReservations?: ReservationHasRequestedUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagerOfReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagerOfReservationsInput, UserUncheckedCreateWithoutManagerOfReservationsInput>
  }

  export type ReservationHasUsersCreateWithoutReservationInput = {
    user: UserCreateNestedOneWithoutReservationsInput
    created_at?: Date | string
  }

  export type ReservationHasUsersUncheckedCreateWithoutReservationInput = {
    user_id: string
    created_at?: Date | string
  }

  export type ReservationHasUsersCreateOrConnectWithoutReservationInput = {
    where: ReservationHasUsersWhereUniqueInput
    create: XOR<ReservationHasUsersCreateWithoutReservationInput, ReservationHasUsersUncheckedCreateWithoutReservationInput>
  }

  export type ReservationHasUsersCreateManyReservationInputEnvelope = {
    data: Enumerable<ReservationHasUsersCreateManyReservationInput>
    skipDuplicates?: boolean
  }

  export type ReservationHasRequestedUsersCreateWithoutReservationInput = {
    user: UserCreateNestedOneWithoutRequestedReservationsInput
    created_at?: Date | string
  }

  export type ReservationHasRequestedUsersUncheckedCreateWithoutReservationInput = {
    user_id: string
    created_at?: Date | string
  }

  export type ReservationHasRequestedUsersCreateOrConnectWithoutReservationInput = {
    where: ReservationHasRequestedUsersWhereUniqueInput
    create: XOR<ReservationHasRequestedUsersCreateWithoutReservationInput, ReservationHasRequestedUsersUncheckedCreateWithoutReservationInput>
  }

  export type ReservationHasRequestedUsersCreateManyReservationInputEnvelope = {
    data: Enumerable<ReservationHasRequestedUsersCreateManyReservationInput>
    skipDuplicates?: boolean
  }

  export type SportCreateWithoutReservationInput = {
    id?: string
    name: string
    maxAmount?: string | null
    courts?: CourtHasSportsCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutReservationInput = {
    id?: string
    name: string
    maxAmount?: string | null
    courts?: CourtHasSportsUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutReservationInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutReservationInput, SportUncheckedCreateWithoutReservationInput>
  }

  export type CourtCreateWithoutReservationInput = {
    id?: string
    name: string
    sports?: CourtHasSportsCreateNestedManyWithoutCourtInput
    unavailableTime?: unavailableTimeCreateNestedManyWithoutCourtInput
  }

  export type CourtUncheckedCreateWithoutReservationInput = {
    id?: string
    name: string
    sports?: CourtHasSportsUncheckedCreateNestedManyWithoutCourtInput
    unavailableTime?: unavailableTimeUncheckedCreateNestedManyWithoutCourtInput
  }

  export type CourtCreateOrConnectWithoutReservationInput = {
    where: CourtWhereUniqueInput
    create: XOR<CourtCreateWithoutReservationInput, CourtUncheckedCreateWithoutReservationInput>
  }

  export type UserUpsertWithoutManagerOfReservationsInput = {
    update: XOR<UserUpdateWithoutManagerOfReservationsInput, UserUncheckedUpdateWithoutManagerOfReservationsInput>
    create: XOR<UserCreateWithoutManagerOfReservationsInput, UserUncheckedCreateWithoutManagerOfReservationsInput>
  }

  export type UserUpdateWithoutManagerOfReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ra?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campi?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationHasUsersUpdateManyWithoutUserNestedInput
    requestedReservations?: ReservationHasRequestedUsersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagerOfReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ra?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campi?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationHasUsersUncheckedUpdateManyWithoutUserNestedInput
    requestedReservations?: ReservationHasRequestedUsersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReservationHasUsersUpsertWithWhereUniqueWithoutReservationInput = {
    where: ReservationHasUsersWhereUniqueInput
    update: XOR<ReservationHasUsersUpdateWithoutReservationInput, ReservationHasUsersUncheckedUpdateWithoutReservationInput>
    create: XOR<ReservationHasUsersCreateWithoutReservationInput, ReservationHasUsersUncheckedCreateWithoutReservationInput>
  }

  export type ReservationHasUsersUpdateWithWhereUniqueWithoutReservationInput = {
    where: ReservationHasUsersWhereUniqueInput
    data: XOR<ReservationHasUsersUpdateWithoutReservationInput, ReservationHasUsersUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationHasUsersUpdateManyWithWhereWithoutReservationInput = {
    where: ReservationHasUsersScalarWhereInput
    data: XOR<ReservationHasUsersUpdateManyMutationInput, ReservationHasUsersUncheckedUpdateManyWithoutParticipantsInput>
  }

  export type ReservationHasRequestedUsersUpsertWithWhereUniqueWithoutReservationInput = {
    where: ReservationHasRequestedUsersWhereUniqueInput
    update: XOR<ReservationHasRequestedUsersUpdateWithoutReservationInput, ReservationHasRequestedUsersUncheckedUpdateWithoutReservationInput>
    create: XOR<ReservationHasRequestedUsersCreateWithoutReservationInput, ReservationHasRequestedUsersUncheckedCreateWithoutReservationInput>
  }

  export type ReservationHasRequestedUsersUpdateWithWhereUniqueWithoutReservationInput = {
    where: ReservationHasRequestedUsersWhereUniqueInput
    data: XOR<ReservationHasRequestedUsersUpdateWithoutReservationInput, ReservationHasRequestedUsersUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationHasRequestedUsersUpdateManyWithWhereWithoutReservationInput = {
    where: ReservationHasRequestedUsersScalarWhereInput
    data: XOR<ReservationHasRequestedUsersUpdateManyMutationInput, ReservationHasRequestedUsersUncheckedUpdateManyWithoutRequested_participantsInput>
  }

  export type SportUpsertWithoutReservationInput = {
    update: XOR<SportUpdateWithoutReservationInput, SportUncheckedUpdateWithoutReservationInput>
    create: XOR<SportCreateWithoutReservationInput, SportUncheckedCreateWithoutReservationInput>
  }

  export type SportUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    courts?: CourtHasSportsUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    courts?: CourtHasSportsUncheckedUpdateManyWithoutSportNestedInput
  }

  export type CourtUpsertWithoutReservationInput = {
    update: XOR<CourtUpdateWithoutReservationInput, CourtUncheckedUpdateWithoutReservationInput>
    create: XOR<CourtCreateWithoutReservationInput, CourtUncheckedCreateWithoutReservationInput>
  }

  export type CourtUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sports?: CourtHasSportsUpdateManyWithoutCourtNestedInput
    unavailableTime?: unavailableTimeUpdateManyWithoutCourtNestedInput
  }

  export type CourtUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sports?: CourtHasSportsUncheckedUpdateManyWithoutCourtNestedInput
    unavailableTime?: unavailableTimeUncheckedUpdateManyWithoutCourtNestedInput
  }

  export type UnavailableTimeHasDayOfTheWeekCreateWithoutDayOfTheWeekInput = {
    unavailableTime: unavailableTimeCreateNestedOneWithoutDaysOfTheWeekInput
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutDayOfTheWeekInput = {
    unavailableTimeId: string
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type UnavailableTimeHasDayOfTheWeekCreateOrConnectWithoutDayOfTheWeekInput = {
    where: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
    create: XOR<UnavailableTimeHasDayOfTheWeekCreateWithoutDayOfTheWeekInput, UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutDayOfTheWeekInput>
  }

  export type UnavailableTimeHasDayOfTheWeekCreateManyDayOfTheWeekInputEnvelope = {
    data: Enumerable<UnavailableTimeHasDayOfTheWeekCreateManyDayOfTheWeekInput>
    skipDuplicates?: boolean
  }

  export type UnavailableTimeHasDayOfTheWeekUpsertWithWhereUniqueWithoutDayOfTheWeekInput = {
    where: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
    update: XOR<UnavailableTimeHasDayOfTheWeekUpdateWithoutDayOfTheWeekInput, UnavailableTimeHasDayOfTheWeekUncheckedUpdateWithoutDayOfTheWeekInput>
    create: XOR<UnavailableTimeHasDayOfTheWeekCreateWithoutDayOfTheWeekInput, UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutDayOfTheWeekInput>
  }

  export type UnavailableTimeHasDayOfTheWeekUpdateWithWhereUniqueWithoutDayOfTheWeekInput = {
    where: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
    data: XOR<UnavailableTimeHasDayOfTheWeekUpdateWithoutDayOfTheWeekInput, UnavailableTimeHasDayOfTheWeekUncheckedUpdateWithoutDayOfTheWeekInput>
  }

  export type UnavailableTimeHasDayOfTheWeekUpdateManyWithWhereWithoutDayOfTheWeekInput = {
    where: UnavailableTimeHasDayOfTheWeekScalarWhereInput
    data: XOR<UnavailableTimeHasDayOfTheWeekUpdateManyMutationInput, UnavailableTimeHasDayOfTheWeekUncheckedUpdateManyWithoutUnavailableTimeHasDayOfTheWeekInput>
  }

  export type UnavailableTimeHasDayOfTheWeekScalarWhereInput = {
    AND?: Enumerable<UnavailableTimeHasDayOfTheWeekScalarWhereInput>
    OR?: Enumerable<UnavailableTimeHasDayOfTheWeekScalarWhereInput>
    NOT?: Enumerable<UnavailableTimeHasDayOfTheWeekScalarWhereInput>
    unavailableTimeId?: StringFilter | string
    active?: BoolFilter | boolean
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    dayOfTheWeekId?: StringFilter | string
  }

  export type CourtCreateWithoutUnavailableTimeInput = {
    id?: string
    name: string
    sports?: CourtHasSportsCreateNestedManyWithoutCourtInput
    reservation?: ReservationCreateNestedManyWithoutCourtInput
  }

  export type CourtUncheckedCreateWithoutUnavailableTimeInput = {
    id?: string
    name: string
    sports?: CourtHasSportsUncheckedCreateNestedManyWithoutCourtInput
    reservation?: ReservationUncheckedCreateNestedManyWithoutCourtInput
  }

  export type CourtCreateOrConnectWithoutUnavailableTimeInput = {
    where: CourtWhereUniqueInput
    create: XOR<CourtCreateWithoutUnavailableTimeInput, CourtUncheckedCreateWithoutUnavailableTimeInput>
  }

  export type UnavailableTimeHasDayOfTheWeekCreateWithoutUnavailableTimeInput = {
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    dayOfTheWeek: dayOfTheWeekCreateNestedOneWithoutUnavailableTimeHasDayOfTheWeekInput
  }

  export type UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutUnavailableTimeInput = {
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    dayOfTheWeekId: string
  }

  export type UnavailableTimeHasDayOfTheWeekCreateOrConnectWithoutUnavailableTimeInput = {
    where: UnavailableTimeHasDayOfTheWeekWhereUniqueInput
    create: XOR<UnavailableTimeHasDayOfTheWeekCreateWithoutUnavailableTimeInput, UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutUnavailableTimeInput>
  }

  export type CourtUpsertWithoutUnavailableTimeInput = {
    update: XOR<CourtUpdateWithoutUnavailableTimeInput, CourtUncheckedUpdateWithoutUnavailableTimeInput>
    create: XOR<CourtCreateWithoutUnavailableTimeInput, CourtUncheckedCreateWithoutUnavailableTimeInput>
  }

  export type CourtUpdateWithoutUnavailableTimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sports?: CourtHasSportsUpdateManyWithoutCourtNestedInput
    reservation?: ReservationUpdateManyWithoutCourtNestedInput
  }

  export type CourtUncheckedUpdateWithoutUnavailableTimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sports?: CourtHasSportsUncheckedUpdateManyWithoutCourtNestedInput
    reservation?: ReservationUncheckedUpdateManyWithoutCourtNestedInput
  }

  export type UnavailableTimeHasDayOfTheWeekUpsertWithoutUnavailableTimeInput = {
    update: XOR<UnavailableTimeHasDayOfTheWeekUpdateWithoutUnavailableTimeInput, UnavailableTimeHasDayOfTheWeekUncheckedUpdateWithoutUnavailableTimeInput>
    create: XOR<UnavailableTimeHasDayOfTheWeekCreateWithoutUnavailableTimeInput, UnavailableTimeHasDayOfTheWeekUncheckedCreateWithoutUnavailableTimeInput>
  }

  export type UnavailableTimeHasDayOfTheWeekUpdateWithoutUnavailableTimeInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dayOfTheWeek?: dayOfTheWeekUpdateOneRequiredWithoutUnavailableTimeHasDayOfTheWeekNestedInput
  }

  export type UnavailableTimeHasDayOfTheWeekUncheckedUpdateWithoutUnavailableTimeInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dayOfTheWeekId?: StringFieldUpdateOperationsInput | string
  }

  export type unavailableTimeCreateWithoutDaysOfTheWeekInput = {
    id?: string
    startDateTime: Date | string
    endDateTime: Date | string
    startTime: Date | string
    endTime: Date | string
    court: CourtCreateNestedOneWithoutUnavailableTimeInput
    created_at?: Date | string
  }

  export type unavailableTimeUncheckedCreateWithoutDaysOfTheWeekInput = {
    id?: string
    startDateTime: Date | string
    endDateTime: Date | string
    startTime: Date | string
    endTime: Date | string
    created_at?: Date | string
    courtId: string
  }

  export type unavailableTimeCreateOrConnectWithoutDaysOfTheWeekInput = {
    where: unavailableTimeWhereUniqueInput
    create: XOR<unavailableTimeCreateWithoutDaysOfTheWeekInput, unavailableTimeUncheckedCreateWithoutDaysOfTheWeekInput>
  }

  export type dayOfTheWeekCreateWithoutUnavailableTimeHasDayOfTheWeekInput = {
    id?: string
    name: string
  }

  export type dayOfTheWeekUncheckedCreateWithoutUnavailableTimeHasDayOfTheWeekInput = {
    id?: string
    name: string
  }

  export type dayOfTheWeekCreateOrConnectWithoutUnavailableTimeHasDayOfTheWeekInput = {
    where: dayOfTheWeekWhereUniqueInput
    create: XOR<dayOfTheWeekCreateWithoutUnavailableTimeHasDayOfTheWeekInput, dayOfTheWeekUncheckedCreateWithoutUnavailableTimeHasDayOfTheWeekInput>
  }

  export type unavailableTimeUpsertWithoutDaysOfTheWeekInput = {
    update: XOR<unavailableTimeUpdateWithoutDaysOfTheWeekInput, unavailableTimeUncheckedUpdateWithoutDaysOfTheWeekInput>
    create: XOR<unavailableTimeCreateWithoutDaysOfTheWeekInput, unavailableTimeUncheckedCreateWithoutDaysOfTheWeekInput>
  }

  export type unavailableTimeUpdateWithoutDaysOfTheWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    court?: CourtUpdateOneRequiredWithoutUnavailableTimeNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type unavailableTimeUncheckedUpdateWithoutDaysOfTheWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courtId?: StringFieldUpdateOperationsInput | string
  }

  export type dayOfTheWeekUpsertWithoutUnavailableTimeHasDayOfTheWeekInput = {
    update: XOR<dayOfTheWeekUpdateWithoutUnavailableTimeHasDayOfTheWeekInput, dayOfTheWeekUncheckedUpdateWithoutUnavailableTimeHasDayOfTheWeekInput>
    create: XOR<dayOfTheWeekCreateWithoutUnavailableTimeHasDayOfTheWeekInput, dayOfTheWeekUncheckedCreateWithoutUnavailableTimeHasDayOfTheWeekInput>
  }

  export type dayOfTheWeekUpdateWithoutUnavailableTimeHasDayOfTheWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type dayOfTheWeekUncheckedUpdateWithoutUnavailableTimeHasDayOfTheWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourtCreateWithoutSportsInput = {
    id?: string
    name: string
    reservation?: ReservationCreateNestedManyWithoutCourtInput
    unavailableTime?: unavailableTimeCreateNestedManyWithoutCourtInput
  }

  export type CourtUncheckedCreateWithoutSportsInput = {
    id?: string
    name: string
    reservation?: ReservationUncheckedCreateNestedManyWithoutCourtInput
    unavailableTime?: unavailableTimeUncheckedCreateNestedManyWithoutCourtInput
  }

  export type CourtCreateOrConnectWithoutSportsInput = {
    where: CourtWhereUniqueInput
    create: XOR<CourtCreateWithoutSportsInput, CourtUncheckedCreateWithoutSportsInput>
  }

  export type SportCreateWithoutCourtsInput = {
    id?: string
    name: string
    maxAmount?: string | null
    reservation?: ReservationCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutCourtsInput = {
    id?: string
    name: string
    maxAmount?: string | null
    reservation?: ReservationUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutCourtsInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutCourtsInput, SportUncheckedCreateWithoutCourtsInput>
  }

  export type CourtUpsertWithoutSportsInput = {
    update: XOR<CourtUpdateWithoutSportsInput, CourtUncheckedUpdateWithoutSportsInput>
    create: XOR<CourtCreateWithoutSportsInput, CourtUncheckedCreateWithoutSportsInput>
  }

  export type CourtUpdateWithoutSportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    reservation?: ReservationUpdateManyWithoutCourtNestedInput
    unavailableTime?: unavailableTimeUpdateManyWithoutCourtNestedInput
  }

  export type CourtUncheckedUpdateWithoutSportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    reservation?: ReservationUncheckedUpdateManyWithoutCourtNestedInput
    unavailableTime?: unavailableTimeUncheckedUpdateManyWithoutCourtNestedInput
  }

  export type SportUpsertWithoutCourtsInput = {
    update: XOR<SportUpdateWithoutCourtsInput, SportUncheckedUpdateWithoutCourtsInput>
    create: XOR<SportCreateWithoutCourtsInput, SportUncheckedCreateWithoutCourtsInput>
  }

  export type SportUpdateWithoutCourtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: ReservationUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutCourtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: ReservationUncheckedUpdateManyWithoutSportNestedInput
  }

  export type ReservationCreateWithoutParticipantsInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    manager: UserCreateNestedOneWithoutManagerOfReservationsInput
    requested_participants?: ReservationHasRequestedUsersCreateNestedManyWithoutReservationInput
    max_participants: number
    sport: SportCreateNestedOneWithoutReservationInput
    court: CourtCreateNestedOneWithoutReservationInput
    description: string
  }

  export type ReservationUncheckedCreateWithoutParticipantsInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    manager_id: string
    requested_participants?: ReservationHasRequestedUsersUncheckedCreateNestedManyWithoutReservationInput
    max_participants: number
    sportId: string
    courtId: string
    description: string
  }

  export type ReservationCreateOrConnectWithoutParticipantsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutParticipantsInput, ReservationUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutReservationsInput = {
    id?: string
    name: string
    ra: number
    password: string
    email: string
    campi: string
    role?: string
    requestedReservations?: ReservationHasRequestedUsersCreateNestedManyWithoutUserInput
    managerOfReservations?: ReservationCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutReservationsInput = {
    id?: string
    name: string
    ra: number
    password: string
    email: string
    campi: string
    role?: string
    requestedReservations?: ReservationHasRequestedUsersUncheckedCreateNestedManyWithoutUserInput
    managerOfReservations?: ReservationUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
  }

  export type ReservationUpsertWithoutParticipantsInput = {
    update: XOR<ReservationUpdateWithoutParticipantsInput, ReservationUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ReservationCreateWithoutParticipantsInput, ReservationUncheckedCreateWithoutParticipantsInput>
  }

  export type ReservationUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutManagerOfReservationsNestedInput
    requested_participants?: ReservationHasRequestedUsersUpdateManyWithoutReservationNestedInput
    max_participants?: IntFieldUpdateOperationsInput | number
    sport?: SportUpdateOneRequiredWithoutReservationNestedInput
    court?: CourtUpdateOneRequiredWithoutReservationNestedInput
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manager_id?: StringFieldUpdateOperationsInput | string
    requested_participants?: ReservationHasRequestedUsersUncheckedUpdateManyWithoutReservationNestedInput
    max_participants?: IntFieldUpdateOperationsInput | number
    sportId?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutReservationsInput = {
    update: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
  }

  export type UserUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ra?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campi?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    requestedReservations?: ReservationHasRequestedUsersUpdateManyWithoutUserNestedInput
    managerOfReservations?: ReservationUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ra?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campi?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    requestedReservations?: ReservationHasRequestedUsersUncheckedUpdateManyWithoutUserNestedInput
    managerOfReservations?: ReservationUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type ReservationCreateWithoutRequested_participantsInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    manager: UserCreateNestedOneWithoutManagerOfReservationsInput
    participants?: ReservationHasUsersCreateNestedManyWithoutReservationInput
    max_participants: number
    sport: SportCreateNestedOneWithoutReservationInput
    court: CourtCreateNestedOneWithoutReservationInput
    description: string
  }

  export type ReservationUncheckedCreateWithoutRequested_participantsInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    manager_id: string
    participants?: ReservationHasUsersUncheckedCreateNestedManyWithoutReservationInput
    max_participants: number
    sportId: string
    courtId: string
    description: string
  }

  export type ReservationCreateOrConnectWithoutRequested_participantsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutRequested_participantsInput, ReservationUncheckedCreateWithoutRequested_participantsInput>
  }

  export type UserCreateWithoutRequestedReservationsInput = {
    id?: string
    name: string
    ra: number
    password: string
    email: string
    campi: string
    role?: string
    reservations?: ReservationHasUsersCreateNestedManyWithoutUserInput
    managerOfReservations?: ReservationCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutRequestedReservationsInput = {
    id?: string
    name: string
    ra: number
    password: string
    email: string
    campi: string
    role?: string
    reservations?: ReservationHasUsersUncheckedCreateNestedManyWithoutUserInput
    managerOfReservations?: ReservationUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutRequestedReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestedReservationsInput, UserUncheckedCreateWithoutRequestedReservationsInput>
  }

  export type ReservationUpsertWithoutRequested_participantsInput = {
    update: XOR<ReservationUpdateWithoutRequested_participantsInput, ReservationUncheckedUpdateWithoutRequested_participantsInput>
    create: XOR<ReservationCreateWithoutRequested_participantsInput, ReservationUncheckedCreateWithoutRequested_participantsInput>
  }

  export type ReservationUpdateWithoutRequested_participantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutManagerOfReservationsNestedInput
    participants?: ReservationHasUsersUpdateManyWithoutReservationNestedInput
    max_participants?: IntFieldUpdateOperationsInput | number
    sport?: SportUpdateOneRequiredWithoutReservationNestedInput
    court?: CourtUpdateOneRequiredWithoutReservationNestedInput
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateWithoutRequested_participantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manager_id?: StringFieldUpdateOperationsInput | string
    participants?: ReservationHasUsersUncheckedUpdateManyWithoutReservationNestedInput
    max_participants?: IntFieldUpdateOperationsInput | number
    sportId?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutRequestedReservationsInput = {
    update: XOR<UserUpdateWithoutRequestedReservationsInput, UserUncheckedUpdateWithoutRequestedReservationsInput>
    create: XOR<UserCreateWithoutRequestedReservationsInput, UserUncheckedCreateWithoutRequestedReservationsInput>
  }

  export type UserUpdateWithoutRequestedReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ra?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campi?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationHasUsersUpdateManyWithoutUserNestedInput
    managerOfReservations?: ReservationUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestedReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ra?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campi?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationHasUsersUncheckedUpdateManyWithoutUserNestedInput
    managerOfReservations?: ReservationUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type ReservationHasUsersCreateManyUserInput = {
    reservation_id: string
    created_at?: Date | string
  }

  export type ReservationHasRequestedUsersCreateManyUserInput = {
    reservation_id: string
    created_at?: Date | string
  }

  export type ReservationCreateManyManagerInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    max_participants: number
    sportId: string
    courtId: string
    description: string
  }

  export type ReservationHasUsersUpdateWithoutUserInput = {
    reservation?: ReservationUpdateOneRequiredWithoutParticipantsNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasUsersUncheckedUpdateWithoutUserInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasUsersUncheckedUpdateManyWithoutReservationsInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasRequestedUsersUpdateWithoutUserInput = {
    reservation?: ReservationUpdateOneRequiredWithoutRequested_participantsNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasRequestedUsersUncheckedUpdateWithoutUserInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasRequestedUsersUncheckedUpdateManyWithoutRequestedReservationsInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ReservationHasUsersUpdateManyWithoutReservationNestedInput
    requested_participants?: ReservationHasRequestedUsersUpdateManyWithoutReservationNestedInput
    max_participants?: IntFieldUpdateOperationsInput | number
    sport?: SportUpdateOneRequiredWithoutReservationNestedInput
    court?: CourtUpdateOneRequiredWithoutReservationNestedInput
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ReservationHasUsersUncheckedUpdateManyWithoutReservationNestedInput
    requested_participants?: ReservationHasRequestedUsersUncheckedUpdateManyWithoutReservationNestedInput
    max_participants?: IntFieldUpdateOperationsInput | number
    sportId?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateManyWithoutManagerOfReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: IntFieldUpdateOperationsInput | number
    sportId?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CourtHasSportsCreateManySportInput = {
    court_id: string
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type ReservationCreateManySportInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    manager_id: string
    max_participants: number
    courtId: string
    description: string
  }

  export type CourtHasSportsUpdateWithoutSportInput = {
    court?: CourtUpdateOneRequiredWithoutSportsNestedInput
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourtHasSportsUncheckedUpdateWithoutSportInput = {
    court_id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourtHasSportsUncheckedUpdateManyWithoutCourtsInput = {
    court_id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReservationUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutManagerOfReservationsNestedInput
    participants?: ReservationHasUsersUpdateManyWithoutReservationNestedInput
    requested_participants?: ReservationHasRequestedUsersUpdateManyWithoutReservationNestedInput
    max_participants?: IntFieldUpdateOperationsInput | number
    court?: CourtUpdateOneRequiredWithoutReservationNestedInput
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manager_id?: StringFieldUpdateOperationsInput | string
    participants?: ReservationHasUsersUncheckedUpdateManyWithoutReservationNestedInput
    requested_participants?: ReservationHasRequestedUsersUncheckedUpdateManyWithoutReservationNestedInput
    max_participants?: IntFieldUpdateOperationsInput | number
    courtId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateManyWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manager_id?: StringFieldUpdateOperationsInput | string
    max_participants?: IntFieldUpdateOperationsInput | number
    courtId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CourtHasSportsCreateManyCourtInput = {
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    sportsId?: string | null
  }

  export type ReservationCreateManyCourtInput = {
    id?: string
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    created_at?: Date | string
    manager_id: string
    max_participants: number
    sportId: string
    description: string
  }

  export type unavailableTimeCreateManyCourtInput = {
    id?: string
    startDateTime: Date | string
    endDateTime: Date | string
    startTime: Date | string
    endTime: Date | string
    created_at?: Date | string
  }

  export type CourtHasSportsUpdateWithoutCourtInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sport?: SportUpdateOneWithoutCourtsNestedInput
  }

  export type CourtHasSportsUncheckedUpdateWithoutCourtInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sportsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourtHasSportsUncheckedUpdateManyWithoutSportsInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sportsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationUpdateWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutManagerOfReservationsNestedInput
    participants?: ReservationHasUsersUpdateManyWithoutReservationNestedInput
    requested_participants?: ReservationHasRequestedUsersUpdateManyWithoutReservationNestedInput
    max_participants?: IntFieldUpdateOperationsInput | number
    sport?: SportUpdateOneRequiredWithoutReservationNestedInput
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manager_id?: StringFieldUpdateOperationsInput | string
    participants?: ReservationHasUsersUncheckedUpdateManyWithoutReservationNestedInput
    requested_participants?: ReservationHasRequestedUsersUncheckedUpdateManyWithoutReservationNestedInput
    max_participants?: IntFieldUpdateOperationsInput | number
    sportId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type unavailableTimeUpdateWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daysOfTheWeek?: UnavailableTimeHasDayOfTheWeekUpdateOneWithoutUnavailableTimeNestedInput
  }

  export type unavailableTimeUncheckedUpdateWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daysOfTheWeek?: UnavailableTimeHasDayOfTheWeekUncheckedUpdateOneWithoutUnavailableTimeNestedInput
  }

  export type unavailableTimeUncheckedUpdateManyWithoutUnavailableTimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasUsersCreateManyReservationInput = {
    user_id: string
    created_at?: Date | string
  }

  export type ReservationHasRequestedUsersCreateManyReservationInput = {
    user_id: string
    created_at?: Date | string
  }

  export type ReservationHasUsersUpdateWithoutReservationInput = {
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasUsersUncheckedUpdateWithoutReservationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasUsersUncheckedUpdateManyWithoutParticipantsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasRequestedUsersUpdateWithoutReservationInput = {
    user?: UserUpdateOneRequiredWithoutRequestedReservationsNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasRequestedUsersUncheckedUpdateWithoutReservationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationHasRequestedUsersUncheckedUpdateManyWithoutRequested_participantsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnavailableTimeHasDayOfTheWeekCreateManyDayOfTheWeekInput = {
    unavailableTimeId: string
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type UnavailableTimeHasDayOfTheWeekUpdateWithoutDayOfTheWeekInput = {
    unavailableTime?: unavailableTimeUpdateOneRequiredWithoutDaysOfTheWeekNestedInput
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UnavailableTimeHasDayOfTheWeekUncheckedUpdateWithoutDayOfTheWeekInput = {
    unavailableTimeId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UnavailableTimeHasDayOfTheWeekUncheckedUpdateManyWithoutUnavailableTimeHasDayOfTheWeekInput = {
    unavailableTimeId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}