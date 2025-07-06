
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
 * Model JobMelaBeneficiary
 * 
 */
export type JobMelaBeneficiary = $Result.DefaultSelection<Prisma.$JobMelaBeneficiaryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more JobMelaBeneficiaries
 * const jobMelaBeneficiaries = await prisma.jobMelaBeneficiary.findMany()
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
   * // Fetch zero or more JobMelaBeneficiaries
   * const jobMelaBeneficiaries = await prisma.jobMelaBeneficiary.findMany()
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
   * `prisma.jobMelaBeneficiary`: Exposes CRUD operations for the **JobMelaBeneficiary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobMelaBeneficiaries
    * const jobMelaBeneficiaries = await prisma.jobMelaBeneficiary.findMany()
    * ```
    */
  get jobMelaBeneficiary(): Prisma.JobMelaBeneficiaryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    JobMelaBeneficiary: 'JobMelaBeneficiary'
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
      modelProps: "jobMelaBeneficiary"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      JobMelaBeneficiary: {
        payload: Prisma.$JobMelaBeneficiaryPayload<ExtArgs>
        fields: Prisma.JobMelaBeneficiaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobMelaBeneficiaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMelaBeneficiaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobMelaBeneficiaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMelaBeneficiaryPayload>
          }
          findFirst: {
            args: Prisma.JobMelaBeneficiaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMelaBeneficiaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobMelaBeneficiaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMelaBeneficiaryPayload>
          }
          findMany: {
            args: Prisma.JobMelaBeneficiaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMelaBeneficiaryPayload>[]
          }
          create: {
            args: Prisma.JobMelaBeneficiaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMelaBeneficiaryPayload>
          }
          createMany: {
            args: Prisma.JobMelaBeneficiaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JobMelaBeneficiaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMelaBeneficiaryPayload>
          }
          update: {
            args: Prisma.JobMelaBeneficiaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMelaBeneficiaryPayload>
          }
          deleteMany: {
            args: Prisma.JobMelaBeneficiaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobMelaBeneficiaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobMelaBeneficiaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMelaBeneficiaryPayload>
          }
          aggregate: {
            args: Prisma.JobMelaBeneficiaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobMelaBeneficiary>
          }
          groupBy: {
            args: Prisma.JobMelaBeneficiaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobMelaBeneficiaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobMelaBeneficiaryCountArgs<ExtArgs>
            result: $Utils.Optional<JobMelaBeneficiaryCountAggregateOutputType> | number
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
    jobMelaBeneficiary?: JobMelaBeneficiaryOmit
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
   * Models
   */

  /**
   * Model JobMelaBeneficiary
   */

  export type AggregateJobMelaBeneficiary = {
    _count: JobMelaBeneficiaryCountAggregateOutputType | null
    _avg: JobMelaBeneficiaryAvgAggregateOutputType | null
    _sum: JobMelaBeneficiarySumAggregateOutputType | null
    _min: JobMelaBeneficiaryMinAggregateOutputType | null
    _max: JobMelaBeneficiaryMaxAggregateOutputType | null
  }

  export type JobMelaBeneficiaryAvgAggregateOutputType = {
    id: number | null
  }

  export type JobMelaBeneficiarySumAggregateOutputType = {
    id: number | null
  }

  export type JobMelaBeneficiaryMinAggregateOutputType = {
    id: number | null
    registration_number: string | null
    full_name: string | null
    dob: Date | null
    gender: string | null
    mobile_number: string | null
    email_address: string | null
    current_address: string | null
    pincode: string | null
    highest_qualification: string | null
    other_qualification: string | null
    year_of_passing: string | null
    expected_year_of_completion: string | null
    overall_percentage: string | null
    tenth_board: string | null
    twelfth_board: string | null
    education_stream: string | null
    work_experience: string | null
    other_stream: string | null
    areas_of_interest: string | null
    specific_skills: string | null
    currently_enrolled: string | null
    completed_skill_program: string | null
    preferred_sectors: string | null
    preferred_location: string | null
    open_to_out_of_state: boolean | null
    payment_confired: boolean | null
    payment_waiver_reason: string | null
    status: boolean | null
    prior_experience: string | null
    has_resume: boolean | null
    additional_info: string | null
    has_iti: boolean | null
    has_diploma: boolean | null
    other_iti_trade: string | null
    other_diploma_stream: string | null
    has_experience: boolean | null
    currently_working: boolean | null
    experience_company_name: string | null
    experience_years: string | null
    current_company_name: string | null
    current_year_of_joining: string | null
    has_appointment_letter: boolean | null
    has_salary_slip: boolean | null
    has_relieving_letter: boolean | null
    all_data_verified: boolean | null
    created_at: Date | null
  }

  export type JobMelaBeneficiaryMaxAggregateOutputType = {
    id: number | null
    registration_number: string | null
    full_name: string | null
    dob: Date | null
    gender: string | null
    mobile_number: string | null
    email_address: string | null
    current_address: string | null
    pincode: string | null
    highest_qualification: string | null
    other_qualification: string | null
    year_of_passing: string | null
    expected_year_of_completion: string | null
    overall_percentage: string | null
    tenth_board: string | null
    twelfth_board: string | null
    education_stream: string | null
    work_experience: string | null
    other_stream: string | null
    areas_of_interest: string | null
    specific_skills: string | null
    currently_enrolled: string | null
    completed_skill_program: string | null
    preferred_sectors: string | null
    preferred_location: string | null
    open_to_out_of_state: boolean | null
    payment_confired: boolean | null
    payment_waiver_reason: string | null
    status: boolean | null
    prior_experience: string | null
    has_resume: boolean | null
    additional_info: string | null
    has_iti: boolean | null
    has_diploma: boolean | null
    other_iti_trade: string | null
    other_diploma_stream: string | null
    has_experience: boolean | null
    currently_working: boolean | null
    experience_company_name: string | null
    experience_years: string | null
    current_company_name: string | null
    current_year_of_joining: string | null
    has_appointment_letter: boolean | null
    has_salary_slip: boolean | null
    has_relieving_letter: boolean | null
    all_data_verified: boolean | null
    created_at: Date | null
  }

  export type JobMelaBeneficiaryCountAggregateOutputType = {
    id: number
    registration_number: number
    full_name: number
    dob: number
    gender: number
    mobile_number: number
    email_address: number
    current_address: number
    pincode: number
    highest_qualification: number
    other_qualification: number
    year_of_passing: number
    expected_year_of_completion: number
    overall_percentage: number
    tenth_board: number
    twelfth_board: number
    education_stream: number
    work_experience: number
    other_stream: number
    areas_of_interest: number
    specific_skills: number
    currently_enrolled: number
    completed_skill_program: number
    preferred_sectors: number
    preferred_location: number
    open_to_out_of_state: number
    payment_confired: number
    payment_waiver_reason: number
    status: number
    prior_experience: number
    has_resume: number
    additional_info: number
    has_iti: number
    has_diploma: number
    other_iti_trade: number
    other_diploma_stream: number
    has_experience: number
    currently_working: number
    experience_company_name: number
    experience_years: number
    current_company_name: number
    current_year_of_joining: number
    has_appointment_letter: number
    has_salary_slip: number
    has_relieving_letter: number
    all_data_verified: number
    created_at: number
    _all: number
  }


  export type JobMelaBeneficiaryAvgAggregateInputType = {
    id?: true
  }

  export type JobMelaBeneficiarySumAggregateInputType = {
    id?: true
  }

  export type JobMelaBeneficiaryMinAggregateInputType = {
    id?: true
    registration_number?: true
    full_name?: true
    dob?: true
    gender?: true
    mobile_number?: true
    email_address?: true
    current_address?: true
    pincode?: true
    highest_qualification?: true
    other_qualification?: true
    year_of_passing?: true
    expected_year_of_completion?: true
    overall_percentage?: true
    tenth_board?: true
    twelfth_board?: true
    education_stream?: true
    work_experience?: true
    other_stream?: true
    areas_of_interest?: true
    specific_skills?: true
    currently_enrolled?: true
    completed_skill_program?: true
    preferred_sectors?: true
    preferred_location?: true
    open_to_out_of_state?: true
    payment_confired?: true
    payment_waiver_reason?: true
    status?: true
    prior_experience?: true
    has_resume?: true
    additional_info?: true
    has_iti?: true
    has_diploma?: true
    other_iti_trade?: true
    other_diploma_stream?: true
    has_experience?: true
    currently_working?: true
    experience_company_name?: true
    experience_years?: true
    current_company_name?: true
    current_year_of_joining?: true
    has_appointment_letter?: true
    has_salary_slip?: true
    has_relieving_letter?: true
    all_data_verified?: true
    created_at?: true
  }

  export type JobMelaBeneficiaryMaxAggregateInputType = {
    id?: true
    registration_number?: true
    full_name?: true
    dob?: true
    gender?: true
    mobile_number?: true
    email_address?: true
    current_address?: true
    pincode?: true
    highest_qualification?: true
    other_qualification?: true
    year_of_passing?: true
    expected_year_of_completion?: true
    overall_percentage?: true
    tenth_board?: true
    twelfth_board?: true
    education_stream?: true
    work_experience?: true
    other_stream?: true
    areas_of_interest?: true
    specific_skills?: true
    currently_enrolled?: true
    completed_skill_program?: true
    preferred_sectors?: true
    preferred_location?: true
    open_to_out_of_state?: true
    payment_confired?: true
    payment_waiver_reason?: true
    status?: true
    prior_experience?: true
    has_resume?: true
    additional_info?: true
    has_iti?: true
    has_diploma?: true
    other_iti_trade?: true
    other_diploma_stream?: true
    has_experience?: true
    currently_working?: true
    experience_company_name?: true
    experience_years?: true
    current_company_name?: true
    current_year_of_joining?: true
    has_appointment_letter?: true
    has_salary_slip?: true
    has_relieving_letter?: true
    all_data_verified?: true
    created_at?: true
  }

  export type JobMelaBeneficiaryCountAggregateInputType = {
    id?: true
    registration_number?: true
    full_name?: true
    dob?: true
    gender?: true
    mobile_number?: true
    email_address?: true
    current_address?: true
    pincode?: true
    highest_qualification?: true
    other_qualification?: true
    year_of_passing?: true
    expected_year_of_completion?: true
    overall_percentage?: true
    tenth_board?: true
    twelfth_board?: true
    education_stream?: true
    work_experience?: true
    other_stream?: true
    areas_of_interest?: true
    specific_skills?: true
    currently_enrolled?: true
    completed_skill_program?: true
    preferred_sectors?: true
    preferred_location?: true
    open_to_out_of_state?: true
    payment_confired?: true
    payment_waiver_reason?: true
    status?: true
    prior_experience?: true
    has_resume?: true
    additional_info?: true
    has_iti?: true
    has_diploma?: true
    other_iti_trade?: true
    other_diploma_stream?: true
    has_experience?: true
    currently_working?: true
    experience_company_name?: true
    experience_years?: true
    current_company_name?: true
    current_year_of_joining?: true
    has_appointment_letter?: true
    has_salary_slip?: true
    has_relieving_letter?: true
    all_data_verified?: true
    created_at?: true
    _all?: true
  }

  export type JobMelaBeneficiaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobMelaBeneficiary to aggregate.
     */
    where?: JobMelaBeneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMelaBeneficiaries to fetch.
     */
    orderBy?: JobMelaBeneficiaryOrderByWithRelationInput | JobMelaBeneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobMelaBeneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMelaBeneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMelaBeneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobMelaBeneficiaries
    **/
    _count?: true | JobMelaBeneficiaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobMelaBeneficiaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobMelaBeneficiarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMelaBeneficiaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMelaBeneficiaryMaxAggregateInputType
  }

  export type GetJobMelaBeneficiaryAggregateType<T extends JobMelaBeneficiaryAggregateArgs> = {
        [P in keyof T & keyof AggregateJobMelaBeneficiary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobMelaBeneficiary[P]>
      : GetScalarType<T[P], AggregateJobMelaBeneficiary[P]>
  }




  export type JobMelaBeneficiaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobMelaBeneficiaryWhereInput
    orderBy?: JobMelaBeneficiaryOrderByWithAggregationInput | JobMelaBeneficiaryOrderByWithAggregationInput[]
    by: JobMelaBeneficiaryScalarFieldEnum[] | JobMelaBeneficiaryScalarFieldEnum
    having?: JobMelaBeneficiaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobMelaBeneficiaryCountAggregateInputType | true
    _avg?: JobMelaBeneficiaryAvgAggregateInputType
    _sum?: JobMelaBeneficiarySumAggregateInputType
    _min?: JobMelaBeneficiaryMinAggregateInputType
    _max?: JobMelaBeneficiaryMaxAggregateInputType
  }

  export type JobMelaBeneficiaryGroupByOutputType = {
    id: number
    registration_number: string
    full_name: string
    dob: Date | null
    gender: string | null
    mobile_number: string | null
    email_address: string | null
    current_address: string | null
    pincode: string | null
    highest_qualification: string | null
    other_qualification: string | null
    year_of_passing: string | null
    expected_year_of_completion: string | null
    overall_percentage: string | null
    tenth_board: string | null
    twelfth_board: string | null
    education_stream: string | null
    work_experience: string | null
    other_stream: string | null
    areas_of_interest: string | null
    specific_skills: string | null
    currently_enrolled: string | null
    completed_skill_program: string | null
    preferred_sectors: string | null
    preferred_location: string | null
    open_to_out_of_state: boolean | null
    payment_confired: boolean | null
    payment_waiver_reason: string | null
    status: boolean | null
    prior_experience: string | null
    has_resume: boolean | null
    additional_info: string | null
    has_iti: boolean | null
    has_diploma: boolean | null
    other_iti_trade: string | null
    other_diploma_stream: string | null
    has_experience: boolean | null
    currently_working: boolean | null
    experience_company_name: string | null
    experience_years: string | null
    current_company_name: string | null
    current_year_of_joining: string | null
    has_appointment_letter: boolean | null
    has_salary_slip: boolean | null
    has_relieving_letter: boolean | null
    all_data_verified: boolean | null
    created_at: Date
    _count: JobMelaBeneficiaryCountAggregateOutputType | null
    _avg: JobMelaBeneficiaryAvgAggregateOutputType | null
    _sum: JobMelaBeneficiarySumAggregateOutputType | null
    _min: JobMelaBeneficiaryMinAggregateOutputType | null
    _max: JobMelaBeneficiaryMaxAggregateOutputType | null
  }

  type GetJobMelaBeneficiaryGroupByPayload<T extends JobMelaBeneficiaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobMelaBeneficiaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobMelaBeneficiaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobMelaBeneficiaryGroupByOutputType[P]>
            : GetScalarType<T[P], JobMelaBeneficiaryGroupByOutputType[P]>
        }
      >
    >


  export type JobMelaBeneficiarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registration_number?: boolean
    full_name?: boolean
    dob?: boolean
    gender?: boolean
    mobile_number?: boolean
    email_address?: boolean
    current_address?: boolean
    pincode?: boolean
    highest_qualification?: boolean
    other_qualification?: boolean
    year_of_passing?: boolean
    expected_year_of_completion?: boolean
    overall_percentage?: boolean
    tenth_board?: boolean
    twelfth_board?: boolean
    education_stream?: boolean
    work_experience?: boolean
    other_stream?: boolean
    areas_of_interest?: boolean
    specific_skills?: boolean
    currently_enrolled?: boolean
    completed_skill_program?: boolean
    preferred_sectors?: boolean
    preferred_location?: boolean
    open_to_out_of_state?: boolean
    payment_confired?: boolean
    payment_waiver_reason?: boolean
    status?: boolean
    prior_experience?: boolean
    has_resume?: boolean
    additional_info?: boolean
    has_iti?: boolean
    has_diploma?: boolean
    other_iti_trade?: boolean
    other_diploma_stream?: boolean
    has_experience?: boolean
    currently_working?: boolean
    experience_company_name?: boolean
    experience_years?: boolean
    current_company_name?: boolean
    current_year_of_joining?: boolean
    has_appointment_letter?: boolean
    has_salary_slip?: boolean
    has_relieving_letter?: boolean
    all_data_verified?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["jobMelaBeneficiary"]>



  export type JobMelaBeneficiarySelectScalar = {
    id?: boolean
    registration_number?: boolean
    full_name?: boolean
    dob?: boolean
    gender?: boolean
    mobile_number?: boolean
    email_address?: boolean
    current_address?: boolean
    pincode?: boolean
    highest_qualification?: boolean
    other_qualification?: boolean
    year_of_passing?: boolean
    expected_year_of_completion?: boolean
    overall_percentage?: boolean
    tenth_board?: boolean
    twelfth_board?: boolean
    education_stream?: boolean
    work_experience?: boolean
    other_stream?: boolean
    areas_of_interest?: boolean
    specific_skills?: boolean
    currently_enrolled?: boolean
    completed_skill_program?: boolean
    preferred_sectors?: boolean
    preferred_location?: boolean
    open_to_out_of_state?: boolean
    payment_confired?: boolean
    payment_waiver_reason?: boolean
    status?: boolean
    prior_experience?: boolean
    has_resume?: boolean
    additional_info?: boolean
    has_iti?: boolean
    has_diploma?: boolean
    other_iti_trade?: boolean
    other_diploma_stream?: boolean
    has_experience?: boolean
    currently_working?: boolean
    experience_company_name?: boolean
    experience_years?: boolean
    current_company_name?: boolean
    current_year_of_joining?: boolean
    has_appointment_letter?: boolean
    has_salary_slip?: boolean
    has_relieving_letter?: boolean
    all_data_verified?: boolean
    created_at?: boolean
  }

  export type JobMelaBeneficiaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "registration_number" | "full_name" | "dob" | "gender" | "mobile_number" | "email_address" | "current_address" | "pincode" | "highest_qualification" | "other_qualification" | "year_of_passing" | "expected_year_of_completion" | "overall_percentage" | "tenth_board" | "twelfth_board" | "education_stream" | "work_experience" | "other_stream" | "areas_of_interest" | "specific_skills" | "currently_enrolled" | "completed_skill_program" | "preferred_sectors" | "preferred_location" | "open_to_out_of_state" | "payment_confired" | "payment_waiver_reason" | "status" | "prior_experience" | "has_resume" | "additional_info" | "has_iti" | "has_diploma" | "other_iti_trade" | "other_diploma_stream" | "has_experience" | "currently_working" | "experience_company_name" | "experience_years" | "current_company_name" | "current_year_of_joining" | "has_appointment_letter" | "has_salary_slip" | "has_relieving_letter" | "all_data_verified" | "created_at", ExtArgs["result"]["jobMelaBeneficiary"]>

  export type $JobMelaBeneficiaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobMelaBeneficiary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      registration_number: string
      full_name: string
      dob: Date | null
      gender: string | null
      mobile_number: string | null
      email_address: string | null
      current_address: string | null
      pincode: string | null
      highest_qualification: string | null
      other_qualification: string | null
      year_of_passing: string | null
      expected_year_of_completion: string | null
      overall_percentage: string | null
      tenth_board: string | null
      twelfth_board: string | null
      education_stream: string | null
      work_experience: string | null
      other_stream: string | null
      areas_of_interest: string | null
      specific_skills: string | null
      currently_enrolled: string | null
      completed_skill_program: string | null
      preferred_sectors: string | null
      preferred_location: string | null
      open_to_out_of_state: boolean | null
      payment_confired: boolean | null
      payment_waiver_reason: string | null
      status: boolean | null
      prior_experience: string | null
      has_resume: boolean | null
      additional_info: string | null
      has_iti: boolean | null
      has_diploma: boolean | null
      other_iti_trade: string | null
      other_diploma_stream: string | null
      has_experience: boolean | null
      currently_working: boolean | null
      experience_company_name: string | null
      experience_years: string | null
      current_company_name: string | null
      current_year_of_joining: string | null
      has_appointment_letter: boolean | null
      has_salary_slip: boolean | null
      has_relieving_letter: boolean | null
      all_data_verified: boolean | null
      created_at: Date
    }, ExtArgs["result"]["jobMelaBeneficiary"]>
    composites: {}
  }

  type JobMelaBeneficiaryGetPayload<S extends boolean | null | undefined | JobMelaBeneficiaryDefaultArgs> = $Result.GetResult<Prisma.$JobMelaBeneficiaryPayload, S>

  type JobMelaBeneficiaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobMelaBeneficiaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobMelaBeneficiaryCountAggregateInputType | true
    }

  export interface JobMelaBeneficiaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobMelaBeneficiary'], meta: { name: 'JobMelaBeneficiary' } }
    /**
     * Find zero or one JobMelaBeneficiary that matches the filter.
     * @param {JobMelaBeneficiaryFindUniqueArgs} args - Arguments to find a JobMelaBeneficiary
     * @example
     * // Get one JobMelaBeneficiary
     * const jobMelaBeneficiary = await prisma.jobMelaBeneficiary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobMelaBeneficiaryFindUniqueArgs>(args: SelectSubset<T, JobMelaBeneficiaryFindUniqueArgs<ExtArgs>>): Prisma__JobMelaBeneficiaryClient<$Result.GetResult<Prisma.$JobMelaBeneficiaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobMelaBeneficiary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobMelaBeneficiaryFindUniqueOrThrowArgs} args - Arguments to find a JobMelaBeneficiary
     * @example
     * // Get one JobMelaBeneficiary
     * const jobMelaBeneficiary = await prisma.jobMelaBeneficiary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobMelaBeneficiaryFindUniqueOrThrowArgs>(args: SelectSubset<T, JobMelaBeneficiaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobMelaBeneficiaryClient<$Result.GetResult<Prisma.$JobMelaBeneficiaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobMelaBeneficiary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMelaBeneficiaryFindFirstArgs} args - Arguments to find a JobMelaBeneficiary
     * @example
     * // Get one JobMelaBeneficiary
     * const jobMelaBeneficiary = await prisma.jobMelaBeneficiary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobMelaBeneficiaryFindFirstArgs>(args?: SelectSubset<T, JobMelaBeneficiaryFindFirstArgs<ExtArgs>>): Prisma__JobMelaBeneficiaryClient<$Result.GetResult<Prisma.$JobMelaBeneficiaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobMelaBeneficiary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMelaBeneficiaryFindFirstOrThrowArgs} args - Arguments to find a JobMelaBeneficiary
     * @example
     * // Get one JobMelaBeneficiary
     * const jobMelaBeneficiary = await prisma.jobMelaBeneficiary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobMelaBeneficiaryFindFirstOrThrowArgs>(args?: SelectSubset<T, JobMelaBeneficiaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobMelaBeneficiaryClient<$Result.GetResult<Prisma.$JobMelaBeneficiaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobMelaBeneficiaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMelaBeneficiaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobMelaBeneficiaries
     * const jobMelaBeneficiaries = await prisma.jobMelaBeneficiary.findMany()
     * 
     * // Get first 10 JobMelaBeneficiaries
     * const jobMelaBeneficiaries = await prisma.jobMelaBeneficiary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobMelaBeneficiaryWithIdOnly = await prisma.jobMelaBeneficiary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobMelaBeneficiaryFindManyArgs>(args?: SelectSubset<T, JobMelaBeneficiaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMelaBeneficiaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobMelaBeneficiary.
     * @param {JobMelaBeneficiaryCreateArgs} args - Arguments to create a JobMelaBeneficiary.
     * @example
     * // Create one JobMelaBeneficiary
     * const JobMelaBeneficiary = await prisma.jobMelaBeneficiary.create({
     *   data: {
     *     // ... data to create a JobMelaBeneficiary
     *   }
     * })
     * 
     */
    create<T extends JobMelaBeneficiaryCreateArgs>(args: SelectSubset<T, JobMelaBeneficiaryCreateArgs<ExtArgs>>): Prisma__JobMelaBeneficiaryClient<$Result.GetResult<Prisma.$JobMelaBeneficiaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobMelaBeneficiaries.
     * @param {JobMelaBeneficiaryCreateManyArgs} args - Arguments to create many JobMelaBeneficiaries.
     * @example
     * // Create many JobMelaBeneficiaries
     * const jobMelaBeneficiary = await prisma.jobMelaBeneficiary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobMelaBeneficiaryCreateManyArgs>(args?: SelectSubset<T, JobMelaBeneficiaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JobMelaBeneficiary.
     * @param {JobMelaBeneficiaryDeleteArgs} args - Arguments to delete one JobMelaBeneficiary.
     * @example
     * // Delete one JobMelaBeneficiary
     * const JobMelaBeneficiary = await prisma.jobMelaBeneficiary.delete({
     *   where: {
     *     // ... filter to delete one JobMelaBeneficiary
     *   }
     * })
     * 
     */
    delete<T extends JobMelaBeneficiaryDeleteArgs>(args: SelectSubset<T, JobMelaBeneficiaryDeleteArgs<ExtArgs>>): Prisma__JobMelaBeneficiaryClient<$Result.GetResult<Prisma.$JobMelaBeneficiaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobMelaBeneficiary.
     * @param {JobMelaBeneficiaryUpdateArgs} args - Arguments to update one JobMelaBeneficiary.
     * @example
     * // Update one JobMelaBeneficiary
     * const jobMelaBeneficiary = await prisma.jobMelaBeneficiary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobMelaBeneficiaryUpdateArgs>(args: SelectSubset<T, JobMelaBeneficiaryUpdateArgs<ExtArgs>>): Prisma__JobMelaBeneficiaryClient<$Result.GetResult<Prisma.$JobMelaBeneficiaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobMelaBeneficiaries.
     * @param {JobMelaBeneficiaryDeleteManyArgs} args - Arguments to filter JobMelaBeneficiaries to delete.
     * @example
     * // Delete a few JobMelaBeneficiaries
     * const { count } = await prisma.jobMelaBeneficiary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobMelaBeneficiaryDeleteManyArgs>(args?: SelectSubset<T, JobMelaBeneficiaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobMelaBeneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMelaBeneficiaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobMelaBeneficiaries
     * const jobMelaBeneficiary = await prisma.jobMelaBeneficiary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobMelaBeneficiaryUpdateManyArgs>(args: SelectSubset<T, JobMelaBeneficiaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobMelaBeneficiary.
     * @param {JobMelaBeneficiaryUpsertArgs} args - Arguments to update or create a JobMelaBeneficiary.
     * @example
     * // Update or create a JobMelaBeneficiary
     * const jobMelaBeneficiary = await prisma.jobMelaBeneficiary.upsert({
     *   create: {
     *     // ... data to create a JobMelaBeneficiary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobMelaBeneficiary we want to update
     *   }
     * })
     */
    upsert<T extends JobMelaBeneficiaryUpsertArgs>(args: SelectSubset<T, JobMelaBeneficiaryUpsertArgs<ExtArgs>>): Prisma__JobMelaBeneficiaryClient<$Result.GetResult<Prisma.$JobMelaBeneficiaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobMelaBeneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMelaBeneficiaryCountArgs} args - Arguments to filter JobMelaBeneficiaries to count.
     * @example
     * // Count the number of JobMelaBeneficiaries
     * const count = await prisma.jobMelaBeneficiary.count({
     *   where: {
     *     // ... the filter for the JobMelaBeneficiaries we want to count
     *   }
     * })
    **/
    count<T extends JobMelaBeneficiaryCountArgs>(
      args?: Subset<T, JobMelaBeneficiaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobMelaBeneficiaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobMelaBeneficiary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMelaBeneficiaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobMelaBeneficiaryAggregateArgs>(args: Subset<T, JobMelaBeneficiaryAggregateArgs>): Prisma.PrismaPromise<GetJobMelaBeneficiaryAggregateType<T>>

    /**
     * Group by JobMelaBeneficiary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMelaBeneficiaryGroupByArgs} args - Group by arguments.
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
      T extends JobMelaBeneficiaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobMelaBeneficiaryGroupByArgs['orderBy'] }
        : { orderBy?: JobMelaBeneficiaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobMelaBeneficiaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobMelaBeneficiaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobMelaBeneficiary model
   */
  readonly fields: JobMelaBeneficiaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobMelaBeneficiary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobMelaBeneficiaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the JobMelaBeneficiary model
   */
  interface JobMelaBeneficiaryFieldRefs {
    readonly id: FieldRef<"JobMelaBeneficiary", 'Int'>
    readonly registration_number: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly full_name: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly dob: FieldRef<"JobMelaBeneficiary", 'DateTime'>
    readonly gender: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly mobile_number: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly email_address: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly current_address: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly pincode: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly highest_qualification: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly other_qualification: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly year_of_passing: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly expected_year_of_completion: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly overall_percentage: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly tenth_board: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly twelfth_board: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly education_stream: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly work_experience: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly other_stream: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly areas_of_interest: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly specific_skills: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly currently_enrolled: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly completed_skill_program: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly preferred_sectors: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly preferred_location: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly open_to_out_of_state: FieldRef<"JobMelaBeneficiary", 'Boolean'>
    readonly payment_confired: FieldRef<"JobMelaBeneficiary", 'Boolean'>
    readonly payment_waiver_reason: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly status: FieldRef<"JobMelaBeneficiary", 'Boolean'>
    readonly prior_experience: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly has_resume: FieldRef<"JobMelaBeneficiary", 'Boolean'>
    readonly additional_info: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly has_iti: FieldRef<"JobMelaBeneficiary", 'Boolean'>
    readonly has_diploma: FieldRef<"JobMelaBeneficiary", 'Boolean'>
    readonly other_iti_trade: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly other_diploma_stream: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly has_experience: FieldRef<"JobMelaBeneficiary", 'Boolean'>
    readonly currently_working: FieldRef<"JobMelaBeneficiary", 'Boolean'>
    readonly experience_company_name: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly experience_years: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly current_company_name: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly current_year_of_joining: FieldRef<"JobMelaBeneficiary", 'String'>
    readonly has_appointment_letter: FieldRef<"JobMelaBeneficiary", 'Boolean'>
    readonly has_salary_slip: FieldRef<"JobMelaBeneficiary", 'Boolean'>
    readonly has_relieving_letter: FieldRef<"JobMelaBeneficiary", 'Boolean'>
    readonly all_data_verified: FieldRef<"JobMelaBeneficiary", 'Boolean'>
    readonly created_at: FieldRef<"JobMelaBeneficiary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobMelaBeneficiary findUnique
   */
  export type JobMelaBeneficiaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMelaBeneficiary
     */
    select?: JobMelaBeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMelaBeneficiary
     */
    omit?: JobMelaBeneficiaryOmit<ExtArgs> | null
    /**
     * Filter, which JobMelaBeneficiary to fetch.
     */
    where: JobMelaBeneficiaryWhereUniqueInput
  }

  /**
   * JobMelaBeneficiary findUniqueOrThrow
   */
  export type JobMelaBeneficiaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMelaBeneficiary
     */
    select?: JobMelaBeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMelaBeneficiary
     */
    omit?: JobMelaBeneficiaryOmit<ExtArgs> | null
    /**
     * Filter, which JobMelaBeneficiary to fetch.
     */
    where: JobMelaBeneficiaryWhereUniqueInput
  }

  /**
   * JobMelaBeneficiary findFirst
   */
  export type JobMelaBeneficiaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMelaBeneficiary
     */
    select?: JobMelaBeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMelaBeneficiary
     */
    omit?: JobMelaBeneficiaryOmit<ExtArgs> | null
    /**
     * Filter, which JobMelaBeneficiary to fetch.
     */
    where?: JobMelaBeneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMelaBeneficiaries to fetch.
     */
    orderBy?: JobMelaBeneficiaryOrderByWithRelationInput | JobMelaBeneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobMelaBeneficiaries.
     */
    cursor?: JobMelaBeneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMelaBeneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMelaBeneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobMelaBeneficiaries.
     */
    distinct?: JobMelaBeneficiaryScalarFieldEnum | JobMelaBeneficiaryScalarFieldEnum[]
  }

  /**
   * JobMelaBeneficiary findFirstOrThrow
   */
  export type JobMelaBeneficiaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMelaBeneficiary
     */
    select?: JobMelaBeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMelaBeneficiary
     */
    omit?: JobMelaBeneficiaryOmit<ExtArgs> | null
    /**
     * Filter, which JobMelaBeneficiary to fetch.
     */
    where?: JobMelaBeneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMelaBeneficiaries to fetch.
     */
    orderBy?: JobMelaBeneficiaryOrderByWithRelationInput | JobMelaBeneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobMelaBeneficiaries.
     */
    cursor?: JobMelaBeneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMelaBeneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMelaBeneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobMelaBeneficiaries.
     */
    distinct?: JobMelaBeneficiaryScalarFieldEnum | JobMelaBeneficiaryScalarFieldEnum[]
  }

  /**
   * JobMelaBeneficiary findMany
   */
  export type JobMelaBeneficiaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMelaBeneficiary
     */
    select?: JobMelaBeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMelaBeneficiary
     */
    omit?: JobMelaBeneficiaryOmit<ExtArgs> | null
    /**
     * Filter, which JobMelaBeneficiaries to fetch.
     */
    where?: JobMelaBeneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMelaBeneficiaries to fetch.
     */
    orderBy?: JobMelaBeneficiaryOrderByWithRelationInput | JobMelaBeneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobMelaBeneficiaries.
     */
    cursor?: JobMelaBeneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMelaBeneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMelaBeneficiaries.
     */
    skip?: number
    distinct?: JobMelaBeneficiaryScalarFieldEnum | JobMelaBeneficiaryScalarFieldEnum[]
  }

  /**
   * JobMelaBeneficiary create
   */
  export type JobMelaBeneficiaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMelaBeneficiary
     */
    select?: JobMelaBeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMelaBeneficiary
     */
    omit?: JobMelaBeneficiaryOmit<ExtArgs> | null
    /**
     * The data needed to create a JobMelaBeneficiary.
     */
    data: XOR<JobMelaBeneficiaryCreateInput, JobMelaBeneficiaryUncheckedCreateInput>
  }

  /**
   * JobMelaBeneficiary createMany
   */
  export type JobMelaBeneficiaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobMelaBeneficiaries.
     */
    data: JobMelaBeneficiaryCreateManyInput | JobMelaBeneficiaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobMelaBeneficiary update
   */
  export type JobMelaBeneficiaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMelaBeneficiary
     */
    select?: JobMelaBeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMelaBeneficiary
     */
    omit?: JobMelaBeneficiaryOmit<ExtArgs> | null
    /**
     * The data needed to update a JobMelaBeneficiary.
     */
    data: XOR<JobMelaBeneficiaryUpdateInput, JobMelaBeneficiaryUncheckedUpdateInput>
    /**
     * Choose, which JobMelaBeneficiary to update.
     */
    where: JobMelaBeneficiaryWhereUniqueInput
  }

  /**
   * JobMelaBeneficiary updateMany
   */
  export type JobMelaBeneficiaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobMelaBeneficiaries.
     */
    data: XOR<JobMelaBeneficiaryUpdateManyMutationInput, JobMelaBeneficiaryUncheckedUpdateManyInput>
    /**
     * Filter which JobMelaBeneficiaries to update
     */
    where?: JobMelaBeneficiaryWhereInput
    /**
     * Limit how many JobMelaBeneficiaries to update.
     */
    limit?: number
  }

  /**
   * JobMelaBeneficiary upsert
   */
  export type JobMelaBeneficiaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMelaBeneficiary
     */
    select?: JobMelaBeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMelaBeneficiary
     */
    omit?: JobMelaBeneficiaryOmit<ExtArgs> | null
    /**
     * The filter to search for the JobMelaBeneficiary to update in case it exists.
     */
    where: JobMelaBeneficiaryWhereUniqueInput
    /**
     * In case the JobMelaBeneficiary found by the `where` argument doesn't exist, create a new JobMelaBeneficiary with this data.
     */
    create: XOR<JobMelaBeneficiaryCreateInput, JobMelaBeneficiaryUncheckedCreateInput>
    /**
     * In case the JobMelaBeneficiary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobMelaBeneficiaryUpdateInput, JobMelaBeneficiaryUncheckedUpdateInput>
  }

  /**
   * JobMelaBeneficiary delete
   */
  export type JobMelaBeneficiaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMelaBeneficiary
     */
    select?: JobMelaBeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMelaBeneficiary
     */
    omit?: JobMelaBeneficiaryOmit<ExtArgs> | null
    /**
     * Filter which JobMelaBeneficiary to delete.
     */
    where: JobMelaBeneficiaryWhereUniqueInput
  }

  /**
   * JobMelaBeneficiary deleteMany
   */
  export type JobMelaBeneficiaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobMelaBeneficiaries to delete
     */
    where?: JobMelaBeneficiaryWhereInput
    /**
     * Limit how many JobMelaBeneficiaries to delete.
     */
    limit?: number
  }

  /**
   * JobMelaBeneficiary without action
   */
  export type JobMelaBeneficiaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMelaBeneficiary
     */
    select?: JobMelaBeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMelaBeneficiary
     */
    omit?: JobMelaBeneficiaryOmit<ExtArgs> | null
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


  export const JobMelaBeneficiaryScalarFieldEnum: {
    id: 'id',
    registration_number: 'registration_number',
    full_name: 'full_name',
    dob: 'dob',
    gender: 'gender',
    mobile_number: 'mobile_number',
    email_address: 'email_address',
    current_address: 'current_address',
    pincode: 'pincode',
    highest_qualification: 'highest_qualification',
    other_qualification: 'other_qualification',
    year_of_passing: 'year_of_passing',
    expected_year_of_completion: 'expected_year_of_completion',
    overall_percentage: 'overall_percentage',
    tenth_board: 'tenth_board',
    twelfth_board: 'twelfth_board',
    education_stream: 'education_stream',
    work_experience: 'work_experience',
    other_stream: 'other_stream',
    areas_of_interest: 'areas_of_interest',
    specific_skills: 'specific_skills',
    currently_enrolled: 'currently_enrolled',
    completed_skill_program: 'completed_skill_program',
    preferred_sectors: 'preferred_sectors',
    preferred_location: 'preferred_location',
    open_to_out_of_state: 'open_to_out_of_state',
    payment_confired: 'payment_confired',
    payment_waiver_reason: 'payment_waiver_reason',
    status: 'status',
    prior_experience: 'prior_experience',
    has_resume: 'has_resume',
    additional_info: 'additional_info',
    has_iti: 'has_iti',
    has_diploma: 'has_diploma',
    other_iti_trade: 'other_iti_trade',
    other_diploma_stream: 'other_diploma_stream',
    has_experience: 'has_experience',
    currently_working: 'currently_working',
    experience_company_name: 'experience_company_name',
    experience_years: 'experience_years',
    current_company_name: 'current_company_name',
    current_year_of_joining: 'current_year_of_joining',
    has_appointment_letter: 'has_appointment_letter',
    has_salary_slip: 'has_salary_slip',
    has_relieving_letter: 'has_relieving_letter',
    all_data_verified: 'all_data_verified',
    created_at: 'created_at'
  };

  export type JobMelaBeneficiaryScalarFieldEnum = (typeof JobMelaBeneficiaryScalarFieldEnum)[keyof typeof JobMelaBeneficiaryScalarFieldEnum]


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


  export const JobMelaBeneficiaryOrderByRelevanceFieldEnum: {
    registration_number: 'registration_number',
    full_name: 'full_name',
    gender: 'gender',
    mobile_number: 'mobile_number',
    email_address: 'email_address',
    current_address: 'current_address',
    pincode: 'pincode',
    highest_qualification: 'highest_qualification',
    other_qualification: 'other_qualification',
    year_of_passing: 'year_of_passing',
    expected_year_of_completion: 'expected_year_of_completion',
    overall_percentage: 'overall_percentage',
    tenth_board: 'tenth_board',
    twelfth_board: 'twelfth_board',
    education_stream: 'education_stream',
    work_experience: 'work_experience',
    other_stream: 'other_stream',
    areas_of_interest: 'areas_of_interest',
    specific_skills: 'specific_skills',
    currently_enrolled: 'currently_enrolled',
    completed_skill_program: 'completed_skill_program',
    preferred_sectors: 'preferred_sectors',
    preferred_location: 'preferred_location',
    payment_waiver_reason: 'payment_waiver_reason',
    prior_experience: 'prior_experience',
    additional_info: 'additional_info',
    other_iti_trade: 'other_iti_trade',
    other_diploma_stream: 'other_diploma_stream',
    experience_company_name: 'experience_company_name',
    experience_years: 'experience_years',
    current_company_name: 'current_company_name',
    current_year_of_joining: 'current_year_of_joining'
  };

  export type JobMelaBeneficiaryOrderByRelevanceFieldEnum = (typeof JobMelaBeneficiaryOrderByRelevanceFieldEnum)[keyof typeof JobMelaBeneficiaryOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type JobMelaBeneficiaryWhereInput = {
    AND?: JobMelaBeneficiaryWhereInput | JobMelaBeneficiaryWhereInput[]
    OR?: JobMelaBeneficiaryWhereInput[]
    NOT?: JobMelaBeneficiaryWhereInput | JobMelaBeneficiaryWhereInput[]
    id?: IntFilter<"JobMelaBeneficiary"> | number
    registration_number?: StringFilter<"JobMelaBeneficiary"> | string
    full_name?: StringFilter<"JobMelaBeneficiary"> | string
    dob?: DateTimeNullableFilter<"JobMelaBeneficiary"> | Date | string | null
    gender?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    mobile_number?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    email_address?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    current_address?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    pincode?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    highest_qualification?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    other_qualification?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    year_of_passing?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    expected_year_of_completion?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    overall_percentage?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    tenth_board?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    twelfth_board?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    education_stream?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    work_experience?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    other_stream?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    areas_of_interest?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    specific_skills?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    currently_enrolled?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    completed_skill_program?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    preferred_sectors?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    preferred_location?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    open_to_out_of_state?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    payment_confired?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    payment_waiver_reason?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    status?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    prior_experience?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    has_resume?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    additional_info?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    has_iti?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    has_diploma?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    other_iti_trade?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    other_diploma_stream?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    has_experience?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    currently_working?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    experience_company_name?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    experience_years?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    current_company_name?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    current_year_of_joining?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    has_appointment_letter?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    has_salary_slip?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    has_relieving_letter?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    all_data_verified?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    created_at?: DateTimeFilter<"JobMelaBeneficiary"> | Date | string
  }

  export type JobMelaBeneficiaryOrderByWithRelationInput = {
    id?: SortOrder
    registration_number?: SortOrder
    full_name?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    mobile_number?: SortOrderInput | SortOrder
    email_address?: SortOrderInput | SortOrder
    current_address?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    highest_qualification?: SortOrderInput | SortOrder
    other_qualification?: SortOrderInput | SortOrder
    year_of_passing?: SortOrderInput | SortOrder
    expected_year_of_completion?: SortOrderInput | SortOrder
    overall_percentage?: SortOrderInput | SortOrder
    tenth_board?: SortOrderInput | SortOrder
    twelfth_board?: SortOrderInput | SortOrder
    education_stream?: SortOrderInput | SortOrder
    work_experience?: SortOrderInput | SortOrder
    other_stream?: SortOrderInput | SortOrder
    areas_of_interest?: SortOrderInput | SortOrder
    specific_skills?: SortOrderInput | SortOrder
    currently_enrolled?: SortOrderInput | SortOrder
    completed_skill_program?: SortOrderInput | SortOrder
    preferred_sectors?: SortOrderInput | SortOrder
    preferred_location?: SortOrderInput | SortOrder
    open_to_out_of_state?: SortOrderInput | SortOrder
    payment_confired?: SortOrderInput | SortOrder
    payment_waiver_reason?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    prior_experience?: SortOrderInput | SortOrder
    has_resume?: SortOrderInput | SortOrder
    additional_info?: SortOrderInput | SortOrder
    has_iti?: SortOrderInput | SortOrder
    has_diploma?: SortOrderInput | SortOrder
    other_iti_trade?: SortOrderInput | SortOrder
    other_diploma_stream?: SortOrderInput | SortOrder
    has_experience?: SortOrderInput | SortOrder
    currently_working?: SortOrderInput | SortOrder
    experience_company_name?: SortOrderInput | SortOrder
    experience_years?: SortOrderInput | SortOrder
    current_company_name?: SortOrderInput | SortOrder
    current_year_of_joining?: SortOrderInput | SortOrder
    has_appointment_letter?: SortOrderInput | SortOrder
    has_salary_slip?: SortOrderInput | SortOrder
    has_relieving_letter?: SortOrderInput | SortOrder
    all_data_verified?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _relevance?: JobMelaBeneficiaryOrderByRelevanceInput
  }

  export type JobMelaBeneficiaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    registration_number?: string
    AND?: JobMelaBeneficiaryWhereInput | JobMelaBeneficiaryWhereInput[]
    OR?: JobMelaBeneficiaryWhereInput[]
    NOT?: JobMelaBeneficiaryWhereInput | JobMelaBeneficiaryWhereInput[]
    full_name?: StringFilter<"JobMelaBeneficiary"> | string
    dob?: DateTimeNullableFilter<"JobMelaBeneficiary"> | Date | string | null
    gender?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    mobile_number?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    email_address?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    current_address?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    pincode?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    highest_qualification?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    other_qualification?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    year_of_passing?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    expected_year_of_completion?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    overall_percentage?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    tenth_board?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    twelfth_board?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    education_stream?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    work_experience?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    other_stream?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    areas_of_interest?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    specific_skills?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    currently_enrolled?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    completed_skill_program?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    preferred_sectors?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    preferred_location?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    open_to_out_of_state?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    payment_confired?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    payment_waiver_reason?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    status?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    prior_experience?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    has_resume?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    additional_info?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    has_iti?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    has_diploma?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    other_iti_trade?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    other_diploma_stream?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    has_experience?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    currently_working?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    experience_company_name?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    experience_years?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    current_company_name?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    current_year_of_joining?: StringNullableFilter<"JobMelaBeneficiary"> | string | null
    has_appointment_letter?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    has_salary_slip?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    has_relieving_letter?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    all_data_verified?: BoolNullableFilter<"JobMelaBeneficiary"> | boolean | null
    created_at?: DateTimeFilter<"JobMelaBeneficiary"> | Date | string
  }, "id" | "registration_number">

  export type JobMelaBeneficiaryOrderByWithAggregationInput = {
    id?: SortOrder
    registration_number?: SortOrder
    full_name?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    mobile_number?: SortOrderInput | SortOrder
    email_address?: SortOrderInput | SortOrder
    current_address?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    highest_qualification?: SortOrderInput | SortOrder
    other_qualification?: SortOrderInput | SortOrder
    year_of_passing?: SortOrderInput | SortOrder
    expected_year_of_completion?: SortOrderInput | SortOrder
    overall_percentage?: SortOrderInput | SortOrder
    tenth_board?: SortOrderInput | SortOrder
    twelfth_board?: SortOrderInput | SortOrder
    education_stream?: SortOrderInput | SortOrder
    work_experience?: SortOrderInput | SortOrder
    other_stream?: SortOrderInput | SortOrder
    areas_of_interest?: SortOrderInput | SortOrder
    specific_skills?: SortOrderInput | SortOrder
    currently_enrolled?: SortOrderInput | SortOrder
    completed_skill_program?: SortOrderInput | SortOrder
    preferred_sectors?: SortOrderInput | SortOrder
    preferred_location?: SortOrderInput | SortOrder
    open_to_out_of_state?: SortOrderInput | SortOrder
    payment_confired?: SortOrderInput | SortOrder
    payment_waiver_reason?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    prior_experience?: SortOrderInput | SortOrder
    has_resume?: SortOrderInput | SortOrder
    additional_info?: SortOrderInput | SortOrder
    has_iti?: SortOrderInput | SortOrder
    has_diploma?: SortOrderInput | SortOrder
    other_iti_trade?: SortOrderInput | SortOrder
    other_diploma_stream?: SortOrderInput | SortOrder
    has_experience?: SortOrderInput | SortOrder
    currently_working?: SortOrderInput | SortOrder
    experience_company_name?: SortOrderInput | SortOrder
    experience_years?: SortOrderInput | SortOrder
    current_company_name?: SortOrderInput | SortOrder
    current_year_of_joining?: SortOrderInput | SortOrder
    has_appointment_letter?: SortOrderInput | SortOrder
    has_salary_slip?: SortOrderInput | SortOrder
    has_relieving_letter?: SortOrderInput | SortOrder
    all_data_verified?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: JobMelaBeneficiaryCountOrderByAggregateInput
    _avg?: JobMelaBeneficiaryAvgOrderByAggregateInput
    _max?: JobMelaBeneficiaryMaxOrderByAggregateInput
    _min?: JobMelaBeneficiaryMinOrderByAggregateInput
    _sum?: JobMelaBeneficiarySumOrderByAggregateInput
  }

  export type JobMelaBeneficiaryScalarWhereWithAggregatesInput = {
    AND?: JobMelaBeneficiaryScalarWhereWithAggregatesInput | JobMelaBeneficiaryScalarWhereWithAggregatesInput[]
    OR?: JobMelaBeneficiaryScalarWhereWithAggregatesInput[]
    NOT?: JobMelaBeneficiaryScalarWhereWithAggregatesInput | JobMelaBeneficiaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobMelaBeneficiary"> | number
    registration_number?: StringWithAggregatesFilter<"JobMelaBeneficiary"> | string
    full_name?: StringWithAggregatesFilter<"JobMelaBeneficiary"> | string
    dob?: DateTimeNullableWithAggregatesFilter<"JobMelaBeneficiary"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    mobile_number?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    email_address?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    current_address?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    highest_qualification?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    other_qualification?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    year_of_passing?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    expected_year_of_completion?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    overall_percentage?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    tenth_board?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    twelfth_board?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    education_stream?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    work_experience?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    other_stream?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    areas_of_interest?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    specific_skills?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    currently_enrolled?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    completed_skill_program?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    preferred_sectors?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    preferred_location?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    open_to_out_of_state?: BoolNullableWithAggregatesFilter<"JobMelaBeneficiary"> | boolean | null
    payment_confired?: BoolNullableWithAggregatesFilter<"JobMelaBeneficiary"> | boolean | null
    payment_waiver_reason?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    status?: BoolNullableWithAggregatesFilter<"JobMelaBeneficiary"> | boolean | null
    prior_experience?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    has_resume?: BoolNullableWithAggregatesFilter<"JobMelaBeneficiary"> | boolean | null
    additional_info?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    has_iti?: BoolNullableWithAggregatesFilter<"JobMelaBeneficiary"> | boolean | null
    has_diploma?: BoolNullableWithAggregatesFilter<"JobMelaBeneficiary"> | boolean | null
    other_iti_trade?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    other_diploma_stream?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    has_experience?: BoolNullableWithAggregatesFilter<"JobMelaBeneficiary"> | boolean | null
    currently_working?: BoolNullableWithAggregatesFilter<"JobMelaBeneficiary"> | boolean | null
    experience_company_name?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    experience_years?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    current_company_name?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    current_year_of_joining?: StringNullableWithAggregatesFilter<"JobMelaBeneficiary"> | string | null
    has_appointment_letter?: BoolNullableWithAggregatesFilter<"JobMelaBeneficiary"> | boolean | null
    has_salary_slip?: BoolNullableWithAggregatesFilter<"JobMelaBeneficiary"> | boolean | null
    has_relieving_letter?: BoolNullableWithAggregatesFilter<"JobMelaBeneficiary"> | boolean | null
    all_data_verified?: BoolNullableWithAggregatesFilter<"JobMelaBeneficiary"> | boolean | null
    created_at?: DateTimeWithAggregatesFilter<"JobMelaBeneficiary"> | Date | string
  }

  export type JobMelaBeneficiaryCreateInput = {
    registration_number: string
    full_name: string
    dob?: Date | string | null
    gender?: string | null
    mobile_number?: string | null
    email_address?: string | null
    current_address?: string | null
    pincode?: string | null
    highest_qualification?: string | null
    other_qualification?: string | null
    year_of_passing?: string | null
    expected_year_of_completion?: string | null
    overall_percentage?: string | null
    tenth_board?: string | null
    twelfth_board?: string | null
    education_stream?: string | null
    work_experience?: string | null
    other_stream?: string | null
    areas_of_interest?: string | null
    specific_skills?: string | null
    currently_enrolled?: string | null
    completed_skill_program?: string | null
    preferred_sectors?: string | null
    preferred_location?: string | null
    open_to_out_of_state?: boolean | null
    payment_confired?: boolean | null
    payment_waiver_reason?: string | null
    status?: boolean | null
    prior_experience?: string | null
    has_resume?: boolean | null
    additional_info?: string | null
    has_iti?: boolean | null
    has_diploma?: boolean | null
    other_iti_trade?: string | null
    other_diploma_stream?: string | null
    has_experience?: boolean | null
    currently_working?: boolean | null
    experience_company_name?: string | null
    experience_years?: string | null
    current_company_name?: string | null
    current_year_of_joining?: string | null
    has_appointment_letter?: boolean | null
    has_salary_slip?: boolean | null
    has_relieving_letter?: boolean | null
    all_data_verified?: boolean | null
    created_at?: Date | string
  }

  export type JobMelaBeneficiaryUncheckedCreateInput = {
    id?: number
    registration_number: string
    full_name: string
    dob?: Date | string | null
    gender?: string | null
    mobile_number?: string | null
    email_address?: string | null
    current_address?: string | null
    pincode?: string | null
    highest_qualification?: string | null
    other_qualification?: string | null
    year_of_passing?: string | null
    expected_year_of_completion?: string | null
    overall_percentage?: string | null
    tenth_board?: string | null
    twelfth_board?: string | null
    education_stream?: string | null
    work_experience?: string | null
    other_stream?: string | null
    areas_of_interest?: string | null
    specific_skills?: string | null
    currently_enrolled?: string | null
    completed_skill_program?: string | null
    preferred_sectors?: string | null
    preferred_location?: string | null
    open_to_out_of_state?: boolean | null
    payment_confired?: boolean | null
    payment_waiver_reason?: string | null
    status?: boolean | null
    prior_experience?: string | null
    has_resume?: boolean | null
    additional_info?: string | null
    has_iti?: boolean | null
    has_diploma?: boolean | null
    other_iti_trade?: string | null
    other_diploma_stream?: string | null
    has_experience?: boolean | null
    currently_working?: boolean | null
    experience_company_name?: string | null
    experience_years?: string | null
    current_company_name?: string | null
    current_year_of_joining?: string | null
    has_appointment_letter?: boolean | null
    has_salary_slip?: boolean | null
    has_relieving_letter?: boolean | null
    all_data_verified?: boolean | null
    created_at?: Date | string
  }

  export type JobMelaBeneficiaryUpdateInput = {
    registration_number?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_number?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    highest_qualification?: NullableStringFieldUpdateOperationsInput | string | null
    other_qualification?: NullableStringFieldUpdateOperationsInput | string | null
    year_of_passing?: NullableStringFieldUpdateOperationsInput | string | null
    expected_year_of_completion?: NullableStringFieldUpdateOperationsInput | string | null
    overall_percentage?: NullableStringFieldUpdateOperationsInput | string | null
    tenth_board?: NullableStringFieldUpdateOperationsInput | string | null
    twelfth_board?: NullableStringFieldUpdateOperationsInput | string | null
    education_stream?: NullableStringFieldUpdateOperationsInput | string | null
    work_experience?: NullableStringFieldUpdateOperationsInput | string | null
    other_stream?: NullableStringFieldUpdateOperationsInput | string | null
    areas_of_interest?: NullableStringFieldUpdateOperationsInput | string | null
    specific_skills?: NullableStringFieldUpdateOperationsInput | string | null
    currently_enrolled?: NullableStringFieldUpdateOperationsInput | string | null
    completed_skill_program?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_sectors?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_location?: NullableStringFieldUpdateOperationsInput | string | null
    open_to_out_of_state?: NullableBoolFieldUpdateOperationsInput | boolean | null
    payment_confired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    payment_waiver_reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prior_experience?: NullableStringFieldUpdateOperationsInput | string | null
    has_resume?: NullableBoolFieldUpdateOperationsInput | boolean | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    has_iti?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_diploma?: NullableBoolFieldUpdateOperationsInput | boolean | null
    other_iti_trade?: NullableStringFieldUpdateOperationsInput | string | null
    other_diploma_stream?: NullableStringFieldUpdateOperationsInput | string | null
    has_experience?: NullableBoolFieldUpdateOperationsInput | boolean | null
    currently_working?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experience_company_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableStringFieldUpdateOperationsInput | string | null
    current_company_name?: NullableStringFieldUpdateOperationsInput | string | null
    current_year_of_joining?: NullableStringFieldUpdateOperationsInput | string | null
    has_appointment_letter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_salary_slip?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_relieving_letter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    all_data_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMelaBeneficiaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    registration_number?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_number?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    highest_qualification?: NullableStringFieldUpdateOperationsInput | string | null
    other_qualification?: NullableStringFieldUpdateOperationsInput | string | null
    year_of_passing?: NullableStringFieldUpdateOperationsInput | string | null
    expected_year_of_completion?: NullableStringFieldUpdateOperationsInput | string | null
    overall_percentage?: NullableStringFieldUpdateOperationsInput | string | null
    tenth_board?: NullableStringFieldUpdateOperationsInput | string | null
    twelfth_board?: NullableStringFieldUpdateOperationsInput | string | null
    education_stream?: NullableStringFieldUpdateOperationsInput | string | null
    work_experience?: NullableStringFieldUpdateOperationsInput | string | null
    other_stream?: NullableStringFieldUpdateOperationsInput | string | null
    areas_of_interest?: NullableStringFieldUpdateOperationsInput | string | null
    specific_skills?: NullableStringFieldUpdateOperationsInput | string | null
    currently_enrolled?: NullableStringFieldUpdateOperationsInput | string | null
    completed_skill_program?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_sectors?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_location?: NullableStringFieldUpdateOperationsInput | string | null
    open_to_out_of_state?: NullableBoolFieldUpdateOperationsInput | boolean | null
    payment_confired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    payment_waiver_reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prior_experience?: NullableStringFieldUpdateOperationsInput | string | null
    has_resume?: NullableBoolFieldUpdateOperationsInput | boolean | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    has_iti?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_diploma?: NullableBoolFieldUpdateOperationsInput | boolean | null
    other_iti_trade?: NullableStringFieldUpdateOperationsInput | string | null
    other_diploma_stream?: NullableStringFieldUpdateOperationsInput | string | null
    has_experience?: NullableBoolFieldUpdateOperationsInput | boolean | null
    currently_working?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experience_company_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableStringFieldUpdateOperationsInput | string | null
    current_company_name?: NullableStringFieldUpdateOperationsInput | string | null
    current_year_of_joining?: NullableStringFieldUpdateOperationsInput | string | null
    has_appointment_letter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_salary_slip?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_relieving_letter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    all_data_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMelaBeneficiaryCreateManyInput = {
    id?: number
    registration_number: string
    full_name: string
    dob?: Date | string | null
    gender?: string | null
    mobile_number?: string | null
    email_address?: string | null
    current_address?: string | null
    pincode?: string | null
    highest_qualification?: string | null
    other_qualification?: string | null
    year_of_passing?: string | null
    expected_year_of_completion?: string | null
    overall_percentage?: string | null
    tenth_board?: string | null
    twelfth_board?: string | null
    education_stream?: string | null
    work_experience?: string | null
    other_stream?: string | null
    areas_of_interest?: string | null
    specific_skills?: string | null
    currently_enrolled?: string | null
    completed_skill_program?: string | null
    preferred_sectors?: string | null
    preferred_location?: string | null
    open_to_out_of_state?: boolean | null
    payment_confired?: boolean | null
    payment_waiver_reason?: string | null
    status?: boolean | null
    prior_experience?: string | null
    has_resume?: boolean | null
    additional_info?: string | null
    has_iti?: boolean | null
    has_diploma?: boolean | null
    other_iti_trade?: string | null
    other_diploma_stream?: string | null
    has_experience?: boolean | null
    currently_working?: boolean | null
    experience_company_name?: string | null
    experience_years?: string | null
    current_company_name?: string | null
    current_year_of_joining?: string | null
    has_appointment_letter?: boolean | null
    has_salary_slip?: boolean | null
    has_relieving_letter?: boolean | null
    all_data_verified?: boolean | null
    created_at?: Date | string
  }

  export type JobMelaBeneficiaryUpdateManyMutationInput = {
    registration_number?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_number?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    highest_qualification?: NullableStringFieldUpdateOperationsInput | string | null
    other_qualification?: NullableStringFieldUpdateOperationsInput | string | null
    year_of_passing?: NullableStringFieldUpdateOperationsInput | string | null
    expected_year_of_completion?: NullableStringFieldUpdateOperationsInput | string | null
    overall_percentage?: NullableStringFieldUpdateOperationsInput | string | null
    tenth_board?: NullableStringFieldUpdateOperationsInput | string | null
    twelfth_board?: NullableStringFieldUpdateOperationsInput | string | null
    education_stream?: NullableStringFieldUpdateOperationsInput | string | null
    work_experience?: NullableStringFieldUpdateOperationsInput | string | null
    other_stream?: NullableStringFieldUpdateOperationsInput | string | null
    areas_of_interest?: NullableStringFieldUpdateOperationsInput | string | null
    specific_skills?: NullableStringFieldUpdateOperationsInput | string | null
    currently_enrolled?: NullableStringFieldUpdateOperationsInput | string | null
    completed_skill_program?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_sectors?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_location?: NullableStringFieldUpdateOperationsInput | string | null
    open_to_out_of_state?: NullableBoolFieldUpdateOperationsInput | boolean | null
    payment_confired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    payment_waiver_reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prior_experience?: NullableStringFieldUpdateOperationsInput | string | null
    has_resume?: NullableBoolFieldUpdateOperationsInput | boolean | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    has_iti?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_diploma?: NullableBoolFieldUpdateOperationsInput | boolean | null
    other_iti_trade?: NullableStringFieldUpdateOperationsInput | string | null
    other_diploma_stream?: NullableStringFieldUpdateOperationsInput | string | null
    has_experience?: NullableBoolFieldUpdateOperationsInput | boolean | null
    currently_working?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experience_company_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableStringFieldUpdateOperationsInput | string | null
    current_company_name?: NullableStringFieldUpdateOperationsInput | string | null
    current_year_of_joining?: NullableStringFieldUpdateOperationsInput | string | null
    has_appointment_letter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_salary_slip?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_relieving_letter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    all_data_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMelaBeneficiaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    registration_number?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_number?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    highest_qualification?: NullableStringFieldUpdateOperationsInput | string | null
    other_qualification?: NullableStringFieldUpdateOperationsInput | string | null
    year_of_passing?: NullableStringFieldUpdateOperationsInput | string | null
    expected_year_of_completion?: NullableStringFieldUpdateOperationsInput | string | null
    overall_percentage?: NullableStringFieldUpdateOperationsInput | string | null
    tenth_board?: NullableStringFieldUpdateOperationsInput | string | null
    twelfth_board?: NullableStringFieldUpdateOperationsInput | string | null
    education_stream?: NullableStringFieldUpdateOperationsInput | string | null
    work_experience?: NullableStringFieldUpdateOperationsInput | string | null
    other_stream?: NullableStringFieldUpdateOperationsInput | string | null
    areas_of_interest?: NullableStringFieldUpdateOperationsInput | string | null
    specific_skills?: NullableStringFieldUpdateOperationsInput | string | null
    currently_enrolled?: NullableStringFieldUpdateOperationsInput | string | null
    completed_skill_program?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_sectors?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_location?: NullableStringFieldUpdateOperationsInput | string | null
    open_to_out_of_state?: NullableBoolFieldUpdateOperationsInput | boolean | null
    payment_confired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    payment_waiver_reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prior_experience?: NullableStringFieldUpdateOperationsInput | string | null
    has_resume?: NullableBoolFieldUpdateOperationsInput | boolean | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    has_iti?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_diploma?: NullableBoolFieldUpdateOperationsInput | boolean | null
    other_iti_trade?: NullableStringFieldUpdateOperationsInput | string | null
    other_diploma_stream?: NullableStringFieldUpdateOperationsInput | string | null
    has_experience?: NullableBoolFieldUpdateOperationsInput | boolean | null
    currently_working?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experience_company_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableStringFieldUpdateOperationsInput | string | null
    current_company_name?: NullableStringFieldUpdateOperationsInput | string | null
    current_year_of_joining?: NullableStringFieldUpdateOperationsInput | string | null
    has_appointment_letter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_salary_slip?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_relieving_letter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    all_data_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobMelaBeneficiaryOrderByRelevanceInput = {
    fields: JobMelaBeneficiaryOrderByRelevanceFieldEnum | JobMelaBeneficiaryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JobMelaBeneficiaryCountOrderByAggregateInput = {
    id?: SortOrder
    registration_number?: SortOrder
    full_name?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    mobile_number?: SortOrder
    email_address?: SortOrder
    current_address?: SortOrder
    pincode?: SortOrder
    highest_qualification?: SortOrder
    other_qualification?: SortOrder
    year_of_passing?: SortOrder
    expected_year_of_completion?: SortOrder
    overall_percentage?: SortOrder
    tenth_board?: SortOrder
    twelfth_board?: SortOrder
    education_stream?: SortOrder
    work_experience?: SortOrder
    other_stream?: SortOrder
    areas_of_interest?: SortOrder
    specific_skills?: SortOrder
    currently_enrolled?: SortOrder
    completed_skill_program?: SortOrder
    preferred_sectors?: SortOrder
    preferred_location?: SortOrder
    open_to_out_of_state?: SortOrder
    payment_confired?: SortOrder
    payment_waiver_reason?: SortOrder
    status?: SortOrder
    prior_experience?: SortOrder
    has_resume?: SortOrder
    additional_info?: SortOrder
    has_iti?: SortOrder
    has_diploma?: SortOrder
    other_iti_trade?: SortOrder
    other_diploma_stream?: SortOrder
    has_experience?: SortOrder
    currently_working?: SortOrder
    experience_company_name?: SortOrder
    experience_years?: SortOrder
    current_company_name?: SortOrder
    current_year_of_joining?: SortOrder
    has_appointment_letter?: SortOrder
    has_salary_slip?: SortOrder
    has_relieving_letter?: SortOrder
    all_data_verified?: SortOrder
    created_at?: SortOrder
  }

  export type JobMelaBeneficiaryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobMelaBeneficiaryMaxOrderByAggregateInput = {
    id?: SortOrder
    registration_number?: SortOrder
    full_name?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    mobile_number?: SortOrder
    email_address?: SortOrder
    current_address?: SortOrder
    pincode?: SortOrder
    highest_qualification?: SortOrder
    other_qualification?: SortOrder
    year_of_passing?: SortOrder
    expected_year_of_completion?: SortOrder
    overall_percentage?: SortOrder
    tenth_board?: SortOrder
    twelfth_board?: SortOrder
    education_stream?: SortOrder
    work_experience?: SortOrder
    other_stream?: SortOrder
    areas_of_interest?: SortOrder
    specific_skills?: SortOrder
    currently_enrolled?: SortOrder
    completed_skill_program?: SortOrder
    preferred_sectors?: SortOrder
    preferred_location?: SortOrder
    open_to_out_of_state?: SortOrder
    payment_confired?: SortOrder
    payment_waiver_reason?: SortOrder
    status?: SortOrder
    prior_experience?: SortOrder
    has_resume?: SortOrder
    additional_info?: SortOrder
    has_iti?: SortOrder
    has_diploma?: SortOrder
    other_iti_trade?: SortOrder
    other_diploma_stream?: SortOrder
    has_experience?: SortOrder
    currently_working?: SortOrder
    experience_company_name?: SortOrder
    experience_years?: SortOrder
    current_company_name?: SortOrder
    current_year_of_joining?: SortOrder
    has_appointment_letter?: SortOrder
    has_salary_slip?: SortOrder
    has_relieving_letter?: SortOrder
    all_data_verified?: SortOrder
    created_at?: SortOrder
  }

  export type JobMelaBeneficiaryMinOrderByAggregateInput = {
    id?: SortOrder
    registration_number?: SortOrder
    full_name?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    mobile_number?: SortOrder
    email_address?: SortOrder
    current_address?: SortOrder
    pincode?: SortOrder
    highest_qualification?: SortOrder
    other_qualification?: SortOrder
    year_of_passing?: SortOrder
    expected_year_of_completion?: SortOrder
    overall_percentage?: SortOrder
    tenth_board?: SortOrder
    twelfth_board?: SortOrder
    education_stream?: SortOrder
    work_experience?: SortOrder
    other_stream?: SortOrder
    areas_of_interest?: SortOrder
    specific_skills?: SortOrder
    currently_enrolled?: SortOrder
    completed_skill_program?: SortOrder
    preferred_sectors?: SortOrder
    preferred_location?: SortOrder
    open_to_out_of_state?: SortOrder
    payment_confired?: SortOrder
    payment_waiver_reason?: SortOrder
    status?: SortOrder
    prior_experience?: SortOrder
    has_resume?: SortOrder
    additional_info?: SortOrder
    has_iti?: SortOrder
    has_diploma?: SortOrder
    other_iti_trade?: SortOrder
    other_diploma_stream?: SortOrder
    has_experience?: SortOrder
    currently_working?: SortOrder
    experience_company_name?: SortOrder
    experience_years?: SortOrder
    current_company_name?: SortOrder
    current_year_of_joining?: SortOrder
    has_appointment_letter?: SortOrder
    has_salary_slip?: SortOrder
    has_relieving_letter?: SortOrder
    all_data_verified?: SortOrder
    created_at?: SortOrder
  }

  export type JobMelaBeneficiarySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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