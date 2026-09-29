import Logo from "./Logo";
import AuthDeco from "./AuthDeco";

export default function AuthLayout({ eyebrow, title, copy, children }) {
  return (
    <div className="min-h-screen bg-grid-blue lg:flex">
      <div className="container-x pt-8 lg:hidden">
        <Logo />
      </div>

      <div className="relative hidden overflow-hidden px-10 py-14 lg:flex lg:w-1/2 lg:flex-col lg:justify-center xl:px-16">
        <Logo className="absolute left-10 top-10 xl:left-16 xl:top-14" />

        <div className="max-w-[440px]">
          <h1 className="text-[32px] font-bold leading-tight tracking-tight text-white xl:text-[40px]">{title}</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/80 xl:text-base">{copy}</p>
        </div>

        <AuthDeco className="mt-14" />
      </div>

      <div className="flex flex-1 items-center justify-center px-4 py-10 sm:px-8 lg:w-1/2 lg:flex-none lg:py-16">
        <div className="w-full max-w-[500px] rounded-[28px] bg-white p-8 shadow-card sm:p-10 lg:p-12">
          <p className="text-sm font-medium text-brand">{eyebrow}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
