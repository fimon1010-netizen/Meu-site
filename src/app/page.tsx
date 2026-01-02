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
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Logo } from '@/components/logo';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-child-learning');
const methodImage = PlaceHolderImages.find((img) => img.id === 'method-image');

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container z-40 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between h-20 py-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-8 h-8" />
            <span className="text-lg font-bold font-headline">Fala & Traça</span>
          </Link>
          <Link href="/dashboard">
            <Button>
              Começar Agora <ChevronRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tighter font-headline sm:text-5xl md:text-6xl">
              <span className="text-accent">🌟</span> Descubra o{' '}
              <span className="text-primary">MÉTODO ALEMÃO ADAPTADO</span>
            </h1>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight font-headline sm:text-3xl">
              que ajuda crianças a <span className="underline">FALAR e ESCREVER</span> com mais clareza,
            </h2>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground">
              de forma leve, estruturada e sem pressão 💙
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
              <span>Respeitando o ritmo neurológico</span>
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
                className="object-cover w-full rounded-lg shadow-2xl aspect-video"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
          </div>
        </section>

        {/* Indication Section */}
        <section className="container py-12">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <Badge variant="secondary">Para crianças de 2 a 12 anos</Badge>
              <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">
                O caminho seguro para a comunicação
              </h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start">
                  <Check className="w-6 h-6 mt-1 mr-3 text-green-500 shrink-0" />
                  <span>Mesmo que ainda <span className="font-semibold text-foreground">não fale claramente</span> ou <span className="font-semibold text-foreground">não reconheça letras</span></span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 mt-1 mr-3 text-green-500 shrink-0" />
                  <span>Ideal para crianças com <span className="font-semibold text-foreground">TEA, TDAH ou atraso na linguagem</span></span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 mt-1 mr-3 text-green-500 shrink-0" />
                  <span>Método visual, previsível e progressivo</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 mt-1 mr-3 text-green-500 shrink-0" />
                  <span>Sem estímulos excessivos, sem cobrança</span>
                </li>
              </ul>
              <p className="text-xl font-medium">
                ✨ Aqui o foco é <span className="text-primary">desenvolver a comunicação</span>, não forçar resultados.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-card sm:p-8">
              <h3 className="mb-4 text-2xl font-bold text-center font-headline">Recursos Principais</h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Mic className="w-8 h-8 text-accent shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Associação de Sons</CardTitle>
                      <CardDescription>Atividades interativas de som, imagem e movimento.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <PenTool className="w-8 h-8 text-accent shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Traçado Guiado</CardTitle>
                      <CardDescription>Exercícios progressivos para desenvolver a escrita.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Eye className="w-8 h-8 text-accent shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Aprendizagem Visual</CardTitle>
                      <CardDescription>Reforce as conexões entre fala, som e formas escritas.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Sparkles className="w-8 h-8 text-accent shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Personalização com IA</CardTitle>
                      <CardDescription>Conteúdo adaptado às necessidades do seu filho.</CardDescription>
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
                  Inspirado em abordagens alemãs de desenvolvimento da linguagem, o método foca primeiro em:
                </p>
                <ul className="grid grid-cols-2 gap-4 mt-4 text-lg">
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-accent"/>Sons</li>
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-accent"/>Movimentos</li>
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-accent"/>Traçados</li>
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-accent"/>Associação</li>
                  <li className="flex items-center col-span-2 gap-3"><Sparkles className="w-5 h-5 text-accent"/>Coordenação motora</li>
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
                <p>Ambientes confusos (ruim para TEA)</p>
              </CardContent>
            </Card>
            <Card className="p-2 border-green-200 sm:p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  💙 Nossa abordagem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Estrutura e Previsibilidade</p>
                <p>Repetição calma e Estímulo visual</p>
                <p>Segurança para avançar sem pressão</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-lg text-center text-muted-foreground">E é exatamente isso que a nossa plataforma oferece.</p>
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
                <h3 className="mt-4 text-lg font-semibold font-headline">Sons mais claros</h3>
                <p className="mt-2 text-muted-foreground">A associação fonética melhora a articulação.</p>
              </div>
              <div className="p-6">
                 <Heart className="w-10 h-10 mx-auto text-primary" />
                <h3 className="mt-4 text-lg font-semibold font-headline">Interesse por letras</h3>
                <p className="mt-2 text-muted-foreground">A curiosidade natural pela escrita é despertada.</p>
              </div>
              <div className="p-6">
                 <Heart className="w-10 h-10 mx-auto text-primary" />
                <h3 className="mt-4 text-lg font-semibold font-headline">Melhora na coordenação</h3>
                <p className="mt-2 text-muted-foreground">O controle do traçado se reflete em outras atividades.</p>
              </div>
              <div className="p-6 sm:col-span-2 lg:col-span-1">
                 <Heart className="w-10 h-10 mx-auto text-primary" />
                <h3 className="mt-4 text-lg font-semibold font-headline">Menos frustração</h3>
                <p className="mt-2 text-muted-foreground">Atividades adaptadas reduzem crises e ansiedade.</p>
              </div>
            </div>
             <p className="mt-8 text-xl font-medium text-center">
              💙 A comunicação flui quando a criança se sente segura.
            </p>
          </div>
        </section>
        
        {/* For Whom Section */}
        <section className="container py-12 text-center lg:py-24">
           <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">
              👨‍👩‍👧 Para quem é esta plataforma?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="default" className="text-base">Crianças com TEA</Badge>
              <Badge variant="default" className="text-base">Atraso na fala</Badge>
              <Badge variant="default" className="text-base">Pais que querem ajudar</Badge>
              <Badge variant="default" className="text-base">Educadores e Terapeutas</Badge>
            </div>
            <div className='mt-12'>
              <Link href="/dashboard">
                <Button size="lg" className="h-auto px-6 py-4 text-lg">
                  Quero Ajudar Meu Filho a se Comunicar
                  <ChevronRight className="ml-2" />
                </Button>
              </Link>
            </div>
           </div>
        </section>

      </main>
      <footer className="py-6 border-t bg-card">
        <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6" />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Fala & Traça. Todos os direitos reservados.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            Feito com 💙 para um desenvolvimento seguro.
          </div>
        </div>
      </footer>
    </div>
  );
}

    