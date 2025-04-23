import { SettingOutlined } from '@ant-design/icons';
import { Activity, Blocks, Home, User } from 'lucide-react';

export const PAGE_BREAD_CRUMBS: string[] = [
    'contacts',
    'automations',
    'integrations',
    'settings',
  ]
  
  type Props = {
    [page in string]: React.ReactNode
  }
  
  export const PAGE_ICON: Props = {
    AUTOMATIONS: <Activity />,
    CONTACTS: <User />,
    INTEGRATIONS: <Blocks />,
    SETTINGS: <SettingOutlined />,
    HOME: <Home />,
  }
  