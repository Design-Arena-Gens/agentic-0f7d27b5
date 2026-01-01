const sections = [
  {
    title: 'O que é mindset?',
    body: [
      'Mindset é o conjunto de crenças, hábitos mentais e padrões de pensamento que moldam a forma como interpretamos a realidade, tomamos decisões e reagimos aos desafios. Ele funciona como uma lente através da qual filtramos experiências e determinamos o que acreditamos ser possível.',
      'O termo tornou-se popular com os estudos da psicóloga Carol Dweck, que demonstrou como diferentes mentalidades influenciam diretamente o desempenho e a motivação em contextos acadêmicos, profissionais e pessoais.'
    ]
  },
  {
    title: 'Mindset fixo x mindset de crescimento',
    body: [
      'Mindset fixo: pessoas com essa mentalidade entendem talentos e inteligência como qualidades imutáveis. Elas tendem a evitar desafios, desistir diante de obstáculos e sentir-se ameaçadas pelo sucesso alheio.',
      'Mindset de crescimento: essa visão enxerga habilidades como algo que pode ser desenvolvido por meio de esforço, boas estratégias e feedback. Indivíduos com esse mindset abraçam desafios, persistem na adversidade e aprendem com críticas.'
    ]
  },
  {
    title: 'Por que o mindset importa?',
    body: [
      'As crenças que carregamos sobre nós mesmos influenciam objetivos, comportamentos e resultados. Um mindset limitante pode nos manter na zona de conforto e impedir o avanço; já uma mentalidade expansiva favorece resiliência, aprendizagens contínuas e inovação.',
      'Empresas e equipes que cultivam um mindset de crescimento tendem a experimentar maior colaboração, criatividade e capacidade de adaptação em ambientes competitivos.'
    ]
  },
  {
    title: 'Como desenvolver um mindset de crescimento',
    body: [
      'Reframe desafios: interprete situações difíceis como oportunidades para aprender e testar novas abordagens.',
      'Valorize o processo: acompanhe o progresso e celebre pequenas vitórias, em vez de focar apenas no resultado final.',
      'Busque feedback: peça opiniões externas para identificar pontos cegos e ajustar estratégias.',
      'Adote linguagem construtiva: substitua “não sei fazer” por “ainda estou aprendendo”. A mudança de linguagem altera a narrativa interna.',
      'Pratique autorreflexão: mantenha registros de aprendizados, erros e ajustes para fortalecer a consciência sobre a própria evolução.'
    ]
  },
  {
    title: 'Aplicações práticas',
    body: [
      'Educação: estudantes com mindset de crescimento enfrentam melhor as dificuldades e apresentam desempenho superior a longo prazo.',
      'Carreira: profissionais que acreditam na capacidade de evoluir estão mais dispostos a assumir responsabilidades e acelerar suas trajetórias.',
      'Saúde e hábitos: mudar a mentalidade sobre disciplina e autocuidado é chave para manter rotinas saudáveis e sustentáveis.'
    ]
  }
];

export default function Page() {
  return (
    <main>
      <header className="hero">
        <h1>Mindset: o que é e como transformar a sua mentalidade</h1>
        <p>
          Entenda o conceito de mindset, descubra por que ele influencia seus resultados e conheça práticas para cultivar uma mentalidade de crescimento.
        </p>
      </header>

      {sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      ))}

      <footer className="footer">
        Conteúdo inspirado nas pesquisas de Carol Dweck e em estudos contemporâneos sobre psicologia positiva e neurociência.
      </footer>
    </main>
  );
}
