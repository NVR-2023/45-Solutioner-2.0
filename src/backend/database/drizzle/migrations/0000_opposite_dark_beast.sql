DO $$ BEGIN
 CREATE TYPE "public"."days_of_week" AS ENUM('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."service_recurrence" AS ENUM('once', 'daily', 'weekly', 'monthly');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."service_request_status" AS ENUM('expired', 'requested', 'accepted', 'safeguarded', 'provided', 'renewed', 'reviewed', 'completed', 'sanctioned', 'cancelled');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."time_slots" AS ENUM('morning', 'afternoon', 'evening');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "provider_addresses" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" text NOT NULL,
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
	"provider_id" text NOT NULL,
	"day_of_week" "days_of_week" NOT NULL,
	"time_slot" "time_slots" NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "provider_notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" text NOT NULL,
	"title" varchar(50),
	"message" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"read_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "provider_profiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" text NOT NULL,
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
	"provider_id" text NOT NULL,
	"service" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "provider_sessions" (
	"id" text PRIMARY KEY NOT NULL,
	"provider_id" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "providers" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"email_verified_at" timestamp,
	"hashed_password" text,
	"google_id" varchar(255),
	"facebook_id" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"modified_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "service_profiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"service_id" integer NOT NULL,
	"price" numeric,
	"sale" numeric,
	"sale_expires_by" date,
	"number_of_requests" integer DEFAULT 0,
	"popularity" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "service_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"user_address_id" integer NOT NULL,
	"provider_id" text,
	"service_id" integer NOT NULL,
	"time_of_service" time,
	"date_of_service" date,
	"service_recurrence" "service_recurrence",
	"verbal_password" varchar(25),
	"qr_password" text,
	"status" "service_request_status" DEFAULT 'requested' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "services" (
	"id" serial PRIMARY KEY NOT NULL,
	"category" varchar(30) NOT NULL,
	"service" varchar(30) NOT NULL,
	"description" varchar(300) NOT NULL,
	"unit" varchar(300) NOT NULL,
	"duration" numeric(3, 2) NOT NULL,
	"personnel" integer NOT NULL,
	"included" varchar(120) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "total_number_of_services" (
	"id" serial PRIMARY KEY NOT NULL,
	"total_number_of_services_requested" integer DEFAULT 0,
	"total_number_of_recurrent_services_requested" integer DEFAULT 0,
	"total_number_of_services_cancelled" integer DEFAULT 0,
	"total_number_of_services_executed" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_addresses" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
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
	"user_id" text NOT NULL,
	"provider_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"title" varchar(50),
	"message" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"read_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_profiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"avatar" text,
	"must_have_certificate" boolean,
	"required_experience" numeric,
	"required_rating" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_sessions" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"email_verified_at" timestamp,
	"hashed_password" text,
	"google_id" varchar(255),
	"facebook_id" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"modified_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "provider_addresses" ADD CONSTRAINT "provider_addresses_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "public"."providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "provider_availabilities" ADD CONSTRAINT "provider_availabilities_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "public"."providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "provider_notifications" ADD CONSTRAINT "provider_notifications_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "public"."providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "provider_profiles" ADD CONSTRAINT "provider_profiles_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "public"."providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "services_provided" ADD CONSTRAINT "services_provided_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "public"."providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "services_provided" ADD CONSTRAINT "services_provided_service_services_id_fk" FOREIGN KEY ("service") REFERENCES "public"."services"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "provider_sessions" ADD CONSTRAINT "provider_sessions_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "public"."providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "service_profiles" ADD CONSTRAINT "service_profiles_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "service_requests" ADD CONSTRAINT "service_requests_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "service_requests" ADD CONSTRAINT "service_requests_user_address_id_user_addresses_id_fk" FOREIGN KEY ("user_address_id") REFERENCES "public"."user_addresses"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "service_requests" ADD CONSTRAINT "service_requests_provider_id_users_id_fk" FOREIGN KEY ("provider_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "service_requests" ADD CONSTRAINT "service_requests_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_addresses" ADD CONSTRAINT "user_addresses_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_exclusions" ADD CONSTRAINT "user_exclusions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_exclusions" ADD CONSTRAINT "user_exclusions_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "public"."providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "providers_unique_idx" ON "providers" ("email");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "users_unique_idx" ON "users" ("email");