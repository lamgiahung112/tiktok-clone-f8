import { Header } from "~/components/Layouts/components"

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout
