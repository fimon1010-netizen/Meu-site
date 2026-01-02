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
import { useEffect, useState } from 'react';

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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Logo } from '@/components/logo';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-child-learning');
const methodImage = PlaceHolderImages.find((img) => img.id === 'method-image');
const authorImage = PlaceHolderImages.find((img) => img.id === 'author-photo');


export default function HomePage() {
  const [currentDate, setCurrentDate] = useState('');

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
        <p className="font-semibold">
          🔥 DESCONTO SÓ HOJE – {currentDate} 🔥
        </p>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tighter font-headline sm:text-5xl md:text-6xl">
              <span className="text-primary">🌟</span> Descubra o{' '}
              <span className="text-primary">MÉTODO ALEMÃO ADAPTADO</span>
            </h1>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight font-headline sm:text-3xl">
              Um caminho seguro para ajudar seu filho a FALAR e ESCREVER
            </h2>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground">
              com leveza, estrutura e respeito ao tempo que Deus preparou para ele 💙
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 mx-auto mt-10 max-w-5xl sm:flex-row sm:gap-6">
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
          <div className="relative mt-12">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={1200}
                height={600}
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
              <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">
                O caminho seguro para a comunicação
              </h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
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
              <p className="text-xl font-medium">
                ✨ Aqui o foco é desenvolver a comunicação, não forçar resultados.
              </p>
              <div className="flex justify-center mt-8">
                <Button asChild size="lg" className="h-auto px-8 py-4 text-lg">
                  <Link href="#planos">
                    <Download className="mr-2" />
                    Baixar PDF
                  </Link>
                </Button>
              </div>
            </div>
            <div className="p-4 border rounded-lg bg-card sm:p-8">
              <h3 className="mb-4 text-2xl font-bold text-center font-headline">📘 Recursos Principais</h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 p-4">
                    <Mic className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Estímulo da Fala por Sons</CardTitle>
                      <CardDescription>Atividades que associam som, imagem e movimento.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 p-4">
                    <PenTool className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Grafismo Fonético Guiado</CardTitle>
                      <CardDescription>Exercícios de traçados que preparam para a escrita.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 p-4">
                    <Eye className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Aprendizagem Visual</CardTitle>
                      <CardDescription>Sequência clara e previsível, ideal para TEA.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 p-4">
                    <Sparkles className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Personalização Inteligente</CardTitle>
                      <CardDescription>Conteúdo adaptável à evolução de cada criança.</CardDescription>
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
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">
                  🧠 O que é o Método Alemão Adaptado?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Inspirado em abordagens alemãs de desenvolvimento da linguagem, o método trabalha primeiro:
                </p>
                <ul className="grid grid-cols-2 gap-4 mt-4 text-lg">
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-primary"/>Sons</li>
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-primary"/>Movimentos</li>
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-primary"/>Traçados</li>
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-primary"/>Associação visual</li>
                  <li className="flex items-center col-span-2 gap-3"><Sparkles className="w-5 h-5 text-primary"/>Coordenação motora</li>
                </ul>
                <p className="pt-4 text-lg text-muted-foreground">
                  👉 Para <span className="font-semibold text-foreground">preparar o cérebro</span> da criança para <span className="font-semibold text-foreground">FALAR e ESCREVER</span>, antes de qualquer exigência de leitura.
                </p>
              </div>
              <div className="order-first md:order-last">
                {methodImage && (
                  <Image
                    src={methodImage.imageUrl}
                    alt={methodImage.description}
                    data-ai-hint={methodImage.imageHint}
                    width={600}
                    height={400}
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
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">💡 Por que muitas crianças travam?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Não é falta de capacidade. É a abordagem.</p>
          </div>
          <div className="grid max-w-4xl gap-8 mx-auto mt-12 md:grid-cols-2">
            <Card className="p-2 border-red-200 sm:p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-500">
                  ❌ Abordagem comum
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Pula etapas do desenvolvimento</p>
                <p>Exige leitura antes da hora</p>
                <p>Ambientes confusos e estimulantes demais</p>
              </CardContent>
            </Card>
            <Card className="p-2 border-green-200 sm:p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  💙 Nossa abordagem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Estrutura e previsibilidade</p>
                <p>Repetição calma e estímulo visual</p>
                <p>Segurança emocional para avançar sem pressão</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-lg text-center text-muted-foreground">Acreditamos que cada criança aprende melhor quando se sente segura.</p>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-white lg:py-20 dark:bg-card">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">
              🌱 Resultados que os pais observam:
            </h2>
            <div className="grid max-w-5xl gap-8 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6">
                <Heart className="w-10 h-10 mx-auto text-primary" />
                <h3 className="mt-4 text-lg font-semibold font-headline">Mais tentativas de fala</h3>
                <p className="mt-2 text-muted-foreground">Crianças se sentem mais confiantes para se expressar.</p>
              </div>
              <div className="p-6">
                 <Heart className="w-10 h-10 mx-auto text-primary" />
                <h3 className="mt-4 text-lg font-semibold font-headline">Sons mais claros e organizados</h3>
                <p className="mt-2 text-muted-foreground">A associação fonética melhora a articulação.</p>
              </div>
              <div className="p-6">
                 <Heart className="w-10 h-10 mx-auto text-primary" />
                <h3 className="mt-4 text-lg font-semibold font-headline">Interesse natural por letras e escrita</h3>
                <p className="mt-2 text-muted-foreground">A curiosidade pela escrita é despertada sem pressão.</p>
              </div>
              <div className="p-6">
                 <Heart className="w-10 h-10 mx-auto text-primary" />
                <h3 className="mt-4 text-lg font-semibold font-headline">Melhora na coordenação motora</h3>
                <p className="mt-2 text-muted-foreground">O controle do traçado se reflete em outras atividades.</p>
              </div>
               <div className="p-6 sm:col-span-2 lg:col-span-1">
                 <Heart className="w-10 h-10 mx-auto text-primary" />
                <h3 className="mt-4 text-lg font-semibold font-headline">Menos frustração e ansiedade</h3>
                <p className="mt-2 text-muted-foreground">Atividades adaptadas reduzem crises e ansiedade.</p>
              </div>
            </div>
             <p className="mt-8 text-xl font-medium text-center">
              💙 A comunicação floresce quando a criança é acolhida.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="planos" className="container py-12 text-center lg:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">
              Escolha o plano ideal para você
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comece com o essencial no Básico ou desbloqueie todo o potencial com o Premium.
            </p>
          </div>
          <div className="grid max-w-5xl gap-8 mx-auto mt-12 md:grid-cols-2">
            <Card className="flex flex-col text-left">
              <CardHeader className="flex-grow">
                <CardTitle className="font-headline">📘 Plano Básico</CardTitle>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">R$10</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription>O essencial para iniciar a alfabetização.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow gap-4">
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
                        <AlertDialogTitle className='text-center text-2xl font-bold text-green-600'>
                          🎉 OFERTA ESPECIAL SÓ HOJE! 🎉
                        </AlertDialogTitle>
                        <AlertDialogDescription className='text-center text-base'>
                          Leve o <strong className='font-bold text-primary'>Plano Premium</strong> com todos os benefícios por apenas <br />
                           <span className='text-3xl font-bold text-green-500'>R$19,90/mês</span>!
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className='flex-col gap-2 sm:flex-col sm:space-x-0'>
                        <Button asChild size='lg' className='h-auto py-3 text-lg animate-pulse'>
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
              <Badge className="absolute px-3 py-1 text-sm -top-4 left-1/2 -translate-x-1/2">Mais Popular</Badge>
              <CardHeader className="flex-grow">
                <CardTitle className="font-headline">🌟 Plano Premium</CardTitle>
                 <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">R$27,99</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription>Acesso completo e personalizado para acelerar os resultados.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow gap-4">
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
        
        {/* Author Section */}
        <section className="py-12 bg-white lg:py-20 dark:bg-card">
          <div className="container">
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
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">
                  Quem fez o MÉTODO ALEMÃO ADAPTADO?
                </h2>
                <p className="text-muted-foreground">
                  Este material foi montado pelo professor e terapeuta Thalyson Alves, que reuniu diversas pesquisas, estudos educacionais e observações práticas para encontrar a melhor forma de aprendizagem para crianças com TEA e TDAH.
                </p>
                <p className="text-muted-foreground">
                  O método foi cuidadosamente adaptado à realidade infantil, respeitando o ritmo, a sensibilidade e a forma única como cada criança aprende. Tudo foi pensado para tornar o aprendizado mais claro, acessível e leve, sem pressa, sem pressão e sem comparações.
                </p>
                <p className="text-muted-foreground">
                  Um conteúdo desenvolvido com propósito, organização e carinho — unindo conhecimento, estrutura e simplicidade para apoiar o desenvolvimento da leitura, da escrita e da fala. E acima de tudo levando um pouco de Jesus para as crianças.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 pt-12 mt-12 text-center border-t">
              <ShieldCheck className="w-16 h-16 text-green-600" />
              <h3 className="text-2xl font-bold font-headline">Garantia de 7 Dias</h3>
              <p className="max-w-2xl text-muted-foreground">
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
