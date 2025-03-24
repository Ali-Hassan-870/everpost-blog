import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function DashboardRoute(){
   return (
    <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium">Your Blog articles</h1>
        <Link href="/dashboard/create" className={buttonVariants()}>Create Blog</Link>
    </div>
   );
}