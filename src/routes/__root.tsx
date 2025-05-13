import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen w-full bg-[url(/background.webp)] bg-cover cursor-default relative">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  ),
});
