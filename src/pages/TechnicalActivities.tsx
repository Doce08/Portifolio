import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Wrench, Cpu, Snowflake, Image } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

interface Activity {
  id: string;
  equipment: string;
  diagnosis: string;
  intervention: string;
  duration: string;
  result: string;
  images?: string[];
  technicalDetails?: {
    type?: string;
    components?: string[];
    description?: string;
  };
}

interface Category {
  icon: React.ReactNode;
  title: string;
  description: string;
  activities: Activity[];
}

export default function TechnicalActivities() {
  const categories: Category[] = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'MECÂNICA / ELETROMECÂNICA',
      description: 'Manutenção, diagnóstico e reparo de equipamentos mecânicos e eletromecânicos',
      activities: [
        {
          equipment: 'Bomba Centrífuga 5cv',
          diagnosis: 'Ruído anormal durante operação, detectado desbalanceamento do rotor via teste vibracional',
          intervention: 'Retirada do rotor, balanceamento dinâmico em máquina especializada, substituição de selos mecânicos desgastados',
          duration: '4 horas',
          result: 'Equipamento normalizado, funcionamento silencioso validado em teste de 2 horas contínuas',
        },
        {
          equipment: 'Motor Elétrico 10cv com Redutor de Velocidade',
          diagnosis: 'Aquecimento excessivo do redutor, identificado vazamento de óleo lubrificante',
          intervention: 'Desmontagem do redutor, limpeza completa, troca de óleo com óleo sintético de especificação correta, substituição de vedações',
          duration: '6 horas',
          result: 'Redutor estabilizado, temperatura operacional dentro dos limites normais',
        },
        {
          equipment: 'Correia Transportadora Industrial',
          diagnosis: 'Correia desgastada com tensão irregular, patinagem identificada durante teste de carga',
          intervention: 'Alinhamento de rolos, substituição completa da correia, ajuste de tensão com dinamômetro',
          duration: '3 horas',
          result: 'Correia operando sem deslizamento, capacidade de transporte restaurada',
        },
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'ELÉTRICA / COMANDOS ELÉTRICOS',
      description: 'Montagem, manutenção e correção de painéis e comandos elétricos',
      activities: [
        {
          equipment: 'Painel de Comando - Partida Suave (Soft-Starter)',
          diagnosis: 'Falha intermitente no acionamento, identificada entrada de umidade nas conexões do soft-starter',
          intervention: 'Limpeza e secagem de componentes, remontagem com pasta térmica isolante, vedação de orifícios de ventilação',
          duration: '2,5 horas',
          result: 'Comando operacional com funcionamento estável validado em 10 ciclos de operação',
        },
        {
          equipment: 'Quadro de Distribuição com Contatores 50A e Disjuntores',
          diagnosis: 'Queda de tensão identificada em ponto de conexão, corrente alta causando aquecimento',
          intervention: 'Verificação de aperto de conexões, substituição de contator com contatos queimados, limpeza de trilhos de cobre',
          duration: '3 horas',
          result: 'Quadro operando com distribuição uniforme de tensão, sem aquecimento',
        },
        {
          equipment: 'Montagem de Painel - Comando de 4 Motores com CLP',
          diagnosis: 'Projeto de automação requeria integração de sensores e válvulas proporcionais',
          intervention: 'Projeto executivo, seleção de componentes, montagem física, programação de lógica em Ladder, testes de integração',
          duration: '16 horas',
          result: 'Painel montado e testado, sistema operacional com todos os motoress funcionando sincronizados',
          images: [
            '/whatsapp_image_2026-01-14_at_13.48.34.jpeg',
            '/whatsapp_image_2026-01-14_at_13.48.33.jpeg',
          ],
          technicalDetails: {
            type: 'Painel de Comando - Automação Industrial',
            components: [
              'Disjuntores DIN 100A/230V',
              'Contatores 50A 3 fases',
              'Relés de sobrecarga termomagnéticos',
              'Barramento de borne 63A',
              'Fios singelos 2.5mm² a 10mm²',
              'Canaleta organizadora de cabos',
              'Identificação com terminais numerados',
            ],
            description:
              'Montagem executada com critérios de segurança industrial, conexões bem identificadas e organizadas, permissão para future manutenção e trocas. Todos os cabos dimensionados de acordo com a norma NR-10.',
          },
        },
      ],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'ELETRÔNICA',
      description: 'Diagnóstico e reparo de equipamentos e placas eletrônicas',
      activities: [
        {
          equipment: 'Módulo Controlador de Temperatura - PLC Siemens S7-1200',
          diagnosis: 'Controlador não apresentava leitura de sensores PT100, verificado falha no módulo de entrada analógica',
          intervention: 'Testes em bancada, identificado componente capacitivo danificado, substituição de módulo eletrônico',
          duration: '5 horas',
          result: 'Controlador restaurado com leitura correta de sensores, calibração realizada',
        },
        {
          equipment: 'Inversor de Frequência 15cv - Falha em Circuito de Potência',
          diagnosis: 'Inversor não respondia a comando, LED de erro piscando em código específico indicando problema na seção de potência',
          intervention: 'Análise de circuito, teste de IGBTs com multímetro analógico, substituição de IGBT danificado',
          duration: '4 horas',
          result: 'Inversor operacional, velocidade variável do motor testada com sucesso em 3 frequências diferentes',
        },
      ],
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: 'REFRIGERAÇÃO',
      description: 'Manutenção e diagnóstico de sistemas de refrigeração industrial',
      activities: [
        {
          equipment: 'Câmara de Refrigeração -80°C Ultra Freezer',
          diagnosis: 'Temperatura subindo para -45°C, identificada redução na pressão do fluido refrigerante R170',
          intervention: 'Testes de vazamento com detector eletrônico, localizado micro-fissura em tubo capilar, substituição de circuito de refrigeração',
          duration: '7 horas',
          result: 'Câmara estabilizada em -80°C, mantém temperatura por 12+ horas verificado',
        },
        {
          equipment: 'Chiller Industrial - Resfriamento de Água 5 toneladas',
          diagnosis: 'Redução de capacidade de resfriamento, água saindo a temperatura inadequada',
          intervention: 'Limpeza de trocador de calor com detergente, purga de ar do sistema, recarga de fluido refrigerante com vácuo prévia',
          duration: '6 horas',
          result: 'Chiller operando com capacidade nominal, água saindo em temperatura especificada',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="sticky top-0 bg-white z-40 py-4 border-b border-gray-200">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition"
          >
            <ArrowLeft size={20} />
            Voltar ao Portfólio
          </Link>
        </div>

        <div className="py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              ATIVIDADES TÉCNICAS
            </h1>
            <h2 className="text-2xl text-slate-700 mb-6">
              MANUTENÇÃO E DIAGNÓSTICO
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Registros técnicos de atividades executadas em manutenção industrial, com foco em diagnóstico, intervenção e resultados obtidos.
            </p>
          </div>

          <div className="space-y-20">
            {categories.map((category, idx) => (
              <section key={idx} className="border-l-4 border-blue-600 pl-8 py-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-blue-600">{category.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-8 mt-8">
                  {category.activities.map((activity, actIdx) => (
                    <div
                      key={actIdx}
                      className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition"
                    >
                      {activity.images && activity.images.length > 0 ? (
                        <div className="space-y-6">
                          <ImageCarousel
                            images={activity.images}
                            title={activity.equipment}
                          />

                          <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-4">
                              <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">
                                  Equipamento
                                </h4>
                                <p className="text-gray-700">{activity.equipment}</p>
                              </div>

                              {activity.technicalDetails && (
                                <>
                                  <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                                      Tipo de Painel
                                    </h4>
                                    <p className="text-gray-700">
                                      {activity.technicalDetails.type}
                                    </p>
                                  </div>

                                  <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                                      Componentes Utilizados
                                    </h4>
                                    <ul className="text-gray-700 space-y-1">
                                      {activity.technicalDetails.components?.map(
                                        (component, idx) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <span className="text-blue-600 mt-1">•</span>
                                            <span>{component}</span>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>

                                  <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                                      Descrição da Montagem
                                    </h4>
                                    <p className="text-gray-700">
                                      {activity.technicalDetails.description}
                                    </p>
                                  </div>
                                </>
                              )}

                              <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">
                                  Diagnóstico
                                </h4>
                                <p className="text-gray-700">{activity.diagnosis}</p>
                              </div>

                              <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">
                                  Intervenção Realizada
                                </h4>
                                <p className="text-gray-700">{activity.intervention}</p>
                              </div>

                              <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">
                                  Resultado
                                </h4>
                                <p className="text-gray-700 bg-blue-50 border-l-4 border-blue-600 p-3 rounded">
                                  {activity.result}
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div className="bg-blue-600 text-white rounded-lg p-4">
                                <p className="font-bold text-sm mb-1">Tempo Médio</p>
                                <p className="text-lg font-bold">{activity.duration}</p>
                              </div>

                              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <p className="text-sm font-semibold text-green-700 mb-2">
                                  Status
                                </p>
                                <p className="text-xs text-green-600">
                                  Atividade Concluída com Sucesso
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid md:grid-cols-3 gap-8">
                          <div className="md:col-span-2 space-y-4">
                            <div>
                              <h4 className="text-lg font-bold text-slate-900 mb-2">
                                Equipamento
                              </h4>
                              <p className="text-gray-700">{activity.equipment}</p>
                            </div>

                            <div>
                              <h4 className="text-lg font-bold text-slate-900 mb-2">
                                Diagnóstico
                              </h4>
                              <p className="text-gray-700">{activity.diagnosis}</p>
                            </div>

                            <div>
                              <h4 className="text-lg font-bold text-slate-900 mb-2">
                                Intervenção Realizada
                              </h4>
                              <p className="text-gray-700">{activity.intervention}</p>
                            </div>

                            <div>
                              <h4 className="text-lg font-bold text-slate-900 mb-2">
                                Resultado
                              </h4>
                              <p className="text-gray-700 bg-blue-50 border-l-4 border-blue-600 p-3 rounded">
                                {activity.result}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="bg-white rounded-lg p-4 border border-gray-300">
                              <div className="flex items-center justify-center h-32 bg-gray-200 rounded mb-3">
                                <Image size={48} className="text-gray-400" />
                              </div>
                              <p className="text-sm text-gray-500 text-center">Foto (antes)</p>
                            </div>

                            <div className="bg-blue-600 text-white rounded-lg p-4">
                              <p className="font-bold text-sm mb-1">Tempo Médio</p>
                              <p className="text-lg font-bold">{activity.duration}</p>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <p className="text-sm font-semibold text-green-700 mb-2">Status</p>
                              <p className="text-xs text-green-600">Atividade Concluída com Sucesso</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
