import { ModeToggle } from "@/components/darkorlightmode";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="flex justify-end">
        <ModeToggle />
      </div>

      <h1 className="mt-10 text-4xl font-mono">
        RETRO SYSTEM BOOTED
      </h1>
    </div>
  );
}
