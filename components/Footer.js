import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "/" },
  { label: "Browse Coupons", href: "/#popular-coupons" },
  { label: "Stores", href: "/#top-stores" },
  { label: "Blog", href: "/" },
];

const categories = [
  { label: "Beauty", href: "/" },
  { label: "Clothing", href: "/" },
  { label: "Electronics", href: "/" },
  { label: "Food", href: "/" },
];

const footerPolicies = [
  { label: "Help & Support", href: "/" },
  { label: "Privacy Policy", href: "/" },
  { label: "Terms & Conditions", href: "/" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#07142f] text-slate-200">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="border-b border-white/8 py-8 sm:py-10">
          <div className="flex flex-col gap-5 rounded-[2rem] border border-white/8 bg-[linear-gradient(135deg,rgba(14,30,64,0.92),rgba(7,20,47,0.95))] px-5 py-6 shadow-[0_24px_60px_rgba(3,8,20,0.35)] sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                Need Support
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[2.6rem]">
                Get in Touch when you
                <br className="hidden sm:block" /> Need to{" "}
                <span className="text-orange-400">Support</span>
              </h2>
            </div>

            <Link
              href="#footer-newsletter"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-sky-500 px-6 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(14,165,233,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-sky-600 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <section className="grid gap-8 py-10 sm:grid-cols-2 sm:py-12 xl:grid-cols-[1.3fr_0.8fr_0.8fr_1fr_1.15fr]">
          <div className="max-w-sm sm:col-span-2 xl:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f59e0b_0%,#fbbf24_48%,#38bdf8_52%,#2563eb_100%)] shadow-[0_10px_24px_rgba(37,99,235,0.22)]">
                <span className="h-6 w-6 rounded-full border-[5px] border-white" />
                <span className="absolute right-[9px] top-1/2 h-3 w-2 -translate-y-1/2 rounded-full bg-white" />
              </span>
              <span className="text-xl font-semibold tracking-[-0.02em] text-white">
                Mubashar Don
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Mubashar Don is a coupon platform that helps shoppers discover
              the best deals, cashback offers, and store discounts.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <SocialLink label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink label="Twitter">
                <TwitterIcon />
              </SocialLink>
              <SocialLink label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink label="Dribbble">
                <DribbbleIcon />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Quick Link">
            {quickLinks.map((item) => (
              <FooterNavLink key={item.label} href={item.href}>
                {item.label}
              </FooterNavLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Categories">
            {categories.map((item) => (
              <FooterNavLink key={item.label} href={item.href}>
                {item.label}
              </FooterNavLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <FooterContact href="tel:+18005550136" icon={<PhoneIcon />}>
              (555) 555-0136
            </FooterContact>
            <FooterContact href="mailto:info@couponly.com" icon={<MailIcon />}>
              info@mubashardon.com
            </FooterContact>
            <FooterContact href="/" icon={<MapIcon />}>
              123 Main Street, City, Country
            </FooterContact>
          </FooterColumn>

          <div id="footer-newsletter" className="sm:col-span-2 xl:col-span-1">
            <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
              Newsletter
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Subscribe our newsletter to get our latest update and news.
            </p>

            <form action="/" className="mt-6">
              <div className="flex rounded-full border border-white/10 bg-white/5 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <label className="min-w-0 flex-1">
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="h-11 w-full min-w-0 rounded-full bg-transparent px-4 text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-400 text-slate-950 transition duration-300 hover:bg-orange-300"
                  aria-label="Subscribe to newsletter"
                >
                  <SendIcon />
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="flex flex-col gap-4 border-t border-white/8 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Mubashar Don. All rights reserved Muzammil Husnain.</p>

          <div className="flex flex-wrap gap-4 sm:justify-end">
            {footerPolicies.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-sky-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <div className="mt-4 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterNavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-400 transition hover:translate-x-1 hover:text-sky-300"
    >
      {children}
    </Link>
  );
}

function FooterContact({ href, icon, children }) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-3 text-sm text-slate-400"
    >
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/6 text-sky-300 transition group-hover:bg-sky-500/12 group-hover:text-sky-200">
        {icon}
      </span>
      <span className="leading-6 transition group-hover:text-slate-200">
        {children}
      </span>
    </Link>
  );
}

function SocialLink({ label, children }) {
  return (
    <Link
      href="/"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-sky-200"
    >
      {children}
    </Link>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
      <path d="M11.1 18v-7.1h2.4l.4-2.8h-2.8V6.3c0-.8.2-1.4 1.4-1.4H14V2.4c-.6-.1-1.3-.1-2-.1-2 0-3.4 1.2-3.4 3.5v2H6.4v2.8h2.2V18h2.5Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
      <path d="M15.7 6.4c0 .1 0 .3 0 .5 0 4.8-3.7 10.3-10.3 10.3A10.1 10.1 0 0 1 0 15.6a7.2 7.2 0 0 0 5.3-1.5A3.6 3.6 0 0 1 2 11.6c.5.1 1 .1 1.5 0a3.6 3.6 0 0 1-2.9-3.5v-.1c.5.3 1 .4 1.6.4A3.6 3.6 0 0 1 1.1 3.6a10.2 10.2 0 0 0 7.4 3.8 3.6 3.6 0 0 1 6.1-3.3 7 7 0 0 0 2.3-.9 3.6 3.6 0 0 1-1.6 2 7.1 7.1 0 0 0 2.1-.6 7.7 7.7 0 0 1-1.8 1.8Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none">
      <rect
        x="3"
        y="3"
        width="14"
        height="14"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="10" cy="10" r="3.1" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="14.2" cy="5.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
      <path d="M4.2 7h2.4v8H4.2V7Zm1.2-3.2a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8ZM8 7h2.3v1.1h0c.3-.6 1.1-1.3 2.4-1.3 2.6 0 3.1 1.7 3.1 4V15h-2.4v-3.6c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2V15H8V7Z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none">
      <circle cx="10" cy="10" r="7.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.2 5.8c2 1.5 4 4.9 5 8.2M14.9 6.6c-2.4.7-6.4.9-9.5 0M15.8 13.2c-2.1-.8-4.8-.8-7.9.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none">
      <path
        d="M5.2 3.8c.5-.5 1.2-.7 1.8-.4l1.7.8c.7.3 1 .9.9 1.6l-.2 1.7a1 1 0 0 0 .3.8l2 2a1 1 0 0 0 .8.3l1.7-.2c.7-.1 1.3.2 1.6.9l.8 1.7c.3.6.1 1.3-.4 1.8l-1.2 1.2c-.7.7-1.8 1-2.8.7-2.3-.6-4.6-2.1-6.6-4.1S4 8.8 3.3 6.5c-.3-1 .1-2.1.7-2.8l1.2-1.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none">
      <rect
        x="3"
        y="4.5"
        width="14"
        height="11"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4.5 6 5.5 4 5.5-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
      <path d="M10 17s4-4.3 4-8a4 4 0 1 0-8 0c0 3.7 4 8 4 8Zm0-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none">
      <path
        d="M3 10h11m0 0-4-4m4 4-4 4M15.5 4.5l1.5 1.5-1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
