import { json } from "@sveltejs/kit";
import prisma from "../../../../../../prisma/client";

export async function GET({ params, request }: { params: { id: number },request:Request }){
    try{
        const tasks = await prisma.task.findFirst({
            where:{
                projectId:Number(params.id)
            },
            include:{
                tags:true,
            }
            
        })
        return json(tasks)
    }catch(error:any){
        return json(
            { message: "An server error has occurred", error: error.message },
            { status: 500 }
          );
    }
}

export async function POST({ params, request }: { params: { id: number },request:Request }){
    const formData = await request.formData();

    const fields = ["title", "description", "status", "priority", "due_date"];
    const formDataValues = {} as any;
  
    for (const field of fields) {
      formDataValues[field] = formData.get(field);
    }
  
    const { title, description, status, priority, due_date } = formDataValues;
    const date = new Date(due_date);
    const formattedDueDate = date.toISOString();

    try{
        await prisma.task.create({
            data:{
                title,
                description,
                status,
                priority,
                due_date:formattedDueDate,
                projectId:Number(params.id)
            }
        });
        return Response.redirect(`http://localhost:5173/projects/${params.id}/tasks`)
    }catch(error:any){
        return json(
            { message: "An server error has occurred", error: error.message },
            { status: 500 }
          );
    }
}
