import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Bath, BedDouble, MapPin } from "lucide-react";
import { AgentCard } from "./agent-card";
import type { Property } from "@/lib/data";

interface PropertyListingProps {
  listing: Property;
}

export function PropertyListing({ listing }: PropertyListingProps) {
  return (
    <Card className="overflow-hidden shadow-xl border-2 border-primary/10 rounded-xl">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2">
          <Carousel className="w-full">
            <CarouselContent>
              {listing.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={image.url}
                      alt={`View of ${listing.address}`}
                      fill
                      className="object-cover"
                      data-ai-hint={image.hint}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <div className="p-6 md:p-8 flex flex-col">
            <div>
              <p className="font-headline text-4xl text-primary tracking-tight">
                {listing.price}
              </p>
              <h3 className="font-headline text-2xl text-accent mt-2 flex items-start gap-2">
                 <MapPin className="h-6 w-6 mt-1 shrink-0"/> <span>{listing.address}</span>
              </h3>
              <div className="flex items-center gap-6 text-muted-foreground mt-4">
                <div className="flex items-center gap-2">
                  <BedDouble />
                  <span>{listing.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath />
                  <span>{listing.bathrooms} Bathrooms</span>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="font-body text-base text-foreground/80 leading-relaxed flex-grow">
              <p>{listing.description}</p>
            </div>
            
            <AgentCard agent={listing.agent} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
