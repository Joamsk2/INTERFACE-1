import { 
  Brain, 
  Heart, 
  Users, 
  Search, 
  Puzzle, 
  Activity, 
  Compass, 
  MessageCircle, 
  Monitor 
} from 'lucide-react';
import { NavItem, Feature, Service } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Test Vocacional', href: '#test' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Enfoque Científico',
    description: 'Enfoque en neuropsicología, con un abordaje integral basado en evidencia científica.',
    icon: Brain,
    color: 'bg-blue-100'
  },
  {
    id: 2,
    title: 'Acompañamiento Empático',
    description: 'Te ofrezco un abordaje integral con empatía, respeto y creatividad en cada sesión.',
    icon: Heart,
    color: 'bg-pink-100'
  },
  {
    id: 3,
    title: 'Todas las Edades',
    description: 'Terapia adaptada a niños, adolescentes y adultos. Un abordaje integral para cada etapa.',
    icon: Users,
    color: 'bg-green-100'
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Evaluación y Diagnóstico',
    description: 'Evaluación exhaustiva para comprender el perfil cognitivo y emocional.',
    icon: Search,
    bgColor: 'bg-purple-50',
    buttonColor: 'bg-purple-200'
  },
  {
    id: 2,
    title: 'Neuropsicología',
    description: 'Rehabilitación y estimulación de funciones cognitivas como memoria y atención.',
    icon: Brain,
    bgColor: 'bg-blue-50',
    buttonColor: 'bg-blue-200'
  },
  {
    id: 3,
    title: 'Tratamiento y Estimulación',
    description: 'Estrategias personalizadas para el tratamiento y estimulación cognitiva.',
    icon: Activity,
    bgColor: 'bg-green-50',
    buttonColor: 'bg-green-200'
  },
  {
    id: 4,
    title: 'Orientación Vocacional',
    description: 'Proceso de autoconocimiento y orientación para la elección profesional.',
    icon: Compass,
    bgColor: 'bg-orange-50',
    buttonColor: 'bg-orange-200'
  },
  {
    id: 5,
    title: 'Asesoramiento Integral',
    description: 'Espacio de escucha y acompañamiento para padres y familias.',
    icon: MessageCircle,
    bgColor: 'bg-indigo-50',
    buttonColor: 'bg-indigo-200'
  },
  {
    id: 6,
    title: 'Test Vocacional Online',
    description: 'Realiza tu evaluación vocacional de manera online, segura y efectiva.',
    icon: Monitor,
    bgColor: 'bg-teal-50',
    buttonColor: 'bg-teal-200'
  }
];
