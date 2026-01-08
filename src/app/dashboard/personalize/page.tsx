'use client';

import * as React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

/* =======================
   SCHEMA (CLIENT SAFE)
======================= */
const formSchema = z.object({
  childName: z.string().min(1, 'Informe o nome'),
  progressLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  activityType: z.string(),
  uniqueNeeds: z.string().optional(),
  topic: z.string().optional(),
});

/* =======================
   MOCK ACTION (SEM SERVER)
======================= */
async function generateContentAction(values: any) {
  return {
    success: true,
    data: {
      title: `Atividade para ${values.childName}`,
      description:
        'Atividade gerada com sucesso. Esta é uma versão de demonstração.',
      activityContent:
        'Exercício simples baseado no nível e tipo selecionados.',
    },
  };
}

export default function PersonalizePage() {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<any | null>(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: '',
      progressLevel: 'beginner',
      uniqueNeeds: '',
      activityType: 'sound association',
      topic: '',
    },
  });

  async function onSubmit(values: any) {
    setLoading(true);
    setResult(null);

    const response = await generateContentAction(values);

    if (response.success) {
      setResult(response.data);
      toast({
        title: 'Conteúdo Gerado!',
        description: 'Sua atividade personalizada está pronta.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Erro ao gerar conteúdo.',
      });
    }

    setLoading(false);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Personalizar Atividade</h1>
        <p className="text-muted-foreground">
          Preencha os dados para gerar a atividade.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Gerador</CardTitle>
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
                        <Input {...field} />
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
                      <FormLabel>Nível</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Iniciante</SelectItem>
                          <SelectItem value="intermediate">Intermediário</SelectItem>
                          <SelectItem value="advanced">Avançado</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  Gerar
