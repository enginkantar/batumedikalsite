import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center" data-testid="text-page-title">
            Hakkımızda
          </h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-center mb-8" data-testid="text-intro">
              Batu Medikal olarak, sağlık sektöründe güvenilir ve kaliteli hizmet sunmayı
              ilke edindik. Yılların deneyimi ile medikal cihaz ve sağlık ürünleri alanında
              müşterilerimize en iyi çözümleri sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2" data-testid="text-value-quality">
                  Kalite
                </h3>
                <p className="text-sm text-muted-foreground">
                  CE sertifikalı, uluslararası standartlara uygun ürünler
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2" data-testid="text-value-trust">
                  Güven
                </h3>
                <p className="text-sm text-muted-foreground">
                  Müşteri memnuniyeti odaklı hizmet anlayışı
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2" data-testid="text-value-innovation">
                  Yenilik
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sektördeki en güncel teknolojileri takip ediyoruz
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <h2 className="font-serif text-2xl font-semibold mb-4" data-testid="text-mission-title">
                Vizyonumuz
              </h2>
              <p className="text-muted-foreground mb-4" data-testid="text-mission-description">
                Sağlık sektöründe güvenilir ve lider bir marka olmak, müşterilerimize en kaliteli
                medikal ürünleri en uygun fiyatlarla sunmak ve sağlık hizmetlerinin gelişimine
                katkıda bulunmaktır.
              </p>
              <h2 className="font-serif text-2xl font-semibold mb-4 mt-6" data-testid="text-values-title">
                Değerlerimiz
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li data-testid="text-value-1">• Müşteri memnuniyeti önceliğimizdir</li>
                <li data-testid="text-value-2">• Kalite ve güvenilirlikte ödün vermeyiz</li>
                <li data-testid="text-value-3">• Sürekli gelişim ve yeniliğe açığız</li>
                <li data-testid="text-value-4">• Etik değerlere bağlı kalarak çalışırız</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
