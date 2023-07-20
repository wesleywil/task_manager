import { json } from "@sveltejs/kit";
import prisma from "../../../../../../prisma/client";

export async function GET({
  params,
  request,
}: {
  params: { id: number };
  request: Request;
}){
  try{
    const categories = await prisma.category.findMany({
      where:{
        projectId:Number(params.id)
      }
    })
    return json(categories)
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
  params: { id: number };
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
    await prisma.category.create({
      data: {
        title,
        description,
        projectId: Number(params.id),
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
