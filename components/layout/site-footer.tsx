import { Facebook, Heart, Instagram, MailIcon, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: ["About us", "Team", "Careers", "Blog"],
  },
  {
    title: "Contact",
    links: ["Help & Support", "Partner with us", "Ride with us"],
  },
  {
    title: "Legal",
    links: [
      "Terms & Conditions",
      "Refund & Cancellation",
      "Privacy Policy",
      "Cookie Policy",
    ],
  },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "/" },
  { name: "Facebook", icon: Facebook, href: "/" },
  { name: "Twitter", icon: Twitter, href: "/" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#212121] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-5xl py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Dynamic Footer Sections */}
          <div className="col-span-6 grid grid-cols-3">
            {footerLinks.map(({ title, links }) => (
              <div key={title}>
                <h3 className="mb-6 font-bold text-sm text-white">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        className="text-[#F5F5F5] text-xs transition-colors hover:text-white"
                        href="/"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div />

          {/* Newsletter + Socials */}
          <div className="col-span-4">
            <h3 className="mb-4 font-bold text-[#F5F5F5] text-sm">Follow Us</h3>
            <div className="mb-8 flex gap-4">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  aria-label={name}
                  className="text-[#F5F5F5]"
                  href={href}
                  key={name}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <h3 className="mb-4 font-bold text-[#F5F5F5] text-sm">
              Receive exclusive offers in your mailbox
            </h3>
            <form className="flex gap-2">
              <div className="flex flex-1 items-center gap-2 rounded-lg bg-[#424242] py-2 pr-2 pl-4">
                <MailIcon className="size-4 text-[#F5F5F5]" />
                <input
                  className="flex flex-1 outline-0 placeholder:text-sm"
                  placeholder="Enter your email"
                  type="text"
                />
              </div>
              <button
                className="rounded-lg bg-[#FF9A0E] px-4 py-1 font-medium text-sm text-white shadow-[0_20px_40px_rgba(255,174,0,0.29),0_5px_10px_rgba(255,174,0,0.26)]"
                type="button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-gray-800 border-t">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            Made with <Heart className="fill-red-500 text-red-500" size={16} />{" "}
            by Themewagon
          </div>
        </div>
      </div>
    </footer>
  );
}
