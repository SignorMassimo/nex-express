import { Router } from 'express'
const userRouter = Router()

userRouter.get('/profile', (req, res) => {
    res.send('profile page')
})

userRouter.get('/auth', (req, res) => {
    res.send('auth processing...')
})

export default userRouter
