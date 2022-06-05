// Layouts
import { HeaderOnly } from "~/components/Layouts"

import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Upload from "~/pages/Upload"

// PUBLIC ROUTES
export const publicRoutes = [
    { path: "/", component: Home },
    { path: "/@:nickname", component: Home },
    { path: "/following", component: Following },
    { path: "/upload", component: Upload, layout: HeaderOnly },
]

// PRIVATE ROUTES
export const privateRoutes = []
