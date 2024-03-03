ALTER TABLE "serviceProfiles" RENAME TO "service_profiles";--> statement-breakpoint
ALTER TABLE "service_profiles" DROP CONSTRAINT "serviceProfiles_service_id_services_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "service_profiles" ADD CONSTRAINT "service_profiles_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
