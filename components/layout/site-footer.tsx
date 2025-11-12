import { Facebook, Heart, Instagram, MailIcon, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site";
import Button from "../ui/buttons";

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
      <div className="container mx-auto max-w-6xl py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Dynamic Footer Sections */}
          <div className="col-span-12 grid grid-cols-1 lg:col-span-6 lg:grid-cols-3">
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
          <div className="col-span-12 lg:col-span-4">
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
            <form className="flex w-fit gap-2">
              <div className="flex flex-1 items-center gap-2 rounded-lg bg-[#424242] py-2 pr-2 pl-4">
                <MailIcon className="size-4 text-[#F5F5F5]" />
                <input
                  className="flex flex-1 outline-0 placeholder:text-sm"
                  placeholder="Enter your email"
                  type="text"
                />
              </div>

              <Button>Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-gray-800 border-t">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            Made with <Heart className="fill-red-500 text-red-500" size={16} />{" "}
            by
            <a
              href="https://founder.rathon-rw.com/"
              rel="noopener"
              target="_blank"
            >
              Leo Constantin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
