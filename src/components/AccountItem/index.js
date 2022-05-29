import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import styles from "./AccountItem.module.css"

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://i1-dulich.vnecdn.net/2021/05/18/VnExpress-MauSon-8-1621330133.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=X_iGQixCkD-NdR8qXNgRAQ"
                alt="Ok"
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Gia Hung</span>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx("username")}>trikohung-__-</span>
            </div>
        </div>
    )
}

export default AccountItem
