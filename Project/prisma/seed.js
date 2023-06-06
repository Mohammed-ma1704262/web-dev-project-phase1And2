import fs from 'fs-extra'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const usersPath = path.join(process.cwd(), 'app/data/users.json')
const sessionsPath = path.join(process.cwd(), 'app/data/session.json')

async function main() {
    try {
        const users = await fs.readJSON(usersPath)
        const sessions = await fs.readJSON(sessionsPath)

        console.log(users);
        console.log(sessions);
        // // createMany is not supported for SQLite. Use create instead
        for (const user of users) await prisma.users.create({ data: user })
       // for (const session of sessions) await prisma.session.create({ data: session })

       for (const session of sessions) {
        const parsedDate = Date.parse(session.date);
        
        if (isNaN(parsedDate)) {
          console.error(`Invalid date: ${session.date}`);
          continue; // Skip this session and move to the next iteration
        }
  
        const prismaDate = new Date(parsedDate);
  
        await prisma.session.create({
          data: {
            ...session,
            date: prismaDate,
          },
        });
      }

    } catch (error) {
        console.log(error);
        return { error: error.message }
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })