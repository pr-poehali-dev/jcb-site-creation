import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const equipmentModels = [
    {
      id: 1,
      name: "JCB 3CX Pro",
      description: "На джойстиках, сборка Индия",
      price: "от 4 500 000 ₽",
      image: "/img/dde388ce-824d-4f2a-a788-679773b6d1a4.jpg",
      available: false,
      features: ["Джойстиковое управление", "Индийская сборка", "Современная кабина"]
    },
    {
      id: 2,
      name: "JCB 3CX SM",
      description: "Сборка Англия",
      price: "от 5 200 000 ₽",
      image: "/img/dde388ce-824d-4f2a-a788-679773b6d1a4.jpg",
      available: false,
      features: ["Английская сборка", "Премиальное качество", "Увеличенный ресурс"]
    },
    {
      id: 3,
      name: "JCB 3CX Plus",
      description: "Сборка Индия, на рычагах",
      price: "от 4 200 000 ₽",
      image: "/img/9245c832-1421-41f8-83ef-5355c249b9c1.jpg",
      available: true,
      features: ["Рычажное управление", "В наличии", "Наличный расчет"]
    },
    {
      id: 4,
      name: "JCB 4CX",
      description: "Мощный экскаватор-погрузчик",
      price: "от 5 800 000 ₽",
      image: "/img/61d1762d-7a7a-4ec6-924e-dd81ef92aaa3.jpg",
      available: false,
      features: ["Увеличенная мощность", "Тяжелые работы", "Высокая производительность"]
    }
  ];

  const menuItems = [
    "Главная", "Каталог спецтехники", "Наличие", "О компании", "Контакты", "Сервисный центр", "Условия покупки"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-primary px-4 py-2 rounded font-roboto-condensed font-bold text-primary-foreground text-xl">
                JCB
              </div>
              <div>
                <h1 className="font-roboto-condensed text-2xl font-bold text-secondary">
                  СПЕЦТЕХНИКА
                </h1>
                <p className="text-sm text-muted-foreground">Официальный дилер</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:89923377477" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
                <span className="font-semibold">8 (992) 337-74-77</span>
              </a>
              <Button variant="outline">Заказать звонок</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3 overflow-x-auto">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="whitespace-nowrap text-sm font-medium hover:text-primary transition-colors py-2"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.6)), url('/img/533c4a3c-0c63-422d-af09-4de434152033.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-roboto-condensed text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            ТЕХНИКА JCB
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Экскаваторы-погрузчики мирового класса. Наличный расчет, кредит, лизинг. 
            Профессиональный сервис и гарантия качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="Truck" className="mr-2" size={20} />
              Каталог техники
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
              <Icon name="Phone" className="mr-2" size={20} />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="font-roboto-condensed text-xl font-bold mb-2">Гибкие условия</h3>
              <p className="text-muted-foreground">Наличный расчет, кредит или лизинг на выгодных условиях</p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="font-roboto-condensed text-xl font-bold mb-2">Сервисный центр</h3>
              <p className="text-muted-foreground">Профессиональное обслуживание и ремонт техники JCB</p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="font-roboto-condensed text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">Официальная гарантия и поддержка производителя</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Catalog */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-roboto-condensed text-4xl font-bold mb-4">Каталог спецтехники</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящую модель экскаватора-погрузчика</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentModels.map((model) => (
              <Card key={model.id} className="hover:shadow-lg transition-shadow animate-fade-in">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-roboto-condensed text-lg">{model.name}</CardTitle>
                    {model.available && (
                      <Badge className="bg-green-100 text-green-800">В наличии</Badge>
                    )}
                  </div>
                  <CardDescription>{model.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="font-bold text-lg text-primary">{model.price}</p>
                    <div className="space-y-1">
                      {model.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <Icon name="Check" size={16} className="text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Separator />
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">Подробнее</Button>
                      <Button size="sm" variant="outline">
                        <Icon name="Phone" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-roboto-condensed text-4xl font-bold mb-6">
                Готовы купить спецтехнику JCB?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Свяжитесь с нами для получения персонального предложения. 
                Поможем выбрать подходящую модель и оформить сделку на выгодных условиях.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Телефон для заявок</p>
                    <a href="tel:89923377477" className="text-primary font-bold text-lg">
                      8 (992) 337-74-77
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="opacity-90">Пн-Пт: 9:00-18:00, Сб: 9:00-15:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="font-roboto-condensed text-2xl font-bold mb-6">Заявка на консультацию</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full px-4 py-3 rounded bg-white/20 placeholder-white/70 text-white border border-white/30 focus:border-primary focus:outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full px-4 py-3 rounded bg-white/20 placeholder-white/70 text-white border border-white/30 focus:border-primary focus:outline-none"
                />
                <textarea 
                  placeholder="Интересующая модель или вопрос" 
                  rows={3}
                  className="w-full px-4 py-3 rounded bg-white/20 placeholder-white/70 text-white border border-white/30 focus:border-primary focus:outline-none resize-none"
                ></textarea>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-primary px-3 py-1 rounded font-roboto-condensed font-bold text-primary-foreground">
                  JCB
                </div>
                <span className="font-roboto-condensed font-bold">СПЕЦТЕХНИКА</span>
              </div>
              <p className="text-gray-400">
                Официальный дилер спецтехники JCB. Продажа экскаваторов-погрузчиков с гарантией качества.
              </p>
            </div>
            <div>
              <h4 className="font-roboto-condensed font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>Телефон: <a href="tel:89923377477" className="text-primary">8 (992) 337-74-77</a></p>
                <p>Режим работы: Пн-Пт 9:00-18:00</p>
              </div>
            </div>
            <div>
              <h4 className="font-roboto-condensed font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Продажа спецтехники</li>
                <li>Кредит и лизинг</li>
                <li>Сервисное обслуживание</li>
                <li>Запчасти</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 JCB Спецтехника. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;