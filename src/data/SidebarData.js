
import {AiFillDashboard, AiOutlineMail, AiOutlineBell, AiOutlineLogout} from 'react-icons/ai'
import {GrStatusInfo} from 'react-icons/gr'
import {CgProfile} from 'react-icons/cg'

const SidebarData = [
    {
        title : "Dash Board",
        icon : <AiFillDashboard />,
    },
    {
        title : "Messages",
        icon : <AiOutlineMail />,
    },
    {
        title : "Jobs",
        icon : <AiOutlineBell />,
    },
    {
        title : "ApplicationStatus",
        icon : <GrStatusInfo />,
    },
    {
        title : "your Profile",
        icon : <CgProfile/>,
    },
    {
        title : "LogOut",
        icon : <AiOutlineLogout/>,
    },
]
export default SidebarData;