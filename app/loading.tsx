export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-6 py-16">
      <div className="glass flex w-full max-w-sm flex-col items-center rounded-xl p-8 text-center">
        <div className="h-9 w-9 animate-spin rounded-full border border-primary/30 border-t-primary" />
        <p className="mt-4 text-sm font-medium text-foreground">Loading</p>
      </div>
    </div>
  );
}
