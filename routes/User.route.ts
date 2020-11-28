import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
export const router = Router();

const prisma = new PrismaClient();

router.post('/user', async (req, res) => {
    try {
        const { name, email } = req.body;

        const newUser = await prisma.users.create({
            data: {
                name: name,
                email: email,
            },
        });

        res.status(201).json({
            ok: true,
            user: newUser,
        });
    } catch (error) {
        console.error(error);
    }
});

router.post('/')