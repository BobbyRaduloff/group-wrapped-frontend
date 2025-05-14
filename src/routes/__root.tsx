import { LoadingContext } from "@/contexts/loading";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createRootRoute({
  component: () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      console.log(loading);
    }, [loading]);

    return (
      <div className="min-h-[100%] w-full bg-[url(/background.webp)] bg-cover cursor-default relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <LoadingContext value={[loading, setLoading]}>
            <Outlet />
          </LoadingContext>
        </div>
      </div>
    );
  },
});
