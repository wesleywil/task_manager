import { json } from '@sveltejs/kit';
import prisma from '../../../../../../../prisma/client.js';


export async function DELETE({request, params:{id, catId}, locals:{getSession}}){
    const session = await getSession();

    try{
        if(session){
            await prisma.category.delete({
                where:{
                    id:Number(catId)
                }
            })
            return json(
                { message: "Category deleted successfully!" },
                { status: 201 }
              );
        }return json({ message: "Unauthorized" }, { status: 401 });
    }catch (error: any) {
        return json(
          { message: "An server error has occurred", error: error.message },
          { status: 500 }
        );
      }
}