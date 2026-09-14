import {
  Users,
  Wifi,
  Hand,
  Clock,
  Download,
  BarChart3,
  Bell,
  Calendar,
  GraduationCap,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Award,
  Star,
} from "lucide-react";

export const attendanceMethods = [
  {
    icon: Users,
    title: "Face Detection",
    description:
      "AI-powered facial recognition technology ensures secure and contactless attendance with 99.9% accuracy.",
    color: "from-blue-500 to-cyan-500",
    lightColor: "from-blue-50 to-cyan-50",
  },
  {
    icon: Wifi,
    title: "WiFi/Hotspot",
    description:
      "Location-based attendance using WiFi or hotspot connectivity, preventing proxy attendance.",
    color: "from-purple-500 to-pink-500",
    lightColor: "from-purple-50 to-pink-50",
  },
  {
    icon: Hand,
    title: "Manual Entry",
    description:
      "Traditional manual attendance marking with modern interface and late entry options.",
    color: "from-orange-500 to-red-500",
    lightColor: "from-orange-50 to-red-50",
  },
];

export const features = [
  {
    icon: Users,
    title: "Face Detection",
    description:
      "AI-powered facial recognition for secure and contactless attendance marking",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wifi,
    title: "WiFi/Hotspot",
    description:
      "Location-based attendance through WiFi or hotspot connectivity",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Hand,
    title: "Manual Entry",
    description:
      "Traditional manual attendance marking with modern interface",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description:
      "Monitor attendance as it happens with live updates and notifications",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Download,
    title: "One-Click Download",
    description:
      "Export attendance reports instantly in multiple formats",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: BarChart3,
    title: "Assignment Management",
    description:
      "Create, distribute, and track assignments seamlessly",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Bell,
    title: "Smart Notices",
    description:
      "Push notifications and announcements to keep everyone informed",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Comprehensive reports and visualizations for better decision making",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Calendar,
    title: "Time Management",
    description:
      "Schedule classes, set reminders, and optimize time allocation",
    gradient: "from-pink-500 to-rose-500",
  },
];

export const stats = [
  {
    value: "10K+",
    label: "Active Users",
    icon: TrendingUp,
  },
  {
    value: "500+",
    label: "Institutions",
    icon: Award,
  },
  {
    value: "99.9%",
    label: "Accuracy",
    icon: Star,
  },
];

export const userTypes = [
  {
    icon: GraduationCap,
    title: "For Students",
    features: [
      "Mark attendance via multiple methods",
      "View attendance records instantly",
      "Submit assignments online",
      "Receive study recommendations",
      "Get instant notifications",
    ],
  },
  {
    icon: Users,
    title: "For Teachers",
    features: [
      "Create and manage classes",
      "Track attendance in real-time",
      "Generate reports instantly",
      "Assign and grade work",
      "Communicate with students",
    ],
  },
  {
    icon: Shield,
    title: "For HOD & Dean",
    features: [
      "Monitor all departments",
      "Access comprehensive analytics",
      "Approve teacher accounts",
      "Generate institutional reports",
      "Manage entire system",
    ],
  },
];

export const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Mark attendance for entire class in seconds. Real-time sync across all devices.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Bank-level encryption and 99.9% uptime guarantee for your data security.",
  },
  {
    icon: Globe,
    title: "Access Anywhere",
    description:
      "Cloud-based platform accessible from any device, anywhere, anytime.",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description:
      "Deep insights with visual reports, trends, and predictive analytics.",
  },
];