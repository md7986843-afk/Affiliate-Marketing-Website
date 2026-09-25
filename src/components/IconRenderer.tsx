import React from 'react';
import {
  Zap,
  Gauge,
  Layers,
  ShieldCheck,
  Workflow,
  CloudLightning,
  BarChart3,
  FolderKanban,
  Lock,
  Headphones,
  Check,
  Star,
  ArrowRight,
  ExternalLink,
  Clock,
  Award,
  ChevronDown,
  Play,
  Sparkles,
  Shield,
  HelpCircle,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Gauge,
  Layers,
  ShieldCheck,
  Workflow,
  CloudLightning,
  BarChart3,
  FolderKanban,
  Lock,
  Headphones,
  Check,
  Star,
  ArrowRight,
  ExternalLink,
  Clock,
  Award,
  ChevronDown,
  Play,
  Sparkles,
  Shield,
  HelpCircle
};

interface IconRendererProps {
  name: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className = 'w-5 h-5' }) => {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent className={className} />;
};
