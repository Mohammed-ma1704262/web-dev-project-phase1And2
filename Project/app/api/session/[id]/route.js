import UsersRepo from "../../users-repo";

const repo = new UsersRepo();

export async function GET(request, { params }) {
    const { id } = params;
    const session = await repo.getSession(id)
    return Response.json(session, { status: 200 });
}

export async function PUT(request, { params }) {
    const session = await request.json()
    const sessionID = params.id;
    const updatedSession = await repo.updateSession(session, sessionID)
    return Response.json(updatedSession)
}

export async function DELETE(request, { params }) {
    const { id } = params;
    const session = await repo.deleteSession(id)
    return Response.json(session, { status: 200 });
}