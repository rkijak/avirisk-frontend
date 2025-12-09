import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation } from "@tanstack/react-query";
import { isUnauthorizedError } from "@/lib/authUtils";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Plane, LogOut, Users, ClipboardCheck, History, 
  CheckCircle2, XCircle, Clock, Award, ChevronRight,
  GraduationCap, AlertCircle
} from "lucide-react";
import { format } from "date-fns";
import type { User, FlightLog, CfiEndorsement, CfiStudentRelationship, ProficiencyScore } from "@shared/schema";

interface StudentWithDetails extends CfiStudentRelationship {
  student: User;
  profile: any;
  proficiency: ProficiencyScore | null;
}

interface FlightWithDetails extends FlightLog {
  pilot: User;
  maneuvers: any[];
}

interface PendingReviews {
  flights: FlightWithDetails[];
  maneuvers: any[];
}

interface EndorsementWithDetails extends CfiEndorsement {
  pilot: User;
}

function StudentCard({ data }: { data: StudentWithDetails }) {
  const { student, proficiency } = data;
  
  const userInitials = student?.firstName && student?.lastName 
    ? `${student.firstName[0]}${student.lastName[0]}`.toUpperCase()
    : student?.email?.[0]?.toUpperCase() || "S";

  return (
    <Card className="hover-elevate">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={student?.profileImageUrl || undefined} />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-medium">
              {student?.firstName && student?.lastName 
                ? `${student.firstName} ${student.lastName}`
                : student?.email || "Unknown Student"}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary" className="text-xs">
                Score: {proficiency?.overallScore || 0}%
              </Badge>
              <Badge 
                variant="outline" 
                className={
                  proficiency?.discountTier === "gold" 
                    ? "border-amber-500/50 text-amber-400"
                    : proficiency?.discountTier === "silver"
                    ? "border-gray-400/50 text-gray-300"
                    : proficiency?.discountTier === "bronze"
                    ? "border-orange-500/50 text-orange-400"
                    : ""
                }
              >
                {proficiency?.discountTier || "No"} Tier
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function PendingFlightCard({ 
  flight, 
  onVerify 
}: { 
  flight: FlightWithDetails;
  onVerify: (flightId: string, status: string) => void;
}) {
  const [showReviewDialog, setShowReviewDialog] = useState(false);
  const [reviewNotes, setReviewNotes] = useState("");
  
  const pilot = flight.pilot;
  const pilotName = pilot?.firstName && pilot?.lastName 
    ? `${pilot.firstName} ${pilot.lastName}`
    : pilot?.email || "Unknown Pilot";

  return (
    <>
      <Card className="hover-elevate">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-md bg-primary/10">
                <Plane className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">
                  {flight.departureAirport || "N/A"} → {flight.arrivalAirport || "N/A"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {pilotName} • {flight.aircraftType} ({flight.aircraftTailNumber})
                </p>
                <p className="text-xs text-muted-foreground">
                  {format(new Date(flight.flightDate), "MMM d, yyyy 'at' h:mm a")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowReviewDialog(true)}
                data-testid={`button-review-flight-${flight.id}`}
              >
                Review
              </Button>
            </div>
          </div>
          {flight.maneuvers && flight.maneuvers.length > 0 && (
            <div className="mt-3 pt-3 border-t">
              <p className="text-xs text-muted-foreground mb-2">Detected Maneuvers:</p>
              <div className="flex gap-2 flex-wrap">
                {flight.maneuvers.map((m: any) => (
                  <Badge key={m.id} variant="secondary" className="text-xs">
                    {m.maneuverType.replace("_", " ")}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={showReviewDialog} onOpenChange={setShowReviewDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Review Flight</DialogTitle>
            <DialogDescription>
              Verify this flight for {pilotName}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Route</p>
                <p className="font-medium">{flight.departureAirport} → {flight.arrivalAirport}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Aircraft</p>
                <p className="font-medium">{flight.aircraftType} ({flight.aircraftTailNumber})</p>
              </div>
              <div>
                <p className="text-muted-foreground">Date</p>
                <p className="font-medium">{format(new Date(flight.flightDate), "MMM d, yyyy")}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Duration</p>
                <p className="font-medium">{flight.flightDuration || "N/A"} hrs</p>
              </div>
            </div>
            {flight.notes && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pilot Notes</p>
                <p className="text-sm bg-muted/50 p-2 rounded">{flight.notes}</p>
              </div>
            )}
            <div>
              <p className="text-sm text-muted-foreground mb-1">Review Notes (optional)</p>
              <Textarea 
                value={reviewNotes}
                onChange={(e) => setReviewNotes(e.target.value)}
                placeholder="Add any notes about this verification..."
                className="resize-none"
              />
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button 
              variant="destructive" 
              onClick={() => {
                onVerify(flight.id, "rejected");
                setShowReviewDialog(false);
              }}
            >
              <XCircle className="w-4 h-4 mr-2" />
              Reject
            </Button>
            <Button 
              onClick={() => {
                onVerify(flight.id, "verified");
                setShowReviewDialog(false);
              }}
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Verify
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function EndorsementCard({ endorsement }: { endorsement: EndorsementWithDetails }) {
  const pilot = endorsement.pilot;
  const pilotName = pilot?.firstName && pilot?.lastName 
    ? `${pilot.firstName} ${pilot.lastName}`
    : pilot?.email || "Unknown Pilot";

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-md bg-emerald-500/10">
              <Award className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <p className="font-medium">{endorsement.endorsementType.replace("_", " ")}</p>
              <p className="text-sm text-muted-foreground">{pilotName}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {format(new Date(endorsement.endorsedAt), "MMM d, yyyy")}
          </p>
        </div>
        {endorsement.notes && (
          <p className="text-sm text-muted-foreground mt-2 pl-14">{endorsement.notes}</p>
        )}
      </CardContent>
    </Card>
  );
}

export default function CfiDashboard() {
  const { toast } = useToast();
  const { user: rawUser, isLoading: authLoading, isAuthenticated } = useAuth();
  const user = rawUser as User | undefined;

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
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
  }, [isAuthenticated, authLoading, toast]);

  const { data: roleData } = useQuery({
    queryKey: ["/api/user/role"],
    enabled: isAuthenticated,
  });

  const { data: rawStudents, isLoading: studentsLoading } = useQuery({
    queryKey: ["/api/cfi/students"],
    enabled: isAuthenticated && (roleData as any)?.role === "cfi",
  });
  const students = (rawStudents as StudentWithDetails[]) || [];

  const { data: rawPendingReviews } = useQuery({
    queryKey: ["/api/cfi/pending-reviews"],
    enabled: isAuthenticated && (roleData as any)?.role === "cfi",
  });
  const pendingReviews = (rawPendingReviews as PendingReviews) || { flights: [], maneuvers: [] };

  const { data: rawEndorsements } = useQuery({
    queryKey: ["/api/cfi/endorsements"],
    enabled: isAuthenticated && (roleData as any)?.role === "cfi",
  });
  const endorsements = (rawEndorsements as EndorsementWithDetails[]) || [];

  const verifyFlightMutation = useMutation({
    mutationFn: async ({ flightId, status }: { flightId: string; status: string }) => {
      return apiRequest("PATCH", `/api/cfi/flight/${flightId}/verify`, { status });
    },
    onSuccess: () => {
      toast({
        title: "Flight Verified",
        description: "The flight has been successfully verified.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/cfi/pending-reviews"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to verify flight",
        variant: "destructive",
      });
    },
  });

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  if (authLoading || studentsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if ((roleData as any)?.role !== "cfi") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <AlertCircle className="w-12 h-12 mx-auto text-destructive mb-4" />
            <h2 className="text-xl font-bold mb-2">CFI Access Required</h2>
            <p className="text-muted-foreground mb-4">
              You need a CFI account to access this dashboard.
            </p>
            <Button onClick={() => window.location.href = "/dashboard"}>
              Go to Pilot Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const userInitials = user?.firstName && user?.lastName 
    ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
    : user?.email?.[0]?.toUpperCase() || "C";

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Plane className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">AviRisk</span>
            <Badge variant="outline" className="ml-2 border-primary/50 text-primary">CFI</Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Avatar data-testid="avatar-cfi">
                <AvatarImage src={user?.profileImageUrl || undefined} />
                <AvatarFallback>{userInitials}</AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-sm font-medium" data-testid="text-cfi-name">
                  {user?.firstName && user?.lastName 
                    ? `${user.firstName} ${user.lastName}`
                    : user?.email}
                </p>
                <p className="text-xs text-muted-foreground">
                  CFI #{user?.cfiNumber || "N/A"}
                </p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={handleLogout}
              data-testid="button-logout"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Log Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="heading-cfi-dashboard">
            CFI Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage students, verify flights, and issue proficiency endorsements
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/10">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{students.length}</p>
                  <p className="text-sm text-muted-foreground">Active Students</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-amber-500/10">
                  <Clock className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{pendingReviews.flights.length}</p>
                  <p className="text-sm text-muted-foreground">Pending Reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-emerald-500/10">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{endorsements.length}</p>
                  <p className="text-sm text-muted-foreground">Endorsements Given</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-purple-500/10">
                  <GraduationCap className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {students.filter(s => (s.proficiency?.overallScore || 0) >= 80).length}
                  </p>
                  <p className="text-sm text-muted-foreground">Proficient Students</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList data-testid="tabs-cfi-dashboard">
            <TabsTrigger value="pending" data-testid="tab-pending">
              <ClipboardCheck className="w-4 h-4 mr-2" />
              Pending Reviews
              {pendingReviews.flights.length > 0 && (
                <Badge variant="secondary" className="ml-2">{pendingReviews.flights.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="students" data-testid="tab-students">
              <Users className="w-4 h-4 mr-2" />
              Students
            </TabsTrigger>
            <TabsTrigger value="endorsements" data-testid="tab-endorsements">
              <History className="w-4 h-4 mr-2" />
              Endorsements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" data-testid="tab-content-pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Flight Reviews</CardTitle>
                <CardDescription>
                  Review and verify student flights for proficiency tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                {pendingReviews.flights.length === 0 ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-500 mb-3" />
                    <p className="text-muted-foreground">All caught up!</p>
                    <p className="text-sm text-muted-foreground">No pending flight reviews</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pendingReviews.flights.map((flight) => (
                      <PendingFlightCard 
                        key={flight.id} 
                        flight={flight}
                        onVerify={(flightId, status) => 
                          verifyFlightMutation.mutate({ flightId, status })
                        }
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" data-testid="tab-content-students">
            <Card>
              <CardHeader>
                <CardTitle>Your Students</CardTitle>
                <CardDescription>
                  Manage and track the progress of your students
                </CardDescription>
              </CardHeader>
              <CardContent>
                {students.length === 0 ? (
                  <div className="text-center py-8">
                    <Users className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                    <p className="text-muted-foreground">No students yet</p>
                    <p className="text-sm text-muted-foreground">
                      Students will appear here once they're assigned to you
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {students.map((student) => (
                      <StudentCard key={student.id} data={student} />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endorsements" data-testid="tab-content-endorsements">
            <Card>
              <CardHeader>
                <CardTitle>Endorsement History</CardTitle>
                <CardDescription>
                  Past proficiency endorsements you've issued
                </CardDescription>
              </CardHeader>
              <CardContent>
                {endorsements.length === 0 ? (
                  <div className="text-center py-8">
                    <Award className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                    <p className="text-muted-foreground">No endorsements yet</p>
                    <p className="text-sm text-muted-foreground">
                      Endorsements will appear here once you verify flights
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {endorsements.map((endorsement) => (
                      <EndorsementCard key={endorsement.id} endorsement={endorsement} />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
