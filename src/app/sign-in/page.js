import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import SocialAuthButtons from "@/components/SocialAuthButtons";

export const metadata = {
  title: "Sign In | ByteSpace",
  description: "Sign in to your ByteSpace account to access your courses.",
};

export default function SignInPage() {
  return (
    <AuthLayout
      eyebrow="Sign In"
      title="Sign in with ease"
      copy="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <h2 className="mt-1 text-3xl font-bold tracking-tight text-ink sm:text-[34px]">Welcome Back</h2>

      <form className="mt-8 space-y-6" action="#">
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
            Sign In
          </button>
        </div>
      </form>

      <div className="my-7 flex items-center gap-4">
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
        <span className="text-sm text-body">or</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>

      <SocialAuthButtons />

      <p className="mt-8 text-center text-sm text-body">
        New user?{" "}
        <Link href="/join-us" className="font-medium text-brand hover:underline">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
