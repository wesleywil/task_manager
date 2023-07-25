import { json } from "@sveltejs/kit";
import prisma from "../../../../../../prisma/client";

export async function GET({ request, params: { id }, locals: { getSession } }) {
  const session = await getSession();
  try {
    if (session) {
      const categories = await prisma.category.findMany({
        where: {
          projectId: Number(id),
        },
      });
      return json(categories);
    }
    return json({ message: "Unauthorized" }, { status: 401 });
  } catch (error: any) {
    return json(
      { message: "An server error has occurred", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST({
  request,
  params: { id },
  locals: { getSession },
}) {
  const session = await getSession();
  const formData = await request.formData();

  const fields = ["title", "description"];
  const formDataValues = {} as any;

  for (const field of fields) {
    formDataValues[field] = formData.get(field);
  }

  const { title, description } = formDataValues;
  try {
    if (session) {
      await prisma.category.create({
        data: {
          title,
          description,
          projectId: Number(id),
        },
      });
      return Response.redirect(`http://localhost:5173/projects/${id}/tasks`);
    }
    return json({ message: "Unauthorized" }, { status: 401 });
  } catch (error: any) {
    return json(
      { message: "An server error has occurred", error: error.message },
      { status: 500 }
    );
  }
}
