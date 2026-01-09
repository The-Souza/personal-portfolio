import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="gap-2 flex flex-col text-center items-center justify-center">
      <h2>404 - Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
