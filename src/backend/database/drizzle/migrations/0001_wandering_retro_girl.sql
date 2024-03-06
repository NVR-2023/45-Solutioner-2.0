DO $$ BEGIN
 CREATE TYPE "service_recurrence" AS ENUM('once', 'daily', 'weekly', 'monthly');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "service_requests" ADD COLUMN "service_recurrence" "service_recurrence";