'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { Loader2, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import type { PersonalizedLearningContentOutput } from '@/ai/flows/personalized-learning-content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateContentAction, formSchema } from './actions';


export default function PersonalizePage() {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<PersonalizedLearningContentOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: '',
      progressLevel: 'beginner',
      uniqueNeeds: '',
      activityType: 'sound association',
      topic: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);

    const response = await generateContentAction(values);

    if (response.success && response.data) {
      setResult(response.data);
      toast({
        title: 'Conteúdo Gerado!',
        description: 'Sua atividade personalizada está pronta.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao gerar conteúdo',
        description: response.error || 'Ocorreu um erro inesperado. Tente novamente.',
      });
    }

    setLoading(false);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Personalizar Atividade com IA
        </h1>
        <p className="mt-2 text-muted-foreground">
          Preencha os detalhes abaixo para criar uma atividade única para seu filho.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Gerador de Conteúdo</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="childName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome da Criança</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: João" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="progressLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nível de Progresso</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o nível" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Iniciante</SelectItem>
                          <SelectItem value="intermediate">Intermediário</SelectItem>
                           <SelectItem value="advanced">Avançado</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="activityType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Atividade</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a atividade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sound association">Associação de Sons</SelectItem>
                          <SelectItem value="tracing exercise">Exercício de Traçado</SelectItem>
                          <SelectItem value="visual learning module">Aprendizagem Visual</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="uniqueNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Necessidades Específicas</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ex: prefere atividades visuais, tem TEA, etc."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Descreva as preferências ou necessidades para melhor personalização.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tópico (Opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Animais da fazenda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Sparkles className="w-4 h-4 mr-2" />
                  )}
                  Gerar Atividade
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold font-headline">Atividade Gerada</h2>
           {loading && (
            <Card className="flex items-center justify-center h-96">
                <div className="text-center text-muted-foreground">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary"/>
                    <p className="mt-4">Gerando atividade personalizada...</p>
                </div>
            </Card>
          )}
          {result && (
            <Card className="bg-white dark:bg-card">
              <CardHeader>
                <CardTitle className="font-headline">{result.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                    <h3 className="font-semibold">Descrição e Objetivos:</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">{result.description}</p>
                </div>
                <div>
                    <h3 className="font-semibold">Conteúdo da Atividade:</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">{result.activityContent}</p>
                </div>
              </CardContent>
            </Card>
          )}
          {!loading && !result && (
             <Card className="flex items-center justify-center h-96">
                <div className="text-center text-muted-foreground">
                    <Sparkles className="mx-auto h-12 w-12"/>
                    <p className="mt-4">Sua atividade personalizada aparecerá aqui.</p>
                </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
