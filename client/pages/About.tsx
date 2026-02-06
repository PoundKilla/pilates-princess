import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Train, Car } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-7xl font-serif mb-12">О студии</h1>
              <p className="text-2xl font-serif text-primary leading-relaxed mb-8">
                Pilates Princess — это luxury-студия пилатеса для женщин, где каждая тренировка — это путь к гармонии тела и внутреннего состояния.
              </p>
              <p className="text-lg text-muted-foreground leading-loose">
                Мы создали пространство, где эстетика встречается с профессионализмом. Наши студии расположены в самом центре города и оборудованы по последнему слову техники для того, чтобы вы могли наслаждаться каждым движением.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="https://images.pexels.com/photos/18499504/pexels-photo-18499504.png"
                alt="Pilates Studio Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Contacts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-10 rounded-3xl border border-border/20"
            >
              <Phone className="text-primary mb-8" size={32} />
              <h3 className="text-xl font-serif mb-4 text-primary uppercase tracking-widest text-sm font-semibold">Контакты</h3>
              <p className="text-2xl font-medium">+7-923-135-17-11</p>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-10 rounded-3xl border border-border/20"
            >
              <Clock className="text-primary mb-8" size={32} />
              <h3 className="text-xl font-serif mb-4 text-primary uppercase tracking-widest text-sm font-semibold">Режим работы</h3>
              <p className="text-xl">Ежедневно</p>
              <p className="text-2xl font-medium">07:00 – 22:00</p>
            </motion.div>

            {/* Addresses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-10 rounded-3xl border border-border/20 lg:row-span-2"
            >
              <MapPin className="text-primary mb-8" size={32} />
              <h3 className="text-xl font-serif mb-4 text-primary uppercase tracking-widest text-sm font-semibold">Адреса</h3>
              <div className="space-y-8">
                <div>
                  <p className="font-semibold mb-2">ТЦ Европа</p>
                  <p className="text-muted-foreground">Красный проспект, 182, офис 422, 4 этаж</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">ДЦ Европа</p>
                  <p className="text-muted-foreground">Красный проспект, 182/1, офис 909, 1116, 9 и 11 этаж</p>
                </div>
                <a 
                  href="https://go.2gis.com/QiqGC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary border-b border-primary/30 hover:border-primary transition-all text-sm uppercase tracking-widest font-medium"
                >
                  Открыть в 2ГИС
                </a>
              </div>
            </motion.div>

            {/* Metro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-10 rounded-3xl border border-border/20 md:col-span-2 lg:col-span-1"
            >
              <Train className="text-primary mb-8" size={32} />
              <h3 className="text-xl font-serif mb-4 text-primary uppercase tracking-widest text-sm font-semibold">Метро</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span>Заельцовская</span>
                  <span className="text-muted-foreground text-sm">2 мин (200 м)</span>
                </li>
                <li className="flex justify-between items-center border-t border-border/20 pt-4">
                  <span>Гагаринская</span>
                  <span className="text-muted-foreground text-sm">6 мин (600 м)</span>
                </li>
              </ul>
            </motion.div>

            {/* Parking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-10 rounded-3xl border border-border/20"
            >
              <Car className="text-primary mb-8" size={32} />
              <h3 className="text-xl font-serif mb-4 text-primary uppercase tracking-widest text-sm font-semibold">Парковка</h3>
              <p className="text-2xl font-medium">12 бесплатных мест</p>
              <p className="text-sm text-muted-foreground mt-2">Для наших клиентов</p>
            </motion.div>
          </div>

          {/* Map Link Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 relative rounded-3xl overflow-hidden h-[400px] group cursor-pointer"
          >
            <a href="https://go.2gis.com/lVPw3" target="_blank" rel="noopener noreferrer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
              <img
                src="https://images.pexels.com/photos/18499504/pexels-photo-18499504.png"
                alt="View on Map"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
                <MapPin size={48} className="mb-4" />
                <h3 className="text-2xl font-serif uppercase tracking-widest">Посмотреть на карте</h3>
                <p className="mt-2 text-white/80 uppercase tracking-widest text-xs">Открыть 2ГИС</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
