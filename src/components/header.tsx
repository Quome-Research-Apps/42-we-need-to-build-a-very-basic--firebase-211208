import { Home } from "lucide-react";

export function Header() {
  return (
    <header className="py-4 border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
            <Home className="h-8 w-8 text-primary" />
            <h1 className="font-headline text-3xl text-accent tracking-wider">
                EstateView
            </h1>
        </div>
      </div>
    </header>
  );
}
