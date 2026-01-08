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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

/* ✅ TUDO CLIENTE — SEM actions.ts */

const formSchema = z.object({
  childName: z.string().min(1),
  progressLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  activityType: z.string(),
  uniqueNeeds: z.string().optional(),
  topic: z.string().optional(),
});

async function generateContentAction() {
  return {
    success: true,
    data: {
      title: 'Atividade de Exemplo',
      description: 'Conteúdo gerado com sucesso.',
      activityContent: 'Aqui aparecerá a atividade personalizada.',
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
      activityType: 'sound association',
      uniqueNeeds: '',
      topic: '',
    },
  });

  async function onSubmit() {
    setLoading(true);
    const response = await generateContentAction();
    setResult(response.data);
    setLoading(false);

    toast({
      title: 'Conteúdo Gerado!',
      description: 'Sua atividade personalizada está pronta.',
    });
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Personalizar Atividade</h1>

      <Card>
        <CardHeader>
          <CardTitle>Gerador</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="childName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles />}
                Gerar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>{result.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{result.description}</p>
            <p>{result.activityContent}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
