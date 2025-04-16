
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import AnimatedSection from '@/components/AnimatedSection';
import FeatureCard from '@/components/FeatureCard';
import { AlertTriangle, MapPin, Users, BrainCircuit, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AIChat from '@/components/AIChat';
import EmergencyFAB from '@/components/EmergencyFAB';

const LandingPage: React.FC = () => {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute top-20 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"></div>
          
          <div className="container max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <AnimatedSection animation="fade-in">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    AI-Powered Disaster <span className="text-primary">Relief Management</span>
                  </h1>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={300}>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    Predict, respond, and coordinate disaster relief efforts with our centralized platform.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={600}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button 
                      size="lg" 
                      className="text-md font-semibold"
                      onClick={() => isAuthenticated ? navigate('/dashboard') : navigate('/login')}
                    >
                      {isAuthenticated ? 'Go to Dashboard' : 'Login to Get Alerts'}
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="text-md font-semibold"
                      onClick={() => isAuthenticated ? navigate('/report') : navigate('/register')}
                    >
                      {isAuthenticated ? 'Report a Disaster' : 'Register Now'}
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
              
              <AnimatedSection animation="slide-in-right" className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30"></div>
                  <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" 
                      alt="Disaster Relief"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="container max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-12">
                Key <span className="text-primary">Features</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection delay={100}>
                <FeatureCard 
                  icon={<AlertTriangle className="h-6 w-6 text-primary" />}
                  title="Disaster Reports"
                  description="Report emergencies with geo-location and get real-time status updates."
                />
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <FeatureCard 
                  icon={<MapPin className="h-6 w-6 text-primary" />}
                  title="Geo-Alerts"
                  description="Receive location-based alerts for disasters in your area."
                />
              </AnimatedSection>
              
              <AnimatedSection delay={300}>
                <FeatureCard 
                  icon={<Users className="h-6 w-6 text-primary" />}
                  title="Volunteer Coordination"
                  description="Connect volunteers with those in need during critical situations."
                />
              </AnimatedSection>
              
              <AnimatedSection delay={400}>
                <FeatureCard 
                  icon={<BrainCircuit className="h-6 w-6 text-primary" />}
                  title="AI Insights"
                  description="Get AI-powered recommendations and disaster predictions."
                />
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-primary/10 dark:bg-primary/5 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden neumorphic">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                
                <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to Make a Difference?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                  Join our platform to help predict, respond to, and coordinate disaster relief efforts.
                </p>
                
                <Button 
                  onClick={() => navigate('/register')} 
                  size="lg" 
                  className="relative z-10 group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="ml-4 relative z-10"
                  onClick={() => setIsAIChatOpen(true)}
                >
                  Ask AI Assistant
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">RL</span>
              </div>
              <span className="text-xl font-bold text-primary">ResQLInk</span>
            </div>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 ResQLInk. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      
      {/* AI Chat */}
      <AIChat isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
      
      {/* Emergency FAB */}
      <EmergencyFAB />
      
      {/* Chat button */}
      <Button
        className="fixed bottom-4 right-4 rounded-full h-12 w-12 p-0 flex items-center justify-center shadow-lg z-40"
        onClick={() => setIsAIChatOpen(!isAIChatOpen)}
      >
        <BrainCircuit className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default LandingPage;
