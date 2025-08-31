import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TypedText = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['AI/ML Student', 'Machine Learning Enthusiast', 'Data Science Learner', 'Future AI Engineer'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return <span className="typing-text">{text}<span className="cursor">|</span></span>;
};

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.3)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="particles-canvas" />
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Rishita Prajapati</span>
          </h1>
          <div className="hero-subtitle">
            <TypedText />
          </div>
          <p className="hero-description">
            Passionate AI/ML student specializing in artificial intelligence and machine learning, 
            building the foundation for innovative solutions in the field of AI.
          </p>
          <div className="hero-buttons">
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            <motion.a 
              href="Rishita Prajapati_Resume.pdf"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download"></i> Resume
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="ai-brain">
            <motion.div 
              className="brain-core"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 0 50px rgba(99, 102, 241, 0.3)',
                  '0 0 80px rgba(99, 102, 241, 0.6)',
                  '0 0 50px rgba(99, 102, 241, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="neural-network">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`node node-${i + 1}`}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;