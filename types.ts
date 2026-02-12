
export interface AutomationItem {
  icon: string;
  title: string;
  description: string;
}

export interface SectionData {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  navLabel: string;
  navIcon: string;
  items: AutomationItem[];
  variant?: 'light' | 'tinted' | 'dark';
}
