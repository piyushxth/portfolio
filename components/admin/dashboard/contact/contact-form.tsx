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
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useToast } from "@/hooks/use-toast"
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const contactSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  address: z.string().optional(),
  website: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional()
    .or(z.literal("")),
  contactMessage: z.string().optional(),
  github: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional()
    .or(z.literal("")),
  linkedin: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional()
    .or(z.literal("")),
  twitter: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional()
    .or(z.literal("")),
  instagram: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional()
    .or(z.literal("")),
  youtube: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional()
    .or(z.literal("")),
  facebook: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional()
    .or(z.literal("")),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const defaultValues: Partial<ContactFormValues> = {
  email: "john@example.com",
  phone: "+1 (555) 123-4567",
  address: "New York, NY",
  website: "https://example.com",
  contactMessage:
    "I&apos;m always open to discussing new projects and opportunities.",
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
  twitter: "https://twitter.com/johndoe",
  instagram: "",
  youtube: "",
  facebook: "",
};

export function ContactForm() {
  // const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  function onSubmit(data: ContactFormValues) {
    setIsLoading(true);

    // Here you would send the data to your API
    console.log(data);

    // Simulate API call
    // setTimeout(() => {
    //   setIsLoading(false)
    //   toast({
    //     title: "Contact information updated",
    //     description: "Your contact information has been updated successfully.",
    //   })
    // }, 1000)
  }

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
    facebook: Facebook,
  };

  return (
    <Tabs defaultValue="contact" className="w-full">
      <TabsList className="mb-4 w-full justify-start">
        <TabsTrigger value="contact">Contact Info</TabsTrigger>
        <TabsTrigger value="social">Social Media</TabsTrigger>
      </TabsList>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <TabsContent value="contact">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="City, Country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Website</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://yourwebsite.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="contactMessage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Message to display on your contact section"
                            className="min-h-24 resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          This message will be displayed on your
                          portfolio&apos;s contact section.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="social">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  {(
                    Object.keys(socialIcons) as Array<keyof typeof socialIcons>
                  ).map((platform) => {
                    const Icon = socialIcons[platform];
                    return (
                      <div key={platform} className="flex items-center gap-4">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        <FormField
                          control={form.control}
                          name={platform as any}
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormLabel className="capitalize">
                                {platform}
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={`https://${platform}.com/yourusername`}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    );
                  })}
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
