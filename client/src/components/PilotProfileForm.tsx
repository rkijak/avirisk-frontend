import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { insertPilotProfileSchema, type InsertPilotProfile, type PilotProfile } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Save, Loader2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface PilotProfileFormProps {
  profile?: PilotProfile;
}

export default function PilotProfileForm({ profile }: PilotProfileFormProps) {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState<string[]>(["personal"]);

  const form = useForm<InsertPilotProfile>({
    resolver: zodResolver(insertPilotProfileSchema),
    defaultValues: {
      dateOfBirth: profile?.dateOfBirth || "",
      address: profile?.address || "",
      city: profile?.city || "",
      state: profile?.state || "",
      zipCode: profile?.zipCode || "",
      homePhone: profile?.homePhone || "",
      workPhone: profile?.workPhone || "",
      employer: profile?.employer || "",
      dateEmployed: profile?.dateEmployed || "",
      position: profile?.position || "",
      airmenCertificateNo: profile?.airmenCertificateNo || "",
      
      // Certificates
      certificateStudent: profile?.certificateStudent || false,
      certificatePrivate: profile?.certificatePrivate || false,
      certificateCommercial: profile?.certificateCommercial || false,
      certificateAtp: profile?.certificateAtp || false,
      certificateInstructor: profile?.certificateInstructor || false,
      
      // Ratings
      ratingSingleEngineLand: profile?.ratingSingleEngineLand || false,
      ratingMultiEngineLand: profile?.ratingMultiEngineLand || false,
      ratingSingleEngineSea: profile?.ratingSingleEngineSea || false,
      ratingMultiEngineSea: profile?.ratingMultiEngineSea || false,
      ratingInstrument: profile?.ratingInstrument || false,
      ratingRotorcraft: profile?.ratingRotorcraft || false,
      ratingGlider: profile?.ratingGlider || false,
      ratingLighterThanAir: profile?.ratingLighterThanAir || false,
      ratingCenterlineThrust: profile?.ratingCenterlineThrust || false,
      ratingMultiEngineInstructor: profile?.ratingMultiEngineInstructor || false,
      ratingAPMechanic: profile?.ratingAPMechanic || false,
      ratingAircraftInspector: profile?.ratingAircraftInspector || false,
      typeRatings: profile?.typeRatings || "",
      otherRatings: profile?.otherRatings || "",
      
      // Total hours
      hoursTotal: profile?.hoursTotal || 0,
      hoursTailwheel: profile?.hoursTailwheel || 0,
      hoursRetractable: profile?.hoursRetractable || 0,
      hoursMultiEngine: profile?.hoursMultiEngine || 0,
      hoursTurboprop: profile?.hoursTurboprop || 0,
      hoursPressurized: profile?.hoursPressurized || 0,
      hoursJet: profile?.hoursJet || 0,
      hoursRotorcraft: profile?.hoursRotorcraft || 0,
      hoursInstrumentActual: profile?.hoursInstrumentActual || 0,
      hoursInstrumentSimulated: profile?.hoursInstrumentSimulated || 0,
      hoursInstructor: profile?.hoursInstructor || 0,
      hoursSea: profile?.hoursSea || 0,
      hoursGlider: profile?.hoursGlider || 0,
      
      // Last 12 months
      hoursLast12Total: profile?.hoursLast12Total || 0,
      hoursLast12Tailwheel: profile?.hoursLast12Tailwheel || 0,
      hoursLast12Retractable: profile?.hoursLast12Retractable || 0,
      hoursLast12MultiEngine: profile?.hoursLast12MultiEngine || 0,
      hoursLast12Turboprop: profile?.hoursLast12Turboprop || 0,
      hoursLast12Pressurized: profile?.hoursLast12Pressurized || 0,
      hoursLast12Jet: profile?.hoursLast12Jet || 0,
      hoursLast12Rotorcraft: profile?.hoursLast12Rotorcraft || 0,
      hoursLast12InstrumentActual: profile?.hoursLast12InstrumentActual || 0,
      hoursLast12InstrumentSimulated: profile?.hoursLast12InstrumentSimulated || 0,
      hoursLast12Instructor: profile?.hoursLast12Instructor || 0,
      hoursLast12Sea: profile?.hoursLast12Sea || 0,
      hoursLast12Glider: profile?.hoursLast12Glider || 0,
      
      // Last 90 days
      hoursLast90Total: profile?.hoursLast90Total || 0,
      hoursLast90Tailwheel: profile?.hoursLast90Tailwheel || 0,
      hoursLast90Retractable: profile?.hoursLast90Retractable || 0,
      hoursLast90MultiEngine: profile?.hoursLast90MultiEngine || 0,
      hoursLast90Turboprop: profile?.hoursLast90Turboprop || 0,
      hoursLast90Pressurized: profile?.hoursLast90Pressurized || 0,
      hoursLast90Jet: profile?.hoursLast90Jet || 0,
      hoursLast90Rotorcraft: profile?.hoursLast90Rotorcraft || 0,
      hoursLast90InstrumentActual: profile?.hoursLast90InstrumentActual || 0,
      hoursLast90InstrumentSimulated: profile?.hoursLast90InstrumentSimulated || 0,
      hoursLast90Instructor: profile?.hoursLast90Instructor || 0,
      hoursLast90Sea: profile?.hoursLast90Sea || 0,
      hoursLast90Glider: profile?.hoursLast90Glider || 0,
      
      // Medical & Reviews
      lastBiennialReviewDate: profile?.lastBiennialReviewDate || "",
      lastBiennialReviewModel: profile?.lastBiennialReviewModel || "",
      medicalCertificateClass: profile?.medicalCertificateClass || "",
      medicalCertificateDate: profile?.medicalCertificateDate || "",
      medicalWaiversLimitations: profile?.medicalWaiversLimitations || false,
      medicalWaiversDetails: profile?.medicalWaiversDetails || "",
      
      // History Questions
      hasAccidentsIncidents: profile?.hasAccidentsIncidents || false,
      accidentsIncidentsDetails: profile?.accidentsIncidentsDetails || "",
      hasCitations: profile?.hasCitations || false,
      citationsDetails: profile?.citationsDetails || "",
      hasFelonyConviction: profile?.hasFelonyConviction || false,
      felonyConvictionDetails: profile?.felonyConvictionDetails || "",
      hasDuiArrest: profile?.hasDuiArrest || false,
      duiArrestDetails: profile?.duiArrestDetails || "",
      hasInsuranceCancellation: profile?.hasInsuranceCancellation || false,
      insuranceCancellationDetails: profile?.insuranceCancellationDetails || "",
      hasFinancialInterest: profile?.hasFinancialInterest || false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertPilotProfile) => {
      const response = await fetch("/api/pilot-profile", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `${response.status}: ${response.statusText}`);
      }
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/pilot-profile"] });
      toast({
        title: "Profile Saved",
        description: "Your pilot profile has been updated successfully",
      });
    },
    onError: (error) => {
      if (isUnauthorizedError(error as Error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to save profile. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertPilotProfile) => {
    console.log("[PilotProfileForm] onSubmit called with data:", data);
    mutation.mutate(data);
  };

  const onError = (errors: any) => {
    console.error("[PilotProfileForm] Form validation errors:", errors);
    toast({
      title: "Validation Error",
      description: "Please check all fields and try again",
      variant: "destructive",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-6">
        <Accordion type="multiple" value={activeSection} onValueChange={setActiveSection}>
          {/* Personal Information */}
          <AccordionItem value="personal">
            <AccordionTrigger className="text-lg font-semibold" data-testid="accordion-personal">
              Personal Information
            </AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Birth</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} data-testid="input-dob" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="homePhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Home Phone</FormLabel>
                          <FormControl>
                            <Input {...field} data-testid="input-home-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-address" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input {...field} data-testid="input-city" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl>
                            <Input {...field} data-testid="input-state" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zip Code</FormLabel>
                          <FormControl>
                            <Input {...field} data-testid="input-zip" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Separator />

                  <div className="grid md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="employer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Employer</FormLabel>
                          <FormControl>
                            <Input {...field} data-testid="input-employer" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position</FormLabel>
                          <FormControl>
                            <Input {...field} data-testid="input-position" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dateEmployed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date Employed</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} data-testid="input-date-employed" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          {/* Certificates & Ratings */}
          <AccordionItem value="certificates">
            <AccordionTrigger className="text-lg font-semibold" data-testid="accordion-certificates">
              Certificates & Ratings
            </AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <FormField
                    control={form.control}
                    name="airmenCertificateNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Airmen Certificate Number</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-certificate-number" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <h4 className="font-medium mb-3">Current Certificates</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { name: "certificateStudent", label: "Student" },
                        { name: "certificatePrivate", label: "Private" },
                        { name: "certificateCommercial", label: "Commercial" },
                        { name: "certificateAtp", label: "Airline Transport" },
                        { name: "certificateInstructor", label: "Instructor" },
                      ].map((cert) => (
                        <FormField
                          key={cert.name}
                          control={form.control}
                          name={cert.name as keyof InsertPilotProfile}
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value as boolean}
                                  onCheckedChange={field.onChange}
                                  data-testid={`checkbox-${cert.name}`}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{cert.label}</FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-3">Ratings</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { name: "ratingSingleEngineLand", label: "Single Engine Land" },
                        { name: "ratingMultiEngineLand", label: "Multi Engine Land" },
                        { name: "ratingSingleEngineSea", label: "Single Engine Sea" },
                        { name: "ratingMultiEngineSea", label: "Multi Engine Sea" },
                        { name: "ratingInstrument", label: "Instrument" },
                        { name: "ratingRotorcraft", label: "Rotorcraft" },
                        { name: "ratingGlider", label: "Glider" },
                        { name: "ratingLighterThanAir", label: "Lighter Than Air" },
                        { name: "ratingCenterlineThrust", label: "Centerline Thrust" },
                        { name: "ratingMultiEngineInstructor", label: "Multi Engine Instructor" },
                        { name: "ratingAPMechanic", label: "A&P Mechanic" },
                        { name: "ratingAircraftInspector", label: "Aircraft Inspector" },
                      ].map((rating) => (
                        <FormField
                          key={rating.name}
                          control={form.control}
                          name={rating.name as keyof InsertPilotProfile}
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value as boolean}
                                  onCheckedChange={field.onChange}
                                  data-testid={`checkbox-${rating.name}`}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{rating.label}</FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="typeRatings"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type Ratings</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="e.g., B737, A320" data-testid="input-type-ratings" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="otherRatings"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Other Ratings</FormLabel>
                          <FormControl>
                            <Input {...field} data-testid="input-other-ratings" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          {/* Flight Hours */}
          <AccordionItem value="hours">
            <AccordionTrigger className="text-lg font-semibold" data-testid="accordion-hours">
              Flight Experience (Hours)
            </AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Total Hours</h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      <FormField control={form.control} name="hoursTotal" render={({ field: { value, onChange, ...field } }) => (
                        <FormItem>
                          <FormLabel>All Aircraft</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              {...field}
                              value={value ?? 0}
                              onChange={e => onChange(isNaN(e.target.valueAsNumber) ? 0 : e.target.valueAsNumber)} 
                              data-testid="input-hours-total" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="hoursTailwheel" render={({ field: { value, onChange, ...field } }) => (
                        <FormItem>
                          <FormLabel>Tailwheel</FormLabel>
                          <FormControl><Input type="number" {...field} value={value ?? 0} onChange={e => onChange(e.target.valueAsNumber || 0)} /></FormControl>
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="hoursRetractable" render={({ field: { value, onChange, ...field } }) => (
                        <FormItem>
                          <FormLabel>Retractable Gear</FormLabel>
                          <FormControl><Input type="number" {...field} value={value ?? 0} onChange={e => onChange(e.target.valueAsNumber || 0)} /></FormControl>
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="hoursMultiEngine" render={({ field: { value, onChange, ...field } }) => (
                        <FormItem>
                          <FormLabel>Multi-Engine</FormLabel>
                          <FormControl><Input type="number" {...field} value={value ?? 0} onChange={e => onChange(e.target.valueAsNumber || 0)} /></FormControl>
                        </FormItem>
                      )} />
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-3">Last 12 Months</h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      <FormField control={form.control} name="hoursLast12Total" render={({ field: { value, onChange, ...field } }) => (
                        <FormItem>
                          <FormLabel>Total</FormLabel>
                          <FormControl><Input type="number" {...field} value={value ?? 0} onChange={e => onChange(e.target.valueAsNumber || 0)} /></FormControl>
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="hoursLast12InstrumentActual" render={({ field: { value, onChange, ...field } }) => (
                        <FormItem>
                          <FormLabel>Instrument (Actual)</FormLabel>
                          <FormControl><Input type="number" {...field} value={value ?? 0} onChange={e => onChange(e.target.valueAsNumber || 0)} /></FormControl>
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="hoursLast12InstrumentSimulated" render={({ field: { value, onChange, ...field } }) => (
                        <FormItem>
                          <FormLabel>Instrument (Hood)</FormLabel>
                          <FormControl><Input type="number" {...field} value={value ?? 0} onChange={e => onChange(e.target.valueAsNumber || 0)} /></FormControl>
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="hoursLast90Total" render={({ field: { value, onChange, ...field } }) => (
                        <FormItem>
                          <FormLabel>Last 90 Days</FormLabel>
                          <FormControl><Input type="number" {...field} value={value ?? 0} onChange={e => onChange(e.target.valueAsNumber || 0)} /></FormControl>
                        </FormItem>
                      )} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          {/* Medical & Reviews */}
          <AccordionItem value="medical">
            <AccordionTrigger className="text-lg font-semibold" data-testid="accordion-medical">
              Medical Certificate & Flight Review
            </AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="lastBiennialReviewDate" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Biennial Review Date</FormLabel>
                        <FormControl><Input type="date" {...field} data-testid="input-biennial-date" /></FormControl>
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="lastBiennialReviewModel" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Aircraft Model Used</FormLabel>
                        <FormControl><Input {...field} data-testid="input-biennial-model" /></FormControl>
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="medicalCertificateClass" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Medical Certificate Class</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || ""}>
                          <FormControl>
                            <SelectTrigger data-testid="select-medical-class">
                              <SelectValue placeholder="Select class" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1st">1st Class</SelectItem>
                            <SelectItem value="2nd">2nd Class</SelectItem>
                            <SelectItem value="3rd">3rd Class</SelectItem>
                            <SelectItem value="BasicMed">BasicMed</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="medicalCertificateDate" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Medical Exam Date</FormLabel>
                        <FormControl><Input type="date" {...field} data-testid="input-medical-date" /></FormControl>
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="medicalWaiversLimitations" render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} data-testid="checkbox-medical-waivers" />
                      </FormControl>
                      <div className="space-y-1">
                        <FormLabel>Any waivers or limitations on your Medical Certificate?</FormLabel>
                      </div>
                    </FormItem>
                  )} />

                  {form.watch("medicalWaiversLimitations") && (
                    <FormField control={form.control} name="medicalWaiversDetails" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Waiver/Limitation Details</FormLabel>
                        <FormControl><Textarea {...field} rows={3} data-testid="textarea-medical-details" /></FormControl>
                      </FormItem>
                    )} />
                  )}
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          {/* History Questions */}
          <AccordionItem value="history">
            <AccordionTrigger className="text-lg font-semibold" data-testid="accordion-history">
              Insurance History & Disclosures
            </AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  {[
                    { name: "hasAccidentsIncidents", detailsName: "accidentsIncidentsDetails", label: "Any aircraft accidents or incidents?" },
                    { name: "hasCitations", detailsName: "citationsDetails", label: "Ever cited for violating flight regulations?" },
                    { name: "hasFelonyConviction", detailsName: "felonyConvictionDetails", label: "Ever convicted or pled guilty to a felony?" },
                    { name: "hasDuiArrest", detailsName: "duiArrestDetails", label: "Ever arrested for DUI/DWI?" },
                    { name: "hasInsuranceCancellation", detailsName: "insuranceCancellationDetails", label: "Insurance ever cancelled or declined?" },
                  ].map((question) => (
                    <div key={question.name} className="space-y-2">
                      <FormField control={form.control} name={question.name as keyof InsertPilotProfile} render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} data-testid={`checkbox-${question.name}`} />
                          </FormControl>
                          <FormLabel className="font-normal">{question.label}</FormLabel>
                        </FormItem>
                      )} />
                      
                      {form.watch(question.name as keyof InsertPilotProfile) && (
                        <FormField control={form.control} name={question.detailsName as keyof InsertPilotProfile} render={({ field }) => (
                          <FormItem>
                            <FormControl><Textarea {...field} rows={2} placeholder="Please provide details" data-testid={`textarea-${question.detailsName}`} /></FormControl>
                          </FormItem>
                        )} />
                      )}
                    </div>
                  ))}

                  <FormField control={form.control} name="hasFinancialInterest" render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} data-testid="checkbox-financial-interest" />
                      </FormControl>
                      <FormLabel className="font-normal">Do you have a financial interest in the aircraft?</FormLabel>
                    </FormItem>
                  )} />
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex justify-end gap-4">
          <Button type="submit" disabled={mutation.isPending} data-testid="button-save-profile">
            {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <Save className="w-4 h-4 mr-2" />
            Save Profile
          </Button>
        </div>
      </form>
    </Form>
  );
}
