import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    return NextResponse.json({
      success: true,
      data: {
        title: "Atividade de Exemplo",
        description: "Descrição gerada com sucesso.",
        activityContent: "Conteúdo da atividade aqui."
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erro ao gerar conteúdo" },
      { status: 500 }
    );
  }
}
