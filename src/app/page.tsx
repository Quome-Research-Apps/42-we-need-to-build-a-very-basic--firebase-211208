import { Header } from '@/components/header';
import { PropertyListing } from '@/components/property-listing';
import { DescriptionEnhancer } from '@/components/description-enhancer';
import { listings } from '@/lib/data';

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-4xl md:text-5xl text-center text-accent mb-16">
            Featured Listings
          </h2>
          <div className="space-y-16 md:space-y-24">
            {listings.map((listing) => (
              <PropertyListing key={listing.id} listing={listing} />
            ))}
          </div>

          <section className="mt-24 md:mt-32 pt-16 md:pt-24 border-t border-primary/20">
            <div className="text-center">
              <h2 className="font-headline text-4xl md:text-5xl text-accent mb-4">
                Rewrite with AI
              </h2>
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
                Our revolutionary AI tool helps agents craft compelling property narratives. Enter a basic description below and see how our technology can transform it into an engaging story that captivates potential buyers.
              </p>
            </div>
            <DescriptionEnhancer />
          </section>
        </div>
      </main>
      <footer className="py-8 bg-accent text-accent-foreground mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EstateView. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
