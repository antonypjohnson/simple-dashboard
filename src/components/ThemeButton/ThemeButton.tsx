import { useTheme } from '@/context/ThemeContext';

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="cursor-pointer" onClick={() => toggleTheme()}>
      {theme === 'dark' ? 'Light 🌞' : 'Dark 🌜'}
    </div>
  );
};
