import { Home, Settings, Users, Settings as Rocket, RocketIcon, Activity } from 'lucide-react'; // Import Lucide icons
import { v4 as uuid } from 'uuid';

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
    label: 'contacts',
    icon: <Users />, // Using Lucide icon for contacts
  },
  {
    id: uuid(),
    label: 'automations',
    icon: <Activity />, // Using Lucide icon for automations
  },
  {
    id: uuid(),
    label: 'integrations',
    icon: <RocketIcon />, // Using Lucide icon for integrations
  },
  {
    id: uuid(),
    label: 'settings',
    icon: <Settings />, // Using Lucide icon for settings
  },
];
