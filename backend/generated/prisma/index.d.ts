
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model inquiry
 * 
 */
export type inquiry = $Result.DefaultSelection<Prisma.$inquiryPayload>
/**
 * Model notice
 * 
 */
export type notice = $Result.DefaultSelection<Prisma.$noticePayload>
/**
 * Model payment
 * 
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>
/**
 * Model pc
 * 
 */
export type pc = $Result.DefaultSelection<Prisma.$pcPayload>
/**
 * Model rental
 * 
 */
export type rental = $Result.DefaultSelection<Prisma.$rentalPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const notice_type: {
  GENERAL: 'GENERAL',
  MAINTENANCE: 'MAINTENANCE',
  UPDATE: 'UPDATE'
};

export type notice_type = (typeof notice_type)[keyof typeof notice_type]


export const payment_method: {
  CARD: 'CARD',
  BANK_TRANSFER: 'BANK_TRANSFER',
  PAYPAL: 'PAYPAL'
};

export type payment_method = (typeof payment_method)[keyof typeof payment_method]


export const pc_state: {
  AVAILABLE: 'AVAILABLE',
  IN_USE: 'IN_USE',
  MAINTENANCE: 'MAINTENANCE'
};

export type pc_state = (typeof pc_state)[keyof typeof pc_state]


export const inquiry_status: {
  PENDING: 'PENDING',
  ANSWERED: 'ANSWERED',
  CLOSED: 'CLOSED'
};

export type inquiry_status = (typeof inquiry_status)[keyof typeof inquiry_status]


export const payment_status: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED'
};

export type payment_status = (typeof payment_status)[keyof typeof payment_status]


export const pc_power_status: {
  ON: 'ON',
  OFF: 'OFF'
};

export type pc_power_status = (typeof pc_power_status)[keyof typeof pc_power_status]


export const user_role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type user_role = (typeof user_role)[keyof typeof user_role]


export const rental_status: {
  ACTIVE: 'ACTIVE',
  ENDED: 'ENDED',
  CANCELLED: 'CANCELLED'
};

export type rental_status = (typeof rental_status)[keyof typeof rental_status]


export const user_status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  BANNED: 'BANNED'
};

export type user_status = (typeof user_status)[keyof typeof user_status]

}

export type notice_type = $Enums.notice_type

export const notice_type: typeof $Enums.notice_type

export type payment_method = $Enums.payment_method

export const payment_method: typeof $Enums.payment_method

export type pc_state = $Enums.pc_state

export const pc_state: typeof $Enums.pc_state

export type inquiry_status = $Enums.inquiry_status

export const inquiry_status: typeof $Enums.inquiry_status

export type payment_status = $Enums.payment_status

export const payment_status: typeof $Enums.payment_status

export type pc_power_status = $Enums.pc_power_status

export const pc_power_status: typeof $Enums.pc_power_status

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

export type rental_status = $Enums.rental_status

export const rental_status: typeof $Enums.rental_status

export type user_status = $Enums.user_status

export const user_status: typeof $Enums.user_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Inquiries
 * const inquiries = await prisma.inquiry.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Inquiries
   * const inquiries = await prisma.inquiry.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.inquiry`: Exposes CRUD operations for the **inquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquiries
    * const inquiries = await prisma.inquiry.findMany()
    * ```
    */
  get inquiry(): Prisma.inquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notice`: Exposes CRUD operations for the **notice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notices
    * const notices = await prisma.notice.findMany()
    * ```
    */
  get notice(): Prisma.noticeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.paymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pc`: Exposes CRUD operations for the **pc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pcs
    * const pcs = await prisma.pc.findMany()
    * ```
    */
  get pc(): Prisma.pcDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rental`: Exposes CRUD operations for the **rental** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rentals
    * const rentals = await prisma.rental.findMany()
    * ```
    */
  get rental(): Prisma.rentalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    inquiry: 'inquiry',
    notice: 'notice',
    payment: 'payment',
    pc: 'pc',
    rental: 'rental',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "inquiry" | "notice" | "payment" | "pc" | "rental" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      inquiry: {
        payload: Prisma.$inquiryPayload<ExtArgs>
        fields: Prisma.inquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          findFirst: {
            args: Prisma.inquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          findMany: {
            args: Prisma.inquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>[]
          }
          create: {
            args: Prisma.inquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          createMany: {
            args: Prisma.inquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.inquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          update: {
            args: Prisma.inquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          deleteMany: {
            args: Prisma.inquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiry>
          }
          groupBy: {
            args: Prisma.inquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.inquiryCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number
          }
        }
      }
      notice: {
        payload: Prisma.$noticePayload<ExtArgs>
        fields: Prisma.noticeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.noticeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noticePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.noticeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noticePayload>
          }
          findFirst: {
            args: Prisma.noticeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noticePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.noticeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noticePayload>
          }
          findMany: {
            args: Prisma.noticeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noticePayload>[]
          }
          create: {
            args: Prisma.noticeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noticePayload>
          }
          createMany: {
            args: Prisma.noticeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.noticeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noticePayload>
          }
          update: {
            args: Prisma.noticeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noticePayload>
          }
          deleteMany: {
            args: Prisma.noticeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.noticeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.noticeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noticePayload>
          }
          aggregate: {
            args: Prisma.NoticeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotice>
          }
          groupBy: {
            args: Prisma.noticeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticeGroupByOutputType>[]
          }
          count: {
            args: Prisma.noticeCountArgs<ExtArgs>
            result: $Utils.Optional<NoticeCountAggregateOutputType> | number
          }
        }
      }
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>
        fields: Prisma.paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      pc: {
        payload: Prisma.$pcPayload<ExtArgs>
        fields: Prisma.pcFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pcFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pcPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pcFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pcPayload>
          }
          findFirst: {
            args: Prisma.pcFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pcPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pcFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pcPayload>
          }
          findMany: {
            args: Prisma.pcFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pcPayload>[]
          }
          create: {
            args: Prisma.pcCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pcPayload>
          }
          createMany: {
            args: Prisma.pcCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pcDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pcPayload>
          }
          update: {
            args: Prisma.pcUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pcPayload>
          }
          deleteMany: {
            args: Prisma.pcDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pcUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pcUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pcPayload>
          }
          aggregate: {
            args: Prisma.PcAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePc>
          }
          groupBy: {
            args: Prisma.pcGroupByArgs<ExtArgs>
            result: $Utils.Optional<PcGroupByOutputType>[]
          }
          count: {
            args: Prisma.pcCountArgs<ExtArgs>
            result: $Utils.Optional<PcCountAggregateOutputType> | number
          }
        }
      }
      rental: {
        payload: Prisma.$rentalPayload<ExtArgs>
        fields: Prisma.rentalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rentalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rentalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>
          }
          findFirst: {
            args: Prisma.rentalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rentalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>
          }
          findMany: {
            args: Prisma.rentalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>[]
          }
          create: {
            args: Prisma.rentalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>
          }
          createMany: {
            args: Prisma.rentalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rentalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>
          }
          update: {
            args: Prisma.rentalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>
          }
          deleteMany: {
            args: Prisma.rentalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rentalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rentalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>
          }
          aggregate: {
            args: Prisma.RentalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRental>
          }
          groupBy: {
            args: Prisma.rentalGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalGroupByOutputType>[]
          }
          count: {
            args: Prisma.rentalCountArgs<ExtArgs>
            result: $Utils.Optional<RentalCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    inquiry?: inquiryOmit
    notice?: noticeOmit
    payment?: paymentOmit
    pc?: pcOmit
    rental?: rentalOmit
    user?: userOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PcCountOutputType
   */

  export type PcCountOutputType = {
    rental: number
  }

  export type PcCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | PcCountOutputTypeCountRentalArgs
  }

  // Custom InputTypes
  /**
   * PcCountOutputType without action
   */
  export type PcCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PcCountOutputType
     */
    select?: PcCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PcCountOutputType without action
   */
  export type PcCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput
  }


  /**
   * Count Type RentalCountOutputType
   */

  export type RentalCountOutputType = {
    payment: number
  }

  export type RentalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | RentalCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalCountOutputType
     */
    select?: RentalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    inquiry: number
    notice: number
    payment: number
    pc: number
    rental: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inquiry?: boolean | UserCountOutputTypeCountInquiryArgs
    notice?: boolean | UserCountOutputTypeCountNoticeArgs
    payment?: boolean | UserCountOutputTypeCountPaymentArgs
    pc?: boolean | UserCountOutputTypeCountPcArgs
    rental?: boolean | UserCountOutputTypeCountRentalArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInquiryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inquiryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNoticeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: noticeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pcWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  export type InquiryAvgAggregateOutputType = {
    inquiry_id: number | null
    user_id: number | null
  }

  export type InquirySumAggregateOutputType = {
    inquiry_id: number | null
    user_id: number | null
  }

  export type InquiryMinAggregateOutputType = {
    inquiry_id: number | null
    user_id: number | null
    title: string | null
    content: string | null
    file_path: string | null
    status: $Enums.inquiry_status | null
    created_at: Date | null
  }

  export type InquiryMaxAggregateOutputType = {
    inquiry_id: number | null
    user_id: number | null
    title: string | null
    content: string | null
    file_path: string | null
    status: $Enums.inquiry_status | null
    created_at: Date | null
  }

  export type InquiryCountAggregateOutputType = {
    inquiry_id: number
    user_id: number
    title: number
    content: number
    file_path: number
    status: number
    created_at: number
    _all: number
  }


  export type InquiryAvgAggregateInputType = {
    inquiry_id?: true
    user_id?: true
  }

  export type InquirySumAggregateInputType = {
    inquiry_id?: true
    user_id?: true
  }

  export type InquiryMinAggregateInputType = {
    inquiry_id?: true
    user_id?: true
    title?: true
    content?: true
    file_path?: true
    status?: true
    created_at?: true
  }

  export type InquiryMaxAggregateInputType = {
    inquiry_id?: true
    user_id?: true
    title?: true
    content?: true
    file_path?: true
    status?: true
    created_at?: true
  }

  export type InquiryCountAggregateInputType = {
    inquiry_id?: true
    user_id?: true
    title?: true
    content?: true
    file_path?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type InquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inquiry to aggregate.
     */
    where?: inquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inquiries to fetch.
     */
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inquiries
    **/
    _count?: true | InquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryMaxAggregateInputType
  }

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>
  }




  export type inquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inquiryWhereInput
    orderBy?: inquiryOrderByWithAggregationInput | inquiryOrderByWithAggregationInput[]
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum
    having?: inquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryCountAggregateInputType | true
    _avg?: InquiryAvgAggregateInputType
    _sum?: InquirySumAggregateInputType
    _min?: InquiryMinAggregateInputType
    _max?: InquiryMaxAggregateInputType
  }

  export type InquiryGroupByOutputType = {
    inquiry_id: number
    user_id: number
    title: string
    content: string
    file_path: string | null
    status: $Enums.inquiry_status | null
    created_at: Date | null
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  type GetInquiryGroupByPayload<T extends inquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
        }
      >
    >


  export type inquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inquiry_id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    file_path?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>



  export type inquirySelectScalar = {
    inquiry_id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    file_path?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type inquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"inquiry_id" | "user_id" | "title" | "content" | "file_path" | "status" | "created_at", ExtArgs["result"]["inquiry"]>
  export type inquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $inquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inquiry"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      inquiry_id: number
      user_id: number
      title: string
      content: string
      file_path: string | null
      status: $Enums.inquiry_status | null
      created_at: Date | null
    }, ExtArgs["result"]["inquiry"]>
    composites: {}
  }

  type inquiryGetPayload<S extends boolean | null | undefined | inquiryDefaultArgs> = $Result.GetResult<Prisma.$inquiryPayload, S>

  type inquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryCountAggregateInputType | true
    }

  export interface inquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inquiry'], meta: { name: 'inquiry' } }
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {inquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inquiryFindUniqueArgs>(args: SelectSubset<T, inquiryFindUniqueArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, inquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inquiryFindFirstArgs>(args?: SelectSubset<T, inquiryFindFirstArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, inquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     * 
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     * 
     * // Only select the `inquiry_id`
     * const inquiryWithInquiry_idOnly = await prisma.inquiry.findMany({ select: { inquiry_id: true } })
     * 
     */
    findMany<T extends inquiryFindManyArgs>(args?: SelectSubset<T, inquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inquiry.
     * @param {inquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     * 
     */
    create<T extends inquiryCreateArgs>(args: SelectSubset<T, inquiryCreateArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inquiries.
     * @param {inquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inquiryCreateManyArgs>(args?: SelectSubset<T, inquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inquiry.
     * @param {inquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     * 
     */
    delete<T extends inquiryDeleteArgs>(args: SelectSubset<T, inquiryDeleteArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inquiry.
     * @param {inquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inquiryUpdateArgs>(args: SelectSubset<T, inquiryUpdateArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inquiries.
     * @param {inquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inquiryDeleteManyArgs>(args?: SelectSubset<T, inquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inquiryUpdateManyArgs>(args: SelectSubset<T, inquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inquiry.
     * @param {inquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends inquiryUpsertArgs>(args: SelectSubset<T, inquiryUpsertArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
    **/
    count<T extends inquiryCountArgs>(
      args?: Subset<T, inquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InquiryAggregateArgs>(args: Subset<T, InquiryAggregateArgs>): Prisma.PrismaPromise<GetInquiryAggregateType<T>>

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryGroupByArgs} args - Group by arguments.
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
      T extends inquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inquiryGroupByArgs['orderBy'] }
        : { orderBy?: inquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, inquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inquiry model
   */
  readonly fields: inquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inquiry model
   */
  interface inquiryFieldRefs {
    readonly inquiry_id: FieldRef<"inquiry", 'Int'>
    readonly user_id: FieldRef<"inquiry", 'Int'>
    readonly title: FieldRef<"inquiry", 'String'>
    readonly content: FieldRef<"inquiry", 'String'>
    readonly file_path: FieldRef<"inquiry", 'String'>
    readonly status: FieldRef<"inquiry", 'inquiry_status'>
    readonly created_at: FieldRef<"inquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inquiry findUnique
   */
  export type inquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * Filter, which inquiry to fetch.
     */
    where: inquiryWhereUniqueInput
  }

  /**
   * inquiry findUniqueOrThrow
   */
  export type inquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * Filter, which inquiry to fetch.
     */
    where: inquiryWhereUniqueInput
  }

  /**
   * inquiry findFirst
   */
  export type inquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * Filter, which inquiry to fetch.
     */
    where?: inquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inquiries to fetch.
     */
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inquiries.
     */
    cursor?: inquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * inquiry findFirstOrThrow
   */
  export type inquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * Filter, which inquiry to fetch.
     */
    where?: inquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inquiries to fetch.
     */
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inquiries.
     */
    cursor?: inquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * inquiry findMany
   */
  export type inquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * Filter, which inquiries to fetch.
     */
    where?: inquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inquiries to fetch.
     */
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inquiries.
     */
    cursor?: inquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inquiries.
     */
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * inquiry create
   */
  export type inquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a inquiry.
     */
    data: XOR<inquiryCreateInput, inquiryUncheckedCreateInput>
  }

  /**
   * inquiry createMany
   */
  export type inquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inquiries.
     */
    data: inquiryCreateManyInput | inquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inquiry update
   */
  export type inquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a inquiry.
     */
    data: XOR<inquiryUpdateInput, inquiryUncheckedUpdateInput>
    /**
     * Choose, which inquiry to update.
     */
    where: inquiryWhereUniqueInput
  }

  /**
   * inquiry updateMany
   */
  export type inquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inquiries.
     */
    data: XOR<inquiryUpdateManyMutationInput, inquiryUncheckedUpdateManyInput>
    /**
     * Filter which inquiries to update
     */
    where?: inquiryWhereInput
    /**
     * Limit how many inquiries to update.
     */
    limit?: number
  }

  /**
   * inquiry upsert
   */
  export type inquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the inquiry to update in case it exists.
     */
    where: inquiryWhereUniqueInput
    /**
     * In case the inquiry found by the `where` argument doesn't exist, create a new inquiry with this data.
     */
    create: XOR<inquiryCreateInput, inquiryUncheckedCreateInput>
    /**
     * In case the inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inquiryUpdateInput, inquiryUncheckedUpdateInput>
  }

  /**
   * inquiry delete
   */
  export type inquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * Filter which inquiry to delete.
     */
    where: inquiryWhereUniqueInput
  }

  /**
   * inquiry deleteMany
   */
  export type inquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inquiries to delete
     */
    where?: inquiryWhereInput
    /**
     * Limit how many inquiries to delete.
     */
    limit?: number
  }

  /**
   * inquiry without action
   */
  export type inquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
  }


  /**
   * Model notice
   */

  export type AggregateNotice = {
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  export type NoticeAvgAggregateOutputType = {
    notice_id: number | null
    admin_id: number | null
  }

  export type NoticeSumAggregateOutputType = {
    notice_id: number | null
    admin_id: number | null
  }

  export type NoticeMinAggregateOutputType = {
    notice_id: number | null
    admin_id: number | null
    title: string | null
    content: string | null
    type: $Enums.notice_type | null
    file_path: string | null
    pinned: boolean | null
    created_at: Date | null
  }

  export type NoticeMaxAggregateOutputType = {
    notice_id: number | null
    admin_id: number | null
    title: string | null
    content: string | null
    type: $Enums.notice_type | null
    file_path: string | null
    pinned: boolean | null
    created_at: Date | null
  }

  export type NoticeCountAggregateOutputType = {
    notice_id: number
    admin_id: number
    title: number
    content: number
    type: number
    file_path: number
    pinned: number
    created_at: number
    _all: number
  }


  export type NoticeAvgAggregateInputType = {
    notice_id?: true
    admin_id?: true
  }

  export type NoticeSumAggregateInputType = {
    notice_id?: true
    admin_id?: true
  }

  export type NoticeMinAggregateInputType = {
    notice_id?: true
    admin_id?: true
    title?: true
    content?: true
    type?: true
    file_path?: true
    pinned?: true
    created_at?: true
  }

  export type NoticeMaxAggregateInputType = {
    notice_id?: true
    admin_id?: true
    title?: true
    content?: true
    type?: true
    file_path?: true
    pinned?: true
    created_at?: true
  }

  export type NoticeCountAggregateInputType = {
    notice_id?: true
    admin_id?: true
    title?: true
    content?: true
    type?: true
    file_path?: true
    pinned?: true
    created_at?: true
    _all?: true
  }

  export type NoticeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notice to aggregate.
     */
    where?: noticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notices to fetch.
     */
    orderBy?: noticeOrderByWithRelationInput | noticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: noticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notices
    **/
    _count?: true | NoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeMaxAggregateInputType
  }

  export type GetNoticeAggregateType<T extends NoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice[P]>
      : GetScalarType<T[P], AggregateNotice[P]>
  }




  export type noticeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: noticeWhereInput
    orderBy?: noticeOrderByWithAggregationInput | noticeOrderByWithAggregationInput[]
    by: NoticeScalarFieldEnum[] | NoticeScalarFieldEnum
    having?: noticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeCountAggregateInputType | true
    _avg?: NoticeAvgAggregateInputType
    _sum?: NoticeSumAggregateInputType
    _min?: NoticeMinAggregateInputType
    _max?: NoticeMaxAggregateInputType
  }

  export type NoticeGroupByOutputType = {
    notice_id: number
    admin_id: number
    title: string
    content: string
    type: $Enums.notice_type
    file_path: string | null
    pinned: boolean | null
    created_at: Date | null
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  type GetNoticeGroupByPayload<T extends noticeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeGroupByOutputType[P]>
        }
      >
    >


  export type noticeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notice_id?: boolean
    admin_id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    file_path?: boolean
    pinned?: boolean
    created_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice"]>



  export type noticeSelectScalar = {
    notice_id?: boolean
    admin_id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    file_path?: boolean
    pinned?: boolean
    created_at?: boolean
  }

  export type noticeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notice_id" | "admin_id" | "title" | "content" | "type" | "file_path" | "pinned" | "created_at", ExtArgs["result"]["notice"]>
  export type noticeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $noticePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notice"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      notice_id: number
      admin_id: number
      title: string
      content: string
      type: $Enums.notice_type
      file_path: string | null
      pinned: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["notice"]>
    composites: {}
  }

  type noticeGetPayload<S extends boolean | null | undefined | noticeDefaultArgs> = $Result.GetResult<Prisma.$noticePayload, S>

  type noticeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<noticeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticeCountAggregateInputType | true
    }

  export interface noticeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notice'], meta: { name: 'notice' } }
    /**
     * Find zero or one Notice that matches the filter.
     * @param {noticeFindUniqueArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends noticeFindUniqueArgs>(args: SelectSubset<T, noticeFindUniqueArgs<ExtArgs>>): Prisma__noticeClient<$Result.GetResult<Prisma.$noticePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {noticeFindUniqueOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends noticeFindUniqueOrThrowArgs>(args: SelectSubset<T, noticeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__noticeClient<$Result.GetResult<Prisma.$noticePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noticeFindFirstArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends noticeFindFirstArgs>(args?: SelectSubset<T, noticeFindFirstArgs<ExtArgs>>): Prisma__noticeClient<$Result.GetResult<Prisma.$noticePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noticeFindFirstOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends noticeFindFirstOrThrowArgs>(args?: SelectSubset<T, noticeFindFirstOrThrowArgs<ExtArgs>>): Prisma__noticeClient<$Result.GetResult<Prisma.$noticePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noticeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notice.findMany()
     * 
     * // Get first 10 Notices
     * const notices = await prisma.notice.findMany({ take: 10 })
     * 
     * // Only select the `notice_id`
     * const noticeWithNotice_idOnly = await prisma.notice.findMany({ select: { notice_id: true } })
     * 
     */
    findMany<T extends noticeFindManyArgs>(args?: SelectSubset<T, noticeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$noticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notice.
     * @param {noticeCreateArgs} args - Arguments to create a Notice.
     * @example
     * // Create one Notice
     * const Notice = await prisma.notice.create({
     *   data: {
     *     // ... data to create a Notice
     *   }
     * })
     * 
     */
    create<T extends noticeCreateArgs>(args: SelectSubset<T, noticeCreateArgs<ExtArgs>>): Prisma__noticeClient<$Result.GetResult<Prisma.$noticePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notices.
     * @param {noticeCreateManyArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends noticeCreateManyArgs>(args?: SelectSubset<T, noticeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notice.
     * @param {noticeDeleteArgs} args - Arguments to delete one Notice.
     * @example
     * // Delete one Notice
     * const Notice = await prisma.notice.delete({
     *   where: {
     *     // ... filter to delete one Notice
     *   }
     * })
     * 
     */
    delete<T extends noticeDeleteArgs>(args: SelectSubset<T, noticeDeleteArgs<ExtArgs>>): Prisma__noticeClient<$Result.GetResult<Prisma.$noticePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notice.
     * @param {noticeUpdateArgs} args - Arguments to update one Notice.
     * @example
     * // Update one Notice
     * const notice = await prisma.notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends noticeUpdateArgs>(args: SelectSubset<T, noticeUpdateArgs<ExtArgs>>): Prisma__noticeClient<$Result.GetResult<Prisma.$noticePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notices.
     * @param {noticeDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends noticeDeleteManyArgs>(args?: SelectSubset<T, noticeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends noticeUpdateManyArgs>(args: SelectSubset<T, noticeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notice.
     * @param {noticeUpsertArgs} args - Arguments to update or create a Notice.
     * @example
     * // Update or create a Notice
     * const notice = await prisma.notice.upsert({
     *   create: {
     *     // ... data to create a Notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice we want to update
     *   }
     * })
     */
    upsert<T extends noticeUpsertArgs>(args: SelectSubset<T, noticeUpsertArgs<ExtArgs>>): Prisma__noticeClient<$Result.GetResult<Prisma.$noticePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noticeCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notice.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
    **/
    count<T extends noticeCountArgs>(
      args?: Subset<T, noticeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticeAggregateArgs>(args: Subset<T, NoticeAggregateArgs>): Prisma.PrismaPromise<GetNoticeAggregateType<T>>

    /**
     * Group by Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noticeGroupByArgs} args - Group by arguments.
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
      T extends noticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: noticeGroupByArgs['orderBy'] }
        : { orderBy?: noticeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, noticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notice model
   */
  readonly fields: noticeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__noticeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notice model
   */
  interface noticeFieldRefs {
    readonly notice_id: FieldRef<"notice", 'Int'>
    readonly admin_id: FieldRef<"notice", 'Int'>
    readonly title: FieldRef<"notice", 'String'>
    readonly content: FieldRef<"notice", 'String'>
    readonly type: FieldRef<"notice", 'notice_type'>
    readonly file_path: FieldRef<"notice", 'String'>
    readonly pinned: FieldRef<"notice", 'Boolean'>
    readonly created_at: FieldRef<"notice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notice findUnique
   */
  export type noticeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice
     */
    select?: noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice
     */
    omit?: noticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noticeInclude<ExtArgs> | null
    /**
     * Filter, which notice to fetch.
     */
    where: noticeWhereUniqueInput
  }

  /**
   * notice findUniqueOrThrow
   */
  export type noticeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice
     */
    select?: noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice
     */
    omit?: noticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noticeInclude<ExtArgs> | null
    /**
     * Filter, which notice to fetch.
     */
    where: noticeWhereUniqueInput
  }

  /**
   * notice findFirst
   */
  export type noticeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice
     */
    select?: noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice
     */
    omit?: noticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noticeInclude<ExtArgs> | null
    /**
     * Filter, which notice to fetch.
     */
    where?: noticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notices to fetch.
     */
    orderBy?: noticeOrderByWithRelationInput | noticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notices.
     */
    cursor?: noticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * notice findFirstOrThrow
   */
  export type noticeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice
     */
    select?: noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice
     */
    omit?: noticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noticeInclude<ExtArgs> | null
    /**
     * Filter, which notice to fetch.
     */
    where?: noticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notices to fetch.
     */
    orderBy?: noticeOrderByWithRelationInput | noticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notices.
     */
    cursor?: noticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * notice findMany
   */
  export type noticeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice
     */
    select?: noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice
     */
    omit?: noticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noticeInclude<ExtArgs> | null
    /**
     * Filter, which notices to fetch.
     */
    where?: noticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notices to fetch.
     */
    orderBy?: noticeOrderByWithRelationInput | noticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notices.
     */
    cursor?: noticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notices.
     */
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * notice create
   */
  export type noticeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice
     */
    select?: noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice
     */
    omit?: noticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noticeInclude<ExtArgs> | null
    /**
     * The data needed to create a notice.
     */
    data: XOR<noticeCreateInput, noticeUncheckedCreateInput>
  }

  /**
   * notice createMany
   */
  export type noticeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notices.
     */
    data: noticeCreateManyInput | noticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notice update
   */
  export type noticeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice
     */
    select?: noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice
     */
    omit?: noticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noticeInclude<ExtArgs> | null
    /**
     * The data needed to update a notice.
     */
    data: XOR<noticeUpdateInput, noticeUncheckedUpdateInput>
    /**
     * Choose, which notice to update.
     */
    where: noticeWhereUniqueInput
  }

  /**
   * notice updateMany
   */
  export type noticeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notices.
     */
    data: XOR<noticeUpdateManyMutationInput, noticeUncheckedUpdateManyInput>
    /**
     * Filter which notices to update
     */
    where?: noticeWhereInput
    /**
     * Limit how many notices to update.
     */
    limit?: number
  }

  /**
   * notice upsert
   */
  export type noticeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice
     */
    select?: noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice
     */
    omit?: noticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noticeInclude<ExtArgs> | null
    /**
     * The filter to search for the notice to update in case it exists.
     */
    where: noticeWhereUniqueInput
    /**
     * In case the notice found by the `where` argument doesn't exist, create a new notice with this data.
     */
    create: XOR<noticeCreateInput, noticeUncheckedCreateInput>
    /**
     * In case the notice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<noticeUpdateInput, noticeUncheckedUpdateInput>
  }

  /**
   * notice delete
   */
  export type noticeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice
     */
    select?: noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice
     */
    omit?: noticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noticeInclude<ExtArgs> | null
    /**
     * Filter which notice to delete.
     */
    where: noticeWhereUniqueInput
  }

  /**
   * notice deleteMany
   */
  export type noticeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notices to delete
     */
    where?: noticeWhereInput
    /**
     * Limit how many notices to delete.
     */
    limit?: number
  }

  /**
   * notice without action
   */
  export type noticeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice
     */
    select?: noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice
     */
    omit?: noticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noticeInclude<ExtArgs> | null
  }


  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    payment_id: number | null
    user_id: number | null
    rental_id: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    payment_id: number | null
    user_id: number | null
    rental_id: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    payment_id: number | null
    user_id: number | null
    rental_id: number | null
    amount: number | null
    method: $Enums.payment_method | null
    status: $Enums.payment_status | null
    paid_at: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    payment_id: number | null
    user_id: number | null
    rental_id: number | null
    amount: number | null
    method: $Enums.payment_method | null
    status: $Enums.payment_status | null
    paid_at: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    payment_id: number
    user_id: number
    rental_id: number
    amount: number
    method: number
    status: number
    paid_at: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    payment_id?: true
    user_id?: true
    rental_id?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    payment_id?: true
    user_id?: true
    rental_id?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    payment_id?: true
    user_id?: true
    rental_id?: true
    amount?: true
    method?: true
    status?: true
    paid_at?: true
  }

  export type PaymentMaxAggregateInputType = {
    payment_id?: true
    user_id?: true
    rental_id?: true
    amount?: true
    method?: true
    status?: true
    paid_at?: true
  }

  export type PaymentCountAggregateInputType = {
    payment_id?: true
    user_id?: true
    rental_id?: true
    amount?: true
    method?: true
    status?: true
    paid_at?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    payment_id: number
    user_id: number
    rental_id: number
    amount: number
    method: $Enums.payment_method | null
    status: $Enums.payment_status | null
    paid_at: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    user_id?: boolean
    rental_id?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    paid_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    rental?: boolean | rentalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type paymentSelectScalar = {
    payment_id?: boolean
    user_id?: boolean
    rental_id?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    paid_at?: boolean
  }

  export type paymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "user_id" | "rental_id" | "amount" | "method" | "status" | "paid_at", ExtArgs["result"]["payment"]>
  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    rental?: boolean | rentalDefaultArgs<ExtArgs>
  }

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      rental: Prisma.$rentalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      user_id: number
      rental_id: number
      amount: number
      method: $Enums.payment_method | null
      status: $Enums.payment_status | null
      paid_at: Date | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<Prisma.$paymentPayload, S>

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment'], meta: { name: 'payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentFindUniqueArgs>(args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentFindFirstArgs>(args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends paymentFindManyArgs>(args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends paymentCreateArgs>(args: SelectSubset<T, paymentCreateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentCreateManyArgs>(args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends paymentDeleteArgs>(args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentUpdateArgs>(args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentDeleteManyArgs>(args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentUpdateManyArgs>(args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends paymentUpsertArgs>(args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
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
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment model
   */
  readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rental<T extends rentalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rentalDefaultArgs<ExtArgs>>): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly payment_id: FieldRef<"payment", 'Int'>
    readonly user_id: FieldRef<"payment", 'Int'>
    readonly rental_id: FieldRef<"payment", 'Int'>
    readonly amount: FieldRef<"payment", 'Int'>
    readonly method: FieldRef<"payment", 'payment_method'>
    readonly status: FieldRef<"payment", 'payment_status'>
    readonly paid_at: FieldRef<"payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>
  }

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
  }

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
  }


  /**
   * Model pc
   */

  export type AggregatePc = {
    _count: PcCountAggregateOutputType | null
    _avg: PcAvgAggregateOutputType | null
    _sum: PcSumAggregateOutputType | null
    _min: PcMinAggregateOutputType | null
    _max: PcMaxAggregateOutputType | null
  }

  export type PcAvgAggregateOutputType = {
    pc_id: number | null
    user_id: number | null
    price: number | null
  }

  export type PcSumAggregateOutputType = {
    pc_id: number | null
    user_id: number | null
    price: number | null
  }

  export type PcMinAggregateOutputType = {
    pc_id: number | null
    cpu: string | null
    ram: string | null
    graphic: string | null
    state: $Enums.pc_state | null
    power_status: $Enums.pc_power_status | null
    user_id: number | null
    price: number | null
    reg_date: Date | null
  }

  export type PcMaxAggregateOutputType = {
    pc_id: number | null
    cpu: string | null
    ram: string | null
    graphic: string | null
    state: $Enums.pc_state | null
    power_status: $Enums.pc_power_status | null
    user_id: number | null
    price: number | null
    reg_date: Date | null
  }

  export type PcCountAggregateOutputType = {
    pc_id: number
    cpu: number
    ram: number
    graphic: number
    state: number
    power_status: number
    user_id: number
    price: number
    reg_date: number
    _all: number
  }


  export type PcAvgAggregateInputType = {
    pc_id?: true
    user_id?: true
    price?: true
  }

  export type PcSumAggregateInputType = {
    pc_id?: true
    user_id?: true
    price?: true
  }

  export type PcMinAggregateInputType = {
    pc_id?: true
    cpu?: true
    ram?: true
    graphic?: true
    state?: true
    power_status?: true
    user_id?: true
    price?: true
    reg_date?: true
  }

  export type PcMaxAggregateInputType = {
    pc_id?: true
    cpu?: true
    ram?: true
    graphic?: true
    state?: true
    power_status?: true
    user_id?: true
    price?: true
    reg_date?: true
  }

  export type PcCountAggregateInputType = {
    pc_id?: true
    cpu?: true
    ram?: true
    graphic?: true
    state?: true
    power_status?: true
    user_id?: true
    price?: true
    reg_date?: true
    _all?: true
  }

  export type PcAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pc to aggregate.
     */
    where?: pcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pcs to fetch.
     */
    orderBy?: pcOrderByWithRelationInput | pcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pcs
    **/
    _count?: true | PcCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PcAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PcSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PcMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PcMaxAggregateInputType
  }

  export type GetPcAggregateType<T extends PcAggregateArgs> = {
        [P in keyof T & keyof AggregatePc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePc[P]>
      : GetScalarType<T[P], AggregatePc[P]>
  }




  export type pcGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pcWhereInput
    orderBy?: pcOrderByWithAggregationInput | pcOrderByWithAggregationInput[]
    by: PcScalarFieldEnum[] | PcScalarFieldEnum
    having?: pcScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PcCountAggregateInputType | true
    _avg?: PcAvgAggregateInputType
    _sum?: PcSumAggregateInputType
    _min?: PcMinAggregateInputType
    _max?: PcMaxAggregateInputType
  }

  export type PcGroupByOutputType = {
    pc_id: number
    cpu: string | null
    ram: string | null
    graphic: string | null
    state: $Enums.pc_state | null
    power_status: $Enums.pc_power_status | null
    user_id: number | null
    price: number | null
    reg_date: Date | null
    _count: PcCountAggregateOutputType | null
    _avg: PcAvgAggregateOutputType | null
    _sum: PcSumAggregateOutputType | null
    _min: PcMinAggregateOutputType | null
    _max: PcMaxAggregateOutputType | null
  }

  type GetPcGroupByPayload<T extends pcGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PcGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PcGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PcGroupByOutputType[P]>
            : GetScalarType<T[P], PcGroupByOutputType[P]>
        }
      >
    >


  export type pcSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pc_id?: boolean
    cpu?: boolean
    ram?: boolean
    graphic?: boolean
    state?: boolean
    power_status?: boolean
    user_id?: boolean
    price?: boolean
    reg_date?: boolean
    user?: boolean | pc$userArgs<ExtArgs>
    rental?: boolean | pc$rentalArgs<ExtArgs>
    _count?: boolean | PcCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pc"]>



  export type pcSelectScalar = {
    pc_id?: boolean
    cpu?: boolean
    ram?: boolean
    graphic?: boolean
    state?: boolean
    power_status?: boolean
    user_id?: boolean
    price?: boolean
    reg_date?: boolean
  }

  export type pcOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pc_id" | "cpu" | "ram" | "graphic" | "state" | "power_status" | "user_id" | "price" | "reg_date", ExtArgs["result"]["pc"]>
  export type pcInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | pc$userArgs<ExtArgs>
    rental?: boolean | pc$rentalArgs<ExtArgs>
    _count?: boolean | PcCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pcPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pc"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      rental: Prisma.$rentalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pc_id: number
      cpu: string | null
      ram: string | null
      graphic: string | null
      state: $Enums.pc_state | null
      power_status: $Enums.pc_power_status | null
      user_id: number | null
      price: number | null
      reg_date: Date | null
    }, ExtArgs["result"]["pc"]>
    composites: {}
  }

  type pcGetPayload<S extends boolean | null | undefined | pcDefaultArgs> = $Result.GetResult<Prisma.$pcPayload, S>

  type pcCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pcFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PcCountAggregateInputType | true
    }

  export interface pcDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pc'], meta: { name: 'pc' } }
    /**
     * Find zero or one Pc that matches the filter.
     * @param {pcFindUniqueArgs} args - Arguments to find a Pc
     * @example
     * // Get one Pc
     * const pc = await prisma.pc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pcFindUniqueArgs>(args: SelectSubset<T, pcFindUniqueArgs<ExtArgs>>): Prisma__pcClient<$Result.GetResult<Prisma.$pcPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pcFindUniqueOrThrowArgs} args - Arguments to find a Pc
     * @example
     * // Get one Pc
     * const pc = await prisma.pc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pcFindUniqueOrThrowArgs>(args: SelectSubset<T, pcFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pcClient<$Result.GetResult<Prisma.$pcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pcFindFirstArgs} args - Arguments to find a Pc
     * @example
     * // Get one Pc
     * const pc = await prisma.pc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pcFindFirstArgs>(args?: SelectSubset<T, pcFindFirstArgs<ExtArgs>>): Prisma__pcClient<$Result.GetResult<Prisma.$pcPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pcFindFirstOrThrowArgs} args - Arguments to find a Pc
     * @example
     * // Get one Pc
     * const pc = await prisma.pc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pcFindFirstOrThrowArgs>(args?: SelectSubset<T, pcFindFirstOrThrowArgs<ExtArgs>>): Prisma__pcClient<$Result.GetResult<Prisma.$pcPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pcs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pcFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pcs
     * const pcs = await prisma.pc.findMany()
     * 
     * // Get first 10 Pcs
     * const pcs = await prisma.pc.findMany({ take: 10 })
     * 
     * // Only select the `pc_id`
     * const pcWithPc_idOnly = await prisma.pc.findMany({ select: { pc_id: true } })
     * 
     */
    findMany<T extends pcFindManyArgs>(args?: SelectSubset<T, pcFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pc.
     * @param {pcCreateArgs} args - Arguments to create a Pc.
     * @example
     * // Create one Pc
     * const Pc = await prisma.pc.create({
     *   data: {
     *     // ... data to create a Pc
     *   }
     * })
     * 
     */
    create<T extends pcCreateArgs>(args: SelectSubset<T, pcCreateArgs<ExtArgs>>): Prisma__pcClient<$Result.GetResult<Prisma.$pcPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pcs.
     * @param {pcCreateManyArgs} args - Arguments to create many Pcs.
     * @example
     * // Create many Pcs
     * const pc = await prisma.pc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pcCreateManyArgs>(args?: SelectSubset<T, pcCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pc.
     * @param {pcDeleteArgs} args - Arguments to delete one Pc.
     * @example
     * // Delete one Pc
     * const Pc = await prisma.pc.delete({
     *   where: {
     *     // ... filter to delete one Pc
     *   }
     * })
     * 
     */
    delete<T extends pcDeleteArgs>(args: SelectSubset<T, pcDeleteArgs<ExtArgs>>): Prisma__pcClient<$Result.GetResult<Prisma.$pcPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pc.
     * @param {pcUpdateArgs} args - Arguments to update one Pc.
     * @example
     * // Update one Pc
     * const pc = await prisma.pc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pcUpdateArgs>(args: SelectSubset<T, pcUpdateArgs<ExtArgs>>): Prisma__pcClient<$Result.GetResult<Prisma.$pcPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pcs.
     * @param {pcDeleteManyArgs} args - Arguments to filter Pcs to delete.
     * @example
     * // Delete a few Pcs
     * const { count } = await prisma.pc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pcDeleteManyArgs>(args?: SelectSubset<T, pcDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pcUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pcs
     * const pc = await prisma.pc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pcUpdateManyArgs>(args: SelectSubset<T, pcUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pc.
     * @param {pcUpsertArgs} args - Arguments to update or create a Pc.
     * @example
     * // Update or create a Pc
     * const pc = await prisma.pc.upsert({
     *   create: {
     *     // ... data to create a Pc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pc we want to update
     *   }
     * })
     */
    upsert<T extends pcUpsertArgs>(args: SelectSubset<T, pcUpsertArgs<ExtArgs>>): Prisma__pcClient<$Result.GetResult<Prisma.$pcPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pcCountArgs} args - Arguments to filter Pcs to count.
     * @example
     * // Count the number of Pcs
     * const count = await prisma.pc.count({
     *   where: {
     *     // ... the filter for the Pcs we want to count
     *   }
     * })
    **/
    count<T extends pcCountArgs>(
      args?: Subset<T, pcCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PcCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PcAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PcAggregateArgs>(args: Subset<T, PcAggregateArgs>): Prisma.PrismaPromise<GetPcAggregateType<T>>

    /**
     * Group by Pc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pcGroupByArgs} args - Group by arguments.
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
      T extends pcGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pcGroupByArgs['orderBy'] }
        : { orderBy?: pcGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, pcGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPcGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pc model
   */
  readonly fields: pcFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pcClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends pc$userArgs<ExtArgs> = {}>(args?: Subset<T, pc$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rental<T extends pc$rentalArgs<ExtArgs> = {}>(args?: Subset<T, pc$rentalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pc model
   */
  interface pcFieldRefs {
    readonly pc_id: FieldRef<"pc", 'Int'>
    readonly cpu: FieldRef<"pc", 'String'>
    readonly ram: FieldRef<"pc", 'String'>
    readonly graphic: FieldRef<"pc", 'String'>
    readonly state: FieldRef<"pc", 'pc_state'>
    readonly power_status: FieldRef<"pc", 'pc_power_status'>
    readonly user_id: FieldRef<"pc", 'Int'>
    readonly price: FieldRef<"pc", 'Int'>
    readonly reg_date: FieldRef<"pc", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pc findUnique
   */
  export type pcFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pc
     */
    select?: pcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pc
     */
    omit?: pcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pcInclude<ExtArgs> | null
    /**
     * Filter, which pc to fetch.
     */
    where: pcWhereUniqueInput
  }

  /**
   * pc findUniqueOrThrow
   */
  export type pcFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pc
     */
    select?: pcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pc
     */
    omit?: pcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pcInclude<ExtArgs> | null
    /**
     * Filter, which pc to fetch.
     */
    where: pcWhereUniqueInput
  }

  /**
   * pc findFirst
   */
  export type pcFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pc
     */
    select?: pcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pc
     */
    omit?: pcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pcInclude<ExtArgs> | null
    /**
     * Filter, which pc to fetch.
     */
    where?: pcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pcs to fetch.
     */
    orderBy?: pcOrderByWithRelationInput | pcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pcs.
     */
    cursor?: pcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pcs.
     */
    distinct?: PcScalarFieldEnum | PcScalarFieldEnum[]
  }

  /**
   * pc findFirstOrThrow
   */
  export type pcFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pc
     */
    select?: pcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pc
     */
    omit?: pcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pcInclude<ExtArgs> | null
    /**
     * Filter, which pc to fetch.
     */
    where?: pcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pcs to fetch.
     */
    orderBy?: pcOrderByWithRelationInput | pcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pcs.
     */
    cursor?: pcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pcs.
     */
    distinct?: PcScalarFieldEnum | PcScalarFieldEnum[]
  }

  /**
   * pc findMany
   */
  export type pcFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pc
     */
    select?: pcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pc
     */
    omit?: pcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pcInclude<ExtArgs> | null
    /**
     * Filter, which pcs to fetch.
     */
    where?: pcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pcs to fetch.
     */
    orderBy?: pcOrderByWithRelationInput | pcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pcs.
     */
    cursor?: pcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pcs.
     */
    skip?: number
    distinct?: PcScalarFieldEnum | PcScalarFieldEnum[]
  }

  /**
   * pc create
   */
  export type pcCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pc
     */
    select?: pcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pc
     */
    omit?: pcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pcInclude<ExtArgs> | null
    /**
     * The data needed to create a pc.
     */
    data?: XOR<pcCreateInput, pcUncheckedCreateInput>
  }

  /**
   * pc createMany
   */
  export type pcCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pcs.
     */
    data: pcCreateManyInput | pcCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pc update
   */
  export type pcUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pc
     */
    select?: pcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pc
     */
    omit?: pcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pcInclude<ExtArgs> | null
    /**
     * The data needed to update a pc.
     */
    data: XOR<pcUpdateInput, pcUncheckedUpdateInput>
    /**
     * Choose, which pc to update.
     */
    where: pcWhereUniqueInput
  }

  /**
   * pc updateMany
   */
  export type pcUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pcs.
     */
    data: XOR<pcUpdateManyMutationInput, pcUncheckedUpdateManyInput>
    /**
     * Filter which pcs to update
     */
    where?: pcWhereInput
    /**
     * Limit how many pcs to update.
     */
    limit?: number
  }

  /**
   * pc upsert
   */
  export type pcUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pc
     */
    select?: pcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pc
     */
    omit?: pcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pcInclude<ExtArgs> | null
    /**
     * The filter to search for the pc to update in case it exists.
     */
    where: pcWhereUniqueInput
    /**
     * In case the pc found by the `where` argument doesn't exist, create a new pc with this data.
     */
    create: XOR<pcCreateInput, pcUncheckedCreateInput>
    /**
     * In case the pc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pcUpdateInput, pcUncheckedUpdateInput>
  }

  /**
   * pc delete
   */
  export type pcDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pc
     */
    select?: pcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pc
     */
    omit?: pcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pcInclude<ExtArgs> | null
    /**
     * Filter which pc to delete.
     */
    where: pcWhereUniqueInput
  }

  /**
   * pc deleteMany
   */
  export type pcDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pcs to delete
     */
    where?: pcWhereInput
    /**
     * Limit how many pcs to delete.
     */
    limit?: number
  }

  /**
   * pc.user
   */
  export type pc$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * pc.rental
   */
  export type pc$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rental
     */
    omit?: rentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalInclude<ExtArgs> | null
    where?: rentalWhereInput
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[]
    cursor?: rentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * pc without action
   */
  export type pcDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pc
     */
    select?: pcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pc
     */
    omit?: pcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pcInclude<ExtArgs> | null
  }


  /**
   * Model rental
   */

  export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  export type RentalAvgAggregateOutputType = {
    rental_id: number | null
    user_id: number | null
    pc_id: number | null
  }

  export type RentalSumAggregateOutputType = {
    rental_id: number | null
    user_id: number | null
    pc_id: number | null
  }

  export type RentalMinAggregateOutputType = {
    rental_id: number | null
    user_id: number | null
    pc_id: number | null
    start_date: Date | null
    end_date: Date | null
    auto_renew: boolean | null
    status: $Enums.rental_status | null
  }

  export type RentalMaxAggregateOutputType = {
    rental_id: number | null
    user_id: number | null
    pc_id: number | null
    start_date: Date | null
    end_date: Date | null
    auto_renew: boolean | null
    status: $Enums.rental_status | null
  }

  export type RentalCountAggregateOutputType = {
    rental_id: number
    user_id: number
    pc_id: number
    start_date: number
    end_date: number
    auto_renew: number
    status: number
    _all: number
  }


  export type RentalAvgAggregateInputType = {
    rental_id?: true
    user_id?: true
    pc_id?: true
  }

  export type RentalSumAggregateInputType = {
    rental_id?: true
    user_id?: true
    pc_id?: true
  }

  export type RentalMinAggregateInputType = {
    rental_id?: true
    user_id?: true
    pc_id?: true
    start_date?: true
    end_date?: true
    auto_renew?: true
    status?: true
  }

  export type RentalMaxAggregateInputType = {
    rental_id?: true
    user_id?: true
    pc_id?: true
    start_date?: true
    end_date?: true
    auto_renew?: true
    status?: true
  }

  export type RentalCountAggregateInputType = {
    rental_id?: true
    user_id?: true
    pc_id?: true
    start_date?: true
    end_date?: true
    auto_renew?: true
    status?: true
    _all?: true
  }

  export type RentalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rental to aggregate.
     */
    where?: rentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rentals
    **/
    _count?: true | RentalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalMaxAggregateInputType
  }

  export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
        [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRental[P]>
      : GetScalarType<T[P], AggregateRental[P]>
  }




  export type rentalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput
    orderBy?: rentalOrderByWithAggregationInput | rentalOrderByWithAggregationInput[]
    by: RentalScalarFieldEnum[] | RentalScalarFieldEnum
    having?: rentalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalCountAggregateInputType | true
    _avg?: RentalAvgAggregateInputType
    _sum?: RentalSumAggregateInputType
    _min?: RentalMinAggregateInputType
    _max?: RentalMaxAggregateInputType
  }

  export type RentalGroupByOutputType = {
    rental_id: number
    user_id: number
    pc_id: number
    start_date: Date | null
    end_date: Date | null
    auto_renew: boolean | null
    status: $Enums.rental_status | null
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  type GetRentalGroupByPayload<T extends rentalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalGroupByOutputType[P]>
            : GetScalarType<T[P], RentalGroupByOutputType[P]>
        }
      >
    >


  export type rentalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rental_id?: boolean
    user_id?: boolean
    pc_id?: boolean
    start_date?: boolean
    end_date?: boolean
    auto_renew?: boolean
    status?: boolean
    payment?: boolean | rental$paymentArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    pc?: boolean | pcDefaultArgs<ExtArgs>
    _count?: boolean | RentalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rental"]>



  export type rentalSelectScalar = {
    rental_id?: boolean
    user_id?: boolean
    pc_id?: boolean
    start_date?: boolean
    end_date?: boolean
    auto_renew?: boolean
    status?: boolean
  }

  export type rentalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"rental_id" | "user_id" | "pc_id" | "start_date" | "end_date" | "auto_renew" | "status", ExtArgs["result"]["rental"]>
  export type rentalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | rental$paymentArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    pc?: boolean | pcDefaultArgs<ExtArgs>
    _count?: boolean | RentalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rentalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rental"
    objects: {
      payment: Prisma.$paymentPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
      pc: Prisma.$pcPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      rental_id: number
      user_id: number
      pc_id: number
      start_date: Date | null
      end_date: Date | null
      auto_renew: boolean | null
      status: $Enums.rental_status | null
    }, ExtArgs["result"]["rental"]>
    composites: {}
  }

  type rentalGetPayload<S extends boolean | null | undefined | rentalDefaultArgs> = $Result.GetResult<Prisma.$rentalPayload, S>

  type rentalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rentalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalCountAggregateInputType | true
    }

  export interface rentalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rental'], meta: { name: 'rental' } }
    /**
     * Find zero or one Rental that matches the filter.
     * @param {rentalFindUniqueArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rentalFindUniqueArgs>(args: SelectSubset<T, rentalFindUniqueArgs<ExtArgs>>): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rental that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rentalFindUniqueOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rentalFindUniqueOrThrowArgs>(args: SelectSubset<T, rentalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rentalFindFirstArgs>(args?: SelectSubset<T, rentalFindFirstArgs<ExtArgs>>): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rental that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rentalFindFirstOrThrowArgs>(args?: SelectSubset<T, rentalFindFirstOrThrowArgs<ExtArgs>>): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rental.findMany()
     * 
     * // Get first 10 Rentals
     * const rentals = await prisma.rental.findMany({ take: 10 })
     * 
     * // Only select the `rental_id`
     * const rentalWithRental_idOnly = await prisma.rental.findMany({ select: { rental_id: true } })
     * 
     */
    findMany<T extends rentalFindManyArgs>(args?: SelectSubset<T, rentalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rental.
     * @param {rentalCreateArgs} args - Arguments to create a Rental.
     * @example
     * // Create one Rental
     * const Rental = await prisma.rental.create({
     *   data: {
     *     // ... data to create a Rental
     *   }
     * })
     * 
     */
    create<T extends rentalCreateArgs>(args: SelectSubset<T, rentalCreateArgs<ExtArgs>>): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rentals.
     * @param {rentalCreateManyArgs} args - Arguments to create many Rentals.
     * @example
     * // Create many Rentals
     * const rental = await prisma.rental.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rentalCreateManyArgs>(args?: SelectSubset<T, rentalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rental.
     * @param {rentalDeleteArgs} args - Arguments to delete one Rental.
     * @example
     * // Delete one Rental
     * const Rental = await prisma.rental.delete({
     *   where: {
     *     // ... filter to delete one Rental
     *   }
     * })
     * 
     */
    delete<T extends rentalDeleteArgs>(args: SelectSubset<T, rentalDeleteArgs<ExtArgs>>): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rental.
     * @param {rentalUpdateArgs} args - Arguments to update one Rental.
     * @example
     * // Update one Rental
     * const rental = await prisma.rental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rentalUpdateArgs>(args: SelectSubset<T, rentalUpdateArgs<ExtArgs>>): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rentals.
     * @param {rentalDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rentalDeleteManyArgs>(args?: SelectSubset<T, rentalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rentalUpdateManyArgs>(args: SelectSubset<T, rentalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rental.
     * @param {rentalUpsertArgs} args - Arguments to update or create a Rental.
     * @example
     * // Update or create a Rental
     * const rental = await prisma.rental.upsert({
     *   create: {
     *     // ... data to create a Rental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rental we want to update
     *   }
     * })
     */
    upsert<T extends rentalUpsertArgs>(args: SelectSubset<T, rentalUpsertArgs<ExtArgs>>): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rental.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
    **/
    count<T extends rentalCountArgs>(
      args?: Subset<T, rentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalAggregateArgs>(args: Subset<T, RentalAggregateArgs>): Prisma.PrismaPromise<GetRentalAggregateType<T>>

    /**
     * Group by Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalGroupByArgs} args - Group by arguments.
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
      T extends rentalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rentalGroupByArgs['orderBy'] }
        : { orderBy?: rentalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, rentalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rental model
   */
  readonly fields: rentalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rentalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends rental$paymentArgs<ExtArgs> = {}>(args?: Subset<T, rental$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pc<T extends pcDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pcDefaultArgs<ExtArgs>>): Prisma__pcClient<$Result.GetResult<Prisma.$pcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rental model
   */
  interface rentalFieldRefs {
    readonly rental_id: FieldRef<"rental", 'Int'>
    readonly user_id: FieldRef<"rental", 'Int'>
    readonly pc_id: FieldRef<"rental", 'Int'>
    readonly start_date: FieldRef<"rental", 'DateTime'>
    readonly end_date: FieldRef<"rental", 'DateTime'>
    readonly auto_renew: FieldRef<"rental", 'Boolean'>
    readonly status: FieldRef<"rental", 'rental_status'>
  }
    

  // Custom InputTypes
  /**
   * rental findUnique
   */
  export type rentalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rental
     */
    omit?: rentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalInclude<ExtArgs> | null
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput
  }

  /**
   * rental findUniqueOrThrow
   */
  export type rentalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rental
     */
    omit?: rentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalInclude<ExtArgs> | null
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput
  }

  /**
   * rental findFirst
   */
  export type rentalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rental
     */
    omit?: rentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalInclude<ExtArgs> | null
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * rental findFirstOrThrow
   */
  export type rentalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rental
     */
    omit?: rentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalInclude<ExtArgs> | null
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * rental findMany
   */
  export type rentalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rental
     */
    omit?: rentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalInclude<ExtArgs> | null
    /**
     * Filter, which rentals to fetch.
     */
    where?: rentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rentals.
     */
    cursor?: rentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * rental create
   */
  export type rentalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rental
     */
    omit?: rentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalInclude<ExtArgs> | null
    /**
     * The data needed to create a rental.
     */
    data: XOR<rentalCreateInput, rentalUncheckedCreateInput>
  }

  /**
   * rental createMany
   */
  export type rentalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rentals.
     */
    data: rentalCreateManyInput | rentalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rental update
   */
  export type rentalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rental
     */
    omit?: rentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalInclude<ExtArgs> | null
    /**
     * The data needed to update a rental.
     */
    data: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>
    /**
     * Choose, which rental to update.
     */
    where: rentalWhereUniqueInput
  }

  /**
   * rental updateMany
   */
  export type rentalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rentals.
     */
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyInput>
    /**
     * Filter which rentals to update
     */
    where?: rentalWhereInput
    /**
     * Limit how many rentals to update.
     */
    limit?: number
  }

  /**
   * rental upsert
   */
  export type rentalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rental
     */
    omit?: rentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalInclude<ExtArgs> | null
    /**
     * The filter to search for the rental to update in case it exists.
     */
    where: rentalWhereUniqueInput
    /**
     * In case the rental found by the `where` argument doesn't exist, create a new rental with this data.
     */
    create: XOR<rentalCreateInput, rentalUncheckedCreateInput>
    /**
     * In case the rental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>
  }

  /**
   * rental delete
   */
  export type rentalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rental
     */
    omit?: rentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalInclude<ExtArgs> | null
    /**
     * Filter which rental to delete.
     */
    where: rentalWhereUniqueInput
  }

  /**
   * rental deleteMany
   */
  export type rentalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rentals to delete
     */
    where?: rentalWhereInput
    /**
     * Limit how many rentals to delete.
     */
    limit?: number
  }

  /**
   * rental.payment
   */
  export type rental$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * rental without action
   */
  export type rentalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rental
     */
    omit?: rentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.user_role | null
    status: $Enums.user_status | null
    two_factor_enabled: boolean | null
    join_date: Date | null
    last_login: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.user_role | null
    status: $Enums.user_status | null
    two_factor_enabled: boolean | null
    join_date: Date | null
    last_login: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    password: number
    phone: number
    role: number
    status: number
    two_factor_enabled: number
    join_date: number
    last_login: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    status?: true
    two_factor_enabled?: true
    join_date?: true
    last_login?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    status?: true
    two_factor_enabled?: true
    join_date?: true
    last_login?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    status?: true
    two_factor_enabled?: true
    join_date?: true
    last_login?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    name: string
    email: string
    password: string
    phone: string | null
    role: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled: boolean | null
    join_date: Date | null
    last_login: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    two_factor_enabled?: boolean
    join_date?: boolean
    last_login?: boolean
    inquiry?: boolean | user$inquiryArgs<ExtArgs>
    notice?: boolean | user$noticeArgs<ExtArgs>
    payment?: boolean | user$paymentArgs<ExtArgs>
    pc?: boolean | user$pcArgs<ExtArgs>
    rental?: boolean | user$rentalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    two_factor_enabled?: boolean
    join_date?: boolean
    last_login?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "email" | "password" | "phone" | "role" | "status" | "two_factor_enabled" | "join_date" | "last_login", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inquiry?: boolean | user$inquiryArgs<ExtArgs>
    notice?: boolean | user$noticeArgs<ExtArgs>
    payment?: boolean | user$paymentArgs<ExtArgs>
    pc?: boolean | user$pcArgs<ExtArgs>
    rental?: boolean | user$rentalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      inquiry: Prisma.$inquiryPayload<ExtArgs>[]
      notice: Prisma.$noticePayload<ExtArgs>[]
      payment: Prisma.$paymentPayload<ExtArgs>[]
      pc: Prisma.$pcPayload<ExtArgs>[]
      rental: Prisma.$rentalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string
      email: string
      password: string
      phone: string | null
      role: $Enums.user_role
      status: $Enums.user_status
      two_factor_enabled: boolean | null
      join_date: Date | null
      last_login: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inquiry<T extends user$inquiryArgs<ExtArgs> = {}>(args?: Subset<T, user$inquiryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notice<T extends user$noticeArgs<ExtArgs> = {}>(args?: Subset<T, user$noticeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$noticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends user$paymentArgs<ExtArgs> = {}>(args?: Subset<T, user$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pc<T extends user$pcArgs<ExtArgs> = {}>(args?: Subset<T, user$pcArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rental<T extends user$rentalArgs<ExtArgs> = {}>(args?: Subset<T, user$rentalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly user_id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly phone: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'user_role'>
    readonly status: FieldRef<"user", 'user_status'>
    readonly two_factor_enabled: FieldRef<"user", 'Boolean'>
    readonly join_date: FieldRef<"user", 'DateTime'>
    readonly last_login: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.inquiry
   */
  export type user$inquiryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    where?: inquiryWhereInput
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    cursor?: inquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * user.notice
   */
  export type user$noticeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice
     */
    select?: noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice
     */
    omit?: noticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noticeInclude<ExtArgs> | null
    where?: noticeWhereInput
    orderBy?: noticeOrderByWithRelationInput | noticeOrderByWithRelationInput[]
    cursor?: noticeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * user.payment
   */
  export type user$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * user.pc
   */
  export type user$pcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pc
     */
    select?: pcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pc
     */
    omit?: pcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pcInclude<ExtArgs> | null
    where?: pcWhereInput
    orderBy?: pcOrderByWithRelationInput | pcOrderByWithRelationInput[]
    cursor?: pcWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PcScalarFieldEnum | PcScalarFieldEnum[]
  }

  /**
   * user.rental
   */
  export type user$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rental
     */
    omit?: rentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalInclude<ExtArgs> | null
    where?: rentalWhereInput
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[]
    cursor?: rentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const InquiryScalarFieldEnum: {
    inquiry_id: 'inquiry_id',
    user_id: 'user_id',
    title: 'title',
    content: 'content',
    file_path: 'file_path',
    status: 'status',
    created_at: 'created_at'
  };

  export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum]


  export const NoticeScalarFieldEnum: {
    notice_id: 'notice_id',
    admin_id: 'admin_id',
    title: 'title',
    content: 'content',
    type: 'type',
    file_path: 'file_path',
    pinned: 'pinned',
    created_at: 'created_at'
  };

  export type NoticeScalarFieldEnum = (typeof NoticeScalarFieldEnum)[keyof typeof NoticeScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    payment_id: 'payment_id',
    user_id: 'user_id',
    rental_id: 'rental_id',
    amount: 'amount',
    method: 'method',
    status: 'status',
    paid_at: 'paid_at'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const PcScalarFieldEnum: {
    pc_id: 'pc_id',
    cpu: 'cpu',
    ram: 'ram',
    graphic: 'graphic',
    state: 'state',
    power_status: 'power_status',
    user_id: 'user_id',
    price: 'price',
    reg_date: 'reg_date'
  };

  export type PcScalarFieldEnum = (typeof PcScalarFieldEnum)[keyof typeof PcScalarFieldEnum]


  export const RentalScalarFieldEnum: {
    rental_id: 'rental_id',
    user_id: 'user_id',
    pc_id: 'pc_id',
    start_date: 'start_date',
    end_date: 'end_date',
    auto_renew: 'auto_renew',
    status: 'status'
  };

  export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    status: 'status',
    two_factor_enabled: 'two_factor_enabled',
    join_date: 'join_date',
    last_login: 'last_login'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const inquiryOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content',
    file_path: 'file_path'
  };

  export type inquiryOrderByRelevanceFieldEnum = (typeof inquiryOrderByRelevanceFieldEnum)[keyof typeof inquiryOrderByRelevanceFieldEnum]


  export const noticeOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content',
    file_path: 'file_path'
  };

  export type noticeOrderByRelevanceFieldEnum = (typeof noticeOrderByRelevanceFieldEnum)[keyof typeof noticeOrderByRelevanceFieldEnum]


  export const pcOrderByRelevanceFieldEnum: {
    cpu: 'cpu',
    ram: 'ram',
    graphic: 'graphic'
  };

  export type pcOrderByRelevanceFieldEnum = (typeof pcOrderByRelevanceFieldEnum)[keyof typeof pcOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'inquiry_status'
   */
  export type Enuminquiry_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'inquiry_status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'notice_type'
   */
  export type Enumnotice_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notice_type'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'payment_method'
   */
  export type Enumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method'>
    


  /**
   * Reference to a field of type 'payment_status'
   */
  export type Enumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status'>
    


  /**
   * Reference to a field of type 'pc_state'
   */
  export type Enumpc_stateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pc_state'>
    


  /**
   * Reference to a field of type 'pc_power_status'
   */
  export type Enumpc_power_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pc_power_status'>
    


  /**
   * Reference to a field of type 'rental_status'
   */
  export type Enumrental_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rental_status'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'user_status'
   */
  export type Enumuser_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type inquiryWhereInput = {
    AND?: inquiryWhereInput | inquiryWhereInput[]
    OR?: inquiryWhereInput[]
    NOT?: inquiryWhereInput | inquiryWhereInput[]
    inquiry_id?: IntFilter<"inquiry"> | number
    user_id?: IntFilter<"inquiry"> | number
    title?: StringFilter<"inquiry"> | string
    content?: StringFilter<"inquiry"> | string
    file_path?: StringNullableFilter<"inquiry"> | string | null
    status?: Enuminquiry_statusNullableFilter<"inquiry"> | $Enums.inquiry_status | null
    created_at?: DateTimeNullableFilter<"inquiry"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type inquiryOrderByWithRelationInput = {
    inquiry_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    file_path?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: inquiryOrderByRelevanceInput
  }

  export type inquiryWhereUniqueInput = Prisma.AtLeast<{
    inquiry_id?: number
    AND?: inquiryWhereInput | inquiryWhereInput[]
    OR?: inquiryWhereInput[]
    NOT?: inquiryWhereInput | inquiryWhereInput[]
    user_id?: IntFilter<"inquiry"> | number
    title?: StringFilter<"inquiry"> | string
    content?: StringFilter<"inquiry"> | string
    file_path?: StringNullableFilter<"inquiry"> | string | null
    status?: Enuminquiry_statusNullableFilter<"inquiry"> | $Enums.inquiry_status | null
    created_at?: DateTimeNullableFilter<"inquiry"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "inquiry_id">

  export type inquiryOrderByWithAggregationInput = {
    inquiry_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    file_path?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: inquiryCountOrderByAggregateInput
    _avg?: inquiryAvgOrderByAggregateInput
    _max?: inquiryMaxOrderByAggregateInput
    _min?: inquiryMinOrderByAggregateInput
    _sum?: inquirySumOrderByAggregateInput
  }

  export type inquiryScalarWhereWithAggregatesInput = {
    AND?: inquiryScalarWhereWithAggregatesInput | inquiryScalarWhereWithAggregatesInput[]
    OR?: inquiryScalarWhereWithAggregatesInput[]
    NOT?: inquiryScalarWhereWithAggregatesInput | inquiryScalarWhereWithAggregatesInput[]
    inquiry_id?: IntWithAggregatesFilter<"inquiry"> | number
    user_id?: IntWithAggregatesFilter<"inquiry"> | number
    title?: StringWithAggregatesFilter<"inquiry"> | string
    content?: StringWithAggregatesFilter<"inquiry"> | string
    file_path?: StringNullableWithAggregatesFilter<"inquiry"> | string | null
    status?: Enuminquiry_statusNullableWithAggregatesFilter<"inquiry"> | $Enums.inquiry_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"inquiry"> | Date | string | null
  }

  export type noticeWhereInput = {
    AND?: noticeWhereInput | noticeWhereInput[]
    OR?: noticeWhereInput[]
    NOT?: noticeWhereInput | noticeWhereInput[]
    notice_id?: IntFilter<"notice"> | number
    admin_id?: IntFilter<"notice"> | number
    title?: StringFilter<"notice"> | string
    content?: StringFilter<"notice"> | string
    type?: Enumnotice_typeFilter<"notice"> | $Enums.notice_type
    file_path?: StringNullableFilter<"notice"> | string | null
    pinned?: BoolNullableFilter<"notice"> | boolean | null
    created_at?: DateTimeNullableFilter<"notice"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type noticeOrderByWithRelationInput = {
    notice_id?: SortOrder
    admin_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    file_path?: SortOrderInput | SortOrder
    pinned?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: noticeOrderByRelevanceInput
  }

  export type noticeWhereUniqueInput = Prisma.AtLeast<{
    notice_id?: number
    AND?: noticeWhereInput | noticeWhereInput[]
    OR?: noticeWhereInput[]
    NOT?: noticeWhereInput | noticeWhereInput[]
    admin_id?: IntFilter<"notice"> | number
    title?: StringFilter<"notice"> | string
    content?: StringFilter<"notice"> | string
    type?: Enumnotice_typeFilter<"notice"> | $Enums.notice_type
    file_path?: StringNullableFilter<"notice"> | string | null
    pinned?: BoolNullableFilter<"notice"> | boolean | null
    created_at?: DateTimeNullableFilter<"notice"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "notice_id">

  export type noticeOrderByWithAggregationInput = {
    notice_id?: SortOrder
    admin_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    file_path?: SortOrderInput | SortOrder
    pinned?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: noticeCountOrderByAggregateInput
    _avg?: noticeAvgOrderByAggregateInput
    _max?: noticeMaxOrderByAggregateInput
    _min?: noticeMinOrderByAggregateInput
    _sum?: noticeSumOrderByAggregateInput
  }

  export type noticeScalarWhereWithAggregatesInput = {
    AND?: noticeScalarWhereWithAggregatesInput | noticeScalarWhereWithAggregatesInput[]
    OR?: noticeScalarWhereWithAggregatesInput[]
    NOT?: noticeScalarWhereWithAggregatesInput | noticeScalarWhereWithAggregatesInput[]
    notice_id?: IntWithAggregatesFilter<"notice"> | number
    admin_id?: IntWithAggregatesFilter<"notice"> | number
    title?: StringWithAggregatesFilter<"notice"> | string
    content?: StringWithAggregatesFilter<"notice"> | string
    type?: Enumnotice_typeWithAggregatesFilter<"notice"> | $Enums.notice_type
    file_path?: StringNullableWithAggregatesFilter<"notice"> | string | null
    pinned?: BoolNullableWithAggregatesFilter<"notice"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"notice"> | Date | string | null
  }

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    payment_id?: IntFilter<"payment"> | number
    user_id?: IntFilter<"payment"> | number
    rental_id?: IntFilter<"payment"> | number
    amount?: IntFilter<"payment"> | number
    method?: Enumpayment_methodNullableFilter<"payment"> | $Enums.payment_method | null
    status?: Enumpayment_statusNullableFilter<"payment"> | $Enums.payment_status | null
    paid_at?: DateTimeNullableFilter<"payment"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    rental?: XOR<RentalScalarRelationFilter, rentalWhereInput>
  }

  export type paymentOrderByWithRelationInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    method?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    rental?: rentalOrderByWithRelationInput
  }

  export type paymentWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    user_id?: IntFilter<"payment"> | number
    rental_id?: IntFilter<"payment"> | number
    amount?: IntFilter<"payment"> | number
    method?: Enumpayment_methodNullableFilter<"payment"> | $Enums.payment_method | null
    status?: Enumpayment_statusNullableFilter<"payment"> | $Enums.payment_status | null
    paid_at?: DateTimeNullableFilter<"payment"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    rental?: XOR<RentalScalarRelationFilter, rentalWhereInput>
  }, "payment_id">

  export type paymentOrderByWithAggregationInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    method?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    _count?: paymentCountOrderByAggregateInput
    _avg?: paymentAvgOrderByAggregateInput
    _max?: paymentMaxOrderByAggregateInput
    _min?: paymentMinOrderByAggregateInput
    _sum?: paymentSumOrderByAggregateInput
  }

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    OR?: paymentScalarWhereWithAggregatesInput[]
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"payment"> | number
    user_id?: IntWithAggregatesFilter<"payment"> | number
    rental_id?: IntWithAggregatesFilter<"payment"> | number
    amount?: IntWithAggregatesFilter<"payment"> | number
    method?: Enumpayment_methodNullableWithAggregatesFilter<"payment"> | $Enums.payment_method | null
    status?: Enumpayment_statusNullableWithAggregatesFilter<"payment"> | $Enums.payment_status | null
    paid_at?: DateTimeNullableWithAggregatesFilter<"payment"> | Date | string | null
  }

  export type pcWhereInput = {
    AND?: pcWhereInput | pcWhereInput[]
    OR?: pcWhereInput[]
    NOT?: pcWhereInput | pcWhereInput[]
    pc_id?: IntFilter<"pc"> | number
    cpu?: StringNullableFilter<"pc"> | string | null
    ram?: StringNullableFilter<"pc"> | string | null
    graphic?: StringNullableFilter<"pc"> | string | null
    state?: Enumpc_stateNullableFilter<"pc"> | $Enums.pc_state | null
    power_status?: Enumpc_power_statusNullableFilter<"pc"> | $Enums.pc_power_status | null
    user_id?: IntNullableFilter<"pc"> | number | null
    price?: IntNullableFilter<"pc"> | number | null
    reg_date?: DateTimeNullableFilter<"pc"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    rental?: RentalListRelationFilter
  }

  export type pcOrderByWithRelationInput = {
    pc_id?: SortOrder
    cpu?: SortOrderInput | SortOrder
    ram?: SortOrderInput | SortOrder
    graphic?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    power_status?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    reg_date?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    rental?: rentalOrderByRelationAggregateInput
    _relevance?: pcOrderByRelevanceInput
  }

  export type pcWhereUniqueInput = Prisma.AtLeast<{
    pc_id?: number
    AND?: pcWhereInput | pcWhereInput[]
    OR?: pcWhereInput[]
    NOT?: pcWhereInput | pcWhereInput[]
    cpu?: StringNullableFilter<"pc"> | string | null
    ram?: StringNullableFilter<"pc"> | string | null
    graphic?: StringNullableFilter<"pc"> | string | null
    state?: Enumpc_stateNullableFilter<"pc"> | $Enums.pc_state | null
    power_status?: Enumpc_power_statusNullableFilter<"pc"> | $Enums.pc_power_status | null
    user_id?: IntNullableFilter<"pc"> | number | null
    price?: IntNullableFilter<"pc"> | number | null
    reg_date?: DateTimeNullableFilter<"pc"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    rental?: RentalListRelationFilter
  }, "pc_id">

  export type pcOrderByWithAggregationInput = {
    pc_id?: SortOrder
    cpu?: SortOrderInput | SortOrder
    ram?: SortOrderInput | SortOrder
    graphic?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    power_status?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    reg_date?: SortOrderInput | SortOrder
    _count?: pcCountOrderByAggregateInput
    _avg?: pcAvgOrderByAggregateInput
    _max?: pcMaxOrderByAggregateInput
    _min?: pcMinOrderByAggregateInput
    _sum?: pcSumOrderByAggregateInput
  }

  export type pcScalarWhereWithAggregatesInput = {
    AND?: pcScalarWhereWithAggregatesInput | pcScalarWhereWithAggregatesInput[]
    OR?: pcScalarWhereWithAggregatesInput[]
    NOT?: pcScalarWhereWithAggregatesInput | pcScalarWhereWithAggregatesInput[]
    pc_id?: IntWithAggregatesFilter<"pc"> | number
    cpu?: StringNullableWithAggregatesFilter<"pc"> | string | null
    ram?: StringNullableWithAggregatesFilter<"pc"> | string | null
    graphic?: StringNullableWithAggregatesFilter<"pc"> | string | null
    state?: Enumpc_stateNullableWithAggregatesFilter<"pc"> | $Enums.pc_state | null
    power_status?: Enumpc_power_statusNullableWithAggregatesFilter<"pc"> | $Enums.pc_power_status | null
    user_id?: IntNullableWithAggregatesFilter<"pc"> | number | null
    price?: IntNullableWithAggregatesFilter<"pc"> | number | null
    reg_date?: DateTimeNullableWithAggregatesFilter<"pc"> | Date | string | null
  }

  export type rentalWhereInput = {
    AND?: rentalWhereInput | rentalWhereInput[]
    OR?: rentalWhereInput[]
    NOT?: rentalWhereInput | rentalWhereInput[]
    rental_id?: IntFilter<"rental"> | number
    user_id?: IntFilter<"rental"> | number
    pc_id?: IntFilter<"rental"> | number
    start_date?: DateTimeNullableFilter<"rental"> | Date | string | null
    end_date?: DateTimeNullableFilter<"rental"> | Date | string | null
    auto_renew?: BoolNullableFilter<"rental"> | boolean | null
    status?: Enumrental_statusNullableFilter<"rental"> | $Enums.rental_status | null
    payment?: PaymentListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    pc?: XOR<PcScalarRelationFilter, pcWhereInput>
  }

  export type rentalOrderByWithRelationInput = {
    rental_id?: SortOrder
    user_id?: SortOrder
    pc_id?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    auto_renew?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    payment?: paymentOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
    pc?: pcOrderByWithRelationInput
  }

  export type rentalWhereUniqueInput = Prisma.AtLeast<{
    rental_id?: number
    AND?: rentalWhereInput | rentalWhereInput[]
    OR?: rentalWhereInput[]
    NOT?: rentalWhereInput | rentalWhereInput[]
    user_id?: IntFilter<"rental"> | number
    pc_id?: IntFilter<"rental"> | number
    start_date?: DateTimeNullableFilter<"rental"> | Date | string | null
    end_date?: DateTimeNullableFilter<"rental"> | Date | string | null
    auto_renew?: BoolNullableFilter<"rental"> | boolean | null
    status?: Enumrental_statusNullableFilter<"rental"> | $Enums.rental_status | null
    payment?: PaymentListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    pc?: XOR<PcScalarRelationFilter, pcWhereInput>
  }, "rental_id">

  export type rentalOrderByWithAggregationInput = {
    rental_id?: SortOrder
    user_id?: SortOrder
    pc_id?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    auto_renew?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: rentalCountOrderByAggregateInput
    _avg?: rentalAvgOrderByAggregateInput
    _max?: rentalMaxOrderByAggregateInput
    _min?: rentalMinOrderByAggregateInput
    _sum?: rentalSumOrderByAggregateInput
  }

  export type rentalScalarWhereWithAggregatesInput = {
    AND?: rentalScalarWhereWithAggregatesInput | rentalScalarWhereWithAggregatesInput[]
    OR?: rentalScalarWhereWithAggregatesInput[]
    NOT?: rentalScalarWhereWithAggregatesInput | rentalScalarWhereWithAggregatesInput[]
    rental_id?: IntWithAggregatesFilter<"rental"> | number
    user_id?: IntWithAggregatesFilter<"rental"> | number
    pc_id?: IntWithAggregatesFilter<"rental"> | number
    start_date?: DateTimeNullableWithAggregatesFilter<"rental"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"rental"> | Date | string | null
    auto_renew?: BoolNullableWithAggregatesFilter<"rental"> | boolean | null
    status?: Enumrental_statusNullableWithAggregatesFilter<"rental"> | $Enums.rental_status | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    user_id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    phone?: StringNullableFilter<"user"> | string | null
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    status?: Enumuser_statusFilter<"user"> | $Enums.user_status
    two_factor_enabled?: BoolNullableFilter<"user"> | boolean | null
    join_date?: DateTimeNullableFilter<"user"> | Date | string | null
    last_login?: DateTimeNullableFilter<"user"> | Date | string | null
    inquiry?: InquiryListRelationFilter
    notice?: NoticeListRelationFilter
    payment?: PaymentListRelationFilter
    pc?: PcListRelationFilter
    rental?: RentalListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    two_factor_enabled?: SortOrderInput | SortOrder
    join_date?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    inquiry?: inquiryOrderByRelationAggregateInput
    notice?: noticeOrderByRelationAggregateInput
    payment?: paymentOrderByRelationAggregateInput
    pc?: pcOrderByRelationAggregateInput
    rental?: rentalOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    phone?: StringNullableFilter<"user"> | string | null
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    status?: Enumuser_statusFilter<"user"> | $Enums.user_status
    two_factor_enabled?: BoolNullableFilter<"user"> | boolean | null
    join_date?: DateTimeNullableFilter<"user"> | Date | string | null
    last_login?: DateTimeNullableFilter<"user"> | Date | string | null
    inquiry?: InquiryListRelationFilter
    notice?: NoticeListRelationFilter
    payment?: PaymentListRelationFilter
    pc?: PcListRelationFilter
    rental?: RentalListRelationFilter
  }, "user_id" | "email">

  export type userOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    two_factor_enabled?: SortOrderInput | SortOrder
    join_date?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    phone?: StringNullableWithAggregatesFilter<"user"> | string | null
    role?: Enumuser_roleWithAggregatesFilter<"user"> | $Enums.user_role
    status?: Enumuser_statusWithAggregatesFilter<"user"> | $Enums.user_status
    two_factor_enabled?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    join_date?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    last_login?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type inquiryCreateInput = {
    title: string
    content: string
    file_path?: string | null
    status?: $Enums.inquiry_status | null
    created_at?: Date | string | null
    user: userCreateNestedOneWithoutInquiryInput
  }

  export type inquiryUncheckedCreateInput = {
    inquiry_id?: number
    user_id: number
    title: string
    content: string
    file_path?: string | null
    status?: $Enums.inquiry_status | null
    created_at?: Date | string | null
  }

  export type inquiryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminquiry_statusFieldUpdateOperationsInput | $Enums.inquiry_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutInquiryNestedInput
  }

  export type inquiryUncheckedUpdateInput = {
    inquiry_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminquiry_statusFieldUpdateOperationsInput | $Enums.inquiry_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inquiryCreateManyInput = {
    inquiry_id?: number
    user_id: number
    title: string
    content: string
    file_path?: string | null
    status?: $Enums.inquiry_status | null
    created_at?: Date | string | null
  }

  export type inquiryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminquiry_statusFieldUpdateOperationsInput | $Enums.inquiry_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inquiryUncheckedUpdateManyInput = {
    inquiry_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminquiry_statusFieldUpdateOperationsInput | $Enums.inquiry_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type noticeCreateInput = {
    title: string
    content: string
    type: $Enums.notice_type
    file_path?: string | null
    pinned?: boolean | null
    created_at?: Date | string | null
    user: userCreateNestedOneWithoutNoticeInput
  }

  export type noticeUncheckedCreateInput = {
    notice_id?: number
    admin_id: number
    title: string
    content: string
    type: $Enums.notice_type
    file_path?: string | null
    pinned?: boolean | null
    created_at?: Date | string | null
  }

  export type noticeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: Enumnotice_typeFieldUpdateOperationsInput | $Enums.notice_type
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutNoticeNestedInput
  }

  export type noticeUncheckedUpdateInput = {
    notice_id?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: Enumnotice_typeFieldUpdateOperationsInput | $Enums.notice_type
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type noticeCreateManyInput = {
    notice_id?: number
    admin_id: number
    title: string
    content: string
    type: $Enums.notice_type
    file_path?: string | null
    pinned?: boolean | null
    created_at?: Date | string | null
  }

  export type noticeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: Enumnotice_typeFieldUpdateOperationsInput | $Enums.notice_type
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type noticeUncheckedUpdateManyInput = {
    notice_id?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: Enumnotice_typeFieldUpdateOperationsInput | $Enums.notice_type
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentCreateInput = {
    amount: number
    method?: $Enums.payment_method | null
    status?: $Enums.payment_status | null
    paid_at?: Date | string | null
    user: userCreateNestedOneWithoutPaymentInput
    rental: rentalCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateInput = {
    payment_id?: number
    user_id: number
    rental_id: number
    amount: number
    method?: $Enums.payment_method | null
    status?: $Enums.payment_status | null
    paid_at?: Date | string | null
  }

  export type paymentUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutPaymentNestedInput
    rental?: rentalUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rental_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentCreateManyInput = {
    payment_id?: number
    user_id: number
    rental_id: number
    amount: number
    method?: $Enums.payment_method | null
    status?: $Enums.payment_status | null
    paid_at?: Date | string | null
  }

  export type paymentUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rental_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pcCreateInput = {
    cpu?: string | null
    ram?: string | null
    graphic?: string | null
    state?: $Enums.pc_state | null
    power_status?: $Enums.pc_power_status | null
    price?: number | null
    reg_date?: Date | string | null
    user?: userCreateNestedOneWithoutPcInput
    rental?: rentalCreateNestedManyWithoutPcInput
  }

  export type pcUncheckedCreateInput = {
    pc_id?: number
    cpu?: string | null
    ram?: string | null
    graphic?: string | null
    state?: $Enums.pc_state | null
    power_status?: $Enums.pc_power_status | null
    user_id?: number | null
    price?: number | null
    reg_date?: Date | string | null
    rental?: rentalUncheckedCreateNestedManyWithoutPcInput
  }

  export type pcUpdateInput = {
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    graphic?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableEnumpc_stateFieldUpdateOperationsInput | $Enums.pc_state | null
    power_status?: NullableEnumpc_power_statusFieldUpdateOperationsInput | $Enums.pc_power_status | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    reg_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutPcNestedInput
    rental?: rentalUpdateManyWithoutPcNestedInput
  }

  export type pcUncheckedUpdateInput = {
    pc_id?: IntFieldUpdateOperationsInput | number
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    graphic?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableEnumpc_stateFieldUpdateOperationsInput | $Enums.pc_state | null
    power_status?: NullableEnumpc_power_statusFieldUpdateOperationsInput | $Enums.pc_power_status | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    reg_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rental?: rentalUncheckedUpdateManyWithoutPcNestedInput
  }

  export type pcCreateManyInput = {
    pc_id?: number
    cpu?: string | null
    ram?: string | null
    graphic?: string | null
    state?: $Enums.pc_state | null
    power_status?: $Enums.pc_power_status | null
    user_id?: number | null
    price?: number | null
    reg_date?: Date | string | null
  }

  export type pcUpdateManyMutationInput = {
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    graphic?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableEnumpc_stateFieldUpdateOperationsInput | $Enums.pc_state | null
    power_status?: NullableEnumpc_power_statusFieldUpdateOperationsInput | $Enums.pc_power_status | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    reg_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pcUncheckedUpdateManyInput = {
    pc_id?: IntFieldUpdateOperationsInput | number
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    graphic?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableEnumpc_stateFieldUpdateOperationsInput | $Enums.pc_state | null
    power_status?: NullableEnumpc_power_statusFieldUpdateOperationsInput | $Enums.pc_power_status | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    reg_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rentalCreateInput = {
    start_date?: Date | string | null
    end_date?: Date | string | null
    auto_renew?: boolean | null
    status?: $Enums.rental_status | null
    payment?: paymentCreateNestedManyWithoutRentalInput
    user: userCreateNestedOneWithoutRentalInput
    pc: pcCreateNestedOneWithoutRentalInput
  }

  export type rentalUncheckedCreateInput = {
    rental_id?: number
    user_id: number
    pc_id: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    auto_renew?: boolean | null
    status?: $Enums.rental_status | null
    payment?: paymentUncheckedCreateNestedManyWithoutRentalInput
  }

  export type rentalUpdateInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumrental_statusFieldUpdateOperationsInput | $Enums.rental_status | null
    payment?: paymentUpdateManyWithoutRentalNestedInput
    user?: userUpdateOneRequiredWithoutRentalNestedInput
    pc?: pcUpdateOneRequiredWithoutRentalNestedInput
  }

  export type rentalUncheckedUpdateInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    pc_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumrental_statusFieldUpdateOperationsInput | $Enums.rental_status | null
    payment?: paymentUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type rentalCreateManyInput = {
    rental_id?: number
    user_id: number
    pc_id: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    auto_renew?: boolean | null
    status?: $Enums.rental_status | null
  }

  export type rentalUpdateManyMutationInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumrental_statusFieldUpdateOperationsInput | $Enums.rental_status | null
  }

  export type rentalUncheckedUpdateManyInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    pc_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumrental_statusFieldUpdateOperationsInput | $Enums.rental_status | null
  }

  export type userCreateInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled?: boolean | null
    join_date?: Date | string | null
    last_login?: Date | string | null
    inquiry?: inquiryCreateNestedManyWithoutUserInput
    notice?: noticeCreateNestedManyWithoutUserInput
    payment?: paymentCreateNestedManyWithoutUserInput
    pc?: pcCreateNestedManyWithoutUserInput
    rental?: rentalCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled?: boolean | null
    join_date?: Date | string | null
    last_login?: Date | string | null
    inquiry?: inquiryUncheckedCreateNestedManyWithoutUserInput
    notice?: noticeUncheckedCreateNestedManyWithoutUserInput
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput
    pc?: pcUncheckedCreateNestedManyWithoutUserInput
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inquiry?: inquiryUpdateManyWithoutUserNestedInput
    notice?: noticeUpdateManyWithoutUserNestedInput
    payment?: paymentUpdateManyWithoutUserNestedInput
    pc?: pcUpdateManyWithoutUserNestedInput
    rental?: rentalUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inquiry?: inquiryUncheckedUpdateManyWithoutUserNestedInput
    notice?: noticeUncheckedUpdateManyWithoutUserNestedInput
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput
    pc?: pcUncheckedUpdateManyWithoutUserNestedInput
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled?: boolean | null
    join_date?: Date | string | null
    last_login?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enuminquiry_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.inquiry_status | Enuminquiry_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.inquiry_status[] | null
    notIn?: $Enums.inquiry_status[] | null
    not?: NestedEnuminquiry_statusNullableFilter<$PrismaModel> | $Enums.inquiry_status | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type inquiryOrderByRelevanceInput = {
    fields: inquiryOrderByRelevanceFieldEnum | inquiryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type inquiryCountOrderByAggregateInput = {
    inquiry_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    file_path?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type inquiryAvgOrderByAggregateInput = {
    inquiry_id?: SortOrder
    user_id?: SortOrder
  }

  export type inquiryMaxOrderByAggregateInput = {
    inquiry_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    file_path?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type inquiryMinOrderByAggregateInput = {
    inquiry_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    file_path?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type inquirySumOrderByAggregateInput = {
    inquiry_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enuminquiry_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.inquiry_status | Enuminquiry_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.inquiry_status[] | null
    notIn?: $Enums.inquiry_status[] | null
    not?: NestedEnuminquiry_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.inquiry_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnuminquiry_statusNullableFilter<$PrismaModel>
    _max?: NestedEnuminquiry_statusNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumnotice_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.notice_type | Enumnotice_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notice_type[]
    notIn?: $Enums.notice_type[]
    not?: NestedEnumnotice_typeFilter<$PrismaModel> | $Enums.notice_type
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type noticeOrderByRelevanceInput = {
    fields: noticeOrderByRelevanceFieldEnum | noticeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type noticeCountOrderByAggregateInput = {
    notice_id?: SortOrder
    admin_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    file_path?: SortOrder
    pinned?: SortOrder
    created_at?: SortOrder
  }

  export type noticeAvgOrderByAggregateInput = {
    notice_id?: SortOrder
    admin_id?: SortOrder
  }

  export type noticeMaxOrderByAggregateInput = {
    notice_id?: SortOrder
    admin_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    file_path?: SortOrder
    pinned?: SortOrder
    created_at?: SortOrder
  }

  export type noticeMinOrderByAggregateInput = {
    notice_id?: SortOrder
    admin_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    file_path?: SortOrder
    pinned?: SortOrder
    created_at?: SortOrder
  }

  export type noticeSumOrderByAggregateInput = {
    notice_id?: SortOrder
    admin_id?: SortOrder
  }

  export type Enumnotice_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notice_type | Enumnotice_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notice_type[]
    notIn?: $Enums.notice_type[]
    not?: NestedEnumnotice_typeWithAggregatesFilter<$PrismaModel> | $Enums.notice_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotice_typeFilter<$PrismaModel>
    _max?: NestedEnumnotice_typeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Enumpayment_methodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_method[] | null
    notIn?: $Enums.payment_method[] | null
    not?: NestedEnumpayment_methodNullableFilter<$PrismaModel> | $Enums.payment_method | null
  }

  export type Enumpayment_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_status[] | null
    notIn?: $Enums.payment_status[] | null
    not?: NestedEnumpayment_statusNullableFilter<$PrismaModel> | $Enums.payment_status | null
  }

  export type RentalScalarRelationFilter = {
    is?: rentalWhereInput
    isNot?: rentalWhereInput
  }

  export type paymentCountOrderByAggregateInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paid_at?: SortOrder
  }

  export type paymentAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paid_at?: SortOrder
  }

  export type paymentMinOrderByAggregateInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paid_at?: SortOrder
  }

  export type paymentSumOrderByAggregateInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
  }

  export type Enumpayment_methodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_method[] | null
    notIn?: $Enums.payment_method[] | null
    not?: NestedEnumpayment_methodNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_method | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodNullableFilter<$PrismaModel>
  }

  export type Enumpayment_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_status[] | null
    notIn?: $Enums.payment_status[] | null
    not?: NestedEnumpayment_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusNullableFilter<$PrismaModel>
  }

  export type Enumpc_stateNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.pc_state | Enumpc_stateFieldRefInput<$PrismaModel> | null
    in?: $Enums.pc_state[] | null
    notIn?: $Enums.pc_state[] | null
    not?: NestedEnumpc_stateNullableFilter<$PrismaModel> | $Enums.pc_state | null
  }

  export type Enumpc_power_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.pc_power_status | Enumpc_power_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.pc_power_status[] | null
    notIn?: $Enums.pc_power_status[] | null
    not?: NestedEnumpc_power_statusNullableFilter<$PrismaModel> | $Enums.pc_power_status | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type RentalListRelationFilter = {
    every?: rentalWhereInput
    some?: rentalWhereInput
    none?: rentalWhereInput
  }

  export type rentalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pcOrderByRelevanceInput = {
    fields: pcOrderByRelevanceFieldEnum | pcOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pcCountOrderByAggregateInput = {
    pc_id?: SortOrder
    cpu?: SortOrder
    ram?: SortOrder
    graphic?: SortOrder
    state?: SortOrder
    power_status?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    reg_date?: SortOrder
  }

  export type pcAvgOrderByAggregateInput = {
    pc_id?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
  }

  export type pcMaxOrderByAggregateInput = {
    pc_id?: SortOrder
    cpu?: SortOrder
    ram?: SortOrder
    graphic?: SortOrder
    state?: SortOrder
    power_status?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    reg_date?: SortOrder
  }

  export type pcMinOrderByAggregateInput = {
    pc_id?: SortOrder
    cpu?: SortOrder
    ram?: SortOrder
    graphic?: SortOrder
    state?: SortOrder
    power_status?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    reg_date?: SortOrder
  }

  export type pcSumOrderByAggregateInput = {
    pc_id?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
  }

  export type Enumpc_stateNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pc_state | Enumpc_stateFieldRefInput<$PrismaModel> | null
    in?: $Enums.pc_state[] | null
    notIn?: $Enums.pc_state[] | null
    not?: NestedEnumpc_stateNullableWithAggregatesFilter<$PrismaModel> | $Enums.pc_state | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpc_stateNullableFilter<$PrismaModel>
    _max?: NestedEnumpc_stateNullableFilter<$PrismaModel>
  }

  export type Enumpc_power_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pc_power_status | Enumpc_power_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.pc_power_status[] | null
    notIn?: $Enums.pc_power_status[] | null
    not?: NestedEnumpc_power_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.pc_power_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpc_power_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumpc_power_statusNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumrental_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.rental_status | Enumrental_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.rental_status[] | null
    notIn?: $Enums.rental_status[] | null
    not?: NestedEnumrental_statusNullableFilter<$PrismaModel> | $Enums.rental_status | null
  }

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput
    some?: paymentWhereInput
    none?: paymentWhereInput
  }

  export type PcScalarRelationFilter = {
    is?: pcWhereInput
    isNot?: pcWhereInput
  }

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rentalCountOrderByAggregateInput = {
    rental_id?: SortOrder
    user_id?: SortOrder
    pc_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    auto_renew?: SortOrder
    status?: SortOrder
  }

  export type rentalAvgOrderByAggregateInput = {
    rental_id?: SortOrder
    user_id?: SortOrder
    pc_id?: SortOrder
  }

  export type rentalMaxOrderByAggregateInput = {
    rental_id?: SortOrder
    user_id?: SortOrder
    pc_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    auto_renew?: SortOrder
    status?: SortOrder
  }

  export type rentalMinOrderByAggregateInput = {
    rental_id?: SortOrder
    user_id?: SortOrder
    pc_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    auto_renew?: SortOrder
    status?: SortOrder
  }

  export type rentalSumOrderByAggregateInput = {
    rental_id?: SortOrder
    user_id?: SortOrder
    pc_id?: SortOrder
  }

  export type Enumrental_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rental_status | Enumrental_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.rental_status[] | null
    notIn?: $Enums.rental_status[] | null
    not?: NestedEnumrental_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.rental_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumrental_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumrental_statusNullableFilter<$PrismaModel>
  }

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type Enumuser_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status | Enumuser_statusFieldRefInput<$PrismaModel>
    in?: $Enums.user_status[]
    notIn?: $Enums.user_status[]
    not?: NestedEnumuser_statusFilter<$PrismaModel> | $Enums.user_status
  }

  export type InquiryListRelationFilter = {
    every?: inquiryWhereInput
    some?: inquiryWhereInput
    none?: inquiryWhereInput
  }

  export type NoticeListRelationFilter = {
    every?: noticeWhereInput
    some?: noticeWhereInput
    none?: noticeWhereInput
  }

  export type PcListRelationFilter = {
    every?: pcWhereInput
    some?: pcWhereInput
    none?: pcWhereInput
  }

  export type inquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type noticeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pcOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    two_factor_enabled?: SortOrder
    join_date?: SortOrder
    last_login?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    two_factor_enabled?: SortOrder
    join_date?: SortOrder
    last_login?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    two_factor_enabled?: SortOrder
    join_date?: SortOrder
    last_login?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type Enumuser_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status | Enumuser_statusFieldRefInput<$PrismaModel>
    in?: $Enums.user_status[]
    notIn?: $Enums.user_status[]
    not?: NestedEnumuser_statusWithAggregatesFilter<$PrismaModel> | $Enums.user_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_statusFilter<$PrismaModel>
    _max?: NestedEnumuser_statusFilter<$PrismaModel>
  }

  export type userCreateNestedOneWithoutInquiryInput = {
    create?: XOR<userCreateWithoutInquiryInput, userUncheckedCreateWithoutInquiryInput>
    connectOrCreate?: userCreateOrConnectWithoutInquiryInput
    connect?: userWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnuminquiry_statusFieldUpdateOperationsInput = {
    set?: $Enums.inquiry_status | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneRequiredWithoutInquiryNestedInput = {
    create?: XOR<userCreateWithoutInquiryInput, userUncheckedCreateWithoutInquiryInput>
    connectOrCreate?: userCreateOrConnectWithoutInquiryInput
    upsert?: userUpsertWithoutInquiryInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutInquiryInput, userUpdateWithoutInquiryInput>, userUncheckedUpdateWithoutInquiryInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userCreateNestedOneWithoutNoticeInput = {
    create?: XOR<userCreateWithoutNoticeInput, userUncheckedCreateWithoutNoticeInput>
    connectOrCreate?: userCreateOrConnectWithoutNoticeInput
    connect?: userWhereUniqueInput
  }

  export type Enumnotice_typeFieldUpdateOperationsInput = {
    set?: $Enums.notice_type
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type userUpdateOneRequiredWithoutNoticeNestedInput = {
    create?: XOR<userCreateWithoutNoticeInput, userUncheckedCreateWithoutNoticeInput>
    connectOrCreate?: userCreateOrConnectWithoutNoticeInput
    upsert?: userUpsertWithoutNoticeInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutNoticeInput, userUpdateWithoutNoticeInput>, userUncheckedUpdateWithoutNoticeInput>
  }

  export type userCreateNestedOneWithoutPaymentInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput
    connect?: userWhereUniqueInput
  }

  export type rentalCreateNestedOneWithoutPaymentInput = {
    create?: XOR<rentalCreateWithoutPaymentInput, rentalUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: rentalCreateOrConnectWithoutPaymentInput
    connect?: rentalWhereUniqueInput
  }

  export type NullableEnumpayment_methodFieldUpdateOperationsInput = {
    set?: $Enums.payment_method | null
  }

  export type NullableEnumpayment_statusFieldUpdateOperationsInput = {
    set?: $Enums.payment_status | null
  }

  export type userUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput
    upsert?: userUpsertWithoutPaymentInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPaymentInput, userUpdateWithoutPaymentInput>, userUncheckedUpdateWithoutPaymentInput>
  }

  export type rentalUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<rentalCreateWithoutPaymentInput, rentalUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: rentalCreateOrConnectWithoutPaymentInput
    upsert?: rentalUpsertWithoutPaymentInput
    connect?: rentalWhereUniqueInput
    update?: XOR<XOR<rentalUpdateToOneWithWhereWithoutPaymentInput, rentalUpdateWithoutPaymentInput>, rentalUncheckedUpdateWithoutPaymentInput>
  }

  export type userCreateNestedOneWithoutPcInput = {
    create?: XOR<userCreateWithoutPcInput, userUncheckedCreateWithoutPcInput>
    connectOrCreate?: userCreateOrConnectWithoutPcInput
    connect?: userWhereUniqueInput
  }

  export type rentalCreateNestedManyWithoutPcInput = {
    create?: XOR<rentalCreateWithoutPcInput, rentalUncheckedCreateWithoutPcInput> | rentalCreateWithoutPcInput[] | rentalUncheckedCreateWithoutPcInput[]
    connectOrCreate?: rentalCreateOrConnectWithoutPcInput | rentalCreateOrConnectWithoutPcInput[]
    createMany?: rentalCreateManyPcInputEnvelope
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
  }

  export type rentalUncheckedCreateNestedManyWithoutPcInput = {
    create?: XOR<rentalCreateWithoutPcInput, rentalUncheckedCreateWithoutPcInput> | rentalCreateWithoutPcInput[] | rentalUncheckedCreateWithoutPcInput[]
    connectOrCreate?: rentalCreateOrConnectWithoutPcInput | rentalCreateOrConnectWithoutPcInput[]
    createMany?: rentalCreateManyPcInputEnvelope
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
  }

  export type NullableEnumpc_stateFieldUpdateOperationsInput = {
    set?: $Enums.pc_state | null
  }

  export type NullableEnumpc_power_statusFieldUpdateOperationsInput = {
    set?: $Enums.pc_power_status | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneWithoutPcNestedInput = {
    create?: XOR<userCreateWithoutPcInput, userUncheckedCreateWithoutPcInput>
    connectOrCreate?: userCreateOrConnectWithoutPcInput
    upsert?: userUpsertWithoutPcInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPcInput, userUpdateWithoutPcInput>, userUncheckedUpdateWithoutPcInput>
  }

  export type rentalUpdateManyWithoutPcNestedInput = {
    create?: XOR<rentalCreateWithoutPcInput, rentalUncheckedCreateWithoutPcInput> | rentalCreateWithoutPcInput[] | rentalUncheckedCreateWithoutPcInput[]
    connectOrCreate?: rentalCreateOrConnectWithoutPcInput | rentalCreateOrConnectWithoutPcInput[]
    upsert?: rentalUpsertWithWhereUniqueWithoutPcInput | rentalUpsertWithWhereUniqueWithoutPcInput[]
    createMany?: rentalCreateManyPcInputEnvelope
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    update?: rentalUpdateWithWhereUniqueWithoutPcInput | rentalUpdateWithWhereUniqueWithoutPcInput[]
    updateMany?: rentalUpdateManyWithWhereWithoutPcInput | rentalUpdateManyWithWhereWithoutPcInput[]
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[]
  }

  export type rentalUncheckedUpdateManyWithoutPcNestedInput = {
    create?: XOR<rentalCreateWithoutPcInput, rentalUncheckedCreateWithoutPcInput> | rentalCreateWithoutPcInput[] | rentalUncheckedCreateWithoutPcInput[]
    connectOrCreate?: rentalCreateOrConnectWithoutPcInput | rentalCreateOrConnectWithoutPcInput[]
    upsert?: rentalUpsertWithWhereUniqueWithoutPcInput | rentalUpsertWithWhereUniqueWithoutPcInput[]
    createMany?: rentalCreateManyPcInputEnvelope
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    update?: rentalUpdateWithWhereUniqueWithoutPcInput | rentalUpdateWithWhereUniqueWithoutPcInput[]
    updateMany?: rentalUpdateManyWithWhereWithoutPcInput | rentalUpdateManyWithWhereWithoutPcInput[]
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[]
  }

  export type paymentCreateNestedManyWithoutRentalInput = {
    create?: XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput> | paymentCreateWithoutRentalInput[] | paymentUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutRentalInput | paymentCreateOrConnectWithoutRentalInput[]
    createMany?: paymentCreateManyRentalInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutRentalInput = {
    create?: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>
    connectOrCreate?: userCreateOrConnectWithoutRentalInput
    connect?: userWhereUniqueInput
  }

  export type pcCreateNestedOneWithoutRentalInput = {
    create?: XOR<pcCreateWithoutRentalInput, pcUncheckedCreateWithoutRentalInput>
    connectOrCreate?: pcCreateOrConnectWithoutRentalInput
    connect?: pcWhereUniqueInput
  }

  export type paymentUncheckedCreateNestedManyWithoutRentalInput = {
    create?: XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput> | paymentCreateWithoutRentalInput[] | paymentUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutRentalInput | paymentCreateOrConnectWithoutRentalInput[]
    createMany?: paymentCreateManyRentalInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type NullableEnumrental_statusFieldUpdateOperationsInput = {
    set?: $Enums.rental_status | null
  }

  export type paymentUpdateManyWithoutRentalNestedInput = {
    create?: XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput> | paymentCreateWithoutRentalInput[] | paymentUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutRentalInput | paymentCreateOrConnectWithoutRentalInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutRentalInput | paymentUpsertWithWhereUniqueWithoutRentalInput[]
    createMany?: paymentCreateManyRentalInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutRentalInput | paymentUpdateWithWhereUniqueWithoutRentalInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutRentalInput | paymentUpdateManyWithWhereWithoutRentalInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>
    connectOrCreate?: userCreateOrConnectWithoutRentalInput
    upsert?: userUpsertWithoutRentalInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRentalInput, userUpdateWithoutRentalInput>, userUncheckedUpdateWithoutRentalInput>
  }

  export type pcUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<pcCreateWithoutRentalInput, pcUncheckedCreateWithoutRentalInput>
    connectOrCreate?: pcCreateOrConnectWithoutRentalInput
    upsert?: pcUpsertWithoutRentalInput
    connect?: pcWhereUniqueInput
    update?: XOR<XOR<pcUpdateToOneWithWhereWithoutRentalInput, pcUpdateWithoutRentalInput>, pcUncheckedUpdateWithoutRentalInput>
  }

  export type paymentUncheckedUpdateManyWithoutRentalNestedInput = {
    create?: XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput> | paymentCreateWithoutRentalInput[] | paymentUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutRentalInput | paymentCreateOrConnectWithoutRentalInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutRentalInput | paymentUpsertWithWhereUniqueWithoutRentalInput[]
    createMany?: paymentCreateManyRentalInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutRentalInput | paymentUpdateWithWhereUniqueWithoutRentalInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutRentalInput | paymentUpdateManyWithWhereWithoutRentalInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type inquiryCreateNestedManyWithoutUserInput = {
    create?: XOR<inquiryCreateWithoutUserInput, inquiryUncheckedCreateWithoutUserInput> | inquiryCreateWithoutUserInput[] | inquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inquiryCreateOrConnectWithoutUserInput | inquiryCreateOrConnectWithoutUserInput[]
    createMany?: inquiryCreateManyUserInputEnvelope
    connect?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
  }

  export type noticeCreateNestedManyWithoutUserInput = {
    create?: XOR<noticeCreateWithoutUserInput, noticeUncheckedCreateWithoutUserInput> | noticeCreateWithoutUserInput[] | noticeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: noticeCreateOrConnectWithoutUserInput | noticeCreateOrConnectWithoutUserInput[]
    createMany?: noticeCreateManyUserInputEnvelope
    connect?: noticeWhereUniqueInput | noticeWhereUniqueInput[]
  }

  export type paymentCreateNestedManyWithoutUserInput = {
    create?: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput> | paymentCreateWithoutUserInput[] | paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[]
    createMany?: paymentCreateManyUserInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type pcCreateNestedManyWithoutUserInput = {
    create?: XOR<pcCreateWithoutUserInput, pcUncheckedCreateWithoutUserInput> | pcCreateWithoutUserInput[] | pcUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pcCreateOrConnectWithoutUserInput | pcCreateOrConnectWithoutUserInput[]
    createMany?: pcCreateManyUserInputEnvelope
    connect?: pcWhereUniqueInput | pcWhereUniqueInput[]
  }

  export type rentalCreateNestedManyWithoutUserInput = {
    create?: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput> | rentalCreateWithoutUserInput[] | rentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[]
    createMany?: rentalCreateManyUserInputEnvelope
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
  }

  export type inquiryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<inquiryCreateWithoutUserInput, inquiryUncheckedCreateWithoutUserInput> | inquiryCreateWithoutUserInput[] | inquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inquiryCreateOrConnectWithoutUserInput | inquiryCreateOrConnectWithoutUserInput[]
    createMany?: inquiryCreateManyUserInputEnvelope
    connect?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
  }

  export type noticeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<noticeCreateWithoutUserInput, noticeUncheckedCreateWithoutUserInput> | noticeCreateWithoutUserInput[] | noticeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: noticeCreateOrConnectWithoutUserInput | noticeCreateOrConnectWithoutUserInput[]
    createMany?: noticeCreateManyUserInputEnvelope
    connect?: noticeWhereUniqueInput | noticeWhereUniqueInput[]
  }

  export type paymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput> | paymentCreateWithoutUserInput[] | paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[]
    createMany?: paymentCreateManyUserInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type pcUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<pcCreateWithoutUserInput, pcUncheckedCreateWithoutUserInput> | pcCreateWithoutUserInput[] | pcUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pcCreateOrConnectWithoutUserInput | pcCreateOrConnectWithoutUserInput[]
    createMany?: pcCreateManyUserInputEnvelope
    connect?: pcWhereUniqueInput | pcWhereUniqueInput[]
  }

  export type rentalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput> | rentalCreateWithoutUserInput[] | rentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[]
    createMany?: rentalCreateManyUserInputEnvelope
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type Enumuser_statusFieldUpdateOperationsInput = {
    set?: $Enums.user_status
  }

  export type inquiryUpdateManyWithoutUserNestedInput = {
    create?: XOR<inquiryCreateWithoutUserInput, inquiryUncheckedCreateWithoutUserInput> | inquiryCreateWithoutUserInput[] | inquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inquiryCreateOrConnectWithoutUserInput | inquiryCreateOrConnectWithoutUserInput[]
    upsert?: inquiryUpsertWithWhereUniqueWithoutUserInput | inquiryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: inquiryCreateManyUserInputEnvelope
    set?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    disconnect?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    delete?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    connect?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    update?: inquiryUpdateWithWhereUniqueWithoutUserInput | inquiryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: inquiryUpdateManyWithWhereWithoutUserInput | inquiryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: inquiryScalarWhereInput | inquiryScalarWhereInput[]
  }

  export type noticeUpdateManyWithoutUserNestedInput = {
    create?: XOR<noticeCreateWithoutUserInput, noticeUncheckedCreateWithoutUserInput> | noticeCreateWithoutUserInput[] | noticeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: noticeCreateOrConnectWithoutUserInput | noticeCreateOrConnectWithoutUserInput[]
    upsert?: noticeUpsertWithWhereUniqueWithoutUserInput | noticeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: noticeCreateManyUserInputEnvelope
    set?: noticeWhereUniqueInput | noticeWhereUniqueInput[]
    disconnect?: noticeWhereUniqueInput | noticeWhereUniqueInput[]
    delete?: noticeWhereUniqueInput | noticeWhereUniqueInput[]
    connect?: noticeWhereUniqueInput | noticeWhereUniqueInput[]
    update?: noticeUpdateWithWhereUniqueWithoutUserInput | noticeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: noticeUpdateManyWithWhereWithoutUserInput | noticeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: noticeScalarWhereInput | noticeScalarWhereInput[]
  }

  export type paymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput> | paymentCreateWithoutUserInput[] | paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: paymentCreateManyUserInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type pcUpdateManyWithoutUserNestedInput = {
    create?: XOR<pcCreateWithoutUserInput, pcUncheckedCreateWithoutUserInput> | pcCreateWithoutUserInput[] | pcUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pcCreateOrConnectWithoutUserInput | pcCreateOrConnectWithoutUserInput[]
    upsert?: pcUpsertWithWhereUniqueWithoutUserInput | pcUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: pcCreateManyUserInputEnvelope
    set?: pcWhereUniqueInput | pcWhereUniqueInput[]
    disconnect?: pcWhereUniqueInput | pcWhereUniqueInput[]
    delete?: pcWhereUniqueInput | pcWhereUniqueInput[]
    connect?: pcWhereUniqueInput | pcWhereUniqueInput[]
    update?: pcUpdateWithWhereUniqueWithoutUserInput | pcUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: pcUpdateManyWithWhereWithoutUserInput | pcUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: pcScalarWhereInput | pcScalarWhereInput[]
  }

  export type rentalUpdateManyWithoutUserNestedInput = {
    create?: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput> | rentalCreateWithoutUserInput[] | rentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[]
    upsert?: rentalUpsertWithWhereUniqueWithoutUserInput | rentalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: rentalCreateManyUserInputEnvelope
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    update?: rentalUpdateWithWhereUniqueWithoutUserInput | rentalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: rentalUpdateManyWithWhereWithoutUserInput | rentalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[]
  }

  export type inquiryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<inquiryCreateWithoutUserInput, inquiryUncheckedCreateWithoutUserInput> | inquiryCreateWithoutUserInput[] | inquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inquiryCreateOrConnectWithoutUserInput | inquiryCreateOrConnectWithoutUserInput[]
    upsert?: inquiryUpsertWithWhereUniqueWithoutUserInput | inquiryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: inquiryCreateManyUserInputEnvelope
    set?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    disconnect?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    delete?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    connect?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    update?: inquiryUpdateWithWhereUniqueWithoutUserInput | inquiryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: inquiryUpdateManyWithWhereWithoutUserInput | inquiryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: inquiryScalarWhereInput | inquiryScalarWhereInput[]
  }

  export type noticeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<noticeCreateWithoutUserInput, noticeUncheckedCreateWithoutUserInput> | noticeCreateWithoutUserInput[] | noticeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: noticeCreateOrConnectWithoutUserInput | noticeCreateOrConnectWithoutUserInput[]
    upsert?: noticeUpsertWithWhereUniqueWithoutUserInput | noticeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: noticeCreateManyUserInputEnvelope
    set?: noticeWhereUniqueInput | noticeWhereUniqueInput[]
    disconnect?: noticeWhereUniqueInput | noticeWhereUniqueInput[]
    delete?: noticeWhereUniqueInput | noticeWhereUniqueInput[]
    connect?: noticeWhereUniqueInput | noticeWhereUniqueInput[]
    update?: noticeUpdateWithWhereUniqueWithoutUserInput | noticeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: noticeUpdateManyWithWhereWithoutUserInput | noticeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: noticeScalarWhereInput | noticeScalarWhereInput[]
  }

  export type paymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput> | paymentCreateWithoutUserInput[] | paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: paymentCreateManyUserInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type pcUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<pcCreateWithoutUserInput, pcUncheckedCreateWithoutUserInput> | pcCreateWithoutUserInput[] | pcUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pcCreateOrConnectWithoutUserInput | pcCreateOrConnectWithoutUserInput[]
    upsert?: pcUpsertWithWhereUniqueWithoutUserInput | pcUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: pcCreateManyUserInputEnvelope
    set?: pcWhereUniqueInput | pcWhereUniqueInput[]
    disconnect?: pcWhereUniqueInput | pcWhereUniqueInput[]
    delete?: pcWhereUniqueInput | pcWhereUniqueInput[]
    connect?: pcWhereUniqueInput | pcWhereUniqueInput[]
    update?: pcUpdateWithWhereUniqueWithoutUserInput | pcUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: pcUpdateManyWithWhereWithoutUserInput | pcUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: pcScalarWhereInput | pcScalarWhereInput[]
  }

  export type rentalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput> | rentalCreateWithoutUserInput[] | rentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[]
    upsert?: rentalUpsertWithWhereUniqueWithoutUserInput | rentalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: rentalCreateManyUserInputEnvelope
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[]
    update?: rentalUpdateWithWhereUniqueWithoutUserInput | rentalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: rentalUpdateManyWithWhereWithoutUserInput | rentalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnuminquiry_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.inquiry_status | Enuminquiry_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.inquiry_status[] | null
    notIn?: $Enums.inquiry_status[] | null
    not?: NestedEnuminquiry_statusNullableFilter<$PrismaModel> | $Enums.inquiry_status | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnuminquiry_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.inquiry_status | Enuminquiry_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.inquiry_status[] | null
    notIn?: $Enums.inquiry_status[] | null
    not?: NestedEnuminquiry_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.inquiry_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnuminquiry_statusNullableFilter<$PrismaModel>
    _max?: NestedEnuminquiry_statusNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumnotice_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.notice_type | Enumnotice_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notice_type[]
    notIn?: $Enums.notice_type[]
    not?: NestedEnumnotice_typeFilter<$PrismaModel> | $Enums.notice_type
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumnotice_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notice_type | Enumnotice_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notice_type[]
    notIn?: $Enums.notice_type[]
    not?: NestedEnumnotice_typeWithAggregatesFilter<$PrismaModel> | $Enums.notice_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotice_typeFilter<$PrismaModel>
    _max?: NestedEnumnotice_typeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumpayment_methodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_method[] | null
    notIn?: $Enums.payment_method[] | null
    not?: NestedEnumpayment_methodNullableFilter<$PrismaModel> | $Enums.payment_method | null
  }

  export type NestedEnumpayment_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_status[] | null
    notIn?: $Enums.payment_status[] | null
    not?: NestedEnumpayment_statusNullableFilter<$PrismaModel> | $Enums.payment_status | null
  }

  export type NestedEnumpayment_methodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_method[] | null
    notIn?: $Enums.payment_method[] | null
    not?: NestedEnumpayment_methodNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_method | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodNullableFilter<$PrismaModel>
  }

  export type NestedEnumpayment_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_status[] | null
    notIn?: $Enums.payment_status[] | null
    not?: NestedEnumpayment_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumpc_stateNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.pc_state | Enumpc_stateFieldRefInput<$PrismaModel> | null
    in?: $Enums.pc_state[] | null
    notIn?: $Enums.pc_state[] | null
    not?: NestedEnumpc_stateNullableFilter<$PrismaModel> | $Enums.pc_state | null
  }

  export type NestedEnumpc_power_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.pc_power_status | Enumpc_power_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.pc_power_status[] | null
    notIn?: $Enums.pc_power_status[] | null
    not?: NestedEnumpc_power_statusNullableFilter<$PrismaModel> | $Enums.pc_power_status | null
  }

  export type NestedEnumpc_stateNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pc_state | Enumpc_stateFieldRefInput<$PrismaModel> | null
    in?: $Enums.pc_state[] | null
    notIn?: $Enums.pc_state[] | null
    not?: NestedEnumpc_stateNullableWithAggregatesFilter<$PrismaModel> | $Enums.pc_state | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpc_stateNullableFilter<$PrismaModel>
    _max?: NestedEnumpc_stateNullableFilter<$PrismaModel>
  }

  export type NestedEnumpc_power_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pc_power_status | Enumpc_power_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.pc_power_status[] | null
    notIn?: $Enums.pc_power_status[] | null
    not?: NestedEnumpc_power_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.pc_power_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpc_power_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumpc_power_statusNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumrental_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.rental_status | Enumrental_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.rental_status[] | null
    notIn?: $Enums.rental_status[] | null
    not?: NestedEnumrental_statusNullableFilter<$PrismaModel> | $Enums.rental_status | null
  }

  export type NestedEnumrental_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rental_status | Enumrental_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.rental_status[] | null
    notIn?: $Enums.rental_status[] | null
    not?: NestedEnumrental_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.rental_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumrental_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumrental_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type NestedEnumuser_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status | Enumuser_statusFieldRefInput<$PrismaModel>
    in?: $Enums.user_status[]
    notIn?: $Enums.user_status[]
    not?: NestedEnumuser_statusFilter<$PrismaModel> | $Enums.user_status
  }

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type NestedEnumuser_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status | Enumuser_statusFieldRefInput<$PrismaModel>
    in?: $Enums.user_status[]
    notIn?: $Enums.user_status[]
    not?: NestedEnumuser_statusWithAggregatesFilter<$PrismaModel> | $Enums.user_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_statusFilter<$PrismaModel>
    _max?: NestedEnumuser_statusFilter<$PrismaModel>
  }

  export type userCreateWithoutInquiryInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled?: boolean | null
    join_date?: Date | string | null
    last_login?: Date | string | null
    notice?: noticeCreateNestedManyWithoutUserInput
    payment?: paymentCreateNestedManyWithoutUserInput
    pc?: pcCreateNestedManyWithoutUserInput
    rental?: rentalCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutInquiryInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled?: boolean | null
    join_date?: Date | string | null
    last_login?: Date | string | null
    notice?: noticeUncheckedCreateNestedManyWithoutUserInput
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput
    pc?: pcUncheckedCreateNestedManyWithoutUserInput
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutInquiryInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutInquiryInput, userUncheckedCreateWithoutInquiryInput>
  }

  export type userUpsertWithoutInquiryInput = {
    update: XOR<userUpdateWithoutInquiryInput, userUncheckedUpdateWithoutInquiryInput>
    create: XOR<userCreateWithoutInquiryInput, userUncheckedCreateWithoutInquiryInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutInquiryInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutInquiryInput, userUncheckedUpdateWithoutInquiryInput>
  }

  export type userUpdateWithoutInquiryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notice?: noticeUpdateManyWithoutUserNestedInput
    payment?: paymentUpdateManyWithoutUserNestedInput
    pc?: pcUpdateManyWithoutUserNestedInput
    rental?: rentalUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutInquiryInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notice?: noticeUncheckedUpdateManyWithoutUserNestedInput
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput
    pc?: pcUncheckedUpdateManyWithoutUserNestedInput
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutNoticeInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled?: boolean | null
    join_date?: Date | string | null
    last_login?: Date | string | null
    inquiry?: inquiryCreateNestedManyWithoutUserInput
    payment?: paymentCreateNestedManyWithoutUserInput
    pc?: pcCreateNestedManyWithoutUserInput
    rental?: rentalCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutNoticeInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled?: boolean | null
    join_date?: Date | string | null
    last_login?: Date | string | null
    inquiry?: inquiryUncheckedCreateNestedManyWithoutUserInput
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput
    pc?: pcUncheckedCreateNestedManyWithoutUserInput
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutNoticeInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutNoticeInput, userUncheckedCreateWithoutNoticeInput>
  }

  export type userUpsertWithoutNoticeInput = {
    update: XOR<userUpdateWithoutNoticeInput, userUncheckedUpdateWithoutNoticeInput>
    create: XOR<userCreateWithoutNoticeInput, userUncheckedCreateWithoutNoticeInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutNoticeInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutNoticeInput, userUncheckedUpdateWithoutNoticeInput>
  }

  export type userUpdateWithoutNoticeInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inquiry?: inquiryUpdateManyWithoutUserNestedInput
    payment?: paymentUpdateManyWithoutUserNestedInput
    pc?: pcUpdateManyWithoutUserNestedInput
    rental?: rentalUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutNoticeInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inquiry?: inquiryUncheckedUpdateManyWithoutUserNestedInput
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput
    pc?: pcUncheckedUpdateManyWithoutUserNestedInput
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutPaymentInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled?: boolean | null
    join_date?: Date | string | null
    last_login?: Date | string | null
    inquiry?: inquiryCreateNestedManyWithoutUserInput
    notice?: noticeCreateNestedManyWithoutUserInput
    pc?: pcCreateNestedManyWithoutUserInput
    rental?: rentalCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPaymentInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled?: boolean | null
    join_date?: Date | string | null
    last_login?: Date | string | null
    inquiry?: inquiryUncheckedCreateNestedManyWithoutUserInput
    notice?: noticeUncheckedCreateNestedManyWithoutUserInput
    pc?: pcUncheckedCreateNestedManyWithoutUserInput
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPaymentInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>
  }

  export type rentalCreateWithoutPaymentInput = {
    start_date?: Date | string | null
    end_date?: Date | string | null
    auto_renew?: boolean | null
    status?: $Enums.rental_status | null
    user: userCreateNestedOneWithoutRentalInput
    pc: pcCreateNestedOneWithoutRentalInput
  }

  export type rentalUncheckedCreateWithoutPaymentInput = {
    rental_id?: number
    user_id: number
    pc_id: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    auto_renew?: boolean | null
    status?: $Enums.rental_status | null
  }

  export type rentalCreateOrConnectWithoutPaymentInput = {
    where: rentalWhereUniqueInput
    create: XOR<rentalCreateWithoutPaymentInput, rentalUncheckedCreateWithoutPaymentInput>
  }

  export type userUpsertWithoutPaymentInput = {
    update: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPaymentInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>
  }

  export type userUpdateWithoutPaymentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inquiry?: inquiryUpdateManyWithoutUserNestedInput
    notice?: noticeUpdateManyWithoutUserNestedInput
    pc?: pcUpdateManyWithoutUserNestedInput
    rental?: rentalUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPaymentInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inquiry?: inquiryUncheckedUpdateManyWithoutUserNestedInput
    notice?: noticeUncheckedUpdateManyWithoutUserNestedInput
    pc?: pcUncheckedUpdateManyWithoutUserNestedInput
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type rentalUpsertWithoutPaymentInput = {
    update: XOR<rentalUpdateWithoutPaymentInput, rentalUncheckedUpdateWithoutPaymentInput>
    create: XOR<rentalCreateWithoutPaymentInput, rentalUncheckedCreateWithoutPaymentInput>
    where?: rentalWhereInput
  }

  export type rentalUpdateToOneWithWhereWithoutPaymentInput = {
    where?: rentalWhereInput
    data: XOR<rentalUpdateWithoutPaymentInput, rentalUncheckedUpdateWithoutPaymentInput>
  }

  export type rentalUpdateWithoutPaymentInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumrental_statusFieldUpdateOperationsInput | $Enums.rental_status | null
    user?: userUpdateOneRequiredWithoutRentalNestedInput
    pc?: pcUpdateOneRequiredWithoutRentalNestedInput
  }

  export type rentalUncheckedUpdateWithoutPaymentInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    pc_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumrental_statusFieldUpdateOperationsInput | $Enums.rental_status | null
  }

  export type userCreateWithoutPcInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled?: boolean | null
    join_date?: Date | string | null
    last_login?: Date | string | null
    inquiry?: inquiryCreateNestedManyWithoutUserInput
    notice?: noticeCreateNestedManyWithoutUserInput
    payment?: paymentCreateNestedManyWithoutUserInput
    rental?: rentalCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPcInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled?: boolean | null
    join_date?: Date | string | null
    last_login?: Date | string | null
    inquiry?: inquiryUncheckedCreateNestedManyWithoutUserInput
    notice?: noticeUncheckedCreateNestedManyWithoutUserInput
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPcInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPcInput, userUncheckedCreateWithoutPcInput>
  }

  export type rentalCreateWithoutPcInput = {
    start_date?: Date | string | null
    end_date?: Date | string | null
    auto_renew?: boolean | null
    status?: $Enums.rental_status | null
    payment?: paymentCreateNestedManyWithoutRentalInput
    user: userCreateNestedOneWithoutRentalInput
  }

  export type rentalUncheckedCreateWithoutPcInput = {
    rental_id?: number
    user_id: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    auto_renew?: boolean | null
    status?: $Enums.rental_status | null
    payment?: paymentUncheckedCreateNestedManyWithoutRentalInput
  }

  export type rentalCreateOrConnectWithoutPcInput = {
    where: rentalWhereUniqueInput
    create: XOR<rentalCreateWithoutPcInput, rentalUncheckedCreateWithoutPcInput>
  }

  export type rentalCreateManyPcInputEnvelope = {
    data: rentalCreateManyPcInput | rentalCreateManyPcInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutPcInput = {
    update: XOR<userUpdateWithoutPcInput, userUncheckedUpdateWithoutPcInput>
    create: XOR<userCreateWithoutPcInput, userUncheckedCreateWithoutPcInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPcInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPcInput, userUncheckedUpdateWithoutPcInput>
  }

  export type userUpdateWithoutPcInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inquiry?: inquiryUpdateManyWithoutUserNestedInput
    notice?: noticeUpdateManyWithoutUserNestedInput
    payment?: paymentUpdateManyWithoutUserNestedInput
    rental?: rentalUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPcInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inquiry?: inquiryUncheckedUpdateManyWithoutUserNestedInput
    notice?: noticeUncheckedUpdateManyWithoutUserNestedInput
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type rentalUpsertWithWhereUniqueWithoutPcInput = {
    where: rentalWhereUniqueInput
    update: XOR<rentalUpdateWithoutPcInput, rentalUncheckedUpdateWithoutPcInput>
    create: XOR<rentalCreateWithoutPcInput, rentalUncheckedCreateWithoutPcInput>
  }

  export type rentalUpdateWithWhereUniqueWithoutPcInput = {
    where: rentalWhereUniqueInput
    data: XOR<rentalUpdateWithoutPcInput, rentalUncheckedUpdateWithoutPcInput>
  }

  export type rentalUpdateManyWithWhereWithoutPcInput = {
    where: rentalScalarWhereInput
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutPcInput>
  }

  export type rentalScalarWhereInput = {
    AND?: rentalScalarWhereInput | rentalScalarWhereInput[]
    OR?: rentalScalarWhereInput[]
    NOT?: rentalScalarWhereInput | rentalScalarWhereInput[]
    rental_id?: IntFilter<"rental"> | number
    user_id?: IntFilter<"rental"> | number
    pc_id?: IntFilter<"rental"> | number
    start_date?: DateTimeNullableFilter<"rental"> | Date | string | null
    end_date?: DateTimeNullableFilter<"rental"> | Date | string | null
    auto_renew?: BoolNullableFilter<"rental"> | boolean | null
    status?: Enumrental_statusNullableFilter<"rental"> | $Enums.rental_status | null
  }

  export type paymentCreateWithoutRentalInput = {
    amount: number
    method?: $Enums.payment_method | null
    status?: $Enums.payment_status | null
    paid_at?: Date | string | null
    user: userCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateWithoutRentalInput = {
    payment_id?: number
    user_id: number
    amount: number
    method?: $Enums.payment_method | null
    status?: $Enums.payment_status | null
    paid_at?: Date | string | null
  }

  export type paymentCreateOrConnectWithoutRentalInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput>
  }

  export type paymentCreateManyRentalInputEnvelope = {
    data: paymentCreateManyRentalInput | paymentCreateManyRentalInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutRentalInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled?: boolean | null
    join_date?: Date | string | null
    last_login?: Date | string | null
    inquiry?: inquiryCreateNestedManyWithoutUserInput
    notice?: noticeCreateNestedManyWithoutUserInput
    payment?: paymentCreateNestedManyWithoutUserInput
    pc?: pcCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRentalInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.user_role
    status: $Enums.user_status
    two_factor_enabled?: boolean | null
    join_date?: Date | string | null
    last_login?: Date | string | null
    inquiry?: inquiryUncheckedCreateNestedManyWithoutUserInput
    notice?: noticeUncheckedCreateNestedManyWithoutUserInput
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput
    pc?: pcUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRentalInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>
  }

  export type pcCreateWithoutRentalInput = {
    cpu?: string | null
    ram?: string | null
    graphic?: string | null
    state?: $Enums.pc_state | null
    power_status?: $Enums.pc_power_status | null
    price?: number | null
    reg_date?: Date | string | null
    user?: userCreateNestedOneWithoutPcInput
  }

  export type pcUncheckedCreateWithoutRentalInput = {
    pc_id?: number
    cpu?: string | null
    ram?: string | null
    graphic?: string | null
    state?: $Enums.pc_state | null
    power_status?: $Enums.pc_power_status | null
    user_id?: number | null
    price?: number | null
    reg_date?: Date | string | null
  }

  export type pcCreateOrConnectWithoutRentalInput = {
    where: pcWhereUniqueInput
    create: XOR<pcCreateWithoutRentalInput, pcUncheckedCreateWithoutRentalInput>
  }

  export type paymentUpsertWithWhereUniqueWithoutRentalInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutRentalInput, paymentUncheckedUpdateWithoutRentalInput>
    create: XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutRentalInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutRentalInput, paymentUncheckedUpdateWithoutRentalInput>
  }

  export type paymentUpdateManyWithWhereWithoutRentalInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutRentalInput>
  }

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[]
    OR?: paymentScalarWhereInput[]
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[]
    payment_id?: IntFilter<"payment"> | number
    user_id?: IntFilter<"payment"> | number
    rental_id?: IntFilter<"payment"> | number
    amount?: IntFilter<"payment"> | number
    method?: Enumpayment_methodNullableFilter<"payment"> | $Enums.payment_method | null
    status?: Enumpayment_statusNullableFilter<"payment"> | $Enums.payment_status | null
    paid_at?: DateTimeNullableFilter<"payment"> | Date | string | null
  }

  export type userUpsertWithoutRentalInput = {
    update: XOR<userUpdateWithoutRentalInput, userUncheckedUpdateWithoutRentalInput>
    create: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRentalInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRentalInput, userUncheckedUpdateWithoutRentalInput>
  }

  export type userUpdateWithoutRentalInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inquiry?: inquiryUpdateManyWithoutUserNestedInput
    notice?: noticeUpdateManyWithoutUserNestedInput
    payment?: paymentUpdateManyWithoutUserNestedInput
    pc?: pcUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRentalInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    two_factor_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inquiry?: inquiryUncheckedUpdateManyWithoutUserNestedInput
    notice?: noticeUncheckedUpdateManyWithoutUserNestedInput
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput
    pc?: pcUncheckedUpdateManyWithoutUserNestedInput
  }

  export type pcUpsertWithoutRentalInput = {
    update: XOR<pcUpdateWithoutRentalInput, pcUncheckedUpdateWithoutRentalInput>
    create: XOR<pcCreateWithoutRentalInput, pcUncheckedCreateWithoutRentalInput>
    where?: pcWhereInput
  }

  export type pcUpdateToOneWithWhereWithoutRentalInput = {
    where?: pcWhereInput
    data: XOR<pcUpdateWithoutRentalInput, pcUncheckedUpdateWithoutRentalInput>
  }

  export type pcUpdateWithoutRentalInput = {
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    graphic?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableEnumpc_stateFieldUpdateOperationsInput | $Enums.pc_state | null
    power_status?: NullableEnumpc_power_statusFieldUpdateOperationsInput | $Enums.pc_power_status | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    reg_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutPcNestedInput
  }

  export type pcUncheckedUpdateWithoutRentalInput = {
    pc_id?: IntFieldUpdateOperationsInput | number
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    graphic?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableEnumpc_stateFieldUpdateOperationsInput | $Enums.pc_state | null
    power_status?: NullableEnumpc_power_statusFieldUpdateOperationsInput | $Enums.pc_power_status | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    reg_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inquiryCreateWithoutUserInput = {
    title: string
    content: string
    file_path?: string | null
    status?: $Enums.inquiry_status | null
    created_at?: Date | string | null
  }

  export type inquiryUncheckedCreateWithoutUserInput = {
    inquiry_id?: number
    title: string
    content: string
    file_path?: string | null
    status?: $Enums.inquiry_status | null
    created_at?: Date | string | null
  }

  export type inquiryCreateOrConnectWithoutUserInput = {
    where: inquiryWhereUniqueInput
    create: XOR<inquiryCreateWithoutUserInput, inquiryUncheckedCreateWithoutUserInput>
  }

  export type inquiryCreateManyUserInputEnvelope = {
    data: inquiryCreateManyUserInput | inquiryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type noticeCreateWithoutUserInput = {
    title: string
    content: string
    type: $Enums.notice_type
    file_path?: string | null
    pinned?: boolean | null
    created_at?: Date | string | null
  }

  export type noticeUncheckedCreateWithoutUserInput = {
    notice_id?: number
    title: string
    content: string
    type: $Enums.notice_type
    file_path?: string | null
    pinned?: boolean | null
    created_at?: Date | string | null
  }

  export type noticeCreateOrConnectWithoutUserInput = {
    where: noticeWhereUniqueInput
    create: XOR<noticeCreateWithoutUserInput, noticeUncheckedCreateWithoutUserInput>
  }

  export type noticeCreateManyUserInputEnvelope = {
    data: noticeCreateManyUserInput | noticeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type paymentCreateWithoutUserInput = {
    amount: number
    method?: $Enums.payment_method | null
    status?: $Enums.payment_status | null
    paid_at?: Date | string | null
    rental: rentalCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateWithoutUserInput = {
    payment_id?: number
    rental_id: number
    amount: number
    method?: $Enums.payment_method | null
    status?: $Enums.payment_status | null
    paid_at?: Date | string | null
  }

  export type paymentCreateOrConnectWithoutUserInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
  }

  export type paymentCreateManyUserInputEnvelope = {
    data: paymentCreateManyUserInput | paymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type pcCreateWithoutUserInput = {
    cpu?: string | null
    ram?: string | null
    graphic?: string | null
    state?: $Enums.pc_state | null
    power_status?: $Enums.pc_power_status | null
    price?: number | null
    reg_date?: Date | string | null
    rental?: rentalCreateNestedManyWithoutPcInput
  }

  export type pcUncheckedCreateWithoutUserInput = {
    pc_id?: number
    cpu?: string | null
    ram?: string | null
    graphic?: string | null
    state?: $Enums.pc_state | null
    power_status?: $Enums.pc_power_status | null
    price?: number | null
    reg_date?: Date | string | null
    rental?: rentalUncheckedCreateNestedManyWithoutPcInput
  }

  export type pcCreateOrConnectWithoutUserInput = {
    where: pcWhereUniqueInput
    create: XOR<pcCreateWithoutUserInput, pcUncheckedCreateWithoutUserInput>
  }

  export type pcCreateManyUserInputEnvelope = {
    data: pcCreateManyUserInput | pcCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type rentalCreateWithoutUserInput = {
    start_date?: Date | string | null
    end_date?: Date | string | null
    auto_renew?: boolean | null
    status?: $Enums.rental_status | null
    payment?: paymentCreateNestedManyWithoutRentalInput
    pc: pcCreateNestedOneWithoutRentalInput
  }

  export type rentalUncheckedCreateWithoutUserInput = {
    rental_id?: number
    pc_id: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    auto_renew?: boolean | null
    status?: $Enums.rental_status | null
    payment?: paymentUncheckedCreateNestedManyWithoutRentalInput
  }

  export type rentalCreateOrConnectWithoutUserInput = {
    where: rentalWhereUniqueInput
    create: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
  }

  export type rentalCreateManyUserInputEnvelope = {
    data: rentalCreateManyUserInput | rentalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type inquiryUpsertWithWhereUniqueWithoutUserInput = {
    where: inquiryWhereUniqueInput
    update: XOR<inquiryUpdateWithoutUserInput, inquiryUncheckedUpdateWithoutUserInput>
    create: XOR<inquiryCreateWithoutUserInput, inquiryUncheckedCreateWithoutUserInput>
  }

  export type inquiryUpdateWithWhereUniqueWithoutUserInput = {
    where: inquiryWhereUniqueInput
    data: XOR<inquiryUpdateWithoutUserInput, inquiryUncheckedUpdateWithoutUserInput>
  }

  export type inquiryUpdateManyWithWhereWithoutUserInput = {
    where: inquiryScalarWhereInput
    data: XOR<inquiryUpdateManyMutationInput, inquiryUncheckedUpdateManyWithoutUserInput>
  }

  export type inquiryScalarWhereInput = {
    AND?: inquiryScalarWhereInput | inquiryScalarWhereInput[]
    OR?: inquiryScalarWhereInput[]
    NOT?: inquiryScalarWhereInput | inquiryScalarWhereInput[]
    inquiry_id?: IntFilter<"inquiry"> | number
    user_id?: IntFilter<"inquiry"> | number
    title?: StringFilter<"inquiry"> | string
    content?: StringFilter<"inquiry"> | string
    file_path?: StringNullableFilter<"inquiry"> | string | null
    status?: Enuminquiry_statusNullableFilter<"inquiry"> | $Enums.inquiry_status | null
    created_at?: DateTimeNullableFilter<"inquiry"> | Date | string | null
  }

  export type noticeUpsertWithWhereUniqueWithoutUserInput = {
    where: noticeWhereUniqueInput
    update: XOR<noticeUpdateWithoutUserInput, noticeUncheckedUpdateWithoutUserInput>
    create: XOR<noticeCreateWithoutUserInput, noticeUncheckedCreateWithoutUserInput>
  }

  export type noticeUpdateWithWhereUniqueWithoutUserInput = {
    where: noticeWhereUniqueInput
    data: XOR<noticeUpdateWithoutUserInput, noticeUncheckedUpdateWithoutUserInput>
  }

  export type noticeUpdateManyWithWhereWithoutUserInput = {
    where: noticeScalarWhereInput
    data: XOR<noticeUpdateManyMutationInput, noticeUncheckedUpdateManyWithoutUserInput>
  }

  export type noticeScalarWhereInput = {
    AND?: noticeScalarWhereInput | noticeScalarWhereInput[]
    OR?: noticeScalarWhereInput[]
    NOT?: noticeScalarWhereInput | noticeScalarWhereInput[]
    notice_id?: IntFilter<"notice"> | number
    admin_id?: IntFilter<"notice"> | number
    title?: StringFilter<"notice"> | string
    content?: StringFilter<"notice"> | string
    type?: Enumnotice_typeFilter<"notice"> | $Enums.notice_type
    file_path?: StringNullableFilter<"notice"> | string | null
    pinned?: BoolNullableFilter<"notice"> | boolean | null
    created_at?: DateTimeNullableFilter<"notice"> | Date | string | null
  }

  export type paymentUpsertWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>
  }

  export type paymentUpdateManyWithWhereWithoutUserInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutUserInput>
  }

  export type pcUpsertWithWhereUniqueWithoutUserInput = {
    where: pcWhereUniqueInput
    update: XOR<pcUpdateWithoutUserInput, pcUncheckedUpdateWithoutUserInput>
    create: XOR<pcCreateWithoutUserInput, pcUncheckedCreateWithoutUserInput>
  }

  export type pcUpdateWithWhereUniqueWithoutUserInput = {
    where: pcWhereUniqueInput
    data: XOR<pcUpdateWithoutUserInput, pcUncheckedUpdateWithoutUserInput>
  }

  export type pcUpdateManyWithWhereWithoutUserInput = {
    where: pcScalarWhereInput
    data: XOR<pcUpdateManyMutationInput, pcUncheckedUpdateManyWithoutUserInput>
  }

  export type pcScalarWhereInput = {
    AND?: pcScalarWhereInput | pcScalarWhereInput[]
    OR?: pcScalarWhereInput[]
    NOT?: pcScalarWhereInput | pcScalarWhereInput[]
    pc_id?: IntFilter<"pc"> | number
    cpu?: StringNullableFilter<"pc"> | string | null
    ram?: StringNullableFilter<"pc"> | string | null
    graphic?: StringNullableFilter<"pc"> | string | null
    state?: Enumpc_stateNullableFilter<"pc"> | $Enums.pc_state | null
    power_status?: Enumpc_power_statusNullableFilter<"pc"> | $Enums.pc_power_status | null
    user_id?: IntNullableFilter<"pc"> | number | null
    price?: IntNullableFilter<"pc"> | number | null
    reg_date?: DateTimeNullableFilter<"pc"> | Date | string | null
  }

  export type rentalUpsertWithWhereUniqueWithoutUserInput = {
    where: rentalWhereUniqueInput
    update: XOR<rentalUpdateWithoutUserInput, rentalUncheckedUpdateWithoutUserInput>
    create: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
  }

  export type rentalUpdateWithWhereUniqueWithoutUserInput = {
    where: rentalWhereUniqueInput
    data: XOR<rentalUpdateWithoutUserInput, rentalUncheckedUpdateWithoutUserInput>
  }

  export type rentalUpdateManyWithWhereWithoutUserInput = {
    where: rentalScalarWhereInput
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutUserInput>
  }

  export type rentalCreateManyPcInput = {
    rental_id?: number
    user_id: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    auto_renew?: boolean | null
    status?: $Enums.rental_status | null
  }

  export type rentalUpdateWithoutPcInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumrental_statusFieldUpdateOperationsInput | $Enums.rental_status | null
    payment?: paymentUpdateManyWithoutRentalNestedInput
    user?: userUpdateOneRequiredWithoutRentalNestedInput
  }

  export type rentalUncheckedUpdateWithoutPcInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumrental_statusFieldUpdateOperationsInput | $Enums.rental_status | null
    payment?: paymentUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type rentalUncheckedUpdateManyWithoutPcInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumrental_statusFieldUpdateOperationsInput | $Enums.rental_status | null
  }

  export type paymentCreateManyRentalInput = {
    payment_id?: number
    user_id: number
    amount: number
    method?: $Enums.payment_method | null
    status?: $Enums.payment_status | null
    paid_at?: Date | string | null
  }

  export type paymentUpdateWithoutRentalInput = {
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateWithoutRentalInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentUncheckedUpdateManyWithoutRentalInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inquiryCreateManyUserInput = {
    inquiry_id?: number
    title: string
    content: string
    file_path?: string | null
    status?: $Enums.inquiry_status | null
    created_at?: Date | string | null
  }

  export type noticeCreateManyUserInput = {
    notice_id?: number
    title: string
    content: string
    type: $Enums.notice_type
    file_path?: string | null
    pinned?: boolean | null
    created_at?: Date | string | null
  }

  export type paymentCreateManyUserInput = {
    payment_id?: number
    rental_id: number
    amount: number
    method?: $Enums.payment_method | null
    status?: $Enums.payment_status | null
    paid_at?: Date | string | null
  }

  export type pcCreateManyUserInput = {
    pc_id?: number
    cpu?: string | null
    ram?: string | null
    graphic?: string | null
    state?: $Enums.pc_state | null
    power_status?: $Enums.pc_power_status | null
    price?: number | null
    reg_date?: Date | string | null
  }

  export type rentalCreateManyUserInput = {
    rental_id?: number
    pc_id: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    auto_renew?: boolean | null
    status?: $Enums.rental_status | null
  }

  export type inquiryUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminquiry_statusFieldUpdateOperationsInput | $Enums.inquiry_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inquiryUncheckedUpdateWithoutUserInput = {
    inquiry_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminquiry_statusFieldUpdateOperationsInput | $Enums.inquiry_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inquiryUncheckedUpdateManyWithoutUserInput = {
    inquiry_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminquiry_statusFieldUpdateOperationsInput | $Enums.inquiry_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type noticeUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: Enumnotice_typeFieldUpdateOperationsInput | $Enums.notice_type
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type noticeUncheckedUpdateWithoutUserInput = {
    notice_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: Enumnotice_typeFieldUpdateOperationsInput | $Enums.notice_type
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type noticeUncheckedUpdateManyWithoutUserInput = {
    notice_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: Enumnotice_typeFieldUpdateOperationsInput | $Enums.notice_type
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rental?: rentalUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateWithoutUserInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    rental_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentUncheckedUpdateManyWithoutUserInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    rental_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pcUpdateWithoutUserInput = {
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    graphic?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableEnumpc_stateFieldUpdateOperationsInput | $Enums.pc_state | null
    power_status?: NullableEnumpc_power_statusFieldUpdateOperationsInput | $Enums.pc_power_status | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    reg_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rental?: rentalUpdateManyWithoutPcNestedInput
  }

  export type pcUncheckedUpdateWithoutUserInput = {
    pc_id?: IntFieldUpdateOperationsInput | number
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    graphic?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableEnumpc_stateFieldUpdateOperationsInput | $Enums.pc_state | null
    power_status?: NullableEnumpc_power_statusFieldUpdateOperationsInput | $Enums.pc_power_status | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    reg_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rental?: rentalUncheckedUpdateManyWithoutPcNestedInput
  }

  export type pcUncheckedUpdateManyWithoutUserInput = {
    pc_id?: IntFieldUpdateOperationsInput | number
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    graphic?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableEnumpc_stateFieldUpdateOperationsInput | $Enums.pc_state | null
    power_status?: NullableEnumpc_power_statusFieldUpdateOperationsInput | $Enums.pc_power_status | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    reg_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rentalUpdateWithoutUserInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumrental_statusFieldUpdateOperationsInput | $Enums.rental_status | null
    payment?: paymentUpdateManyWithoutRentalNestedInput
    pc?: pcUpdateOneRequiredWithoutRentalNestedInput
  }

  export type rentalUncheckedUpdateWithoutUserInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    pc_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumrental_statusFieldUpdateOperationsInput | $Enums.rental_status | null
    payment?: paymentUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type rentalUncheckedUpdateManyWithoutUserInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    pc_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumrental_statusFieldUpdateOperationsInput | $Enums.rental_status | null
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