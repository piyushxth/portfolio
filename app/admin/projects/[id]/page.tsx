import { ProjectForm } from "@/components/admin/dashboard/projects/project-form";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Project</h1>
        <p className="text-muted-foreground">
          Update your portfolio project details.
        </p>
      </div>
      <ProjectForm id={id} />
    </div>
  );
}
