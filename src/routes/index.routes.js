import {Router} from "express"

const router = Router()

router.get('/api', (req, res) => {
    res.json([
        {
            user: "Jimena",
            score: 45698
        }
    ])
  })

export default router;