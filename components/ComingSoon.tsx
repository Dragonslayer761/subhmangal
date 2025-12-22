import React, { useState, useEffect } from 'react';
import { Mail, Heart, Sparkles, Calendar, Clock } from 'lucide-react';
import LOGO_URL from '../assets/images/logo.png';

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set launch date (you can change this)
  const launchDate = new Date('2026-01-01T00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
    }
  };

  return (
    <div className="min-h-screen bg-darkBg text-stone-200 font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bengaliRed/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-premiumGold/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lightGold/5 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-premiumGold/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="my-8 animate-fade-in-up">
          <img
            src={LOGO_URL}
            alt="Subhmangal Photography"
            className="h-32 w-[20rem] object-cover mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 animate-fade-in-up delay-200">
          <h1 className="text-6xl md:text-8xl font-cursive text-white mb-4 tracking-tight">
            Coming
            <span className="block text-premiumGold animate-pulse">Soon</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            We're crafting something extraordinary for you.
            <br />
            <span className="text-bengaliRed font-semibold">Beautiful moments</span> deserve to be captured beautifully.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12 animate-fade-in-up delay-400">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={item.label} className="text-center">
                <div className="bg-cardBg border border-premiumGold/20 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-premiumGold mb-1">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-stone-400 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Preview */}
        <div className="mb-12 animate-fade-in-up delay-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-cardBg/50 backdrop-blur-sm rounded-lg border border-white/5 hover:border-premiumGold/30 transition-all duration-300">
              <Heart className="w-8 h-8 text-bengaliRed mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Love Stories</h3>
              <p className="text-stone-400 text-sm">Capturing the magic of your special moments</p>
            </div>
            <div className="text-center p-6 bg-cardBg/50 backdrop-blur-sm rounded-lg border border-white/5 hover:border-premiumGold/30 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-premiumGold mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Premium Quality</h3>
              <p className="text-stone-400 text-sm">Professional photography with artistic touch</p>
            </div>
            <div className="text-center p-6 bg-cardBg/50 backdrop-blur-sm rounded-lg border border-white/5 hover:border-premiumGold/30 transition-all duration-300">
              <Calendar className="w-8 h-8 text-lightGold mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Timeless Memories</h3>
              <p className="text-stone-400 text-sm">Cherished forever in stunning visuals</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="max-w-md mx-auto w-full animate-fade-in-up delay-800">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Get Notified</h2>
            <p className="text-stone-400">Be the first to know when we launch our new website</p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-cardBg border border-white/10 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-premiumGold/50 focus:ring-1 focus:ring-premiumGold/50 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-bengaliRed to-red-700 hover:from-red-700 hover:to-bengaliRed text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-bengaliRed/25"
              >
                <Mail className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <div className="text-center p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <div className="text-green-400 font-semibold mb-1">Thank you!</div>
              <div className="text-stone-400 text-sm">We'll notify you when we launch</div>
            </div>
          )}
        </div> */}

        {/* Footer */}
        <div className="bottom-8  transform -translate-x-1/2 mb-5 text-center animate-fade-in-up delay-1000">
          <p className="text-stone-500 text-sm">
            © 2025 Subhmangal Photography. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default ComingSoon;