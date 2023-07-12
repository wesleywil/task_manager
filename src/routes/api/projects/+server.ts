import { json } from "@sveltejs/kit";
import prisma from "../../../../prisma/client";


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

export async function POST({request}) {
  const { name, description, status, priority, due_date } =
    await request.json();
    

  try {
    await prisma.project.create({
      data: {
        name,
        description,
        status,
        priority,
        start_date: new Date(),
        due_date,
      },
    });
    return json(
      { message: "A new project was added successfully!" },
      { status: 201 }
    );
  } catch (error:any) {
    return json(
      { message: "An server error has occurred", error: error.message },
      { status: 500 }
    );
  }
}
