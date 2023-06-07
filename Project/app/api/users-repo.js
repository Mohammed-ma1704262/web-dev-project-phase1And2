import { log } from 'console'
import fs from 'fs-extra'
import { nanoid } from 'nanoid'
import path from 'path'

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class UsersRepo {
    constructor() {

    }

    async getUsers() {
        try {  
            return await prisma.users.findMany()
        }
        catch (err) {
            console.log(err);
            return { error: err.message }
        }

    }

    async addUser(user) {
        try {
            const newUser = await prisma.users.create({
                data: user
            })
            return newUser
        } catch (error) {
            return { error: error.message }
        }
    }

    async updateUser(user, userID) {
        console.log('updateUser called', userID);
        const updatedUser = await prisma.users.update({
            where: { id:+userID },
            data: user
        })

        if (updatedUser)
            return "updated successfully"

        return "Unable to update user because it does not exist"
    }

    async getUser(userID) {
        console.log('getUser called');
        const user = await prisma.users.findUnique({
            where: {
                id: +userID
            }
        })

        if (user) return user
        else return { errorMessage: 'User does not exit' }
    }

    async deleteUser(userID) {
        try {
            const count = await prisma.users.delete({
                where: {
                    id: +userID
                }
            })
            return "deleted successfully"
        } catch (err) {
            console.log(err);
            return "Unable to delete user because it does not exist"
        }
    }

    async getSessions() {
        try {
            return await prisma.session.findMany()
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }

    async getSession(SessionID) {
        try {
            return await prisma.session.findUnique({where:{id:+SessionID}})
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }

    async addSession(session) {
        try {
            const newSession = await prisma.session.create({
                data: session
            })
            return newSession
        } catch (error) {
            return { error: error.message }
        }
    }
    async updateSession(session, sessionID) {
        console.log('updateSession called', sessionID);
        const updatedSession = await prisma.session.update({
            where: { id:+sessionID },
            data: session
        })

        if (updatedSession)
            return "updated successfully"

        return "Unable to update session because it does not exist"
    }

    async deleteSession(sessionID) {
        try {
            const count = await prisma.session.delete({ where: { id: +sessionID } })

            console.log("DELETE Session: ", count);
            return "deleted successfully"

        } catch (error) {
            console.log(error);
            return { error: error.message }
        }

    }
    
}