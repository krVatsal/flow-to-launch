@@ .. @@
 import { Button } from "@/components/ui/button";
 import { Bell, User } from "lucide-react";
-import { Link, useLocation } from "react-router-dom";
+import Link from "next/link";
+import { usePathname } from "next/navigation";
 import { cn } from "@/lib/utils";
 
 const Header = () => {
-  const location = useLocation();
+  const pathname = usePathname();
   
   const navItems = [
     { name: "Home", path: "/" },
@@ .. @@
               className={cn(
                 "text-sm font-medium transition-colors hover:text-travel-blue",
-                location.pathname === item.path
+                pathname === item.path
                   ? "text-travel-blue"
                   : "text-muted-foreground"
               )}
@@ .. @@