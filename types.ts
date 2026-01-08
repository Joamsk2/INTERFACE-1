import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  buttonColor: string;
}
