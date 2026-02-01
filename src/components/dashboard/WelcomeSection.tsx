export default function WelcomeSection({ name }: { name: string }) {
  return (
    <section aria-labelledby="welcome-heading">
      <h1 id="welcome-heading" className="text-2xl sm:text-3xl font-bold text-white">
        Welcome back, {name}
      </h1>
      <p className="mt-2 text-white/70">
        Here&apos;s an overview of your project and support options.
      </p>
    </section>
  );
}
