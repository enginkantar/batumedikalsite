import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Batu Medikal</h3>
            <p className="text-sm text-muted-foreground">
              Sağlık ürünlerinde güvenilir çözüm ortağınız. Kaliteli medikal cihazlar ve sağlık ürünleri.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-products">
                    Ürünlerimiz
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-about">
                    Hakkımızda
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-contact">
                    İletişim
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-phone">+90 XXX XXX XX XX</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-email">info@batumedikal.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-address">İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Batu Medikal. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
