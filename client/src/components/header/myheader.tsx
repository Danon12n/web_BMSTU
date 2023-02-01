import { FC } from "react";
import styles from "./myheader.module.css";
import { ProfileIcon } from "../ui/icons/icons";
import { NavLink } from "react-router-dom";

interface MyHeaderProps {
    type: "admin" | "vendor" | "customer" | "notAuthorized";
}

const MyHeader: FC<MyHeaderProps> = ({ type }) => {
    return (
        <div className={`${styles.myHeader}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.leftCorner}`}>
                    <NavLink className={styles.myLink} to={"/"}>
                        Главная
                    </NavLink>
                    {type === "customer" ||
                    type === "vendor" ||
                    type === "admin" ? (
                        <NavLink className={styles.myLink} to={"/customer"}>
                            Покупатель
                        </NavLink>
                    ) : (
                        ""
                    )}
                    {type === "vendor" || type === "admin" ? (
                        <NavLink className={styles.myLink} to={"/vendor"}>
                            Продавец
                        </NavLink>
                    ) : (
                        ""
                    )}
                    {type === "admin" ? (
                        <NavLink className={styles.myLink} to={"/admin"}>
                            Администратор
                        </NavLink>
                    ) : (
                        ""
                    )}
                </div>
                <div className={`${styles.rightCorner}`}>
                    <ProfileIcon size='50' color='white' />
                    <NavLink className={styles.myLink} to={"/login"}>
                        Личный кабинет
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
export { MyHeader };
