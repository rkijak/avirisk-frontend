import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plane, X } from "lucide-react";

const flightLogSchema = z.object({
  flightDate: z.string().min(1, "Flight date is required"),
  departureAirport: z.string().min(1, "Departure airport is required"),
  arrivalAirport: z.string().min(1, "Arrival airport is required"),
  aircraftTailNumber: z.string().min(1, "Tail number is required"),
  aircraftType: z.string().min(1, "Aircraft type is required"),
  flightDuration: z.string().optional(),
  notes: z.string().optional(),
});

type FlightLogFormData = z.infer<typeof flightLogSchema>;

interface FlightLogFormProps {
  onComplete: () => void;
}

export default function FlightLogForm({ onComplete }: FlightLogFormProps) {
  const { toast } = useToast();

  const form = useForm<FlightLogFormData>({
    resolver: zodResolver(flightLogSchema),
    defaultValues: {
      flightDate: new Date().toISOString().split("T")[0],
      departureAirport: "",
      arrivalAirport: "",
      aircraftTailNumber: "",
      aircraftType: "SR22",
      flightDuration: "",
      notes: "",
    },
  });

  const createFlightMutation = useMutation({
    mutationFn: async (data: FlightLogFormData) => {
      return apiRequest("POST", "/api/flight-logs", {
        ...data,
        flightDuration: data.flightDuration ? parseFloat(data.flightDuration) : null,
      });
    },
    onSuccess: () => {
      toast({
        title: "Flight Logged",
        description: "Your flight has been submitted for verification.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/flight-logs"] });
      onComplete();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to log flight",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FlightLogFormData) => {
    createFlightMutation.mutate(data);
  };

  const aircraftTypes = [
    { value: "SR22", label: "Cirrus SR22" },
    { value: "SR20", label: "Cirrus SR20" },
    { value: "C172", label: "Cessna 172" },
    { value: "C182", label: "Cessna 182" },
    { value: "PA28", label: "Piper PA-28" },
    { value: "PA32", label: "Piper PA-32" },
    { value: "BE36", label: "Beechcraft Bonanza" },
    { value: "OTHER", label: "Other" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Plane className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-medium">Log New Flight</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onComplete}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="flightDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Flight Date <span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Input 
                      type="date" 
                      {...field} 
                      data-testid="input-flight-date"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="flightDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration (hours)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      step="0.1" 
                      placeholder="1.5" 
                      {...field}
                      data-testid="input-flight-duration"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="departureAirport"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Departure Airport <span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="KJFK" 
                      {...field}
                      className="uppercase"
                      data-testid="input-departure-airport"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="arrivalAirport"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Arrival Airport <span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="KLAX" 
                      {...field}
                      className="uppercase"
                      data-testid="input-arrival-airport"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="aircraftTailNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tail Number <span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="N12345" 
                      {...field}
                      className="uppercase"
                      data-testid="input-tail-number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="aircraftType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aircraft Type <span className="text-destructive">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-aircraft-type">
                        <SelectValue placeholder="Select aircraft type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {aircraftTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes (optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any additional notes about the flight..."
                    className="resize-none"
                    {...field}
                    data-testid="input-notes"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onComplete}
              data-testid="button-cancel-flight"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={createFlightMutation.isPending}
              data-testid="button-submit-flight"
            >
              {createFlightMutation.isPending ? "Submitting..." : "Submit Flight"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
