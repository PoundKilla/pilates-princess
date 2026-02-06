import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = {
  personal: [
    {
      title: "Персональная тренировка на реформере",
      price: "2 200 ₽",
      description:
        "Индивидуальная программа, идеально подходящая для новичков и опытных спортсменов, беременных, а также для восстановления после травм.",
      details: [
        "Укрепление всего тела: Работа над глубокими мышцами кора.",
        "Идеальная осанка: Коррекция позвоночника, снятие напряжения.",
        "Эффективное похудение: Тонизирование мышц и сжигание калорий.",
        "Снижение боли: Уменьшение дискомфорта в суставах.",
        "Гармония тела и духа: Фокус на дыхании и концентрации.",
      ],
    },
    {
      title: "Классический пилатес с малым оборудованием",
      price: "2 000 ₽",
      description:
        "Программа, разработанная специально для Ваших целей – укрепление кора, улучшение осанки, коррекция или реабилитация.",
      details: [
        "Глубокая проработка мышц: Активация стабилизаторов без ударной нагрузки.",
        "Улучшение гибкости: Малое оборудование снимает напряжение.",
        "Использование оборудования: Мячи, кольца и ленты для эффективности.",
      ],
    },
  ],
  group: [
    {
      title: "Классический пилатес с малым оборудованием в группе",
      price: "1 000 ₽",
      description:
        "Дыхание, центрирование, контроль, точность, концентрация и плавность движений.",
      details: [
        "Эффективное оборудование: изотонические кольца, ленты, мячи и роллы.",
        "Гармоничное развитие: укрепление глубоких мышц и координация.",
        "Энергия группы: мотивация и позитивная атмосфера.",
      ],
    },
    {
      title: "Пилатес на реформере в группе до 4х человек",
      price: "1 500 ₽",
      description:
        "Уникальный опыт работы с системой пружин и скользящей платформы реформера.",
      details: [
        "Глубокое укрепление кора: пресса, спины и тазового дна.",
        "Вытягивание позвоночника: коррекция дисбалансов.",
        "Контролируемая нагрузка: снятие напряжения.",
      ],
    },
    {
      title: "Групповая тренировка BARRE",
      price: "1 000 ₽",
      description:
        "Комбинация балетных и силовых упражнений, идеальные для женщин.",
      details: [
        "Бёдра и ягодицы: плие и подъёмы ног.",
        "Пресс и спина: наклоны и повороты.",
        "Интенсивность: 55 минут — около 400 калорий.",
      ],
    },
  ],
  subscriptions: [
    {
      title: "Абонемент на 8 персональных занятий на реформере",
      price: "16 000 ₽",
    },
    {
      title: "Абонемент на 12 персональных занятий на реформере",
      price: "23 400 ₽",
    },
    { title: "Абонемент на 8 занятий BARRE", price: "7 000 ₽" },
    {
      title: "Абонемент на 8 персональных занятий по классическому пилатесу",
      price: "14 500 ₽",
    },
    {
      title: "Абонемент на 12 персональных занятий по классическому пилатесу",
      price: "20 400 ₽",
    },
    {
      title: "Абонемент на 8 занятий в группу по классическому пилатесу",
      price: "7 000 ₽",
    },
    {
      title: "Абонемент на 12 занятий в группу по классическому пилатесу",
      price: "10 000 ₽",
    },
  ],
};

const Services = () => {
  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <h1 className="text-4xl md:text-7xl font-serif mb-8">
              Услуги и цены
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto uppercase tracking-widest">
              Выберите идеальный формат тренировок для вашего тела
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-24">
            {/* PERSONAL */}
            <section>
              <h2 className="text-sm uppercase tracking-[0.4em] text-primary font-semibold mb-12 flex items-center gap-4">
                <span className="w-12 h-px bg-primary" />
                Персональные тренировки
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {services.personal.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card p-10 rounded-3xl border border-border/20 shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-serif max-w-[70%]">
                        {item.title}
                      </h3>
                      <span className="text-xl font-medium text-primary">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {item.description}
                    </p>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="details" className="border-none">
                        <AccordionTrigger className="text-sm uppercase tracking-widest py-2 hover:no-underline text-primary">
                          Что вас ждет
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <ul className="space-y-3">
                            {item.details.map((detail, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-foreground/80"
                              >
                                <span className="text-primary mt-1.5">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Button
                      asChild
                      className="w-full mt-10 rounded-full py-6 uppercase tracking-widest text-xs"
                    >
                      <Link to="/booking">Записаться</Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* GROUP */}
            <section>
              <h2 className="text-sm uppercase tracking-[0.4em] text-primary font-semibold mb-12 flex items-center gap-4">
                <span className="w-12 h-px bg-primary" />
                Групповые тренировки
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {services.group.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl border border-border/10 shadow-sm flex flex-col"
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                      <span className="text-lg font-medium text-primary">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow">
                      {item.description}
                    </p>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="details" className="border-none">
                        <AccordionTrigger className="text-xs uppercase tracking-widest py-2 hover:no-underline text-primary">
                          Подробнее
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                          <ul className="space-y-2 text-sm text-foreground/70">
                            {item.details.map((detail, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-primary">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full mt-8 rounded-full py-4 uppercase tracking-widest text-[10px] border-primary/30 text-primary"
                    >
                      <Link to="/booking">Записаться</Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* SUBSCRIPTIONS */}
            <section className="bg-card -mx-6 px-6 py-20 md:px-12 md:-mx-12 rounded-3xl">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif mb-12 text-center text-primary">
                  Абонементы
                </h2>
                <div className="space-y-4">
                  {services.subscriptions.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row justify-between items-center py-6 px-8 bg-background rounded-2xl border border-border/20 group hover:border-primary/50 transition-colors"
                    >
                      <span className="text-lg font-serif mb-2 md:mb-0 text-center md:text-left">
                        {item.title}
                      </span>
                      <div className="flex items-center gap-6">
                        <span className="text-xl font-medium">
                          {item.price}
                        </span>
                        <Button
                          asChild
                          size="sm"
                          variant="ghost"
                          className="text-primary hover:text-primary/80 uppercase tracking-widest text-xs"
                        >
                          <Link to="/booking">Купить</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
