import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import link from './link'

export default configureStore({
    reducer: {
        auth,
        link,
    },
})