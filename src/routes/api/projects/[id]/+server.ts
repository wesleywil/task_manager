import { json } from "@sveltejs/kit";
import type { RequestEvent } from "../$types";
import prisma from "../../../../../prisma/client";
import { boolenify } from "../../../../utils/utils";

export async function GET({
  params,
  event,
}: {
  params: { id: number };
  event: RequestEvent;
}) {
  const session = await event.locals.getSession();
  try {
    if (session) {
      const project = await prisma.project.findFirst({
        where: {
          id: Number(params.id),
          userId: session.user.id,
        },
        include: {
          tasks: {
            include: {
              tags: true,
            },
          },
          categories: true,
        },
      });
      return json(project);
    }
    return json({ message: "Unauthorized" }, { status: 401 });
  } catch (error) {
    return json(
      { message: "An server error has occurred", error: error },
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

  const fields = [
    "name",
    "description",
    "status",
    "priority",
    "favorite",
    "due_date",
  ];
  const formDataValues = {} as any;

  for (const field of fields) {
    formDataValues[field] = formData.get(field);
  }

  const { name, description, status, priority, favorite, due_date } =
    formDataValues;
  const date = new Date(due_date);
  const formattedDueDate = date.toISOString();
  try {
    if (session) {
      await prisma.project.update({
        where: {
          id: Number(id),
        },
        data: {
          name,
          description,
          status,
          priority,
          favorite: boolenify(favorite),
          due_date: formattedDueDate,
        },
      });
      return Response.redirect("http://localhost:5173/projects");
    }
    return json({ message: "Unauthorized" }, { status: 401 });
  } catch (error) {
    return json(
      { message: "An server error has occurred", error: error },
      { status: 500 }
    );
  }
}

export async function DELETE({
  request,
  params: { id },
  locals: { getSession },
}) {
  const session = await getSession();
  try {
    if (session) {
      await prisma.project.delete({
        where: {
          id: Number(id),
        },
      });
      return json(
        { message: "Project deleted successfully!" },
        { status: 201 }
      );
    }
    return json({ message: "Unauthorized" }, { status: 401 });
  } catch (error) {
    return json(
      { message: "An server error has occurred", error: error },
      { status: 500 }
    );
  }
}
