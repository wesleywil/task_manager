import { goto } from "$app/navigation";
import { json, fail, redirect } from "@sveltejs/kit";
import prisma from "../../../../prisma/client";
import { boolenify } from "../../../utils/utils";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        tasks: true,
      },
    });
    return json(projects);
  } catch (error) {
    return json(
      { message: "An server error has occurred", error: error },
      { status: 500 }
    );
  }
}

export async function POST({ request }) {
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
    await prisma.project.create({
      data: {
        name,
        description,
        status,
        priority,
        favorite:boolenify(favorite),
        start_date: new Date(),
        due_date:formattedDueDate,
      },
    });
    return Response.redirect("http://localhost:5173/projects")
  } catch (error: any) {
    return json(
      { message: "An server error has occurred", error: error.message },
      { status: 500 }
    );
  }
}
