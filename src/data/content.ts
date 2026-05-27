export type Language = 'pt' | 'en' | 'es';

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export const GIFTED_CONTENT: Record<Language, any> = {
  pt: {
    nav: {
      overview: "Visão Geral",
      discovery: "Descoberta",
      testing: "Testes",
      parenting: "Atendimento Parental",
      proscons: "Potencialidade e Áreas de Atenção",
      local: "Recursos Locais",
      schoolImprovement: "Melhorias nas Escolas",
      checklist: "Teste de Triagem"
    },
    overview: {
      title: "Entendendo a Superdotação",
      description: "Superdotação é mais do que apenas um QI Alto. Trata-se de uma forma diferente de processar o mundo, repleta de nuances que equilibram um potencial extraordinário com vulnerabilidades específicas. Superdotados são neurodivergentes, é uma condição do neurodesenvolvimento mas não é patologia, desvio ou transtorno, não possui CID.",
      traitsTitle: "Traços Comuns",
      iqTitle: "Faixas de Classificação de QI",
      iqHeaders: {
        classification: "Classificação",
        range: "Faixa de QI",
        prevalence: "Prevalência"
      },
      iqAverages: "QI Mundial flutua entre 89 e 96 pontos e o Brasileiro entre 83 e 95 pontos.",
      factorsTitle: "Além do QI: Fatores de Classificação",
      traits: [
        "Ritmo de aprendizado rápido e vocabulário avançado",
        "Curiosidade intensa e interesses profundos",
        "Alta sensibilidade e intensidade emocional",
        "Forte senso de justiça e preocupação moral",
        "Excelente memória e habilidades de resolução de problemas",
        "Desenvolvimento assíncrono (intelectual à frente do emocional/físico)"
      ],
      iqRanges: [
        { label: "Levemente Superdotado", range: "115 – 129", percent: "Top 15% a 2.5%" },
        { label: "Moderadamente Superdotado", range: "130 – 144", percent: "Top 2.5% a 0.1%" },
        { label: "Altamente Superdotado", range: "145 – 159", percent: "Top 0.1% a 0.003%" },
        { label: "Excepcionalmente Superdotado", range: "160 – 179", percent: "1 em 30.000+" },
        { label: "Profundamente Superdotado", range: "180+", percent: "1 em 1.000.000+" }
      ],
      factors: [
        { title: "Habilidade Intelectual", text: "Capacidade mental geral, raciocínio abstrato e processamento rápido de informações." },
        { title: "Pensamento Criativo", text: "A habilidade de produzir ideias originais e de alta qualidade e resolver problemas de maneiras não convencionais." },
        { title: "Comprometimento com a Tarefa", text: "Altos níveis de motivação, perseverança e energia direcionados a uma área específica de interesse." },
        { title: "Aptidão Específica", text: "Talento excepcional em um domínio específico como matemática, linguística ou ciência." },
        { title: "Artes Visuais e Cênicas", text: "Habilidade notável em música, arte, dança ou drama que excede as expectativas para a idade." }
      ],
      videosTitle: "Vídeos Explicativos",
      videos: [
        { title: "O que são Altas Habilidades / Superdotação?", url: "https://www.youtube.com/watch?v=BXtqDpTDoHs" },
        { title: "O Custo do Encaixe: Por que o Padrão Escolar adoece o SuperDotado", url: "https://www.youtube.com/watch?v=5Ge5i57gTmU" },
        { title: "Desenvolvimento Assíncrono na Superdotação", url: "https://www.youtube.com/watch?v=-xs_2CmnLOI" },
        { title: "O Erro dos protocolos típicos", url: "https://www.youtube.com/watch?v=AAwMpS3XXtc" }
      ],
      legislationTitle: "Legislação",
      legislationLinks: [
        { title: "Constituição Federal de 1988, Artigo 208, Inciso III", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art208iii" },
        { title: "LDB - Lei nº 9.394/1996, capitulo V, artigo 58, 59 e 59-A", url: "https://www.planalto.gov.br/ccivil_03/leis/l9394.htm#art58" },
        { title: "LBI - Lei nº 13.146/2015, artigo 28", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm#art28" },
        { title: "Decreto Federal nº 7.611/2011, artigo 1", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/decreto/d7611.htm#art1" },
        { title: "Resolução CNE/CEB nº 2/2001, artigo 8", url: "http://portal.mec.gov.br/cne/arquivos/pdf/CEB0201.pdf" },
        { title: "ECA - Lei nº 8.069/1990, artigo 53", url: "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm#art53" }
      ]
    },
    checklist: {
      title: "Teste de Triagem",
      description: "Este teste é apenas uma triagem para que, a partir dela, se possa procurar um profissional capacitado; ele NÃO é um teste oficial para a identificação de crianças com altas habilidades/superdotação.",
      instructions: "Instruções: Para cada item, marque de 1 a 5 conforme a frequência: 1 = Nunca | 2 = Raramente | 3 = Às vezes | 4 = Frequentemente | 5 = Sempre",
      labels: {
        name: "Nome:",
        age: "Idade:",
        date: "Data:",
        evaluator: "Responsável/Avaliador:",
        finish: "Finalizar e Gerar Relatório",
        reportTitle: "Relatório de Avaliação",
        student: "Aluno:",
        totalScore: "Total Geral:",
        disclaimer: "* Este documento é um rastreamento de comportamentos e deve ser analisado por profissionais especializados.",
        saveDoc: "Baixar Relatório (.doc)"
      },
      domains: [
        {
          title: "Domínio 1: Acadêmico",
          questions: [
            "Demonstra interesse e curiosidade em aprender sobre temas diversos.",
            "Consegue entender e explicar conceitos complexos com facilidade.",
            "Apresenta habilidades de leitura, escrita e compreensão acima da média.",
            "Realiza cálculos matemáticos ou operações lógicas com rapidez e precisão.",
            "Participa de atividades acadêmicas extracurriculares.",
            "Faz perguntas detalhadas e se aprofunda em temas específicos.",
            "Lê por iniciativa própria sobre temas fora do currículo.",
            "Aplica conhecimentos em diferentes contextos.",
            "Desenvolve projetos com pouca orientação.",
            "Gosta de debater temas acadêmicos."
          ]
        },
        {
          title: "Domínio 2: Criativo",
          questions: [
            "Gera ideias novas e originais.",
            "Combina informações para criar algo novo.",
            "Encontra soluções inovadoras.",
            "Demonstra curiosidade por novos métodos.",
            "Faz associações entre ideias não relacionadas.",
            "Cria trabalhos originais.",
            "Explora diferentes formas de realizar tarefas.",
            "Apresenta visão inovadora.",
            "Improvisa com facilidade.",
            "Gosta de criar histórias ou mundos imaginários."
          ]
        },
        {
          title: "Domínio 3: Artístico",
          questions: [
            "Demonstra habilidades artísticas.",
            "Sensibilidade para formas e cores.",
            "Expressa-se criativamente.",
            "Cria peças com originalidade.",
            "Participa de atividades artísticas.",
            "Apresenta estilo próprio.",
            "Dedica tempo às artes por iniciativa própria.",
            "Recebe reconhecimento artístico.",
            "Cria músicas ou composições.",
            "Cria roteiros ou coreografias."
          ]
        },
        {
          title: "Domínio 4: Liderança",
          questions: [
            "Inicia e organiza atividades em grupo.",
            "Demonstra confiança ao falar em público.",
            "Motiva colegas.",
            "Resolve conflitos de forma justa.",
            "Sabe delegar tarefas.",
            "Toma decisões assertivas.",
            "Assume responsabilidade.",
            "Comunica-se de forma persuasiva.",
            "Mantém organização sob pressão.",
            "Toma iniciativa para resolver problemas."
          ]
        },
        {
          title: "Domínio 5: Motivação",
          questions: [
            "Demonstra entusiasmo para aprender.",
            "Trabalha com dedicação.",
            "Resolve problemas de forma independente.",
            "Dedica tempo extra para melhorar.",
            "Estabelece metas.",
            "Participa por iniciativa própria.",
            "Demonstra perseverança.",
            "Supera obstáculos.",
            "Busca aprendizado contínuo.",
            "Assume novas responsabilidades."
          ]
        }
      ]
    },
    discovery: {
      title: "Como Descobrir",
      steps: [
        { subtitle: "Marcos Iniciais", text: "Procure por marcos de desenvolvimento atingidos significativamente antes dos pares, especialmente em linguagem e raciocínio abstrato." },
        { subtitle: "Observação Comportamental", text: "Note se a criança fica entediada facilmente com tarefas repetitivas ou mostra um foco incomum em tópicos de interesse." },
        { subtitle: "Desempenho Escolar", text: "Embora nem todas as crianças superdotadas tirem notas máximas, procure por 'flashes' de brilhantismo ou pensamento não convencional." }
      ]
    },
    testing: {
      title: "Testes e Avaliações",
      earlyTitle: "Primeira Infância (Menos de 6 anos)",
      schoolTitle: "Idade Escolar e Além",
      footerTitle: "Quando você deve testar?",
      footerText: "Embora o teste possa ser feito a partir dos 2 anos, muitos especialistas recomendam esperar até os 6 anos para resultados mais estáveis, a menos que seja necessária intervenção precoce ou colocação escolar.",
      disclaimer: "Testes são feitos por Profissionais Qualificados como Neuropsicólogos, segundo LDB o laudo tem validade permanente para fins de direitos Educacionais.",
      earlyChildhood: [
        { name: "SON-R", ageRange: "2 – 8 anos", description: "Teste de Inteligência não verbal ideal para crianças pequenas e ou crianças com dificuldade de linguagem." },
        { name: "CMMS-3", ageRange: "3 anos até 9 anos", description: "Escala de Maturidade Mental Columbia. Avalia a capacidade de raciocínio geral e discernimento visual." },
        { name: "Raven", ageRange: "4 a 12 anos", description: "Matrizes Progressivas de Raven. Um teste não verbal que mede o raciocínio abstrato e a inteligência fluida através da identificação de padrões." }
      ],
      schoolAge: [
        { name: "WISC-V", ageRange: "6 – 16 anos", description: "Escala de Inteligência Wechsler para Crianças. O padrão ouro para testes de QI clínicos." },
        { name: "Woodcock-Johnson IV", ageRange: "2 – 90+ anos", description: "Foca tanto em habilidades cognitivas quanto em desempenho acadêmico." },
        { name: "Avaliação Qualitativa", ageRange: "Todas as Idades", description: "Portfólios, entrevistas e observações de professores usados junto com testes formais." }
      ]
    },
    parenting: {
      title: "Atendimento Parental",
      strategies: [
        "Defenda a aceleração educacional ou enriquecimento.",
        "Apoie suas 'Superexcitabilidades' (emocionais, sensoriais, intelectuais).",
        "Foque no esforço em vez da habilidade inata para construir uma mentalidade de crescimento.",
        "Encontre pares com interesses semelhantes; crianças superdotadas muitas vezes se sentem 'estranhas' entre colegas da mesma idade.",
        "Estabeleça limites claros; sua lógica avançada não significa que sejam adultos.",
        "Acolha a Intensidade (não tente silenciar ou apagar o brilho da criança)",
        "Monitore a assincronia",
        "Não se esqueça de vocês Pais, ser responsável por uma criança com Altas Habilidades/SuperDotação é muito intenso"
      ]
    },
    prosCons: {
      title: "Potencialidade e Áreas de Atenção",
      prosTitle: "Principais Potencialidades",
      consTitle: "Principais Áreas de Atenção",
      pros: [
        "Excepcional resolução de problemas e potencial criativo.",
        "Profunda capacidade de empatia e preocupação social.",
        "Habilidade de dominar assuntos complexos rapidamente.",
        "Vida interior e imaginação ricas e vibrantes.",
        "Forte motivação intrínseca quando devidamente desafiado.",
        "Memória de longo prazo altamente eficiente.",
        "Velocidade de aprendizagem sem necessidade de repetições.",
        "Vocabulário avançado e fluência verbal.",
        "Percepção aguçada e detalhista",
        "Autonomia e pensamento original",
      ],
      cons: [
        "Risco de perfeccionismo e medo do fracasso.",
        "Isolamento social ou sensação de ser 'diferente' dos pares.",
        "Desenvolvimento assíncrono levando à frustração.",
        "Hipersensibilidade sensorial ou emocional.",
        "Propensão ao tédio e baixo desempenho em ambientes tradicionais.",
        "Ansiedade existencial precoce",
        "Tédio crônico e subaprendizagem no ambiente escolar",
        "Comportamento questionador e desafio a autoridades",
        "Síndrome do impostor",
        "Mascaramento (camuflagem social)"
      ]
    },
    local: {
      title: "Recursos Locais",
      description: "Encontre Especialista e Escolas/Cursos para SuperDotados",
      placeholder: "Digite cidade e país (ex: São Paulo, Brasil)",
      search: "Buscar",
      searching: "Buscando legislação local e especialistas...",
      sources: "Fontes e Leitura Adicional",
      legislation: "Legislação",
      legislationDesc: "Entenda seus direitos e o quadro legal para a educação de superdotados.",
      specialists: "Especialistas",
      specialistsDesc: "Encontre psicólogos qualificados e clínicas para testes profissionais.",
      schools: "Escolas",
      schoolsDesc: "Descubra instituições com programas especializados e experiência em superdotação."
    },
    schoolImprovement: {
      title: "Melhorias nas Escolas",
      subtitle: "Diretrizes para uma Transformação Educacional",
      sections: [
        { title: "Visão Educacional", content: "Implementar uma pedagogia que reconheça a neurodivergência, focando no potencial individual e não apenas em currículos padronizados. Implementar programas de empatia com espaços seguros e workshops sobre Altas Habilidades/Superdotação." },
        { title: "Ambiente de Aprendizagem", content: "Criar espaços flexíveis e estimulantes que permitam a exploração profunda de interesses e o aprendizado autodirigido. Criação de Clubes de curiosidade Científica, Artes, linguagem e tecnologia e Projetos interdisciplinares com mentorias externas." },
        { title: "Inclusão", content: "Garantir que crianças com Altas Habilidades sejam incluídas em programas de Atendimento Educacional Especializado (AEE), respeitando suas necessidades únicas. Personalização de trajetórias (lógico-matemática, linguística e criativa), consideração de necessidades de neurodiversidade e oficinas para Pais para identificação e apoio." },
        { title: "Desenvolvimento 360", content: "Focar no desenvolvimento holístico: cognitivo, emocional, social e criativo, evitando a hiper-especialização precoce. Realizar desafios com múltiplas soluções, avaliação de evidências, oficinas de thinking, papeis de mentoria entre pares." },
        { title: "Avaliação e Feedbacks diferenciados", content: "Implementar métodos de avaliação que valorizem os processos criativos e a profundidade de compreensão em vez de apenas testes padronizados. Feedbacks diferenciados focados no progresso individual e crescimento qualitativo. Provas com níveis de dificuldades escalonáveis e autoavaliação guiada." },
        { title: "Futuro e Transição", content: "Preparar a transição acadêmica e profissional, oferecendo mentorias e orientação de carreira para mentes excepcionais. Programação Robótica e Ciências de Dados, ética digital, programas de bridging entre séries, preparação para exame de admissão em nível superior." },
        { title: "Bem-estar cognitivo e Saúde Mental", content: "Monitorar a assincronia e o perfeccionismo, oferecendo suporte psicológico para lidar com a intensidade e sensibilidade. Aplicar técnicas de Mindfulness, espaços de desaceleração durante o dia, avaliação de erros como aprendizado, acesso rápido a psicólogos e grupos de apoio entre pares." },
        { title: "Gestão Organizacional", content: "Capacitar gestores e professores para identificar AH/SD e implementar adaptações curriculares eficazes. Comitê de Altas Habilidades com participação de alunos, programas diferenciados. Provas e certificações reconhecidas, indicadores de qualidade e revisões semestrais de programas." },
        { title: "Metas de Impacto", content: "Estabelecer indicadores de sucesso que meçam o engajamento, a satisfação e o florescimento do potencial de cada aluno. Com diversificação de interesses e talento, engajamento em eventos escolares." },
        { title: "PEI - Plano Educacional Individualizado", content: "O PEI é feito de forma conjunta entre escola e família. É uma ferramenta fundamental para garantir que o estudante com superdotação tenha suas necessidades específicas atendidas, com metas claras, adaptações curriculares e acompanhamento constante do desenvolvimento integral. Ele serve como um roteiro personalizado que orienta professores e equipe escolar no suporte ao talento e às vulnerabilidades do aluno." }
      ]
    },
    sidebar: {
      navigation: "Navegação",
      needHelp: "Precisa de Ajuda?",
      helpText: "Clique aqui e entre em contato conosco, será um prazer atender você."
    },
    footer: {
      tagline: "Capacitando pais com o conhecimento para nutrir um potencial excepcional. Altas Habilidades é uma jornada, não um destino.",
      copyright: "© 2026 Centro de Recursos Altas Habilidades. Todos os direitos reservados."
    }
  },
  en: {
    nav: {
      overview: "Overview",
      discovery: "Discovery",
      testing: "Testing",
      parenting: "Parenting",
      proscons: "Potential and Focus Areas",
      local: "Local Resources",
      schoolImprovement: "School Improvement",
      checklist: "Screening Checklist"
    },
    overview: {
      title: "Understanding Giftedness",
      description: "Giftedness is more than just high IQ. It is a different way of processing the world, filled with nuances that balance extraordinary potential with specific vulnerabilities. Gifted individuals are neurodivergent; it is a neurodevelopmental condition, not a pathology, deviation, or disorder, and it does not have an ICD code.",
      traitsTitle: "Common Traits",
      iqTitle: "IQ Classification Ranges",
      iqHeaders: {
        classification: "Classification",
        range: "IQ Range",
        prevalence: "Prevalence"
      },
      iqAverages: "Global IQ fluctuates between 89 and 96 points, and the Brazilian IQ between 83 and 95 points.",
      factorsTitle: "Beyond IQ: Classification Factors",
      traits: [
        "Rapid learning pace and advanced vocabulary",
        "Intense curiosity and deep interests",
        "High sensitivity and emotional intensity",
        "Strong sense of justice and moral concern",
        "Excellent memory and problem-solving skills",
        "Asynchronous development (intellectual ahead of emotional/physical)"
      ],
      iqRanges: [
        { label: "Mildly Gifted", range: "115 – 129", percent: "Top 15% to 2.5%" },
        { label: "Moderately Gifted", range: "130 – 144", percent: "Top 2.5% to 0.1%" },
        { label: "Highly Gifted", range: "145 – 159", percent: "Top 0.1% to 0.003%" },
        { label: "Exceptionally Gifted", range: "160 – 179", percent: "1 in 30,000+" },
        { label: "Profoundly Gifted", range: "180+", percent: "1 in 1,000,000+" }
      ],
      factors: [
        { title: "Intellectual Ability", text: "General mental capacity, abstract reasoning, and rapid information processing." },
        { title: "Creative Thinking", text: "The ability to produce original, high-quality ideas and solve problems in unconventional ways." },
        { title: "Task Commitment", text: "High levels of motivation, perseverance, and energy directed toward a specific area of interest." },
        { title: "Specific Aptitude", text: "Exceptional talent in a specific domain like mathematics, linguistics, or science." },
        { title: "Visual & Performing Arts", text: "Outstanding ability in music, art, dance, or drama that exceeds age-level expectations." }
      ],
      videosTitle: "Explanatory Videos",
      videos: [
        { title: "What is Giftedness?", url: "https://www.youtube.com/results?search_query=what+is+giftedness" },
        { title: "The Emotional Needs of Gifted Children", url: "https://www.youtube.com/results?search_query=emotional+needs+gifted+children" },
        { title: "Asynchronous Development in Gifted Learners", url: "https://www.youtube.com/watch?v=-xs_2CmnLOI" },
        { title: "Typical Protocol Errors", url: "https://www.youtube.com/watch?v=AAwMpS3XXtc" }
      ],
      legislationTitle: "Legislation",
      legislationLinks: [
        { title: "Federal Constitution of 1988, Article 208, Item III", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art208iii" },
        { title: "LDB - Law No. 9.394/1996, Chapter V, Articles 58, 59, and 59-A", url: "https://www.planalto.gov.br/ccivil_03/leis/l9394.htm#art58" },
        { title: "LBI - Law No. 13.146/2015, Article 28", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm#art28" },
        { title: "Federal Decree No. 7.611/2011, Article 1", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/decreto/d7611.htm#art1" },
        { title: "CNE/CEB Resolution No. 2/2001, Article 8", url: "http://portal.mec.gov.br/cne/arquivos/pdf/CEB0201.pdf" },
        { title: "ECA - Law No. 8.069/1990, Article 53", url: "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm#art53" }
      ]
    },
    checklist: {
      title: "Screening Checklist",
      description: "This test is only a screening so that from it a qualified professional can be sought; it is NOT an official test for identifying children with High Abilities/Giftedness.",
      instructions: "For each item, rate from 1 to 5 according to frequency: 1 = Never | 2 = Rarely | 3 = Sometimes | 4 = Frequently | 5 = Always",
      labels: {
        name: "Name:",
        age: "Age:",
        date: "Date:",
        evaluator: "Evaluator/Responsible:",
        finish: "Finish and Generate Report",
        reportTitle: "Assessment Report",
        student: "Student:",
        totalScore: "Total Score:",
        disclaimer: "* This document is a behavior screening and must be analyzed by specialized professionals.",
        saveDoc: "Download Report (.doc)"
      },
      domains: [
        {
          title: "Domain 1: Academic",
          questions: [
            "Demonstrates interest and curiosity in learning about diverse topics.",
            "Can easily understand and explain complex concepts.",
            "Presents above-average reading, writing, and comprehension skills.",
            "Performs mathematical calculations or logical operations quickly and accurately.",
            "Participates in extracurricular academic activities.",
            "Asks detailed questions and delves deep into specific topics.",
            "Reads on their own initiative about topics outside the curriculum.",
            "Applies knowledge in different contexts.",
            "Develops projects with little guidance.",
            "Likes to debate academic topics."
          ]
        },
        {
          title: "Domain 2: Creative",
          questions: [
            "Generates new and original ideas.",
            "Combines information to create something new.",
            "Finds innovative solutions.",
            "Demonstrates curiosity for new methods.",
            "Makes associations between unrelated ideas.",
            "Creates original works.",
            "Explores different ways of performing tasks.",
            "Presents an innovative vision.",
            "Improvises with ease.",
            "Likes to create stories or imaginary worlds."
          ]
        },
        {
          title: "Domain 3: Artistic",
          questions: [
            "Demonstrates artistic skills.",
            "Sensitivity to shapes and colors.",
            "Expresses themselves creatively.",
            "Creates pieces with originality.",
            "Participates in artistic activities.",
            "Presents their own style.",
            "Devotes time to the arts on their own initiative.",
            "Receives artistic recognition.",
            "Creates music or compositions.",
            "Creates scripts or choreographies."
          ]
        },
        {
          title: "Domain 4: Leadership",
          questions: [
            "Initiates and organizes group activities.",
            "Demonstrates confidence when speaking in public.",
            "Motiva peers.",
            "Resolves conflicts fairly.",
            "Knows how to delegate tasks.",
            "Makes assertive decisions.",
            "Assumes responsibility.",
            "Communicates persuasively.",
            "Maintains organization under pressure.",
            "Takes initiative to solve problems."
          ]
        },
        {
          title: "Domain 5: Motivation",
          questions: [
            "Demonstrates enthusiasm for learning.",
            "Works with dedication.",
            "Resolves problems independently.",
            "Spends extra time to improve.",
            "Sets goals.",
            "Participates on their own initiative.",
            "Demonstrates perseverance.",
            "Overcomes obstacles.",
            "Seeks continuous learning.",
            "Assumes new responsibilities."
          ]
        }
      ]
    },
    discovery: {
      title: "How to Discover It",
      steps: [
        { subtitle: "Early Milestones", text: "Look for reaching developmental milestones significantly earlier than peers, especially in language and abstract reasoning." },
        { subtitle: "Behavioral Observation", text: "Notice if the child becomes easily bored with repetitive tasks or shows an unusual depth of focus on topics of interest." },
        { subtitle: "School Performance", text: "While not all gifted kids get straight A's (some underachieve due to boredom), look for 'flashes' of brilliance or unconventional thinking." }
      ]
    },
    testing: {
      title: "Tests & Assessments",
      earlyTitle: "Early Childhood (Under Age 6)",
      schoolTitle: "School Age & Beyond",
      footerTitle: "When should you test?",
      footerText: "While testing can be done as early as age 2, many experts recommend waiting until age 6 for more stable results, unless early intervention or school placement is required.",
      disclaimer: "Tests are conducted by Qualified Professionals such as Neuropsychologists. According to the LDB (Law of Directives and Bases of National Education), the report has permanent validity for Educational rights purposes.",
      earlyChildhood: [
        { name: "SON-R", ageRange: "2 – 8 years", description: "Non-verbal intelligence test ideal for young children and/or children with language difficulties." },
        { name: "CMMS-3", ageRange: "3 – 9 years", description: "Columbia Mental Maturity Scale. Assesses general reasoning ability and visual discrimination." },
        { name: "Raven", ageRange: "4 – 11 years", description: "Raven's Progressive Matrices. A non-verbal test that measures abstract reasoning and fluid intelligence by identifying patterns." }
      ],
      schoolAge: [
        { name: "WISC-V", ageRange: "6 – 16 years", description: "Wechsler Intelligence Scale for Children. The gold standard for clinical IQ testing." },
        { name: "Woodcock-Johnson IV", ageRange: "2 – 90+ years", description: "Focuses on both cognitive abilities and academic achievement." },
        { name: "Qualitative Assessment", ageRange: "All Ages", description: "Portfolios, interviews, and teacher observations used alongside formal tests." }
      ]
    },
    parenting: {
      title: "Dealing with Gifted Kids",
      strategies: [
        "Advocate for educational acceleration or enrichment.",
        "Support their 'Overexcitabilities' (emotional, sensory, intellectual).",
        "Focus on effort rather than innate ability to build a growth mindset.",
        "Find like-minded peers; gifted kids often feel like 'aliens' among age-mates.",
        "Set clear boundaries; their advanced logic doesn't mean they are adults.",
        "Embrace Intensity (do not try to silence or extinguish the child's spark).",
        "Monitor asynchrony.",
        "Don't forget yourselves as Parents; being responsible for a child with High Abilities/Giftedness is very intense."
      ]
    },
    prosCons: {
      title: "Potential and Focus Areas",
      prosTitle: "Key Potentialities",
      consTitle: "Key Areas of Attention",
      pros: [
        "Exceptional problem-solving and creative potential.",
        "Deep capacity for empathy and social concern.",
        "Ability to master complex subjects rapidly.",
        "Rich and vibrant inner life and imagination.",
        "Strong intrinsic motivation when properly challenged.",
        "Highly efficient long-term memory.",
        "Learning speed without the need for repetitions.",
        "Advanced vocabulary and verbal fluency.",
        "Sharp and detailed perception.",
        "Autonomy and original thinking.",
      ],
      cons: [
        "Risk of perfectionism and fear of failure.",
        "Social isolation or feeling 'different' from peers.",
        "Asynchronous development leading to frustration.",
        "Sensory or emotional hypersensitivity.",
        "Propensity for boredom and underachievement in traditional settings.",
        "Early existential anxiety.",
        "Chronic boredom and under-learning in the school environment.",
        "Questioning behavior and challenging authorities.",
        "Impostor syndrome.",
        "Masking (social camouflage)."
      ]
    },
    local: {
      title: "Local Resources",
      description: "Find Specialists and Schools/Courses for Gifted Individuals",
      placeholder: "Enter city and country (e.g., London, UK)",
      search: "Search",
      searching: "Searching for local legislation and experts...",
      sources: "Sources & Further Reading",
      legislation: "Legislation",
      legislationDesc: "Understand your rights and the legal framework for gifted education.",
      specialists: "Specialists",
      specialistsDesc: "Find qualified psychologists and clinics for professional testing.",
      schools: "Schools",
      schoolsDesc: "Discover institutions with specialized programs and gifted expertise."
    },
    schoolImprovement: {
      title: "School Improvements",
      subtitle: "Guidelines for Educational Transformation",
      sections: [
        { title: "Educational Vision", content: "Implement a pedagogy that recognizes neurodivergence, focusing on individual potential rather than just standardized curricula. Implement empathy programs with safe spaces and workshops on High Abilities/Giftedness." },
        { title: "Learning Environment", content: "Create flexible and stimulating spaces that allow for deep exploration of interests and self-directed learning. Creation of Scientific Curiosity Clubs, Arts, language and technology and Interdisciplinary projects with external mentoring." },
        { title: "Inclusion", content: "Ensure that children with High Abilities are included in Specialized Educational Service programs, respecting their unique needs. Personalization of trajectories (logical-mathematical, linguistic, and creative), consideration of neurodiversity needs, and workshops for parents for identification and support." },
        { title: "360 Development", content: "Focus on holistic development: cognitive, emotional, social, and creative, avoiding early over-specialization. Perform challenges with multiple solutions, evidence evaluation, thinking workshops, peer mentoring roles." },
        { title: "Differentiated Assessment & Feedback", content: "Implement assessment methods that value creative processes and depth of understanding over standardized testing. Differentiated feedback focused on individual progress and qualitative growth. Scalable difficulty level tests and guided self-assessment." },
        { title: "Future & Transition", content: "Prepare for academic and professional transitions, offering mentorship and career guidance for exceptional minds. Robotics Programming and Data Science, digital ethics, bridging programs between grades, preparation for higher education admission exams." },
        { title: "Cognitive Wellbeing & Mental Health", content: "Monitor asynchrony and perfectionism, offering psychological support to handle intensity and sensitivity. Apply Mindfulness techniques, deceleration spaces during the day, evaluation of errors as learning, quick access to psychologists, peer support groups." },
        { title: "Organizational Management", content: "Train managers and teachers to identify HA/SD and implement effective curricular adaptations. High Abilities Committee with student participation, differentiated programs. Recognized tests and certifications, quality indicators and semi-annual program reviews." },
        { title: "Impact Goals", content: "Establish success indicators that measure engagement, satisfaction, and the blossoming of each student's potential. With diversification of interests and talent, engagement in school events." },
        { title: "IEP - Individualized Education Program", content: "The IEP is developed jointly between the school and the family. It is a fundamental tool to ensure that gifted students have their specific needs met, with clear goals, curricular adaptations, and constant monitoring of their integral development. It serves as a personalized roadmap that guides teachers and school staff in supporting the student's talent and vulnerabilities." }
      ]
    },
    sidebar: {
      navigation: "Navigation",
      needHelp: "Need Help?",
      helpText: "Click here and contact us, it will be a pleasure to assist you."
    },
    footer: {
      tagline: "Empowering parents with the knowledge to nurture exceptional potential. Altas Habilidades is a journey, not a destination.",
      copyright: "© 2026 Altas Habilidades Resource Center. All rights reserved."
    }
  },
  es: {
    nav: {
      overview: "Resumen",
      discovery: "Descubrimiento",
      testing: "Pruebas",
      parenting: "Crianza",
      proscons: "Potencialidad y Áreas de Atención",
      local: "Recursos Locales",
      schoolImprovement: "Mejoras en las Escuelas",
      checklist: "Prueba de Detección"
    },
    overview: {
      title: "Entendiendo la Superdotación",
      description: "La superdotación es más que un simple CI alto. Se trata de una forma diferente de procesar el mundo, llena de matices que equilibran un potencial extraordinario con vulnerabilidades específicas. Las personas superdotadas son neurodivergentes; es una condición del neurodesenrollo pero no es una patología, desviación o trastorno, y no tiene código CIE.",
      traitsTitle: "Rasgos Comunes",
      iqTitle: "Rangos de Clasificación de CI",
      iqHeaders: {
        classification: "Clasificación",
        range: "Rango de CI",
        prevalence: "Prevalencia"
      },
      iqAverages: "El CI mundial fluctúa entre 89 y 96 puntos y el brasileño entre 83 y 95 puntos.",
      factorsTitle: "Más allá del CI: Factores de Clasificación",
      traits: [
        "Ritmo de aprendizaje rápido y vocabulario avanzado",
        "Curiosidad intensa e intereses profundos",
        "Alta sensibilidad e intensidad emocional",
        "Forte senso de la justicia y preocupación moral",
        "Excelente memoria y habilidades para resolver problemas",
        "Desarrollo asincrónico (intelectual por delante del emocional/físico)"
      ],
      iqRanges: [
        { label: "Ligeramente Superdotado", range: "115 – 129", percent: "Top 15% al 2.5%" },
        { label: "Moderadamente Superdotado", range: "130 – 144", percent: "Top 2.5% al 0.1%" },
        { label: "Altamente Superdotado", range: "145 – 159", percent: "Top 0.1% al 0.003%" },
        { label: "Excepcionalmente Superdotado", range: "160 – 179", percent: "1 en 30,000+" },
        { label: "Profundamente Superdotado", range: "180+", percent: "1 en 1,000,000+" }
      ],
      factors: [
        { title: "Capacidad Intelectual", text: "Capacidad mental general, razonamiento abstracto y procesamiento rápido de información." },
        { title: "Pensamento Criativo", text: "La capacidad de producir ideas originales y de alta calidad y resolver problemas de formas poco convencionales." },
        { title: "Compromisso com a Tarefa", text: "Altos niveles de motivación, perseverancia y energía dirigidos hacia un área específica de interés." },
        { title: "Aptitude Específica", text: "Talento excepcional en un dominio específico como matemáticas, lingüística o ciencia." },
        { title: "Artes Visuais e Escénicas", text: "Capacidad sobresaliente en música, arte, danza o teatro que supera las expectativas para su edad." }
      ],
      videosTitle: "Videos Explicativos",
      videos: [
        { title: "¿Qué son las Altas Capacidades?", url: "https://www.youtube.com/results?search_query=que+son+altas+capacidades" },
        { title: "Neuropsicología e Identificación de la Superdotación", url: "https://www.youtube.com/results?search_query=identificacion+altas+capacidades" },
        { title: "Desarrollo Asincrónico en la Superdotación", url: "https://www.youtube.com/watch?v=-xs_2CmnLOI" },
        { title: "Errores en los Protocolos Típicos", url: "https://www.youtube.com/watch?v=AAwMpS3XXtc" }
      ],
      legislationTitle: "Legislación",
      legislationLinks: [
        { title: "Constitución Federal de 1988, Artículo 208, Inciso III", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art208iii" },
        { title: "LDB - Ley nº 9.394/1996, capítulo V, artículos 58, 59 e 59-A", url: "https://www.planalto.gov.br/ccivil_03/leis/l9394.htm#art58" },
        { title: "LBI - Ley nº 13.146/2015, artículo 28", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm#art28" },
        { title: "Decreto Federal nº 7.611/2011, artículo 1", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/decreto/d7611.htm#art1" },
        { title: "Resolución CNE/CEB nº 2/2001, artículo 8", url: "http://portal.mec.gov.br/cne/arquivos/pdf/CEB0201.pdf" },
        { title: "ECA - Ley nº 8.069/1990, artículo 53", url: "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm#art53" }
      ]
    },
    checklist: {
      title: "Prueba de Detección",
      description: "Esta prueba es solo una detección para que, a partir de ella, se pueda buscar a un profesional calificado; NO es una prueba oficial para identificar a niños con Altas Capacidades/Superdotación.",
      instructions: "Para cada ítem, califique de 1 a 5 según la frecuencia: 1 = Nunca | 2 = Raramente | 3 = A veces | 4 = Frecuentemente | 5 = Siempre",
      labels: {
        name: "Nombre:",
        age: "Edad:",
        date: "Fecha:",
        evaluator: "Evaluador/Responsable:",
        finish: "Finalizar y Generar Informe",
        reportTitle: "Informe de Evaluación",
        student: "Estudiante:",
        totalScore: "Puntuación Total:",
        disclaimer: "* Este documento es un tamizaje de comportamiento y debe ser analizado por profesionales especializados.",
        saveDoc: "Descargar Informe (.doc)"
      },
      domains: [
        {
          title: "Dominio 1: Académico",
          questions: [
            "Demuestra interés y curiosidad por aprender sobre diversos temas.",
            "Puede entender y explicar fácilmente conceptos complejos.",
            "Presenta habilidades de lectura, escritura y comprensión por encima de la media.",
            "Realiza cálculos matemáticos u operaciones lógicas con rapidez y precisión.",
            "Participa en actividades académicas extracurriculares.",
            "Hace preguntas detalladas y profundiza en temas específicos.",
            "Lee por iniciativa propia sobre temas fuera del currículo.",
            "Aplica los conocimientos en diferentes contextos.",
            "Desarrolla proyectos con poca orientación.",
            "Le gusta debatir temas académicos."
          ]
        },
        {
          title: "Dominio 2: Creativo",
          questions: [
            "Genera ideas nuevas y originales.",
            "Combina información para crear algo nuevo.",
            "Encuentra soluciones inovadoras.",
            "Demuestra curiosidad por nuevos métodos.",
            "Realiza asociaciones entre ideas no relacionadas.",
            "Crea obras originales.",
            "Explora diferentes formas de realizar tareas.",
            "Presenta una visión inovadora.",
            "Improvisa con facilidad.",
            "Le gusta crear historias o mundos imaginários."
          ]
        },
        {
          title: "Dominio 3: Artístico",
          questions: [
            "Demuestra habilidades artísticas.",
            "Sensibilidad para formas y colores.",
            "Se expresa creativamente.",
            "Crea piezas con originalidad.",
            "Participa en actividades artísticas.",
            "Presenta un estilo propio.",
            "Dedica tiempo a las artes por iniciativa propia.",
            "Recibe reconocimiento artístico.",
            "Crea música o composiciones.",
            "Crea guiones o coreografías."
          ]
        },
        {
          title: "Dominio 4: Liderazgo",
          questions: [
            "Inicia y organiza actividades grupales.",
            "Demuestra confianza al hablar en público.",
            "Motiva colegas.",
            "Resuelve conflictos de forma justa.",
            "Sabe delegar tareas.",
            "Toma decisiones asertivas.",
            "Asume responsabilidades.",
            "Se comunica de forma persuasiva.",
            "Mantiene la organización bajo presión.",
            "Toma la iniciativa para resolver problemas."
          ]
        },
        {
          title: "Dominio 5: Motivación",
          questions: [
            "Demuestra entusiasmo por aprender.",
            "Trabalha con dedicação.",
            "Resuelve problemas de forma independiente.",
            "Dedica tiempo extra para mejorar.",
            "Establece metas.",
            "Participa por iniciativa propia.",
            "Demuestra perseverancia.",
            "Supera obstáculos.",
            "Busca el aprendizaje continuo.",
            "Asume nuevas responsabilidades."
          ]
        }
      ]
    },
    discovery: {
      title: "Cómo Descubrirlo",
      steps: [
        { subtitle: "Hitos Tempranos", text: "Busque alcanzar hitos del desarrollo significativamente antes que sus pares, especialmente en el lenguaje y el razonamiento abstracto." },
        { subtitle: "Observación del Comportamiento", text: "Observe si el niño se aburre fácilmente con tareas repetitivas o muestra un enfoque inusual en temas de interés." },
        { subtitle: "Rendimento Escolar", text: "Aunque no todos los niños superdotados obtienen sobresalientes, busque 'destellos' de brillantez o pensamiento poco convencional." }
      ]
    },
    testing: {
      title: "Pruebas y Evaluaciones",
      earlyTitle: "Primera Infancia (Menos de 6 años)",
      schoolTitle: "Edad Escolar y Más Allá",
      footerTitle: "¿Cuándo deberías hacer la prueba?",
      footerText: "Aunque las pruebas se pueden realizar desde los 2 años, muchos expertos recomiendan esperar hasta los 6 años para obtener resultados más estables, a menos que se requiera intervención temprana o colocación escolar.",
      disclaimer: "Las pruebas son realizadas por profesionales cualificados, como neuropsicólogos. Según la LDB (Ley de Directrices y Bases de la Educación Nacional), el informe tiene validez permanente a efectos de derechos educativos.",
      earlyChildhood: [
        { name: "SON-R", ageRange: "2 – 8 años", description: "Test de inteligencia no verbal ideal para niños pequeños y/o niños con dificultades de lenguaje." },
        { name: "CMMS-3", ageRange: "3 – 9 años", description: "Escala de Madurez Mental de Columbia. Evalúa la capacidad de razonamiento general y el discernimiento visual." },
        { name: "Raven", ageRange: "4 – 11 años", description: "Matrices Progresivas de Raven. Una prueba no verbal que mide el razonamiento abstracto y la inteligencia fluida mediante la identificación de patrones." }
      ],
      schoolAge: [
        { name: "WISC-V", ageRange: "6 – 16 años", description: "Escala de Inteligencia de Wechsler para Niños. El estándar de oro para las pruebas clínicas de CI." },
        { name: "Woodcock-Johnson IV", ageRange: "2 – 90+ años", description: "Se centra tanto en las capacidades cognitivas como en el rendimiento académico." },
        { name: "Evaluación Cualitativa", ageRange: "Todas las edades", description: "Portafolios, entrevistas y observaciones de los maestros utilizados junto con pruebas formales." }
      ]
    },
    parenting: {
      title: "Tratando con Niños Superdotados",
      strategies: [
        "Abogar por la aceleración o el enriquecimiento educativo.",
        "Apoyar sus 'Superexcitabilidades' (emocionales, sensoriales, intelectuales).",
        "Centrarse en el esfuerzo en lugar de la capacidad innata para construir una mentalidad de crecimiento.",
        "Encontrar pares con ideas afines; los niños superdotados a menudo se sienten como 'extraños' entre sus compañeros de edad.",
        "Establecer límites claros; su lógica avanzada no significa que sean adultos.",
        "Acoja la Intensidad (no intente silenciar o apagar el brillo del niño).",
        "Monitoree la asincronía.",
        "No se olviden de ustedes mismos como Padres; ser responsable de un niño con Altas Capacidades/Superdotación es muy intenso."
      ]
    },
    prosCons: {
      title: "Potencialidad y Áreas de Atención",
      prosTitle: "Principales Potencialidades",
      consTitle: "Principales Áreas de Atención",
      pros: [
        "Excepcional capacidad de resolución de problemas y potencial creativo.",
        "Profunda capacidad de empatía y preocupación social.",
        "Capacidad para dominar temas complejos rápidamente.",
        "Vida interior e imaginación rica y vibrante.",
        "Fuerte motivación intrínseca cuando se le desafía adecuadamente.",
        "Memoria a largo plazo altamente eficiente.",
        "Velocidad de aprendizaje sin necesidad de repeticiones.",
        "Vocabulario avanzado y fluidez verbal.",
        "Percepción aguda y detallada.",
        "Autonomía y pensamiento original.",
      ],
      cons: [
        "Riesgo de perfeccionismo y miedo al fracaso.",
        "Aislamiento social o sentimiento de ser 'diferente' a sus pares.",
        "Desarrollo asincrónico que conduce a la frustración.",
        "Hipersensibilidad sensorial o emocional.",
        "Propensión al aburrimiento y al bajo rendimiento en entornos tradicionales.",
        "Ansiedad existencial temprana.",
        "Aburrimiento crónico y subaprendizaje en el entorno escolar.",
        "Comportamiento cuestionador y desafío a las autoridades.",
        "Síndrome del impostor.",
        "Enmascaramiento (camuflaje social)."
      ]
    },
    local: {
      title: "Recursos Locales",
      description: "Encuentre Especialistas y Escuelas/Cursos para Superdotados",
      placeholder: "Ingrese ciudad y país (ej: Madrid, España)",
      search: "Buscar",
      searching: "Buscando legislación local y expertos...",
      sources: "Fuentes y Lectura Adicional",
      legislation: "Legislación",
      legislationDesc: "Comprenda sus derechos y el marco legal para la educación de superdotados.",
      specialists: "Especialistas",
      specialistsDesc: "Encuentre psicólogos calificados y clínicas para pruebas profesionales.",
      schools: "Escuelas",
      schoolsDesc: "Descubra instituciones con programas especializados y experiencia en superdotación."
    },
    schoolImprovement: {
      title: "Mejoras en las Escuelas",
      subtitle: "Directrices para una Transformación Educativa",
      sections: [
        { title: "Visión Educativa", content: "Implementar una pedagogía que reconozca la neurodivergencia, centrándose en el potencial individual en lugar de currículos estandarizados. Implementar programas de empatía con espacios seguros y workshops sobre Altas Habilidades/Superdotación." },
        { title: "Ambiente de Aprendizaje", content: "Crear espacios flexibles y estimulantes que permitan la exploración profunda de intereses y el aprendizaje autodirigido. Creación de Clubes de Curiosidad Científica, Artes, lenguaje y tecnología y proyectos interdisciplinares con mentoría externa." },
        { title: "Inclusão", content: "Garantizar que los niños con Altas Capacidades se incluyan en programas de Servicio Educativo Especializado, respetando sus necesidades únicas. Personalización de trayectorias (lógico-matemática, lingüística y creativa), consideración de necesidades de neurodiversidad y talleres para padres para la identificación y el apoyo." },
        { title: "Desarrollo 360", content: "Centrarse en el desarrollo holístico: cognitivo, emocional, social y creativo, evitando la sobreespecialización temprana. Realizar desafíos con múltiples soluciones, evaluación de evidencias, talleres de pensamiento, roles de mentoría entre pares." },
        { title: "Evaluación y Feedbacks Diferenciados", content: "Implementar métodos de evaluación que valoricen los procesos creativos y la profundidad de comprensión en lugar de solo pruebas estandarizadas. Retroalimentación diferenciada enfocada en el progreso individual y el crecimiento cualitativo. Pruebas con niveles de dificultad escalables y autoevaluación guiada." },
        { title: "Futuro y Transición", content: "Preparar las transiciones académicas y profesionales, ofreciendo mentoría y orientación profesional para mentes excepcionales. Programación de Robótica y Ciencia de Datos, ética digital, programas de puente entre grados, preparación para exámenes de admisión a la educación superior." },
        { title: "Bienestar Cognitivo y Salud Mental", content: "Monitorear la asincronía y el perfeccionismo, ofreciendo apoyo psicológico para manejar la intensidad y la sensibilidad. Aplicar técnicas de Mindfulness, espacios de desaceleración durante el día, evaluación de errores como aprendizaje, acceso rápido a psicólogos y grupos de apoyo entre pares." },
        { title: "Gestão Organizacional", content: "Capacitar a directivos y docentes para identificar AC/SD e implementar adaptaciones curriculares efectivas. Comité de Altas Capacidades con participación de alumnos, programas diferenciados. Pruebas y certificaciones reconocidas, indicadores de calidad y revisiones semestrales de programas." },
        { title: "Metas de Impacto", content: "Establecer indicadores de éxito que midan el compromiso, la satisfacción y el florecimiento del potencial de cada alumno. Con diversificación de intereses y talento, compromiso en eventos escolares." },
        { title: "PEI - Plan Educativo Individualizado", content: "El PEI se realiza de forma conjunta entre la escuela y la familia. Es una herramienta fundamental para garantizar que el estudiante con superdotación sea atendido en sus necesidades específicas, con metas claras, adaptaciones curriculares y seguimiento constante de su desarrollo integral. Sirve como una hoja de ruta personalizada que orienta a los profesores y al equipo escolar en el apoyo al talento y las vulnerabilidades del alumno." }
      ]
    },
    sidebar: {
      navigation: "Navegación",
      needHelp: "¿Necesita Ayuda?",
      helpText: "Haga clic aquí y contáctenos, será un placer atenderle."
    },
    footer: {
      tagline: "Empoderando a los padres con el conocimiento para nutrir un potencial excepcional. Altas Habilidades es un viaje, no un destino.",
      copyright: "© 2026 Centro de Recursos Altas Habilidades. Todos los derechos reservados."
    }
  }
};
