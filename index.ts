import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// const addCommentToPost = async () => {
//     await prisma.post.update({
//         where: {
//             slug: 'my first post on mongob using prisma'
//         },
//         data: {
//             comments: {
//                 createMany: {
//                     data: [
//                         {comment: 'This is a great post'},
//                         {comment: 'I\'m learning a lot here'},
//                         {comment: 'I\'m so happy to be here'}
//                     ]
//                 }
//             }
//         }
//     })
// }

async function main() {
    // createUser()
    // addCommentToPost()

    // const allUser = await prisma.user.findMany({
    //     include: {
    //         posts: true
    //     }
    // })

    const allPosts = await prisma.post.findMany({
        include: {
            comments: true
        }
    })
    console.dir(allPosts, {depth: Infinity})
}

main().catch(async (e) => {
    console.log(e)
}).finally(async () => {
    await prisma.$disconnect()
})

// const createUser = async () => {
//     await prisma.user.create({
//             data: {
//                 name: 'Henry',
//                 email: 'hoyx0101@gmail.com',
//                 posts: {
//                     create: {
//                         title: 'Learning to use prisma',
//                         body: 'Lots of interesing stuff, i\'m learning here',
//                         slug: 'my first post on mongob using prisma'
//                     }
//                 }
//             }
//         })
// }
