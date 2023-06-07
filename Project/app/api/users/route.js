import UsersRepo from "../users-repo"
const repo = new UsersRepo()

export async function GET(request) {

    const users = await repo.getUsers()

    return Response.json(users)
}

export async function POST(request) {

    const user = await request.json()
    console.log(user);
    const newUser = await repo.addUser(user)
    return Response.json(newUser)

}