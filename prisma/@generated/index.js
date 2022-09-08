
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.3.1
 * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
 */
Prisma.prismaVersion = {
  client: "4.3.1",
  engine: "c875e43600dfe042452e0b868f7a48b817b9640b"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma/@generated",
    "@generated",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CourtHasSportsScalarFieldEnum = makeEnum({
  court_id: 'court_id',
  active: 'active',
  created_at: 'created_at',
  updated_at: 'updated_at',
  sportsId: 'sportsId'
});

exports.Prisma.CourtScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.ReservationHasRequestedUsersScalarFieldEnum = makeEnum({
  reservation_id: 'reservation_id',
  user_id: 'user_id',
  created_at: 'created_at'
});

exports.Prisma.ReservationHasUsersScalarFieldEnum = makeEnum({
  reservation_id: 'reservation_id',
  user_id: 'user_id',
  created_at: 'created_at'
});

exports.Prisma.ReservationScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  created_at: 'created_at',
  manager_id: 'manager_id',
  max_participants: 'max_participants',
  sportId: 'sportId',
  courtId: 'courtId',
  description: 'description'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SportScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  maxAmount: 'maxAmount'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UnavailableTimeScalarFieldEnum = makeEnum({
  id: 'id',
  dayOfTheWeek: 'dayOfTheWeek',
  startTime: 'startTime',
  endTime: 'endTime',
  singleOccurency: 'singleOccurency',
  created_at: 'created_at',
  courtId: 'courtId'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  ra: 'ra',
  password: 'password',
  email: 'email',
  campi: 'campi',
  role: 'role'
});
exports.DayOfTheWeek = makeEnum({
  sunday: 'sunday',
  monday: 'monday',
  tuesday: 'tuesday',
  wednesday: 'wednesday',
  thursday: 'thursday',
  friday: 'friday',
  saturday: 'saturday'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Sport: 'Sport',
  Court: 'Court',
  Reservation: 'Reservation',
  unavailableTime: 'unavailableTime',
  CourtHasSports: 'CourtHasSports',
  ReservationHasUsers: 'ReservationHasUsers',
  ReservationHasRequestedUsers: 'ReservationHasRequestedUsers'
});

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"DayOfTheWeek\",\"values\":[{\"name\":\"sunday\",\"dbName\":null},{\"name\":\"monday\",\"dbName\":null},{\"name\":\"tuesday\",\"dbName\":null},{\"name\":\"wednesday\",\"dbName\":null},{\"name\":\"thursday\",\"dbName\":null},{\"name\":\"friday\",\"dbName\":null},{\"name\":\"saturday\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"User\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"User\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReservationHasUsers\",\"relationName\":\"ReservationHasUsersToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requestedReservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReservationHasRequestedUsers\",\"relationName\":\"ReservationHasRequestedUsersToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"managerOfReservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"ReservationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Sport\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CourtHasSports\",\"relationName\":\"CourtHasSportsToSport\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"ReservationToSport\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Court\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sports\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CourtHasSports\",\"relationName\":\"CourtToCourtHasSports\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"CourtToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unavailableTime\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"unavailableTime\",\"relationName\":\"CourtTounavailableTime\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Reservation\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manager_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manager\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ReservationToUser\",\"relationFromFields\":[\"manager_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"participants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReservationHasUsers\",\"relationName\":\"ReservationToReservationHasUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requested_participants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReservationHasRequestedUsers\",\"relationName\":\"ReservationToReservationHasRequestedUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_participants\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sport\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sport\",\"relationName\":\"ReservationToSport\",\"relationFromFields\":[\"sportId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sportId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"court\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Court\",\"relationName\":\"CourtToReservation\",\"relationFromFields\":[\"courtId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courtId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"unavailableTime\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dayOfTheWeek\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DayOfTheWeek\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"singleOccurency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"court\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Court\",\"relationName\":\"CourtTounavailableTime\",\"relationFromFields\":[\"courtId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courtId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"CourtHasSports\",\"dbName\":\"court_has_sports\",\"fields\":[{\"name\":\"court\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Court\",\"relationName\":\"CourtToCourtHasSports\",\"relationFromFields\":[\"court_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"court_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sport\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sport\",\"relationName\":\"CourtHasSportsToSport\",\"relationFromFields\":[\"sportsId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sportsId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"court_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ReservationHasUsers\",\"dbName\":\"reservation_has_users\",\"fields\":[{\"name\":\"reservation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"ReservationToReservationHasUsers\",\"relationFromFields\":[\"reservation_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ReservationHasUsersToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"reservation_id\",\"user_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ReservationHasRequestedUsers\",\"dbName\":\"reservation_has_requested_users\",\"fields\":[{\"name\":\"reservation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"ReservationToReservationHasRequestedUsers\",\"relationFromFields\":[\"reservation_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ReservationHasRequestedUsersToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"reservation_id\",\"user_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"User\",\"plural\":\"users\",\"findUnique\":\"findUniqueUser\",\"findFirst\":\"findFirstUser\",\"findMany\":\"findManyUser\",\"create\":\"createOneUser\",\"createMany\":\"createManyUser\",\"delete\":\"deleteOneUser\",\"update\":\"updateOneUser\",\"deleteMany\":\"deleteManyUser\",\"updateMany\":\"updateManyUser\",\"upsert\":\"upsertOneUser\",\"aggregate\":\"aggregateUser\",\"groupBy\":\"groupByUser\"},{\"model\":\"Sport\",\"plural\":\"sports\",\"findUnique\":\"findUniqueSport\",\"findFirst\":\"findFirstSport\",\"findMany\":\"findManySport\",\"create\":\"createOneSport\",\"createMany\":\"createManySport\",\"delete\":\"deleteOneSport\",\"update\":\"updateOneSport\",\"deleteMany\":\"deleteManySport\",\"updateMany\":\"updateManySport\",\"upsert\":\"upsertOneSport\",\"aggregate\":\"aggregateSport\",\"groupBy\":\"groupBySport\"},{\"model\":\"Court\",\"plural\":\"courts\",\"findUnique\":\"findUniqueCourt\",\"findFirst\":\"findFirstCourt\",\"findMany\":\"findManyCourt\",\"create\":\"createOneCourt\",\"createMany\":\"createManyCourt\",\"delete\":\"deleteOneCourt\",\"update\":\"updateOneCourt\",\"deleteMany\":\"deleteManyCourt\",\"updateMany\":\"updateManyCourt\",\"upsert\":\"upsertOneCourt\",\"aggregate\":\"aggregateCourt\",\"groupBy\":\"groupByCourt\"},{\"model\":\"Reservation\",\"plural\":\"reservations\",\"findUnique\":\"findUniqueReservation\",\"findFirst\":\"findFirstReservation\",\"findMany\":\"findManyReservation\",\"create\":\"createOneReservation\",\"createMany\":\"createManyReservation\",\"delete\":\"deleteOneReservation\",\"update\":\"updateOneReservation\",\"deleteMany\":\"deleteManyReservation\",\"updateMany\":\"updateManyReservation\",\"upsert\":\"upsertOneReservation\",\"aggregate\":\"aggregateReservation\",\"groupBy\":\"groupByReservation\"},{\"model\":\"unavailableTime\",\"plural\":\"unavailableTimes\",\"findUnique\":\"findUniqueunavailableTime\",\"findFirst\":\"findFirstunavailableTime\",\"findMany\":\"findManyunavailableTime\",\"create\":\"createOneunavailableTime\",\"createMany\":\"createManyunavailableTime\",\"delete\":\"deleteOneunavailableTime\",\"update\":\"updateOneunavailableTime\",\"deleteMany\":\"deleteManyunavailableTime\",\"updateMany\":\"updateManyunavailableTime\",\"upsert\":\"upsertOneunavailableTime\",\"aggregate\":\"aggregateunavailableTime\",\"groupBy\":\"groupByunavailableTime\"},{\"model\":\"CourtHasSports\",\"plural\":\"courtHasSports\",\"findUnique\":\"findUniqueCourtHasSports\",\"findFirst\":\"findFirstCourtHasSports\",\"findMany\":\"findManyCourtHasSports\",\"create\":\"createOneCourtHasSports\",\"createMany\":\"createManyCourtHasSports\",\"delete\":\"deleteOneCourtHasSports\",\"update\":\"updateOneCourtHasSports\",\"deleteMany\":\"deleteManyCourtHasSports\",\"updateMany\":\"updateManyCourtHasSports\",\"upsert\":\"upsertOneCourtHasSports\",\"aggregate\":\"aggregateCourtHasSports\",\"groupBy\":\"groupByCourtHasSports\"},{\"model\":\"ReservationHasUsers\",\"plural\":\"reservationHasUsers\",\"findUnique\":\"findUniqueReservationHasUsers\",\"findFirst\":\"findFirstReservationHasUsers\",\"findMany\":\"findManyReservationHasUsers\",\"create\":\"createOneReservationHasUsers\",\"createMany\":\"createManyReservationHasUsers\",\"delete\":\"deleteOneReservationHasUsers\",\"update\":\"updateOneReservationHasUsers\",\"deleteMany\":\"deleteManyReservationHasUsers\",\"updateMany\":\"updateManyReservationHasUsers\",\"upsert\":\"upsertOneReservationHasUsers\",\"aggregate\":\"aggregateReservationHasUsers\",\"groupBy\":\"groupByReservationHasUsers\"},{\"model\":\"ReservationHasRequestedUsers\",\"plural\":\"reservationHasRequestedUsers\",\"findUnique\":\"findUniqueReservationHasRequestedUsers\",\"findFirst\":\"findFirstReservationHasRequestedUsers\",\"findMany\":\"findManyReservationHasRequestedUsers\",\"create\":\"createOneReservationHasRequestedUsers\",\"createMany\":\"createManyReservationHasRequestedUsers\",\"delete\":\"deleteOneReservationHasRequestedUsers\",\"update\":\"updateOneReservationHasRequestedUsers\",\"deleteMany\":\"deleteManyReservationHasRequestedUsers\",\"updateMany\":\"updateManyReservationHasRequestedUsers\",\"upsert\":\"upsertOneReservationHasRequestedUsers\",\"aggregate\":\"aggregateReservationHasRequestedUsers\",\"groupBy\":\"groupByReservationHasRequestedUsers\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/skyron/Documents/UTFPRInquadra-webservice/prisma/@generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "4.3.1",
  "engineVersion": "c875e43600dfe042452e0b868f7a48b817b9640b",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "prisma/@generated/libquery_engine-debian-openssl-1.1.x.so.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/@generated/schema.prisma")
