"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner"; // Import toast directly from sonner
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
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const aboutSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  bio: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
  }),
  location: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
});

type AboutFormValues = z.infer<typeof aboutSchema>;

const defaultValues: Partial<AboutFormValues> = {
  name: "John Doe",
  title: "Full Stack Developer",
  bio: "Experienced developer with a passion for creating beautiful and functional web applications.",
  location: "New York, NY",
  email: "john@example.com",
  phone: "+1 (555) 123-4567",
};

export function AboutForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<AboutFormValues>({
    resolver: zodResolver(aboutSchema),
    defaultValues,
  });

  function onSubmit(data: AboutFormValues) {
    setIsLoading(true);

    // Here you would send the data to your API
    console.log(data);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Use Sonner toast directly
      toast.success("Profile updated", {
        description: "Your profile information has been updated successfully.",
      });
    }, 1000);
  }

  return (
    <Tabs defaultValue="personal" className="w-full">
      <TabsList className="mb-4 w-full justify-start">
        <TabsTrigger value="personal">Personal Info</TabsTrigger>
        <TabsTrigger value="bio">Bio</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <TabsContent value="personal">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  <div className="flex items-center gap-x-3">
                    <div className="h-24 w-24 overflow-hidden rounded-full border">
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
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Professional Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Full Stack Developer"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="City, Country" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="bio">
            <Card>
              <CardContent className="pt-6">
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about yourself"
                          className="min-h-40 resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Write a short bio about yourself, your skills, and your
                        experience.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contact">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </Form>
    </Tabs>
  );
}
