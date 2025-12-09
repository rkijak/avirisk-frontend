import { sql } from "drizzle-orm";
import { 
  pgTable, 
  text, 
  varchar, 
  timestamp, 
  integer,
  boolean,
  index,
  jsonb,
  real
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const userRoles = ["pilot", "cfi", "admin"] as const;
export type UserRole = typeof userRoles[number];

export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  password: varchar("password"),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  role: varchar("role").default("pilot"),
  cfiNumber: varchar("cfi_number"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  password: true,
  firstName: true,
  lastName: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;

export const pilotProfiles = pgTable("pilot_profiles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: "cascade" }).unique(),
  
  dateOfBirth: varchar("date_of_birth"),
  address: text("address"),
  city: text("city"),
  state: text("state"),
  zipCode: text("zip_code"),
  homePhone: text("home_phone"),
  workPhone: text("work_phone"),
  employer: text("employer"),
  dateEmployed: varchar("date_employed"),
  position: text("position"),
  
  airmenCertificateNo: text("airmen_certificate_no"),
  certificateStudent: boolean("certificate_student").default(false),
  certificatePrivate: boolean("certificate_private").default(false),
  certificateCommercial: boolean("certificate_commercial").default(false),
  certificateAtp: boolean("certificate_atp").default(false),
  certificateInstructor: boolean("certificate_instructor").default(false),
  
  ratingSingleEngineLand: boolean("rating_single_engine_land").default(false),
  ratingMultiEngineLand: boolean("rating_multi_engine_land").default(false),
  ratingSingleEngineSea: boolean("rating_single_engine_sea").default(false),
  ratingMultiEngineSea: boolean("rating_multi_engine_sea").default(false),
  ratingInstrument: boolean("rating_instrument").default(false),
  ratingRotorcraft: boolean("rating_rotorcraft").default(false),
  ratingGlider: boolean("rating_glider").default(false),
  ratingLighterThanAir: boolean("rating_lighter_than_air").default(false),
  ratingCenterlineThrust: boolean("rating_centerline_thrust").default(false),
  ratingMultiEngineInstructor: boolean("rating_multi_engine_instructor").default(false),
  ratingAPMechanic: boolean("rating_ap_mechanic").default(false),
  ratingAircraftInspector: boolean("rating_aircraft_inspector").default(false),
  typeRatings: text("type_ratings"),
  otherRatings: text("other_ratings"),
  
  hoursTotal: integer("hours_total").default(0),
  hoursTailwheel: integer("hours_tailwheel").default(0),
  hoursRetractable: integer("hours_retractable").default(0),
  hoursMultiEngine: integer("hours_multi_engine").default(0),
  hoursTurboprop: integer("hours_turboprop").default(0),
  hoursPressurized: integer("hours_pressurized").default(0),
  hoursJet: integer("hours_jet").default(0),
  hoursRotorcraft: integer("hours_rotorcraft").default(0),
  hoursInstrumentActual: integer("hours_instrument_actual").default(0),
  hoursInstrumentSimulated: integer("hours_instrument_simulated").default(0),
  hoursInstructor: integer("hours_instructor").default(0),
  hoursSea: integer("hours_sea").default(0),
  hoursGlider: integer("hours_glider").default(0),
  
  hoursLast12Total: integer("hours_last12_total").default(0),
  hoursLast12Tailwheel: integer("hours_last12_tailwheel").default(0),
  hoursLast12Retractable: integer("hours_last12_retractable").default(0),
  hoursLast12MultiEngine: integer("hours_last12_multi_engine").default(0),
  hoursLast12Turboprop: integer("hours_last12_turboprop").default(0),
  hoursLast12Pressurized: integer("hours_last12_pressurized").default(0),
  hoursLast12Jet: integer("hours_last12_jet").default(0),
  hoursLast12Rotorcraft: integer("hours_last12_rotorcraft").default(0),
  hoursLast12InstrumentActual: integer("hours_last12_instrument_actual").default(0),
  hoursLast12InstrumentSimulated: integer("hours_last12_instrument_simulated").default(0),
  hoursLast12Instructor: integer("hours_last12_instructor").default(0),
  hoursLast12Sea: integer("hours_last12_sea").default(0),
  hoursLast12Glider: integer("hours_last12_glider").default(0),
  
  hoursLast90Total: integer("hours_last90_total").default(0),
  hoursLast90Tailwheel: integer("hours_last90_tailwheel").default(0),
  hoursLast90Retractable: integer("hours_last90_retractable").default(0),
  hoursLast90MultiEngine: integer("hours_last90_multi_engine").default(0),
  hoursLast90Turboprop: integer("hours_last90_turboprop").default(0),
  hoursLast90Pressurized: integer("hours_last90_pressurized").default(0),
  hoursLast90Jet: integer("hours_last90_jet").default(0),
  hoursLast90Rotorcraft: integer("hours_last90_rotorcraft").default(0),
  hoursLast90InstrumentActual: integer("hours_last90_instrument_actual").default(0),
  hoursLast90InstrumentSimulated: integer("hours_last90_instrument_simulated").default(0),
  hoursLast90Instructor: integer("hours_last90_instructor").default(0),
  hoursLast90Sea: integer("hours_last90_sea").default(0),
  hoursLast90Glider: integer("hours_last90_glider").default(0),
  
  lastBiennialReviewDate: varchar("last_biennial_review_date"),
  lastBiennialReviewModel: text("last_biennial_review_model"),
  medicalCertificateClass: varchar("medical_certificate_class"),
  medicalCertificateDate: varchar("medical_certificate_date"),
  medicalWaiversLimitations: boolean("medical_waivers_limitations").default(false),
  medicalWaiversDetails: text("medical_waivers_details"),
  
  hasAccidentsIncidents: boolean("has_accidents_incidents").default(false),
  accidentsIncidentsDetails: text("accidents_incidents_details"),
  hasCitations: boolean("has_citations").default(false),
  citationsDetails: text("citations_details"),
  hasFelonyConviction: boolean("has_felony_conviction").default(false),
  felonyConvictionDetails: text("felony_conviction_details"),
  hasDuiArrest: boolean("has_dui_arrest").default(false),
  duiArrestDetails: text("dui_arrest_details"),
  hasInsuranceCancellation: boolean("has_insurance_cancellation").default(false),
  insuranceCancellationDetails: text("insurance_cancellation_details"),
  hasFinancialInterest: boolean("has_financial_interest").default(false),
  
  insuredAircraftModels: jsonb("insured_aircraft_models"),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

export const insertPilotProfileSchema = createInsertSchema(pilotProfiles).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertPilotProfile = z.infer<typeof insertPilotProfileSchema>;
export type PilotProfile = typeof pilotProfiles.$inferSelect;

export const flightVerificationStatus = ["pending", "verified", "rejected"] as const;
export type FlightVerificationStatus = typeof flightVerificationStatus[number];

export const maneuverTypes = ["steep_turns", "slow_flight", "stall_recovery", "traffic_pattern"] as const;
export type ManeuverType = typeof maneuverTypes[number];

export const maneuverStatus = ["pending", "passed", "failed", "needs_review"] as const;
export type ManeuverStatus = typeof maneuverStatus[number];

export const flightLogs = pgTable("flight_logs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  pilotId: varchar("pilot_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  
  flightDate: timestamp("flight_date").notNull(),
  departureAirport: varchar("departure_airport"),
  arrivalAirport: varchar("arrival_airport"),
  aircraftTailNumber: varchar("aircraft_tail_number"),
  aircraftType: varchar("aircraft_type"),
  flightDuration: real("flight_duration"),
  
  flightAwareId: varchar("flightaware_id"),
  verificationStatus: varchar("verification_status").default("pending"),
  verifiedAt: timestamp("verified_at"),
  verifiedBy: varchar("verified_by"),
  
  notes: text("notes"),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertFlightLogSchema = createInsertSchema(flightLogs).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertFlightLog = z.infer<typeof insertFlightLogSchema>;
export type FlightLog = typeof flightLogs.$inferSelect;

export const maneuverChecks = pgTable("maneuver_checks", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  flightLogId: varchar("flight_log_id").notNull().references(() => flightLogs.id, { onDelete: "cascade" }),
  pilotId: varchar("pilot_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  
  maneuverType: varchar("maneuver_type").notNull(),
  status: varchar("status").default("pending"),
  score: integer("score"),
  
  bankAngle: real("bank_angle"),
  altitudeDeviation: real("altitude_deviation"),
  speedDeviation: real("speed_deviation"),
  headingDeviation: real("heading_deviation"),
  
  detectedAt: timestamp("detected_at"),
  latitude: real("latitude"),
  longitude: real("longitude"),
  
  reviewedBy: varchar("reviewed_by").references(() => users.id),
  reviewedAt: timestamp("reviewed_at"),
  reviewNotes: text("review_notes"),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertManeuverCheckSchema = createInsertSchema(maneuverChecks).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertManeuverCheck = z.infer<typeof insertManeuverCheckSchema>;
export type ManeuverCheck = typeof maneuverChecks.$inferSelect;

export const proficiencyScores = pgTable("proficiency_scores", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  pilotId: varchar("pilot_id").notNull().references(() => users.id, { onDelete: "cascade" }).unique(),
  
  overallScore: integer("overall_score").default(0),
  steepTurnsScore: integer("steep_turns_score").default(0),
  slowFlightScore: integer("slow_flight_score").default(0),
  stallRecoveryScore: integer("stall_recovery_score").default(0),
  trafficPatternScore: integer("traffic_pattern_score").default(0),
  
  discountTier: varchar("discount_tier").default("none"),
  discountPercentage: integer("discount_percentage").default(0),
  
  lastCheckDate: timestamp("last_check_date"),
  nextCheckDue: timestamp("next_check_due"),
  
  totalFlightsVerified: integer("total_flights_verified").default(0),
  totalManeuversCompleted: integer("total_maneuvers_completed").default(0),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertProficiencyScoreSchema = createInsertSchema(proficiencyScores).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertProficiencyScore = z.infer<typeof insertProficiencyScoreSchema>;
export type ProficiencyScore = typeof proficiencyScores.$inferSelect;

export const cfiStudentRelationships = pgTable("cfi_student_relationships", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  cfiId: varchar("cfi_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  studentId: varchar("student_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  
  status: varchar("status").default("active"),
  startDate: timestamp("start_date").defaultNow(),
  endDate: timestamp("end_date"),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertCfiStudentRelationshipSchema = createInsertSchema(cfiStudentRelationships).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertCfiStudentRelationship = z.infer<typeof insertCfiStudentRelationshipSchema>;
export type CfiStudentRelationship = typeof cfiStudentRelationships.$inferSelect;

export const cfiEndorsements = pgTable("cfi_endorsements", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  cfiId: varchar("cfi_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  pilotId: varchar("pilot_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  flightLogId: varchar("flight_log_id").references(() => flightLogs.id, { onDelete: "cascade" }),
  
  endorsementType: varchar("endorsement_type").notNull(),
  notes: text("notes"),
  
  endorsedAt: timestamp("endorsed_at").defaultNow().notNull(),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCfiEndorsementSchema = createInsertSchema(cfiEndorsements).omit({
  id: true,
  createdAt: true,
});

export type InsertCfiEndorsement = z.infer<typeof insertCfiEndorsementSchema>;
export type CfiEndorsement = typeof cfiEndorsements.$inferSelect;
