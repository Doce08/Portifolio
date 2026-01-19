import { Zap, Users, Brain, CheckCircle, Shield } from 'lucide-react';

export default function BehavioralCompetencies() {
  const competencies = [
    {
      icon: Zap,
      title: 'Proatividade',
      description: 'Antecipação de problemas e iniciativa na implementação de soluções antes que falhas ocorram.',
    },
    {
      icon: Brain,
      title: 'Capacidade Analítica',
      description: 'Raciocínio lógico aplicado à resolução de problemas complexos e análise crítica de dados técnicos.',
    },
    {
      icon: CheckCircle,
      title: 'Organização',
      description: 'Gestão eficiente de tarefas, documentação técnica estruturada e tomada de decisão baseada em evidências.',
    },
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Colaboração efetiva com equipes multidisciplinares e compartilhamento de conhecimento técnico.',
    },
    {
      icon: Shield,
      title: 'Cultura de Segurança',
      description: 'Comprometimento rigoroso com normas de segurança e prevenção de riscos em todas as atividades.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Competências Comportamentais
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Diferenciais que transformam competência técnica em resultados consistentes
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, index) => {
            const Icon = comp.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900 to-blue-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-400 transition">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {comp.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{comp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
