import { json } from "@sveltejs/kit";
import prisma from "../../../../../../../prisma/client";


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