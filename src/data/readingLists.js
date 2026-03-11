// ACP Education Reading Lists

const readingLists = [
  {
    id: 'list-1',
    title: 'Education List 1',
    description: 'Regular Member Reading List #1 — CADRE Part 1 (3-month timeframe)',
    items: [
      // MARX AND ENGELS MODULE
      {
        id: 'l1-manifesto',
        type: 'text',
        title: 'Manifesto of the Communist Party',
        author: 'Marx and Engels',
        module: 'Marx and Engels',
        subItems: [
          { id: 'l1-manifesto-ch1', title: 'Chapter 1' },
          { id: 'l1-manifesto-ch2', title: 'Chapter 2' },
        ]
      },
      {
        id: 'l1-preface-critique',
        type: 'text',
        title: 'Preface to A Contribution to the Critique of Political Economy',
        author: 'Marx',
        module: 'Marx and Engels',
        subItems: [
          { id: 'l1-preface-critique-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-on-authority',
        type: 'text',
        title: 'On Authority',
        author: 'Engels',
        module: 'Marx and Engels',
        subItems: [
          { id: 'l1-on-authority-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-utopian-scientific',
        type: 'text',
        title: 'Socialism: Utopian and Scientific',
        author: 'Engels',
        module: 'Marx and Engels',
        subItems: [
          { id: 'l1-us-ch1', title: 'Chapter 1' },
          { id: 'l1-us-ch2', title: 'Chapter 2' },
        ]
      },
      // LENIN MODULE
      {
        id: 'l1-karl-marx-bio',
        type: 'text',
        title: 'Karl Marx: A Brief Biographical Sketch with an Exposition of Marxism',
        author: 'Lenin',
        module: 'Lenin',
        subItems: [
          { id: 'l1-kmb-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-on-dialectics',
        type: 'text',
        title: 'On the Question of Dialectics',
        author: 'Lenin',
        module: 'Lenin',
        subItems: [
          { id: 'l1-od-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-imperialism',
        type: 'text',
        title: 'Imperialism: The Highest Stage of Capitalism',
        author: 'Lenin',
        module: 'Lenin',
        subItems: [
          { id: 'l1-imp-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-left-wing',
        type: 'text',
        title: 'Left-Wing Communism: An Infantile Disorder',
        author: 'Lenin',
        module: 'Lenin',
        subItems: [
          { id: 'l1-lw-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-state-revolution',
        type: 'text',
        title: 'State and Revolution',
        author: 'Lenin',
        module: 'Lenin',
        subItems: [
          { id: 'l1-sr-ch1', title: 'Chapter 1' },
        ]
      },
      // STALIN MODULE
      {
        id: 'l1-dialectical-historical',
        type: 'text',
        title: 'Dialectical and Historical Materialism',
        author: 'Stalin',
        module: 'Stalin',
        subItems: [
          { id: 'l1-dhm-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-foundations-leninism',
        type: 'text',
        title: 'Foundations of Leninism',
        author: 'Stalin',
        module: 'Stalin',
        subItems: [
          { id: 'l1-fl-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-on-fascism',
        type: 'text',
        title: 'On Fascism: Speech at the Seventh World Congress of the Communist International',
        author: 'Dimitrov',
        module: 'Stalin',
        subItems: [
          { id: 'l1-of-full', title: 'Full Text' },
        ]
      },
      // GARRIDO MODULE
      {
        id: 'l1-why-american-marxism',
        type: 'text',
        title: 'Why We Need American Marxism',
        author: 'Garrido',
        module: 'Garrido',
        subItems: [
          { id: 'l1-wam-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-purity-fetish',
        type: 'text',
        title: 'The Purity Fetish and the Crisis of Western Marxism',
        author: 'Garrido',
        module: 'Garrido',
        subItems: [
          { id: 'l1-pf-full', title: 'Full Text' },
        ]
      },
      // MAO MODULE
      {
        id: 'l1-combat-liberalism',
        type: 'text',
        title: 'Combat Liberalism',
        author: 'Mao',
        module: 'Mao',
        subItems: [
          { id: 'l1-cl-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-on-contradiction',
        type: 'text',
        title: 'On Contradiction',
        author: 'Mao',
        module: 'Mao',
        subItems: [
          { id: 'l1-oc-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-on-practice',
        type: 'text',
        title: 'On Practice',
        author: 'Mao',
        module: 'Mao',
        subItems: [
          { id: 'l1-op-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-mass-line',
        type: 'text',
        title: 'The Mass Line (from Quotations / Little Red Book)',
        author: 'Mao',
        module: 'Mao',
        subItems: [
          { id: 'l1-ml-full', title: 'Full Text' },
        ]
      },
      // DENG MODULE
      {
        id: 'l1-four-principles',
        type: 'text',
        title: 'Uphold the Four Cardinal Principles',
        author: 'Deng',
        module: 'Deng',
        subItems: [
          { id: 'l1-fcp-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-four-modernizations',
        type: 'text',
        title: 'Realize the Four Modernizations and Never Seek Hegemony',
        author: 'Deng',
        module: 'Deng',
        subItems: [
          { id: 'l1-fm-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-productive-forces',
        type: 'text',
        title: 'To Build Socialism We Must First Develop the Productive Forces',
        author: 'Deng',
        module: 'Deng',
        subItems: [
          { id: 'l1-pf2-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-chinese-character',
        type: 'text',
        title: 'Building a Socialism with a Specifically Chinese Character',
        author: 'Deng',
        module: 'Deng',
        subItems: [
          { id: 'l1-cc-full', title: 'Full Text' },
        ]
      },
      // CONTEMPORARY MODULE
      {
        id: 'l1-finance-capitalism',
        type: 'text',
        title: 'Finance Capitalism versus Industrial Capitalism: The Rentier Resurgence and Takeover',
        author: 'Hudson',
        module: 'Contemporary',
        subItems: [
          { id: 'l1-fc-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l1-neo-imperialism',
        type: 'text',
        title: 'Five Characteristics of Neo-Imperialism',
        author: 'Enfu',
        module: 'Contemporary',
        subItems: [
          { id: 'l1-ni-full', title: 'Full Text' },
        ]
      },
    ]
  },
  {
    id: 'list-2',
    title: 'Education List 2',
    description: 'Second ACP cadre reading list',
    items: [
      // TEXTS
      {
        id: 'l2-german-ideology',
        type: 'text',
        title: 'The German Ideology',
        author: 'Marx and Engels',
        subItems: [
          { id: 'l2-gi-preface', title: 'Preface' },
          { id: 'l2-gi-feuerbach', title: 'Feuerbach: Opposition of the Materialist and Idealist Outlooks' },
        ]
      },
      {
        id: 'l2-what-is-to-be-done',
        type: 'text',
        title: 'What is to be Done?',
        author: 'Lenin',
        subItems: [
          { id: 'l2-witbd-ch1', title: 'Chapter 1: Dogmatism and "Freedom of Criticism"' },
          { id: 'l2-witbd-ch2', title: 'Chapter 2: The Spontaneity of the Masses' },
          { id: 'l2-witbd-ch3', title: 'Chapter 3: Trade-Unionist Politics and Social-Democratic Politics' },
          { id: 'l2-witbd-ch4', title: 'Chapter 4: The Primitiveness of the Economists' },
          { id: 'l2-witbd-ch5', title: 'Chapter 5: The "Plan" for an All-Russia Political Newspaper' },
        ]
      },
      {
        id: 'l2-importance-of-gold',
        type: 'text',
        title: 'The Importance of Gold Now and After The Complete Victory Of Socialism',
        author: 'Lenin',
        subItems: [
          { id: 'l2-gold-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l2-better-few',
        type: 'text',
        title: 'Better Few, But Better',
        author: 'Lenin',
        subItems: [
          { id: 'l2-bf-full', title: 'Full Text' },
        ]
      },
      {
        id: 'l2-three-internationals',
        type: 'text',
        title: 'History of the Three Internationals',
        author: 'William Z. Foster',
        subItems: [
          { id: 'l2-ti-part1', title: 'Part 1' },
          { id: 'l2-ti-part2', title: 'Part 2' },
        ]
      },
      {
        id: 'l2-stasi-state',
        type: 'text',
        title: 'Stasi State or Socialist Paradise?: The German Democratic Republic and What Became of It',
        author: 'John Green and Bruni De La Motte',
        subItems: [
          { id: 'l2-ss-full', title: 'Full Book' },
        ]
      },
      {
        id: 'l2-trotskyism',
        type: 'text',
        title: 'Trotskyism: Counter-Revolution in Disguise',
        author: 'Moissaye J. Olgin',
        subItems: [
          { id: 'l2-tr-ch2', title: 'Chapter 2' },
          { id: 'l2-tr-ch3', title: 'Chapter 3' },
          { id: 'l2-tr-ch4', title: 'Chapter 4' },
          { id: 'l2-tr-ch14', title: 'Chapter 14' },
        ]
      },
      // FILMS/DOCUMENTARIES
      {
        id: 'l2-young-karl-marx',
        type: 'film',
        title: 'The Young Karl Marx',
        author: '',
        year: 2017,
        subItems: []
      },
      {
        id: 'l2-reds',
        type: 'film',
        title: 'Reds',
        author: '',
        year: 1981,
        subItems: []
      },
      {
        id: 'l2-thalman-son',
        type: 'film',
        title: 'Ernst Thälmann: Son of his Class',
        author: '',
        subItems: []
      },
      {
        id: 'l2-thalman-father',
        type: 'film',
        title: 'Ernst Thälmann: Father of his Class',
        author: '',
        subItems: []
      },
      {
        id: 'l2-fall-ussr',
        type: 'film',
        title: 'On the Fall of the USSR',
        author: '',
        subItems: []
      },
      {
        id: 'l2-brothers-sisters-north',
        type: 'film',
        title: 'My Brothers and Sisters in the North',
        author: '',
        note: 'On the DPRK',
        subItems: []
      },
      // RED AMERICA
      {
        id: 'l2-red-america',
        type: 'text',
        title: 'Red America — Articles from Party Leadership',
        author: 'ACP',
        subItems: [
          { id: 'l2-ra-full', title: 'Read assigned articles' },
        ]
      },
    ]
  }
];

export default readingLists;
