import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Eye, EyeOff, Loader2, BookOpen, FileText, Brain, GraduationCap, AlertCircle, ArrowLeft } from 'lucide-react';

const FEATURES = [
  {
    title: "Premium Study Materials",
    description: "Access our comprehensive library of curated notes, video lectures, and reference books directly from your dashboard.",
    icon: BookOpen,
    color: "bg-blue-500"
  },
  {
    title: "Daily Practice Problems (DPP)",
    description: "Consistent practice frameworks designed to reinforce daily learning and ensure high retention of complex concepts.",
    icon: FileText,
    color: "bg-teal-500"
  },
  {
    title: "Mock JEE/NEET Exams",
    description: "Real-time exam simulations with NTA-aligned patterns to build speed, accuracy, and examination temperament.",
    icon: GraduationCap,
    color: "bg-gold"
  },
  {
    title: "AI-Powered Analysis",
    description: "Deep insights into your strong and weak subjects. Let our algorithms build a personalized improvement strategy for you.",
    icon: Brain,
    color: "bg-purple-500"
  }
];

const Login: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Carousel State
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % FEATURES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setError("No username or wrong; please contact +91-11-4733-8820");
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex bg-slate-50 dark:bg-slate-900 pt-16">
      
      {/* Left Panel: Feature Carousel (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-navy-900 overflow-hidden flex-col justify-between p-12 text-white">
        
        {/* === Animated Background === */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Base Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>

          {/* Ambient Breathing Gradients - Using 'animate-blob' from config */}
          <div className="absolute -top-[10%] -right-[10%] w-[700px] h-[700px] bg-teal-600/20 rounded-full blur-[80px] animate-blob"></div>
          <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[80px] animate-blob" style={{ animationDelay: '2s' }}></div>
          
          {/* Moving Orbs */}
          <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[60px] animate-blob" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>

          {/* Technical Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.04]" 
               style={{ 
                 backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
               }}>
          </div>

          {/* Floating Abstract Shapes - Using 'animate-float' */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-white/5 rounded-full animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 right-40 w-16 h-16 border border-white/5 rotate-45 animate-float" style={{ animationDuration: '15s', animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-teal-500/10 rounded-full animate-float" style={{ animationDuration: '18s' }}></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Website
          </button>
        </div>

        {/* Feature Carousel */}
        <div className="relative z-10 mb-20 min-h-[200px]">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx}
              className={`transition-all duration-700 absolute bottom-0 left-0 w-full transform ${
                idx === currentFeature 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.color} bg-opacity-20 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className={`w-8 h-8 text-white`} />
              </div>
              <h2 className="text-4xl font-bold mb-4 leading-tight tracking-tight">{feature.title}</h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                {feature.description}
              </p>
            </div>
          ))}

          {/* Indicators */}
          <div className="flex gap-3 mt-8 absolute -bottom-16 left-0">
            {FEATURES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentFeature(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                  idx === currentFeature ? 'w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-xs text-slate-500 font-medium">
          &copy; 2025 Apex Institute of Learning. All rights reserved.
        </div>
      </div>

      {/* Right Panel: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative">
        
        {/* Mobile Back Button */}
        <button 
          onClick={() => navigateTo('home')} 
          className="lg:hidden absolute top-4 left-4 p-2 text-slate-500 hover:text-navy dark:text-slate-400"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="w-full max-w-md space-y-8 animate-fade-in-up">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-navy dark:text-white tracking-tight">Welcome Back</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Enter your student ID to access your dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            
            {error && (
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-3 animate-pulse">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-red-600 dark:text-red-400 font-medium">
                  {error}
                </p>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-900 dark:text-slate-100">
                Student ID / Username
              </label>
              <input 
                type="text" 
                placeholder="Ex. APEX2025001"
                className="flex h-11 w-full rounded-lg border border-slate-300 dark:border-navy-600 bg-white dark:bg-navy-800 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 dark:focus:ring-gold disabled:cursor-not-allowed disabled:opacity-50 dark:text-white transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-900 dark:text-slate-100">
                  Password
                </label>
                <a href="#" className="text-sm font-medium text-navy hover:text-navy-800 dark:text-gold dark:hover:text-gold-400">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="flex h-11 w-full rounded-lg border border-slate-300 dark:border-navy-600 bg-white dark:bg-navy-800 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 dark:focus:ring-gold disabled:cursor-not-allowed disabled:opacity-50 dark:text-white transition-all pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-navy text-white hover:bg-navy-800 hover:shadow-lg hover:-translate-y-0.5 dark:bg-gold dark:text-navy-900 dark:hover:bg-gold-400 h-11 px-4 py-2 w-full shadow-md"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Authenticating...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200 dark:border-navy-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest">
              <span className="bg-slate-50 dark:bg-slate-900 px-2 text-slate-400">
                First time user?
              </span>
            </div>
          </div>

          <div className="text-center p-4 bg-blue-50 dark:bg-navy-800/50 rounded-lg border border-blue-100 dark:border-navy-700">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Please collect your login credentials from the administration office at your respective center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;