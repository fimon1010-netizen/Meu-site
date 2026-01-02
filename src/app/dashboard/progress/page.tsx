import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Acompanhamento de Progresso
        </h1>
        <p className="mt-2 text-muted-foreground">
          Visualize o desenvolvimento do seu filho ao longo do tempo.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            <span>Gráficos de Progresso</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg bg-muted/50">
            <p className="text-muted-foreground">
              Gráficos de progresso estarão disponíveis aqui em breve.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
