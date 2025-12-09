import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";

export interface AuthUser {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  profileImageUrl: string | null;
  provider: string;
  isNewUser?: boolean;
}

export interface AuthProviders {
  google: boolean;
  github: boolean;
}

export function useAuth() {
  const { data: user, isLoading, refetch: refetchUser } = useQuery<AuthUser | null>({
    queryKey: ["/api/auth/user"],
    retry: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    staleTime: 5 * 60 * 1000,
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/user", { credentials: "include" });
        if (res.status === 401) {
          return null;
        }
        if (!res.ok) {
          throw new Error("Failed to fetch user");
        }
        return res.json();
      } catch {
        return null;
      }
    },
  });

  const { data: providers } = useQuery<AuthProviders>({
    queryKey: ["/api/auth/providers"],
    staleTime: 60 * 60 * 1000,
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/logout");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/auth/user"] });
      window.location.href = "/";
    },
  });

  const loginWithGoogle = (returnTo?: string) => {
    const url = returnTo 
      ? `/api/auth/google?returnTo=${encodeURIComponent(returnTo)}`
      : "/api/auth/google";
    window.location.href = url;
  };

  const loginWithGitHub = (returnTo?: string) => {
    const url = returnTo 
      ? `/api/auth/github?returnTo=${encodeURIComponent(returnTo)}`
      : "/api/auth/github";
    window.location.href = url;
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    providers,
    logout: () => logoutMutation.mutate(),
    isLoggingOut: logoutMutation.isPending,
    loginWithGoogle,
    loginWithGitHub,
    refetchUser,
  };
}
