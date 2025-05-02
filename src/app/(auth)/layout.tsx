import type { ReactNode } from "react";
import { JarvisLogoHomeButton, JarvisLogoImage } from "@/components/jarvis-logo"
import { ModeToggle } from "@/components/mode-toggle"


const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-between">
            <JarvisLogoHomeButton/>
            <ModeToggle />
        </div>
        {children}
        </div>
        <div className="bg-muted items-center justify-center hidden lg:flex">
            <JarvisLogoImage width={500} height={500}/>
        </div>
    </div>
  );
};

export default AuthLayout;