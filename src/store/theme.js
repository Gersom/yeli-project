export const state = () => ({
  lang: 'ES',
  theme: 'light',

  themes: {
    EN: { // Ingles
      light: 'Light theme',
      dark: 'Dark theme'
    },
    ES: { // Español
      light: 'Tema claro',
      dark: 'Tema oscuro'
    },
    FR: { // Francés
      light: 'Thème léger',
      dark: 'Thème sombre'
    },
    IT: { // Italiano
      light: 'Tema chiaro',
      dark: 'Tema scuro'
    },
    PT: { // Portugués
      light: 'Tema claro',
      dark: 'Tema escuro'
    }
  }
})

export const getters = {
  nameTheme: ({ theme }) => {
    return theme
  },
  textTheme: ({ lang, theme, themes }) => {
    return themes[lang][theme]
  }
}

export const mutations = {
  changeTheme (state) {
    if (state.theme === 'light') {
      state.theme = 'dark'
    } else {
      state.theme = 'light'
    }
  }
}

export const actions = {
  toggleTheme: ({ commit }) => {
    commit('changeTheme')
  }
}
