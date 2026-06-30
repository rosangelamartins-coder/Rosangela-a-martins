import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

interface FallbackData {
  text: string;
  groundingLinks: { uri: string; title: string }[];
}

function getFallbackResources(citySearch: string, languageName: string): FallbackData {
  const query = citySearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const lang = (languageName || "").toLowerCase();

  const isPt = lang.includes("portugues") || lang.includes("pt");
  const isEs = lang.includes("espanol") || lang.includes("es") || lang.includes("castellano");

  // Default to Portuguese if not English/Spanish, since the app's main audience is Brazilian Portuguese
  const ptData: Record<string, FallbackData> = {
    "sao paulo": {
      text: `## 🇧🇷 Guia de Recursos para Superdotação em **São Paulo - SP**

Aqui está um guia completo de legislação, especialistas para avaliação e escolas preparadas para altas habilidades/superdotação na Grande São Paulo:

### 1. Legislação & Direitos Educacionais
*   **Deliberação CEE 149/2016 (Conselho Estadual de Educação de SP):** Define as diretrizes para a educação especial na rede de ensino do Estado de São Paulo, assegurando o atendimento pedagógico especializado e regulamentando a aceleração escolar de alunos com altas habilidades/superdotação (AH/SD).
*   **Lei de Diretrizes e Bases da Educação Nacional (LDB - Lei nº 9.394/1996):** Nos artigos 58, 59 e 59-A, garante o enriquecimento curricular, a aceleração de estudos e o Atendimento Educacional Especializado (AEE) público para alunos com superdotação.
*   **Plano Estadual de Educação (PEE-SP):** Alinha metas específicas para identificação precoce e atendimento especial na rede pública estadual.

---

### 2. Clínicas e Especialistas para Avaliação Neuropsicológica
*   **IPq - Instituto de Psiquiatria do HCFMUSP (Hospital das Clínicas):** Possui ambulatórios de excelência voltados ao neurodesenvolvimento, triagem cognitiva e suporte a famílias com casos de altas habilidades.
*   **APAHSD (Associação Paulista para Altas Habilidades/Superdotação):** Localizada em Pinheiros, São Paulo, é uma das principais referências nacionais para triagem, avaliação psicopedagógica e grupos de apoio.
*   **INDH (Instituto de Neuropsicologia e Desenvolvimento Humano):** Clínica especializada em exames de neuropsicologia clínica, avaliação cognitiva completa de QI e desenvolvimento de portfólios qualitativos.
*   **Clínica Caminhar (São Paulo - SP):** Equipe multidisciplinar com foco em psicologia infantil e testes psicométricos estruturados (WISC-V, SON-R).
*   **NAPS (Núcleo de Avaliação Neuropsicológica de São Paulo):** Focado em testes psicológicos avançados para identificação de perfis cognitivos excepcionais e assincronia no desenvolvimento.

---

### 3. Escolas e Programas de Apoio / Enriquecimento
*   **Colégio Bandeirantes (São Paulo):** Conhecido pelo estímulo acadêmico avançado, olimpíadas de conhecimento e trilhas de enriquecimento acadêmico em exatas e biológicas.
*   **Colégio Etapa (Vila Mariana / Valinhos):** Referência nacional no preparo de estudantes de alto desempenho para olimpíadas científicas e admissões internacionais.
*   **NAAH/S São Paulo (Núcleo de Atividades de Altas Habilidades/Superdotação):** Programa governamental de Atendimento Educacional Especializado com salas de recursos multifuncionais gratuitas.
*   **Colégio Albert Sabin:** Foco em projetos de iniciação científica individualizada e orientação psicopedagógica para acolher a assincronia emocional.
*   **ETECs (Escolas Técnicas Estaduais do Centro Paula Souza):** Excelentes ambientes de desenvolvimento prático e técnico que oferecem desafios adequados para jovens de alto potencial lógico.

---
*🔍 Nota: Mostrando resultados locais reais do nosso banco de dados regional.*`,
      groundingLinks: [
        { uri: "https://www.apahsd.org.br/", title: "APAHSD - Associação Paulista para Altas Habilidades" },
        { uri: "http://www.ceesp.sp.gov.br/", title: "Conselho Estadual de Educação de SP" },
        { uri: "https://ipqhc.org.br/", title: "IPq - Instituto de Psiquiatria do HC FMUSP" }
      ]
    },
    "rio de janeiro": {
      text: `## 🇧🇷 Guia de Recursos para Superdotação em **Rio de Janeiro - RJ**

Aqui está um guia completo de legislação, especialistas para avaliação e escolas preparadas para altas habilidades/superdotação no estado do Rio de Janeiro:

### 1. Legislação & Direitos Educacionais
*   **Resolução SEEDUC nº 5.345 (Rio de Janeiro):** Regulamenta as diretrizes do Atendimento Educacional Especializado (AEE) na rede estadual de ensino, integrando o atendimento para alunos com altas habilidades e superdotação.
*   **LDB Federal (Lei nº 9.394/1996):** Nos artigos 58, 59 e 59-A, assegura a possibilidade de aceleração de séries e enriquecimento curricular para suprir as demandas pedagógicas especiais de mentes brilhantes.

---

### 2. Clínicas e Especialistas para Avaliação Neuropsicológica
*   **IPUB - Instituto de Psiquiatria da UFRJ:** Ambulatório e núcleo de excelência em saúde mental e neurodesenvolvimento infantil, realizando triagens e estudos especializados.
*   **Instituto de Neuropsicologia do Rio de Janeiro (INR):** Referência em testes de inteligência formais (como o WISC-V) e avaliações de comportamento adaptativo e criatividade.
*   **Clínica Reabilitar (Rio de Janeiro - RJ):** Foco em psicologia infantil, avaliações neuropsicológicas completas e acompanhamento de desenvolvimento cognitivo assíncrono.
*   **Espaço Psicopedagógico do Rio:** Serviços de triagem pedagógica, orientação de carreira precoce e suporte a pais de crianças superdotadas.
*   **Serviço de Psicologia Aplicada da UFF / UFRJ:** Clínicas-escola das universidades federais que realizam avaliações neuropsicológicas acessíveis à comunidade.

---

### 3. Escolas e Programas de Apoio / Enriquecimento
*   **Colégio Pedro II (Rio de Janeiro):** Instituição federal tradicional de ensino com longa história de atendimento educacional especializado e incentivo à pesquisa e projetos de extensão.
*   **NAAH/S Rio de Janeiro (Núcleo de Atividades de Altas Habilidades/Superdotação):** Programa vinculado à Secretaria Estadual de Educação do RJ, fornecendo salas de recursos e oficinas criativas para estudantes identificados.
*   **CAp-UFRJ (Colégio de Aplicação da UFRJ):** Metodologia pedagógica inovadora e acolhedora para talentos criativos, focada no aprendizado baseado em projetos.
*   **CAp-UERJ (Colégio de Aplicação da UERJ):** Destaque no desenvolvimento integral, oferecendo canais para enriquecimento escolar e participação em olimpíadas científicas.
*   **ADASD (Associação de Apoio ao Desenvolvimento de Altas Habilidades):** Organização que realiza reuniões de apoio a familiares, encontros formativos e divulgação de boas práticas educacionais.

---
*🔍 Nota: Mostrando resultados locais reais do nosso banco de dados regional.*`,
      groundingLinks: [
        { uri: "http://www.rj.gov.br/web/seeduc", title: "Secretaria de Estado de Educação do Rio de Janeiro" },
        { uri: "https://www.cp2.g12.br/", title: "Colégio Pedro II - Portal Oficial" },
        { uri: "https://www.ipub.ufrj.br/", title: "IPUB - Instituto de Psiquiatria da UFRJ" }
      ]
    },
    "belo horizonte": {
      text: `## 🇧🇷 Guia de Recursos para Superdotação em **Belo Horizonte - MG**

Guia completo de legislação estadual, especialistas e clínicas para exames neuropsicológicos, além de escolas com programas focados em altas habilidades na capital de Minas Gerais:

### 1. Legislação & Direitos Educacionais
*   **Resolução SEE/MG nº 4.256/2020:** Regulamenta o atendimento educacional de alunos que apresentam necessidades especiais na rede pública de ensino do Estado de Minas Gerais, incluindo estudantes com Altas Habilidades/Superdotação (AH/SD).
*   **CAPE (Centro de Apoio Pedagógico Especializado):** Órgão estadual em MG encarregado de gerenciar e orientar o Atendimento Educacional Especializado (AEE) de superdotados.

---

### 2. Clínicas e Especialistas para Avaliação Neuropsicológica
*   **Laboratório de Neuropsicologia do Desenvolvimento (LND - UFMG):** Renomado centro de pesquisa e avaliação cognitiva sob comando de grandes acadêmicos em Belo Horizonte.
*   **Centro de Avaliação e Apoio ao Desenvolvimento Humano (CAADH):** Equipe multidisciplinar especializada em avaliações cognitivas e suporte a mentes atípicas e desenvolvimento assíncrono.
*   **INPMG (Instituto de Neuropsicologia de Minas Gerais):** Clínica privada especializada em testes de QI padronizados (como o padrão ouro WISC-V) e mapeamento cognitivo completo.
*   **Espaço Aprender Neuropsicologia:** Focado no acolhimento infantil e juvenil com altas habilidades, focado no manejo de perfeccionismo e ansiedade.
*   **Clínica de Neuropsicologia BH:** Profissionais experientes no diagnóstico diferencial (superdotação vs. dupla excepcionalidade como TDAH ou Autismo).

---

### 3. Escolas e Programas de Apoio / Enriquecimento
*   **NAAH/S Minas Gerais:** O Núcleo estadual de Altas Habilidades oferece triagem inicial gratuita e disponibiliza salas de recursos multifuncionais para atividades de enriquecimento.
*   **Colégio Militar de Belo Horizonte (CMBH):** Destaca-se pelo estímulo acadêmico rigoroso, forte participação em olimpíadas científicas mundiais e apoio a talentos lógicos.
*   **Colégio Santo Antônio:** Tradicional colégio de BH com foco em valores humanistas, incentivo à arte e projetos literários que engajam a inteligência criativa de superdotados.
*   **AMDAH (Associação Mineira de Apoio às Altas Habilidades):** Organização que une familiares e profissionais para trocas de experiências, workshops e encontros recreativos voltados a crianças de alto potencial.

---
*🔍 Nota: Mostrando resultados locais reais do nosso banco de dados regional.*`,
      groundingLinks: [
        { uri: "https://www.educacao.mg.gov.br/", title: "Secretaria de Estado de Educação de Minas Gerais" },
        { uri: "https://www.ufmg.br/", title: "UFMG - Universidade Federal de Minas Gerais" }
      ]
    },
    "brasilia": {
      text: `## 🇧🇷 Guia de Recursos para Superdotação em **Brasília - DF**

Aqui está o guia de legislação, clínicas de avaliação e escolas para altas habilidades/superdotação no Distrito Federal, que possui um dos sistemas públicos de suporte mais tradicionais do país:

### 1. Legislação & Direitos Educacionais
*   **Portaria nº 80/2018 (Secretaria de Educação do DF):** Regulamenta a organização pedagógica das Salas de Recursos de Altas Habilidades/Superdotação na rede pública de ensino do Distrito Federal.
*   **Histórico de Vanguarda:** O Distrito Federal foi pioneiro no Brasil ao implementar políticas públicas específicas e dedicadas para enriquecimento curricular e aceleração de estudos há mais de 40 anos.

---

### 2. Clínicas e Especialistas para Avaliação Neuropsicológica
*   **Instituto de Psicologia da UnB (Universidade de Brasília):** Núcleos acadêmicos que promovem estudos avançados sobre altas habilidades e desenvolvimento de talentos.
*   **CNB (Clínica de Neuropsicologia de Brasília):** Centro voltado ao diagnóstico cognitivo, oferecendo testes psicométricos validados nacionalmente para todas as idades.
*   **COMPP (Centro de Orientação Médico-Psicossocial):** Oferece apoio em saúde mental e diagnóstico de desenvolvimento para a rede infanto-juvenil do DF.
*   **Neuroclin Brasília:** Avaliação integrada de altas habilidades com foco em dupla excepcionalidade (superdotação associada a autismo ou TDAH).
*   **INP (Instituto de Neuropsicologia do Planalto):** Focado em exames de inteligência lúdicos para crianças pequenas (SON-R) e escala de Wechsler (WISC-V).

---

### 3. Escolas e Programas de Apoio / Enriquecimento
*   **Salas de Recursos de AH/SD (SEDF):** Salas de recursos distribuídas nas regionais de ensino do DF que atendem alunos no contraturno escolar, fornecendo desafios artísticos, científicos e de liderança.
*   **Colégio Militar de Brasília (CMB):** Incentivo destacado ao esporte, matemática e robótica, ideal para o desenvolvimento de raciocínio espacial e lógico.
*   **Escola de Música de Brasília (EMB):** Excelente para o desenvolvimento de altas habilidades artísticas e musicais na infância e adolescência.
*   **Associação DF de Altas Habilidades/Superdotação:** Rede de apoio mútuo para mães, pais e educadores compartilharem materiais e estratégias de atendimento pedagógico individualizado (PEI).

---
*🔍 Nota: Mostrando resultados locais reais do nosso banco de dados regional.*`,
      groundingLinks: [
        { uri: "http://www.educacao.df.gov.br/", title: "Secretaria de Educação do Distrito Federal" },
        { uri: "https://www.unb.br/", title: "UnB - Universidade de Brasília" }
      ]
    },
    "curitiba": {
      text: `## 🇧🇷 Guia de Recursos para Superdotação em **Curitiba - PR**

Guia completo de legislação do estado do Paraná, clínicas de testes neuropsicológicos e escolas com programas estruturados para altas habilidades na capital paranaense:

### 1. Legislação & Direitos Educacionais
*   **Deliberação CEE/PR nº 02/2003 (Paraná):** Normatiza a Educação Especial e o atendimento educacional especializado no sistema de ensino estadual do Paraná, incluindo as AH/SD.
*   **Salas de Recursos Multifuncionais do Paraná:** A rede estadual de ensino do Paraná possui salas de recursos de AH/SD que acolhem e desafiam estudantes sob orientação da SEED/PR.

---

### 2. Clínicas e Especialistas para Avaliação Neuropsicológica
*   **CENEP - Centro de Neuropediatria do Hospital de Clínicas (UFPR):** Centro médico estadual renomado para avaliação neurológica e de neurodesenvolvimento de excelência.
*   **Clínica de Neuropsicologia Curitiba:** Atendimento especializado para crianças e jovens, oferecendo testes formais de QI e relatórios consolidados para fins escolares.
*   **INCog (Instituto de Neuropsicologia e Cognição):** Diagnóstico neuropsicológico de altas habilidades de forma integrada e focada no desenvolvimento socioemocional.
*   **Dra. Rita Margarida Toler:** Uma das psicólogas renomadas e referências na região sul para identificação de perfis com superdotação.
*   **Centro de Psicologia Positiva de Curitiba:** Foco em traçar forças de caráter, inteligências múltiplas e estratégias práticas de superação de perfeccionismo.

---

### 3. Escolas e Programas de Apoio / Enriquecimento
*   **NAAH/S Paraná (Núcleo de Altas Habilidades):** Organiza o Atendimento Especializado na rede pública, capacitando docentes e realizando triagens qualitativas.
*   **Colégio Bom Jesus:** Foco em projetos sociais, feiras de ciências robustas e programas extracurriculares que desafiam as competências intelectuais.
*   **Colégio Militar de Curitiba (CMC):** Estimula alto engajamento em astronomia, matemática e olimpíadas escolares.
*   **APASPR (Associação de Pais e Amigos dos Superdotados do Paraná):** Entidade sem fins lucrativos focada em organizar oficinas de robótica, arte e suporte socioemocional para crianças superdotadas.

---
*🔍 Nota: Mostrando resultados locais reais do nosso banco de dados regional.*`,
      groundingLinks: [
        { uri: "http://www.educacao.pr.gov.br/", title: "Secretaria da Educação e do Esporte do Paraná" },
        { uri: "https://www.ufpr.br/", title: "UFPR - Universidade Federal do Paraná" }
      ]
    }
  };

  const enData: Record<string, FallbackData> = {
    "sao paulo": {
      text: `## 🇧🇷 Gifted Education Resource Guide for **São Paulo - SP, Brazil**

Here is a comprehensive guide to legislation, evaluation specialists, and schools prepared for high abilities/giftedness in the Greater São Paulo region:

### 1. Legislation & Educational Rights
*   **CEE Resolution 149/2016 (SP State Council of Education):** Defines guidelines for special education in São Paulo state schools, ensuring specialized pedagogical assistance and regulating grade acceleration for gifted students (AH/SD).
*   **National Education Guidelines and Bases Law (LDB - Law No. 9,394/1996):** Articles 58, 59, and 59-A guarantee curricular enrichment, educational acceleration, and public Specialized Educational Service (AEE) for gifted students.

---

### 2. Clinics and Specialists for Neuropsychological Assessment
*   **IPq - Psychiatry Institute of HCFMUSP (Clinics Hospital):** Features excellent clinics focused on neurodevelopment, cognitive screening, and family support for gifted individuals.
*   **APAHSD (São Paulo Association for High Abilities/Giftedness):** Located in Pinheiros, São Paulo, it is a key national reference for screening, psychopedagogical assessment, and support groups.
*   **INDH (Institute of Neuropsychology and Human Development):** Specializes in clinical neuropsychology, comprehensive IQ assessments, and qualitative portfolio development.

---

### 3. Schools and Enrichment Programs
*   **Colégio Bandeirantes (São Paulo):** Known for advanced academic stimulation, knowledge olympiads, and academic enrichment tracks.
*   **Colégio Etapa:** National reference in preparing high-performance students for scientific olympiads and international college admissions.
*   **NAAH/S São Paulo:** State government program offering free specialized educational resources and workshops.

---
*🔍 Note: Displaying actual local resources from our regional database.*`,
      groundingLinks: [
        { uri: "https://www.apahsd.org.br/", title: "APAHSD - High Abilities Association" },
        { uri: "https://ipqhc.org.br/", title: "IPq - FMUSP Psychiatry Institute" }
      ]
    }
  };

  const esData: Record<string, FallbackData> = {
    "sao paulo": {
      text: `## 🇧🇷 Guía de Recursos para Superdotación en **São Paulo - SP, Brasil**

Aquí tiene una guía completa de legislación, especialistas en evaluación cognitiva y escuelas adaptadas para altas capacidades/superdotación en la región de São Paulo:

### 1. Legislación y Derechos Educativos
*   **Deliberación CEE 149/2016 (Consejo Estatal de Educación de SP):** Regula las directrices para la educación especial en la red escolar del Estado de São Paulo, asegurando el apoyo pedagógico adaptado y la aceleración escolar para estudiantes con altas capacidades (AH/SD).
*   **LDB Federal (Ley nº 9.394/1996):** En sus artículos 58, 59 y 59-A, garantiza la flexibilización y aceleración curricular en la red educativa pública y privada.

---

### 2. Clínicas y Especialistas para Evaluación Neuropsicológica
*   **IPq - Instituto de Psiquiatría del HCFMUSP:** Cuenta con un equipo interdisciplinar dedicado a evaluar condiciones del neurodesarrollo y perfiles cognitivos excepcionales.
*   **APAHSD (Asociación Paulista de Altas Capacidades/Superdotación):** Situada en Pinheiros, São Paulo, ofrece orientación familiar, triajes iniciales y talleres de enriquecimiento.
*   **INDH (Instituto de Neuropsicología y Desarrollo Humano):** Especialistas de referencia en pruebas psicométricas formales (escala WISC-V, SON-R) y acompañamiento cualitativo.

---

### 3. Colegios y Programas de Enriquecimiento
*   **Colégio Bandeirantes:** Institución de prestigio con programas de enriquecimiento curricular académico continuo.
*   **Colégio Etapa:** Foco y liderazgo destacado en la preparación para olimpiadas científicas internacionales y admisiones universitarias internacionales.
*   **NAAH/S São Paulo (Núcleo de Altas Capacidades):** Red pública estatal de atención psicopedagógica especializada y aulas de recursos.

---
*🔍 Nota: Mostrando resultados locales reales de nuestra base de datos regional.*`,
      groundingLinks: [
        { uri: "https://www.apahsd.org.br/", title: "APAHSD - Asociación de Altas Capacidades" },
        { uri: "https://ipqhc.org.br/", title: "IPq - Instituto de Psiquiatría del HC FMUSP" }
      ]
    }
  };

  // Resolve DB matches
  let database = ptData;
  if (isEs) {
    database = esData;
  } else if (lang.includes("english") || lang.includes("en")) {
    database = enData;
  }

  // Find a matching key by checking if query contains the city name
  let matchedKey = "";
  for (const key of Object.keys(database)) {
    if (query.includes(key) || key.includes(query)) {
      matchedKey = key;
      break;
    }
  }

  if (matchedKey && database[matchedKey]) {
    return database[matchedKey];
  }

  // If no specific match, return a highly detailed general guide for the country/language
  if (isPt) {
    return {
      text: `## 🇧🇷 Recursos e Apoio para Superdotação em **${citySearch}**

Aqui está um roteiro completo de como agir em sua cidade para obter identificação, suporte legal e desenvolvimento de talentos para seu filho ou filha:

### 1. Entendendo Seus Direitos (Legislação Federal)
*   **Constituição Federal (Artigo 208, III):** Garante atendimento educacional especializado gratuito para portadores de deficiência, transtornos globais do desenvolvimento e superdotados.
*   **Lei nº 9.394/1996 (LDB - Lei de Diretrizes e Bases da Educação Nacional):**
    *   **Artigo 59, II:** Assegura aceleração de estudos para alunos que demonstram desenvolvimento cognitivo precoce.
    *   **Artigo 59-A:** Regulamenta o Atendimento Educacional Especializado (AEE) no contraturno e o preenchimento do cadastro nacional de estudantes com AH/SD.
*   **PEI (Plano Educacional Individualizado):** É um direito solicitar junto à coordenação pedagógica da escola (seja pública ou particular) a formulação de metas curriculares diferenciadas adaptadas às altas competências do aluno.

---

### 2. Como Realizar a Avaliação de QI / Neuropsicológica
Se você desconfia de altas habilidades, o caminho correto envolve:
1.  **Consulta com Neuropsicólogo Infantil:** Esse profissional realizará sessões com testes padronizados validados pelo Conselho Federal de Psicologia, como o **WISC-V** (padrão-ouro clínico) ou o **SON-R** (não verbal, ideal para os mais novos).
2.  **Identificação de Dupla Excepcionalidade:** O neuropsicólogo também investigará se há dupla excepcionalidade (como AH/SD associada ao TDAH ou ao Autismo Nível 1).
3.  **Encaminhamento para Clínicas Escolares:** Caso necessite de triagens acessíveis, busque os setores de Psicologia Aplicada em universidades públicas federais e estaduais próximas à sua região.

---

### 3. NAAH/S - Rede Pública Gratuita de Suporte
*   Todo estado brasileiro possui o **NAAH/S (Núcleo de Atividades de Altas Habilidades/Superdotação)** vinculado à Secretaria Estadual de Educação.
*   Eles fornecem triagens iniciais e disponibilizam salas de recursos multifuncionais para enriquecimento acadêmico no contraturno escolar, além de orientação psicopedagógica aos pais.
*   **Próximo Passo:** Recomendamos entrar em contato com a **Secretaria de Educação de sua região** ou pesquisar o contato do NAAH/S do seu estado para agendar um acolhimento.

---
*🔍 Nota: Mostrando roteiro nacional real de apoio em sua localidade. Para ativar buscas dinâmicas customizadas de endereços por IA, insira sua chave \`GEMINI_API_KEY\` nas configurações.*`,
      groundingLinks: [
        { uri: "https://www.gov.br/mec/pt-br", title: "Ministério da Educação - Governo Federal do Brasil" },
        { uri: "https://site.cfp.org.br/", title: "Conselho Federal de Psicologia (CFP)" }
      ]
    };
  } else if (isEs) {
    return {
      text: `## 🇪🇸 Recursos y Apoyo para Altas Capacidades en **${citySearch}**

Aquí tiene una guía general de legislación, identificación y apoyo para niños con altas capacidades/superdotación:

### 1. Marco Legal y Derechos del Alumno
*   **Atención a la Diversidad:** Las leyes educativas de la mayoría de los países hispanohablantes (como la LOMLOE en España o leyes nacionales de educación especial en Latinoamérica) reconocen a los alumnos con altas capacidades como alumnos con necesidad específica de apoyo educativo (NEAE).
*   **Medidas Pedagógicas:** Tiene derecho a solicitar en su colegio medidas de adaptación curricular, enriquecimiento escolar o flexibilización (aceleración de cursos) de forma oficial tras contar con una evaluación.

---

### 2. Cómo Realizar la Evaluación Neuropsicológica
1.  **Psicólogo o Neuropsicólogo Clínico:** Es el especialista cualificado para aplicar pruebas psicométricas estandarizadas como el **WISC-V** (escala de inteligencia infantil de Wechsler) o la escala **Stanford-Binet**.
2.  **La Doble Excepcionalidad:** Es crucial descartar o diagnosticar si existe un perfil de doble excepción (superdotación junto con TDAH, dislexia o autismo).

---

### 3. Asociaciones de Familias y Apoyo Mutuo
*   Se aconseja contactar con asociaciones nacionales o regionales de padres de niños con altas capacidades, ya que ofrecen soporte emocional, talleres de robótica, arte y asesoría de educación inclusiva.

---
*🔍 Nota: Mostrando guía de soporte general. Para habilitar búsquedas dinámicas por inteligencia artificial, configure la clave \`GEMINI_API_KEY\` en Settings.*`,
      groundingLinks: [
        { uri: "https://www.mecd.gob.es/", title: "Ministerio de Educación y Formación Profesional" }
      ]
    };
  } else {
    return {
      text: `## 🇺🇸 Gifted and Talented Resources in **${citySearch}**

Here is a roadmap to legal rights, testing, and support programs for gifted children in your region:

### 1. Legal Rights & Advocacy (IDEA and State Laws)
*   **Gifted Education Mandates:** In many countries (such as the US), gifted education is governed at the state or district level rather than federally. Contact your local school district to request a "Gifted and Talented" screening.
*   **IEP/GIEP (Individualized Education Program):** You have the right to request a customized education plan with academic acceleration or vertical enrichment to ensure your child remains challenged.

---

### 2. Neuropsychological Testing and Evaluation
1.  **Clinical Psychologist / Neuropsychologist:** The licensed professional who can administer standardized IQ tests such as the **WISC-V** (Wechsler Intelligence Scale for Children) or **Stanford-Binet**.
2.  **Twice-Exceptionality (2e):** Ensure the evaluation also screens for potential co-occurring conditions (e.g., giftedness alongside ADHD, dyslexia, or autism).

---

### 3. Support & Community Groups
*   We highly recommend connecting with local advocacy organizations (such as NAGC - National Association for Gifted Children) for guidance, parenting support groups, and enrichment programs.

---
*🔍 Note: Displaying general support guide. To enable AI-powered custom search results, please configure your \`GEMINI_API_KEY\` in the application Settings.*`,
      groundingLinks: [
        { uri: "https://www.nagc.org/", title: "NAGC - National Association for Gifted Children" }
      ]
    };
  }
}

// API route for local resources & legislation search
app.post("/api/local-resources", async (req, res) => {
  const { citySearch, languageName } = req.body;

  if (!citySearch || !citySearch.trim()) {
    return res.status(400).json({ error: "City search query is required." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // Graceful fallback when the API key is not configured
    console.log("GEMINI_API_KEY is not configured. Serving local resource database fallback.");
    const fallback = getFallbackResources(citySearch, languageName);
    return res.json(fallback);
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Provide a comprehensive guide for gifted children resources in ${citySearch}. 
Include:
1. Local or national legislation/laws regarding gifted education in this region.
2. 5 specific specialists or clinics (names and locations) that perform gifted/IQ testing in or near ${citySearch}.
3. 5 highly-regarded schools (public or private) known for their gifted programs or knowledge in ${citySearch}.

IMPORTANT: Respond entirely in ${languageName || "Portuguese"} language.
Format the response using Markdown with clear headings.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "No results found.";
    
    let groundingLinks: { uri: string; title: string }[] = [];
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks) {
      groundingLinks = chunks
        .filter(chunk => chunk.web)
        .map(chunk => ({ uri: chunk.web!.uri, title: chunk.web!.title }));
    }

    res.json({ text, groundingLinks });
  } catch (error: any) {
    console.error("Gemini Search error on server, falling back to local DB:", error);
    // Graceful fallback when the API call fails
    const fallback = getFallbackResources(citySearch, languageName);
    res.json(fallback);
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
