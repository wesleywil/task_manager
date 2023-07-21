import { json } from "@sveltejs/kit";
import prisma from "../../../../../../../../prisma/client";

export async function GET({
  params,
  request,
}: {
  params: { id: number, taskId:number };
  request: Request;
}){
  try{
    const tags = await prisma.tag.findMany({
      where:{
        taskId:Number(params.taskId)
      }
    })
    return json(tags)
  }catch (error: any) {
    return json(
      { message: "An server error has occurred", error: error.message },
      { status: 500 }
    );
  }
}


export async function POST({
  params,
  request,
}: {
  params: { id: number, taskId:number };
  request: Request;
}) {
  const formData = await request.formData();

  const fields = ["title", "description"];
  const formDataValues = {} as any;

  for (const field of fields) {
    formDataValues[field] = formData.get(field);
  }

  const { title, description } = formDataValues;
  try {
    await prisma.tag.create({
      data: {
        title,
        description,
        taskId: Number(params.taskId),
      },
    });
    return Response.redirect(
      `http://localhost:5173/projects/${params.id}/tasks`
    );
  } catch (error: any) {
    return json(
      { message: "An server error has occurred", error: error.message },
      { status: 500 }
    );
  }
}
