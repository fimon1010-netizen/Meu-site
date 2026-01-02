import { PenTool } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ActivitiesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Atividades
        </h1>
        <p className="mt-2 text-muted-foreground">
          Escolha uma categoria para começar a praticar.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Associação de Sons</CardTitle>
            <CardDescription>
              Atividades interativas que associam sons com imagens e movimentos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Em breve...
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Exercícios de Traçado</CardTitle>
            <CardDescription>
              Exercícios progressivos de traçado para desenvolver a escrita.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-muted-foreground">
              Em breve...
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Módulos de Aprendizagem Visual</CardTitle>
            <CardDescription>
              Reforce as conexões entre fala, som e formas escritas.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-muted-foreground">
              Em breve...
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
