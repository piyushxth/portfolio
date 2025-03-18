import { ContactForm } from "@/components/admin/dashboard/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="text-muted-foreground">
          Manage your contact information and social links.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
