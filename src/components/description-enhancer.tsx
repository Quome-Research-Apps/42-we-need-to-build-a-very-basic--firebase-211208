"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { enhancePropertyDescription } from "@/ai/flows/enhance-property-description";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "./ui/skeleton";

const formSchema = z.object({
  description: z
    .string()
    .min(20, { message: "Please enter at least 20 characters." })
    .max(500, { message: "Description cannot exceed 500 characters." }),
});

export function DescriptionEnhancer() {
  const [enhanced, setEnhanced] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setEnhanced("");
    try {
      const result = await enhancePropertyDescription({
        description: values.description,
      });
      setEnhanced(result.enhancedDescription);
    } catch (error) {
      console.error("Failed to enhance description:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to enhance the property description. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-12 grid gap-12 md:grid-cols-2">
      <Card className="border-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-accent">Original Description</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A 3 bed, 2 bath house with a large yard and updated kitchen. Located in a quiet neighborhood close to schools and parks."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Enhance Description
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card className="border-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-accent">AI-Enhanced Version</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="min-h-[238px] rounded-md border border-dashed bg-secondary/50 p-4">
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : enhanced ? (
              <p className="whitespace-pre-wrap font-body text-foreground">
                {enhanced}
              </p>
            ) : (
              <p className="text-muted-foreground text-center pt-20">
                Your enhanced description will appear here.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
