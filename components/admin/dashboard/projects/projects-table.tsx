"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  category: string;
  status: "published" | "draft";
  date: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Dashboard",
    category: "Web Development",
    status: "published",
    date: "2023-10-15",
  },
  {
    id: "2",
    title: "Mobile App UI",
    category: "UI/UX Design",
    status: "published",
    date: "2023-09-22",
  },
  {
    id: "3",
    title: "Portfolio Website",
    category: "Web Development",
    status: "published",
    date: "2023-08-10",
  },
  {
    id: "4",
    title: "AI Chatbot Interface",
    category: "AI/ML",
    status: "draft",
    date: "2023-11-05",
  },
  {
    id: "5",
    title: "Social Media Dashboard",
    category: "Web Development",
    status: "draft",
    date: "2023-10-30",
  },
];

export function ProjectsTable() {
  const [data, setData] = useState<Project[]>(projects);

  const handleDelete = (id: string) => {
    setData(data.filter((project) => project.id !== id));
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.title}</TableCell>
              <TableCell>{project.category}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    project.status === "published" ? "default" : "secondary"
                  }
                >
                  {project.status}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(project.date).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/projects/${project.id}`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(project.id)}
                      className="text-destructive focus:text-destructive"
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
