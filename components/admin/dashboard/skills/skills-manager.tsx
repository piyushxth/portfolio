"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { PlusIcon, X } from "lucide-react";
// import { useToast } from "@/hooks/use-toast"

interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
}

const initialSkills: Skill[] = [
  { id: "1", name: "React", category: "frontend", level: 90 },
  { id: "2", name: "Next.js", category: "frontend", level: 85 },
  { id: "3", name: "TypeScript", category: "languages", level: 80 },
  { id: "4", name: "Node.js", category: "backend", level: 75 },
  { id: "5", name: "Tailwind CSS", category: "frontend", level: 95 },
  { id: "6", name: "MongoDB", category: "database", level: 70 },
  { id: "7", name: "GraphQL", category: "backend", level: 65 },
  { id: "8", name: "Docker", category: "devops", level: 60 },
];

export function SkillsManager() {
  // const { toast } = useToast()
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [newSkill, setNewSkill] = useState<Partial<Skill>>({
    name: "",
    category: "frontend",
    level: 50,
  });
  const [open, setOpen] = useState(false);

  const categories = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "database", label: "Database" },
    { value: "devops", label: "DevOps" },
    { value: "languages", label: "Languages" },
    { value: "tools", label: "Tools" },
  ];

  const handleAddSkill = () => {
    if (!newSkill.name) return;

    const skill: Skill = {
      id: Date.now().toString(),
      name: newSkill.name,
      category: newSkill.category || "frontend",
      level: newSkill.level || 50,
    };

    setSkills([...skills, skill]);
    setNewSkill({ name: "", category: "frontend", level: 50 });
    setOpen(false);

    // toast({
    //   title: "Skill added",
    //   description: `${skill.name} has been added to your skills.`,
    // })
  };

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));

    // toast({
    //   title: "Skill removed",
    //   description: "The skill has been removed from your profile.",
    // })
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">My Skills</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Skill
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Skill</DialogTitle>
              <DialogDescription>
                Add a new skill to showcase on your portfolio.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Skill Name</Label>
                <Input
                  id="name"
                  value={newSkill.name}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, name: e.target.value })
                  }
                  placeholder="e.g. React, Python, Figma"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={newSkill.category}
                  onValueChange={(value) =>
                    setNewSkill({ ...newSkill, category: value })
                  }
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="level">
                  Proficiency Level: {newSkill.level}%
                </Label>
                <Input
                  id="level"
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={newSkill.level}
                  onChange={(e) =>
                    setNewSkill({
                      ...newSkill,
                      level: Number.parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddSkill}>Add Skill</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <Card
            key={category.value}
            className={!groupedSkills[category.value] ? "opacity-50" : ""}
          >
            <CardHeader>
              <CardTitle>{category.label}</CardTitle>
              <CardDescription>
                {groupedSkills[category.value]?.length || 0} skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {groupedSkills[category.value]?.map((skill) => (
                  <Badge
                    key={skill.id}
                    variant="secondary"
                    className="flex items-center gap-1 px-3 py-1.5"
                  >
                    {skill.name}
                    <button
                      onClick={() => handleRemoveSkill(skill.id)}
                      className="ml-1 rounded-full p-0.5 hover:bg-secondary-foreground/20"
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {skill.name}</span>
                    </button>
                  </Badge>
                ))}
                {!groupedSkills[category.value] && (
                  <p className="text-sm text-muted-foreground">
                    No skills in this category yet.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
