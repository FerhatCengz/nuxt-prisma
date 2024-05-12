import prismaClient from "~/server/prismaClient";

export default defineEventHandler(async (event) => {
    const user = await prismaClient.user.create({
        data: {
            name: 'Alice',
            email: 'ferhatcengiz@prisma.io',
        },
    })

    // console.log('Created user:', user)
    return prismaClient.user.findMany()
})