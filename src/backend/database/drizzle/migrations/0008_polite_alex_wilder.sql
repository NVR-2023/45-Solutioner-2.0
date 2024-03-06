DO $$ BEGIN
 CREATE TYPE "days_of_week" AS ENUM('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
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
ALTER TABLE "provider_availabilities" ALTER COLUMN "time_slot" SET DATA TYPE time_slots;--> statement-breakpoint
ALTER TABLE "provider_availabilities" DROP COLUMN IF EXISTS "day";