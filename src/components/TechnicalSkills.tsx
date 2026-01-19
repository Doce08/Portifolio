import { Wrench, Cpu, LineChart, Code } from 'lucide-react';

export default function TechnicalSkills() {
  const skillCategories = [
    {
      icon: Wrench,
      title: 'Manutenção e Elétrica Industrial',
      color: 'bg-blue-600',
      skills: [
        { name: 'Manutenção Preventiva e Corretiva', level: 95 },
        { name: 'Motores Elétricos e Sistemas de Potência', level: 90 },
        { name: 'Painéis Elétricos Industriais', level: 90 },
        { name: 'Inversores de Frequência e Soft Starters', level: 85 },
      ],
    },
    {
      icon: Cpu,
      title: 'Automação e Controle',
      color: 'bg-cyan-600',
      skills: [
        { name: 'CLPs e Automação Industrial', level: 85 },
        { name: 'Instrumentação Industrial', level: 80 },
        { name: 'Análise e Solução de Falhas', level: 90 },
        { name: 'Sistemas de Controle', level: 80 },
      ],
    },
    {
      icon: LineChart,
      title: 'Confiabilidade e Dados',
      color: 'bg-indigo-600',
      skills: [
        { name: 'FMEA e Análise de Falhas', level: 85 },
        { name: 'Indicadores de Manutenção (MTBF, MTTR)', level: 90 },
        { name: 'Excel Avançado', level: 90 },
        { name: 'Power BI', level: 80 },
      ],
    },
    {
      icon: Code,
      title: 'Tecnologia e Programação',
      color: 'bg-violet-600',
      skills: [
        { name: 'Python', level: 75 },
        { name: 'C e Java', level: 70 },
        { name: 'Automação de Rotinas Técnicas', level: 80 },
        { name: 'Integração de Dados e Manutenção', level: 85 },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${category.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-blue-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`${category.color} h-2.5 rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
