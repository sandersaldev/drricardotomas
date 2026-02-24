import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, CheckCircle } from "lucide-react";

const CirurgiaPterigio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6">
            <Eye size={18} className="text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Procedimento Oftalmológico</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Cirurgia de Pterígio
          </h1>
          <div className="w-16 h-1 mx-auto rounded-full bg-accent mb-6" />
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Tratamento eficaz para restaurar o conforto e a saúde dos seus olhos
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-2xl shadow-sm p-8 md:p-12">
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">O que é o Pterígio?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              O pterígio é um crescimento benigno de tecido na conjuntiva que pode avançar sobre a córnea.
              Está frequentemente associado à exposição solar prolongada, vento e clima seco —
              muito comum em regiões tropicais como Santarém.
            </p>

            <h2 className="text-xl font-heading font-bold text-foreground mb-4">Como é a Cirurgia?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A cirurgia de pterígio consiste na remoção do tecido anormal e, quando indicado,
              no transplante de conjuntiva para reduzir a chance de recidiva. É realizada com
              anestesia local, de forma rápida e ambulatorial.
            </p>

            <h2 className="text-xl font-heading font-bold text-foreground mb-4">Benefícios</h2>
            <ul className="space-y-3 mb-8">
              {[
                "Eliminação do desconforto e irritação ocular",
                "Melhora estética do olho",
                "Prevenção de perda visual",
                "Procedimento ambulatorial rápido",
                "Baixo índice de recidiva com técnicas modernas",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-secondary rounded-xl p-6 text-center">
              <p className="text-foreground font-heading font-semibold mb-4">
                Agende sua avaliação com o Dr. Ricardo Tomás
              </p>
              <a
                href="https://wa.me/5593981330800"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-accent text-accent-foreground font-heading font-semibold rounded-full hover:opacity-90 transition-opacity text-sm tracking-wider"
              >
                MARCAR CONSULTA
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CirurgiaPterigio;
