import db from "../../../../../../prisma/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const replies = await db.comment.findMany({
    where: {
      parentId: parseInt(id!),
    },
    include: {
      author: true,
    },
  });

  return Response.json(replies);
}
