import { AboutForm } from "@/components/admin/dashboard/about/about-form";

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <p className="text-muted-foreground">
          Manage your personal information and bio.
        </p>
      </div>
      <AboutForm />
    </div>
  );
}
