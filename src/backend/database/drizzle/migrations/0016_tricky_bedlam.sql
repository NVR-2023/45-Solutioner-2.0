CREATE TABLE IF NOT EXISTS "provider_sessions" (
	"id" text PRIMARY KEY NOT NULL,
	"provider_id" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
ALTER TABLE "providers" RENAME COLUMN "password" TO "hashed_password";--> statement-breakpoint
ALTER TABLE "providers" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "providers" RENAME COLUMN "modifiedAt" TO "modified_at";--> statement-breakpoint
ALTER TABLE "providers" ALTER COLUMN "hashed_password" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "providers" ADD COLUMN "google_id" varchar(255);--> statement-breakpoint
ALTER TABLE "providers" ADD COLUMN "facebook_id" varchar(255);--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "provider_sessions" ADD CONSTRAINT "provider_sessions_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
