import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import agendarBg from "@/assets/agendar-bg.jpg";
// using cleaned filename 'dr-ricardo.png'
import drPic from "@/assets/dr-ricardo.png";
import { MapPin, Mail, Phone, Eye } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4 py-20 max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 leading-tight">
            PRECISA DE UM OFTALMOLOGISTA?
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-body">
            MARQUE SUA CONSULTA
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
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground mb-2">Sobre</h2>
          <div className="section-divider mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">
                Dr. Ricardo Tomás | Oftalmologia
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Ricardo Tomás, graduado em medicina no ano 2000 pela UFPE, fez sua residência médica em oftalmologia
                na Fundação Altino Ventura / Hospital de Olhos de Pernambuco, referência nacional na especialidade.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Desde 2006, atende na Clínica de Olhos Memorial Visão, bastante conhecida na cidade de Santarém e região.
                Realiza cirurgias de catarata, pterígio, glaucoma, urgências, entre outras.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Trabalha com adaptação de lentes de contato: gelatinosas e rígidas. Além de ter a disposição diversos exames
                complementares para diagnóstico e acompanhamento das doenças dos olhos em sua clínica.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground">Siga o Dr. Ricardo:</span>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-70 transition-opacity">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-70 transition-opacity">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-70 transition-opacity">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={drPic}
                alt="Dr. Ricardo Tomás"
                className="rounded-2xl shadow-lg max-w-xs w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agendar */}
      <section id="agendar" className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <img src={agendarBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 section-dark-overlay" />
        <div className="relative z-10 text-center px-4 py-20 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-2">Agendar Consulta</h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-accent mb-8" />
          <p className="text-lg text-primary-foreground/90 mb-8 font-body">
            Faça seu agendamento clicando no botão abaixo:
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
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground mb-2">Contato</h2>
          <div className="section-divider mb-12" />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-secondary text-primary shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Endereço:</h4>
                <p className="text-sm text-muted-foreground">
                  Clínica de Olhos Memorial Visão | Av. Mendonça Furtado, 1501 – Santa Clara – Santarém-PA
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-secondary text-primary shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">E-mail:</h4>
                <a href="mailto:consulta@ricardotomas.com.br" className="text-sm text-primary hover:underline">
                  consulta@ricardotomas.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-secondary text-primary shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Telefones:</h4>
                <div className="space-y-1 text-sm">
                  <a href="tel:+559399238-6000" className="block text-primary hover:underline">(93) 99238-6000</a>
                  <a href="tel:+559398133-0800" className="block text-primary hover:underline">(93) 98133-0800</a>
                  <a href="tel:+559398415-5652" className="block text-primary hover:underline">(93) 98415-5652</a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Av.+Mendon%C3%A7a+Furtado+1501,+Santar%C3%A9m+-+PA&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
