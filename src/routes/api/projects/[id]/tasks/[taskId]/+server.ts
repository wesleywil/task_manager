import { json } from "@sveltejs/kit";
import prisma from "../../../../../../../prisma/client";


export async function GET({params, request}:{params:{taskId:number, id:number}, request:Request}){
    try{
        const task = await prisma.task.findFirst({
            where:{
                projectId:Number(params.id),
                id:Number(params.taskId)
            }
        })
        return json(task)
    }catch(error:any){
        return json(
            { message: "An server error has occurred", error: error.message },
            { status: 500 }
          );
    }
}


export async function POST({ params, request }: { params: { taskId:number,id: number }, request:Request }){
    let {status} = await request.json();
    try{
        await prisma.task.update({
            where:{
                id:Number(params.taskId),
            },
            data:{
                status,
            }
        });
        return json({message:"Task Updated Successfully!"},{status:201})
    }catch(error:any){
        return json(
            { message: "An server error has occurred", error: error.message },
            { status: 500 }
          );
    }
}

export async function DELETE({ params, request }: { params: { taskId:number,id: number }, request:Request }){
    try{
        await prisma.task.delete({
            where:{
                id:Number(params.taskId)
            }
        })
        return json({message:"Task Deleted successfully!"},{status:200})
    }catch(error:any){
        return json(
            { message: "An server error has occurred", error: error.message },
            { status: 500 }
          );
    }
}