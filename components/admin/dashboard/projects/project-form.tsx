"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import Image from "next/image";

const projectSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  status: z.enum(["draft", "published"], {
    required_error: "Please select a status.",
  }),
  url: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional()
    .or(z.literal("")),
  github: z
    .string()
    .url({
      message: "Please enter a valid GitHub URL.",
    })
    .optional()
    .or(z.literal("")),
  technologies: z.string(),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

const defaultValues: Partial<ProjectFormValues> = {
  title: "",
  description: "",
  category: "",
  status: "draft",
  url: "",
  github: "",
  technologies: "",
};

interface ProjectFormProps {
  id?: string;
}

export function ProjectForm({ id }: ProjectFormProps = {}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // If we have an ID, we would fetch the project data here
  const isEditing = !!id;

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues,
  });

  function onSubmit(data: ProjectFormValues) {
    setIsLoading(true);

    // Here you would send the data to your API
    console.log(data);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard/projects");
    }, 1000);
  }

  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="mb-4 w-full justify-start">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="media">Media</TabsTrigger>
        <TabsTrigger value="seo">SEO</TabsTrigger>
      </TabsList>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <TabsContent value="general">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Project title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="web-development">
                              Web Development
                            </SelectItem>
                            <SelectItem value="ui-ux-design">
                              UI/UX Design
                            </SelectItem>
                            <SelectItem value="mobile-app">
                              Mobile App
                            </SelectItem>
                            <SelectItem value="ai-ml">AI/ML</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="mt-6">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your project"
                          className="min-h-32 resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="technologies"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Technologies</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="React, Next.js, Tailwind CSS"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Comma separated list of technologies used
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Published</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="media">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  <div className="col-span-full">
                    <FormLabel>Project Image</FormLabel>
                    <div className="mt-2 flex items-center gap-x-3">
                      <div className="h-24 w-24 overflow-hidden rounded-md border">
                        <Image
                          width={500}
                          height={500}
                          src="/placeholder.svg?height=96&width=96"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <Button type="button" variant="outline" size="sm">
                        Change
                      </Button>
                    </div>
                  </div>
                  <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com" {...field} />
                        </FormControl>
                        <FormDescription>
                          The live URL of your project (optional)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="github"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GitHub URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://github.com/username/repo"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          The GitHub repository URL (optional)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="seo">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  <FormItem>
                    <FormLabel>SEO Title</FormLabel>
                    <FormControl>
                      <Input placeholder="SEO optimized title" />
                    </FormControl>
                    <FormDescription>
                      Title that will appear in search engines
                    </FormDescription>
                  </FormItem>
                  <FormItem>
                    <FormLabel>SEO Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Brief description for search engines"
                        className="min-h-24 resize-y"
                      />
                    </FormControl>
                    <FormDescription>
                      Keep it under 160 characters for best results
                    </FormDescription>
                  </FormItem>
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="portfolio, project, web development" />
                    </FormControl>
                    <FormDescription>
                      Comma separated list of keywords
                    </FormDescription>
                  </FormItem>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard/projects")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading
                ? "Saving..."
                : isEditing
                ? "Update Project"
                : "Create Project"}
            </Button>
          </div>
        </form>
      </Form>
    </Tabs>
  );
}
