export type Language = 'en' | 'pt' | 'zh' | 'es';

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export const GIFTED_CONTENT: Record<Language, any> = {
  en: {
    nav: {
      overview: "Overview",
      discovery: "Discovery",
      testing: "Testing",
      quiz: "Screening Quiz",
      costs: "Costs",
      parenting: "Parenting",
      proscons: "Pros & Cons",
      local: "Local Resources"
    },
    overview: {
      title: "Understanding Giftedness",
      description: "Giftedness is more than just high IQ. It's a different way of experiencing and processing the world.",
      traitsTitle: "Common Traits",
      iqTitle: "IQ Classification Ranges",
      iqHeaders: {
        classification: "Classification",
        range: "IQ Range",
        prevalence: "Prevalence"
      },
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
      earlyChildhood: [
        { name: "WPPSI-IV", ageRange: "2.5 – 7 years", description: "Wechsler Preschool and Primary Scale of Intelligence. Designed specifically for younger children." },
        { name: "Stanford-Binet V", ageRange: "2 years – Adult", description: "One of the few tests that can accurately measure giftedness in toddlers and preschoolers." },
        { name: "DAS-II", ageRange: "2.5 – 17 years", description: "Differential Ability Scales. Excellent for assessing specific cognitive strengths in young children." }
      ],
      schoolAge: [
        { name: "WISC-V", ageRange: "6 – 16 years", description: "Wechsler Intelligence Scale for Children. The gold standard for clinical IQ testing." },
        { name: "Woodcock-Johnson IV", ageRange: "2 – 90+ years", description: "Focuses on both cognitive abilities and academic achievement." },
        { name: "Qualitative Assessment", ageRange: "All Ages", description: "Portfolios, interviews, and teacher observations used alongside formal tests." }
      ]
    },
    screeningQuiz: {
      title: "Giftedness Screening Tool",
      description: "This is a preliminary screening tool based on common traits of gifted children. It is NOT a formal IQ test but can help determine if professional assessment is warranted.",
      questions: [
        { id: 1, text: "Does the child learn new concepts rapidly and with minimal repetition?" },
        { id: 2, text: "Does the child have an unusually large and advanced vocabulary for their age?" },
        { id: 3, text: "Does the child show intense curiosity and ask deep, complex questions?" },
        { id: 4, text: "Does the child have a remarkably long attention span for topics that interest them?" },
        { id: 5, text: "Does the child show strong emotional sensitivity or intensity?" },
        { id: 6, text: "Does the child have a sophisticated sense of humor (e.g., understanding puns or irony)?" },
        { id: 7, text: "Did the child reach developmental milestones (like reading or talking) significantly early?" },
        { id: 8, text: "Does the child prefer the company of older children or adults?" },
        { id: 9, text: "Does the child show a strong sense of justice or concern for global/moral issues?" },
        { id: 10, text: "Does the child think abstractly or see complex patterns that others might miss?" }
      ],
      results: [
        { minScore: 0, maxScore: 3, title: "Typical Development", text: "The child shows traits consistent with typical development. While they may have specific strengths, they may not require specialized gifted programming at this time.", potentialIQ: "90 – 110" },
        { minScore: 4, maxScore: 6, title: "Potential Giftedness", text: "The child shows several traits associated with giftedness. Providing enrichment activities and monitoring their progress is recommended. They may benefit from a more formal evaluation in the future.", potentialIQ: "115 – 125" },
        { minScore: 7, maxScore: 10, title: "High Potential for Giftedness", text: "The child exhibits many strong indicators of giftedness. A formal evaluation by an educational psychologist is highly recommended to better understand their needs and ensure they are appropriately challenged.", potentialIQ: "130+" }
      ],
      yes: "Yes",
      no: "No",
      seeResults: "See Results",
      retake: "Retake Quiz",
      learnTesting: "Learn About Formal Testing",
      resultTitle: "Your Result",
      iqRangeLabel: "Estimated Potential IQ Range*",
      iqDisclaimer: "*This is a statistical estimation based on traits and is NOT a formal IQ score."
    },
    costs: {
      title: "Costs of Assessment",
      details: [
        { category: "School-Based", price: "Free", info: "Public schools may test for 'Gifted & Talented' placement, but criteria vary widely by district." },
        { category: "Private Psychologist", price: "$500 - $2,500", info: "Comprehensive clinical evaluation including emotional and social assessment." },
        { category: "University Clinics", price: "$300 - $800", info: "Often more affordable, performed by graduate students under supervision." }
      ]
    },
    parenting: {
      title: "Dealing with Gifted Kids",
      strategies: [
        "Advocate for educational acceleration or enrichment.",
        "Support their 'Overexcitabilities' (emotional, sensory, intellectual).",
        "Focus on effort rather than innate ability to build a growth mindset.",
        "Find like-minded peers; gifted kids often feel like 'aliens' among age-mates.",
        "Set clear boundaries; their advanced logic doesn't mean they are adults."
      ]
    },
    prosCons: {
      title: "The Dual Nature of Giftedness",
      prosTitle: "Top 5 Pros",
      consTitle: "Top 5 Cons",
      pros: [
        "Exceptional problem-solving and creative potential.",
        "Deep capacity for empathy and social concern.",
        "Ability to master complex subjects rapidly.",
        "Rich and vibrant inner life and imagination.",
        "Strong intrinsic motivation when properly challenged."
      ],
      cons: [
        "Risk of perfectionism and fear of failure.",
        "Social isolation or feeling 'different' from peers.",
        "Asynchronous development leading to frustration.",
        "Sensory or emotional hypersensitivity.",
        "Propensity for boredom and underachievement in traditional settings."
      ]
    },
    local: {
      title: "Local Resources",
      description: "Find legislation, specialists, and schools specifically for your area.",
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
    sidebar: {
      navigation: "Navigation",
      needHelp: "Need Help?",
      helpText: "Consult with a licensed educational psychologist for a formal evaluation."
    },
    footer: {
      tagline: "Empowering parents with the knowledge to nurture exceptional potential. Giftedmind is a journey, not a destination.",
      copyright: "© 2026 GiftedMind Resource Center. All rights reserved."
    }
  },
  pt: {
    nav: {
      overview: "Visão Geral",
      discovery: "Descoberta",
      testing: "Testes",
      quiz: "Teste de Triagem",
      costs: "Custos",
      parenting: "Criação",
      proscons: "Prós e Contras",
      local: "Recursos Locais"
    },
    overview: {
      title: "Entendendo a Superdotação",
      description: "Superdotação é mais do que apenas um QI alto. É uma maneira diferente de vivenciar e processar o mundo.",
      traitsTitle: "Traços Comuns",
      iqTitle: "Faixas de Classificação de QI",
      iqHeaders: {
        classification: "Classificação",
        range: "Faixa de QI",
        prevalence: "Prevalência"
      },
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
      earlyChildhood: [
        { name: "WPPSI-IV", ageRange: "2.5 – 7 anos", description: "Escala de Inteligência Wechsler para Pré-escolar e Primária. Projetada especificamente para crianças pequenas." },
        { name: "Stanford-Binet V", ageRange: "2 anos – Adulto", description: "Um dos poucos testes que pode medir com precisão a superdotação em bebês e pré-escolares." },
        { name: "DAS-II", ageRange: "2.5 – 17 anos", description: "Escalas de Habilidade Diferencial. Excelente para avaliar pontos fortes cognitivos específicos em crianças pequenas." }
      ],
      schoolAge: [
        { name: "WISC-V", ageRange: "6 – 16 anos", description: "Escala de Inteligência Wechsler para Crianças. O padrão ouro para testes de QI clínicos." },
        { name: "Woodcock-Johnson IV", ageRange: "2 – 90+ anos", description: "Foca tanto em habilidades cognitivas quanto em desempenho acadêmico." },
        { name: "Avaliação Qualitativa", ageRange: "Todas as Idades", description: "Portfólios, entrevistas e observações de professores usados junto com testes formais." }
      ]
    },
    screeningQuiz: {
      title: "Ferramenta de Triagem de Superdotação",
      description: "Esta é uma ferramenta de triagem preliminar baseada em traços comuns de crianças superdotadas. NÃO é um teste de QI formal, mas pode ajudar a determinar se uma avaliação profissional é necessária.",
      questions: [
        { id: 1, text: "A criança aprende novos conceitos rapidamente e com repetição mínima?" },
        { id: 2, text: "A criança tem um vocabulário excepcionalmente grande e avançado para a idade?" },
        { id: 3, text: "A criança mostra curiosidade intensa e faz perguntas profundas e complexas?" },
        { id: 4, text: "A criança tem um tempo de atenção notavelmente longo para tópicos que a interessam?" },
        { id: 5, text: "A criança mostra forte sensibilidade ou intensidade emocional?" },
        { id: 6, text: "A criança tem um senso de humor sofisticado (ex: entende trocadilhos ou ironia)?" },
        { id: 7, text: "A criança atingiu marcos de desenvolvimento (como ler ou falar) significativamente cedo?" },
        { id: 8, text: "A criança prefere a companhia de crianças mais velhas ou adultos?" },
        { id: 9, text: "A criança mostra um forte senso de justiça ou preocupação com questões globais/morais?" },
        { id: 10, text: "A criança pensa abstratamente ou vê padrões complexos que outros podem perder?" }
      ],
      results: [
        { minScore: 0, maxScore: 3, title: "Desenvolvimento Típico", text: "A criança mostra traços consistentes com o desenvolvimento típico. Embora possa ter pontos fortes específicos, pode não precisar de programação especializada para superdotados no momento.", potentialIQ: "90 – 110" },
        { minScore: 4, maxScore: 6, title: "Potencial Superdotação", text: "A criança mostra vários traços associados à superdotação. Recomenda-se fornecer atividades de enriquecimento e monitorar seu progresso. Ela pode se beneficiar de uma avaliação mais formal no futuro.", potentialIQ: "115 – 125" },
        { minScore: 7, maxScore: 10, title: "Alto Potencial de Superdotação", text: "A criança exibe muitos indicadores fortes de superdotação. Uma avaliação formal por um psicólogo educacional é altamente recomendada para entender melhor suas necessidades.", potentialIQ: "130+" }
      ],
      yes: "Sim",
      no: "Não",
      seeResults: "Ver Resultados",
      retake: "Refazer Teste",
      learnTesting: "Saiba mais sobre Testes Formais",
      resultTitle: "Seu Resultado",
      iqRangeLabel: "Faixa de QI Potencial Estimada*",
      iqDisclaimer: "*Esta é uma estimativa estatística baseada em traços e NÃO é uma pontuação de QI formal."
    },
    costs: {
      title: "Custos de Avaliação",
      details: [
        { category: "Baseado na Escola", price: "Grátis", info: "Escolas públicas podem testar para colocação em programas de superdotados, mas os critérios variam muito." },
        { category: "Psicólogo Particular", price: "$500 - $2.500", info: "Avaliação clínica abrangente, incluindo avaliação emocional e social." },
        { category: "Clínicas Universitárias", price: "$300 - $800", info: "Muitas vezes mais acessível, realizado por estudantes de pós-graduação sob supervisão." }
      ]
    },
    parenting: {
      title: "Lidando com Crianças Superdotadas",
      strategies: [
        "Defenda a aceleração educacional ou enriquecimento.",
        "Apoie suas 'Superexcitabilidades' (emocionais, sensoriais, intelectuais).",
        "Foque no esforço em vez da habilidade inata para construir uma mentalidade de crescimento.",
        "Encontre pares com interesses semelhantes; crianças superdotadas muitas vezes se sentem 'estranhas' entre colegas da mesma idade.",
        "Estabeleça limites claros; sua lógica avançada não significa que sejam adultos."
      ]
    },
    prosCons: {
      title: "A Natureza Dual da Superdotação",
      prosTitle: "Top 5 Prós",
      consTitle: "Top 5 Contras",
      pros: [
        "Excepcional resolução de problemas e potencial criativo.",
        "Profunda capacidade de empatia e preocupação social.",
        "Habilidade de dominar assuntos complexos rapidamente.",
        "Vida interior e imaginação ricas e vibrantes.",
        "Forte motivação intrínseca quando devidamente desafiado."
      ],
      cons: [
        "Risco de perfeccionismo e medo do fracasso.",
        "Isolamento social ou sensação de ser 'diferente' dos pares.",
        "Desenvolvimento assíncrono levando à frustração.",
        "Hipersensibilidade sensorial ou emocional.",
        "Propensão ao tédio e baixo desempenho em ambientes tradicionais."
      ]
    },
    local: {
      title: "Recursos Locais",
      description: "Encontre legislação, especialistas e escolas especificamente para sua área.",
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
    sidebar: {
      navigation: "Navegação",
      needHelp: "Precisa de Ajuda?",
      helpText: "Consulte um psicólogo educacional licenciado para uma avaliação formal."
    },
    footer: {
      tagline: "Capacitando pais com o conhecimento para nutrir um potencial excepcional. A superdotação é uma jornada, não um destino.",
      copyright: "© 2026 Centro de Recursos GiftedMind. Todos os direitos reservados."
    }
  },
  zh: {
    nav: {
      overview: "概览",
      discovery: "发现",
      testing: "测试",
      quiz: "筛选测试",
      costs: "费用",
      parenting: "育儿",
      proscons: "优缺点",
      local: "本地资源"
    },
    overview: {
      title: "了解天赋",
      description: "天赋不仅仅是高智商。它是一种体验和处理世界的不同方式。",
      traitsTitle: "共同特征",
      iqTitle: "智商分类范围",
      iqHeaders: {
        classification: "分类",
        range: "智商范围",
        prevalence: "盛行率"
      },
      factorsTitle: "智商之外：分类因素",
      traits: [
        "学习速度快，词汇量大",
        "强烈的好奇心和深厚的兴趣",
        "高度敏感和情绪强度",
        "强烈的正义感和道德关怀",
        "出色的记忆力和解决问题的能力",
        "异步发展（智力领先于情绪/身体）"
      ],
      iqRanges: [
        { label: "轻度天赋", range: "115 – 129", percent: "前 15% 到 2.5%" },
        { label: "中度天赋", range: "130 – 144", percent: "前 2.5% 到 0.1%" },
        { label: "高度天赋", range: "145 – 159", percent: "前 0.1% 到 0.003%" },
        { label: "异常天赋", range: "160 – 179", percent: "三万分之一以上" },
        { label: "极度天赋", range: "180+", percent: "百万分之一以上" }
      ],
      factors: [
        { title: "智力能力", text: "一般智力容量、抽象推理和快速信息处理。" },
        { title: "创造性思维", text: "产生原创、高质量想法并以非常规方式解决问题的能力。" },
        { title: "任务承诺", text: "针对特定兴趣领域的高水平动力、毅力和精力。" },
        { title: "特定倾向", text: "在数学、语言学或科学等特定领域的杰出才能。" },
        { title: "视觉与表演艺术", text: "在音乐、艺术、舞蹈或戏剧方面超出年龄预期的杰出能力。" }
      ]
    },
    discovery: {
      title: "如何发现",
      steps: [
        { subtitle: "早期里程碑", text: "寻找比同龄人显著更早达到的发展里程碑，特别是在语言和抽象推理方面。" },
        { subtitle: "行为观察", text: "注意孩子是否容易对重复性任务感到厌倦，或者对感兴趣的话题表现出异常的专注。" },
        { subtitle: "学校表现", text: "虽然并非所有天才儿童都能获得全 A（有些因无聊而表现不佳），但要寻找才华横溢或非常规思维的“闪光点”。" }
      ]
    },
    testing: {
      title: "测试与评估",
      earlyTitle: "幼儿期（6 岁以下）",
      schoolTitle: "学龄及以后",
      footerTitle: "什么时候应该测试？",
      footerText: "虽然测试最早可以在 2 岁进行，但许多专家建议等到 6 岁以获得更稳定的结果，除非需要早期干预或学校安置。",
      earlyChildhood: [
        { name: "WPPSI-IV", ageRange: "2.5 – 7 岁", description: "韦氏学前和初级智力量表。专为幼儿设计。" },
        { name: "Stanford-Binet V", ageRange: "2 岁 – 成年", description: "少数能准确测量幼儿和学龄前儿童天赋的测试之一。" },
        { name: "DAS-II", ageRange: "2.5 – 17 岁", description: "差异能力量表。非常适合评估幼儿的特定认知优势。" }
      ],
      schoolAge: [
        { name: "WISC-V", ageRange: "6 – 16 岁", description: "韦氏儿童智力量表。临床智商测试的金标准。" },
        { name: "Woodcock-Johnson IV", ageRange: "2 – 90+ 岁", description: "侧重于认知能力和学术成就。" },
        { name: "定性评估", ageRange: "所有年龄段", description: "作品集、访谈和教师观察与正式测试结合使用。" }
      ]
    },
    screeningQuiz: {
      title: "天赋筛选工具",
      description: "这是一个基于天才儿童共同特征的初步筛选工具。它不是正式的智商测试，但可以帮助确定是否需要专业评估。",
      questions: [
        { id: 1, text: "孩子是否能快速学习新概念且重复次数极少？" },
        { id: 2, text: "孩子的词汇量是否在同龄人中异常大且先进？" },
        { id: 3, text: "孩子是否表现出强烈的好奇心并提出深刻、复杂的问题？" },
        { id: 4, text: "孩子对感兴趣的话题是否具有显著持久的注意力？" },
        { id: 5, text: "孩子是否表现出强烈的情绪敏感性或强度？" },
        { id: 6, text: "孩子是否具有复杂的幽默感（例如理解双关语或讽刺）？" },
        { id: 7, text: "孩子是否显著更早地达到了发展里程碑（如阅读或说话）？" },
        { id: 8, text: "孩子是否更喜欢与年龄较大的孩子或成人相处？" },
        { id: 9, text: "孩子是否表现出强烈的正义感或对全球/道德问题的关注？" },
        { id: 10, text: "孩子是否能进行抽象思考或看到别人可能忽略的复杂模式？" }
      ],
      results: [
        { minScore: 0, maxScore: 3, title: "典型发展", text: "孩子表现出与典型发展一致的特征。虽然他们可能有特定的优势，但目前可能不需要专门的天才教育计划。", potentialIQ: "90 – 110" },
        { minScore: 4, maxScore: 6, title: "潜在天赋", text: "孩子表现出几种与天赋相关的特征。建议提供丰富性活动并监测其进展。他们将来可能会从更正式的评估中受益。", potentialIQ: "115 – 125" },
        { minScore: 7, maxScore: 10, title: "高度天赋潜力", text: "孩子表现出许多强烈的天赋指标。强烈建议由教育心理学家进行正式评估，以更好地了解他们的需求。", potentialIQ: "130+" }
      ],
      yes: "是",
      no: "否",
      seeResults: "查看结果",
      retake: "重新测试",
      learnTesting: "了解正式测试",
      resultTitle: "测试结果",
      iqRangeLabel: "估计潜在智商范围*",
      iqDisclaimer: "*这是基于特征的统计估计，并非正式智商分数。"
    },
    costs: {
      title: "评估费用",
      details: [
        { category: "学校基础", price: "免费", info: "公立学校可能会测试“天才与才华”安置，但标准因地区而异。" },
        { category: "私人心理学家", price: "$500 - $2,500", info: "全面的临床评估，包括情绪和社交评估。" },
        { category: "大学诊所", price: "$300 - $800", info: "通常更实惠，由研究生在监督下进行。" }
      ]
    },
    parenting: {
      title: "应对天才儿童",
      strategies: [
        "倡导教育加速或丰富化。",
        "支持他们的“过度兴奋性”（情绪、感官、智力）。",
        "专注于努力而非先天能力，以建立成长型思维。",
        "寻找志同道合的同伴；天才儿童在同龄人中常感到自己像“外星人”。",
        "设定明确的界限；他们先进的逻辑并不意味着他们是成年人。"
      ]
    },
    prosCons: {
      title: "天赋的双重性",
      prosTitle: "前 5 大优点",
      consTitle: "前 5 大缺点",
      pros: [
        "卓越的解决问题能力和创造潜力。",
        "深厚的共情能力和社会关怀。",
        "快速掌握复杂学科的能力。",
        "丰富而充满活力的内心生活和想象力。",
        "在受到适当挑战时具有强烈的内在动力。"
      ],
      cons: [
        "完美主义和害怕失败的风险。",
        "社交孤立或感觉与同龄人“不同”。",
        "异步发展导致挫败感。",
        "感官或情绪过度敏感。",
        "在传统环境中容易感到无聊和表现不佳。"
      ]
    },
    local: {
      title: "本地资源",
      description: "查找专门针对您所在地区的立法、专家和学校。",
      placeholder: "输入城市和国家（例如：北京，中国）",
      search: "搜索",
      searching: "正在搜索本地立法和专家...",
      sources: "来源与进一步阅读",
      legislation: "立法",
      legislationDesc: "了解您的权利和天才教育的法律框架。",
      specialists: "专家",
      specialistsDesc: "寻找合格的心理学家和诊所进行专业测试。",
      schools: "学校",
      schoolsDesc: "发现具有专门计划和天才专业知识的机构。"
    },
    sidebar: {
      navigation: "导航",
      needHelp: "需要帮助？",
      helpText: "咨询执业教育心理学家进行正式评估。"
    },
    footer: {
      tagline: "赋予父母知识，以培养非凡的潜力。天赋是一段旅程，而不是终点。",
      copyright: "© 2026 GiftedMind 资源中心。保留所有权利。"
    }
  },
  es: {
    nav: {
      overview: "Resumen",
      discovery: "Descubrimiento",
      testing: "Pruebas",
      quiz: "Cuestionario",
      costs: "Costos",
      parenting: "Crianza",
      proscons: "Pros y Contras",
      local: "Recursos Locales"
    },
    overview: {
      title: "Entendiendo la Superdotación",
      description: "La superdotación es más que un simple coeficiente intelectual alto. Es una forma diferente de experimentar y procesar el mundo.",
      traitsTitle: "Rasgos Comunes",
      iqTitle: "Rangos de Clasificación de CI",
      iqHeaders: {
        classification: "Clasificación",
        range: "Rango de CI",
        prevalence: "Prevalencia"
      },
      factorsTitle: "Más allá del CI: Factores de Clasificación",
      traits: [
        "Ritmo de aprendizaje rápido y vocabulario avanzado",
        "Curiosidad intensa e intereses profundos",
        "Alta sensibilidad e intensidad emocional",
        "Fuerte sentido de la justicia y preocupación moral",
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
        { title: "Pensamiento Creativo", text: "La capacidad de producir ideas originales y de alta calidad y resolver problemas de formas poco convencionales." },
        { title: "Compromiso con la Tarea", text: "Altos niveles de motivación, perseverancia y energía dirigidos hacia un área específica de interés." },
        { title: "Aptitud Específica", text: "Talento excepcional en un dominio específico como matemáticas, lingüística o ciencia." },
        { title: "Artes Visuales y Escénicas", text: "Capacidad sobresaliente en música, arte, danza o teatro que supera las expectativas para su edad." }
      ]
    },
    discovery: {
      title: "Cómo Descubrirlo",
      steps: [
        { subtitle: "Hitos Tempranos", text: "Busque alcanzar hitos del desarrollo significativamente antes que sus pares, especialmente en el lenguaje y el razonamiento abstracto." },
        { subtitle: "Observación del Comportamiento", text: "Observe si el niño se aburre fácilmente con tareas repetitivas o muestra un enfoque inusual en temas de interés." },
        { subtitle: "Rendimiento Escolar", text: "Aunque no todos los niños superdotados obtienen sobresalientes, busque 'destellos' de brillantez o pensamiento poco convencional." }
      ]
    },
    testing: {
      title: "Pruebas y Evaluaciones",
      earlyTitle: "Primera Infancia (Menos de 6 años)",
      schoolTitle: "Edad Escolar y Más Allá",
      footerTitle: "¿Cuándo deberías hacer la prueba?",
      footerText: "Aunque las pruebas se pueden realizar desde los 2 años, muchos expertos recomiendan esperar hasta los 6 años para obtener resultados más estables, a menos que se requiera intervención temprana o colocación escolar.",
      earlyChildhood: [
        { name: "WPPSI-IV", ageRange: "2.5 – 7 años", description: "Escala de Inteligencia de Wechsler para Preescolar y Primaria. Diseñada específicamente para niños pequeños." },
        { name: "Stanford-Binet V", ageRange: "2 años – Adulto", description: "Una de las pocas pruebas que puede medir con precisión la superdotación en niños pequeños y preescolares." },
        { name: "DAS-II", ageRange: "2.5 – 17 años", description: "Escalas de Habilidad Diferencial. Excelente para evaluar fortalezas cognitivas específicas en niños pequeños." }
      ],
      schoolAge: [
        { name: "WISC-V", ageRange: "6 – 16 años", description: "Escala de Inteligencia de Wechsler para Niños. El estándar de oro para las pruebas clínicas de CI." },
        { name: "Woodcock-Johnson IV", ageRange: "2 – 90+ años", description: "Se centra tanto en las capacidades cognitivas como en el rendimiento académico." },
        { name: "Evaluación Cualitativa", ageRange: "Todas las edades", description: "Portafolios, entrevistas y observaciones de los maestros utilizados junto con pruebas formales." }
      ]
    },
    screeningQuiz: {
      title: "Herramienta de Detección de Superdotación",
      description: "Esta es una herramienta de detección preliminar basada en rasgos comunes de niños superdotados. NO es una prueba de CI formal, pero puede ayudar a determinar si se justifica una evaluación profesional.",
      questions: [
        { id: 1, text: "¿El niño aprende nuevos conceptos rápidamente y con una repetición mínima?" },
        { id: 2, text: "¿El niño tiene un vocabulario inusualmente grande y avanzado para su edad?" },
        { id: 3, text: "¿El niño muestra una curiosidad intensa y hace preguntas profundas y complejas?" },
        { id: 4, text: "¿El niño tiene un tiempo de atención notablemente largo para los temas que le interesan?" },
        { id: 5, text: "¿El niño muestra una fuerte sensibilidad o intensidad emocional?" },
        { id: 6, text: "¿El niño tiene un sentido del humor sofisticado (ej: entiende juegos de palabras o ironía)?" },
        { id: 7, text: "¿El niño alcanzó hitos del desarrollo (como leer o hablar) significativamente temprano?" },
        { id: 8, text: "¿El niño prefiere la compañía de niños mayores o adultos?" },
        { id: 9, text: "¿El niño muestra un fuerte sentido de la justicia o preocupación por temas globales/morales?" },
        { id: 10, text: "¿El niño piensa de forma abstracta o ve patrones complejos que otros podrían pasar por alto?" }
      ],
      results: [
        { minScore: 0, maxScore: 3, title: "Desarrollo Típico", text: "El niño muestra rasgos consistentes con el desarrollo típico. Aunque puede tener fortalezas específicas, es posible que no requiera una programación especializada para superdotados en este momento.", potentialIQ: "90 – 110" },
        { minScore: 4, maxScore: 6, title: "Superdotación Potencial", text: "El niño muestra varios rasgos asociados con la superdotación. Se recomienda proporcionar actividades de enriquecimiento y monitorear su progreso.", potentialIQ: "115 – 125" },
        { minScore: 7, maxScore: 10, title: "Alto Potencial de Superdotación", text: "El niño exhibe muchos indicadores fuertes de superdotación. Se recomienda encarecidamente una evaluación formal por parte de un psicólogo educativo.", potentialIQ: "130+" }
      ],
      yes: "Sí",
      no: "No",
      seeResults: "Ver Resultados",
      retake: "Repetir Cuestionario",
      learnTesting: "Aprender sobre Pruebas Formales",
      resultTitle: "Tu Resultado",
      iqRangeLabel: "Rango de CI Potencial Estimado*",
      iqDisclaimer: "*Esta es una estimación estadística basada en rasgos y NO es una puntuación de CI formal."
    },
    costs: {
      title: "Costos de la Evaluación",
      details: [
        { category: "Basado en la Escuela", price: "Gratis", info: "Las escuelas públicas pueden realizar pruebas para la colocación en programas de superdotados, pero los criterios varían según el distrito." },
        { category: "Psicólogo Privado", price: "$500 - $2,500", info: "Evaluación clínica integral que incluye evaluación emocional y social." },
        { category: "Clínicas Universitarias", price: "$300 - $800", info: "A menudo más asequible, realizado por estudiantes de posgrado bajo supervisión." }
      ]
    },
    parenting: {
      title: "Tratando con Niños Superdotados",
      strategies: [
        "Abogar por la aceleración o el enriquecimiento educativo.",
        "Apoyar sus 'Superexcitabilidades' (emocionales, sensoriales, intelectuales).",
        "Centrarse en el esfuerzo en lugar de la capacidad innata para construir una mentalidad de crecimiento.",
        "Encontrar pares con ideas afines; los niños superdotados a menudo se sienten como 'extraños' entre sus compañeros de edad.",
        "Establecer límites claros; su lógica avanzada no significa que sean adultos."
      ]
    },
    prosCons: {
      title: "La Naturaleza Dual de la Superdotación",
      prosTitle: "Top 5 Pros",
      consTitle: "Top 5 Contras",
      pros: [
        "Excepcional capacidad de resolución de problemas y potencial creativo.",
        "Profunda capacidad de empatía y preocupación social.",
        "Capacidad para dominar temas complejos rápidamente.",
        "Vida interior e imaginación rica y vibrante.",
        "Fuerte motivación intrínseca cuando se le desafía adecuadamente."
      ],
      cons: [
        "Riesgo de perfeccionismo y miedo al fracaso.",
        "Aislamiento social o sentimiento de ser 'diferente' a sus pares.",
        "Desarrollo asincrónico que conduce a la frustración.",
        "Hipersensibilidad sensorial o emocional.",
        "Propensión al aburrimiento y al bajo rendimiento en entornos tradicionales."
      ]
    },
    local: {
      title: "Recursos Locales",
      description: "Encuentre legislación, especialistas y escuelas específicamente para su área.",
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
    sidebar: {
      navigation: "Navegación",
      needHelp: "¿Necesita ayuda?",
      helpText: "Consulte con un psicólogo educativo licenciado para una evaluación formal."
    },
    footer: {
      tagline: "Empoderando a los padres con el conocimiento para nutrir un potencial excepcional. La superdotación es un viaje, no un destino.",
      copyright: "© 2026 Centro de Recursos GiftedMind. Todos los derechos reservados."
    }
  }
};
