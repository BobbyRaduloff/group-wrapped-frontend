import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="h-screen min-h-screen w-full bg-background cursor-default">
      <Outlet />
    </div>
  ),
});
