import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";

const heroImages = [
  "https://images.pexels.com/photos/18499504/pexels-photo-18499504.png",
  "https://images.pexels.com/photos/25596680/pexels-photo-25596680.jpeg",
  "https://images.pexels.com/photos/18499504/pexels-photo-18499504.png", // Reuse or find more
];

const benefits = [
  {
    title: "Индивидуальный подход",
    description: "Программы, созданные специально для вас.",
  },
  {
    title: "Малые группы",
    description: "До 4 человек для максимального внимания тренера.",
  },
  {
    title: "Сертифицированные тренеры",
    description: "Профессионалы с международным опытом.",
  },
  {
    title: "Премиум оборудование",
    description: "Современные реформеры для лучших результатов.",
  },
  {
    title: "Безопасность",
    description: "Подходит для новичков, беременных и восстановления.",
  },
  {
    title: "Эстетичная атмосфера",
    description: "Пространство красоты и женской энергии.",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <Layout>
      {/* Module 1: Hero Slideshow */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img
              src={heroImages[currentSlide]}
              alt="Pilates Studio"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl md:text-7xl font-serif mb-6 leading-tight max-w-5xl"
          >
            Pilates Princess — студия пилатеса на реформере в Новосибирске
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-2xl font-light tracking-widest mb-12"
          >
            Искусство движения. Сила. Грация. Гармония.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button
              asChild
              className="bg-white text-black hover:bg-white/90 rounded-full px-10 py-7 text-sm uppercase tracking-widest"
            >
              <Link to="/booking">Записаться на тренировку</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-sm uppercase tracking-widest"
            >
              <Link to="/services">Посмотреть услуги</Link>
            </Button>
          </motion.div>
        </div>

        {/* Ken Burns hint: The scale animation in motion.div handles this */}
      </section>

      {/* Module 2: Brand Story */}
      <section className="py-24 px-6 md:py-40 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-8 font-semibold">Наша философия</h2>
            <p className="text-2xl md:text-4xl font-serif leading-relaxed text-foreground/90">
              Pilates Princess — это премиальное пространство для женщин, где тренировки становятся эстетическим ритуалом.
            </p>
            <div className="h-px w-24 bg-primary/30 mx-auto my-12" />
            <p className="text-lg text-muted-foreground leading-loose">
              Мы помогаем создать сильное, гибкое и здоровое тело в атмосфере заботы, комфорта и красоты.
              Каждая программа строится индивидуально, с учетом целей, уровня подготовки и особенностей тела.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Module 3: Premium Benefits */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-20">Преимущества студии</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-background p-10 rounded-2xl border border-border/30 hover:shadow-xl transition-all duration-500"
              >
                <h3 className="text-xl font-serif mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Module 5: Transformation Block */}
      <section className="py-24 px-6 md:py-40 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-12">Ваш результат</h2>
            <ul className="space-y-8">
              {[
                "Красивая осанка",
                "Подтянутое тело",
                "Гибкость и сила",
                "Легкость движений",
                "Внутреннее спокойствие",
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-6">
                  <span className="w-12 h-px bg-primary" />
                  <span className="text-xl md:text-2xl font-light text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/25596680/pexels-photo-25596680.jpeg"
              alt="Transformation"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-primary/10 backdrop-blur-xl p-12 rounded-3xl hidden md:block border border-white/20">
              <p className="text-primary font-serif italic text-2xl">«Тело, в котором комфортно жить»</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Module 6: Social Proof */}
      <section className="py-24 bg-card px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-primary fill-primary" size={24} />
            ))}
          </div>
          <h2 className="text-3xl font-serif mb-4">⭐ 5.0 / 53 отзыва</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm mb-16">Наши клиенты о нас</p>
          
          <div className="relative overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-background p-12 rounded-3xl italic text-lg leading-relaxed text-foreground/70">
                    "Это лучшее место для пилатеса в городе. Атмосфера просто невероятная, а внимание тренера позволяет чувствовать себя в полной безопасности и прогрессировать с каждым занятием."
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Module 7: Emotional CTA */}
      <section className="py-32 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif mb-12">
            Начните путь к телу, в котором вам комфортно жить
          </h2>
          <Button
            asChild
            className="bg-white text-primary hover:bg-white/90 rounded-full px-12 py-8 text-lg uppercase tracking-widest shadow-2xl"
          >
            <Link to="/booking">Записаться на тренировку</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
