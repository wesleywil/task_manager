import { json } from "@sveltejs/kit";
import prisma from "../../../../../prisma/client";


export async function DELETE({request, params}:{request:Request, params:{id:number}}){
    try{
        await prisma.tag.delete({
            where:{
                id:Number(params.id)
            },
        });
        return json({message:"Tag deleted successfully!"},{status:201})
    }catch (error:any) {
    return json(
      { message: "An server error has occurred", error: error.message },
      { status: 500 }
    );
  }
}