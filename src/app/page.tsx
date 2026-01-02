import Image from 'next/image';
import Link from 'next/link';
import {
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Heart,
  Home as HomeIcon,
  Mic,
  PenTool,
  Puzzle,
  Sparkles,
  Users,
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
const featureSoundImage = PlaceHolderImages.find((img) => img.id === 'feature-sound');
const featureTracingImage = PlaceHolderImages.find((img) => img.id === 'feature-tracing');
const featureVisualImage = PlaceHolderImages.find((img) => img.id === 'feature-visual');
const featureProgressImage = PlaceHolderImages.find((img) => img.id === 'feature-progress');
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
        <section className="container py-12 text-center lg:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tighter font-headline sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-accent">🌟</span> Descubra o{' '}
              <span className="text-primary">MÉTODO ALEMÃO ADAPTADO</span>
            </h1>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight font-headline sm:text-3xl md:text-4xl">
              que ajuda crianças a <span className="underline">FALAR e ESCREVER</span> com mais clareza,
            </h2>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground md:text-xl">
              de forma leve, estruturada e sem pressão 💙
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mx-auto mt-10 max-w-5xl">
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
        <section className="container py-12 lg:py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <Badge variant="secondary">Para crianças de 2 a 12 anos</Badge>
              <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">
                O caminho seguro para a comunicação
              </h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start">
                  <Check className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                  <span>Mesmo que ainda <span className="font-semibold text-foreground">não fale claramente</span> ou <span className="font-semibold text-foreground">não reconheça letras</span></span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                  <span>Ideal para crianças com <span className="font-semibold text-foreground">TEA, TDAH ou atraso na linguagem</span></span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                  <span>Método visual, previsível e progressivo</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                  <span>Sem estímulos excessivos, sem cobrança</span>
                </li>
              </ul>
              <p className="text-xl font-medium">
                ✨ Aqui o foco é <span className="text-primary">desenvolver a comunicação</span>, não forçar resultados.
              </p>
            </div>
            <div className="p-8 border rounded-lg bg-card">
              <h3 className="mb-4 text-2xl font-bold text-center font-headline">Core Features</h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Mic className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle>Sound Association</CardTitle>
                      <CardDescription>Atividades interativas de som, imagem e movimento.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <PenTool className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle>Guided Tracing</CardTitle>
                      <CardDescription>Exercícios progressivos para desenvolver habilidades de escrita.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Eye className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle>Visual Learning</CardTitle>
                      <CardDescription>Auxílios visuais para reforçar as conexões de aprendizagem.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Sparkles className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle>Content Personalization</CardTitle>
                      <CardDescription>Conteúdo gerado por IA adaptado às necessidades do seu filho.</CardDescription>
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
              <div>
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
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">
                  🧠 O que é o Método Alemão Adaptado?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Inspirado em abordagens alemãs de desenvolvimento da linguagem, o método trabalha primeiro:
                </p>
                <ul className="grid grid-cols-2 gap-4 text-lg">
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-accent"/>Sons</li>
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-accent"/>Movimentos</li>
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-accent"/>Traçados</li>
                  <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-accent"/>Associação visual</li>
                  <li className="flex items-center gap-3 col-span-2"><Sparkles className="w-5 h-5 text-accent"/>Coordenação motora</li>
                </ul>
                <p className="pt-4 text-lg text-muted-foreground">
                  👉 Para <span className="font-semibold text-foreground">preparar o cérebro</span> da criança para <span className="font-semibold text-foreground">FALAR e ESCREVER</span>, antes de qualquer exigência de leitura.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why kids struggle Section */}
        <section className="container py-12 lg:py-20">
           <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">💡 Por que muitas crianças travam?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Não é falta de capacidade.</p>
          </div>
          <div className="grid max-w-4xl gap-8 mx-auto mt-12 md:grid-cols-2">
            <Card className="p-6 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-500">
                  ❌ O que acontece:
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Pular etapas do desenvolvimento</p>
                <p>Exigir leitura antes da organização da fala e do traçado</p>
                <p>Métodos barulhentos e confusos (péssimos para TEA)</p>
              </CardContent>
            </Card>
            <Card className="p-6 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  💙 Crianças com autismo e TDAH precisam de:
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Estrutura e Previsibilidade</p>
                <p>Repetição calma e Estímulo visual</p>
                <p>Segurança e Confiança</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-lg text-center text-muted-foreground">E é exatamente isso que o material oferece.</p>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-white lg:py-20 dark:bg-card">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">
              🌱 Resultados percebidos pelos pais:
            </h2>
            <div className="grid max-w-4xl gap-8 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3">
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
                <h3 className="mt-4 text-lg font-semibold font-headline">Interesse em letras</h3>
                <p className="mt-2 text-muted-foreground">A curiosidade natural pela escrita é despertada.</p>
              </div>
              <div className="p-6">
                 <Heart className="w-10 h-10 mx-auto text-primary" />
                <h3 className="mt-4 text-lg font-semibold font-headline">Melhor coordenação</h3>
                <p className="mt-2 text-muted-foreground">O controle do traçado se reflete em outras atividades.</p>
              </div>
              <div className="p-6 md:col-span-2 lg:col-span-1">
                 <Heart className="w-10 h-10 mx-auto text-primary" />
                <h3 className="mt-4 text-lg font-semibold font-headline">Menos frustração</h3>
                <p className="mt-2 text-muted-foreground">Atividades adaptadas reduzem crises e ansiedade.</p>
              </div>
            </div>
             <p className="mt-8 text-xl font-medium text-center">
              💙 Comunicação acontece quando a criança se sente segura.
            </p>
          </div>
        </section>
        
        {/* For Whom Section */}
        <section className="container py-12 text-center lg:py-24">
           <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">
              👨‍👩‍👧 Para quem é este material?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="default" className="text-lg">Crianças com TEA (nível 1, 2 ou 3)</Badge>
              <Badge variant="default" className="text-lg">Atraso na fala ou escrita</Badge>
              <Badge variant="default" className="text-lg">Pais que querem ajudar</Badge>
              <Badge variant="default" className="text-lg">Educadores e Terapeutas</Badge>
            </div>
            <div className='mt-12'>
              <Link href="/dashboard">
                <Button size="lg" className="text-lg">
                  Quero Ajudar Meu Filho a se Comunicar
                  <ChevronRight className="ml-2" />
                </Button>
              </Link>
            </div>
           </div>
        </section>

      </main>
      <footer className="py-6 border-t bg-card">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
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
