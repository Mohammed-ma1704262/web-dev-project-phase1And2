import UsersRepo from "../users-repo"
const repo = new UsersRepo()

export async function GET(request) {

    const users = await repo.getSessions()

    return Response.json(users)
}

export async function POST(request) {

    const session = await request.json()
    console.log(session);
    const newSession = await repo.addSession(session)
    return Response.json(session)

}