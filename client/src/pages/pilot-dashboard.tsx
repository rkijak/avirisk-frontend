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
import { 
  Plane, LogOut, User as UserIcon, TrendingUp, Clock, 
  CheckCircle2, AlertCircle, Calendar, Target, Award,
  ChevronRight, Plus, RotateCcw
} from "lucide-react";
import PilotProfileForm from "@/components/PilotProfileForm";
import FlightLogForm from "@/components/FlightLogForm";
import type { User, PilotProfile, FlightLog, ProficiencyScore, ManeuverCheck } from "@shared/schema";
import { format, formatDistanceToNow, addMonths } from "date-fns";

function ProficiencyGauge({ score, size = "large" }: { score: number; size?: "small" | "large" }) {
  const radius = size === "large" ? 80 : 40;
  const strokeWidth = size === "large" ? 12 : 6;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-500";
    if (score >= 60) return "text-amber-500";
    return "text-red-500";
  };

  const getStrokeColor = (score: number) => {
    if (score >= 80) return "#10b981";
    if (score >= 60) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <div className="relative flex items-center justify-center">
      <svg 
        width={radius * 2 + strokeWidth * 2} 
        height={radius * 2 + strokeWidth * 2}
        className="transform -rotate-90"
      >
        <circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-muted/30"
        />
        <circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          stroke={getStrokeColor(score)}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className={`${size === "large" ? "text-4xl" : "text-xl"} font-bold ${getScoreColor(score)}`}>
          {score}
        </span>
        <span className="text-xs text-muted-foreground">/ 100</span>
      </div>
    </div>
  );
}

function ManeuverCard({ 
  title, 
  score, 
  status, 
  icon: Icon 
}: { 
  title: string; 
  score: number; 
  status: string;
  icon: any;
}) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "passed":
        return <Badge variant="default" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Passed</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "needs_review":
        return <Badge variant="outline" className="border-amber-500/50 text-amber-400">Needs Review</Badge>;
      default:
        return <Badge variant="outline">Not Started</Badge>;
    }
  };

  return (
    <Card className="hover-elevate">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-primary/10">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <span className="font-medium text-sm">{title}</span>
          </div>
          {getStatusBadge(status)}
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Score</span>
            <span className="font-medium">{score}/100</span>
          </div>
          <Progress value={score} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}

function DiscountDisplay({ tier, percentage }: { tier: string; percentage: number }) {
  const getTierInfo = (tier: string) => {
    switch (tier) {
      case "gold":
        return { label: "Gold", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" };
      case "silver":
        return { label: "Silver", color: "text-gray-300", bg: "bg-gray-500/10", border: "border-gray-500/30" };
      case "bronze":
        return { label: "Bronze", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" };
      default:
        return { label: "None", color: "text-muted-foreground", bg: "bg-muted/10", border: "border-muted/30" };
    }
  };

  const info = getTierInfo(tier);

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-md ${info.bg}`}>
              <Award className={`w-5 h-5 ${info.color}`} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Premium Discount</p>
              <p className={`text-2xl font-bold ${info.color}`}>{percentage}% OFF</p>
            </div>
          </div>
          <Badge variant="outline" className={`${info.border} ${info.color}`}>
            {info.label} Tier
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

function FlightLogTable({ logs }: { logs: FlightLog[] }) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge variant="default" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30"><CheckCircle2 className="w-3 h-3 mr-1" />Verified</Badge>;
      case "rejected":
        return <Badge variant="destructive"><AlertCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
    }
  };

  if (logs.length === 0) {
    return (
      <div className="text-center py-8">
        <Plane className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
        <p className="text-muted-foreground">No flights logged yet</p>
        <p className="text-sm text-muted-foreground">Submit your first flight for proficiency verification</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {logs.map((log) => (
        <div 
          key={log.id} 
          className="flex items-center justify-between p-4 rounded-lg border bg-card hover-elevate"
          data-testid={`flight-log-${log.id}`}
        >
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-md bg-primary/10">
              <Plane className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="font-medium">
                {log.departureAirport || "N/A"} → {log.arrivalAirport || "N/A"}
              </p>
              <p className="text-sm text-muted-foreground">
                {log.aircraftType} ({log.aircraftTailNumber}) • {format(new Date(log.flightDate), "MMM d, yyyy")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {getStatusBadge(log.verificationStatus || "pending")}
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

function NextCheckCountdown({ nextCheckDue }: { nextCheckDue: Date | null }) {
  const defaultDue = addMonths(new Date(), 1);
  const dueDate = nextCheckDue ? new Date(nextCheckDue) : defaultDue;
  const isOverdue = dueDate < new Date();
  const timeLeft = formatDistanceToNow(dueDate, { addSuffix: true });

  return (
    <Card className={isOverdue ? "border-destructive/50" : ""}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-md ${isOverdue ? "bg-destructive/10" : "bg-primary/10"}`}>
              <Calendar className={`w-5 h-5 ${isOverdue ? "text-destructive" : "text-primary"}`} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next Proficiency Check</p>
              <p className={`font-medium ${isOverdue ? "text-destructive" : ""}`}>
                {isOverdue ? "Overdue" : timeLeft}
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {format(dueDate, "MMM d, yyyy")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PilotDashboard() {
  const { toast } = useToast();
  const { user: rawUser, isLoading: authLoading, isAuthenticated } = useAuth();
  const user = rawUser as User | undefined;
  const [showFlightForm, setShowFlightForm] = useState(false);

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

  const { data: rawProfile, isLoading: profileLoading } = useQuery({
    queryKey: ["/api/pilot-profile"],
    enabled: isAuthenticated,
    retry: (failureCount, error) => {
      if (isUnauthorizedError(error as Error)) return false;
      return failureCount < 3;
    },
  });
  const profile = rawProfile as PilotProfile | undefined;

  const { data: rawProficiency } = useQuery({
    queryKey: ["/api/proficiency-score"],
    enabled: isAuthenticated,
  });
  const proficiency = rawProficiency as ProficiencyScore | undefined;

  const { data: rawFlightLogs } = useQuery({
    queryKey: ["/api/flight-logs"],
    enabled: isAuthenticated,
  });
  const flightLogs = (rawFlightLogs as FlightLog[]) || [];

  const { data: rawManeuverChecks } = useQuery({
    queryKey: ["/api/maneuver-checks"],
    enabled: isAuthenticated,
  });
  const maneuverChecks = (rawManeuverChecks as ManeuverCheck[]) || [];

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  if (authLoading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const userInitials = user?.firstName && user?.lastName 
    ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
    : user?.email?.[0]?.toUpperCase() || "P";

  const getManeuverStatus = (type: string) => {
    const check = maneuverChecks.find(m => m.maneuverType === type);
    return check?.status || "not_started";
  };

  const getManeuverScore = (type: string) => {
    const check = maneuverChecks.find(m => m.maneuverType === type);
    return check?.score || 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Plane className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">AviRisk</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Avatar data-testid="avatar-user">
                <AvatarImage src={user?.profileImageUrl || undefined} />
                <AvatarFallback>{userInitials}</AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-sm font-medium" data-testid="text-user-name">
                  {user?.firstName && user?.lastName 
                    ? `${user.firstName} ${user.lastName}`
                    : user?.email}
                </p>
                <p className="text-xs text-muted-foreground" data-testid="text-user-email">
                  Pilot Account
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
          <h1 className="text-3xl font-bold mb-2" data-testid="heading-dashboard">
            Pilot Dashboard
          </h1>
          <p className="text-muted-foreground" data-testid="text-dashboard-description">
            Track your proficiency, manage flights, and earn premium discounts
          </p>
        </div>

        <Tabs defaultValue="proficiency" className="space-y-6">
          <TabsList data-testid="tabs-dashboard">
            <TabsTrigger value="proficiency" data-testid="tab-proficiency">
              <Target className="w-4 h-4 mr-2" />
              Proficiency
            </TabsTrigger>
            <TabsTrigger value="flights" data-testid="tab-flights">
              <Plane className="w-4 h-4 mr-2" />
              Flight Log
            </TabsTrigger>
            <TabsTrigger value="profile" data-testid="tab-profile">
              <UserIcon className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="proficiency" data-testid="tab-content-proficiency">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Overall Proficiency</CardTitle>
                    <CardDescription>Your current proficiency score</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center pb-6">
                    <ProficiencyGauge score={proficiency?.overallScore || 0} />
                    <div className="mt-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        {proficiency?.totalFlightsVerified || 0} flights verified
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {proficiency?.totalManeuversCompleted || 0} maneuvers completed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <DiscountDisplay 
                    tier={proficiency?.discountTier || "none"} 
                    percentage={proficiency?.discountPercentage || 0} 
                  />
                  <NextCheckCountdown nextCheckDue={proficiency?.nextCheckDue || null} />
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Maneuver Performance</CardTitle>
                    <CardDescription>Track your performance on key safety maneuvers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <ManeuverCard 
                        title="Steep Turns" 
                        score={proficiency?.steepTurnsScore || 0}
                        status={getManeuverStatus("steep_turns")}
                        icon={RotateCcw}
                      />
                      <ManeuverCard 
                        title="Slow Flight" 
                        score={proficiency?.slowFlightScore || 0}
                        status={getManeuverStatus("slow_flight")}
                        icon={TrendingUp}
                      />
                      <ManeuverCard 
                        title="Stall Recovery" 
                        score={proficiency?.stallRecoveryScore || 0}
                        status={getManeuverStatus("stall_recovery")}
                        icon={AlertCircle}
                      />
                      <ManeuverCard 
                        title="Traffic Pattern" 
                        score={proficiency?.trafficPatternScore || 0}
                        status={getManeuverStatus("traffic_pattern")}
                        icon={Target}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="flights" data-testid="tab-content-flights">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-2">
                <div>
                  <CardTitle>Flight Log</CardTitle>
                  <CardDescription>
                    Submit flights for verification and proficiency checks
                  </CardDescription>
                </div>
                <Button onClick={() => setShowFlightForm(true)} data-testid="button-add-flight">
                  <Plus className="w-4 h-4 mr-2" />
                  Log Flight
                </Button>
              </CardHeader>
              <CardContent>
                {showFlightForm ? (
                  <FlightLogForm onComplete={() => setShowFlightForm(false)} />
                ) : (
                  <FlightLogTable logs={flightLogs} />
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" data-testid="tab-content-profile">
            <PilotProfileForm profile={profile} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
