import { SkillsManager } from "@/components/admin/dashboard/skills/skills-manager";

export default function SkillsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Skills</h1>
        <p className="text-muted-foreground">
          Manage your technical skills and expertise.
        </p>
      </div>
      <SkillsManager />
    </div>
  );
}
