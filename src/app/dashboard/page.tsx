import Link from 'next/link';
import { ArrowRight, PenTool, Sparkles, TrendingUp } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Bem-vindo ao Fala & Traça!
        </h1>
        <p className="mt-2 text-muted-foreground">
          Aqui está um resumo do seu progresso e atividades disponíveis.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Atividades</CardTitle>
              <PenTool className="w-6 h-6 text-muted-foreground" />
            </div>
            <CardDescription>
              Explore atividades de som, traçado e visuais.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p>Comece uma nova atividade para estimular a fala e a escrita.</p>
          </CardContent>
          <div className="p-6 pt-0">
            <Button asChild className="w-full">
              <Link href="/dashboard/activities">
                Ver Atividades <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Progresso</CardTitle>
              <TrendingUp className="w-6 h-6 text-muted-foreground" />
            </div>
            <CardDescription>
              Acompanhe o desenvolvimento do seu filho.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p>
              Visualize gráficos e relatórios sobre as habilidades desenvolvidas.
            </p>
          </CardContent>
          <div className="p-6 pt-0">
            <Button asChild className="w-full" variant="secondary">
              <Link href="/dashboard/progress">
                Ver Progresso <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>

        <Card className="flex flex-col bg-accent/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Personalizar Conteúdo</CardTitle>
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <CardDescription>
              Gere atividades únicas com nossa IA.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p>
              Crie conteúdo perfeitamente adaptado ao nível e necessidades do
              seu filho.
            </p>
          </CardContent>
          <div className="p-6 pt-0">
            <Button asChild className="w-full" variant="outline">
              <Link href="/dashboard/personalize">
                Personalizar Agora <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
