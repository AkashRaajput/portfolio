export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="glass flex w-full max-w-sm flex-col items-center rounded-xl p-8 text-center">
        <div className="h-11 w-11 animate-spin rounded-full border border-primary/30 border-t-primary" />
        <p className="mt-5 text-sm font-medium text-foreground">Loading portfolio</p>
        <p className="mt-2 text-sm text-muted-foreground">Preparing the next page.</p>
      </div>
    </div>
  );
}
