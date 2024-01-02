import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/MediaImage.js').MediaImage | null} */
  activeImage: null,
  /** @type {import('./models/Weather.js').Weather | null} */
  weather: null,
  /** @type {import('./models/Quote.js').Quote | null} */
  quote: null,
  /** @type {import('./models/Todo.js').Todo []} */
  todos: []
})
