DO $$ BEGIN
 CREATE TYPE "days_of_week" AS ENUM('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "service_request_status" AS ENUM('expired', 'requested', 'accepted', 'safeguarded', 'provided', 'renewed', 'reviewed', 'completed', 'sanctioned', 'cancelled');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "time_slots" AS ENUM('morning', 'afternoon', 'evening');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "total_number_of_services" RENAME COLUMN "total_number:of_services_cancelled" TO "total_number_of_services_cancelled";--> statement-breakpoint
ALTER TABLE "total_number_of_services" RENAME COLUMN "total_number:of_services_executed" TO "total_number_of_services_executed";--> statement-breakpoint
ALTER TABLE "provider_availabilities" ALTER COLUMN "day" SET DATA TYPE days_of_week;--> statement-breakpoint
ALTER TABLE "provider_availabilities" ALTER COLUMN "day" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "provider_availabilities" ALTER COLUMN "time_slot" SET DATA TYPE time_slots;--> statement-breakpoint
ALTER TABLE "provider_availabilities" ALTER COLUMN "time_slot" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "provider_notifications" ALTER COLUMN "title" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "provider_notifications" ALTER COLUMN "read_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "notifications" ALTER COLUMN "title" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "notifications" ALTER COLUMN "read_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "service_requests" ADD COLUMN "status" "service_request_status" DEFAULT 'requested' NOT NULL;