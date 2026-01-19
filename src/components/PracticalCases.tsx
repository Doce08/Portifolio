import { AlertTriangle, Cog, TrendingUp } from 'lucide-react';

export default function PracticalCases() {
  const cases = [
    {
      problem: 'Paradas recorrentes em linha de produção causadas por falhas em motor elétrico trifásico',
      action: 'Realizei análise de vibração e termografia, identifiquei desalinhamento e sobrecarga. Implementei plano de manutenção preditiva e ajustes no sistema de acionamento com inversor de frequência.',
      result: 'Redução de 75% nas paradas não programadas, aumento de 12% na disponibilidade do equipamento e economia de R$ 45.000/ano em manutenções corretivas.',
      impact: '75%',
      metric: 'Redução de Paradas',
    },
    {
      problem: 'Baixa confiabilidade de painéis elétricos com queimas frequentes de componentes',
      action: 'Conduzi FMEA detalhado, identifiquei problemas de dimensionamento térmico e sobrecarga. Redesenhei circuitos de proteção, implementei monitoramento de corrente e temperatura com CLPs.',
      result: 'Eliminação completa de falhas por sobrecarga, aumento do MTBF de 720h para 4.320h e melhoria nos indicadores de confiabilidade operacional.',
      impact: '6x',
      metric: 'Aumento do MTBF',
    },
    {
      problem: 'Falta de rastreabilidade e indicadores precisos de manutenção para tomada de decisão',
      action: 'Desenvolvi sistema de coleta e análise de dados usando Python e Power BI. Criei dashboards de MTBF, MTTR, disponibilidade e custos de manutenção com atualização em tempo real.',
      result: 'Gestão baseada em dados permitiu redução de 30% no tempo médio de reparo (MTTR), melhor planejamento de paradas e ROI de 340% no primeiro ano.',
      impact: '30%',
      metric: 'Redução do MTTR',
    },
    {
      problem: 'Ineficiência energética em sistema de bombeamento com acionamento direto',
      action: 'Realizei estudo de viabilidade técnica e econômica para retrofit. Implementei inversores de frequência com controle PID, otimizando consumo conforme demanda real.',
      result: 'Economia energética de 28% (170 MWh/ano), payback de 14 meses e redução significativa de esforços mecânicos no sistema.',
      impact: '28%',
      metric: 'Economia Energética',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Habilidades Aplicadas
          </h2>
          <p className="text-xl text-blue-200 mb-4">
            Resultados mensuráveis que demonstram domínio técnico
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition shadow-xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-400">
                  <AlertTriangle className="text-red-300" size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-red-300 mb-2">PROBLEMA</h4>
                  <p className="text-white leading-relaxed">{caseItem.problem}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-400">
                  <Cog className="text-blue-300" size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-300 mb-2">AÇÃO</h4>
                  <p className="text-white leading-relaxed">{caseItem.action}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-400">
                  <TrendingUp className="text-green-300" size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-green-300 mb-2">RESULTADO</h4>
                  <p className="text-white leading-relaxed mb-3">{caseItem.result}</p>
                  <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                    {caseItem.impact} {caseItem.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
