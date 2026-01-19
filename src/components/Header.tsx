import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative text-white py-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/baixados.jpg)',
          zIndex: 0,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95 z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/img_20230619_145915_917.jpg"
            alt="Gabriel Doce Panta"
            className="w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-blue-400"
          />

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Gabriel Doce Panta</h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-4">
              Eletricista Industrial Pleno | Técnico em Eletrotécnica | Estudante de Engenharia Elétrica
            </p>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl">
              Profissional com sólida experiência em manutenção elétrica industrial e automação,
              aliando conhecimento técnico prático à visão analítica e foco em melhoria contínua.
              Disponível para viagens e atuação offshore (CIR atualizada).
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <a href="mailto:gabrieldocepanta@gmail.com" className="flex items-center gap-2 hover:text-blue-300 transition">
                <Mail size={18} />
                <span>gabrieldocepanta@gmail.com</span>
              </a>
              <a href="tel:+556999325892" className="flex items-center gap-2 hover:text-blue-300 transition">
                <Phone size={18} />
                <span>(69) 99325-5892</span>
              </a>
              <a href="https://www.linkedin.com/in/gabriel-doce-375632192/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-300 transition">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-300 transition">
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
