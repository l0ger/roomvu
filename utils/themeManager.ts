import { THEME } from '../constants/storages';
import store from '../redux/store';
import { Theme } from '../types';
import { setThemeAction } from '../redux/site.slice';

export class ThemeManager {
  public static saveTheme(themeName: string) {
    localStorage.setItem(THEME, themeName);
  }
  public static getTheme() {
    return localStorage.getItem(THEME) || 'light';
  }

  public static changeTheme(themeName?: Theme) {
    const theme = themeName ? themeName : (ThemeManager.getTheme() as Theme);
    store.dispatch(setThemeAction({ theme }));
  }
}
