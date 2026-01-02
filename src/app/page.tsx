'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  BrainCircuit,
  Check,
  ChevronRight,
  Clock,
  Heart,
  Home as HomeIcon,
  Mic,
  PenTool,
  Sparkles,
  Eye,
  Download,
  ShieldCheck,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Autoplay from "embla-carousel-autoplay"


import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Logo } from '@/components/logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/testimonials';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-child-learning');
const methodImage = PlaceHolderImages.find((img) => img.id === 'method-image');
const authorImage = PlaceHolderImages.find((img) => img.id === 'author-photo');


export default function HomePage() {
  const [currentDate, setCurrentDate] = useState('');
   const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  useEffect(() => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Discount Banner */}
      <div className="py-2 text-center bg-accent text-accent-foreground">
        <p className="font-semibold text-sm">
          🔥 DESCONTO SÓ HOJE – {currentDate} 🔥
        </p>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-extrabold tracking-tighter font-headline sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-primary">🌟</span> Descubra o{' '}
              <span className="text-primary">MÉTODO ALEMÃO ADAPTADO</span>
            </h1>
            <h2 className="mt-4 text-xl font-semibold tracking-tight font-headline sm:text-2xl md:text-3xl">
              Um caminho seguro para ajudar seu filho a FALAR e ESCREVER
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-sm text-muted-foreground md:text-base lg:text-lg">
              com leveza, estrutura e respeito ao tempo que Deus preparou para ele 💙
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 mx-auto mt-8 max-w-5xl sm:flex-row sm:gap-6 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Apenas 10 minutos por dia</span>
            </div>
            <div className="flex items-center gap-2">
              <HomeIcon className="w-5 h-5 text-primary" />
              <span>Direto de casa</span>
            </div>
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-primary" />
              <span>Respeitando o ritmo neurológico da criança</span>
            </div>
          </div>
          <div className="relative mt-10">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={1200}
                height={800}
                className="object-cover w-full rounded-lg"
              />
            )}
          </div>
        </section>

        {/* Indication Section */}
        <section className="container py-12">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <Badge variant="secondary" className="border-primary/50 text-primary">👶 Para crianças de 2 a 12 anos</Badge>
              <h2 className="text-2xl font-bold tracking-tighter font-headline sm:text-3xl">
                O caminho seguro para a comunicação
              </h2>
              <ul className="space-y-4 text-sm text-muted-foreground md:text-base">
                <li className="flex items-start">
                  <Check className="w-6 h-6 mt-1 mr-3 text-secondary-foreground shrink-0" />
                  <span>Mesmo que ainda <span className="font-semibold text-foreground">não fale claramente</span> ou <span className="font-semibold text-foreground">não reconheça letras</span></span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 mt-1 mr-3 text-secondary-foreground shrink-0" />
                  <span>Ideal para crianças com <span className="font-semibold text-foreground">TEA, TDAH ou atraso na linguagem</span></span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 mt-1 mr-3 text-secondary-foreground shrink-0" />
                  <span>Método visual, previsível e progressivo</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 mt-1 mr-3 text-secondary-foreground shrink-0" />
                  <span>Sem estímulos excessivos, sem cobrança</span>
                </li>
              </ul>
              <p className="text-base font-medium md:text-lg">
                ✨ Aqui o foco é desenvolver a comunicação, não forçar resultados.
              </p>
              <div className="flex justify-center mt-8">
                <Button asChild size="lg" className="h-auto px-8 py-4 text-base">
                  <Link href="#planos">
                    <Download className="mr-2" />
                    Baixar PDF
                  </Link>
                </Button>
              </div>
            </div>
            <div className="p-4 border rounded-lg bg-card sm:p-6">
              <h3 className="mb-4 text-lg font-bold text-center font-headline md:text-xl">📘 Recursos Principais</h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 p-3 sm:p-4">
                    <Mic className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <CardTitle className="text-base">Estímulo da Fala por Sons</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">Atividades que associam som, imagem e movimento.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 p-3 sm:p-4">
                    <PenTool className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <CardTitle className="text-base">Grafismo Fonético Guiado</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">Exercícios de traçados que preparam para a escrita.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 p-3 sm:p-4">
                    <Eye className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <CardTitle className="text-base">Aprendizagem Visual</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">Sequência clara e previsível, ideal para TEA.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 p-3 sm:p-4">
                    <Sparkles className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <CardTitle className="text-base">Personalização Inteligente</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">Conteúdo adaptável à evolução de cada criança.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>


        {/* What is the method Section */}
        <section className="py-12 bg-white lg:py-20 dark:bg-card">
          <div className="container">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="order-last md:order-first">
                <h2 className="text-2xl font-bold tracking-tighter font-headline sm:text-3xl">
                  🧠 O que é o Método Alemão Adaptado?
                </h2>
                <p className="mt-4 text-sm text-muted-foreground md:text-base">
                  Inspirado em abordagens alemãs de desenvolvimento da linguagem, o método trabalha primeiro:
                </p>
                <ul className="grid grid-cols-2 gap-4 mt-4 text-sm md:text-base">
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-primary"/>Sons</li>
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-primary"/>Movimentos</li>
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-primary"/>Traçados</li>
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-primary"/>Associação visual</li>
                  <li className="flex items-center col-span-2 gap-3"><Sparkles className="w-5 h-5 text-primary"/>Coordenação motora</li>
                </ul>
                <p className="pt-4 text-sm text-muted-foreground md:text-base">
                  👉 Para <span className="font-semibold text-foreground">preparar o cérebro</span> da criança para <span className="font-semibold text-foreground">FALAR e ESCREVER</span>, antes de qualquer exigência de leitura.
                </p>
              </div>
              <div className="order-first md:order-last">
                {methodImage && (
                  <Image
                    src={methodImage.imageUrl}
                    alt={methodImage.description}
                    data-ai-hint={methodImage.imageHint}
                    width={1200}
                    height={800}
                    className="object-cover w-full rounded-lg shadow-lg"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why kids struggle Section */}
        <section className="container py-12 lg:py-20">
           <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tighter font-headline sm:text-3xl">💡 Por que muitas crianças travam?</h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">Não é falta de capacidade. É a abordagem.</p>
          </div>
          <div className="grid max-w-4xl gap-8 mx-auto mt-12 md:grid-cols-2">
            <Card className="p-2 border-red-200 sm:p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-500 text-base md:text-lg">
                  ❌ Abordagem comum
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-xs md:text-sm">
                <p>Pula etapas do desenvolvimento</p>
                <p>Exige leitura antes da hora</p>
                <p>Ambientes confusos e estimulantes demais</p>
              </CardContent>
            </Card>
            <Card className="p-2 border-green-200 sm:p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600 text-base md:text-lg">
                  💙 Nossa abordagem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-xs md:text-sm">
                <p>Estrutura e previsibilidade</p>
                <p>Repetição calma e estímulo visual</p>
                <p>Segurança emocional para avançar sem pressão</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-sm text-center text-muted-foreground md:text-base">Acreditamos que cada criança aprende melhor quando se sente segura.</p>
        </section>

        {/* Pricing Section */}
        <section id="planos" className="container py-12 text-center lg:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter font-headline sm:text-3xl">
              Escolha o plano ideal para você
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Comece com o essencial no Básico ou desbloqueie todo o potencial com o Premium.
            </p>
          </div>
          <div className="grid max-w-5xl gap-8 mx-auto mt-12 md:grid-cols-2">
            <Card className="flex flex-col text-left">
              <CardHeader className="flex-grow">
                <CardTitle className="font-headline text-lg md:text-xl">📘 Plano Básico</CardTitle>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold md:text-3xl">R$10</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription>O essencial para iniciar a alfabetização.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow gap-4 text-xs md:text-sm">
                <ul className="space-y-3">
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-secondary-foreground" />Acesso ao PDF principal</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-secondary-foreground" />Reconhecimento de letras e sílabas</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-secondary-foreground" />Conteúdo cristão simples</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-secondary-foreground" />Rotina diária orientada</li>
                </ul>
                <div className="mt-auto">
                   <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="secondary" className="w-full">
                        Começar com o Básico
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className='text-center text-xl font-bold text-green-600 md:text-2xl'>
                          🎉 OFERTA ESPECIAL SÓ HOJE! 🎉
                        </AlertDialogTitle>
                        <AlertDialogDescription className='text-center text-sm md:text-base'>
                          Leve o <strong className='font-bold text-primary'>Plano Premium</strong> com todos os benefícios por apenas <br />
                           <span className='text-2xl font-bold text-green-500 md:text-3xl'>R$19,90/mês</span>!
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className='flex-col gap-2 sm:flex-col sm:space-x-0'>
                        <Button asChild size='lg' className='h-auto py-3 text-base md:text-lg animate-pulse'>
                          <Link href='/dashboard'>
                            <Sparkles className="mr-2" /> QUERO O PREMIUM AGORA!
                          </Link>
                        </Button>
                        <AlertDialogCancel asChild>
                           <Button variant="link" size="sm" className="text-muted-foreground">Não, obrigado. Prefiro o plano Básico.</Button>
                        </AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
            <Card className="relative flex flex-col text-left border-2 border-primary">
              <Badge className="absolute px-3 py-1 text-xs -top-4 left-1/2 -translate-x-1/2">Mais Popular</Badge>
              <CardHeader className="flex-grow">
                <CardTitle className="font-headline text-lg md:text-xl">🌟 Plano Premium</CardTitle>
                 <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold md:text-3xl">R$27,99</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription>Acesso completo e personalizado para acelerar os resultados.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow gap-4 text-xs md:text-sm">
                <ul className="space-y-3">
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-primary" /><strong>Tudo do Plano Básico, e mais:</strong></li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-secondary-foreground" />Acesso a todas as atividades</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-secondary-foreground" />Conteúdo cristão exclusivo</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-secondary-foreground" />Atividades adaptadas para crianças autistas</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-secondary-foreground" />Plano semanal de estudos</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-secondary-foreground" />Personalização de conteúdo</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-secondary-foreground" />Relatórios de progresso detalhados</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-secondary-foreground" />Acompanhamento individual</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-secondary-foreground" />Suporte prioritário</li>
                </ul>
                <div className="mt-auto">
                   <Button className="w-full" asChild>
                    <Link href='/dashboard'>
                      Escolher Premium <Sparkles className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-white lg:py-20 dark:bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-tighter font-headline sm:text-3xl">
                🌟 O Que Nossos Clientes Dizem
              </h2>
            </div>
            <Carousel
              plugins={[plugin.current]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto mt-12"
               onMouseEnter={plugin.current.stop}
               onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => {
                  const avatar = PlaceHolderImages.find(p => p.id === `testimonial-avatar-${index + 1}`);
                  return (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="flex flex-col h-full">
                          <CardContent className="flex-grow p-6">
                            <p className="text-muted-foreground">
                              “{testimonial.text}”
                            </p>
                          </CardContent>
                          <CardHeader className="flex flex-row items-center gap-4 pt-0">
                            {avatar && (
                              <Avatar>
                                <AvatarImage src={avatar.imageUrl} alt={testimonial.author} />
                                <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                            )}
                            <div>
                              <CardTitle className="text-base">{testimonial.author}</CardTitle>
                              <CardDescription className="text-xs sm:text-sm">{testimonial.location} • {testimonial.role}</CardDescription>
                            </div>
                          </CardHeader>
                        </Card>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        
        {/* Author Section */}
        <section className="container py-12 lg:py-20">
          <div className="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex justify-center lg:col-span-1">
              {authorImage && (
                <Image
                  src={authorImage.imageUrl}
                  alt={authorImage.description}
                  data-ai-hint={authorImage.imageHint}
                  width={300}
                  height={300}
                  className="object-cover rounded-full shadow-lg aspect-square"
                />
              )}
            </div>
            <div className="space-y-4 lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tighter font-headline sm:text-3xl">
                Quem fez o MÉTODO ALEMÃO ADAPTADO?
              </h2>
              <p className="text-muted-foreground text-xs md:text-sm">
                Este material foi montado pelo professor e terapeuta Thalyson Alves, que reuniu diversas pesquisas, estudos educacionais e observações práticas para encontrar a melhor forma de aprendizagem para crianças com TEA e TDAH.
              </p>
              <p className="text-muted-foreground text-xs md:text-sm">
                O método foi cuidadosamente adaptado à realidade infantil, respeitando o ritmo, a sensibilidade e a forma única como cada criança aprende. Tudo foi pensado para tornar o aprendizado mais claro, acessível e leve, sem pressa, sem pressão e sem comparações.
              </p>
              <p className="text-muted-foreground text-xs md:text-sm">
                Um conteúdo desenvolvido com propósito, organização e carinho — unindo conhecimento, estrutura e simplicidade para apoiar o desenvolvimento da leitura, da escrita e da fala. E acima de tudo levando um pouco de Jesus para as crianças.
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 bg-white lg:py-20 dark:bg-card">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tighter font-headline sm:text-3xl">
                Perguntas Frequentes
              </h2>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                Tire suas dúvidas mais comuns sobre o método.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full mt-12">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-headline">Como recebo o acesso ao material?</AccordionTrigger>
                <AccordionContent>
                  Assim que o pagamento for confirmado, você receberá um e-mail com as instruções e o link para acessar todo o material. Se você escolheu o Plano Premium, o acesso à plataforma online será liberado imediatamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-headline">Para qual idade é recomendado?</AccordionTrigger>
                <AccordionContent>
                  O método é projetado para crianças de 2 a 12 anos. Ele é flexível e pode ser adaptado para diferentes estágios de desenvolvimento, desde o estímulo inicial da fala até a consolidação da leitura e escrita.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-headline">Funciona para crianças com TEA ou TDAH?</AccordionTrigger>
                <AccordionContent>
                  Sim! O método foi especialmente pensado para elas. A abordagem visual, estruturada e sem excesso de estímulos cria um ambiente de aprendizado seguro e eficaz para crianças com Transtorno do Espectro Autista (TEA) e Transtorno de Déficit de Atenção e Hiperatividade (TDAH).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-headline">Preciso ter algum conhecimento prévio?</AccordionTrigger>
                <AccordionContent>
                  Não precisa. O material é autoexplicativo e foi feito tanto para pais, mães e cuidadores quanto para profissionais da educação. O Plano Premium oferece um plano de estudos semanal para guiar você passo a passo.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-5">
                <AccordionTrigger className="font-headline">E se eu não gostar do método?</AccordionTrigger>
                <AccordionContent>
                  Nós oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta nos enviar um e-mail e devolveremos 100% do seu investimento, sem perguntas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-12 lg:py-20">
            <div className="container">
                <div className="flex flex-col items-center gap-4 text-center">
                    <ShieldCheck className="w-16 h-16 text-green-600" />
                    <h3 className="text-2xl font-bold font-headline">Garantia de 7 Dias</h3>
                    <p className="max-w-2xl text-sm text-muted-foreground">
                        Você tem 7 dias para experimentar o método. Se não estiver satisfeito, devolvemos seu dinheiro, sem perguntas.
                    </p>
                </div>
            </div>
        </section>
      </main>
      <footer className="py-6 border-t bg-card">
        <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6" />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
