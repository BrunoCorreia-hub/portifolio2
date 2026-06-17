const standardThemes = {
  colors: {
    // --- Cores principais (roxo/lilás) ---
    primary: {
      50:  '#EEEDFE', // background suave, badges, hover
      100: '#CECBF6', // bordas leves
      200: '#AFA9EC', // bordas médias, avatar border
      400: '#7F77DD', // destaque, logo, ícones
      600: '#534AB7', // botões primários, links ativos
      800: '#3C3489', // texto sobre fundo claro
      900: '#26215C', // texto forte sobre fundo muito claro
    },

    // --- Cores secundárias ---
    teal: {
      50:  '#E1F5EE',
      100: '#9FE1CB',
      200: '#5DCAA5',
      400: '#1D9E75', // projetos, tags verdes
      600: '#0F6E56',
      800: '#085041',
      900: '#04342C',
    },
    coral: {
      50:  '#FAECE7',
      100: '#F5C4B3',
      200: '#F0997B',
      400: '#D85A30', // projetos, avisos
      600: '#993C1D',
      800: '#712B13',
      900: '#4A1B0C',
    },
    pink: {
      50:  '#FBEAF0',
      100: '#F4C0D1',
      200: '#ED93B1',
      400: '#D4537E', // habilidades, destaques
      600: '#993556',
      800: '#72243E',
      900: '#4B1528',
    },
    blue: {
      50:  '#E6F1FB',
      100: '#B5D4F4',
      200: '#85B7EB',
      400: '#378ADD', // projetos, links
      600: '#185FA5',
      800: '#0C447C',
      900: '#042C53',
    },
    amber: {
      50:  '#FAEEDA',
      100: '#FAC775',
      200: '#EF9F27',
      400: '#BA7517', // habilidades, avisos
      600: '#854F0B',
      800: '#633806',
      900: '#412402',
    },
    green: {
      50:  '#EAF3DE',
      100: '#C0DD97',
      200: '#97C459',
      400: '#639922',
      600: '#3B6D11',
      800: '#27500A',
      900: '#173404',
    },

    // --- Neutros ---
    gray: {
      50:  '#F1EFE8', // backgrounds alternativos
      100: '#D3D1C7', // bordas leves
      200: '#B4B2A9', // bordas médias
      400: '#888780', // texto terciário
      600: '#5F5E5A', // texto secundário
      800: '#444441', // texto primário dark
      900: '#2C2C2A', // texto máximo dark
    },

    // --- Semânticas (para uso com CSS variables em modo claro/escuro) ---
    text: {
      primary:   '#FFFFFF',    // superfícies principais (cards, navbar)
      secondary: '#F8F8F6',    // fundos alternativos de seção
      tertiary:  '#F1EFE8',    // página (body background)
    },
    background: {
      primary:   '#1A1A18',    // texto principal
      secondary: '#5F5E5A',    // texto de suporte
      tertiary:  '#888780',    // hints, placeholders
    },
    border: {
      light:  'rgba(0, 0, 0, 0.08)',   // bordas sutis
      medium: 'rgba(0, 0, 0, 0.14)',   // bordas de hover
      strong: 'rgba(0, 0, 0, 0.22)',   // bordas de foco
    },
  },

  // --- Tipografia ---
  fonts: {
    sans:  "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
    mono:  "'Fira Code', 'Cascadia Code', 'Courier New', monospace",
  },
  fontSizes: {
    xs:   '11px',
    sm:   '13px',
    base: '15px',
    md:   '16px',
    lg:   '18px',
    xl:   '22px',
    '2xl': '28px',
    '3xl': '36px',
    '4xl': '48px',
  },
  lineHeights: {
    tight:  1.25,
    normal: 1.6,
    relaxed: 1.75,
  },

  // --- Espaçamento ---
  spacing: {
    1:  '4px',
    2:  '8px',
    3:  '12px',
    4:  '16px',
    5:  '20px',
    6:  '24px',
    8:  '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
  },

  // --- Bordas ---
  borderRadius: {
    sm:   '6px',
    md:   '8px',
    lg:   '12px',
    xl:   '16px',
    full: '9999px',  // pills, badges arredondados
  },

  // --- Sombras (leves, para modo claro) ---
  shadows: {
    sm:  '0 1px 3px rgba(0, 0, 0, 0.06)',
    md:  '0 2px 8px rgba(0, 0, 0, 0.08)',
    lg:  '0 4px 16px rgba(0, 0, 0, 0.10)',
  },

  // --- Breakpoints ---
  breakpoints: {
    sm:  '480px',
    md:  '768px',
    lg:  '1024px',
    xl:  '1280px',
  },

  // --- Transições ---
  transitions: {
    fast:   '120ms ease',
    normal: '200ms ease',
    slow:   '350ms ease',
  },
};

export default standardThemes;