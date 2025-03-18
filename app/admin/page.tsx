import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DashboardStats } from "@/components/admin/dashboard/stats";
import { RecentActivity } from "@/components/admin/dashboard/recent-activity";

const page = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your portfolio dashboard.
        </p>
      </div>
      <DashboardStats />
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>
              Your most recently updated projects.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivity type="projects" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Frequently used dashboard actions.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="rounded-md bg-secondary p-4">
              <h3 className="font-medium">Add New Project</h3>
              <p className="text-fs-sm text-muted-foreground">
                Create a new portfolio project entry.
              </p>
            </div>
            <div className="rounded-md bg-secondary p-4">
              <h3 className="font-medium">Update About Section</h3>
              <p className="text-fs-sm text-muted-foreground">
                Edit your personal information and bio.
              </p>
            </div>
            <div className="rounded-md bg-secondary p-4">
              <h3 className="font-medium">Manage Skills</h3>
              <p className="text-fs-sm text-muted-foreground">
                Update your technical skills and expertise.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
