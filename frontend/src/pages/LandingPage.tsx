import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Layers, Search, Plus, Share2, Zap, List, Users, Lock } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const uspRef = useRef<HTMLDivElement | null>(null);

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate('/', { replace: true, state: { forceShowMain: true } });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#10182a] via-[#151e36] to-[#181f3a] overflow-y-auto">
      <Header 
        searchValue={search} 
        onSearchChange={handleSearchChange} 
        onSearchKeyDown={handleSearchKeyDown}
        showMainContent={false}
        setShowMainContent={() => {}}
        showSearchBar={false}
        centerNavigation={true}
      />
      {/* Main scrollable content */}
      <div className="flex flex-col min-h-screen w-full">
        {/* Main Content (Hero) */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[calc(100vh-80px)] relative">
          {/* Animated gradient blend at the bottom */}
          <div className="absolute left-0 right-0 bottom-0 h-24 pointer-events-none z-10" style={{background: "linear-gradient(to bottom, transparent 60%, #3a236e 100%)", transition: 'background 1s ease'}} />
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-12 mb-4">
            Innovation made <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">effortless</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/80 mb-4">Explore, connect, and create in one place</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
            Transform your ideas into reality with our comprehensive platform that brings together cutting-edge tools, seamless collaboration, and unlimited creative possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group"
              onClick={() => navigate("/home")}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-800 px-8 py-3 bg-transparent transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
              onClick={() => {
                const uspSection = document.getElementById('usp-section');
                if (uspSection) {
                  uspSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Features
            </Button>
          </div>
        </main>
        
        {/* USP Section - Updated with modern design */}
        <section id="usp-section" ref={uspRef} className="w-full relative">
          {/* Animated Background for feature section only */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900"
            style={{ y: 0 }}
          />
          <motion.div
            className="container mx-auto px-4 py-20 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Submit & Advertise Section */}
            <motion.section className="text-center mb-32" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-white/80">Featured</span>
              </motion.div>

              <motion.h2 className="text-5xl md:text-7xl font-bold text-white mb-8" variants={itemVariants}>
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.05, color: "#a855f7" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Submit
                </motion.span>
                {" & "}
                <motion.span
                  className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Advertise
                </motion.span>
              </motion.h2>

              <motion.p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed" variants={itemVariants}>
                Submit your own AI tool or advertise to reach thousands of innovators. Get discovered and grow your
                audience.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg group"
                >
                  <motion.span whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    Submit Tool
                  </motion.span>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Plus className="ml-2 w-5 h-5" />
                  </motion.div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg group bg-transparent"
                >
                  <motion.span whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    Advertise Here
                  </motion.span>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.section>

            {/* Blends Section */}
            <motion.section className="text-center mb-32" variants={itemVariants}>
              <motion.div variants={floatingVariants} animate="animate" className="inline-block mb-6">
                <Layers className="w-16 h-16 text-purple-400 mx-auto" />
              </motion.div>

              <motion.h2 className="text-5xl md:text-6xl font-bold text-white mb-8" variants={itemVariants}>
                <motion.span
                  className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Blends
                </motion.span>
              </motion.h2>

              <motion.p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed" variants={itemVariants}>
                Combine multiple AI tools into powerful workflows. Create, share, and discover unique blends tailored to
                your needs.
              </motion.p>

              <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" variants={containerVariants}>
                {[
                  { icon: Zap, title: "Create", desc: "Build custom workflows" },
                  { icon: Share2, title: "Share", desc: "Collaborate with others" },
                  { icon: Sparkles, title: "Discover", desc: "Find new combinations" },
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                      <CardContent className="p-6 text-center">
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                          <item.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-white/70">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Directories Section */}
            <motion.section className="text-center mb-32" variants={itemVariants}>
              <motion.div variants={floatingVariants} animate="animate" className="inline-block mb-6">
                <Search className="w-16 h-16 text-blue-400 mx-auto" />
              </motion.div>

              <motion.h2 className="text-5xl md:text-6xl font-bold text-white mb-8" variants={itemVariants}>
                <motion.span
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Directories
                </motion.span>
              </motion.h2>

              <motion.p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed" variants={itemVariants}>
                Explore comprehensive directories of AI tools, categorized for easy discovery. Find the right tool for any
                task.
              </motion.p>

              <motion.div variants={itemVariants}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg group"
                  onClick={() => navigate("/home")}
                >
                  <motion.span whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    Explore Directory
                  </motion.span>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Search className="ml-2 w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.section>

            {/* Lists Section */}
            <motion.section className="text-center" variants={itemVariants}>
              <motion.div variants={floatingVariants} animate="animate" className="inline-block mb-6">
                <List className="w-16 h-16 text-orange-400 mx-auto" />
              </motion.div>

              <motion.h2 className="text-5xl md:text-6xl font-bold text-white mb-8" variants={itemVariants}>
                <motion.span
                  className="inline-block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Lists
                </motion.span>
              </motion.h2>

              <motion.p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed" variants={itemVariants}>
                Curate and organize your favorite tools into lists. Share them with the community or keep them private for
                your team.
              </motion.p>

              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto" variants={containerVariants}>
                {[
                  { icon: Users, title: "Community Lists", desc: "Share with everyone" },
                  { icon: Lock, title: "Private Lists", desc: "Keep for your team" },
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                      <CardContent className="p-6 text-center">
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                          <item.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-white/70">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>


            </motion.section>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage; 