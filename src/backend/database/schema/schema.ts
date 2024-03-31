import {
  pgTable,
  pgEnum,
  varchar,
  numeric,
  integer,
  serial,
  text,
  date,
  time,
  timestamp,
  uniqueIndex,
  boolean,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Users

export const users = pgTable(
  "users",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    emailVerifiedAt: timestamp("email_verified_at"),
    hashedPassword: text("hashed_password"),
    googleId: varchar("google_id", { length: 255 }),
    facebookId: varchar("facebook_id", { length: 255 }),
    createdAt: timestamp("created_at").defaultNow(),
    modifiedAt: timestamp("modified_at").defaultNow(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("users_unique_idx").on(users.email),
    };
  },
);

export const usersRelations = relations(users, ({ one, many }) => ({
  profile: one(userProfiles, {
    fields: [users.id],
    references: [userProfiles.userId],
  }),
  sessions: many(userSessions),
  addresses: many(userAddresses),
  requests: many(serviceRequests),
  exclusions: many(userExclusions),
}));

export const userSessions = pgTable("user_sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});


export const userSessionsRelations = relations(userSessions, ({ one }) => ({
  user: one(users, {
    fields: [userSessions.userId],
    references: [users.id],
  }),
}));


export const userProfiles = pgTable("user_profiles", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  avatar: text("avatar"),
  mustHaveCertificate: boolean("must_have_certificate"),
  requiredExperience: numeric("required_experience"),
  requiredRating: numeric("required_rating"),
});

export const userAddresses = pgTable("user_addresses", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  isPrimary: boolean("is_primary"),
  street: text("street"),
  apartment: varchar("apartment"),
  city: varchar("city", { length: 25 }),
  state: varchar("state", { length: 25 }),
  country: varchar("country", { length: 25 }),
  latitude: numeric("latitude").notNull(),
  longitude: numeric("longitude").notNull(),
});

export const userAddressesRelations = relations(userAddresses, ({ one }) => ({
  user: one(users, {
    fields: [userAddresses.userId],
    references: [users.id],
  }),
}));

export const userNotifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  title: varchar("title", { length: 50 }),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  readAt: timestamp("read_at").defaultNow(),
});

export const userNotificationsRelations = relations(userNotifications, ({ one }) => ({
  user: one(users, {
    fields: [userNotifications.userId],
    references: [users.id],
  }),
}));

export const userExclusions = pgTable("user_exclusions", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  providerId: text("provider_id")
    .notNull()
    .references(() => providers.id),
});

export const userExclusionsRelations = relations(userExclusions, ({ one }) => ({
  user: one(users, {
    fields: [userExclusions.userId],
    references: [users.id],
  }),
}));

// Providers

export const providers = pgTable(
  "providers",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    emailVerifiedAt: timestamp("email_verified_at"),
    hashedPassword: text("hashed_password"),
    googleId: varchar("google_id", { length: 255 }),
    facebookId: varchar("facebook_id", { length: 255 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    modifiedAt: timestamp("modified_at").defaultNow().notNull(),
  },
  (providers) => {
    return {
      uniqueIdx: uniqueIndex("providers_unique_idx").on(providers.email),
    };
  },
);


export const providerRelations = relations(providers, ({ one, many }) => ({
  profile: one(providerProfiles, {
    fields: [providers.id],
    references: [providerProfiles.providerId],
  }),
  address: one(providerAddresses, {
    fields: [providers.id],
    references: [providerAddresses.providerId],
  }),
  sessions: many(providerSessions),
  requests: many(serviceRequests),
  availabilities: many(providerAvailabilities),
  servicesProvided: many(providerServicesProvided),
}));

export const providerSessions = pgTable("provider_sessions", {
  id: text("id").primaryKey(),
  providerId: text("provider_id")
    .notNull()
    .references(() => providers.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const providerSessionsRelations = relations(providerSessions, ({ one }) => ({
  provider: one(providers, {
    fields: [providerSessions.providerId],
    references: [providers.id],
  }),
}));

export const providerProfiles = pgTable("provider_profiles", {
  id: serial("id").primaryKey(),
  providerId: text("provider_id")
    .notNull()
    .references(() => providers.id),
  avatar: text("avatar"),
  hasCertificate: boolean("has_certificate"),
  experience: numeric("experience"),
  serviceRadius: numeric("service_radius"),
  averageRating: numeric("average_rating"),
  ratingsCounter: integer("ratings_counter"),
});

export const providerAddresses = pgTable("provider_addresses", {
  id: serial("id").primaryKey(),
  providerId: text("provider_id")
    .notNull()
    .references(() => providers.id),
  street: text("street"),
  apartment: varchar("apartment", { length: 25 }),
  city: varchar("city", { length: 25 }),
  state: varchar("state", { length: 25 }),
  country: varchar("country", { length: 25 }),
  latitude: numeric("latitude").notNull(),
  longitude: numeric("longitude").notNull(),
});

export const providerNotifications = pgTable("provider_notifications", {
  id: serial("id").primaryKey(),
  providerId: text("provider_id")
    .notNull()
    .references(() => providers.id),
  title: varchar("title", { length: 50 }),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  readAt: timestamp("read_at").defaultNow(),
});

export const providerNotificationsRelations = relations(providerNotifications, ({ one }) => ({
  provider: one(providers, {
    fields: [providerNotifications.providerId],
    references: [providers.id],
  }),
}));

export const daysOfWeekEnum = pgEnum("days_of_week", [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]);
export const timeSlotsEnum = pgEnum("time_slots", ["morning", "afternoon", "evening"]);

export const providerAvailabilities = pgTable("provider_availabilities", {
  id: serial("id").primaryKey(),
  providerId: text("provider_id")
    .notNull()
    .references(() => providers.id),
  dayOfWeek: daysOfWeekEnum("day_of_week").notNull(),
  timeSLot: timeSlotsEnum("time_slot").notNull(),
});

export const providerAvailabilitiesRelations = relations(providerAvailabilities, ({ one }) => ({
  provider: one(providers, {
    fields: [providerAvailabilities.providerId],
    references: [providers.id],
  }),
}));

export const providerServicesProvided = pgTable("services_provided", {
  id: serial("id").primaryKey(),
  providerId: text("provider_id")
    .notNull()
    .references(() => providers.id),
  serviceId: integer("service")
    .notNull()
    .references(() => services.id),
});

export const providerServicesProvidedRelations = relations(providerServicesProvided, ({ one }) => ({
  provider: one(providers, {
    fields: [providerServicesProvided.providerId],
    references: [providers.id],
  }),
}));

// Services

export const totalNUmberOfServices = pgTable("total_number_of_services", {
  id: serial("id").primaryKey(),
  totalNUmberOfServicesRequested: integer("total_number_of_services_requested").default(0),
  totalNUmberOfRecurrentServicesRequested: integer(
    "total_number_of_recurrent_services_requested"
  ).default(0),
  totalNUmberOfServicesCancelled: integer("total_number_of_services_cancelled").default(0),
  totalNUmberOfServicesExecuted: integer("total_number_of_services_executed").default(0),
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  category: varchar("category", { length: 30 }).notNull(),
  service: varchar("service", { length: 30 }).notNull(),
  description: varchar("description", { length: 300 }).notNull(),
  unit: varchar("unit", { length: 300 }).notNull(),
  duration: numeric("duration", { precision: 3, scale: 2 }).notNull(),
  personnel: integer("personnel").notNull(),
  included: varchar("included", { length: 120 }).notNull(),
});

export const serviceRelations = relations(services, ({ one }) => ({
  profile: one(serviceProfiles, {
    fields: [services.id],
    references: [serviceProfiles.serviceId],
  }),
}));

export const serviceProfiles = pgTable("service_profiles", {
  id: serial("id").primaryKey(),
  serviceId: integer("service_id")
    .notNull()
    .references(() => services.id),
  price: numeric("price"),
  sale: numeric("sale"),
  saleExpiresBy: date("sale_expires_by"),
  numberOfRequests: integer("number_of_requests").default(0),
  popularity: numeric("popularity"),
});

export const serviceRequestStatusEnum = pgEnum("service_request_status", [
  "expired",
  "requested",
  "accepted",
  "safeguarded",
  "provided",
  "renewed",
  "reviewed",
  "completed",
  "sanctioned",
  "cancelled",
]);

export const serviceRecurrenceEnum = pgEnum("service_recurrence", [
  "once",
  "daily",
  "weekly",
  "monthly",
]);

export const serviceRequests = pgTable("service_requests", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  userAddressId: integer("user_address_id")
    .notNull()
    .references(() => userAddresses.id),
  providerId: text("provider_id").references(() => users.id),
  serviceId: integer("service_id")
    .notNull()
    .references(() => services.id),
  timeOfService: time("time_of_service"),
  dateOfService: date("date_of_service"),
  recurrence: serviceRecurrenceEnum("service_recurrence"),
  verbalPassword: varchar("verbal_password", { length: 25 }),
  qrPassword: text("qr_password"),
  status: serviceRequestStatusEnum("status").default("requested").notNull(),
});

export const serviceRequestRelations = relations(serviceRequests, ({ one }) => ({
  user: one(users, {
    fields: [serviceRequests.id],
    references: [users.id],
  }),
  provider: one(providers, {
    fields: [serviceRequests.id],
    references: [providers.id],
  }),
  address: one(userAddresses, {
    fields: [serviceRequests.id],
    references: [userAddresses.id],
  }),
}));
