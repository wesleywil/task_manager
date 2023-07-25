import { json } from "@sveltejs/kit";
import prisma from "../../../../../../../prisma/client";

// {params, request}:{params:{taskId:number, id:number}, request:Request}
export async function GET({
  request,
  params: { taskId, id },
  locals: { getSession },
}) {
  const session = await getSession();
  try {
    if (session) {
      const task = await prisma.task.findFirst({
        where: {
          projectId: Number(id),
          id: Number(taskId),
        },
        include: {
          tags: true,
        },
      });
      return json(task);
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
  params: { taskId, id },
  locals: { getSession },
}) {
  const session = await getSession();
  let { status } = await request.json();
  try {
    if (session) {
      await prisma.task.update({
        where: {
          id: Number(taskId),
        },
        data: {
          status,
        },
      });
      return json({ message: "Task Updated Successfully!" }, { status: 201 });
    }
    return json({ message: "Unauthorized" }, { status: 401 });
  } catch (error: any) {
    return json(
      { message: "An server error has occurred", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE({
  request,
  params: { taskId, id },
  locals: { getSession },
}) {
  const session = await getSession();
  try {
    if (session) {
      await prisma.task.delete({
        where: {
          id: Number(taskId),
        },
      });
      return json({ message: "Task Deleted successfully!" }, { status: 200 });
    }
    return json({ message: "Unauthorized" }, { status: 401 });
  } catch (error: any) {
    return json(
      { message: "An server error has occurred", error: error.message },
      { status: 500 }
    );
  }
}
