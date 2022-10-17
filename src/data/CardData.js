import {FaBriefcase} from 'react-icons/fa'
import {BiMessageAltDetail, BiPhoneCall} from 'react-icons/bi'
import {AiFillEye} from 'react-icons/ai'
const CardData =[
    {
        CName :"card shadow bg-primary bg-opacity-50 text-center",
        icon : <FaBriefcase />,
        text : "Total Job Allpied",
        num : 5,
    },
    {
        CName :"card shadow bg-success bg-opacity-25 text-center",
        icon : <BiMessageAltDetail />,
        text : "Reviews",
        num : 23,
    },
    {
        CName :"card shadow bg-info bg-opacity-25 text-center",
        icon : <AiFillEye />,
        text : "This Month Views",
        num : 7,
    },
    {
        CName :"card shadow bg-warning bg-opacity-25 text-center",
        icon : <BiPhoneCall />,
        text : "Call for Interview",
        num : 2,
    }
]
export default CardData;