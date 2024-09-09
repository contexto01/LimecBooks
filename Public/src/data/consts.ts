export const BOOK_FILTERS = {
  all: 'Todos',
  Fiction: 'Ficción',
  'Non-Fiction': 'No Ficción',
  Science: 'Ciencia',
  History: 'Historia',
  Biography: 'Biografía',
  Fantasy: 'Fantasía',
  Romance: 'Romance',
  Thriller: 'Thriller',
  Mystery: 'Misterio',
  'Self-Help': 'Autoayuda',
  'Health & Wellness': 'Salud y Bienestar',
  Travel: 'Viajes',
  Cookbooks: 'Libros de Cocina',
  "Children's Books": 'Libros Infantiles',
  'Young Adult': 'Jóvenes Adultos',
  Religion: 'Religión',
  'Science Fiction': 'Ciencia Ficción',
  Horror: 'Terror',
  Poetry: 'Poesía',
  Drama: 'Drama',
  'Graphic Novels': 'Novelas Gráficas',
  Philosophy: 'Filosofía',
  Politics: 'Política',
  Economics: 'Economía',
  Business: 'Negocios',
  Education: 'Educación',
  Arts: 'Artes',
  Computers: 'Informática',
  Technology: 'Tecnología',
  Sports: 'Deportes',
  'True Crime': 'Crimen Verdadero',
  Western: 'Oeste',
  'Literary Collections': 'Colecciones Literarias',
  'Juvenile Fiction': 'Ficción Infantil',
  Self: 'Auto',
  Comics: 'Cómics',
  Music: 'Música',
  VideoGames: 'Videojuegos',
  Anime: 'Anime',
  Manga: 'Manga',
  Cartoons: 'Dibujos animados',
  'Coffee growers': 'Cultivos de café',
  'Spanish language': 'Lenguaje español',
  'Business & Economics': 'Negocios y Economía',
  'Social Science': 'Ciencia Social',
  'History of Science': 'Historia de la Ciencia',
  Cooking: 'Cocina'
} as const

export const FILTERS_BUTTONS = {
  [BOOK_FILTERS.all]: {
    literal: 'Todos',
    icon: '📚',
    href: `/?filter=${BOOK_FILTERS.all}`
  },
  [BOOK_FILTERS.Fiction]: {
    literal: 'Ficción',
    icon: '📖',
    href: `/?filter=${BOOK_FILTERS.Fiction}`
  },
  [BOOK_FILTERS['Non-Fiction']]: {
    literal: 'No Ficción',
    icon: '📚',
    href: `/?filter=${BOOK_FILTERS['Non-Fiction']}`
  },
  [BOOK_FILTERS.Science]: {
    literal: 'Ciencia',
    icon: '🔬',
    href: `/?filter=${BOOK_FILTERS.Science}`
  },
  [BOOK_FILTERS.History]: {
    literal: 'Historia',
    icon: '📜',
    href: `/?filter=${BOOK_FILTERS.History}`
  },
  [BOOK_FILTERS.Biography]: {
    literal: 'Biografía',
    icon: '👤',
    href: `/?filter=${BOOK_FILTERS.Biography}`
  },
  [BOOK_FILTERS.Fantasy]: {
    literal: 'Fantasía',
    icon: '🧚‍♂️',
    href: `/?filter=${BOOK_FILTERS.Fantasy}`
  },
  [BOOK_FILTERS.Romance]: {
    literal: 'Romance',
    icon: '❤️',
    href: `/?filter=${BOOK_FILTERS.Romance}`
  },
  [BOOK_FILTERS.Thriller]: {
    literal: 'Thriller',
    icon: '🔍',
    href: `/?filter=${BOOK_FILTERS.Thriller}`
  },
  [BOOK_FILTERS.Mystery]: {
    literal: 'Misterio',
    icon: '🕵️‍♂️',
    href: `/?filter=${BOOK_FILTERS.Mystery}`
  },
  [BOOK_FILTERS['Self-Help']]: {
    literal: 'Autoayuda',
    icon: '🌟',
    href: `/?filter=${BOOK_FILTERS['Self-Help']}`
  },
  [BOOK_FILTERS['Health & Wellness']]: {
    literal: 'Salud y Bienestar',
    icon: '💪',
    href: `/?filter=${BOOK_FILTERS['Health & Wellness']}`
  },
  [BOOK_FILTERS.Travel]: {
    literal: 'Viajes',
    icon: '🌍',
    href: `/?filter=${BOOK_FILTERS.Travel}`
  },
  [BOOK_FILTERS.Cookbooks]: {
    literal: 'Libros de Cocina',
    icon: '🍳',
    href: `/?filter=${BOOK_FILTERS.Cookbooks}`
  },
  [BOOK_FILTERS["Children's Books"]]: {
    literal: 'Libros Infantiles',
    icon: '📚',
    href: `/?filter=${BOOK_FILTERS["Children's Books"]}`
  },
  [BOOK_FILTERS['Young Adult']]: {
    literal: 'Jóvenes Adultos',
    icon: '👩‍🎓',
    href: `/?filter=${BOOK_FILTERS['Young Adult']}`
  },
  [BOOK_FILTERS.Religion]: {
    literal: 'Religión',
    icon: '✝️',
    href: `/?filter=${BOOK_FILTERS.Religion}`
  },
  [BOOK_FILTERS['Science Fiction']]: {
    literal: 'Ciencia Ficción',
    icon: '👽',
    href: `/?filter=${BOOK_FILTERS['Science Fiction']}`
  },
  [BOOK_FILTERS.Horror]: {
    literal: 'Terror',
    icon: '👻',
    href: `/?filter=${BOOK_FILTERS.Horror}`
  },
  [BOOK_FILTERS.Poetry]: {
    literal: 'Poesía',
    icon: '📝',
    href: `/?filter=${BOOK_FILTERS.Poetry}`
  },
  [BOOK_FILTERS.Drama]: {
    literal: 'Drama',
    icon: '🎭',
    href: `/?filter=${BOOK_FILTERS.Drama}`
  },
  [BOOK_FILTERS['Graphic Novels']]: {
    literal: 'Novelas Gráficas',
    icon: '📚',
    href: `/?filter=${BOOK_FILTERS['Graphic Novels']}`
  },
  [BOOK_FILTERS.Philosophy]: {
    literal: 'Filosofía',
    icon: '🤔',
    href: `/?filter=${BOOK_FILTERS.Philosophy}`
  },
  [BOOK_FILTERS.Politics]: {
    literal: 'Política',
    icon: '🏛️',
    href: `/?filter=${BOOK_FILTERS.Politics}`
  },
  [BOOK_FILTERS.Economics]: {
    literal: 'Economía',
    icon: '💵',
    href: `/?filter=${BOOK_FILTERS.Economics}`
  },
  [BOOK_FILTERS.Business]: {
    literal: 'Negocios',
    icon: '📈',
    href: `/?filter=${BOOK_FILTERS.Business}`
  },
  [BOOK_FILTERS.Education]: {
    literal: 'Educación',
    icon: '🎓',
    href: `/?filter=${BOOK_FILTERS.Education}`
  },
  [BOOK_FILTERS.Arts]: {
    literal: 'Artes',
    icon: '🎨',
    href: `/?filter=${BOOK_FILTERS.Arts}`
  },
  [BOOK_FILTERS.Computers]: {
    literal: 'Informática',
    icon: '💻',
    href: `/?filter=${BOOK_FILTERS.Computers}`
  },
  [BOOK_FILTERS.Technology]: {
    literal: 'Tecnología',
    icon: '🛠️',
    href: `/?filter=${BOOK_FILTERS.Technology}`
  },
  [BOOK_FILTERS.Sports]: {
    literal: 'Deportes',
    icon: '⚽',
    href: `/?filter=${BOOK_FILTERS.Sports}`
  },
  [BOOK_FILTERS['True Crime']]: {
    literal: 'Crimen Verdadero',
    icon: '🔪',
    href: `/?filter=${BOOK_FILTERS['True Crime']}`
  },
  [BOOK_FILTERS.Western]: {
    literal: 'Oeste',
    icon: '🤠',
    href: `/?filter=${BOOK_FILTERS.Western}`
  },
  [BOOK_FILTERS['Literary Collections']]: {
    literal: 'Colecciones Literarias',
    icon: '📚',
    href: `/?filter=${BOOK_FILTERS['Literary Collections']}`
  },
  [BOOK_FILTERS['Juvenile Fiction']]: {
    literal: 'Ficción Infantil',
    icon: '📚',
    href: `/?filter=${BOOK_FILTERS['Juvenile Fiction']}`
  },
  [BOOK_FILTERS.Self]: {
    literal: 'Auto',
    icon: '🌟',
    href: `/?filter=${BOOK_FILTERS.Self}`
  },
  [BOOK_FILTERS.Comics]: {
    literal: 'Cómics',
    icon: '📚',
    href: `/?filter=${BOOK_FILTERS.Comics}`
  },
  [BOOK_FILTERS.Music]: {
    literal: 'Música',
    icon: '🎵',
    href: `/?filter=${BOOK_FILTERS.Music}`
  },
  [BOOK_FILTERS.VideoGames]: {
    literal: 'Videojuegos',
    icon: '🎮',
    href: `/?filter=${BOOK_FILTERS.VideoGames}`
  },
  [BOOK_FILTERS.Anime]: {
    literal: 'Anime',
    icon: '🧙‍♂️',
    href: `/?filter=${BOOK_FILTERS.Anime}`
  },
  [BOOK_FILTERS.Manga]: {
    literal: 'Manga',
    icon: '📖',
    href: `/?filter=${BOOK_FILTERS.Manga}`
  },
  [BOOK_FILTERS.Cartoons]: {
    literal: 'Dibujos animados',
    icon: '🖼️',
    href: `/?filter=${BOOK_FILTERS.Cartoons}`
  },
  [BOOK_FILTERS['Coffee growers']]: {
    literal: 'Cultivos de café',
    icon: '☕',
    href: `/?filter=${BOOK_FILTERS['Coffee growers']}`
  },
  [BOOK_FILTERS['Spanish language']]: {
    literal: 'Lenguaje español',
    icon: '🇪🇸',
    href: `/?filter=${BOOK_FILTERS['Spanish language']}`
  },
  [BOOK_FILTERS['Business & Economics']]: {
    literal: 'Negocios y Economía',
    icon: '💼',
    href: `/?filter=${BOOK_FILTERS['Business & Economics']}`
  },
  [BOOK_FILTERS['Social Science']]: {
    literal: 'Ciencia Social',
    icon: '🌍',
    href: `/?filter=${BOOK_FILTERS['Social Science']}`
  },
  [BOOK_FILTERS['History of Science']]: {
    literal: 'Historia de la Ciencia',
    icon: '🔬',
    href: `/?filter=${BOOK_FILTERS['History of Science']}`
  },
  [BOOK_FILTERS['Cooking']]: {
    literal: 'Cocina',
    icon: '🍳',
    href: `/?filter=${BOOK_FILTERS['Cooking']}`
  }
}
