import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Анна С.",
    date: "15 мая 2024",
    text: "Прекрасная студия! Очень уютная атмосфера и профессиональные тренеры. Занимаюсь на реформере уже месяц, чувствую себя намного лучше, спина перестала болеть.",
    rating: 5,
  },
  {
    name: "Екатерина М.",
    date: "2 июня 2024",
    text: "Лучшее место для пилатеса в Новосибирске. Оборудование новое, всё очень чисто и красиво. Тренер уделяет внимание каждой детали, что очень важно для правильной техники.",
    rating: 5,
  },
  {
    name: "Ольга В.",
    date: "10 июня 2024",
    text: "Посещаю групповые занятия BARRE. Это просто пушка! Энергия зашкаливает, а результат виден уже через пару недель. Очень рекомендую!",
    rating: 5,
  },
  {
    name: "Марина П.",
    date: "20 июня 2024",
    text: "Студия Pilates Princess — это любовь с первого взгляда. Всё продумано до мелочей, от дизайна до качества тренировок. Огромное спасибо за заботу о нашем здоровье.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-7xl font-serif mb-8">Отзывы</h1>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={24} />
                ))}
              </div>
              <p className="text-xl font-medium text-foreground">5.0 на основе 53 отзывов</p>
              <p className="text-muted-foreground uppercase tracking-widest text-sm">Мы ценим ваше доверие</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-10 rounded-3xl border border-border/20 relative overflow-hidden"
              >
                <Quote className="absolute top-8 right-8 text-primary/10" size={120} />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-primary fill-primary" size={16} />
                    ))}
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-8 italic">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-serif text-xl">{review.name}</span>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-muted-foreground mb-8">Оставьте свой отзыв о нашей работе</p>
            <button className="bg-primary text-primary-foreground px-10 py-4 rounded-full uppercase tracking-widest text-xs hover:brightness-110 transition-all shadow-lg">
              Написать отзыв
            </button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
