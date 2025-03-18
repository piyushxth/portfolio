import { ProjectsTable } from "@/components/admin/dashboard/projects/projects-table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Manage your portfolio projects here.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/projects/new">
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Project
          </Link>
        </Button>
      </div>
      <ProjectsTable />
    </div>
  );
}
