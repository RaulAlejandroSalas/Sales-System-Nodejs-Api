import routerx from 'express-promise-router'
import categoryRouter from './category'
import articleRuter from './article'
const router = routerx();

router.use('/category',categoryRouter)
router.use('/article',articleRuter)

export default router