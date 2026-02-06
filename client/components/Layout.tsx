import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/about", label: "О студии" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/booking", label: "Запись" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/30">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between",
          isScrolled || isMenuOpen
            ? "bg-background/80 backdrop-blur-md shadow-sm"
            : "bg-transparent",
        )}
      >
        <Link
          to="/"
          className="text-2xl font-serif tracking-widest uppercase hover:opacity-70 transition-opacity"
        >
          Pilates Princess
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm uppercase tracking-widest hover:text-primary transition-colors",
                location.pathname === link.href
                  ? "text-primary font-medium"
                  : "text-foreground/80",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-md"
          >
            Запись
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border/50 p-6 flex flex-col space-y-4 md:hidden animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-lg uppercase tracking-widest",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground/80",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-card border-t border-border/50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif tracking-widest uppercase mb-6">
              Pilates Princess
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Премиальное пространство для женщин в Новосибирске. Искусство
              движения, сила и грация в каждой тренировке.
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 font-semibold">
              Навигация
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 font-semibold">
              Контакты
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>+7-923-135-17-11</p>
              <p>Новосибирск, ТЦ Европа, Красный проспект, 182</p>
              <p>Ежедневно: 07:00 – 22:00</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground uppercase tracking-widest">
          © {new Date().getFullYear()} Pilates Princess. Все права защищены.
        </div>
      </footer>
    </div>
  );
};
