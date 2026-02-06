import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send } from "lucide-react";

const formSchema = z.object({
  service: z.string().min(1, "Пожалуйста, выберите услугу"),
  date: z.string().min(1, "Выберите дату"),
  time: z.string().min(1, "Выберите время"),
  name: z.string().min(2, "Имя должно быть не менее 2 символов"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  email: z.string().email("Введите корректный email").optional().or(z.literal("")),
  comment: z.string().optional(),
});

const services = [
  "Персональная тренировка на реформере",
  "Классический пилатес персонально",
  "Групповой пилатес с малым оборудованием",
  "Группа на реформере (до 4х чел)",
  "BARRE в группе",
];

const Booking = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "",
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
      comment: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Онлайн запись</h1>
            <p className="text-muted-foreground uppercase tracking-widest text-sm">
              Заполните форму, и мы подберем удобное время
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 bg-card p-8 md:p-12 rounded-3xl border border-border/20 shadow-sm"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs font-semibold">Услуга</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background rounded-xl py-6">
                              <SelectValue placeholder="Выберите тип тренировки" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-xl">
                            {services.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-xs font-semibold">Дата</FormLabel>
                          <FormControl>
                            <Input type="date" className="bg-background rounded-xl py-6" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-xs font-semibold">Время</FormLabel>
                          <FormControl>
                            <Input type="time" className="bg-background rounded-xl py-6" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-xs font-semibold">Ваше имя</FormLabel>
                          <FormControl>
                            <Input placeholder="Имя" className="bg-background rounded-xl py-6" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-xs font-semibold">Телефон</FormLabel>
                          <FormControl>
                            <Input placeholder="+7 (___) ___-__-__" className="bg-background rounded-xl py-6" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs font-semibold">Комментарий</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Ваши пожелания или особенности, о которых нам стоит знать" 
                            className="bg-background rounded-xl min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full rounded-full py-8 uppercase tracking-widest text-sm shadow-xl hover:shadow-primary/20 transition-all">
                    Отправить заявку
                  </Button>
                </form>
              </Form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <h3 className="font-serif text-xl mb-6">Быстрая связь</h3>
                <p className="text-sm text-muted-foreground mb-8">
                  Если у вас остались вопросы, напишите нам в мессенджеры — мы ответим в течение 15 минут.
                </p>
                <div className="space-y-4">
                  <Button asChild variant="outline" className="w-full rounded-xl py-6 border-primary/20 text-primary hover:bg-primary/10 justify-start gap-4">
                    <a href="https://wa.me/79231351711" target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={20} />
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full rounded-xl py-6 border-primary/20 text-primary hover:bg-primary/10 justify-start gap-4">
                    <a href="https://t.me/+79231351711" target="_blank" rel="noopener noreferrer">
                      <Send size={20} />
                      Telegram
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-card p-8 rounded-3xl border border-border/20">
                <h3 className="font-serif text-xl mb-4">Наш адрес</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Новосибирск, Красный проспект, 182 (ТЦ Европа)
                </p>
                <p className="text-sm font-semibold">
                  07:00 – 22:00 ежедневно
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
