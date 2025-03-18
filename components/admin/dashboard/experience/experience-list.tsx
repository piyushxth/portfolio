"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { PlusIcon, Pencil, Trash2 } from "lucide-react";
// import { useToast } from "@/hooks/use-toast"

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  type: "work" | "education";
}

const initialExperiences: Experience[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "New York, NY",
    startDate: "2021-06",
    endDate: null,
    current: true,
    description:
      "Leading the frontend development team, implementing new features, and optimizing performance.",
    type: "work",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "San Francisco, CA",
    startDate: "2019-03",
    endDate: "2021-05",
    current: false,
    description:
      "Developed responsive web applications using React and Next.js.",
    type: "work",
  },
  {
    id: "3",
    title: "Bachelor of Science in Computer Science",
    company: "University of Technology",
    location: "Boston, MA",
    startDate: "2015-09",
    endDate: "2019-05",
    current: false,
    description:
      "Graduated with honors. Specialized in web development and software engineering.",
    type: "education",
  },
];

export function ExperienceList() {
  // const { toast } = useToast()
  const [experiences, setExperiences] =
    useState<Experience[]>(initialExperiences);
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Experience>>({
    title: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
    type: "work",
  });

  const handleAddNew = () => {
    setEditingId(null);
    setFormData({
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
      type: activeTab,
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (experience: Experience) => {
    setEditingId(experience.id);
    setFormData({
      ...experience,
      endDate: experience.endDate || "",
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
    // toast({
    //   title: "Entry deleted",
    //   description: "The experience entry has been removed.",
    // })
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.company || !formData.startDate) {
      // toast({
      //   title: "Missing information",
      //   description: "Please fill in all required fields.",
      //   variant: "destructive",
      // })
      return;
    }

    if (editingId) {
      // Update existing
      setExperiences(
        experiences.map((exp) =>
          exp.id === editingId
            ? ({
                ...exp,
                ...formData,
                endDate: formData.current ? null : formData.endDate || null,
              } as Experience)
            : exp
        )
      );
      // toast({
      //   title: "Entry updated",
      //   description: "The experience entry has been updated.",
      // })
    } else {
      // Add new
      const newExperience: Experience = {
        id: Date.now().toString(),
        title: formData.title!,
        company: formData.company!,
        location: formData.location || "",
        startDate: formData.startDate!,
        endDate: formData.current ? null : formData.endDate || null,
        current: formData.current || false,
        description: formData.description || "",
        type: formData.type as "work" | "education",
      };
      setExperiences([...experiences, newExperience]);
      // toast({
      //   title: "Entry added",
      //   description: "The new experience entry has been added.",
      // })
    }
    setIsDialogOpen(false);
  };

  const filteredExperiences = experiences.filter(
    (exp) => exp.type === activeTab
  );

  return (
    <div className="space-y-6">
      <Tabs
        defaultValue="work"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "work" | "education")}
      >
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="work">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <Button onClick={handleAddNew}>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add {activeTab === "work" ? "Experience" : "Education"}
          </Button>
        </div>

        <TabsContent value="work" className="mt-6 space-y-4">
          {filteredExperiences.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                <p className="mb-4 text-muted-foreground">
                  No work experience entries yet.
                </p>
                <Button onClick={handleAddNew}>Add Work Experience</Button>
              </CardContent>
            </Card>
          ) : (
            filteredExperiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                onEdit={() => handleEdit(experience)}
                onDelete={() => handleDelete(experience.id)}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="education" className="mt-6 space-y-4">
          {filteredExperiences.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                <p className="mb-4 text-muted-foreground">
                  No education entries yet.
                </p>
                <Button onClick={handleAddNew}>Add Education</Button>
              </CardContent>
            </Card>
          ) : (
            filteredExperiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                onEdit={() => handleEdit(experience)}
                onDelete={() => handleDelete(experience.id)}
              />
            ))
          )}
        </TabsContent>
      </Tabs>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>
              {editingId
                ? `Edit ${activeTab === "work" ? "Experience" : "Education"}`
                : `Add ${activeTab === "work" ? "Experience" : "Education"}`}
            </DialogTitle>
            <DialogDescription>
              {activeTab === "work"
                ? "Add details about your work experience."
                : "Add details about your education."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">
                {activeTab === "work" ? "Job Title" : "Degree/Certificate"}
              </Label>
              <Input
                id="title"
                value={formData.title || ""}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder={
                  activeTab === "work"
                    ? "e.g. Frontend Developer"
                    : "e.g. Bachelor of Science"
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">
                {activeTab === "work" ? "Company" : "Institution"}
              </Label>
              <Input
                id="company"
                value={formData.company || ""}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder={
                  activeTab === "work"
                    ? "e.g. Acme Inc."
                    : "e.g. University of Technology"
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location || ""}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                placeholder={
                  activeTab === "work" ? "e.g. New York, NY" : "e.g. Boston, MA"
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="month"
                  value={formData.startDate || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  type="month"
                  value={formData.endDate || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                  disabled={formData.current}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="current"
                checked={formData.current || false}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, current: checked })
                }
              />
              <Label htmlFor="current">
                {activeTab === "work"
                  ? "I currently work here"
                  : "I am currently studying here"}
              </Label>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description || ""}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Describe your responsibilities, achievements, or studies"
                className="min-h-24 resize-y"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              {editingId ? "Save Changes" : "Add Entry"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface ExperienceCardProps {
  experience: Experience;
  onEdit: () => void;
  onDelete: () => void;
}

function ExperienceCard({ experience, onEdit, onDelete }: ExperienceCardProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{experience.title}</CardTitle>
            <CardDescription className="mt-1">
              {experience.company} • {experience.location}
            </CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" onClick={onEdit}>
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={onDelete}>
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
        </p>
        <p className="mt-4 text-sm">{experience.description}</p>
      </CardContent>
    </Card>
  );
}
