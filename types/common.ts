import rootReducer from '../redux/rootReducer';

export type AppState = ReturnType<typeof rootReducer>;
export type Theme = 'dark' | 'light';
