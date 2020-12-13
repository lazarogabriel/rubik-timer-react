import { createContext } from 'react';

export const ThemesContext = createContext();

export const ThemesProvider = ThemesContext.Provider;
export const ThemesConsumer = ThemesContext.Consumer;

export default ThemesContext

export const Themes = {
    default: 'DefaultTheme',
    try: 'TryTheme',
    ready: 'ReadyTheme',
    started: 'StartedTheme'
};