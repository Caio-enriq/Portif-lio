"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GitBranch, GitCommit } from "lucide-react";

interface GitHubActivity {
  id: string;
  type: string;
  repo: string;
  message?: string;
  timestamp: string;
}

export function GitHubActivity() {
  const [activities, setActivities] = useState<GitHubActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Static demo data — replace with GitHub API if needed
    const demoData: GitHubActivity[] = [
      {
        id: "1",
        type: "push",
        repo: "Caio-enriq/portfolio-react",
        message: "feat: add engineering page and timeline",
        timestamp: "2 hours ago",
      },
      {
        id: "2",
        type: "push",
        repo: "Caio-enriq/PortalP",
        message: "fix: resolve analytics module loading",
        timestamp: "5 hours ago",
      },
      {
        id: "3",
        type: "create",
        repo: "Caio-enriq/Fynnteck-Web",
        message: "Initial commit",
        timestamp: "1 day ago",
      },
      {
        id: "4",
        type: "push",
        repo: "Caio-enriq/Enterprise-Dashboard",
        message: "feat: add audit logging system",
        timestamp: "2 days ago",
      },
    ];

    setTimeout(() => {
      setActivities(demoData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-border bg-card animate-pulse rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <div className="bg-muted h-8 w-8 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="bg-muted h-4 w-3/4 rounded" />
                <div className="bg-muted h-3 w-1/2 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {activities.map((activity, i) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="hover:border-primary/40 transition-all">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                {activity.type === "push" ? (
                  <GitCommit className="text-primary h-4 w-4" />
                ) : (
                  <GitBranch className="text-primary h-4 w-4" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{activity.message}</p>
                <p className="text-muted-foreground truncate text-xs">{activity.repo}</p>
              </div>
              <span className="text-muted-foreground shrink-0 text-xs">{activity.timestamp}</span>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
