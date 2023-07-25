import { json } from "@sveltejs/kit";
import prisma from "../../../../../prisma/client";

export async function DELETE({
  request,
  params: { id },
  locals: { getSession },
}) {
  const session = await getSession();
  try {
    if (session) {
      await prisma.tag.delete({
        where: {
          id: Number(id),
        },
      });
      return json({ message: "Tag deleted successfully!" }, { status: 201 });
    }
    return json({ message: "Unauthorized" }, { status: 401 });
  } catch (error: any) {
    return json(
      { message: "An server error has occurred", error: error.message },
      { status: 500 }
    );
  }
}
