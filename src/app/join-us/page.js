import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";

export const metadata = {
  title: "Join Us | ByteSpace",
  description: "Create your free ByteSpace account and start learning.",
};

export default function JoinUsPage() {
  return (
    <AuthLayout
      eyebrow="Create an Account"
      title="Sign up and come in"
      copy="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <h2 className="mt-1 text-3xl font-bold tracking-tight text-ink sm:text-[34px]">Welcome to ByteSpace</h2>

      <form className="mt-8 space-y-6" action="#">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jamie Davis"
            className="mt-2 h-12 w-full rounded-xl border border-line bg-white px-4 text-sm text-ink outline-none transition placeholder:text-body focus:border-brand"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="designer@example.com"
            className="mt-2 h-12 w-full rounded-xl border border-line bg-white px-4 text-sm text-ink outline-none transition placeholder:text-body focus:border-brand"
          />
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-medium text-ink">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="********"
            className="mt-2 h-12 w-full rounded-xl border border-line bg-white px-4 text-sm text-ink outline-none transition placeholder:text-body focus:border-brand"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-lime px-8 py-3 text-sm font-semibold text-ink transition hover:brightness-95"
          >
            Continue
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-sm text-body">
        Already have an account?{" "}
        <Link href="/sign-in" className="font-medium text-brand hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
