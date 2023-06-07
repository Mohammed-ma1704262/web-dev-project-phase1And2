import UsersRepo from "../../users-repo";

const repo = new UsersRepo();

export async function GET(request, { params }) {
    const { id } = params;
    const user = await repo.getUser(id)
    return Response.json(user, { status: 200 });
}

export async function PUT(request, { params }) {
    const user = await request.json()
    const userID = params.id;
    const updatedUser = await repo.updateUser(user, userID)
    return Response.json(updatedUser)
}

export async function DELETE(request, { params }) {
    const { id } = params;
    const user = await repo.deleteUser(id)
    return Response.json(user, { status: 200 });
}