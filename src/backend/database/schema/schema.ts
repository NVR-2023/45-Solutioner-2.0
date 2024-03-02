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

export const userRelations = relations(users, ({ one }) => ({
  userProfiles: one(userProfiles),
}));

export const userProfiles = pgTable("user_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  avatar: text("avatar"),
  mustHaveCertificate: boolean("must_have_certificate"),
  requiredExperience: numeric("required_experience"),
  requiredRating: numeric("required_rating"),
});

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
  providerProfiles: one(providerProfiles),
  addresses: one(addresses),
}));

export const providerProfiles = pgTable("provider_profiles", {
  id: serial("id").primaryKey(),
  providerId: integer("provider_id").notNull().references(() => providers.id),
  avatar: text("avatar"),
  hasCertificate: boolean("has_certificate"),
  experience: numeric("experience"),
  serviceRadius: numeric("service_radius"),
  averageRating: numeric("average_rating"),
  ratingsCounter: integer("ratings_counter"),


});

export const addresses = pgTable("addresses", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  isMain: boolean("id:mai"),
  providerId: integer("provider_id").notNull().references(() => providers.id),
  street: text("street"),
  apartment: text("apartment"),
  city: text("city"),
  state: text("state"),
  country: text("country"),
  latitude: numeric("latitude"),
  longitude: numeric("longitude"),
  // missing connection with services_required
});



export const serviceDescriptions = pgTable("service_descriptions", {
  id: serial("id").primaryKey(),
  category: varchar("category", { length: 25 }).notNull(),
  service: varchar("service", { length: 25 }).notNull(),
  description: varchar("description", { length: 120}).notNull(),
  unit: varchar("unit", { length: 120}).notNull(),
  duration: numeric("duration", { precision: 3, scale: 2 }).notNull(),
  personnel: integer("personnel").notNull(),
  included: varchar("included", { length: 120}).notNull(),
});

export const serviceProfiles = pgTable("serviceProfiles", {
  id: serial("id").primaryKey(),
  serviceId: integer("service_id").notNull().references(() => serviceDescriptions.id),
  price: numeric("price"),
  sale: numeric("sale"),
  saleExpiresBy: date("sale_expires_by"),  
});
