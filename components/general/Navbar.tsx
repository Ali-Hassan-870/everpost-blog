import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
            Ever<span className="text-blue-500">Post</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href={"/"}
          >
            HOME
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href={"/dashboard"}
          >
            DASHBOARD
          </Link>
        </div>
      </div>

      {user ? (
        <div className="flex items-center gap-4">
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({variant: "secondary"})}>Logout</LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
        <LoginLink className={buttonVariants()}>Login</LoginLink>
        <RegisterLink className={buttonVariants({variant: "secondary"})}>Sign Up</RegisterLink>
      </div>
      )}
    </nav>
  );
}
