CREATE TABLE IF NOT EXISTS "total_number_of_services" (
	"id" serial PRIMARY KEY NOT NULL,
	"total_number_of_services_requested" integer DEFAULT 0,
	"total_number_of_recurrent_services_requested" integer DEFAULT 0,
	"total_number:of_services_cancelled" integer DEFAULT 0,
	"total_number:of_services_executed" integer DEFAULT 0
);
--> statement-breakpoint
ALTER TABLE "services" ALTER COLUMN "category" SET DATA TYPE varchar(30);--> statement-breakpoint
ALTER TABLE "services" ALTER COLUMN "service" SET DATA TYPE varchar(30);--> statement-breakpoint
ALTER TABLE "services" ALTER COLUMN "description" SET DATA TYPE varchar(300);--> statement-breakpoint
ALTER TABLE "services" ALTER COLUMN "unit" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "service_profiles" ADD COLUMN "number_of_requests" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "service_profiles" ADD COLUMN "popularity" numeric;