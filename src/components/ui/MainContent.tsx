import React from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export default function MainContent() {
  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-background border-b">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="container max-w-6xl px-4 py-10 mx-auto md:px-6 md:py-16">
        <h1>Welcome to Premium Wine News</h1>
        <p>Your source for the latest in wine news and reviews.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <h2>Article Title</h2>
              <p>Article preview text...</p>
              <Button>Read More</Button>
            </CardContent>
          </Card>
          {/* Add more Card components as needed */}
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground">
        <p>&copy; 2024 Premium Wine News</p>
      </footer>
    </div>
  );
}
