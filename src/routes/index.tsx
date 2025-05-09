import { createFileRoute } from "@tanstack/react-router";
import useIP from "../hooks/useIP";
import pepe from "../assets/pepe.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const ip = useIP();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <img src={pepe} className="w-32" />
      <h3>{ip}</h3>
      <Button>Click me</Button>
    </div>
  );
}
