import {
  pgTable,
  varchar,
  numeric,
  integer,
  serial,
  text,
  date,
  timestamp,
  uniqueIndex,
  boolean,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    modifiedAt: timestamp("modifiedAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.email),
    };
  }
);

export const userRelations = relations(users, ({ one, many }) => ({
  profile: one(userProfiles, {
    fields: [users.id],
    references: [userProfiles.userId],
  }),
  addresses: many(userAddresses),
}));

export const userProfiles = pgTable("user_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  avatar: text("avatar"),
  mustHaveCertificate: boolean("must_have_certificate"),
  requiredExperience: numeric("required_experience"),
  requiredRating: numeric("required_rating"),
});

export const userAddresses = pgTable("user_addresses", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  isPrimary: boolean("is_primary"),
  street: text("street"),
  apartment: text("apartment"),
  city: text("city"),
  state: text("state"),
  country: text("country"),
  latitude: numeric("latitude"),
  longitude: numeric("longitude"),
  // missing connection with services_required
});

export const userAddressesRelations = relations(userAddresses, ({ one }) => ({
  user: one(users, {
    fields: [userAddresses.userId],
    references: [users.id],
  }),
}));

export const providers = pgTable(
  "providers",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    modifiedAt: timestamp("modifiedAt").defaultNow().notNull(),
  },
  (providers) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(providers.email),
    };
  }
);

export const providerRelations = relations(providers, ({ one }) => ({
  profile: one(providerProfiles, {
    fields: [providers.id],
    references: [providerProfiles.providerId],
  }),
  address: one(providerAddresses, {
    fields: [providers.id],
    references: [providerAddresses.providerId],
  }),
}));

export const providerProfiles = pgTable("provider_profiles", {
  id: serial("id").primaryKey(),
  providerId: integer("provider_id")
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
  providerId: integer("provider_id")
    .notNull()
    .references(() => providers.id),
  street: text("street"),
  apartment: text("apartment"),
  city: text("city"),
  state: text("state"),
  country: text("country"),
  latitude: numeric("latitude"),
  longitude: numeric("longitude"),
  // missing connection with services_required
});



export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  category: varchar("category", { length: 25 }).notNull(),
  service: varchar("service", { length: 25 }).notNull(),
  description: varchar("description", { length: 120 }).notNull(),
  unit: varchar("unit", { length: 120 }).notNull(),
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
export const serviceProfiles = pgTable("serviceProfiles", {
  id: serial("id").primaryKey(),
  serviceId: integer("service_id")
    .notNull()
    .references(() => services.id),
  price: numeric("price"),
  sale: numeric("sale"),
  saleExpiresBy: date("sale_expires_by"),
});
