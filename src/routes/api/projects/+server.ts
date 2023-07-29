import { json } from "@sveltejs/kit";
import prisma from "../../../../prisma/client";
import { boolenify } from "../../../utils/utils";
import type { RequestEvent } from "./$types.js";

export async function GET({locals:{getSession}}) {
  const session = await getSession();
  try {
    if(session){
      const projects = await prisma.project.findMany({
        where:{
          userId:session.user.id
        },
        include: {
          tasks: true,
          categories:true,
        },
      });
      return json(projects);
    }
    return json({message:"You're not authorized to do this action"},{status:401})
    
  } catch (error) {
    return json(
      { message: "An server error has occurred", error: error },
      { status: 500 }
    );
  }
}

export async function POST({request, locals:{getSession}}) {
  const session = await getSession();
  const formData = await request.formData();

  const fields = ["name", "description", "status", "priority", "favorite" ,"due_date"];
  const formDataValues = {} as any;

  for (const field of fields) {
    formDataValues[field] = formData.get(field);
  }

  const { name, description, status, priority, favorite, due_date } = formDataValues;
  const date = new Date(due_date);
  const formattedDueDate = date.toISOString();
  
  try {
    if(session){
      await prisma.project.create({
        data: {
          name,
          description,
          status,
          priority,
          favorite:boolenify(favorite),
          start_date: new Date(),
          due_date:formattedDueDate,
          userId:session.user.id
        },
      });
      return Response.redirect("http://localhost:5173/projects")
    }
      return json({message:"You're not authorized to do this action"},{status:401})
    
  } catch (error: any) {
    return json(
      { message: "An server error has occurred", error: error.message },
      { status: 500 }
    );
  }
}
