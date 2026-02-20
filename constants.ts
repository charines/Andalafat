
import { SectionData } from './types';

export const SECTIONS: SectionData[] = [
  {
    id: 'comercial',
    index: '01',
    title: 'Comercial e Atendimento',
    subtitle: 'Personalizando a interação em larga escala.',
    navLabel: 'Comercial e Atendimento',
    navIcon: 'person_add',
    variant: 'light',
    items: [
      { icon: 'smart_toy', title: 'Sincronização de CRM', description: 'Sincronização instantânea entre fontes de leads e registros do CRM.' },
      { icon: 'mark_email_unread', title: 'Lead Scoring', description: 'Priorização algorítmica de prospectos baseada em dados históricos.' },
      { icon: 'event_available', title: 'Agendamento Automático', description: 'Reserva de calendário integrada com a disponibilidade dos consultores.' },
      { icon: 'sms', title: 'Gatilhos de SMS', description: 'Textos de confirmação instantânea após o registro do lead.' },
      { icon: 'campaign', title: 'Campanhas de Nutrição', description: 'Sequências personalizadas de acordo com os padrões de comportamento.' },
      { icon: 'feedback', title: 'Ciclo de Feedback', description: 'Pesquisas de NPS automatizadas enviadas 24h após o fechamento.' },
      { icon: 'notifications_active', title: 'Alertas de Churn', description: 'Alertas preditivos para clientes inativos que precisam de reengajamento.' },
      { icon: 'group', title: 'Prova Social', description: 'Coleta automática de novas avaliações para as páginas de vendas.' },
      { icon: 'share', title: 'Sync de Redes Sociais', description: 'Distribuição de conteúdo multiplataforma para listagens de imóveis.' },
      { icon: 'visibility', title: 'Tracking de Intenção', description: 'Sinais de intenção baseados no navegador mapeados para perfis de clientes.' }
    ]
  },
  {
    id: 'operacional',
    index: '02',
    title: 'Operacional e Crédito',
    subtitle: 'Otimizando fluxos de trabalho financeiros centrais.',
    navLabel: 'Operacional e Crédito',
    navIcon: 'settings_suggest',
    variant: 'tinted',
    items: [
      { icon: 'verified_user', title: 'Auto-Verificação KYC', description: 'Verificação de identidade contra bases de dados governamentais.' },
      { icon: 'speed', title: 'Consulta de Crédito', description: 'Consultas instantâneas via API aos principais birôs de crédito.' },
      { icon: 'folder_shared', title: 'Extração de Docs', description: 'Tecnologia OCR para extrair dados de contracheques e declarações.' },
      { icon: 'gavel', title: 'Triagem Jurídica', description: 'Sinalização automática de cláusulas legais padrão em contratos.' },
      { icon: 'task_alt', title: 'Checklist Auto', description: 'Geração dinâmica de lista de tarefas baseada no tipo de crédito.' },
      { icon: 'history_edu', title: 'Roteamento eSign', description: 'Gestão automática da ordem de assinatura para vários signatários.' },
      { icon: 'inventory_2', title: 'Motor de Arquivo', description: 'Armazenamento seguro e classificação de arquivos finalizados.' },
      { icon: 'rule_folder', title: 'Robô de Políticas', description: 'Validação de dados da proposta contra regras de subscrição.' },
      { icon: 'analytics', title: 'Sync de Avaliação', description: 'Busca automática de modelos de avaliação de propriedades (AVMs).' },
      { icon: 'update', title: 'Push de Status', description: 'Atualizações automáticas no portal do cliente a cada etapa concluída.' }
    ]
  },
  {
    id: 'parcerias',
    index: '04',
    title: 'Parcerias e Incorporadoras',
    subtitle: 'Fortalecendo nossa rede com conectividade total.',
    navLabel: 'Parcerias e Incorporadoras',
    navIcon: 'handshake',
    variant: 'dark',
    items: [
      { icon: 'join_inner', title: 'Portal do Parceiro', description: 'Dashboard para corretores acompanharem o status do pipeline.' },
      { icon: 'loyalty', title: 'Tracking de Indicações', description: 'Atribuição automática de negócios aos parceiros referentes.' },
      { icon: 'outgoing_mail', title: 'Marketing Conjunto', description: 'Geração de materiais co-branded com apenas um clique.' },
      { icon: 'auto_stories', title: 'Hub de Educação', description: 'Envio automático de módulos de treinamento para novos parceiros.' },
      { icon: 'api', title: 'Webhooks em Real-time', description: 'Webhooks de status para atualizações no CRM do parceiro.' },
      { icon: 'workspace_premium', title: 'Recompensas por Nível', description: 'Cálculo automático do nível do parceiro e desbloqueio de benefícios.' },
      { icon: 'contact_mail', title: 'Ponte de Leads', description: 'Roteamento direto de leads para os especialistas parceiros ideais.' },
      { icon: 'handshake', title: 'Onboarding Jurídico', description: 'Fluxo digital de NDAs e Acordos Mestres para novos parceiros.' },
      { icon: 'stars', title: 'Ranking Atualizado', description: 'Sincronização pública dos melhores parceiros do mês.' },
      { icon: 'hub', title: 'Data Sharing Seguro', description: 'Data rooms seguras para revisão de negócios multi-investidores.' }
    ]
  },
  {
    id: 'inteligencia',
    index: '05',
    title: 'Inteligência e Suporte',
    subtitle: 'Inteligência integrada em cada interação.',
    navLabel: 'Inteligência e Suporte',
    navIcon: 'psychology',
    variant: 'light',
    items: [
      { icon: 'forum', title: 'Triagem por IA', description: 'Agente de IA roteando dúvidas para os departamentos corretos.' },
      { icon: 'sentiment_satisfied_alt', title: 'Análise de Sentimento', description: 'Monitoramento de urgência baseado no tom de voz do cliente.' },
      { icon: 'auto_fix_high', title: 'Respostas Sugeridas', description: 'Sugestões de respostas para atendentes baseadas no histórico.' },
      { icon: 'summarize', title: 'Sumário de Docs', description: 'Resumos executivos de contratos longos via modelos de linguagem (LLM).' },
      { icon: 'translate', title: 'Suporte Multilíngue', description: 'Tradução de suporte em tempo real para uma clientela global.' },
      { icon: 'model_training', title: 'Re-treino de Modelos', description: 'Retreinamento noturno automático dos modelos de risco de crédito.' },
      { icon: 'troubleshoot', title: 'Auto-Correção', description: 'Lógica de re-tentativa automática para integrações de API falhas.' },
      { icon: 'contact_support', title: 'Motor de FAQ', description: 'Atualizações dinâmicas de FAQ baseadas nos tickets diários comuns.' },
      { icon: 'shield', title: 'Máscara de PII', description: 'Remoção de dados sensíveis dos logs orientada por IA.' },
      { icon: 'data_exploration', title: 'Deteção de Anomalias', description: 'Identificação de comportamentos incomuns para prevenção de fraudes.' }
    ]
  }
];
