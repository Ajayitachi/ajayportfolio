import { useState } from "react";
import {
  Calendar,
  Briefcase,
  Award,
  Wrench,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden relative">
      {/* Full Page Background Video */}
      <div className="fixed inset-0 w-full h-full z-0">
        <iframe
          src="https://player.vimeo.com/video/1147196977?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="w-full h-full object-cover"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "177.77777778vh",
            height: "56.25vw",
            minWidth: "100%",
            minHeight: "100%",
            transform: "translate(-50%, -50%)",
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-white">
            AJAY M
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-sm border-t border-white/20 py-4">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-6 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://photos.app.goo.gl/SjadpvJtPTptGrqn6"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
            AJAY M
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4">
            Game Designer, Game Developer, and UI/UX Designer{" "}
          </p>
          <p className="text-sm md:text-base text-white/70 tracking-widest uppercase">
            Designing Interactive Gameplay, Immersive Worlds & Intuitive
            Interfaces
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-sm font-medium"
            >
              Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-white text-black hover:border-white hover:text-black px-8 py-6 text-sm font-medium"
            >
              Contact
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Doy4ZxzzbAyNTWRC8MTnYGeupUYTY1lx/view?usp=sharing",
                  "_blank",
                )
              }
              variant="outline"
              className="border-white text-black hover:border-white hover:text-black px-8 py-6 text-sm font-medium"
            >
              Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/40 backdrop-blur-[15px] border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Stats Column */}
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-white/60 uppercase tracking-widest mb-2">
                    About Me
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    Creating Interactive
                    <br />
                    Game Experiences
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-black/40 backdrop-blur-[15px] border border-white/10 rounded-2xl p-6 text-center">
                    <Calendar className="w-8 h-8 mx-auto mb-3 text-white" />
                    <p className="text-2xl font-bold text-white">5+</p>
                    <p className="text-sm text-white/70">Game & UI Projects</p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-[15px] border border-white/10 rounded-2xl p-6 text-center">
                    <Briefcase className="w-8 h-8 mx-auto mb-3 text-white" />
                    <p className="text-sm text-white/70">
                      {" "}
                      Unity Game Prototypes
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-[15px] border border-white/10 rounded-2xl p-6 text-center">
                    <Wrench className="w-8 h-8 mx-auto mb-3 text-white" />

                    <p className="text-sm text-white/70">
                      UI/UX & Graphic Design
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-[15px] border border-white/10 rounded-2xl p-6 text-center">
                    <Award className="w-8 h-8 mx-auto mb-3 text-white" />
                    <p className="text-sm text-white/70">Game Design Student</p>
                  </div>
                </div>
              </div>

              {/* Portrait & Bio Column */}
              <div className="space-y-8">
                {/* Portrait Placeholder - Replace with your image */}
                <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden">
                  <img
                    src="https://i.postimg.cc/nzNVVdF9/my-photo.jpg"
                    alt="Ajay M Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white/80 leading-relaxed text-lg">
                    My name is Ajay M, a dedicated game designer and Unity
                    developer with hands-on experience in game design, level
                    design, scripting, and visual effects. I enjoy combining
                    creativity with technical expertise to create immersive,
                    story-focused gameplay experiences. From designing engaging
                    puzzles to building expansive worlds, I aim to tell
                    meaningful stories through player interaction.
                  </p>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="mt-6 bg-black text-white hover:bg-gray-800 px-8 py-6"
                  >
                    Contact Me
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Backstory / Timeline Section */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-white/60 uppercase tracking-widest mb-2">
              My Learning Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Backstory
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/30 -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: "2024",
                  title: "Started Game Design",
                  description:
                    "Began learning the fundamentals of Game Design, UI/UX principles,and visual design during my academic journey.",
                },
                {
                  year: "2024",
                  title: "Unity & Gameplay Design",
                  description:
                    "Developed playable Unity projects focusing on player movement, game mechanics, level layout, and UI systems. ",
                },
                {
                  year: "2025",
                  title: "AR/VR & Design Projects",
                  description:
                    "Worked on marker-based AR applications and UI/UX projects, including landing pages and game interfaces.",
                },
                {
                  year: "2025",
                  title: "Current Focus",
                  description:
                    "Improving gameplay design, prototyping ideas in Unity,and building a strong game design portfolio.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <span className="text-sm font-medium text-white/60">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mt-1 text-white w-[369px]">
                      {item.title}
                    </h3>
                    <p className="text-white/70 mt-2 flex">
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-white/60 uppercase tracking-widest mb-2">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              My Projects
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              A selection of my graphic design work across branding,
              illustration, UI design, and more.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Zombie Shooting",
                category: "3D Game",
                image:
                  "https://i.postimg.cc/mDJPyS78/Whats-App-Image-2025-10-30-at-20-49-25-a45a3ed7.jpg",
                link: "https://github.com/Ajayitachi/ZombieShooting.git",
              },
              {
                title: "Music Player",
                category: "UI/UX Design",
                image: "https://i.postimg.cc/TYy9xkk1/starting.jpg",
                link: "https://github.com/Ajayitachi/musicplayerui.git",
              },
              {
                title: "Netflix Landing Page",
                category: "UI Design",
                image:
                  "https://i.postimg.cc/5yjNTQSt/Whats-App-Image-2025-12-18-at-12-04-41.jpg",
                link: "https://github.com/Ajayitachi/Netflix-Landing-Page.git",
              },
              {
                title: "2D Game ",
                category: "2d Game",
                image:
                  "https://th.bing.com/th/id/OIP.PTRZqEk9SzhjmhkKsC098QHaEK?w=289&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
                link: "https://github.com/Ajayitachi/2D-Game-.git",
              },
              {
                title: "AR",
                category: "AR",
                image:
                  "https://static.vecteezy.com/system/resources/previews/029/111/423/non_2x/immersive-vr-experience-exploring-virtual-reality-with-vr-glasses-on-color-full-background-created-with-generative-ai-free-photo.jpeg",
                link: "https://github.com/Ajayitachi/Virtual-Reality-And-Augmented-Reality.git",
              },
              {
                title: "VR",
                category: "VR",
                image:
                  "https://th.bing.com/th/id/OIP._bi8Yt0YOy6CqIo7wYiUxQHaEK?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
                link: "https://github.com/Ajayitachi/Virtual-Reality-And-Augmented-Reality.git",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
              >
                <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-white/60 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold mt-1 text-white">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-6">
              View All Projects
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-white/60 uppercase tracking-widest mb-2">
              Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Skills
            </h2>
          </div>

          <div className="bg-black/40 backdrop-blur-[15px] border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              {/* Left Image */}
              <div className="hidden md:block">
                <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&q=80"
                    alt="Design Work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Skills Columns */}
              <div className="md:col-span-1 space-y-12">
                {/* Technical Skills */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-white">
                    Game Design Skills
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Gameplay Mechanics",
                      "Level Design Basics",
                      "Player Experience Design",
                      "Rapid Prototyping",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span className="text-white/80">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design Skills */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-white">
                    Tools & Software
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Unity Engine",
                      "Figma",
                      "Canva",
                      "Premiere Pro",
                      "Miro",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span className="text-white/80">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* UI/UX & Design Skills */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-white">
                    UI/UX & Design
                  </h3>
                  <div className="space-y-4">
                    {[
                      "UI/UX Principles",
                      "Typography & Color Theory",
                      "Layout & Composition",
                      "Graphic Design Basics",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span className="text-white/80">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="hidden md:block">
                <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&q=80"
                    alt="Creative Work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-[15px] border border-white/10 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Check Out My Projects
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Explore my academic and personal projects focused on Game Design,
              UI/UX, and Unity development.
            </p>
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-white text-black hover:bg-white/90 px-10 py-6 text-base"
            >
              Projects
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-sm text-white/60 uppercase tracking-widest mb-2">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Contact
            </h2>
            <p className="text-white/70">
              I’m currently looking for internship or entry-level opportunities
              in Game Design. If you’re interested in my work or would like to
              collaborate, feel free to contact me.
            </p>
          </div>

          {/* Form Box */}
          <div className="bg-black/40 backdrop-blur-[15px] border border-white/10 rounded-3xl p-8 md:p-12">
            <form
              action="https://formspree.io/f/mlgreqkk"
              method="POST"
              className="space-y-6"
            >
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 py-6 text-base"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative py-8 px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold flex text-white">AJAY M</span>
          <p className="text-sm text-gray-400">
            © 2025 Ajay M. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { name: "Github", url: "https://github.com/Ajayitachi" },
              { name: "Mail", url: "#" },
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ajay-m-itachi07",
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url !== "#" ? "_blank" : undefined}
                rel={social.url !== "#" ? "noopener noreferrer" : undefined}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
