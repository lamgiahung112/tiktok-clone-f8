import classNames from "classnames/bind"

import { Header, Sidebar } from "~/components/Layouts/components"
import styles from "./DefaultLayout.module.css"

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout
