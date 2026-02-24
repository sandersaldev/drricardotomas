import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, CheckCircle } from "lucide-react";

const CirurgiaCatarata = () => {
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
            Cirurgia de Catarata
          </h1>
          <div className="w-16 h-1 mx-auto rounded-full bg-accent mb-6" />
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Recupere sua visão com segurança e tecnologia avançada
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-2xl shadow-sm p-8 md:p-12">
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">O que é a Catarata?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A catarata é uma opacificação do cristalino, a lente natural do olho, que causa visão embaçada e
              dificuldade para enxergar. É uma condição comum especialmente em pessoas acima dos 60 anos, mas
              pode ocorrer em qualquer idade.
            </p>

            <h2 className="text-xl font-heading font-bold text-foreground mb-4">Como é a Cirurgia?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A cirurgia de catarata é um procedimento seguro e rápido realizado com anestesia local. O cristalino
              opaco é removido e substituído por uma lente intraocular artificial, restaurando a visão do paciente.
              O procedimento dura em média 20 a 30 minutos.
            </p>

            <h2 className="text-xl font-heading font-bold text-foreground mb-4">Benefícios</h2>
            <ul className="space-y-3 mb-8">
              {[
                "Melhora significativa da visão",
                "Procedimento rápido e seguro",
                "Recuperação rápida",
                "Melhora na qualidade de vida",
                "Resultados duradouros",
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

export default CirurgiaCatarata;
