import styles from "./styles.module.css";
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = (localStorage.getItem("theme") as AvailableThemes) || 'dark';

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      //Pedi para monitorar o theme mas na hora de configurar você altera outra coisa nada a ver!!!
      return nextTheme;
    });
  }

  useEffect(() => {
    console.log("UseEffect com array deps com theme", theme, Date.now())
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme);
  }, [theme]); // Executado quando o valor da dependência mudar!

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
