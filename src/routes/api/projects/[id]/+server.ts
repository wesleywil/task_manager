import { json } from "@sveltejs/kit";
import prisma from "../../../../../prisma/client";

export async function GET({ params }: { params: { id: number } }){
   
    try{
        const project = await prisma.project.findFirst({
            where:{
                id:Number(params.id)
            },
            include:{
                tasks:true
            }
        })
        return json(project)
    }catch(error){
        return json(
            { message: "An server error has occurred", error: error },
            { status: 500 }
          );
    }
}

export async function POST({ params, request }: { params: { id: number }, request:Request }){
    const formData = await request.formData();

    const fields = ["name", "description", "status", "priority", "due_date"];
    const formDataValues = {} as any;
  
    for (const field of fields) {
      formDataValues[field] = formData.get(field);
    }
  
    const { name, description, status, priority, due_date } = formDataValues;
    const date = new Date(due_date);
    const formattedDueDate = date.toISOString();
    try{
        await prisma.project.update({
            where:{
                id:Number(params.id)
            },
            data:{
                name,
                description,
                status,
                priority,
                due_date:formattedDueDate,
            }
        })
        return Response.redirect("http://localhost:5173/projects")
    }catch(error){
        return json(
            { message: "An server error has occurred", error: error },
            { status: 500 }
          );
    }
       
}

export async function DELETE({ params, request }: { params: { id: number }, request:Request }){
    
    try{
        await prisma.project.delete({
            where:{
                id:Number(params.id)
            },
        })
        return Response.redirect("http://localhost:5173/projects", 202)
    }catch(error){
        return json(
            { message: "An server error has occurred", error: error },
            { status: 500 }
          );
    }
}