import { v4 as uuid } from 'uuid';
import { Home, Settings, Rocket } from 'lucide-react'; // Import Lucide icons

type FieldProps = {
  label: string;
  id: string;
};

type SideBarProps = {
  icon: React.ReactNode;
} & FieldProps;

export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: 'home',
    icon: <Home />, // Using Lucide icon for home
  },
  {
    id: uuid(),
    label: 'automations',
    icon: <Settings />, // Using Lucide icon for settings (automations)
  },
  {
    id: uuid(),
    label: 'integrations',
    icon: <Rocket /> // Using Lucide icon for rocket (integrations)
  },
];
