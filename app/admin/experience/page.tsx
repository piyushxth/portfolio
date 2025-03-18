import { ExperienceList } from "@/components/admin/dashboard/experience/experience-list";

export default function ExperiencePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
        <p className="text-muted-foreground">
          Manage your work experience and education.
        </p>
      </div>
      <ExperienceList />
    </div>
  );
}
