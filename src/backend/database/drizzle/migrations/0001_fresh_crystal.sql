CREATE TABLE IF NOT EXISTS "service_descriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"category" varchar(25) NOT NULL,
	"service" varchar(25) NOT NULL,
	"description" text NOT NULL,
	"unit" text NOT NULL,
	"duration" numeric(3, 2) NOT NULL,
	"personnel" integer NOT NULL,
	"included" text NOT NULL,
	"price" numeric NOT NULL,
	"sale" numeric,
	"date_sale_expires" timestamp,
	"popularity" numeric
);
