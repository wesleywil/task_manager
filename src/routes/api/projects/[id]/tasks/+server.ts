import { json } from "@sveltejs/kit";
import prisma from "../../../../../../prisma/client";

export async function GET({request, params:{id}, locals:{getSession}}){
    const session = await getSession();
    try{
        if(session){
            const tasks = await prisma.task.findFirst({
                where:{
                    projectId:Number(id)
                },
                include:{
                    tags:true,
                }
                
            })
            return json(tasks)
        }
        return json({ message: "Unauthorized" }, { status: 401 });
    }catch(error:any){
        return json(
            { message: "An server error has occurred", error: error.message },
            { status: 500 }
          );
    }
}

export async function POST({request, params:{id}, locals:{getSession}}){
    const session = await getSession();
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
        if(session){
            await prisma.task.create({
                data:{
                    title,
                    description,
                    status,
                    priority,
                    due_date:formattedDueDate,
                    projectId:Number(id)
                }
            });
            return Response.redirect(`http://localhost:5173/projects/${id}/tasks`)
        }
        return json({ message: "Unauthorized" }, { status: 401 });
    }catch(error:any){
        return json(
            { message: "An server error has occurred", error: error.message },
            { status: 500 }
          );
    }
}
