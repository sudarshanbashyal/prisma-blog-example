import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
export const router = Router();

const prisma = new PrismaClient();

router.post('/blog', async (req, res) => {
    try {
        const { title, author } = req.body;
        const newBlog = await prisma.blogs.create({
            data: {
                title: title,
                author: {
                    connect: { id: author },
                },
            },
        });

        res.status(201).json({
            ok: true,
            blog: newBlog,
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/blog/:id', async (req, res) => {
    try {
        const id = +req.params.id;
        const blog = await prisma.blogs.findUnique({
            where: { id: id },
        });

        res.json({
            ok: true,
            blog: blog,
        });
    } catch (error) {
        console.log(error);
    }
});
