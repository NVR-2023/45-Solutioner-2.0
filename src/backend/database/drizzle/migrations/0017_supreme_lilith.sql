ALTER TABLE "providers" ADD COLUMN "email_verified_at" timestamp;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "email_verified_at" timestamp;