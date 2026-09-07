import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 section-pad">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="font-display text-3xl font-bold">Not found</h1>
      <Link href="/" className="text-muted underline underline-offset-4 hover:text-accent">
        ← Home
      </Link>
    </div>
  );
}
