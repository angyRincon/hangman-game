import { FC, Suspense } from "react"
import { LayoutProps } from "../layout"
import Loading from "../loading"
import CategoryLoader from "./loading"

const CategoriesLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <Suspense fallback={<CategoryLoader />}>
            {children}
        </Suspense>
    )

}
export default CategoriesLayout