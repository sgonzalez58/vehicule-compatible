
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>
/**
 * Model Famille
 * 
 */
export type Famille = $Result.DefaultSelection<Prisma.$FamillePayload>
/**
 * Model Type
 * 
 */
export type Type = $Result.DefaultSelection<Prisma.$TypePayload>
/**
 * Model Marque
 * 
 */
export type Marque = $Result.DefaultSelection<Prisma.$MarquePayload>
/**
 * Model Modele
 * 
 */
export type Modele = $Result.DefaultSelection<Prisma.$ModelePayload>
/**
 * Model ModeleType
 * 
 */
export type ModeleType = $Result.DefaultSelection<Prisma.$ModeleTypePayload>
/**
 * Model Produit
 * 
 */
export type Produit = $Result.DefaultSelection<Prisma.$ProduitPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
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
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
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
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.famille`: Exposes CRUD operations for the **Famille** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Familles
    * const familles = await prisma.famille.findMany()
    * ```
    */
  get famille(): Prisma.FamilleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.TypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marque`: Exposes CRUD operations for the **Marque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marques
    * const marques = await prisma.marque.findMany()
    * ```
    */
  get marque(): Prisma.MarqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modele`: Exposes CRUD operations for the **Modele** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modeles
    * const modeles = await prisma.modele.findMany()
    * ```
    */
  get modele(): Prisma.ModeleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modeleType`: Exposes CRUD operations for the **ModeleType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModeleTypes
    * const modeleTypes = await prisma.modeleType.findMany()
    * ```
    */
  get modeleType(): Prisma.ModeleTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produit`: Exposes CRUD operations for the **Produit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produits
    * const produits = await prisma.produit.findMany()
    * ```
    */
  get produit(): Prisma.ProduitDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Session: 'Session',
    Page: 'Page',
    Famille: 'Famille',
    Type: 'Type',
    Marque: 'Marque',
    Modele: 'Modele',
    ModeleType: 'ModeleType',
    Produit: 'Produit'
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
      modelProps: "session" | "page" | "famille" | "type" | "marque" | "modele" | "modeleType" | "produit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      Famille: {
        payload: Prisma.$FamillePayload<ExtArgs>
        fields: Prisma.FamilleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamillePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>
          }
          findFirst: {
            args: Prisma.FamilleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamillePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>
          }
          findMany: {
            args: Prisma.FamilleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>[]
          }
          create: {
            args: Prisma.FamilleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>
          }
          createMany: {
            args: Prisma.FamilleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FamilleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>[]
          }
          delete: {
            args: Prisma.FamilleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>
          }
          update: {
            args: Prisma.FamilleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>
          }
          deleteMany: {
            args: Prisma.FamilleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamilleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FamilleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>[]
          }
          upsert: {
            args: Prisma.FamilleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>
          }
          aggregate: {
            args: Prisma.FamilleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamille>
          }
          groupBy: {
            args: Prisma.FamilleGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilleGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilleCountArgs<ExtArgs>
            result: $Utils.Optional<FamilleCountAggregateOutputType> | number
          }
        }
      }
      Type: {
        payload: Prisma.$TypePayload<ExtArgs>
        fields: Prisma.TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findFirst: {
            args: Prisma.TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findMany: {
            args: Prisma.TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          create: {
            args: Prisma.TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          createMany: {
            args: Prisma.TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          delete: {
            args: Prisma.TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          update: {
            args: Prisma.TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          deleteMany: {
            args: Prisma.TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          upsert: {
            args: Prisma.TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType>
          }
          groupBy: {
            args: Prisma.TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeCountArgs<ExtArgs>
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
          }
        }
      }
      Marque: {
        payload: Prisma.$MarquePayload<ExtArgs>
        fields: Prisma.MarqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarquePayload>
          }
          findFirst: {
            args: Prisma.MarqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarquePayload>
          }
          findMany: {
            args: Prisma.MarqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarquePayload>[]
          }
          create: {
            args: Prisma.MarqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarquePayload>
          }
          createMany: {
            args: Prisma.MarqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarquePayload>[]
          }
          delete: {
            args: Prisma.MarqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarquePayload>
          }
          update: {
            args: Prisma.MarqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarquePayload>
          }
          deleteMany: {
            args: Prisma.MarqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarquePayload>[]
          }
          upsert: {
            args: Prisma.MarqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarquePayload>
          }
          aggregate: {
            args: Prisma.MarqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarque>
          }
          groupBy: {
            args: Prisma.MarqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarqueCountArgs<ExtArgs>
            result: $Utils.Optional<MarqueCountAggregateOutputType> | number
          }
        }
      }
      Modele: {
        payload: Prisma.$ModelePayload<ExtArgs>
        fields: Prisma.ModeleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModeleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModeleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelePayload>
          }
          findFirst: {
            args: Prisma.ModeleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModeleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelePayload>
          }
          findMany: {
            args: Prisma.ModeleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelePayload>[]
          }
          create: {
            args: Prisma.ModeleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelePayload>
          }
          createMany: {
            args: Prisma.ModeleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModeleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelePayload>[]
          }
          delete: {
            args: Prisma.ModeleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelePayload>
          }
          update: {
            args: Prisma.ModeleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelePayload>
          }
          deleteMany: {
            args: Prisma.ModeleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModeleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModeleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelePayload>[]
          }
          upsert: {
            args: Prisma.ModeleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelePayload>
          }
          aggregate: {
            args: Prisma.ModeleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModele>
          }
          groupBy: {
            args: Prisma.ModeleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModeleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModeleCountArgs<ExtArgs>
            result: $Utils.Optional<ModeleCountAggregateOutputType> | number
          }
        }
      }
      ModeleType: {
        payload: Prisma.$ModeleTypePayload<ExtArgs>
        fields: Prisma.ModeleTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModeleTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeleTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModeleTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeleTypePayload>
          }
          findFirst: {
            args: Prisma.ModeleTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeleTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModeleTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeleTypePayload>
          }
          findMany: {
            args: Prisma.ModeleTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeleTypePayload>[]
          }
          create: {
            args: Prisma.ModeleTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeleTypePayload>
          }
          createMany: {
            args: Prisma.ModeleTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModeleTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeleTypePayload>[]
          }
          delete: {
            args: Prisma.ModeleTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeleTypePayload>
          }
          update: {
            args: Prisma.ModeleTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeleTypePayload>
          }
          deleteMany: {
            args: Prisma.ModeleTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModeleTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModeleTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeleTypePayload>[]
          }
          upsert: {
            args: Prisma.ModeleTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeleTypePayload>
          }
          aggregate: {
            args: Prisma.ModeleTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModeleType>
          }
          groupBy: {
            args: Prisma.ModeleTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModeleTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModeleTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ModeleTypeCountAggregateOutputType> | number
          }
        }
      }
      Produit: {
        payload: Prisma.$ProduitPayload<ExtArgs>
        fields: Prisma.ProduitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProduitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProduitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          findFirst: {
            args: Prisma.ProduitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProduitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          findMany: {
            args: Prisma.ProduitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          create: {
            args: Prisma.ProduitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          createMany: {
            args: Prisma.ProduitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProduitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          delete: {
            args: Prisma.ProduitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          update: {
            args: Prisma.ProduitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          deleteMany: {
            args: Prisma.ProduitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProduitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProduitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          upsert: {
            args: Prisma.ProduitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          aggregate: {
            args: Prisma.ProduitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduit>
          }
          groupBy: {
            args: Prisma.ProduitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduitGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProduitCountArgs<ExtArgs>
            result: $Utils.Optional<ProduitCountAggregateOutputType> | number
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
    session?: SessionOmit
    page?: PageOmit
    famille?: FamilleOmit
    type?: TypeOmit
    marque?: MarqueOmit
    modele?: ModeleOmit
    modeleType?: ModeleTypeOmit
    produit?: ProduitOmit
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
   * Count Type FamilleCountOutputType
   */

  export type FamilleCountOutputType = {
    modeles: number
    types: number
  }

  export type FamilleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modeles?: boolean | FamilleCountOutputTypeCountModelesArgs
    types?: boolean | FamilleCountOutputTypeCountTypesArgs
  }

  // Custom InputTypes
  /**
   * FamilleCountOutputType without action
   */
  export type FamilleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilleCountOutputType
     */
    select?: FamilleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamilleCountOutputType without action
   */
  export type FamilleCountOutputTypeCountModelesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModeleWhereInput
  }

  /**
   * FamilleCountOutputType without action
   */
  export type FamilleCountOutputTypeCountTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
  }


  /**
   * Count Type TypeCountOutputType
   */

  export type TypeCountOutputType = {
    familles: number
    modeleTypes: number
  }

  export type TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familles?: boolean | TypeCountOutputTypeCountFamillesArgs
    modeleTypes?: boolean | TypeCountOutputTypeCountModeleTypesArgs
  }

  // Custom InputTypes
  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCountOutputType
     */
    select?: TypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountFamillesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilleWhereInput
  }

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountModeleTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModeleTypeWhereInput
  }


  /**
   * Count Type MarqueCountOutputType
   */

  export type MarqueCountOutputType = {
    modeles: number
  }

  export type MarqueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modeles?: boolean | MarqueCountOutputTypeCountModelesArgs
  }

  // Custom InputTypes
  /**
   * MarqueCountOutputType without action
   */
  export type MarqueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarqueCountOutputType
     */
    select?: MarqueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarqueCountOutputType without action
   */
  export type MarqueCountOutputTypeCountModelesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModeleWhereInput
  }


  /**
   * Count Type ModeleCountOutputType
   */

  export type ModeleCountOutputType = {
    modeleTypes: number
  }

  export type ModeleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modeleTypes?: boolean | ModeleCountOutputTypeCountModeleTypesArgs
  }

  // Custom InputTypes
  /**
   * ModeleCountOutputType without action
   */
  export type ModeleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleCountOutputType
     */
    select?: ModeleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModeleCountOutputType without action
   */
  export type ModeleCountOutputTypeCountModeleTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModeleTypeWhereInput
  }


  /**
   * Count Type ModeleTypeCountOutputType
   */

  export type ModeleTypeCountOutputType = {
    produits: number
  }

  export type ModeleTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produits?: boolean | ModeleTypeCountOutputTypeCountProduitsArgs
  }

  // Custom InputTypes
  /**
   * ModeleTypeCountOutputType without action
   */
  export type ModeleTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleTypeCountOutputType
     */
    select?: ModeleTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModeleTypeCountOutputType without action
   */
  export type ModeleTypeCountOutputTypeCountProduitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduitWhereInput
  }


  /**
   * Count Type ProduitCountOutputType
   */

  export type ProduitCountOutputType = {
    modeleTypes: number
  }

  export type ProduitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modeleTypes?: boolean | ProduitCountOutputTypeCountModeleTypesArgs
  }

  // Custom InputTypes
  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduitCountOutputType
     */
    select?: ProduitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeCountModeleTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModeleTypeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    userId: bigint | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    shop: string | null
    state: string | null
    isOnline: boolean | null
    scope: string | null
    expires: Date | null
    accessToken: string | null
    userId: bigint | null
    firstName: string | null
    lastName: string | null
    email: string | null
    accountOwner: boolean | null
    locale: string | null
    collaborator: boolean | null
    emailVerified: boolean | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    shop: string | null
    state: string | null
    isOnline: boolean | null
    scope: string | null
    expires: Date | null
    accessToken: string | null
    userId: bigint | null
    firstName: string | null
    lastName: string | null
    email: string | null
    accountOwner: boolean | null
    locale: string | null
    collaborator: boolean | null
    emailVerified: boolean | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    shop: number
    state: number
    isOnline: number
    scope: number
    expires: number
    accessToken: number
    userId: number
    firstName: number
    lastName: number
    email: number
    accountOwner: number
    locale: number
    collaborator: number
    emailVerified: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    shop?: true
    state?: true
    isOnline?: true
    scope?: true
    expires?: true
    accessToken?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    accountOwner?: true
    locale?: true
    collaborator?: true
    emailVerified?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    shop?: true
    state?: true
    isOnline?: true
    scope?: true
    expires?: true
    accessToken?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    accountOwner?: true
    locale?: true
    collaborator?: true
    emailVerified?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    shop?: true
    state?: true
    isOnline?: true
    scope?: true
    expires?: true
    accessToken?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    accountOwner?: true
    locale?: true
    collaborator?: true
    emailVerified?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    shop: string
    state: string
    isOnline: boolean
    scope: string | null
    expires: Date | null
    accessToken: string
    userId: bigint | null
    firstName: string | null
    lastName: string | null
    email: string | null
    accountOwner: boolean
    locale: string | null
    collaborator: boolean | null
    emailVerified: boolean | null
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop?: boolean
    state?: boolean
    isOnline?: boolean
    scope?: boolean
    expires?: boolean
    accessToken?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    accountOwner?: boolean
    locale?: boolean
    collaborator?: boolean
    emailVerified?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop?: boolean
    state?: boolean
    isOnline?: boolean
    scope?: boolean
    expires?: boolean
    accessToken?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    accountOwner?: boolean
    locale?: boolean
    collaborator?: boolean
    emailVerified?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop?: boolean
    state?: boolean
    isOnline?: boolean
    scope?: boolean
    expires?: boolean
    accessToken?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    accountOwner?: boolean
    locale?: boolean
    collaborator?: boolean
    emailVerified?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    shop?: boolean
    state?: boolean
    isOnline?: boolean
    scope?: boolean
    expires?: boolean
    accessToken?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    accountOwner?: boolean
    locale?: boolean
    collaborator?: boolean
    emailVerified?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shop" | "state" | "isOnline" | "scope" | "expires" | "accessToken" | "userId" | "firstName" | "lastName" | "email" | "accountOwner" | "locale" | "collaborator" | "emailVerified", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shop: string
      state: string
      isOnline: boolean
      scope: string | null
      expires: Date | null
      accessToken: string
      userId: bigint | null
      firstName: string | null
      lastName: string | null
      email: string | null
      accountOwner: boolean
      locale: string | null
      collaborator: boolean | null
      emailVerified: boolean | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly shop: FieldRef<"Session", 'String'>
    readonly state: FieldRef<"Session", 'String'>
    readonly isOnline: FieldRef<"Session", 'Boolean'>
    readonly scope: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly accessToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'BigInt'>
    readonly firstName: FieldRef<"Session", 'String'>
    readonly lastName: FieldRef<"Session", 'String'>
    readonly email: FieldRef<"Session", 'String'>
    readonly accountOwner: FieldRef<"Session", 'Boolean'>
    readonly locale: FieldRef<"Session", 'String'>
    readonly collaborator: FieldRef<"Session", 'Boolean'>
    readonly emailVerified: FieldRef<"Session", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageAvgAggregateOutputType = {
    id: number | null
  }

  export type PageSumAggregateOutputType = {
    id: number | null
  }

  export type PageMinAggregateOutputType = {
    id: number | null
    name: string | null
    idShopify: string | null
    url: string | null
  }

  export type PageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    idShopify: string | null
    url: string | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    name: number
    idShopify: number
    url: number
    _all: number
  }


  export type PageAvgAggregateInputType = {
    id?: true
  }

  export type PageSumAggregateInputType = {
    id?: true
  }

  export type PageMinAggregateInputType = {
    id?: true
    name?: true
    idShopify?: true
    url?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    name?: true
    idShopify?: true
    url?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    name?: true
    idShopify?: true
    url?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _avg?: PageAvgAggregateInputType
    _sum?: PageSumAggregateInputType
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: number
    name: string
    idShopify: string
    url: string
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    idShopify?: boolean
    url?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    idShopify?: boolean
    url?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    idShopify?: boolean
    url?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectScalar = {
    id?: boolean
    name?: boolean
    idShopify?: boolean
    url?: boolean
  }

  export type PageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "idShopify" | "url", ExtArgs["result"]["page"]>

  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      idShopify: string
      url: string
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageFindManyArgs>(args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCreateManyArgs>(args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {PageCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(args?: SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageDeleteManyArgs>(args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageUpdateManyArgs>(args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages and returns the data updated in the database.
     * @param {PageUpdateManyAndReturnArgs} args - Arguments to update many Pages.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(args: SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
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
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Page model
   */
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'Int'>
    readonly name: FieldRef<"Page", 'String'>
    readonly idShopify: FieldRef<"Page", 'String'>
    readonly url: FieldRef<"Page", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
  }

  /**
   * Page createManyAndReturn
   */
  export type PageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
  }

  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page updateManyAndReturn
   */
  export type PageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }

  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to delete.
     */
    limit?: number
  }

  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
  }


  /**
   * Model Famille
   */

  export type AggregateFamille = {
    _count: FamilleCountAggregateOutputType | null
    _avg: FamilleAvgAggregateOutputType | null
    _sum: FamilleSumAggregateOutputType | null
    _min: FamilleMinAggregateOutputType | null
    _max: FamilleMaxAggregateOutputType | null
  }

  export type FamilleAvgAggregateOutputType = {
    id: number | null
  }

  export type FamilleSumAggregateOutputType = {
    id: number | null
  }

  export type FamilleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FamilleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FamilleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FamilleAvgAggregateInputType = {
    id?: true
  }

  export type FamilleSumAggregateInputType = {
    id?: true
  }

  export type FamilleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FamilleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FamilleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FamilleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Famille to aggregate.
     */
    where?: FamilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familles to fetch.
     */
    orderBy?: FamilleOrderByWithRelationInput | FamilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Familles
    **/
    _count?: true | FamilleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FamilleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FamilleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilleMaxAggregateInputType
  }

  export type GetFamilleAggregateType<T extends FamilleAggregateArgs> = {
        [P in keyof T & keyof AggregateFamille]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamille[P]>
      : GetScalarType<T[P], AggregateFamille[P]>
  }




  export type FamilleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilleWhereInput
    orderBy?: FamilleOrderByWithAggregationInput | FamilleOrderByWithAggregationInput[]
    by: FamilleScalarFieldEnum[] | FamilleScalarFieldEnum
    having?: FamilleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilleCountAggregateInputType | true
    _avg?: FamilleAvgAggregateInputType
    _sum?: FamilleSumAggregateInputType
    _min?: FamilleMinAggregateInputType
    _max?: FamilleMaxAggregateInputType
  }

  export type FamilleGroupByOutputType = {
    id: number
    name: string
    _count: FamilleCountAggregateOutputType | null
    _avg: FamilleAvgAggregateOutputType | null
    _sum: FamilleSumAggregateOutputType | null
    _min: FamilleMinAggregateOutputType | null
    _max: FamilleMaxAggregateOutputType | null
  }

  type GetFamilleGroupByPayload<T extends FamilleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilleGroupByOutputType[P]>
            : GetScalarType<T[P], FamilleGroupByOutputType[P]>
        }
      >
    >


  export type FamilleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    modeles?: boolean | Famille$modelesArgs<ExtArgs>
    types?: boolean | Famille$typesArgs<ExtArgs>
    _count?: boolean | FamilleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["famille"]>

  export type FamilleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["famille"]>

  export type FamilleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["famille"]>

  export type FamilleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FamilleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["famille"]>
  export type FamilleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modeles?: boolean | Famille$modelesArgs<ExtArgs>
    types?: boolean | Famille$typesArgs<ExtArgs>
    _count?: boolean | FamilleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FamilleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FamilleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FamillePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Famille"
    objects: {
      modeles: Prisma.$ModelePayload<ExtArgs>[]
      types: Prisma.$TypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["famille"]>
    composites: {}
  }

  type FamilleGetPayload<S extends boolean | null | undefined | FamilleDefaultArgs> = $Result.GetResult<Prisma.$FamillePayload, S>

  type FamilleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FamilleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamilleCountAggregateInputType | true
    }

  export interface FamilleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Famille'], meta: { name: 'Famille' } }
    /**
     * Find zero or one Famille that matches the filter.
     * @param {FamilleFindUniqueArgs} args - Arguments to find a Famille
     * @example
     * // Get one Famille
     * const famille = await prisma.famille.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamilleFindUniqueArgs>(args: SelectSubset<T, FamilleFindUniqueArgs<ExtArgs>>): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Famille that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FamilleFindUniqueOrThrowArgs} args - Arguments to find a Famille
     * @example
     * // Get one Famille
     * const famille = await prisma.famille.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamilleFindUniqueOrThrowArgs>(args: SelectSubset<T, FamilleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Famille that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleFindFirstArgs} args - Arguments to find a Famille
     * @example
     * // Get one Famille
     * const famille = await prisma.famille.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamilleFindFirstArgs>(args?: SelectSubset<T, FamilleFindFirstArgs<ExtArgs>>): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Famille that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleFindFirstOrThrowArgs} args - Arguments to find a Famille
     * @example
     * // Get one Famille
     * const famille = await prisma.famille.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamilleFindFirstOrThrowArgs>(args?: SelectSubset<T, FamilleFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Familles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Familles
     * const familles = await prisma.famille.findMany()
     * 
     * // Get first 10 Familles
     * const familles = await prisma.famille.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familleWithIdOnly = await prisma.famille.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FamilleFindManyArgs>(args?: SelectSubset<T, FamilleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Famille.
     * @param {FamilleCreateArgs} args - Arguments to create a Famille.
     * @example
     * // Create one Famille
     * const Famille = await prisma.famille.create({
     *   data: {
     *     // ... data to create a Famille
     *   }
     * })
     * 
     */
    create<T extends FamilleCreateArgs>(args: SelectSubset<T, FamilleCreateArgs<ExtArgs>>): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Familles.
     * @param {FamilleCreateManyArgs} args - Arguments to create many Familles.
     * @example
     * // Create many Familles
     * const famille = await prisma.famille.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamilleCreateManyArgs>(args?: SelectSubset<T, FamilleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Familles and returns the data saved in the database.
     * @param {FamilleCreateManyAndReturnArgs} args - Arguments to create many Familles.
     * @example
     * // Create many Familles
     * const famille = await prisma.famille.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Familles and only return the `id`
     * const familleWithIdOnly = await prisma.famille.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FamilleCreateManyAndReturnArgs>(args?: SelectSubset<T, FamilleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Famille.
     * @param {FamilleDeleteArgs} args - Arguments to delete one Famille.
     * @example
     * // Delete one Famille
     * const Famille = await prisma.famille.delete({
     *   where: {
     *     // ... filter to delete one Famille
     *   }
     * })
     * 
     */
    delete<T extends FamilleDeleteArgs>(args: SelectSubset<T, FamilleDeleteArgs<ExtArgs>>): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Famille.
     * @param {FamilleUpdateArgs} args - Arguments to update one Famille.
     * @example
     * // Update one Famille
     * const famille = await prisma.famille.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamilleUpdateArgs>(args: SelectSubset<T, FamilleUpdateArgs<ExtArgs>>): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Familles.
     * @param {FamilleDeleteManyArgs} args - Arguments to filter Familles to delete.
     * @example
     * // Delete a few Familles
     * const { count } = await prisma.famille.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamilleDeleteManyArgs>(args?: SelectSubset<T, FamilleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Familles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Familles
     * const famille = await prisma.famille.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamilleUpdateManyArgs>(args: SelectSubset<T, FamilleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Familles and returns the data updated in the database.
     * @param {FamilleUpdateManyAndReturnArgs} args - Arguments to update many Familles.
     * @example
     * // Update many Familles
     * const famille = await prisma.famille.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Familles and only return the `id`
     * const familleWithIdOnly = await prisma.famille.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FamilleUpdateManyAndReturnArgs>(args: SelectSubset<T, FamilleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Famille.
     * @param {FamilleUpsertArgs} args - Arguments to update or create a Famille.
     * @example
     * // Update or create a Famille
     * const famille = await prisma.famille.upsert({
     *   create: {
     *     // ... data to create a Famille
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Famille we want to update
     *   }
     * })
     */
    upsert<T extends FamilleUpsertArgs>(args: SelectSubset<T, FamilleUpsertArgs<ExtArgs>>): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Familles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleCountArgs} args - Arguments to filter Familles to count.
     * @example
     * // Count the number of Familles
     * const count = await prisma.famille.count({
     *   where: {
     *     // ... the filter for the Familles we want to count
     *   }
     * })
    **/
    count<T extends FamilleCountArgs>(
      args?: Subset<T, FamilleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Famille.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamilleAggregateArgs>(args: Subset<T, FamilleAggregateArgs>): Prisma.PrismaPromise<GetFamilleAggregateType<T>>

    /**
     * Group by Famille.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleGroupByArgs} args - Group by arguments.
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
      T extends FamilleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilleGroupByArgs['orderBy'] }
        : { orderBy?: FamilleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FamilleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Famille model
   */
  readonly fields: FamilleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Famille.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modeles<T extends Famille$modelesArgs<ExtArgs> = {}>(args?: Subset<T, Famille$modelesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    types<T extends Famille$typesArgs<ExtArgs> = {}>(args?: Subset<T, Famille$typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Famille model
   */
  interface FamilleFieldRefs {
    readonly id: FieldRef<"Famille", 'Int'>
    readonly name: FieldRef<"Famille", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Famille findUnique
   */
  export type FamilleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Famille
     */
    omit?: FamilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * Filter, which Famille to fetch.
     */
    where: FamilleWhereUniqueInput
  }

  /**
   * Famille findUniqueOrThrow
   */
  export type FamilleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Famille
     */
    omit?: FamilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * Filter, which Famille to fetch.
     */
    where: FamilleWhereUniqueInput
  }

  /**
   * Famille findFirst
   */
  export type FamilleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Famille
     */
    omit?: FamilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * Filter, which Famille to fetch.
     */
    where?: FamilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familles to fetch.
     */
    orderBy?: FamilleOrderByWithRelationInput | FamilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Familles.
     */
    cursor?: FamilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Familles.
     */
    distinct?: FamilleScalarFieldEnum | FamilleScalarFieldEnum[]
  }

  /**
   * Famille findFirstOrThrow
   */
  export type FamilleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Famille
     */
    omit?: FamilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * Filter, which Famille to fetch.
     */
    where?: FamilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familles to fetch.
     */
    orderBy?: FamilleOrderByWithRelationInput | FamilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Familles.
     */
    cursor?: FamilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Familles.
     */
    distinct?: FamilleScalarFieldEnum | FamilleScalarFieldEnum[]
  }

  /**
   * Famille findMany
   */
  export type FamilleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Famille
     */
    omit?: FamilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * Filter, which Familles to fetch.
     */
    where?: FamilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familles to fetch.
     */
    orderBy?: FamilleOrderByWithRelationInput | FamilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Familles.
     */
    cursor?: FamilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familles.
     */
    skip?: number
    distinct?: FamilleScalarFieldEnum | FamilleScalarFieldEnum[]
  }

  /**
   * Famille create
   */
  export type FamilleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Famille
     */
    omit?: FamilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * The data needed to create a Famille.
     */
    data: XOR<FamilleCreateInput, FamilleUncheckedCreateInput>
  }

  /**
   * Famille createMany
   */
  export type FamilleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Familles.
     */
    data: FamilleCreateManyInput | FamilleCreateManyInput[]
  }

  /**
   * Famille createManyAndReturn
   */
  export type FamilleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Famille
     */
    omit?: FamilleOmit<ExtArgs> | null
    /**
     * The data used to create many Familles.
     */
    data: FamilleCreateManyInput | FamilleCreateManyInput[]
  }

  /**
   * Famille update
   */
  export type FamilleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Famille
     */
    omit?: FamilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * The data needed to update a Famille.
     */
    data: XOR<FamilleUpdateInput, FamilleUncheckedUpdateInput>
    /**
     * Choose, which Famille to update.
     */
    where: FamilleWhereUniqueInput
  }

  /**
   * Famille updateMany
   */
  export type FamilleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Familles.
     */
    data: XOR<FamilleUpdateManyMutationInput, FamilleUncheckedUpdateManyInput>
    /**
     * Filter which Familles to update
     */
    where?: FamilleWhereInput
    /**
     * Limit how many Familles to update.
     */
    limit?: number
  }

  /**
   * Famille updateManyAndReturn
   */
  export type FamilleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Famille
     */
    omit?: FamilleOmit<ExtArgs> | null
    /**
     * The data used to update Familles.
     */
    data: XOR<FamilleUpdateManyMutationInput, FamilleUncheckedUpdateManyInput>
    /**
     * Filter which Familles to update
     */
    where?: FamilleWhereInput
    /**
     * Limit how many Familles to update.
     */
    limit?: number
  }

  /**
   * Famille upsert
   */
  export type FamilleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Famille
     */
    omit?: FamilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * The filter to search for the Famille to update in case it exists.
     */
    where: FamilleWhereUniqueInput
    /**
     * In case the Famille found by the `where` argument doesn't exist, create a new Famille with this data.
     */
    create: XOR<FamilleCreateInput, FamilleUncheckedCreateInput>
    /**
     * In case the Famille was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilleUpdateInput, FamilleUncheckedUpdateInput>
  }

  /**
   * Famille delete
   */
  export type FamilleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Famille
     */
    omit?: FamilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * Filter which Famille to delete.
     */
    where: FamilleWhereUniqueInput
  }

  /**
   * Famille deleteMany
   */
  export type FamilleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Familles to delete
     */
    where?: FamilleWhereInput
    /**
     * Limit how many Familles to delete.
     */
    limit?: number
  }

  /**
   * Famille.modeles
   */
  export type Famille$modelesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleInclude<ExtArgs> | null
    where?: ModeleWhereInput
    orderBy?: ModeleOrderByWithRelationInput | ModeleOrderByWithRelationInput[]
    cursor?: ModeleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModeleScalarFieldEnum | ModeleScalarFieldEnum[]
  }

  /**
   * Famille.types
   */
  export type Famille$typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    cursor?: TypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Famille without action
   */
  export type FamilleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Famille
     */
    omit?: FamilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilleInclude<ExtArgs> | null
  }


  /**
   * Model Type
   */

  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeAvgAggregateOutputType = {
    id: number | null
  }

  export type TypeSumAggregateOutputType = {
    id: number | null
  }

  export type TypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    help: string | null
  }

  export type TypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    help: string | null
  }

  export type TypeCountAggregateOutputType = {
    id: number
    name: number
    help: number
    _all: number
  }


  export type TypeAvgAggregateInputType = {
    id?: true
  }

  export type TypeSumAggregateInputType = {
    id?: true
  }

  export type TypeMinAggregateInputType = {
    id?: true
    name?: true
    help?: true
  }

  export type TypeMaxAggregateInputType = {
    id?: true
    name?: true
    help?: true
  }

  export type TypeCountAggregateInputType = {
    id?: true
    name?: true
    help?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type to aggregate.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithAggregationInput | TypeOrderByWithAggregationInput[]
    by: TypeScalarFieldEnum[] | TypeScalarFieldEnum
    having?: TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _avg?: TypeAvgAggregateInputType
    _sum?: TypeSumAggregateInputType
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }

  export type TypeGroupByOutputType = {
    id: number
    name: string
    help: string
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    help?: boolean
    familles?: boolean | Type$famillesArgs<ExtArgs>
    modeleTypes?: boolean | Type$modeleTypesArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>

  export type TypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    help?: boolean
  }, ExtArgs["result"]["type"]>

  export type TypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    help?: boolean
  }, ExtArgs["result"]["type"]>

  export type TypeSelectScalar = {
    id?: boolean
    name?: boolean
    help?: boolean
  }

  export type TypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "help", ExtArgs["result"]["type"]>
  export type TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familles?: boolean | Type$famillesArgs<ExtArgs>
    modeleTypes?: boolean | Type$modeleTypesArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type"
    objects: {
      familles: Prisma.$FamillePayload<ExtArgs>[]
      modeleTypes: Prisma.$ModeleTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      help: string
    }, ExtArgs["result"]["type"]>
    composites: {}
  }

  type TypeGetPayload<S extends boolean | null | undefined | TypeDefaultArgs> = $Result.GetResult<Prisma.$TypePayload, S>

  type TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type'], meta: { name: 'Type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {TypeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeFindUniqueArgs>(args: SelectSubset<T, TypeFindUniqueArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeFindFirstArgs>(args?: SelectSubset<T, TypeFindFirstArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeWithIdOnly = await prisma.type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeFindManyArgs>(args?: SelectSubset<T, TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type.
     * @param {TypeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
     */
    create<T extends TypeCreateArgs>(args: SelectSubset<T, TypeCreateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Types.
     * @param {TypeCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeCreateManyArgs>(args?: SelectSubset<T, TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Types and returns the data saved in the database.
     * @param {TypeCreateManyAndReturnArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Types and only return the `id`
     * const typeWithIdOnly = await prisma.type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Type.
     * @param {TypeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
     */
    delete<T extends TypeDeleteArgs>(args: SelectSubset<T, TypeDeleteArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type.
     * @param {TypeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeUpdateArgs>(args: SelectSubset<T, TypeUpdateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Types.
     * @param {TypeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeDeleteManyArgs>(args?: SelectSubset<T, TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeUpdateManyArgs>(args: SelectSubset<T, TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types and returns the data updated in the database.
     * @param {TypeUpdateManyAndReturnArgs} args - Arguments to update many Types.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Types and only return the `id`
     * const typeWithIdOnly = await prisma.type.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Type.
     * @param {TypeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
     */
    upsert<T extends TypeUpsertArgs>(args: SelectSubset<T, TypeUpsertArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypeCountArgs>(
      args?: Subset<T, TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
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
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type model
   */
  readonly fields: TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    familles<T extends Type$famillesArgs<ExtArgs> = {}>(args?: Subset<T, Type$famillesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    modeleTypes<T extends Type$modeleTypesArgs<ExtArgs> = {}>(args?: Subset<T, Type$modeleTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Type model
   */
  interface TypeFieldRefs {
    readonly id: FieldRef<"Type", 'Int'>
    readonly name: FieldRef<"Type", 'String'>
    readonly help: FieldRef<"Type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Type findUnique
   */
  export type TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findUniqueOrThrow
   */
  export type TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findFirst
   */
  export type TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findFirstOrThrow
   */
  export type TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findMany
   */
  export type TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type create
   */
  export type TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Type.
     */
    data: XOR<TypeCreateInput, TypeUncheckedCreateInput>
  }

  /**
   * Type createMany
   */
  export type TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
  }

  /**
   * Type createManyAndReturn
   */
  export type TypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
  }

  /**
   * Type update
   */
  export type TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Type.
     */
    data: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
    /**
     * Choose, which Type to update.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type updateMany
   */
  export type TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type updateManyAndReturn
   */
  export type TypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type upsert
   */
  export type TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Type to update in case it exists.
     */
    where: TypeWhereUniqueInput
    /**
     * In case the Type found by the `where` argument doesn't exist, create a new Type with this data.
     */
    create: XOR<TypeCreateInput, TypeUncheckedCreateInput>
    /**
     * In case the Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
  }

  /**
   * Type delete
   */
  export type TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter which Type to delete.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type deleteMany
   */
  export type TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to delete.
     */
    limit?: number
  }

  /**
   * Type.familles
   */
  export type Type$famillesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Famille
     */
    omit?: FamilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilleInclude<ExtArgs> | null
    where?: FamilleWhereInput
    orderBy?: FamilleOrderByWithRelationInput | FamilleOrderByWithRelationInput[]
    cursor?: FamilleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilleScalarFieldEnum | FamilleScalarFieldEnum[]
  }

  /**
   * Type.modeleTypes
   */
  export type Type$modeleTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeInclude<ExtArgs> | null
    where?: ModeleTypeWhereInput
    orderBy?: ModeleTypeOrderByWithRelationInput | ModeleTypeOrderByWithRelationInput[]
    cursor?: ModeleTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModeleTypeScalarFieldEnum | ModeleTypeScalarFieldEnum[]
  }

  /**
   * Type without action
   */
  export type TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
  }


  /**
   * Model Marque
   */

  export type AggregateMarque = {
    _count: MarqueCountAggregateOutputType | null
    _avg: MarqueAvgAggregateOutputType | null
    _sum: MarqueSumAggregateOutputType | null
    _min: MarqueMinAggregateOutputType | null
    _max: MarqueMaxAggregateOutputType | null
  }

  export type MarqueAvgAggregateOutputType = {
    id: number | null
  }

  export type MarqueSumAggregateOutputType = {
    id: number | null
  }

  export type MarqueMinAggregateOutputType = {
    id: number | null
    logo: string | null
    name: string | null
  }

  export type MarqueMaxAggregateOutputType = {
    id: number | null
    logo: string | null
    name: string | null
  }

  export type MarqueCountAggregateOutputType = {
    id: number
    logo: number
    name: number
    _all: number
  }


  export type MarqueAvgAggregateInputType = {
    id?: true
  }

  export type MarqueSumAggregateInputType = {
    id?: true
  }

  export type MarqueMinAggregateInputType = {
    id?: true
    logo?: true
    name?: true
  }

  export type MarqueMaxAggregateInputType = {
    id?: true
    logo?: true
    name?: true
  }

  export type MarqueCountAggregateInputType = {
    id?: true
    logo?: true
    name?: true
    _all?: true
  }

  export type MarqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marque to aggregate.
     */
    where?: MarqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marques to fetch.
     */
    orderBy?: MarqueOrderByWithRelationInput | MarqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marques
    **/
    _count?: true | MarqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarqueMaxAggregateInputType
  }

  export type GetMarqueAggregateType<T extends MarqueAggregateArgs> = {
        [P in keyof T & keyof AggregateMarque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarque[P]>
      : GetScalarType<T[P], AggregateMarque[P]>
  }




  export type MarqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarqueWhereInput
    orderBy?: MarqueOrderByWithAggregationInput | MarqueOrderByWithAggregationInput[]
    by: MarqueScalarFieldEnum[] | MarqueScalarFieldEnum
    having?: MarqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarqueCountAggregateInputType | true
    _avg?: MarqueAvgAggregateInputType
    _sum?: MarqueSumAggregateInputType
    _min?: MarqueMinAggregateInputType
    _max?: MarqueMaxAggregateInputType
  }

  export type MarqueGroupByOutputType = {
    id: number
    logo: string
    name: string
    _count: MarqueCountAggregateOutputType | null
    _avg: MarqueAvgAggregateOutputType | null
    _sum: MarqueSumAggregateOutputType | null
    _min: MarqueMinAggregateOutputType | null
    _max: MarqueMaxAggregateOutputType | null
  }

  type GetMarqueGroupByPayload<T extends MarqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarqueGroupByOutputType[P]>
            : GetScalarType<T[P], MarqueGroupByOutputType[P]>
        }
      >
    >


  export type MarqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logo?: boolean
    name?: boolean
    modeles?: boolean | Marque$modelesArgs<ExtArgs>
    _count?: boolean | MarqueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marque"]>

  export type MarqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logo?: boolean
    name?: boolean
  }, ExtArgs["result"]["marque"]>

  export type MarqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logo?: boolean
    name?: boolean
  }, ExtArgs["result"]["marque"]>

  export type MarqueSelectScalar = {
    id?: boolean
    logo?: boolean
    name?: boolean
  }

  export type MarqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "logo" | "name", ExtArgs["result"]["marque"]>
  export type MarqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modeles?: boolean | Marque$modelesArgs<ExtArgs>
    _count?: boolean | MarqueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MarqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MarquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marque"
    objects: {
      modeles: Prisma.$ModelePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      logo: string
      name: string
    }, ExtArgs["result"]["marque"]>
    composites: {}
  }

  type MarqueGetPayload<S extends boolean | null | undefined | MarqueDefaultArgs> = $Result.GetResult<Prisma.$MarquePayload, S>

  type MarqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarqueCountAggregateInputType | true
    }

  export interface MarqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marque'], meta: { name: 'Marque' } }
    /**
     * Find zero or one Marque that matches the filter.
     * @param {MarqueFindUniqueArgs} args - Arguments to find a Marque
     * @example
     * // Get one Marque
     * const marque = await prisma.marque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarqueFindUniqueArgs>(args: SelectSubset<T, MarqueFindUniqueArgs<ExtArgs>>): Prisma__MarqueClient<$Result.GetResult<Prisma.$MarquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarqueFindUniqueOrThrowArgs} args - Arguments to find a Marque
     * @example
     * // Get one Marque
     * const marque = await prisma.marque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarqueFindUniqueOrThrowArgs>(args: SelectSubset<T, MarqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarqueClient<$Result.GetResult<Prisma.$MarquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarqueFindFirstArgs} args - Arguments to find a Marque
     * @example
     * // Get one Marque
     * const marque = await prisma.marque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarqueFindFirstArgs>(args?: SelectSubset<T, MarqueFindFirstArgs<ExtArgs>>): Prisma__MarqueClient<$Result.GetResult<Prisma.$MarquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarqueFindFirstOrThrowArgs} args - Arguments to find a Marque
     * @example
     * // Get one Marque
     * const marque = await prisma.marque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarqueFindFirstOrThrowArgs>(args?: SelectSubset<T, MarqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarqueClient<$Result.GetResult<Prisma.$MarquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marques
     * const marques = await prisma.marque.findMany()
     * 
     * // Get first 10 Marques
     * const marques = await prisma.marque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marqueWithIdOnly = await prisma.marque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarqueFindManyArgs>(args?: SelectSubset<T, MarqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marque.
     * @param {MarqueCreateArgs} args - Arguments to create a Marque.
     * @example
     * // Create one Marque
     * const Marque = await prisma.marque.create({
     *   data: {
     *     // ... data to create a Marque
     *   }
     * })
     * 
     */
    create<T extends MarqueCreateArgs>(args: SelectSubset<T, MarqueCreateArgs<ExtArgs>>): Prisma__MarqueClient<$Result.GetResult<Prisma.$MarquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marques.
     * @param {MarqueCreateManyArgs} args - Arguments to create many Marques.
     * @example
     * // Create many Marques
     * const marque = await prisma.marque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarqueCreateManyArgs>(args?: SelectSubset<T, MarqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marques and returns the data saved in the database.
     * @param {MarqueCreateManyAndReturnArgs} args - Arguments to create many Marques.
     * @example
     * // Create many Marques
     * const marque = await prisma.marque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marques and only return the `id`
     * const marqueWithIdOnly = await prisma.marque.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarqueCreateManyAndReturnArgs>(args?: SelectSubset<T, MarqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marque.
     * @param {MarqueDeleteArgs} args - Arguments to delete one Marque.
     * @example
     * // Delete one Marque
     * const Marque = await prisma.marque.delete({
     *   where: {
     *     // ... filter to delete one Marque
     *   }
     * })
     * 
     */
    delete<T extends MarqueDeleteArgs>(args: SelectSubset<T, MarqueDeleteArgs<ExtArgs>>): Prisma__MarqueClient<$Result.GetResult<Prisma.$MarquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marque.
     * @param {MarqueUpdateArgs} args - Arguments to update one Marque.
     * @example
     * // Update one Marque
     * const marque = await prisma.marque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarqueUpdateArgs>(args: SelectSubset<T, MarqueUpdateArgs<ExtArgs>>): Prisma__MarqueClient<$Result.GetResult<Prisma.$MarquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marques.
     * @param {MarqueDeleteManyArgs} args - Arguments to filter Marques to delete.
     * @example
     * // Delete a few Marques
     * const { count } = await prisma.marque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarqueDeleteManyArgs>(args?: SelectSubset<T, MarqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marques
     * const marque = await prisma.marque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarqueUpdateManyArgs>(args: SelectSubset<T, MarqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marques and returns the data updated in the database.
     * @param {MarqueUpdateManyAndReturnArgs} args - Arguments to update many Marques.
     * @example
     * // Update many Marques
     * const marque = await prisma.marque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marques and only return the `id`
     * const marqueWithIdOnly = await prisma.marque.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarqueUpdateManyAndReturnArgs>(args: SelectSubset<T, MarqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marque.
     * @param {MarqueUpsertArgs} args - Arguments to update or create a Marque.
     * @example
     * // Update or create a Marque
     * const marque = await prisma.marque.upsert({
     *   create: {
     *     // ... data to create a Marque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marque we want to update
     *   }
     * })
     */
    upsert<T extends MarqueUpsertArgs>(args: SelectSubset<T, MarqueUpsertArgs<ExtArgs>>): Prisma__MarqueClient<$Result.GetResult<Prisma.$MarquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarqueCountArgs} args - Arguments to filter Marques to count.
     * @example
     * // Count the number of Marques
     * const count = await prisma.marque.count({
     *   where: {
     *     // ... the filter for the Marques we want to count
     *   }
     * })
    **/
    count<T extends MarqueCountArgs>(
      args?: Subset<T, MarqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarqueAggregateArgs>(args: Subset<T, MarqueAggregateArgs>): Prisma.PrismaPromise<GetMarqueAggregateType<T>>

    /**
     * Group by Marque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarqueGroupByArgs} args - Group by arguments.
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
      T extends MarqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarqueGroupByArgs['orderBy'] }
        : { orderBy?: MarqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marque model
   */
  readonly fields: MarqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modeles<T extends Marque$modelesArgs<ExtArgs> = {}>(args?: Subset<T, Marque$modelesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Marque model
   */
  interface MarqueFieldRefs {
    readonly id: FieldRef<"Marque", 'Int'>
    readonly logo: FieldRef<"Marque", 'String'>
    readonly name: FieldRef<"Marque", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Marque findUnique
   */
  export type MarqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marque
     */
    select?: MarqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marque
     */
    omit?: MarqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarqueInclude<ExtArgs> | null
    /**
     * Filter, which Marque to fetch.
     */
    where: MarqueWhereUniqueInput
  }

  /**
   * Marque findUniqueOrThrow
   */
  export type MarqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marque
     */
    select?: MarqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marque
     */
    omit?: MarqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarqueInclude<ExtArgs> | null
    /**
     * Filter, which Marque to fetch.
     */
    where: MarqueWhereUniqueInput
  }

  /**
   * Marque findFirst
   */
  export type MarqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marque
     */
    select?: MarqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marque
     */
    omit?: MarqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarqueInclude<ExtArgs> | null
    /**
     * Filter, which Marque to fetch.
     */
    where?: MarqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marques to fetch.
     */
    orderBy?: MarqueOrderByWithRelationInput | MarqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marques.
     */
    cursor?: MarqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marques.
     */
    distinct?: MarqueScalarFieldEnum | MarqueScalarFieldEnum[]
  }

  /**
   * Marque findFirstOrThrow
   */
  export type MarqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marque
     */
    select?: MarqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marque
     */
    omit?: MarqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarqueInclude<ExtArgs> | null
    /**
     * Filter, which Marque to fetch.
     */
    where?: MarqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marques to fetch.
     */
    orderBy?: MarqueOrderByWithRelationInput | MarqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marques.
     */
    cursor?: MarqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marques.
     */
    distinct?: MarqueScalarFieldEnum | MarqueScalarFieldEnum[]
  }

  /**
   * Marque findMany
   */
  export type MarqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marque
     */
    select?: MarqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marque
     */
    omit?: MarqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarqueInclude<ExtArgs> | null
    /**
     * Filter, which Marques to fetch.
     */
    where?: MarqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marques to fetch.
     */
    orderBy?: MarqueOrderByWithRelationInput | MarqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marques.
     */
    cursor?: MarqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marques.
     */
    skip?: number
    distinct?: MarqueScalarFieldEnum | MarqueScalarFieldEnum[]
  }

  /**
   * Marque create
   */
  export type MarqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marque
     */
    select?: MarqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marque
     */
    omit?: MarqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarqueInclude<ExtArgs> | null
    /**
     * The data needed to create a Marque.
     */
    data: XOR<MarqueCreateInput, MarqueUncheckedCreateInput>
  }

  /**
   * Marque createMany
   */
  export type MarqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marques.
     */
    data: MarqueCreateManyInput | MarqueCreateManyInput[]
  }

  /**
   * Marque createManyAndReturn
   */
  export type MarqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marque
     */
    select?: MarqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marque
     */
    omit?: MarqueOmit<ExtArgs> | null
    /**
     * The data used to create many Marques.
     */
    data: MarqueCreateManyInput | MarqueCreateManyInput[]
  }

  /**
   * Marque update
   */
  export type MarqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marque
     */
    select?: MarqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marque
     */
    omit?: MarqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarqueInclude<ExtArgs> | null
    /**
     * The data needed to update a Marque.
     */
    data: XOR<MarqueUpdateInput, MarqueUncheckedUpdateInput>
    /**
     * Choose, which Marque to update.
     */
    where: MarqueWhereUniqueInput
  }

  /**
   * Marque updateMany
   */
  export type MarqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marques.
     */
    data: XOR<MarqueUpdateManyMutationInput, MarqueUncheckedUpdateManyInput>
    /**
     * Filter which Marques to update
     */
    where?: MarqueWhereInput
    /**
     * Limit how many Marques to update.
     */
    limit?: number
  }

  /**
   * Marque updateManyAndReturn
   */
  export type MarqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marque
     */
    select?: MarqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marque
     */
    omit?: MarqueOmit<ExtArgs> | null
    /**
     * The data used to update Marques.
     */
    data: XOR<MarqueUpdateManyMutationInput, MarqueUncheckedUpdateManyInput>
    /**
     * Filter which Marques to update
     */
    where?: MarqueWhereInput
    /**
     * Limit how many Marques to update.
     */
    limit?: number
  }

  /**
   * Marque upsert
   */
  export type MarqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marque
     */
    select?: MarqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marque
     */
    omit?: MarqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarqueInclude<ExtArgs> | null
    /**
     * The filter to search for the Marque to update in case it exists.
     */
    where: MarqueWhereUniqueInput
    /**
     * In case the Marque found by the `where` argument doesn't exist, create a new Marque with this data.
     */
    create: XOR<MarqueCreateInput, MarqueUncheckedCreateInput>
    /**
     * In case the Marque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarqueUpdateInput, MarqueUncheckedUpdateInput>
  }

  /**
   * Marque delete
   */
  export type MarqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marque
     */
    select?: MarqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marque
     */
    omit?: MarqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarqueInclude<ExtArgs> | null
    /**
     * Filter which Marque to delete.
     */
    where: MarqueWhereUniqueInput
  }

  /**
   * Marque deleteMany
   */
  export type MarqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marques to delete
     */
    where?: MarqueWhereInput
    /**
     * Limit how many Marques to delete.
     */
    limit?: number
  }

  /**
   * Marque.modeles
   */
  export type Marque$modelesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleInclude<ExtArgs> | null
    where?: ModeleWhereInput
    orderBy?: ModeleOrderByWithRelationInput | ModeleOrderByWithRelationInput[]
    cursor?: ModeleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModeleScalarFieldEnum | ModeleScalarFieldEnum[]
  }

  /**
   * Marque without action
   */
  export type MarqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marque
     */
    select?: MarqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marque
     */
    omit?: MarqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarqueInclude<ExtArgs> | null
  }


  /**
   * Model Modele
   */

  export type AggregateModele = {
    _count: ModeleCountAggregateOutputType | null
    _avg: ModeleAvgAggregateOutputType | null
    _sum: ModeleSumAggregateOutputType | null
    _min: ModeleMinAggregateOutputType | null
    _max: ModeleMaxAggregateOutputType | null
  }

  export type ModeleAvgAggregateOutputType = {
    id: number | null
    marqueId: number | null
    familleId: number | null
  }

  export type ModeleSumAggregateOutputType = {
    id: number | null
    marqueId: number | null
    familleId: number | null
  }

  export type ModeleMinAggregateOutputType = {
    id: number | null
    name: string | null
    marqueId: number | null
    familleId: number | null
  }

  export type ModeleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    marqueId: number | null
    familleId: number | null
  }

  export type ModeleCountAggregateOutputType = {
    id: number
    name: number
    marqueId: number
    familleId: number
    _all: number
  }


  export type ModeleAvgAggregateInputType = {
    id?: true
    marqueId?: true
    familleId?: true
  }

  export type ModeleSumAggregateInputType = {
    id?: true
    marqueId?: true
    familleId?: true
  }

  export type ModeleMinAggregateInputType = {
    id?: true
    name?: true
    marqueId?: true
    familleId?: true
  }

  export type ModeleMaxAggregateInputType = {
    id?: true
    name?: true
    marqueId?: true
    familleId?: true
  }

  export type ModeleCountAggregateInputType = {
    id?: true
    name?: true
    marqueId?: true
    familleId?: true
    _all?: true
  }

  export type ModeleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modele to aggregate.
     */
    where?: ModeleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modeles to fetch.
     */
    orderBy?: ModeleOrderByWithRelationInput | ModeleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModeleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modeles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modeles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modeles
    **/
    _count?: true | ModeleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModeleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModeleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModeleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModeleMaxAggregateInputType
  }

  export type GetModeleAggregateType<T extends ModeleAggregateArgs> = {
        [P in keyof T & keyof AggregateModele]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModele[P]>
      : GetScalarType<T[P], AggregateModele[P]>
  }




  export type ModeleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModeleWhereInput
    orderBy?: ModeleOrderByWithAggregationInput | ModeleOrderByWithAggregationInput[]
    by: ModeleScalarFieldEnum[] | ModeleScalarFieldEnum
    having?: ModeleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModeleCountAggregateInputType | true
    _avg?: ModeleAvgAggregateInputType
    _sum?: ModeleSumAggregateInputType
    _min?: ModeleMinAggregateInputType
    _max?: ModeleMaxAggregateInputType
  }

  export type ModeleGroupByOutputType = {
    id: number
    name: string
    marqueId: number
    familleId: number
    _count: ModeleCountAggregateOutputType | null
    _avg: ModeleAvgAggregateOutputType | null
    _sum: ModeleSumAggregateOutputType | null
    _min: ModeleMinAggregateOutputType | null
    _max: ModeleMaxAggregateOutputType | null
  }

  type GetModeleGroupByPayload<T extends ModeleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModeleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModeleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModeleGroupByOutputType[P]>
            : GetScalarType<T[P], ModeleGroupByOutputType[P]>
        }
      >
    >


  export type ModeleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    marqueId?: boolean
    familleId?: boolean
    marque?: boolean | MarqueDefaultArgs<ExtArgs>
    famille?: boolean | FamilleDefaultArgs<ExtArgs>
    modeleTypes?: boolean | Modele$modeleTypesArgs<ExtArgs>
    _count?: boolean | ModeleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modele"]>

  export type ModeleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    marqueId?: boolean
    familleId?: boolean
    marque?: boolean | MarqueDefaultArgs<ExtArgs>
    famille?: boolean | FamilleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modele"]>

  export type ModeleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    marqueId?: boolean
    familleId?: boolean
    marque?: boolean | MarqueDefaultArgs<ExtArgs>
    famille?: boolean | FamilleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modele"]>

  export type ModeleSelectScalar = {
    id?: boolean
    name?: boolean
    marqueId?: boolean
    familleId?: boolean
  }

  export type ModeleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "marqueId" | "familleId", ExtArgs["result"]["modele"]>
  export type ModeleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marque?: boolean | MarqueDefaultArgs<ExtArgs>
    famille?: boolean | FamilleDefaultArgs<ExtArgs>
    modeleTypes?: boolean | Modele$modeleTypesArgs<ExtArgs>
    _count?: boolean | ModeleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModeleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marque?: boolean | MarqueDefaultArgs<ExtArgs>
    famille?: boolean | FamilleDefaultArgs<ExtArgs>
  }
  export type ModeleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marque?: boolean | MarqueDefaultArgs<ExtArgs>
    famille?: boolean | FamilleDefaultArgs<ExtArgs>
  }

  export type $ModelePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Modele"
    objects: {
      marque: Prisma.$MarquePayload<ExtArgs>
      famille: Prisma.$FamillePayload<ExtArgs>
      modeleTypes: Prisma.$ModeleTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      marqueId: number
      familleId: number
    }, ExtArgs["result"]["modele"]>
    composites: {}
  }

  type ModeleGetPayload<S extends boolean | null | undefined | ModeleDefaultArgs> = $Result.GetResult<Prisma.$ModelePayload, S>

  type ModeleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModeleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModeleCountAggregateInputType | true
    }

  export interface ModeleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Modele'], meta: { name: 'Modele' } }
    /**
     * Find zero or one Modele that matches the filter.
     * @param {ModeleFindUniqueArgs} args - Arguments to find a Modele
     * @example
     * // Get one Modele
     * const modele = await prisma.modele.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModeleFindUniqueArgs>(args: SelectSubset<T, ModeleFindUniqueArgs<ExtArgs>>): Prisma__ModeleClient<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modele that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModeleFindUniqueOrThrowArgs} args - Arguments to find a Modele
     * @example
     * // Get one Modele
     * const modele = await prisma.modele.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModeleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModeleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModeleClient<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modele that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleFindFirstArgs} args - Arguments to find a Modele
     * @example
     * // Get one Modele
     * const modele = await prisma.modele.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModeleFindFirstArgs>(args?: SelectSubset<T, ModeleFindFirstArgs<ExtArgs>>): Prisma__ModeleClient<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modele that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleFindFirstOrThrowArgs} args - Arguments to find a Modele
     * @example
     * // Get one Modele
     * const modele = await prisma.modele.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModeleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModeleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModeleClient<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modeles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modeles
     * const modeles = await prisma.modele.findMany()
     * 
     * // Get first 10 Modeles
     * const modeles = await prisma.modele.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modeleWithIdOnly = await prisma.modele.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModeleFindManyArgs>(args?: SelectSubset<T, ModeleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modele.
     * @param {ModeleCreateArgs} args - Arguments to create a Modele.
     * @example
     * // Create one Modele
     * const Modele = await prisma.modele.create({
     *   data: {
     *     // ... data to create a Modele
     *   }
     * })
     * 
     */
    create<T extends ModeleCreateArgs>(args: SelectSubset<T, ModeleCreateArgs<ExtArgs>>): Prisma__ModeleClient<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modeles.
     * @param {ModeleCreateManyArgs} args - Arguments to create many Modeles.
     * @example
     * // Create many Modeles
     * const modele = await prisma.modele.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModeleCreateManyArgs>(args?: SelectSubset<T, ModeleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modeles and returns the data saved in the database.
     * @param {ModeleCreateManyAndReturnArgs} args - Arguments to create many Modeles.
     * @example
     * // Create many Modeles
     * const modele = await prisma.modele.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modeles and only return the `id`
     * const modeleWithIdOnly = await prisma.modele.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModeleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModeleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Modele.
     * @param {ModeleDeleteArgs} args - Arguments to delete one Modele.
     * @example
     * // Delete one Modele
     * const Modele = await prisma.modele.delete({
     *   where: {
     *     // ... filter to delete one Modele
     *   }
     * })
     * 
     */
    delete<T extends ModeleDeleteArgs>(args: SelectSubset<T, ModeleDeleteArgs<ExtArgs>>): Prisma__ModeleClient<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modele.
     * @param {ModeleUpdateArgs} args - Arguments to update one Modele.
     * @example
     * // Update one Modele
     * const modele = await prisma.modele.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModeleUpdateArgs>(args: SelectSubset<T, ModeleUpdateArgs<ExtArgs>>): Prisma__ModeleClient<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modeles.
     * @param {ModeleDeleteManyArgs} args - Arguments to filter Modeles to delete.
     * @example
     * // Delete a few Modeles
     * const { count } = await prisma.modele.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModeleDeleteManyArgs>(args?: SelectSubset<T, ModeleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modeles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modeles
     * const modele = await prisma.modele.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModeleUpdateManyArgs>(args: SelectSubset<T, ModeleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modeles and returns the data updated in the database.
     * @param {ModeleUpdateManyAndReturnArgs} args - Arguments to update many Modeles.
     * @example
     * // Update many Modeles
     * const modele = await prisma.modele.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modeles and only return the `id`
     * const modeleWithIdOnly = await prisma.modele.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModeleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModeleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Modele.
     * @param {ModeleUpsertArgs} args - Arguments to update or create a Modele.
     * @example
     * // Update or create a Modele
     * const modele = await prisma.modele.upsert({
     *   create: {
     *     // ... data to create a Modele
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modele we want to update
     *   }
     * })
     */
    upsert<T extends ModeleUpsertArgs>(args: SelectSubset<T, ModeleUpsertArgs<ExtArgs>>): Prisma__ModeleClient<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modeles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleCountArgs} args - Arguments to filter Modeles to count.
     * @example
     * // Count the number of Modeles
     * const count = await prisma.modele.count({
     *   where: {
     *     // ... the filter for the Modeles we want to count
     *   }
     * })
    **/
    count<T extends ModeleCountArgs>(
      args?: Subset<T, ModeleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModeleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modele.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModeleAggregateArgs>(args: Subset<T, ModeleAggregateArgs>): Prisma.PrismaPromise<GetModeleAggregateType<T>>

    /**
     * Group by Modele.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleGroupByArgs} args - Group by arguments.
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
      T extends ModeleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModeleGroupByArgs['orderBy'] }
        : { orderBy?: ModeleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModeleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModeleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Modele model
   */
  readonly fields: ModeleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Modele.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModeleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    marque<T extends MarqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarqueDefaultArgs<ExtArgs>>): Prisma__MarqueClient<$Result.GetResult<Prisma.$MarquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    famille<T extends FamilleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilleDefaultArgs<ExtArgs>>): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modeleTypes<T extends Modele$modeleTypesArgs<ExtArgs> = {}>(args?: Subset<T, Modele$modeleTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Modele model
   */
  interface ModeleFieldRefs {
    readonly id: FieldRef<"Modele", 'Int'>
    readonly name: FieldRef<"Modele", 'String'>
    readonly marqueId: FieldRef<"Modele", 'Int'>
    readonly familleId: FieldRef<"Modele", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Modele findUnique
   */
  export type ModeleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleInclude<ExtArgs> | null
    /**
     * Filter, which Modele to fetch.
     */
    where: ModeleWhereUniqueInput
  }

  /**
   * Modele findUniqueOrThrow
   */
  export type ModeleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleInclude<ExtArgs> | null
    /**
     * Filter, which Modele to fetch.
     */
    where: ModeleWhereUniqueInput
  }

  /**
   * Modele findFirst
   */
  export type ModeleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleInclude<ExtArgs> | null
    /**
     * Filter, which Modele to fetch.
     */
    where?: ModeleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modeles to fetch.
     */
    orderBy?: ModeleOrderByWithRelationInput | ModeleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modeles.
     */
    cursor?: ModeleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modeles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modeles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modeles.
     */
    distinct?: ModeleScalarFieldEnum | ModeleScalarFieldEnum[]
  }

  /**
   * Modele findFirstOrThrow
   */
  export type ModeleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleInclude<ExtArgs> | null
    /**
     * Filter, which Modele to fetch.
     */
    where?: ModeleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modeles to fetch.
     */
    orderBy?: ModeleOrderByWithRelationInput | ModeleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modeles.
     */
    cursor?: ModeleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modeles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modeles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modeles.
     */
    distinct?: ModeleScalarFieldEnum | ModeleScalarFieldEnum[]
  }

  /**
   * Modele findMany
   */
  export type ModeleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleInclude<ExtArgs> | null
    /**
     * Filter, which Modeles to fetch.
     */
    where?: ModeleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modeles to fetch.
     */
    orderBy?: ModeleOrderByWithRelationInput | ModeleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modeles.
     */
    cursor?: ModeleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modeles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modeles.
     */
    skip?: number
    distinct?: ModeleScalarFieldEnum | ModeleScalarFieldEnum[]
  }

  /**
   * Modele create
   */
  export type ModeleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleInclude<ExtArgs> | null
    /**
     * The data needed to create a Modele.
     */
    data: XOR<ModeleCreateInput, ModeleUncheckedCreateInput>
  }

  /**
   * Modele createMany
   */
  export type ModeleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modeles.
     */
    data: ModeleCreateManyInput | ModeleCreateManyInput[]
  }

  /**
   * Modele createManyAndReturn
   */
  export type ModeleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * The data used to create many Modeles.
     */
    data: ModeleCreateManyInput | ModeleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Modele update
   */
  export type ModeleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleInclude<ExtArgs> | null
    /**
     * The data needed to update a Modele.
     */
    data: XOR<ModeleUpdateInput, ModeleUncheckedUpdateInput>
    /**
     * Choose, which Modele to update.
     */
    where: ModeleWhereUniqueInput
  }

  /**
   * Modele updateMany
   */
  export type ModeleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modeles.
     */
    data: XOR<ModeleUpdateManyMutationInput, ModeleUncheckedUpdateManyInput>
    /**
     * Filter which Modeles to update
     */
    where?: ModeleWhereInput
    /**
     * Limit how many Modeles to update.
     */
    limit?: number
  }

  /**
   * Modele updateManyAndReturn
   */
  export type ModeleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * The data used to update Modeles.
     */
    data: XOR<ModeleUpdateManyMutationInput, ModeleUncheckedUpdateManyInput>
    /**
     * Filter which Modeles to update
     */
    where?: ModeleWhereInput
    /**
     * Limit how many Modeles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Modele upsert
   */
  export type ModeleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleInclude<ExtArgs> | null
    /**
     * The filter to search for the Modele to update in case it exists.
     */
    where: ModeleWhereUniqueInput
    /**
     * In case the Modele found by the `where` argument doesn't exist, create a new Modele with this data.
     */
    create: XOR<ModeleCreateInput, ModeleUncheckedCreateInput>
    /**
     * In case the Modele was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModeleUpdateInput, ModeleUncheckedUpdateInput>
  }

  /**
   * Modele delete
   */
  export type ModeleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleInclude<ExtArgs> | null
    /**
     * Filter which Modele to delete.
     */
    where: ModeleWhereUniqueInput
  }

  /**
   * Modele deleteMany
   */
  export type ModeleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modeles to delete
     */
    where?: ModeleWhereInput
    /**
     * Limit how many Modeles to delete.
     */
    limit?: number
  }

  /**
   * Modele.modeleTypes
   */
  export type Modele$modeleTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeInclude<ExtArgs> | null
    where?: ModeleTypeWhereInput
    orderBy?: ModeleTypeOrderByWithRelationInput | ModeleTypeOrderByWithRelationInput[]
    cursor?: ModeleTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModeleTypeScalarFieldEnum | ModeleTypeScalarFieldEnum[]
  }

  /**
   * Modele without action
   */
  export type ModeleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modele
     */
    select?: ModeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modele
     */
    omit?: ModeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleInclude<ExtArgs> | null
  }


  /**
   * Model ModeleType
   */

  export type AggregateModeleType = {
    _count: ModeleTypeCountAggregateOutputType | null
    _avg: ModeleTypeAvgAggregateOutputType | null
    _sum: ModeleTypeSumAggregateOutputType | null
    _min: ModeleTypeMinAggregateOutputType | null
    _max: ModeleTypeMaxAggregateOutputType | null
  }

  export type ModeleTypeAvgAggregateOutputType = {
    id: number | null
    modeleId: number | null
    typeId: number | null
  }

  export type ModeleTypeSumAggregateOutputType = {
    id: number | null
    modeleId: number | null
    typeId: number | null
  }

  export type ModeleTypeMinAggregateOutputType = {
    id: number | null
    modeleId: number | null
    typeId: number | null
  }

  export type ModeleTypeMaxAggregateOutputType = {
    id: number | null
    modeleId: number | null
    typeId: number | null
  }

  export type ModeleTypeCountAggregateOutputType = {
    id: number
    modeleId: number
    typeId: number
    _all: number
  }


  export type ModeleTypeAvgAggregateInputType = {
    id?: true
    modeleId?: true
    typeId?: true
  }

  export type ModeleTypeSumAggregateInputType = {
    id?: true
    modeleId?: true
    typeId?: true
  }

  export type ModeleTypeMinAggregateInputType = {
    id?: true
    modeleId?: true
    typeId?: true
  }

  export type ModeleTypeMaxAggregateInputType = {
    id?: true
    modeleId?: true
    typeId?: true
  }

  export type ModeleTypeCountAggregateInputType = {
    id?: true
    modeleId?: true
    typeId?: true
    _all?: true
  }

  export type ModeleTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModeleType to aggregate.
     */
    where?: ModeleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeleTypes to fetch.
     */
    orderBy?: ModeleTypeOrderByWithRelationInput | ModeleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModeleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModeleTypes
    **/
    _count?: true | ModeleTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModeleTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModeleTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModeleTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModeleTypeMaxAggregateInputType
  }

  export type GetModeleTypeAggregateType<T extends ModeleTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateModeleType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModeleType[P]>
      : GetScalarType<T[P], AggregateModeleType[P]>
  }




  export type ModeleTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModeleTypeWhereInput
    orderBy?: ModeleTypeOrderByWithAggregationInput | ModeleTypeOrderByWithAggregationInput[]
    by: ModeleTypeScalarFieldEnum[] | ModeleTypeScalarFieldEnum
    having?: ModeleTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModeleTypeCountAggregateInputType | true
    _avg?: ModeleTypeAvgAggregateInputType
    _sum?: ModeleTypeSumAggregateInputType
    _min?: ModeleTypeMinAggregateInputType
    _max?: ModeleTypeMaxAggregateInputType
  }

  export type ModeleTypeGroupByOutputType = {
    id: number
    modeleId: number
    typeId: number
    _count: ModeleTypeCountAggregateOutputType | null
    _avg: ModeleTypeAvgAggregateOutputType | null
    _sum: ModeleTypeSumAggregateOutputType | null
    _min: ModeleTypeMinAggregateOutputType | null
    _max: ModeleTypeMaxAggregateOutputType | null
  }

  type GetModeleTypeGroupByPayload<T extends ModeleTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModeleTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModeleTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModeleTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ModeleTypeGroupByOutputType[P]>
        }
      >
    >


  export type ModeleTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modeleId?: boolean
    typeId?: boolean
    modele?: boolean | ModeleDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
    produits?: boolean | ModeleType$produitsArgs<ExtArgs>
    _count?: boolean | ModeleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modeleType"]>

  export type ModeleTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modeleId?: boolean
    typeId?: boolean
    modele?: boolean | ModeleDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modeleType"]>

  export type ModeleTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modeleId?: boolean
    typeId?: boolean
    modele?: boolean | ModeleDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modeleType"]>

  export type ModeleTypeSelectScalar = {
    id?: boolean
    modeleId?: boolean
    typeId?: boolean
  }

  export type ModeleTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modeleId" | "typeId", ExtArgs["result"]["modeleType"]>
  export type ModeleTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modele?: boolean | ModeleDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
    produits?: boolean | ModeleType$produitsArgs<ExtArgs>
    _count?: boolean | ModeleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModeleTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modele?: boolean | ModeleDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }
  export type ModeleTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modele?: boolean | ModeleDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }

  export type $ModeleTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModeleType"
    objects: {
      modele: Prisma.$ModelePayload<ExtArgs>
      type: Prisma.$TypePayload<ExtArgs>
      produits: Prisma.$ProduitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modeleId: number
      typeId: number
    }, ExtArgs["result"]["modeleType"]>
    composites: {}
  }

  type ModeleTypeGetPayload<S extends boolean | null | undefined | ModeleTypeDefaultArgs> = $Result.GetResult<Prisma.$ModeleTypePayload, S>

  type ModeleTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModeleTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModeleTypeCountAggregateInputType | true
    }

  export interface ModeleTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModeleType'], meta: { name: 'ModeleType' } }
    /**
     * Find zero or one ModeleType that matches the filter.
     * @param {ModeleTypeFindUniqueArgs} args - Arguments to find a ModeleType
     * @example
     * // Get one ModeleType
     * const modeleType = await prisma.modeleType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModeleTypeFindUniqueArgs>(args: SelectSubset<T, ModeleTypeFindUniqueArgs<ExtArgs>>): Prisma__ModeleTypeClient<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModeleType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModeleTypeFindUniqueOrThrowArgs} args - Arguments to find a ModeleType
     * @example
     * // Get one ModeleType
     * const modeleType = await prisma.modeleType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModeleTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ModeleTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModeleTypeClient<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModeleType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleTypeFindFirstArgs} args - Arguments to find a ModeleType
     * @example
     * // Get one ModeleType
     * const modeleType = await prisma.modeleType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModeleTypeFindFirstArgs>(args?: SelectSubset<T, ModeleTypeFindFirstArgs<ExtArgs>>): Prisma__ModeleTypeClient<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModeleType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleTypeFindFirstOrThrowArgs} args - Arguments to find a ModeleType
     * @example
     * // Get one ModeleType
     * const modeleType = await prisma.modeleType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModeleTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ModeleTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModeleTypeClient<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModeleTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModeleTypes
     * const modeleTypes = await prisma.modeleType.findMany()
     * 
     * // Get first 10 ModeleTypes
     * const modeleTypes = await prisma.modeleType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modeleTypeWithIdOnly = await prisma.modeleType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModeleTypeFindManyArgs>(args?: SelectSubset<T, ModeleTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModeleType.
     * @param {ModeleTypeCreateArgs} args - Arguments to create a ModeleType.
     * @example
     * // Create one ModeleType
     * const ModeleType = await prisma.modeleType.create({
     *   data: {
     *     // ... data to create a ModeleType
     *   }
     * })
     * 
     */
    create<T extends ModeleTypeCreateArgs>(args: SelectSubset<T, ModeleTypeCreateArgs<ExtArgs>>): Prisma__ModeleTypeClient<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModeleTypes.
     * @param {ModeleTypeCreateManyArgs} args - Arguments to create many ModeleTypes.
     * @example
     * // Create many ModeleTypes
     * const modeleType = await prisma.modeleType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModeleTypeCreateManyArgs>(args?: SelectSubset<T, ModeleTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModeleTypes and returns the data saved in the database.
     * @param {ModeleTypeCreateManyAndReturnArgs} args - Arguments to create many ModeleTypes.
     * @example
     * // Create many ModeleTypes
     * const modeleType = await prisma.modeleType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModeleTypes and only return the `id`
     * const modeleTypeWithIdOnly = await prisma.modeleType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModeleTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ModeleTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModeleType.
     * @param {ModeleTypeDeleteArgs} args - Arguments to delete one ModeleType.
     * @example
     * // Delete one ModeleType
     * const ModeleType = await prisma.modeleType.delete({
     *   where: {
     *     // ... filter to delete one ModeleType
     *   }
     * })
     * 
     */
    delete<T extends ModeleTypeDeleteArgs>(args: SelectSubset<T, ModeleTypeDeleteArgs<ExtArgs>>): Prisma__ModeleTypeClient<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModeleType.
     * @param {ModeleTypeUpdateArgs} args - Arguments to update one ModeleType.
     * @example
     * // Update one ModeleType
     * const modeleType = await prisma.modeleType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModeleTypeUpdateArgs>(args: SelectSubset<T, ModeleTypeUpdateArgs<ExtArgs>>): Prisma__ModeleTypeClient<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModeleTypes.
     * @param {ModeleTypeDeleteManyArgs} args - Arguments to filter ModeleTypes to delete.
     * @example
     * // Delete a few ModeleTypes
     * const { count } = await prisma.modeleType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModeleTypeDeleteManyArgs>(args?: SelectSubset<T, ModeleTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModeleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModeleTypes
     * const modeleType = await prisma.modeleType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModeleTypeUpdateManyArgs>(args: SelectSubset<T, ModeleTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModeleTypes and returns the data updated in the database.
     * @param {ModeleTypeUpdateManyAndReturnArgs} args - Arguments to update many ModeleTypes.
     * @example
     * // Update many ModeleTypes
     * const modeleType = await prisma.modeleType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModeleTypes and only return the `id`
     * const modeleTypeWithIdOnly = await prisma.modeleType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModeleTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ModeleTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModeleType.
     * @param {ModeleTypeUpsertArgs} args - Arguments to update or create a ModeleType.
     * @example
     * // Update or create a ModeleType
     * const modeleType = await prisma.modeleType.upsert({
     *   create: {
     *     // ... data to create a ModeleType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModeleType we want to update
     *   }
     * })
     */
    upsert<T extends ModeleTypeUpsertArgs>(args: SelectSubset<T, ModeleTypeUpsertArgs<ExtArgs>>): Prisma__ModeleTypeClient<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModeleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleTypeCountArgs} args - Arguments to filter ModeleTypes to count.
     * @example
     * // Count the number of ModeleTypes
     * const count = await prisma.modeleType.count({
     *   where: {
     *     // ... the filter for the ModeleTypes we want to count
     *   }
     * })
    **/
    count<T extends ModeleTypeCountArgs>(
      args?: Subset<T, ModeleTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModeleTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModeleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModeleTypeAggregateArgs>(args: Subset<T, ModeleTypeAggregateArgs>): Prisma.PrismaPromise<GetModeleTypeAggregateType<T>>

    /**
     * Group by ModeleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleTypeGroupByArgs} args - Group by arguments.
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
      T extends ModeleTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModeleTypeGroupByArgs['orderBy'] }
        : { orderBy?: ModeleTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModeleTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModeleTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModeleType model
   */
  readonly fields: ModeleTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModeleType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModeleTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modele<T extends ModeleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModeleDefaultArgs<ExtArgs>>): Prisma__ModeleClient<$Result.GetResult<Prisma.$ModelePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends TypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeDefaultArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produits<T extends ModeleType$produitsArgs<ExtArgs> = {}>(args?: Subset<T, ModeleType$produitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ModeleType model
   */
  interface ModeleTypeFieldRefs {
    readonly id: FieldRef<"ModeleType", 'Int'>
    readonly modeleId: FieldRef<"ModeleType", 'Int'>
    readonly typeId: FieldRef<"ModeleType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ModeleType findUnique
   */
  export type ModeleTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeInclude<ExtArgs> | null
    /**
     * Filter, which ModeleType to fetch.
     */
    where: ModeleTypeWhereUniqueInput
  }

  /**
   * ModeleType findUniqueOrThrow
   */
  export type ModeleTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeInclude<ExtArgs> | null
    /**
     * Filter, which ModeleType to fetch.
     */
    where: ModeleTypeWhereUniqueInput
  }

  /**
   * ModeleType findFirst
   */
  export type ModeleTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeInclude<ExtArgs> | null
    /**
     * Filter, which ModeleType to fetch.
     */
    where?: ModeleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeleTypes to fetch.
     */
    orderBy?: ModeleTypeOrderByWithRelationInput | ModeleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModeleTypes.
     */
    cursor?: ModeleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModeleTypes.
     */
    distinct?: ModeleTypeScalarFieldEnum | ModeleTypeScalarFieldEnum[]
  }

  /**
   * ModeleType findFirstOrThrow
   */
  export type ModeleTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeInclude<ExtArgs> | null
    /**
     * Filter, which ModeleType to fetch.
     */
    where?: ModeleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeleTypes to fetch.
     */
    orderBy?: ModeleTypeOrderByWithRelationInput | ModeleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModeleTypes.
     */
    cursor?: ModeleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModeleTypes.
     */
    distinct?: ModeleTypeScalarFieldEnum | ModeleTypeScalarFieldEnum[]
  }

  /**
   * ModeleType findMany
   */
  export type ModeleTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeInclude<ExtArgs> | null
    /**
     * Filter, which ModeleTypes to fetch.
     */
    where?: ModeleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeleTypes to fetch.
     */
    orderBy?: ModeleTypeOrderByWithRelationInput | ModeleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModeleTypes.
     */
    cursor?: ModeleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeleTypes.
     */
    skip?: number
    distinct?: ModeleTypeScalarFieldEnum | ModeleTypeScalarFieldEnum[]
  }

  /**
   * ModeleType create
   */
  export type ModeleTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ModeleType.
     */
    data: XOR<ModeleTypeCreateInput, ModeleTypeUncheckedCreateInput>
  }

  /**
   * ModeleType createMany
   */
  export type ModeleTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModeleTypes.
     */
    data: ModeleTypeCreateManyInput | ModeleTypeCreateManyInput[]
  }

  /**
   * ModeleType createManyAndReturn
   */
  export type ModeleTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * The data used to create many ModeleTypes.
     */
    data: ModeleTypeCreateManyInput | ModeleTypeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModeleType update
   */
  export type ModeleTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ModeleType.
     */
    data: XOR<ModeleTypeUpdateInput, ModeleTypeUncheckedUpdateInput>
    /**
     * Choose, which ModeleType to update.
     */
    where: ModeleTypeWhereUniqueInput
  }

  /**
   * ModeleType updateMany
   */
  export type ModeleTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModeleTypes.
     */
    data: XOR<ModeleTypeUpdateManyMutationInput, ModeleTypeUncheckedUpdateManyInput>
    /**
     * Filter which ModeleTypes to update
     */
    where?: ModeleTypeWhereInput
    /**
     * Limit how many ModeleTypes to update.
     */
    limit?: number
  }

  /**
   * ModeleType updateManyAndReturn
   */
  export type ModeleTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * The data used to update ModeleTypes.
     */
    data: XOR<ModeleTypeUpdateManyMutationInput, ModeleTypeUncheckedUpdateManyInput>
    /**
     * Filter which ModeleTypes to update
     */
    where?: ModeleTypeWhereInput
    /**
     * Limit how many ModeleTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModeleType upsert
   */
  export type ModeleTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ModeleType to update in case it exists.
     */
    where: ModeleTypeWhereUniqueInput
    /**
     * In case the ModeleType found by the `where` argument doesn't exist, create a new ModeleType with this data.
     */
    create: XOR<ModeleTypeCreateInput, ModeleTypeUncheckedCreateInput>
    /**
     * In case the ModeleType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModeleTypeUpdateInput, ModeleTypeUncheckedUpdateInput>
  }

  /**
   * ModeleType delete
   */
  export type ModeleTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeInclude<ExtArgs> | null
    /**
     * Filter which ModeleType to delete.
     */
    where: ModeleTypeWhereUniqueInput
  }

  /**
   * ModeleType deleteMany
   */
  export type ModeleTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModeleTypes to delete
     */
    where?: ModeleTypeWhereInput
    /**
     * Limit how many ModeleTypes to delete.
     */
    limit?: number
  }

  /**
   * ModeleType.produits
   */
  export type ModeleType$produitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    where?: ProduitWhereInput
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    cursor?: ProduitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * ModeleType without action
   */
  export type ModeleTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeInclude<ExtArgs> | null
  }


  /**
   * Model Produit
   */

  export type AggregateProduit = {
    _count: ProduitCountAggregateOutputType | null
    _avg: ProduitAvgAggregateOutputType | null
    _sum: ProduitSumAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  export type ProduitAvgAggregateOutputType = {
    id: number | null
    productPrice: Decimal | null
  }

  export type ProduitSumAggregateOutputType = {
    id: number | null
    productPrice: Decimal | null
  }

  export type ProduitMinAggregateOutputType = {
    id: number | null
    productId: string | null
    productName: string | null
    productImage: string | null
    productUrl: string | null
    productPrice: Decimal | null
    infosComplementaires: string | null
  }

  export type ProduitMaxAggregateOutputType = {
    id: number | null
    productId: string | null
    productName: string | null
    productImage: string | null
    productUrl: string | null
    productPrice: Decimal | null
    infosComplementaires: string | null
  }

  export type ProduitCountAggregateOutputType = {
    id: number
    productId: number
    productName: number
    productImage: number
    productUrl: number
    productPrice: number
    infosComplementaires: number
    _all: number
  }


  export type ProduitAvgAggregateInputType = {
    id?: true
    productPrice?: true
  }

  export type ProduitSumAggregateInputType = {
    id?: true
    productPrice?: true
  }

  export type ProduitMinAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    productImage?: true
    productUrl?: true
    productPrice?: true
    infosComplementaires?: true
  }

  export type ProduitMaxAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    productImage?: true
    productUrl?: true
    productPrice?: true
    infosComplementaires?: true
  }

  export type ProduitCountAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    productImage?: true
    productUrl?: true
    productPrice?: true
    infosComplementaires?: true
    _all?: true
  }

  export type ProduitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produit to aggregate.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produits
    **/
    _count?: true | ProduitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduitMaxAggregateInputType
  }

  export type GetProduitAggregateType<T extends ProduitAggregateArgs> = {
        [P in keyof T & keyof AggregateProduit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduit[P]>
      : GetScalarType<T[P], AggregateProduit[P]>
  }




  export type ProduitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduitWhereInput
    orderBy?: ProduitOrderByWithAggregationInput | ProduitOrderByWithAggregationInput[]
    by: ProduitScalarFieldEnum[] | ProduitScalarFieldEnum
    having?: ProduitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduitCountAggregateInputType | true
    _avg?: ProduitAvgAggregateInputType
    _sum?: ProduitSumAggregateInputType
    _min?: ProduitMinAggregateInputType
    _max?: ProduitMaxAggregateInputType
  }

  export type ProduitGroupByOutputType = {
    id: number
    productId: string
    productName: string
    productImage: string
    productUrl: string
    productPrice: Decimal
    infosComplementaires: string
    _count: ProduitCountAggregateOutputType | null
    _avg: ProduitAvgAggregateOutputType | null
    _sum: ProduitSumAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  type GetProduitGroupByPayload<T extends ProduitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduitGroupByOutputType[P]>
            : GetScalarType<T[P], ProduitGroupByOutputType[P]>
        }
      >
    >


  export type ProduitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    productImage?: boolean
    productUrl?: boolean
    productPrice?: boolean
    infosComplementaires?: boolean
    modeleTypes?: boolean | Produit$modeleTypesArgs<ExtArgs>
    _count?: boolean | ProduitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    productImage?: boolean
    productUrl?: boolean
    productPrice?: boolean
    infosComplementaires?: boolean
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    productImage?: boolean
    productUrl?: boolean
    productPrice?: boolean
    infosComplementaires?: boolean
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectScalar = {
    id?: boolean
    productId?: boolean
    productName?: boolean
    productImage?: boolean
    productUrl?: boolean
    productPrice?: boolean
    infosComplementaires?: boolean
  }

  export type ProduitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "productName" | "productImage" | "productUrl" | "productPrice" | "infosComplementaires", ExtArgs["result"]["produit"]>
  export type ProduitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modeleTypes?: boolean | Produit$modeleTypesArgs<ExtArgs>
    _count?: boolean | ProduitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProduitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProduitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProduitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produit"
    objects: {
      modeleTypes: Prisma.$ModeleTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: string
      productName: string
      productImage: string
      productUrl: string
      productPrice: Prisma.Decimal
      infosComplementaires: string
    }, ExtArgs["result"]["produit"]>
    composites: {}
  }

  type ProduitGetPayload<S extends boolean | null | undefined | ProduitDefaultArgs> = $Result.GetResult<Prisma.$ProduitPayload, S>

  type ProduitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProduitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProduitCountAggregateInputType | true
    }

  export interface ProduitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produit'], meta: { name: 'Produit' } }
    /**
     * Find zero or one Produit that matches the filter.
     * @param {ProduitFindUniqueArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProduitFindUniqueArgs>(args: SelectSubset<T, ProduitFindUniqueArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProduitFindUniqueOrThrowArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProduitFindUniqueOrThrowArgs>(args: SelectSubset<T, ProduitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindFirstArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProduitFindFirstArgs>(args?: SelectSubset<T, ProduitFindFirstArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindFirstOrThrowArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProduitFindFirstOrThrowArgs>(args?: SelectSubset<T, ProduitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produits
     * const produits = await prisma.produit.findMany()
     * 
     * // Get first 10 Produits
     * const produits = await prisma.produit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produitWithIdOnly = await prisma.produit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProduitFindManyArgs>(args?: SelectSubset<T, ProduitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produit.
     * @param {ProduitCreateArgs} args - Arguments to create a Produit.
     * @example
     * // Create one Produit
     * const Produit = await prisma.produit.create({
     *   data: {
     *     // ... data to create a Produit
     *   }
     * })
     * 
     */
    create<T extends ProduitCreateArgs>(args: SelectSubset<T, ProduitCreateArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produits.
     * @param {ProduitCreateManyArgs} args - Arguments to create many Produits.
     * @example
     * // Create many Produits
     * const produit = await prisma.produit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProduitCreateManyArgs>(args?: SelectSubset<T, ProduitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produits and returns the data saved in the database.
     * @param {ProduitCreateManyAndReturnArgs} args - Arguments to create many Produits.
     * @example
     * // Create many Produits
     * const produit = await prisma.produit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produits and only return the `id`
     * const produitWithIdOnly = await prisma.produit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProduitCreateManyAndReturnArgs>(args?: SelectSubset<T, ProduitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produit.
     * @param {ProduitDeleteArgs} args - Arguments to delete one Produit.
     * @example
     * // Delete one Produit
     * const Produit = await prisma.produit.delete({
     *   where: {
     *     // ... filter to delete one Produit
     *   }
     * })
     * 
     */
    delete<T extends ProduitDeleteArgs>(args: SelectSubset<T, ProduitDeleteArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produit.
     * @param {ProduitUpdateArgs} args - Arguments to update one Produit.
     * @example
     * // Update one Produit
     * const produit = await prisma.produit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProduitUpdateArgs>(args: SelectSubset<T, ProduitUpdateArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produits.
     * @param {ProduitDeleteManyArgs} args - Arguments to filter Produits to delete.
     * @example
     * // Delete a few Produits
     * const { count } = await prisma.produit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProduitDeleteManyArgs>(args?: SelectSubset<T, ProduitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produits
     * const produit = await prisma.produit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProduitUpdateManyArgs>(args: SelectSubset<T, ProduitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produits and returns the data updated in the database.
     * @param {ProduitUpdateManyAndReturnArgs} args - Arguments to update many Produits.
     * @example
     * // Update many Produits
     * const produit = await prisma.produit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produits and only return the `id`
     * const produitWithIdOnly = await prisma.produit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProduitUpdateManyAndReturnArgs>(args: SelectSubset<T, ProduitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produit.
     * @param {ProduitUpsertArgs} args - Arguments to update or create a Produit.
     * @example
     * // Update or create a Produit
     * const produit = await prisma.produit.upsert({
     *   create: {
     *     // ... data to create a Produit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produit we want to update
     *   }
     * })
     */
    upsert<T extends ProduitUpsertArgs>(args: SelectSubset<T, ProduitUpsertArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitCountArgs} args - Arguments to filter Produits to count.
     * @example
     * // Count the number of Produits
     * const count = await prisma.produit.count({
     *   where: {
     *     // ... the filter for the Produits we want to count
     *   }
     * })
    **/
    count<T extends ProduitCountArgs>(
      args?: Subset<T, ProduitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProduitAggregateArgs>(args: Subset<T, ProduitAggregateArgs>): Prisma.PrismaPromise<GetProduitAggregateType<T>>

    /**
     * Group by Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitGroupByArgs} args - Group by arguments.
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
      T extends ProduitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProduitGroupByArgs['orderBy'] }
        : { orderBy?: ProduitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProduitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produit model
   */
  readonly fields: ProduitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProduitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modeleTypes<T extends Produit$modeleTypesArgs<ExtArgs> = {}>(args?: Subset<T, Produit$modeleTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeleTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produit model
   */
  interface ProduitFieldRefs {
    readonly id: FieldRef<"Produit", 'Int'>
    readonly productId: FieldRef<"Produit", 'String'>
    readonly productName: FieldRef<"Produit", 'String'>
    readonly productImage: FieldRef<"Produit", 'String'>
    readonly productUrl: FieldRef<"Produit", 'String'>
    readonly productPrice: FieldRef<"Produit", 'Decimal'>
    readonly infosComplementaires: FieldRef<"Produit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produit findUnique
   */
  export type ProduitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit findUniqueOrThrow
   */
  export type ProduitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit findFirst
   */
  export type ProduitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produits.
     */
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit findFirstOrThrow
   */
  export type ProduitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produits.
     */
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit findMany
   */
  export type ProduitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produits to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit create
   */
  export type ProduitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The data needed to create a Produit.
     */
    data: XOR<ProduitCreateInput, ProduitUncheckedCreateInput>
  }

  /**
   * Produit createMany
   */
  export type ProduitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produits.
     */
    data: ProduitCreateManyInput | ProduitCreateManyInput[]
  }

  /**
   * Produit createManyAndReturn
   */
  export type ProduitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * The data used to create many Produits.
     */
    data: ProduitCreateManyInput | ProduitCreateManyInput[]
  }

  /**
   * Produit update
   */
  export type ProduitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The data needed to update a Produit.
     */
    data: XOR<ProduitUpdateInput, ProduitUncheckedUpdateInput>
    /**
     * Choose, which Produit to update.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit updateMany
   */
  export type ProduitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produits.
     */
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyInput>
    /**
     * Filter which Produits to update
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to update.
     */
    limit?: number
  }

  /**
   * Produit updateManyAndReturn
   */
  export type ProduitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * The data used to update Produits.
     */
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyInput>
    /**
     * Filter which Produits to update
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to update.
     */
    limit?: number
  }

  /**
   * Produit upsert
   */
  export type ProduitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The filter to search for the Produit to update in case it exists.
     */
    where: ProduitWhereUniqueInput
    /**
     * In case the Produit found by the `where` argument doesn't exist, create a new Produit with this data.
     */
    create: XOR<ProduitCreateInput, ProduitUncheckedCreateInput>
    /**
     * In case the Produit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProduitUpdateInput, ProduitUncheckedUpdateInput>
  }

  /**
   * Produit delete
   */
  export type ProduitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter which Produit to delete.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit deleteMany
   */
  export type ProduitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produits to delete
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to delete.
     */
    limit?: number
  }

  /**
   * Produit.modeleTypes
   */
  export type Produit$modeleTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleType
     */
    select?: ModeleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeleType
     */
    omit?: ModeleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeleTypeInclude<ExtArgs> | null
    where?: ModeleTypeWhereInput
    orderBy?: ModeleTypeOrderByWithRelationInput | ModeleTypeOrderByWithRelationInput[]
    cursor?: ModeleTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModeleTypeScalarFieldEnum | ModeleTypeScalarFieldEnum[]
  }

  /**
   * Produit without action
   */
  export type ProduitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionScalarFieldEnum: {
    id: 'id',
    shop: 'shop',
    state: 'state',
    isOnline: 'isOnline',
    scope: 'scope',
    expires: 'expires',
    accessToken: 'accessToken',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    accountOwner: 'accountOwner',
    locale: 'locale',
    collaborator: 'collaborator',
    emailVerified: 'emailVerified'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const PageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    idShopify: 'idShopify',
    url: 'url'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const FamilleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FamilleScalarFieldEnum = (typeof FamilleScalarFieldEnum)[keyof typeof FamilleScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    help: 'help'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const MarqueScalarFieldEnum: {
    id: 'id',
    logo: 'logo',
    name: 'name'
  };

  export type MarqueScalarFieldEnum = (typeof MarqueScalarFieldEnum)[keyof typeof MarqueScalarFieldEnum]


  export const ModeleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    marqueId: 'marqueId',
    familleId: 'familleId'
  };

  export type ModeleScalarFieldEnum = (typeof ModeleScalarFieldEnum)[keyof typeof ModeleScalarFieldEnum]


  export const ModeleTypeScalarFieldEnum: {
    id: 'id',
    modeleId: 'modeleId',
    typeId: 'typeId'
  };

  export type ModeleTypeScalarFieldEnum = (typeof ModeleTypeScalarFieldEnum)[keyof typeof ModeleTypeScalarFieldEnum]


  export const ProduitScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    productName: 'productName',
    productImage: 'productImage',
    productUrl: 'productUrl',
    productPrice: 'productPrice',
    infosComplementaires: 'infosComplementaires'
  };

  export type ProduitScalarFieldEnum = (typeof ProduitScalarFieldEnum)[keyof typeof ProduitScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    shop?: StringFilter<"Session"> | string
    state?: StringFilter<"Session"> | string
    isOnline?: BoolFilter<"Session"> | boolean
    scope?: StringNullableFilter<"Session"> | string | null
    expires?: DateTimeNullableFilter<"Session"> | Date | string | null
    accessToken?: StringFilter<"Session"> | string
    userId?: BigIntNullableFilter<"Session"> | bigint | number | null
    firstName?: StringNullableFilter<"Session"> | string | null
    lastName?: StringNullableFilter<"Session"> | string | null
    email?: StringNullableFilter<"Session"> | string | null
    accountOwner?: BoolFilter<"Session"> | boolean
    locale?: StringNullableFilter<"Session"> | string | null
    collaborator?: BoolNullableFilter<"Session"> | boolean | null
    emailVerified?: BoolNullableFilter<"Session"> | boolean | null
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrderInput | SortOrder
    expires?: SortOrderInput | SortOrder
    accessToken?: SortOrder
    userId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    accountOwner?: SortOrder
    locale?: SortOrderInput | SortOrder
    collaborator?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    shop?: StringFilter<"Session"> | string
    state?: StringFilter<"Session"> | string
    isOnline?: BoolFilter<"Session"> | boolean
    scope?: StringNullableFilter<"Session"> | string | null
    expires?: DateTimeNullableFilter<"Session"> | Date | string | null
    accessToken?: StringFilter<"Session"> | string
    userId?: BigIntNullableFilter<"Session"> | bigint | number | null
    firstName?: StringNullableFilter<"Session"> | string | null
    lastName?: StringNullableFilter<"Session"> | string | null
    email?: StringNullableFilter<"Session"> | string | null
    accountOwner?: BoolFilter<"Session"> | boolean
    locale?: StringNullableFilter<"Session"> | string | null
    collaborator?: BoolNullableFilter<"Session"> | boolean | null
    emailVerified?: BoolNullableFilter<"Session"> | boolean | null
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrderInput | SortOrder
    expires?: SortOrderInput | SortOrder
    accessToken?: SortOrder
    userId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    accountOwner?: SortOrder
    locale?: SortOrderInput | SortOrder
    collaborator?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    shop?: StringWithAggregatesFilter<"Session"> | string
    state?: StringWithAggregatesFilter<"Session"> | string
    isOnline?: BoolWithAggregatesFilter<"Session"> | boolean
    scope?: StringNullableWithAggregatesFilter<"Session"> | string | null
    expires?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    accessToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: BigIntNullableWithAggregatesFilter<"Session"> | bigint | number | null
    firstName?: StringNullableWithAggregatesFilter<"Session"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Session"> | string | null
    email?: StringNullableWithAggregatesFilter<"Session"> | string | null
    accountOwner?: BoolWithAggregatesFilter<"Session"> | boolean
    locale?: StringNullableWithAggregatesFilter<"Session"> | string | null
    collaborator?: BoolNullableWithAggregatesFilter<"Session"> | boolean | null
    emailVerified?: BoolNullableWithAggregatesFilter<"Session"> | boolean | null
  }

  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: IntFilter<"Page"> | number
    name?: StringFilter<"Page"> | string
    idShopify?: StringFilter<"Page"> | string
    url?: StringFilter<"Page"> | string
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    idShopify?: SortOrder
    url?: SortOrder
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    idShopify?: StringFilter<"Page"> | string
    url?: StringFilter<"Page"> | string
  }, "id" | "name">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    idShopify?: SortOrder
    url?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _avg?: PageAvgOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
    _sum?: PageSumOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Page"> | number
    name?: StringWithAggregatesFilter<"Page"> | string
    idShopify?: StringWithAggregatesFilter<"Page"> | string
    url?: StringWithAggregatesFilter<"Page"> | string
  }

  export type FamilleWhereInput = {
    AND?: FamilleWhereInput | FamilleWhereInput[]
    OR?: FamilleWhereInput[]
    NOT?: FamilleWhereInput | FamilleWhereInput[]
    id?: IntFilter<"Famille"> | number
    name?: StringFilter<"Famille"> | string
    modeles?: ModeleListRelationFilter
    types?: TypeListRelationFilter
  }

  export type FamilleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    modeles?: ModeleOrderByRelationAggregateInput
    types?: TypeOrderByRelationAggregateInput
  }

  export type FamilleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FamilleWhereInput | FamilleWhereInput[]
    OR?: FamilleWhereInput[]
    NOT?: FamilleWhereInput | FamilleWhereInput[]
    modeles?: ModeleListRelationFilter
    types?: TypeListRelationFilter
  }, "id" | "name">

  export type FamilleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FamilleCountOrderByAggregateInput
    _avg?: FamilleAvgOrderByAggregateInput
    _max?: FamilleMaxOrderByAggregateInput
    _min?: FamilleMinOrderByAggregateInput
    _sum?: FamilleSumOrderByAggregateInput
  }

  export type FamilleScalarWhereWithAggregatesInput = {
    AND?: FamilleScalarWhereWithAggregatesInput | FamilleScalarWhereWithAggregatesInput[]
    OR?: FamilleScalarWhereWithAggregatesInput[]
    NOT?: FamilleScalarWhereWithAggregatesInput | FamilleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Famille"> | number
    name?: StringWithAggregatesFilter<"Famille"> | string
  }

  export type TypeWhereInput = {
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    id?: IntFilter<"Type"> | number
    name?: StringFilter<"Type"> | string
    help?: StringFilter<"Type"> | string
    familles?: FamilleListRelationFilter
    modeleTypes?: ModeleTypeListRelationFilter
  }

  export type TypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    help?: SortOrder
    familles?: FamilleOrderByRelationAggregateInput
    modeleTypes?: ModeleTypeOrderByRelationAggregateInput
  }

  export type TypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    help?: StringFilter<"Type"> | string
    familles?: FamilleListRelationFilter
    modeleTypes?: ModeleTypeListRelationFilter
  }, "id" | "name">

  export type TypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    help?: SortOrder
    _count?: TypeCountOrderByAggregateInput
    _avg?: TypeAvgOrderByAggregateInput
    _max?: TypeMaxOrderByAggregateInput
    _min?: TypeMinOrderByAggregateInput
    _sum?: TypeSumOrderByAggregateInput
  }

  export type TypeScalarWhereWithAggregatesInput = {
    AND?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    OR?: TypeScalarWhereWithAggregatesInput[]
    NOT?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Type"> | number
    name?: StringWithAggregatesFilter<"Type"> | string
    help?: StringWithAggregatesFilter<"Type"> | string
  }

  export type MarqueWhereInput = {
    AND?: MarqueWhereInput | MarqueWhereInput[]
    OR?: MarqueWhereInput[]
    NOT?: MarqueWhereInput | MarqueWhereInput[]
    id?: IntFilter<"Marque"> | number
    logo?: StringFilter<"Marque"> | string
    name?: StringFilter<"Marque"> | string
    modeles?: ModeleListRelationFilter
  }

  export type MarqueOrderByWithRelationInput = {
    id?: SortOrder
    logo?: SortOrder
    name?: SortOrder
    modeles?: ModeleOrderByRelationAggregateInput
  }

  export type MarqueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MarqueWhereInput | MarqueWhereInput[]
    OR?: MarqueWhereInput[]
    NOT?: MarqueWhereInput | MarqueWhereInput[]
    logo?: StringFilter<"Marque"> | string
    modeles?: ModeleListRelationFilter
  }, "id" | "name">

  export type MarqueOrderByWithAggregationInput = {
    id?: SortOrder
    logo?: SortOrder
    name?: SortOrder
    _count?: MarqueCountOrderByAggregateInput
    _avg?: MarqueAvgOrderByAggregateInput
    _max?: MarqueMaxOrderByAggregateInput
    _min?: MarqueMinOrderByAggregateInput
    _sum?: MarqueSumOrderByAggregateInput
  }

  export type MarqueScalarWhereWithAggregatesInput = {
    AND?: MarqueScalarWhereWithAggregatesInput | MarqueScalarWhereWithAggregatesInput[]
    OR?: MarqueScalarWhereWithAggregatesInput[]
    NOT?: MarqueScalarWhereWithAggregatesInput | MarqueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Marque"> | number
    logo?: StringWithAggregatesFilter<"Marque"> | string
    name?: StringWithAggregatesFilter<"Marque"> | string
  }

  export type ModeleWhereInput = {
    AND?: ModeleWhereInput | ModeleWhereInput[]
    OR?: ModeleWhereInput[]
    NOT?: ModeleWhereInput | ModeleWhereInput[]
    id?: IntFilter<"Modele"> | number
    name?: StringFilter<"Modele"> | string
    marqueId?: IntFilter<"Modele"> | number
    familleId?: IntFilter<"Modele"> | number
    marque?: XOR<MarqueScalarRelationFilter, MarqueWhereInput>
    famille?: XOR<FamilleScalarRelationFilter, FamilleWhereInput>
    modeleTypes?: ModeleTypeListRelationFilter
  }

  export type ModeleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    marqueId?: SortOrder
    familleId?: SortOrder
    marque?: MarqueOrderByWithRelationInput
    famille?: FamilleOrderByWithRelationInput
    modeleTypes?: ModeleTypeOrderByRelationAggregateInput
  }

  export type ModeleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_marqueId?: ModeleNameMarqueIdCompoundUniqueInput
    AND?: ModeleWhereInput | ModeleWhereInput[]
    OR?: ModeleWhereInput[]
    NOT?: ModeleWhereInput | ModeleWhereInput[]
    name?: StringFilter<"Modele"> | string
    marqueId?: IntFilter<"Modele"> | number
    familleId?: IntFilter<"Modele"> | number
    marque?: XOR<MarqueScalarRelationFilter, MarqueWhereInput>
    famille?: XOR<FamilleScalarRelationFilter, FamilleWhereInput>
    modeleTypes?: ModeleTypeListRelationFilter
  }, "id" | "name_marqueId">

  export type ModeleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    marqueId?: SortOrder
    familleId?: SortOrder
    _count?: ModeleCountOrderByAggregateInput
    _avg?: ModeleAvgOrderByAggregateInput
    _max?: ModeleMaxOrderByAggregateInput
    _min?: ModeleMinOrderByAggregateInput
    _sum?: ModeleSumOrderByAggregateInput
  }

  export type ModeleScalarWhereWithAggregatesInput = {
    AND?: ModeleScalarWhereWithAggregatesInput | ModeleScalarWhereWithAggregatesInput[]
    OR?: ModeleScalarWhereWithAggregatesInput[]
    NOT?: ModeleScalarWhereWithAggregatesInput | ModeleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Modele"> | number
    name?: StringWithAggregatesFilter<"Modele"> | string
    marqueId?: IntWithAggregatesFilter<"Modele"> | number
    familleId?: IntWithAggregatesFilter<"Modele"> | number
  }

  export type ModeleTypeWhereInput = {
    AND?: ModeleTypeWhereInput | ModeleTypeWhereInput[]
    OR?: ModeleTypeWhereInput[]
    NOT?: ModeleTypeWhereInput | ModeleTypeWhereInput[]
    id?: IntFilter<"ModeleType"> | number
    modeleId?: IntFilter<"ModeleType"> | number
    typeId?: IntFilter<"ModeleType"> | number
    modele?: XOR<ModeleScalarRelationFilter, ModeleWhereInput>
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
    produits?: ProduitListRelationFilter
  }

  export type ModeleTypeOrderByWithRelationInput = {
    id?: SortOrder
    modeleId?: SortOrder
    typeId?: SortOrder
    modele?: ModeleOrderByWithRelationInput
    type?: TypeOrderByWithRelationInput
    produits?: ProduitOrderByRelationAggregateInput
  }

  export type ModeleTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    modeleId_typeId?: ModeleTypeModeleIdTypeIdCompoundUniqueInput
    AND?: ModeleTypeWhereInput | ModeleTypeWhereInput[]
    OR?: ModeleTypeWhereInput[]
    NOT?: ModeleTypeWhereInput | ModeleTypeWhereInput[]
    modeleId?: IntFilter<"ModeleType"> | number
    typeId?: IntFilter<"ModeleType"> | number
    modele?: XOR<ModeleScalarRelationFilter, ModeleWhereInput>
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
    produits?: ProduitListRelationFilter
  }, "id" | "modeleId_typeId">

  export type ModeleTypeOrderByWithAggregationInput = {
    id?: SortOrder
    modeleId?: SortOrder
    typeId?: SortOrder
    _count?: ModeleTypeCountOrderByAggregateInput
    _avg?: ModeleTypeAvgOrderByAggregateInput
    _max?: ModeleTypeMaxOrderByAggregateInput
    _min?: ModeleTypeMinOrderByAggregateInput
    _sum?: ModeleTypeSumOrderByAggregateInput
  }

  export type ModeleTypeScalarWhereWithAggregatesInput = {
    AND?: ModeleTypeScalarWhereWithAggregatesInput | ModeleTypeScalarWhereWithAggregatesInput[]
    OR?: ModeleTypeScalarWhereWithAggregatesInput[]
    NOT?: ModeleTypeScalarWhereWithAggregatesInput | ModeleTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModeleType"> | number
    modeleId?: IntWithAggregatesFilter<"ModeleType"> | number
    typeId?: IntWithAggregatesFilter<"ModeleType"> | number
  }

  export type ProduitWhereInput = {
    AND?: ProduitWhereInput | ProduitWhereInput[]
    OR?: ProduitWhereInput[]
    NOT?: ProduitWhereInput | ProduitWhereInput[]
    id?: IntFilter<"Produit"> | number
    productId?: StringFilter<"Produit"> | string
    productName?: StringFilter<"Produit"> | string
    productImage?: StringFilter<"Produit"> | string
    productUrl?: StringFilter<"Produit"> | string
    productPrice?: DecimalFilter<"Produit"> | Decimal | DecimalJsLike | number | string
    infosComplementaires?: StringFilter<"Produit"> | string
    modeleTypes?: ModeleTypeListRelationFilter
  }

  export type ProduitOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    productUrl?: SortOrder
    productPrice?: SortOrder
    infosComplementaires?: SortOrder
    modeleTypes?: ModeleTypeOrderByRelationAggregateInput
  }

  export type ProduitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId?: string
    AND?: ProduitWhereInput | ProduitWhereInput[]
    OR?: ProduitWhereInput[]
    NOT?: ProduitWhereInput | ProduitWhereInput[]
    productName?: StringFilter<"Produit"> | string
    productImage?: StringFilter<"Produit"> | string
    productUrl?: StringFilter<"Produit"> | string
    productPrice?: DecimalFilter<"Produit"> | Decimal | DecimalJsLike | number | string
    infosComplementaires?: StringFilter<"Produit"> | string
    modeleTypes?: ModeleTypeListRelationFilter
  }, "id" | "productId">

  export type ProduitOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    productUrl?: SortOrder
    productPrice?: SortOrder
    infosComplementaires?: SortOrder
    _count?: ProduitCountOrderByAggregateInput
    _avg?: ProduitAvgOrderByAggregateInput
    _max?: ProduitMaxOrderByAggregateInput
    _min?: ProduitMinOrderByAggregateInput
    _sum?: ProduitSumOrderByAggregateInput
  }

  export type ProduitScalarWhereWithAggregatesInput = {
    AND?: ProduitScalarWhereWithAggregatesInput | ProduitScalarWhereWithAggregatesInput[]
    OR?: ProduitScalarWhereWithAggregatesInput[]
    NOT?: ProduitScalarWhereWithAggregatesInput | ProduitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produit"> | number
    productId?: StringWithAggregatesFilter<"Produit"> | string
    productName?: StringWithAggregatesFilter<"Produit"> | string
    productImage?: StringWithAggregatesFilter<"Produit"> | string
    productUrl?: StringWithAggregatesFilter<"Produit"> | string
    productPrice?: DecimalWithAggregatesFilter<"Produit"> | Decimal | DecimalJsLike | number | string
    infosComplementaires?: StringWithAggregatesFilter<"Produit"> | string
  }

  export type SessionCreateInput = {
    id: string
    shop: string
    state: string
    isOnline?: boolean
    scope?: string | null
    expires?: Date | string | null
    accessToken: string
    userId?: bigint | number | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    accountOwner?: boolean
    locale?: string | null
    collaborator?: boolean | null
    emailVerified?: boolean | null
  }

  export type SessionUncheckedCreateInput = {
    id: string
    shop: string
    state: string
    isOnline?: boolean
    scope?: string | null
    expires?: Date | string | null
    accessToken: string
    userId?: bigint | number | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    accountOwner?: boolean
    locale?: string | null
    collaborator?: boolean | null
    emailVerified?: boolean | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountOwner?: BoolFieldUpdateOperationsInput | boolean
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    collaborator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountOwner?: BoolFieldUpdateOperationsInput | boolean
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    collaborator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionCreateManyInput = {
    id: string
    shop: string
    state: string
    isOnline?: boolean
    scope?: string | null
    expires?: Date | string | null
    accessToken: string
    userId?: bigint | number | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    accountOwner?: boolean
    locale?: string | null
    collaborator?: boolean | null
    emailVerified?: boolean | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountOwner?: BoolFieldUpdateOperationsInput | boolean
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    collaborator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountOwner?: BoolFieldUpdateOperationsInput | boolean
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    collaborator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PageCreateInput = {
    name: string
    idShopify: string
    url: string
  }

  export type PageUncheckedCreateInput = {
    id?: number
    name: string
    idShopify: string
    url: string
  }

  export type PageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    idShopify?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    idShopify?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PageCreateManyInput = {
    id?: number
    name: string
    idShopify: string
    url: string
  }

  export type PageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    idShopify?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    idShopify?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FamilleCreateInput = {
    name: string
    modeles?: ModeleCreateNestedManyWithoutFamilleInput
    types?: TypeCreateNestedManyWithoutFamillesInput
  }

  export type FamilleUncheckedCreateInput = {
    id?: number
    name: string
    modeles?: ModeleUncheckedCreateNestedManyWithoutFamilleInput
    types?: TypeUncheckedCreateNestedManyWithoutFamillesInput
  }

  export type FamilleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    modeles?: ModeleUpdateManyWithoutFamilleNestedInput
    types?: TypeUpdateManyWithoutFamillesNestedInput
  }

  export type FamilleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    modeles?: ModeleUncheckedUpdateManyWithoutFamilleNestedInput
    types?: TypeUncheckedUpdateManyWithoutFamillesNestedInput
  }

  export type FamilleCreateManyInput = {
    id?: number
    name: string
  }

  export type FamilleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FamilleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TypeCreateInput = {
    name: string
    help: string
    familles?: FamilleCreateNestedManyWithoutTypesInput
    modeleTypes?: ModeleTypeCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateInput = {
    id?: number
    name: string
    help: string
    familles?: FamilleUncheckedCreateNestedManyWithoutTypesInput
    modeleTypes?: ModeleTypeUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    help?: StringFieldUpdateOperationsInput | string
    familles?: FamilleUpdateManyWithoutTypesNestedInput
    modeleTypes?: ModeleTypeUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    help?: StringFieldUpdateOperationsInput | string
    familles?: FamilleUncheckedUpdateManyWithoutTypesNestedInput
    modeleTypes?: ModeleTypeUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeCreateManyInput = {
    id?: number
    name: string
    help: string
  }

  export type TypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    help?: StringFieldUpdateOperationsInput | string
  }

  export type TypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    help?: StringFieldUpdateOperationsInput | string
  }

  export type MarqueCreateInput = {
    logo?: string
    name: string
    modeles?: ModeleCreateNestedManyWithoutMarqueInput
  }

  export type MarqueUncheckedCreateInput = {
    id?: number
    logo?: string
    name: string
    modeles?: ModeleUncheckedCreateNestedManyWithoutMarqueInput
  }

  export type MarqueUpdateInput = {
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modeles?: ModeleUpdateManyWithoutMarqueNestedInput
  }

  export type MarqueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modeles?: ModeleUncheckedUpdateManyWithoutMarqueNestedInput
  }

  export type MarqueCreateManyInput = {
    id?: number
    logo?: string
    name: string
  }

  export type MarqueUpdateManyMutationInput = {
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MarqueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModeleCreateInput = {
    name: string
    marque: MarqueCreateNestedOneWithoutModelesInput
    famille: FamilleCreateNestedOneWithoutModelesInput
    modeleTypes?: ModeleTypeCreateNestedManyWithoutModeleInput
  }

  export type ModeleUncheckedCreateInput = {
    id?: number
    name: string
    marqueId: number
    familleId: number
    modeleTypes?: ModeleTypeUncheckedCreateNestedManyWithoutModeleInput
  }

  export type ModeleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    marque?: MarqueUpdateOneRequiredWithoutModelesNestedInput
    famille?: FamilleUpdateOneRequiredWithoutModelesNestedInput
    modeleTypes?: ModeleTypeUpdateManyWithoutModeleNestedInput
  }

  export type ModeleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    marqueId?: IntFieldUpdateOperationsInput | number
    familleId?: IntFieldUpdateOperationsInput | number
    modeleTypes?: ModeleTypeUncheckedUpdateManyWithoutModeleNestedInput
  }

  export type ModeleCreateManyInput = {
    id?: number
    name: string
    marqueId: number
    familleId: number
  }

  export type ModeleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModeleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    marqueId?: IntFieldUpdateOperationsInput | number
    familleId?: IntFieldUpdateOperationsInput | number
  }

  export type ModeleTypeCreateInput = {
    modele: ModeleCreateNestedOneWithoutModeleTypesInput
    type: TypeCreateNestedOneWithoutModeleTypesInput
    produits?: ProduitCreateNestedManyWithoutModeleTypesInput
  }

  export type ModeleTypeUncheckedCreateInput = {
    id?: number
    modeleId: number
    typeId: number
    produits?: ProduitUncheckedCreateNestedManyWithoutModeleTypesInput
  }

  export type ModeleTypeUpdateInput = {
    modele?: ModeleUpdateOneRequiredWithoutModeleTypesNestedInput
    type?: TypeUpdateOneRequiredWithoutModeleTypesNestedInput
    produits?: ProduitUpdateManyWithoutModeleTypesNestedInput
  }

  export type ModeleTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modeleId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    produits?: ProduitUncheckedUpdateManyWithoutModeleTypesNestedInput
  }

  export type ModeleTypeCreateManyInput = {
    id?: number
    modeleId: number
    typeId: number
  }

  export type ModeleTypeUpdateManyMutationInput = {

  }

  export type ModeleTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modeleId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduitCreateInput = {
    productId: string
    productName: string
    productImage: string
    productUrl: string
    productPrice?: Decimal | DecimalJsLike | number | string
    infosComplementaires?: string
    modeleTypes?: ModeleTypeCreateNestedManyWithoutProduitsInput
  }

  export type ProduitUncheckedCreateInput = {
    id?: number
    productId: string
    productName: string
    productImage: string
    productUrl: string
    productPrice?: Decimal | DecimalJsLike | number | string
    infosComplementaires?: string
    modeleTypes?: ModeleTypeUncheckedCreateNestedManyWithoutProduitsInput
  }

  export type ProduitUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    productUrl?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    infosComplementaires?: StringFieldUpdateOperationsInput | string
    modeleTypes?: ModeleTypeUpdateManyWithoutProduitsNestedInput
  }

  export type ProduitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    productUrl?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    infosComplementaires?: StringFieldUpdateOperationsInput | string
    modeleTypes?: ModeleTypeUncheckedUpdateManyWithoutProduitsNestedInput
  }

  export type ProduitCreateManyInput = {
    id?: number
    productId: string
    productName: string
    productImage: string
    productUrl: string
    productPrice?: Decimal | DecimalJsLike | number | string
    infosComplementaires?: string
  }

  export type ProduitUpdateManyMutationInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    productUrl?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    infosComplementaires?: StringFieldUpdateOperationsInput | string
  }

  export type ProduitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    productUrl?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    infosComplementaires?: StringFieldUpdateOperationsInput | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrder
    expires?: SortOrder
    accessToken?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    accountOwner?: SortOrder
    locale?: SortOrder
    collaborator?: SortOrder
    emailVerified?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrder
    expires?: SortOrder
    accessToken?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    accountOwner?: SortOrder
    locale?: SortOrder
    collaborator?: SortOrder
    emailVerified?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrder
    expires?: SortOrder
    accessToken?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    accountOwner?: SortOrder
    locale?: SortOrder
    collaborator?: SortOrder
    emailVerified?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    userId?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    idShopify?: SortOrder
    url?: SortOrder
  }

  export type PageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    idShopify?: SortOrder
    url?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    idShopify?: SortOrder
    url?: SortOrder
  }

  export type PageSumOrderByAggregateInput = {
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

  export type ModeleListRelationFilter = {
    every?: ModeleWhereInput
    some?: ModeleWhereInput
    none?: ModeleWhereInput
  }

  export type TypeListRelationFilter = {
    every?: TypeWhereInput
    some?: TypeWhereInput
    none?: TypeWhereInput
  }

  export type ModeleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FamilleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FamilleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FamilleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FamilleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FamilleListRelationFilter = {
    every?: FamilleWhereInput
    some?: FamilleWhereInput
    none?: FamilleWhereInput
  }

  export type ModeleTypeListRelationFilter = {
    every?: ModeleTypeWhereInput
    some?: ModeleTypeWhereInput
    none?: ModeleTypeWhereInput
  }

  export type FamilleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModeleTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    help?: SortOrder
  }

  export type TypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    help?: SortOrder
  }

  export type TypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    help?: SortOrder
  }

  export type TypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MarqueCountOrderByAggregateInput = {
    id?: SortOrder
    logo?: SortOrder
    name?: SortOrder
  }

  export type MarqueAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MarqueMaxOrderByAggregateInput = {
    id?: SortOrder
    logo?: SortOrder
    name?: SortOrder
  }

  export type MarqueMinOrderByAggregateInput = {
    id?: SortOrder
    logo?: SortOrder
    name?: SortOrder
  }

  export type MarqueSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MarqueScalarRelationFilter = {
    is?: MarqueWhereInput
    isNot?: MarqueWhereInput
  }

  export type FamilleScalarRelationFilter = {
    is?: FamilleWhereInput
    isNot?: FamilleWhereInput
  }

  export type ModeleNameMarqueIdCompoundUniqueInput = {
    name: string
    marqueId: number
  }

  export type ModeleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    marqueId?: SortOrder
    familleId?: SortOrder
  }

  export type ModeleAvgOrderByAggregateInput = {
    id?: SortOrder
    marqueId?: SortOrder
    familleId?: SortOrder
  }

  export type ModeleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    marqueId?: SortOrder
    familleId?: SortOrder
  }

  export type ModeleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    marqueId?: SortOrder
    familleId?: SortOrder
  }

  export type ModeleSumOrderByAggregateInput = {
    id?: SortOrder
    marqueId?: SortOrder
    familleId?: SortOrder
  }

  export type ModeleScalarRelationFilter = {
    is?: ModeleWhereInput
    isNot?: ModeleWhereInput
  }

  export type TypeScalarRelationFilter = {
    is?: TypeWhereInput
    isNot?: TypeWhereInput
  }

  export type ProduitListRelationFilter = {
    every?: ProduitWhereInput
    some?: ProduitWhereInput
    none?: ProduitWhereInput
  }

  export type ProduitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModeleTypeModeleIdTypeIdCompoundUniqueInput = {
    modeleId: number
    typeId: number
  }

  export type ModeleTypeCountOrderByAggregateInput = {
    id?: SortOrder
    modeleId?: SortOrder
    typeId?: SortOrder
  }

  export type ModeleTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    modeleId?: SortOrder
    typeId?: SortOrder
  }

  export type ModeleTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    modeleId?: SortOrder
    typeId?: SortOrder
  }

  export type ModeleTypeMinOrderByAggregateInput = {
    id?: SortOrder
    modeleId?: SortOrder
    typeId?: SortOrder
  }

  export type ModeleTypeSumOrderByAggregateInput = {
    id?: SortOrder
    modeleId?: SortOrder
    typeId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProduitCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    productUrl?: SortOrder
    productPrice?: SortOrder
    infosComplementaires?: SortOrder
  }

  export type ProduitAvgOrderByAggregateInput = {
    id?: SortOrder
    productPrice?: SortOrder
  }

  export type ProduitMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    productUrl?: SortOrder
    productPrice?: SortOrder
    infosComplementaires?: SortOrder
  }

  export type ProduitMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    productUrl?: SortOrder
    productPrice?: SortOrder
    infosComplementaires?: SortOrder
  }

  export type ProduitSumOrderByAggregateInput = {
    id?: SortOrder
    productPrice?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ModeleCreateNestedManyWithoutFamilleInput = {
    create?: XOR<ModeleCreateWithoutFamilleInput, ModeleUncheckedCreateWithoutFamilleInput> | ModeleCreateWithoutFamilleInput[] | ModeleUncheckedCreateWithoutFamilleInput[]
    connectOrCreate?: ModeleCreateOrConnectWithoutFamilleInput | ModeleCreateOrConnectWithoutFamilleInput[]
    createMany?: ModeleCreateManyFamilleInputEnvelope
    connect?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
  }

  export type TypeCreateNestedManyWithoutFamillesInput = {
    create?: XOR<TypeCreateWithoutFamillesInput, TypeUncheckedCreateWithoutFamillesInput> | TypeCreateWithoutFamillesInput[] | TypeUncheckedCreateWithoutFamillesInput[]
    connectOrCreate?: TypeCreateOrConnectWithoutFamillesInput | TypeCreateOrConnectWithoutFamillesInput[]
    connect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
  }

  export type ModeleUncheckedCreateNestedManyWithoutFamilleInput = {
    create?: XOR<ModeleCreateWithoutFamilleInput, ModeleUncheckedCreateWithoutFamilleInput> | ModeleCreateWithoutFamilleInput[] | ModeleUncheckedCreateWithoutFamilleInput[]
    connectOrCreate?: ModeleCreateOrConnectWithoutFamilleInput | ModeleCreateOrConnectWithoutFamilleInput[]
    createMany?: ModeleCreateManyFamilleInputEnvelope
    connect?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
  }

  export type TypeUncheckedCreateNestedManyWithoutFamillesInput = {
    create?: XOR<TypeCreateWithoutFamillesInput, TypeUncheckedCreateWithoutFamillesInput> | TypeCreateWithoutFamillesInput[] | TypeUncheckedCreateWithoutFamillesInput[]
    connectOrCreate?: TypeCreateOrConnectWithoutFamillesInput | TypeCreateOrConnectWithoutFamillesInput[]
    connect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
  }

  export type ModeleUpdateManyWithoutFamilleNestedInput = {
    create?: XOR<ModeleCreateWithoutFamilleInput, ModeleUncheckedCreateWithoutFamilleInput> | ModeleCreateWithoutFamilleInput[] | ModeleUncheckedCreateWithoutFamilleInput[]
    connectOrCreate?: ModeleCreateOrConnectWithoutFamilleInput | ModeleCreateOrConnectWithoutFamilleInput[]
    upsert?: ModeleUpsertWithWhereUniqueWithoutFamilleInput | ModeleUpsertWithWhereUniqueWithoutFamilleInput[]
    createMany?: ModeleCreateManyFamilleInputEnvelope
    set?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    disconnect?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    delete?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    connect?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    update?: ModeleUpdateWithWhereUniqueWithoutFamilleInput | ModeleUpdateWithWhereUniqueWithoutFamilleInput[]
    updateMany?: ModeleUpdateManyWithWhereWithoutFamilleInput | ModeleUpdateManyWithWhereWithoutFamilleInput[]
    deleteMany?: ModeleScalarWhereInput | ModeleScalarWhereInput[]
  }

  export type TypeUpdateManyWithoutFamillesNestedInput = {
    create?: XOR<TypeCreateWithoutFamillesInput, TypeUncheckedCreateWithoutFamillesInput> | TypeCreateWithoutFamillesInput[] | TypeUncheckedCreateWithoutFamillesInput[]
    connectOrCreate?: TypeCreateOrConnectWithoutFamillesInput | TypeCreateOrConnectWithoutFamillesInput[]
    upsert?: TypeUpsertWithWhereUniqueWithoutFamillesInput | TypeUpsertWithWhereUniqueWithoutFamillesInput[]
    set?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    disconnect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    delete?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    connect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    update?: TypeUpdateWithWhereUniqueWithoutFamillesInput | TypeUpdateWithWhereUniqueWithoutFamillesInput[]
    updateMany?: TypeUpdateManyWithWhereWithoutFamillesInput | TypeUpdateManyWithWhereWithoutFamillesInput[]
    deleteMany?: TypeScalarWhereInput | TypeScalarWhereInput[]
  }

  export type ModeleUncheckedUpdateManyWithoutFamilleNestedInput = {
    create?: XOR<ModeleCreateWithoutFamilleInput, ModeleUncheckedCreateWithoutFamilleInput> | ModeleCreateWithoutFamilleInput[] | ModeleUncheckedCreateWithoutFamilleInput[]
    connectOrCreate?: ModeleCreateOrConnectWithoutFamilleInput | ModeleCreateOrConnectWithoutFamilleInput[]
    upsert?: ModeleUpsertWithWhereUniqueWithoutFamilleInput | ModeleUpsertWithWhereUniqueWithoutFamilleInput[]
    createMany?: ModeleCreateManyFamilleInputEnvelope
    set?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    disconnect?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    delete?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    connect?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    update?: ModeleUpdateWithWhereUniqueWithoutFamilleInput | ModeleUpdateWithWhereUniqueWithoutFamilleInput[]
    updateMany?: ModeleUpdateManyWithWhereWithoutFamilleInput | ModeleUpdateManyWithWhereWithoutFamilleInput[]
    deleteMany?: ModeleScalarWhereInput | ModeleScalarWhereInput[]
  }

  export type TypeUncheckedUpdateManyWithoutFamillesNestedInput = {
    create?: XOR<TypeCreateWithoutFamillesInput, TypeUncheckedCreateWithoutFamillesInput> | TypeCreateWithoutFamillesInput[] | TypeUncheckedCreateWithoutFamillesInput[]
    connectOrCreate?: TypeCreateOrConnectWithoutFamillesInput | TypeCreateOrConnectWithoutFamillesInput[]
    upsert?: TypeUpsertWithWhereUniqueWithoutFamillesInput | TypeUpsertWithWhereUniqueWithoutFamillesInput[]
    set?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    disconnect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    delete?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    connect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    update?: TypeUpdateWithWhereUniqueWithoutFamillesInput | TypeUpdateWithWhereUniqueWithoutFamillesInput[]
    updateMany?: TypeUpdateManyWithWhereWithoutFamillesInput | TypeUpdateManyWithWhereWithoutFamillesInput[]
    deleteMany?: TypeScalarWhereInput | TypeScalarWhereInput[]
  }

  export type FamilleCreateNestedManyWithoutTypesInput = {
    create?: XOR<FamilleCreateWithoutTypesInput, FamilleUncheckedCreateWithoutTypesInput> | FamilleCreateWithoutTypesInput[] | FamilleUncheckedCreateWithoutTypesInput[]
    connectOrCreate?: FamilleCreateOrConnectWithoutTypesInput | FamilleCreateOrConnectWithoutTypesInput[]
    connect?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
  }

  export type ModeleTypeCreateNestedManyWithoutTypeInput = {
    create?: XOR<ModeleTypeCreateWithoutTypeInput, ModeleTypeUncheckedCreateWithoutTypeInput> | ModeleTypeCreateWithoutTypeInput[] | ModeleTypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ModeleTypeCreateOrConnectWithoutTypeInput | ModeleTypeCreateOrConnectWithoutTypeInput[]
    createMany?: ModeleTypeCreateManyTypeInputEnvelope
    connect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
  }

  export type FamilleUncheckedCreateNestedManyWithoutTypesInput = {
    create?: XOR<FamilleCreateWithoutTypesInput, FamilleUncheckedCreateWithoutTypesInput> | FamilleCreateWithoutTypesInput[] | FamilleUncheckedCreateWithoutTypesInput[]
    connectOrCreate?: FamilleCreateOrConnectWithoutTypesInput | FamilleCreateOrConnectWithoutTypesInput[]
    connect?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
  }

  export type ModeleTypeUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<ModeleTypeCreateWithoutTypeInput, ModeleTypeUncheckedCreateWithoutTypeInput> | ModeleTypeCreateWithoutTypeInput[] | ModeleTypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ModeleTypeCreateOrConnectWithoutTypeInput | ModeleTypeCreateOrConnectWithoutTypeInput[]
    createMany?: ModeleTypeCreateManyTypeInputEnvelope
    connect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
  }

  export type FamilleUpdateManyWithoutTypesNestedInput = {
    create?: XOR<FamilleCreateWithoutTypesInput, FamilleUncheckedCreateWithoutTypesInput> | FamilleCreateWithoutTypesInput[] | FamilleUncheckedCreateWithoutTypesInput[]
    connectOrCreate?: FamilleCreateOrConnectWithoutTypesInput | FamilleCreateOrConnectWithoutTypesInput[]
    upsert?: FamilleUpsertWithWhereUniqueWithoutTypesInput | FamilleUpsertWithWhereUniqueWithoutTypesInput[]
    set?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    disconnect?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    delete?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    connect?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    update?: FamilleUpdateWithWhereUniqueWithoutTypesInput | FamilleUpdateWithWhereUniqueWithoutTypesInput[]
    updateMany?: FamilleUpdateManyWithWhereWithoutTypesInput | FamilleUpdateManyWithWhereWithoutTypesInput[]
    deleteMany?: FamilleScalarWhereInput | FamilleScalarWhereInput[]
  }

  export type ModeleTypeUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ModeleTypeCreateWithoutTypeInput, ModeleTypeUncheckedCreateWithoutTypeInput> | ModeleTypeCreateWithoutTypeInput[] | ModeleTypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ModeleTypeCreateOrConnectWithoutTypeInput | ModeleTypeCreateOrConnectWithoutTypeInput[]
    upsert?: ModeleTypeUpsertWithWhereUniqueWithoutTypeInput | ModeleTypeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ModeleTypeCreateManyTypeInputEnvelope
    set?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    disconnect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    delete?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    connect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    update?: ModeleTypeUpdateWithWhereUniqueWithoutTypeInput | ModeleTypeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ModeleTypeUpdateManyWithWhereWithoutTypeInput | ModeleTypeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ModeleTypeScalarWhereInput | ModeleTypeScalarWhereInput[]
  }

  export type FamilleUncheckedUpdateManyWithoutTypesNestedInput = {
    create?: XOR<FamilleCreateWithoutTypesInput, FamilleUncheckedCreateWithoutTypesInput> | FamilleCreateWithoutTypesInput[] | FamilleUncheckedCreateWithoutTypesInput[]
    connectOrCreate?: FamilleCreateOrConnectWithoutTypesInput | FamilleCreateOrConnectWithoutTypesInput[]
    upsert?: FamilleUpsertWithWhereUniqueWithoutTypesInput | FamilleUpsertWithWhereUniqueWithoutTypesInput[]
    set?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    disconnect?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    delete?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    connect?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    update?: FamilleUpdateWithWhereUniqueWithoutTypesInput | FamilleUpdateWithWhereUniqueWithoutTypesInput[]
    updateMany?: FamilleUpdateManyWithWhereWithoutTypesInput | FamilleUpdateManyWithWhereWithoutTypesInput[]
    deleteMany?: FamilleScalarWhereInput | FamilleScalarWhereInput[]
  }

  export type ModeleTypeUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ModeleTypeCreateWithoutTypeInput, ModeleTypeUncheckedCreateWithoutTypeInput> | ModeleTypeCreateWithoutTypeInput[] | ModeleTypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ModeleTypeCreateOrConnectWithoutTypeInput | ModeleTypeCreateOrConnectWithoutTypeInput[]
    upsert?: ModeleTypeUpsertWithWhereUniqueWithoutTypeInput | ModeleTypeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ModeleTypeCreateManyTypeInputEnvelope
    set?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    disconnect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    delete?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    connect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    update?: ModeleTypeUpdateWithWhereUniqueWithoutTypeInput | ModeleTypeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ModeleTypeUpdateManyWithWhereWithoutTypeInput | ModeleTypeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ModeleTypeScalarWhereInput | ModeleTypeScalarWhereInput[]
  }

  export type ModeleCreateNestedManyWithoutMarqueInput = {
    create?: XOR<ModeleCreateWithoutMarqueInput, ModeleUncheckedCreateWithoutMarqueInput> | ModeleCreateWithoutMarqueInput[] | ModeleUncheckedCreateWithoutMarqueInput[]
    connectOrCreate?: ModeleCreateOrConnectWithoutMarqueInput | ModeleCreateOrConnectWithoutMarqueInput[]
    createMany?: ModeleCreateManyMarqueInputEnvelope
    connect?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
  }

  export type ModeleUncheckedCreateNestedManyWithoutMarqueInput = {
    create?: XOR<ModeleCreateWithoutMarqueInput, ModeleUncheckedCreateWithoutMarqueInput> | ModeleCreateWithoutMarqueInput[] | ModeleUncheckedCreateWithoutMarqueInput[]
    connectOrCreate?: ModeleCreateOrConnectWithoutMarqueInput | ModeleCreateOrConnectWithoutMarqueInput[]
    createMany?: ModeleCreateManyMarqueInputEnvelope
    connect?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
  }

  export type ModeleUpdateManyWithoutMarqueNestedInput = {
    create?: XOR<ModeleCreateWithoutMarqueInput, ModeleUncheckedCreateWithoutMarqueInput> | ModeleCreateWithoutMarqueInput[] | ModeleUncheckedCreateWithoutMarqueInput[]
    connectOrCreate?: ModeleCreateOrConnectWithoutMarqueInput | ModeleCreateOrConnectWithoutMarqueInput[]
    upsert?: ModeleUpsertWithWhereUniqueWithoutMarqueInput | ModeleUpsertWithWhereUniqueWithoutMarqueInput[]
    createMany?: ModeleCreateManyMarqueInputEnvelope
    set?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    disconnect?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    delete?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    connect?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    update?: ModeleUpdateWithWhereUniqueWithoutMarqueInput | ModeleUpdateWithWhereUniqueWithoutMarqueInput[]
    updateMany?: ModeleUpdateManyWithWhereWithoutMarqueInput | ModeleUpdateManyWithWhereWithoutMarqueInput[]
    deleteMany?: ModeleScalarWhereInput | ModeleScalarWhereInput[]
  }

  export type ModeleUncheckedUpdateManyWithoutMarqueNestedInput = {
    create?: XOR<ModeleCreateWithoutMarqueInput, ModeleUncheckedCreateWithoutMarqueInput> | ModeleCreateWithoutMarqueInput[] | ModeleUncheckedCreateWithoutMarqueInput[]
    connectOrCreate?: ModeleCreateOrConnectWithoutMarqueInput | ModeleCreateOrConnectWithoutMarqueInput[]
    upsert?: ModeleUpsertWithWhereUniqueWithoutMarqueInput | ModeleUpsertWithWhereUniqueWithoutMarqueInput[]
    createMany?: ModeleCreateManyMarqueInputEnvelope
    set?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    disconnect?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    delete?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    connect?: ModeleWhereUniqueInput | ModeleWhereUniqueInput[]
    update?: ModeleUpdateWithWhereUniqueWithoutMarqueInput | ModeleUpdateWithWhereUniqueWithoutMarqueInput[]
    updateMany?: ModeleUpdateManyWithWhereWithoutMarqueInput | ModeleUpdateManyWithWhereWithoutMarqueInput[]
    deleteMany?: ModeleScalarWhereInput | ModeleScalarWhereInput[]
  }

  export type MarqueCreateNestedOneWithoutModelesInput = {
    create?: XOR<MarqueCreateWithoutModelesInput, MarqueUncheckedCreateWithoutModelesInput>
    connectOrCreate?: MarqueCreateOrConnectWithoutModelesInput
    connect?: MarqueWhereUniqueInput
  }

  export type FamilleCreateNestedOneWithoutModelesInput = {
    create?: XOR<FamilleCreateWithoutModelesInput, FamilleUncheckedCreateWithoutModelesInput>
    connectOrCreate?: FamilleCreateOrConnectWithoutModelesInput
    connect?: FamilleWhereUniqueInput
  }

  export type ModeleTypeCreateNestedManyWithoutModeleInput = {
    create?: XOR<ModeleTypeCreateWithoutModeleInput, ModeleTypeUncheckedCreateWithoutModeleInput> | ModeleTypeCreateWithoutModeleInput[] | ModeleTypeUncheckedCreateWithoutModeleInput[]
    connectOrCreate?: ModeleTypeCreateOrConnectWithoutModeleInput | ModeleTypeCreateOrConnectWithoutModeleInput[]
    createMany?: ModeleTypeCreateManyModeleInputEnvelope
    connect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
  }

  export type ModeleTypeUncheckedCreateNestedManyWithoutModeleInput = {
    create?: XOR<ModeleTypeCreateWithoutModeleInput, ModeleTypeUncheckedCreateWithoutModeleInput> | ModeleTypeCreateWithoutModeleInput[] | ModeleTypeUncheckedCreateWithoutModeleInput[]
    connectOrCreate?: ModeleTypeCreateOrConnectWithoutModeleInput | ModeleTypeCreateOrConnectWithoutModeleInput[]
    createMany?: ModeleTypeCreateManyModeleInputEnvelope
    connect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
  }

  export type MarqueUpdateOneRequiredWithoutModelesNestedInput = {
    create?: XOR<MarqueCreateWithoutModelesInput, MarqueUncheckedCreateWithoutModelesInput>
    connectOrCreate?: MarqueCreateOrConnectWithoutModelesInput
    upsert?: MarqueUpsertWithoutModelesInput
    connect?: MarqueWhereUniqueInput
    update?: XOR<XOR<MarqueUpdateToOneWithWhereWithoutModelesInput, MarqueUpdateWithoutModelesInput>, MarqueUncheckedUpdateWithoutModelesInput>
  }

  export type FamilleUpdateOneRequiredWithoutModelesNestedInput = {
    create?: XOR<FamilleCreateWithoutModelesInput, FamilleUncheckedCreateWithoutModelesInput>
    connectOrCreate?: FamilleCreateOrConnectWithoutModelesInput
    upsert?: FamilleUpsertWithoutModelesInput
    connect?: FamilleWhereUniqueInput
    update?: XOR<XOR<FamilleUpdateToOneWithWhereWithoutModelesInput, FamilleUpdateWithoutModelesInput>, FamilleUncheckedUpdateWithoutModelesInput>
  }

  export type ModeleTypeUpdateManyWithoutModeleNestedInput = {
    create?: XOR<ModeleTypeCreateWithoutModeleInput, ModeleTypeUncheckedCreateWithoutModeleInput> | ModeleTypeCreateWithoutModeleInput[] | ModeleTypeUncheckedCreateWithoutModeleInput[]
    connectOrCreate?: ModeleTypeCreateOrConnectWithoutModeleInput | ModeleTypeCreateOrConnectWithoutModeleInput[]
    upsert?: ModeleTypeUpsertWithWhereUniqueWithoutModeleInput | ModeleTypeUpsertWithWhereUniqueWithoutModeleInput[]
    createMany?: ModeleTypeCreateManyModeleInputEnvelope
    set?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    disconnect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    delete?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    connect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    update?: ModeleTypeUpdateWithWhereUniqueWithoutModeleInput | ModeleTypeUpdateWithWhereUniqueWithoutModeleInput[]
    updateMany?: ModeleTypeUpdateManyWithWhereWithoutModeleInput | ModeleTypeUpdateManyWithWhereWithoutModeleInput[]
    deleteMany?: ModeleTypeScalarWhereInput | ModeleTypeScalarWhereInput[]
  }

  export type ModeleTypeUncheckedUpdateManyWithoutModeleNestedInput = {
    create?: XOR<ModeleTypeCreateWithoutModeleInput, ModeleTypeUncheckedCreateWithoutModeleInput> | ModeleTypeCreateWithoutModeleInput[] | ModeleTypeUncheckedCreateWithoutModeleInput[]
    connectOrCreate?: ModeleTypeCreateOrConnectWithoutModeleInput | ModeleTypeCreateOrConnectWithoutModeleInput[]
    upsert?: ModeleTypeUpsertWithWhereUniqueWithoutModeleInput | ModeleTypeUpsertWithWhereUniqueWithoutModeleInput[]
    createMany?: ModeleTypeCreateManyModeleInputEnvelope
    set?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    disconnect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    delete?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    connect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    update?: ModeleTypeUpdateWithWhereUniqueWithoutModeleInput | ModeleTypeUpdateWithWhereUniqueWithoutModeleInput[]
    updateMany?: ModeleTypeUpdateManyWithWhereWithoutModeleInput | ModeleTypeUpdateManyWithWhereWithoutModeleInput[]
    deleteMany?: ModeleTypeScalarWhereInput | ModeleTypeScalarWhereInput[]
  }

  export type ModeleCreateNestedOneWithoutModeleTypesInput = {
    create?: XOR<ModeleCreateWithoutModeleTypesInput, ModeleUncheckedCreateWithoutModeleTypesInput>
    connectOrCreate?: ModeleCreateOrConnectWithoutModeleTypesInput
    connect?: ModeleWhereUniqueInput
  }

  export type TypeCreateNestedOneWithoutModeleTypesInput = {
    create?: XOR<TypeCreateWithoutModeleTypesInput, TypeUncheckedCreateWithoutModeleTypesInput>
    connectOrCreate?: TypeCreateOrConnectWithoutModeleTypesInput
    connect?: TypeWhereUniqueInput
  }

  export type ProduitCreateNestedManyWithoutModeleTypesInput = {
    create?: XOR<ProduitCreateWithoutModeleTypesInput, ProduitUncheckedCreateWithoutModeleTypesInput> | ProduitCreateWithoutModeleTypesInput[] | ProduitUncheckedCreateWithoutModeleTypesInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutModeleTypesInput | ProduitCreateOrConnectWithoutModeleTypesInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type ProduitUncheckedCreateNestedManyWithoutModeleTypesInput = {
    create?: XOR<ProduitCreateWithoutModeleTypesInput, ProduitUncheckedCreateWithoutModeleTypesInput> | ProduitCreateWithoutModeleTypesInput[] | ProduitUncheckedCreateWithoutModeleTypesInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutModeleTypesInput | ProduitCreateOrConnectWithoutModeleTypesInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type ModeleUpdateOneRequiredWithoutModeleTypesNestedInput = {
    create?: XOR<ModeleCreateWithoutModeleTypesInput, ModeleUncheckedCreateWithoutModeleTypesInput>
    connectOrCreate?: ModeleCreateOrConnectWithoutModeleTypesInput
    upsert?: ModeleUpsertWithoutModeleTypesInput
    connect?: ModeleWhereUniqueInput
    update?: XOR<XOR<ModeleUpdateToOneWithWhereWithoutModeleTypesInput, ModeleUpdateWithoutModeleTypesInput>, ModeleUncheckedUpdateWithoutModeleTypesInput>
  }

  export type TypeUpdateOneRequiredWithoutModeleTypesNestedInput = {
    create?: XOR<TypeCreateWithoutModeleTypesInput, TypeUncheckedCreateWithoutModeleTypesInput>
    connectOrCreate?: TypeCreateOrConnectWithoutModeleTypesInput
    upsert?: TypeUpsertWithoutModeleTypesInput
    connect?: TypeWhereUniqueInput
    update?: XOR<XOR<TypeUpdateToOneWithWhereWithoutModeleTypesInput, TypeUpdateWithoutModeleTypesInput>, TypeUncheckedUpdateWithoutModeleTypesInput>
  }

  export type ProduitUpdateManyWithoutModeleTypesNestedInput = {
    create?: XOR<ProduitCreateWithoutModeleTypesInput, ProduitUncheckedCreateWithoutModeleTypesInput> | ProduitCreateWithoutModeleTypesInput[] | ProduitUncheckedCreateWithoutModeleTypesInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutModeleTypesInput | ProduitCreateOrConnectWithoutModeleTypesInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutModeleTypesInput | ProduitUpsertWithWhereUniqueWithoutModeleTypesInput[]
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutModeleTypesInput | ProduitUpdateWithWhereUniqueWithoutModeleTypesInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutModeleTypesInput | ProduitUpdateManyWithWhereWithoutModeleTypesInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type ProduitUncheckedUpdateManyWithoutModeleTypesNestedInput = {
    create?: XOR<ProduitCreateWithoutModeleTypesInput, ProduitUncheckedCreateWithoutModeleTypesInput> | ProduitCreateWithoutModeleTypesInput[] | ProduitUncheckedCreateWithoutModeleTypesInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutModeleTypesInput | ProduitCreateOrConnectWithoutModeleTypesInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutModeleTypesInput | ProduitUpsertWithWhereUniqueWithoutModeleTypesInput[]
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutModeleTypesInput | ProduitUpdateWithWhereUniqueWithoutModeleTypesInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutModeleTypesInput | ProduitUpdateManyWithWhereWithoutModeleTypesInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type ModeleTypeCreateNestedManyWithoutProduitsInput = {
    create?: XOR<ModeleTypeCreateWithoutProduitsInput, ModeleTypeUncheckedCreateWithoutProduitsInput> | ModeleTypeCreateWithoutProduitsInput[] | ModeleTypeUncheckedCreateWithoutProduitsInput[]
    connectOrCreate?: ModeleTypeCreateOrConnectWithoutProduitsInput | ModeleTypeCreateOrConnectWithoutProduitsInput[]
    connect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
  }

  export type ModeleTypeUncheckedCreateNestedManyWithoutProduitsInput = {
    create?: XOR<ModeleTypeCreateWithoutProduitsInput, ModeleTypeUncheckedCreateWithoutProduitsInput> | ModeleTypeCreateWithoutProduitsInput[] | ModeleTypeUncheckedCreateWithoutProduitsInput[]
    connectOrCreate?: ModeleTypeCreateOrConnectWithoutProduitsInput | ModeleTypeCreateOrConnectWithoutProduitsInput[]
    connect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ModeleTypeUpdateManyWithoutProduitsNestedInput = {
    create?: XOR<ModeleTypeCreateWithoutProduitsInput, ModeleTypeUncheckedCreateWithoutProduitsInput> | ModeleTypeCreateWithoutProduitsInput[] | ModeleTypeUncheckedCreateWithoutProduitsInput[]
    connectOrCreate?: ModeleTypeCreateOrConnectWithoutProduitsInput | ModeleTypeCreateOrConnectWithoutProduitsInput[]
    upsert?: ModeleTypeUpsertWithWhereUniqueWithoutProduitsInput | ModeleTypeUpsertWithWhereUniqueWithoutProduitsInput[]
    set?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    disconnect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    delete?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    connect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    update?: ModeleTypeUpdateWithWhereUniqueWithoutProduitsInput | ModeleTypeUpdateWithWhereUniqueWithoutProduitsInput[]
    updateMany?: ModeleTypeUpdateManyWithWhereWithoutProduitsInput | ModeleTypeUpdateManyWithWhereWithoutProduitsInput[]
    deleteMany?: ModeleTypeScalarWhereInput | ModeleTypeScalarWhereInput[]
  }

  export type ModeleTypeUncheckedUpdateManyWithoutProduitsNestedInput = {
    create?: XOR<ModeleTypeCreateWithoutProduitsInput, ModeleTypeUncheckedCreateWithoutProduitsInput> | ModeleTypeCreateWithoutProduitsInput[] | ModeleTypeUncheckedCreateWithoutProduitsInput[]
    connectOrCreate?: ModeleTypeCreateOrConnectWithoutProduitsInput | ModeleTypeCreateOrConnectWithoutProduitsInput[]
    upsert?: ModeleTypeUpsertWithWhereUniqueWithoutProduitsInput | ModeleTypeUpsertWithWhereUniqueWithoutProduitsInput[]
    set?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    disconnect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    delete?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    connect?: ModeleTypeWhereUniqueInput | ModeleTypeWhereUniqueInput[]
    update?: ModeleTypeUpdateWithWhereUniqueWithoutProduitsInput | ModeleTypeUpdateWithWhereUniqueWithoutProduitsInput[]
    updateMany?: ModeleTypeUpdateManyWithWhereWithoutProduitsInput | ModeleTypeUpdateManyWithWhereWithoutProduitsInput[]
    deleteMany?: ModeleTypeScalarWhereInput | ModeleTypeScalarWhereInput[]
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ModeleCreateWithoutFamilleInput = {
    name: string
    marque: MarqueCreateNestedOneWithoutModelesInput
    modeleTypes?: ModeleTypeCreateNestedManyWithoutModeleInput
  }

  export type ModeleUncheckedCreateWithoutFamilleInput = {
    id?: number
    name: string
    marqueId: number
    modeleTypes?: ModeleTypeUncheckedCreateNestedManyWithoutModeleInput
  }

  export type ModeleCreateOrConnectWithoutFamilleInput = {
    where: ModeleWhereUniqueInput
    create: XOR<ModeleCreateWithoutFamilleInput, ModeleUncheckedCreateWithoutFamilleInput>
  }

  export type ModeleCreateManyFamilleInputEnvelope = {
    data: ModeleCreateManyFamilleInput | ModeleCreateManyFamilleInput[]
  }

  export type TypeCreateWithoutFamillesInput = {
    name: string
    help: string
    modeleTypes?: ModeleTypeCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateWithoutFamillesInput = {
    id?: number
    name: string
    help: string
    modeleTypes?: ModeleTypeUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeCreateOrConnectWithoutFamillesInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutFamillesInput, TypeUncheckedCreateWithoutFamillesInput>
  }

  export type ModeleUpsertWithWhereUniqueWithoutFamilleInput = {
    where: ModeleWhereUniqueInput
    update: XOR<ModeleUpdateWithoutFamilleInput, ModeleUncheckedUpdateWithoutFamilleInput>
    create: XOR<ModeleCreateWithoutFamilleInput, ModeleUncheckedCreateWithoutFamilleInput>
  }

  export type ModeleUpdateWithWhereUniqueWithoutFamilleInput = {
    where: ModeleWhereUniqueInput
    data: XOR<ModeleUpdateWithoutFamilleInput, ModeleUncheckedUpdateWithoutFamilleInput>
  }

  export type ModeleUpdateManyWithWhereWithoutFamilleInput = {
    where: ModeleScalarWhereInput
    data: XOR<ModeleUpdateManyMutationInput, ModeleUncheckedUpdateManyWithoutFamilleInput>
  }

  export type ModeleScalarWhereInput = {
    AND?: ModeleScalarWhereInput | ModeleScalarWhereInput[]
    OR?: ModeleScalarWhereInput[]
    NOT?: ModeleScalarWhereInput | ModeleScalarWhereInput[]
    id?: IntFilter<"Modele"> | number
    name?: StringFilter<"Modele"> | string
    marqueId?: IntFilter<"Modele"> | number
    familleId?: IntFilter<"Modele"> | number
  }

  export type TypeUpsertWithWhereUniqueWithoutFamillesInput = {
    where: TypeWhereUniqueInput
    update: XOR<TypeUpdateWithoutFamillesInput, TypeUncheckedUpdateWithoutFamillesInput>
    create: XOR<TypeCreateWithoutFamillesInput, TypeUncheckedCreateWithoutFamillesInput>
  }

  export type TypeUpdateWithWhereUniqueWithoutFamillesInput = {
    where: TypeWhereUniqueInput
    data: XOR<TypeUpdateWithoutFamillesInput, TypeUncheckedUpdateWithoutFamillesInput>
  }

  export type TypeUpdateManyWithWhereWithoutFamillesInput = {
    where: TypeScalarWhereInput
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyWithoutFamillesInput>
  }

  export type TypeScalarWhereInput = {
    AND?: TypeScalarWhereInput | TypeScalarWhereInput[]
    OR?: TypeScalarWhereInput[]
    NOT?: TypeScalarWhereInput | TypeScalarWhereInput[]
    id?: IntFilter<"Type"> | number
    name?: StringFilter<"Type"> | string
    help?: StringFilter<"Type"> | string
  }

  export type FamilleCreateWithoutTypesInput = {
    name: string
    modeles?: ModeleCreateNestedManyWithoutFamilleInput
  }

  export type FamilleUncheckedCreateWithoutTypesInput = {
    id?: number
    name: string
    modeles?: ModeleUncheckedCreateNestedManyWithoutFamilleInput
  }

  export type FamilleCreateOrConnectWithoutTypesInput = {
    where: FamilleWhereUniqueInput
    create: XOR<FamilleCreateWithoutTypesInput, FamilleUncheckedCreateWithoutTypesInput>
  }

  export type ModeleTypeCreateWithoutTypeInput = {
    modele: ModeleCreateNestedOneWithoutModeleTypesInput
    produits?: ProduitCreateNestedManyWithoutModeleTypesInput
  }

  export type ModeleTypeUncheckedCreateWithoutTypeInput = {
    id?: number
    modeleId: number
    produits?: ProduitUncheckedCreateNestedManyWithoutModeleTypesInput
  }

  export type ModeleTypeCreateOrConnectWithoutTypeInput = {
    where: ModeleTypeWhereUniqueInput
    create: XOR<ModeleTypeCreateWithoutTypeInput, ModeleTypeUncheckedCreateWithoutTypeInput>
  }

  export type ModeleTypeCreateManyTypeInputEnvelope = {
    data: ModeleTypeCreateManyTypeInput | ModeleTypeCreateManyTypeInput[]
  }

  export type FamilleUpsertWithWhereUniqueWithoutTypesInput = {
    where: FamilleWhereUniqueInput
    update: XOR<FamilleUpdateWithoutTypesInput, FamilleUncheckedUpdateWithoutTypesInput>
    create: XOR<FamilleCreateWithoutTypesInput, FamilleUncheckedCreateWithoutTypesInput>
  }

  export type FamilleUpdateWithWhereUniqueWithoutTypesInput = {
    where: FamilleWhereUniqueInput
    data: XOR<FamilleUpdateWithoutTypesInput, FamilleUncheckedUpdateWithoutTypesInput>
  }

  export type FamilleUpdateManyWithWhereWithoutTypesInput = {
    where: FamilleScalarWhereInput
    data: XOR<FamilleUpdateManyMutationInput, FamilleUncheckedUpdateManyWithoutTypesInput>
  }

  export type FamilleScalarWhereInput = {
    AND?: FamilleScalarWhereInput | FamilleScalarWhereInput[]
    OR?: FamilleScalarWhereInput[]
    NOT?: FamilleScalarWhereInput | FamilleScalarWhereInput[]
    id?: IntFilter<"Famille"> | number
    name?: StringFilter<"Famille"> | string
  }

  export type ModeleTypeUpsertWithWhereUniqueWithoutTypeInput = {
    where: ModeleTypeWhereUniqueInput
    update: XOR<ModeleTypeUpdateWithoutTypeInput, ModeleTypeUncheckedUpdateWithoutTypeInput>
    create: XOR<ModeleTypeCreateWithoutTypeInput, ModeleTypeUncheckedCreateWithoutTypeInput>
  }

  export type ModeleTypeUpdateWithWhereUniqueWithoutTypeInput = {
    where: ModeleTypeWhereUniqueInput
    data: XOR<ModeleTypeUpdateWithoutTypeInput, ModeleTypeUncheckedUpdateWithoutTypeInput>
  }

  export type ModeleTypeUpdateManyWithWhereWithoutTypeInput = {
    where: ModeleTypeScalarWhereInput
    data: XOR<ModeleTypeUpdateManyMutationInput, ModeleTypeUncheckedUpdateManyWithoutTypeInput>
  }

  export type ModeleTypeScalarWhereInput = {
    AND?: ModeleTypeScalarWhereInput | ModeleTypeScalarWhereInput[]
    OR?: ModeleTypeScalarWhereInput[]
    NOT?: ModeleTypeScalarWhereInput | ModeleTypeScalarWhereInput[]
    id?: IntFilter<"ModeleType"> | number
    modeleId?: IntFilter<"ModeleType"> | number
    typeId?: IntFilter<"ModeleType"> | number
  }

  export type ModeleCreateWithoutMarqueInput = {
    name: string
    famille: FamilleCreateNestedOneWithoutModelesInput
    modeleTypes?: ModeleTypeCreateNestedManyWithoutModeleInput
  }

  export type ModeleUncheckedCreateWithoutMarqueInput = {
    id?: number
    name: string
    familleId: number
    modeleTypes?: ModeleTypeUncheckedCreateNestedManyWithoutModeleInput
  }

  export type ModeleCreateOrConnectWithoutMarqueInput = {
    where: ModeleWhereUniqueInput
    create: XOR<ModeleCreateWithoutMarqueInput, ModeleUncheckedCreateWithoutMarqueInput>
  }

  export type ModeleCreateManyMarqueInputEnvelope = {
    data: ModeleCreateManyMarqueInput | ModeleCreateManyMarqueInput[]
  }

  export type ModeleUpsertWithWhereUniqueWithoutMarqueInput = {
    where: ModeleWhereUniqueInput
    update: XOR<ModeleUpdateWithoutMarqueInput, ModeleUncheckedUpdateWithoutMarqueInput>
    create: XOR<ModeleCreateWithoutMarqueInput, ModeleUncheckedCreateWithoutMarqueInput>
  }

  export type ModeleUpdateWithWhereUniqueWithoutMarqueInput = {
    where: ModeleWhereUniqueInput
    data: XOR<ModeleUpdateWithoutMarqueInput, ModeleUncheckedUpdateWithoutMarqueInput>
  }

  export type ModeleUpdateManyWithWhereWithoutMarqueInput = {
    where: ModeleScalarWhereInput
    data: XOR<ModeleUpdateManyMutationInput, ModeleUncheckedUpdateManyWithoutMarqueInput>
  }

  export type MarqueCreateWithoutModelesInput = {
    logo?: string
    name: string
  }

  export type MarqueUncheckedCreateWithoutModelesInput = {
    id?: number
    logo?: string
    name: string
  }

  export type MarqueCreateOrConnectWithoutModelesInput = {
    where: MarqueWhereUniqueInput
    create: XOR<MarqueCreateWithoutModelesInput, MarqueUncheckedCreateWithoutModelesInput>
  }

  export type FamilleCreateWithoutModelesInput = {
    name: string
    types?: TypeCreateNestedManyWithoutFamillesInput
  }

  export type FamilleUncheckedCreateWithoutModelesInput = {
    id?: number
    name: string
    types?: TypeUncheckedCreateNestedManyWithoutFamillesInput
  }

  export type FamilleCreateOrConnectWithoutModelesInput = {
    where: FamilleWhereUniqueInput
    create: XOR<FamilleCreateWithoutModelesInput, FamilleUncheckedCreateWithoutModelesInput>
  }

  export type ModeleTypeCreateWithoutModeleInput = {
    type: TypeCreateNestedOneWithoutModeleTypesInput
    produits?: ProduitCreateNestedManyWithoutModeleTypesInput
  }

  export type ModeleTypeUncheckedCreateWithoutModeleInput = {
    id?: number
    typeId: number
    produits?: ProduitUncheckedCreateNestedManyWithoutModeleTypesInput
  }

  export type ModeleTypeCreateOrConnectWithoutModeleInput = {
    where: ModeleTypeWhereUniqueInput
    create: XOR<ModeleTypeCreateWithoutModeleInput, ModeleTypeUncheckedCreateWithoutModeleInput>
  }

  export type ModeleTypeCreateManyModeleInputEnvelope = {
    data: ModeleTypeCreateManyModeleInput | ModeleTypeCreateManyModeleInput[]
  }

  export type MarqueUpsertWithoutModelesInput = {
    update: XOR<MarqueUpdateWithoutModelesInput, MarqueUncheckedUpdateWithoutModelesInput>
    create: XOR<MarqueCreateWithoutModelesInput, MarqueUncheckedCreateWithoutModelesInput>
    where?: MarqueWhereInput
  }

  export type MarqueUpdateToOneWithWhereWithoutModelesInput = {
    where?: MarqueWhereInput
    data: XOR<MarqueUpdateWithoutModelesInput, MarqueUncheckedUpdateWithoutModelesInput>
  }

  export type MarqueUpdateWithoutModelesInput = {
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MarqueUncheckedUpdateWithoutModelesInput = {
    id?: IntFieldUpdateOperationsInput | number
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FamilleUpsertWithoutModelesInput = {
    update: XOR<FamilleUpdateWithoutModelesInput, FamilleUncheckedUpdateWithoutModelesInput>
    create: XOR<FamilleCreateWithoutModelesInput, FamilleUncheckedCreateWithoutModelesInput>
    where?: FamilleWhereInput
  }

  export type FamilleUpdateToOneWithWhereWithoutModelesInput = {
    where?: FamilleWhereInput
    data: XOR<FamilleUpdateWithoutModelesInput, FamilleUncheckedUpdateWithoutModelesInput>
  }

  export type FamilleUpdateWithoutModelesInput = {
    name?: StringFieldUpdateOperationsInput | string
    types?: TypeUpdateManyWithoutFamillesNestedInput
  }

  export type FamilleUncheckedUpdateWithoutModelesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    types?: TypeUncheckedUpdateManyWithoutFamillesNestedInput
  }

  export type ModeleTypeUpsertWithWhereUniqueWithoutModeleInput = {
    where: ModeleTypeWhereUniqueInput
    update: XOR<ModeleTypeUpdateWithoutModeleInput, ModeleTypeUncheckedUpdateWithoutModeleInput>
    create: XOR<ModeleTypeCreateWithoutModeleInput, ModeleTypeUncheckedCreateWithoutModeleInput>
  }

  export type ModeleTypeUpdateWithWhereUniqueWithoutModeleInput = {
    where: ModeleTypeWhereUniqueInput
    data: XOR<ModeleTypeUpdateWithoutModeleInput, ModeleTypeUncheckedUpdateWithoutModeleInput>
  }

  export type ModeleTypeUpdateManyWithWhereWithoutModeleInput = {
    where: ModeleTypeScalarWhereInput
    data: XOR<ModeleTypeUpdateManyMutationInput, ModeleTypeUncheckedUpdateManyWithoutModeleInput>
  }

  export type ModeleCreateWithoutModeleTypesInput = {
    name: string
    marque: MarqueCreateNestedOneWithoutModelesInput
    famille: FamilleCreateNestedOneWithoutModelesInput
  }

  export type ModeleUncheckedCreateWithoutModeleTypesInput = {
    id?: number
    name: string
    marqueId: number
    familleId: number
  }

  export type ModeleCreateOrConnectWithoutModeleTypesInput = {
    where: ModeleWhereUniqueInput
    create: XOR<ModeleCreateWithoutModeleTypesInput, ModeleUncheckedCreateWithoutModeleTypesInput>
  }

  export type TypeCreateWithoutModeleTypesInput = {
    name: string
    help: string
    familles?: FamilleCreateNestedManyWithoutTypesInput
  }

  export type TypeUncheckedCreateWithoutModeleTypesInput = {
    id?: number
    name: string
    help: string
    familles?: FamilleUncheckedCreateNestedManyWithoutTypesInput
  }

  export type TypeCreateOrConnectWithoutModeleTypesInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutModeleTypesInput, TypeUncheckedCreateWithoutModeleTypesInput>
  }

  export type ProduitCreateWithoutModeleTypesInput = {
    productId: string
    productName: string
    productImage: string
    productUrl: string
    productPrice?: Decimal | DecimalJsLike | number | string
    infosComplementaires?: string
  }

  export type ProduitUncheckedCreateWithoutModeleTypesInput = {
    id?: number
    productId: string
    productName: string
    productImage: string
    productUrl: string
    productPrice?: Decimal | DecimalJsLike | number | string
    infosComplementaires?: string
  }

  export type ProduitCreateOrConnectWithoutModeleTypesInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutModeleTypesInput, ProduitUncheckedCreateWithoutModeleTypesInput>
  }

  export type ModeleUpsertWithoutModeleTypesInput = {
    update: XOR<ModeleUpdateWithoutModeleTypesInput, ModeleUncheckedUpdateWithoutModeleTypesInput>
    create: XOR<ModeleCreateWithoutModeleTypesInput, ModeleUncheckedCreateWithoutModeleTypesInput>
    where?: ModeleWhereInput
  }

  export type ModeleUpdateToOneWithWhereWithoutModeleTypesInput = {
    where?: ModeleWhereInput
    data: XOR<ModeleUpdateWithoutModeleTypesInput, ModeleUncheckedUpdateWithoutModeleTypesInput>
  }

  export type ModeleUpdateWithoutModeleTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    marque?: MarqueUpdateOneRequiredWithoutModelesNestedInput
    famille?: FamilleUpdateOneRequiredWithoutModelesNestedInput
  }

  export type ModeleUncheckedUpdateWithoutModeleTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    marqueId?: IntFieldUpdateOperationsInput | number
    familleId?: IntFieldUpdateOperationsInput | number
  }

  export type TypeUpsertWithoutModeleTypesInput = {
    update: XOR<TypeUpdateWithoutModeleTypesInput, TypeUncheckedUpdateWithoutModeleTypesInput>
    create: XOR<TypeCreateWithoutModeleTypesInput, TypeUncheckedCreateWithoutModeleTypesInput>
    where?: TypeWhereInput
  }

  export type TypeUpdateToOneWithWhereWithoutModeleTypesInput = {
    where?: TypeWhereInput
    data: XOR<TypeUpdateWithoutModeleTypesInput, TypeUncheckedUpdateWithoutModeleTypesInput>
  }

  export type TypeUpdateWithoutModeleTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    help?: StringFieldUpdateOperationsInput | string
    familles?: FamilleUpdateManyWithoutTypesNestedInput
  }

  export type TypeUncheckedUpdateWithoutModeleTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    help?: StringFieldUpdateOperationsInput | string
    familles?: FamilleUncheckedUpdateManyWithoutTypesNestedInput
  }

  export type ProduitUpsertWithWhereUniqueWithoutModeleTypesInput = {
    where: ProduitWhereUniqueInput
    update: XOR<ProduitUpdateWithoutModeleTypesInput, ProduitUncheckedUpdateWithoutModeleTypesInput>
    create: XOR<ProduitCreateWithoutModeleTypesInput, ProduitUncheckedCreateWithoutModeleTypesInput>
  }

  export type ProduitUpdateWithWhereUniqueWithoutModeleTypesInput = {
    where: ProduitWhereUniqueInput
    data: XOR<ProduitUpdateWithoutModeleTypesInput, ProduitUncheckedUpdateWithoutModeleTypesInput>
  }

  export type ProduitUpdateManyWithWhereWithoutModeleTypesInput = {
    where: ProduitScalarWhereInput
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyWithoutModeleTypesInput>
  }

  export type ProduitScalarWhereInput = {
    AND?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
    OR?: ProduitScalarWhereInput[]
    NOT?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
    id?: IntFilter<"Produit"> | number
    productId?: StringFilter<"Produit"> | string
    productName?: StringFilter<"Produit"> | string
    productImage?: StringFilter<"Produit"> | string
    productUrl?: StringFilter<"Produit"> | string
    productPrice?: DecimalFilter<"Produit"> | Decimal | DecimalJsLike | number | string
    infosComplementaires?: StringFilter<"Produit"> | string
  }

  export type ModeleTypeCreateWithoutProduitsInput = {
    modele: ModeleCreateNestedOneWithoutModeleTypesInput
    type: TypeCreateNestedOneWithoutModeleTypesInput
  }

  export type ModeleTypeUncheckedCreateWithoutProduitsInput = {
    id?: number
    modeleId: number
    typeId: number
  }

  export type ModeleTypeCreateOrConnectWithoutProduitsInput = {
    where: ModeleTypeWhereUniqueInput
    create: XOR<ModeleTypeCreateWithoutProduitsInput, ModeleTypeUncheckedCreateWithoutProduitsInput>
  }

  export type ModeleTypeUpsertWithWhereUniqueWithoutProduitsInput = {
    where: ModeleTypeWhereUniqueInput
    update: XOR<ModeleTypeUpdateWithoutProduitsInput, ModeleTypeUncheckedUpdateWithoutProduitsInput>
    create: XOR<ModeleTypeCreateWithoutProduitsInput, ModeleTypeUncheckedCreateWithoutProduitsInput>
  }

  export type ModeleTypeUpdateWithWhereUniqueWithoutProduitsInput = {
    where: ModeleTypeWhereUniqueInput
    data: XOR<ModeleTypeUpdateWithoutProduitsInput, ModeleTypeUncheckedUpdateWithoutProduitsInput>
  }

  export type ModeleTypeUpdateManyWithWhereWithoutProduitsInput = {
    where: ModeleTypeScalarWhereInput
    data: XOR<ModeleTypeUpdateManyMutationInput, ModeleTypeUncheckedUpdateManyWithoutProduitsInput>
  }

  export type ModeleCreateManyFamilleInput = {
    id?: number
    name: string
    marqueId: number
  }

  export type ModeleUpdateWithoutFamilleInput = {
    name?: StringFieldUpdateOperationsInput | string
    marque?: MarqueUpdateOneRequiredWithoutModelesNestedInput
    modeleTypes?: ModeleTypeUpdateManyWithoutModeleNestedInput
  }

  export type ModeleUncheckedUpdateWithoutFamilleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    marqueId?: IntFieldUpdateOperationsInput | number
    modeleTypes?: ModeleTypeUncheckedUpdateManyWithoutModeleNestedInput
  }

  export type ModeleUncheckedUpdateManyWithoutFamilleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    marqueId?: IntFieldUpdateOperationsInput | number
  }

  export type TypeUpdateWithoutFamillesInput = {
    name?: StringFieldUpdateOperationsInput | string
    help?: StringFieldUpdateOperationsInput | string
    modeleTypes?: ModeleTypeUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateWithoutFamillesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    help?: StringFieldUpdateOperationsInput | string
    modeleTypes?: ModeleTypeUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateManyWithoutFamillesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    help?: StringFieldUpdateOperationsInput | string
  }

  export type ModeleTypeCreateManyTypeInput = {
    id?: number
    modeleId: number
  }

  export type FamilleUpdateWithoutTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    modeles?: ModeleUpdateManyWithoutFamilleNestedInput
  }

  export type FamilleUncheckedUpdateWithoutTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    modeles?: ModeleUncheckedUpdateManyWithoutFamilleNestedInput
  }

  export type FamilleUncheckedUpdateManyWithoutTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModeleTypeUpdateWithoutTypeInput = {
    modele?: ModeleUpdateOneRequiredWithoutModeleTypesNestedInput
    produits?: ProduitUpdateManyWithoutModeleTypesNestedInput
  }

  export type ModeleTypeUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    modeleId?: IntFieldUpdateOperationsInput | number
    produits?: ProduitUncheckedUpdateManyWithoutModeleTypesNestedInput
  }

  export type ModeleTypeUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    modeleId?: IntFieldUpdateOperationsInput | number
  }

  export type ModeleCreateManyMarqueInput = {
    id?: number
    name: string
    familleId: number
  }

  export type ModeleUpdateWithoutMarqueInput = {
    name?: StringFieldUpdateOperationsInput | string
    famille?: FamilleUpdateOneRequiredWithoutModelesNestedInput
    modeleTypes?: ModeleTypeUpdateManyWithoutModeleNestedInput
  }

  export type ModeleUncheckedUpdateWithoutMarqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    familleId?: IntFieldUpdateOperationsInput | number
    modeleTypes?: ModeleTypeUncheckedUpdateManyWithoutModeleNestedInput
  }

  export type ModeleUncheckedUpdateManyWithoutMarqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    familleId?: IntFieldUpdateOperationsInput | number
  }

  export type ModeleTypeCreateManyModeleInput = {
    id?: number
    typeId: number
  }

  export type ModeleTypeUpdateWithoutModeleInput = {
    type?: TypeUpdateOneRequiredWithoutModeleTypesNestedInput
    produits?: ProduitUpdateManyWithoutModeleTypesNestedInput
  }

  export type ModeleTypeUncheckedUpdateWithoutModeleInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    produits?: ProduitUncheckedUpdateManyWithoutModeleTypesNestedInput
  }

  export type ModeleTypeUncheckedUpdateManyWithoutModeleInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduitUpdateWithoutModeleTypesInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    productUrl?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    infosComplementaires?: StringFieldUpdateOperationsInput | string
  }

  export type ProduitUncheckedUpdateWithoutModeleTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    productUrl?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    infosComplementaires?: StringFieldUpdateOperationsInput | string
  }

  export type ProduitUncheckedUpdateManyWithoutModeleTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    productUrl?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    infosComplementaires?: StringFieldUpdateOperationsInput | string
  }

  export type ModeleTypeUpdateWithoutProduitsInput = {
    modele?: ModeleUpdateOneRequiredWithoutModeleTypesNestedInput
    type?: TypeUpdateOneRequiredWithoutModeleTypesNestedInput
  }

  export type ModeleTypeUncheckedUpdateWithoutProduitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    modeleId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type ModeleTypeUncheckedUpdateManyWithoutProduitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    modeleId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
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