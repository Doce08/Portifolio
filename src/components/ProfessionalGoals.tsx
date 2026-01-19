import { Target, Rocket, Compass, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProfessionalGoals() {
  const goals = [
    {
      icon: Target,
      title: 'Crescimento Técnico',
      description:
        'Expandir expertise em sistemas complexos de automação e controle, aprofundar conhecimento em análise de confiabilidade e implementar soluções inovadoras baseadas em IoT e Indústria 4.0.',
    },
    {
      icon: Rocket,
      title: 'Evolução para Engenharia',
      description:
        'Consolidar transição de técnico para engenheiro elétrico, assumindo projetos de maior complexidade em sistemas de potência, proteção e eficiência energética industrial.',
    },
    {
      icon: Compass,
      title: 'Ambientes Desafiadores',
      description:
        'Atuar em indústrias críticas e complexas (petróleo, mineração, energia), incluindo operações offshore, onde confiabilidade e segurança são fundamentais para o negócio.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Objetivo Profissional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Busco posições que desafiem minhas capacidades técnicas e analíticas, em ambientes onde
            possa agregar valor através de confiabilidade, inovação e excelência operacional
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                  {goal.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  {goal.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-xl shadow-xl text-white text-center">
          <p className="text-xl md:text-2xl font-semibold leading-relaxed mb-6">
            "Comprometido com excelência técnica, segurança e resultados mensuráveis.
            Pronto para contribuir com o crescimento e confiabilidade de operações industriais críticas."
          </p>
          <Link
            to="/atividades-tecnicas"
            className="inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold transition shadow-lg transform hover:scale-105"
          >
            <Wrench size={22} />
            <span>Ver Atividades Técnicas</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
