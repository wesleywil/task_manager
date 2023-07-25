import { json } from "@sveltejs/kit";
import prisma from "../../../../../../../../prisma/client";

export async function GET({
  request,
  params: { id, taskId },
  locals: { getSession },
}) {
  const session = await getSession();
  try {
    if (session) {
      const tags = await prisma.tag.findMany({
        where: {
          taskId: Number(taskId),
        },
      });
      return json(tags);
    }
  } catch (error: any) {
    return json(
      { message: "An server error has occurred", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST({
  request,
  params: { taskId, id },
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
      await prisma.tag.create({
        data: {
          title,
          description,
          taskId: Number(taskId),
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
