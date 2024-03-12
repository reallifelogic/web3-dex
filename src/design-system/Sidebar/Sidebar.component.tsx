import { Pane } from 'evergreen-ui';
import { BiGridAlt } from 'react-icons/bi';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import styles from './Sidebar.component.module.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Sidebar: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };

  return (
    <Pane className={styles.sidebar}>
      <Pane className={styles.logo}>
        <img
          src="https://s2.coinmarketcap.com/static/img/coins/64x64/24638.png"
          width={24}
          height={24}
          alt="logo"
        />
      </Pane>
      <Pane className={styles.menu}>
        <Pane>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.selected : styles.item
            }
          >
            <BiGridAlt />
          </NavLink>
        </Pane>
        <Pane
          className={styles.item}
          onClick={handleThemeChange}
          style={{ marginBottom: 0 }}
        >
          {theme === 'light' ? <MdOutlineDarkMode /> : <MdDarkMode />}
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Sidebar;
