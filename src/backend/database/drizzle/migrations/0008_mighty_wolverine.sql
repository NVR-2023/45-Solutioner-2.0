ALTER TABLE "users" ADD COLUMN "hashed_password" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "b_modified_at" timestamp DEFAULT now();