import { Outlet } from "react-router"
import { SideBar } from "../../Components/SideBar/SideBar.component"
import "./Dashboard.styles.scss"

export const Dashboard = () => {
    return (
        <div className="dashboard-layout">
            <SideBar/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}