ALTER TABLE "users" ALTER COLUMN "hashed_password" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "password";
