import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Gabriel Doce Panta</h3>
            <p className="text-gray-400 mb-4">
              Eletricista Industrial Pleno | Técnico em Eletrotécnica | Estudante de Engenharia Elétrica
            </p>
            <p className="text-gray-400">
              Transformando expertise técnica em resultados mensuráveis para a indústria.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Navegação</h4>
            <div className="space-y-3">
              <Link
                to="/"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
              >
                <span>Portfólio Principal</span>
              </Link>
              <Link
                to="/atividades-tecnicas"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
              >
                <span>Atividades Técnicas</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="mailto:gabrieldocepanta@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
              >
                <Mail size={20} />
                <span>gabrieldocepanta@gmail.com</span>
              </a>
              <a
                href="tel:+556999325892"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
              >
                <Phone size={20} />
                <span>(69) 99325-5892</span>
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-doce-375632192/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Gabriel Doce Panta. Todos os direitos reservados.
          </p>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg">
            <Download size={20} />
            <span>Download CV em PDF</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
