import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

interface SwitchEventTarget {
  checked: boolean;
}

interface SwitchEvent {
  target: SwitchEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: React.ChangeEvent;
}

const TheNavigation = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <nav style={{ position: 'sticky', paddingTop: '1rem' }}>
      <Switch
        checked={isDark}
        onChange={(e: SwitchEvent) => {
          setTheme(e.target.checked ? 'dark' : 'light');
        }}
        size='xl'
        icon={
          isDark ? (
            <i
              className='bx bx-moon bx-border-circle'
              style={{ backgroundColor: 'white', color: 'black' }}
            ></i>
          ) : (
            <i
              className='bx bx-sun bx-border-circle'
              style={{ backgroundColor: 'white', color: 'black' }}
            ></i>
          )
        }
        aria-hidden
      >
        Toggle theme
      </Switch>
    </nav>
  );
};

export default TheNavigation;
