import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";
import { ShopCoffee } from "@/components/site/ShopCoffee";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jubala Coffee — Craft-Roasted in Raleigh, NC" },
      {
        name: "description",
        content:
          "Specialty coffee roaster with four neighborhood cafés in Raleigh, NC. Single-origins, blends, and subscriptions shipped fresh.",
      },
      { property: "og:title", content: "Jubala Coffee — Craft-Roasted in Raleigh, NC" },
      {
        property: "og:description",
        content:
          "Specialty coffee roaster with four neighborhood cafés in Raleigh, NC.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <Navigation />
      <Hero />
      <ShopCoffee />
    </main>
  );
}
