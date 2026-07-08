import { Link } from "@tanstack/react-router";
import { ArrowUp, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background pt-24 pb-10">
      <div className="pointer-events-none absolute inset-0 bg-grid-neon opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-4xl tracking-widest mb-4">DZYNER</div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              A creative design studio for modern businesses. Design. Create. Inspire.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/why-us" className="hover:text-primary">Why us</Link></li>
              <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/work" className="hover:text-primary">Work</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Get in touch</div>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Nikhil Sharma</li>
              <li><a href="tel:+918077439014" className="hover:text-primary">+91 80774 39014</a></li>
              <li className="text-muted-foreground pt-2">Rahul Sinha</li>
              <li><a href="tel:+917739500297" className="hover:text-primary">+91 77395 00297</a></li>
            </ul>
          </div>
        </div>

        {/* Huge wordmark */}
        <div className="mt-20 relative">
          <div className="font-display text-[22vw] leading-[0.85] tracking-tighter text-white/[.04] select-none pointer-events-none">
            DZYNER
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} DZYNER by Impactful Pitch. All rights reserved.</div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
