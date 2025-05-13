import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen w-full bg-[url(/background.png)] bg-cover cursor-default">
      <Outlet />
    </div>
  ),
});
