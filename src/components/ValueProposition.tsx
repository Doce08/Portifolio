import { Target, TrendingUp, Award } from 'lucide-react';

export default function ValueProposition() {
  const values = [
    {
      icon: Target,
      title: 'Problemas que Resolvo',
      description:
        'Reduzo paradas não programadas, otimizo confiabilidade de equipamentos e elimino falhas recorrentes através de análise técnica aprofundada e manutenção baseada em dados.',
    },
    {
      icon: TrendingUp,
      title: 'Como Gero Valor',
      description:
        'Aumento produtividade através de manutenção preditiva, implemento melhorias em automação e sistemas elétricos, e garanto segurança operacional com rigoroso cumprimento de normas técnicas.',
    },
    {
      icon: Award,
      title: 'Meu Diferencial',
      description:
        'Combino experiência prática em campo com visão analítica e domínio de tecnologias modernas (Python, Power BI, CLPs), transformando dados em decisões técnicas que geram resultados mensuráveis.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Proposta de Valor
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition shadow-lg hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
