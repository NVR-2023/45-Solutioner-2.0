import {
  pgTable,
  varchar,
  numeric,
  integer,
  serial,
  text,
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
  userId: integer("user_id").references(() => users.id),
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
}));

export const providerProfiles = pgTable("provider_profiles", {
  id: serial("id").primaryKey(),
  providerId: integer("provider_id").references(() => providers.id),
  avatar: text("avatar"),
  hasCertificate: boolean("has_certificate"),
  experience: numeric("experience"),
  serviceRadius: numeric("service_radius"),
  averageRating: numeric("average_rating"),
  ratingsCounter: integer("ratings_counter"),


});

export const serviceDescriptions = pgTable("service_descriptions", {
  id: serial("id").primaryKey(),
  category: varchar("category", { length: 25 }).notNull(),
  service: varchar("service", { length: 25 }).notNull(),
  description: text("description").notNull(),
  unit: text("unit").notNull(),
  duration: numeric("duration", { precision: 3, scale: 2 }).notNull(),
  personnel: integer("personnel").notNull(),
  included: text("included").notNull(),
});

export const serviceProfiles = pgTable("serviceProfiles", {
  id: serial("id").primaryKey(),
  serviceId: integer("service_id").references(() => serviceDescriptions.id),
  price: numeric("price")
});
