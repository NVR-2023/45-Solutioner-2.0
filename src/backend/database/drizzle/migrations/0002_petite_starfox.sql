CREATE TABLE IF NOT EXISTS "provider_addresses" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" integer NOT NULL,
	"street" text,
	"apartment" varchar(25),
	"city" varchar(25),
	"state" varchar(25),
	"country" varchar(25),
	"latitude" numeric NOT NULL,
	"longitude" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "provider_availabilities" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" integer NOT NULL,
	"day" integer,
	"time_slot" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "provider_notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" integer NOT NULL,
	"title" varchar(25),
	"message" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"read_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "provider_profiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" integer NOT NULL,
	"avatar" text,
	"has_certificate" boolean,
	"experience" numeric,
	"service_radius" numeric,
	"average_rating" numeric,
	"ratings_counter" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "services_provided" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" integer NOT NULL,
	"service" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "providers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"modifiedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "serviceProfiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"service_id" integer NOT NULL,
	"price" numeric,
	"sale" numeric,
	"sale_expires_by" date
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "service_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"user_address_id" integer NOT NULL,
	"provider_id" integer,
	"service_id" integer NOT NULL,
	"time" time,
	"date" date,
	"recurrence" integer,
	"verbal_password" varchar(25),
	"qr_password" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "services" (
	"id" serial PRIMARY KEY NOT NULL,
	"category" varchar(25) NOT NULL,
	"service" varchar(25) NOT NULL,
	"description" varchar(120) NOT NULL,
	"unit" varchar(120) NOT NULL,
	"duration" numeric(3, 2) NOT NULL,
	"personnel" integer NOT NULL,
	"included" varchar(120) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_addresses" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"is_primary" boolean,
	"street" text,
	"apartment" varchar,
	"city" varchar(25),
	"state" varchar(25),
	"country" varchar(25),
	"latitude" numeric NOT NULL,
	"longitude" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_exclusions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"provider_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"title" varchar(25),
	"message" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"read_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_profiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"avatar" text,
	"must_have_certificate" boolean,
	"required_experience" numeric,
	"required_rating" numeric
);
--> statement-breakpoint
DROP TABLE "service_descriptions";--> statement-breakpoint
DROP INDEX IF EXISTS "unique_idx";--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "providers_unique_idx" ON "providers" ("email");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "users_unique_idx" ON "users" ("email");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "provider_addresses" ADD CONSTRAINT "provider_addresses_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "provider_availabilities" ADD CONSTRAINT "provider_availabilities_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "provider_notifications" ADD CONSTRAINT "provider_notifications_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "provider_profiles" ADD CONSTRAINT "provider_profiles_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "services_provided" ADD CONSTRAINT "services_provided_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "services_provided" ADD CONSTRAINT "services_provided_service_services_id_fk" FOREIGN KEY ("service") REFERENCES "services"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "serviceProfiles" ADD CONSTRAINT "serviceProfiles_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "service_requests" ADD CONSTRAINT "service_requests_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "service_requests" ADD CONSTRAINT "service_requests_user_address_id_user_addresses_id_fk" FOREIGN KEY ("user_address_id") REFERENCES "user_addresses"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "service_requests" ADD CONSTRAINT "service_requests_provider_id_users_id_fk" FOREIGN KEY ("provider_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "service_requests" ADD CONSTRAINT "service_requests_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_addresses" ADD CONSTRAINT "user_addresses_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_exclusions" ADD CONSTRAINT "user_exclusions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_exclusions" ADD CONSTRAINT "user_exclusions_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
