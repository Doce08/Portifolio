import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Engenharia Elétrica',
      institution: 'Em andamento',
      description: 'Aprofundamento em sistemas de potência, automação industrial, eletrônica de potência e análise de sistemas elétricos.',
      status: 'current',
    },
    {
      degree: 'Técnico em Eletrotécnica',
      institution: 'Concluído',
      description: 'Formação técnica sólida em instalações elétricas industriais, máquinas elétricas, acionamentos e comandos elétricos.',
      status: 'completed',
    },
  ];

  const certifications = [
    'NR-10 - Segurança em Instalações e Serviços em Eletricidade',
    'NR-35 - Trabalho em Altura',
    'CIR - Certificado de Inscrição de Registro (atualizado)',
    'Inversores de Frequência e Soft Starters',
    'CLPs e Automação Industrial',
    'FMEA - Análise de Modos de Falha e Efeitos',
    'Power BI para Análise de Dados Industriais',
    'Python para Automação Industrial',
  ];

  const technicalKnowledge = [
    'Normas Técnicas: NBR 5410, NR-10, NR-12, IEC 60947',
    'Software: AutoCAD Electrical, TIA Portal, Excel Avançado, Power BI',
    'Metodologias: TPM, RCM, FMEA, 5S, PDCA',
    'Segurança: LOTO, Análise de Risco, Permissão de Trabalho',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Conhecimento Técnico e Formação
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg border-2 ${
                edu.status === 'current'
                  ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300'
                  : 'bg-gradient-to-br from-slate-50 to-gray-100 border-gray-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                    edu.status === 'current' ? 'bg-blue-600' : 'bg-slate-600'
                  }`}
                >
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{edu.institution}</p>
                  <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Certificações e Cursos
              </h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Conhecimentos Complementares
              </h3>
            </div>
            <ul className="space-y-3">
              {technicalKnowledge.map((knowledge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{knowledge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
