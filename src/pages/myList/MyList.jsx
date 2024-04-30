import { useContext, useEffect, useState } from "react";
import CommonTitle from "../../components/commonTitle/CommonTitle";
import { AuthContext } from "../../provider/AuthProvider";
import MyListCard from "./MyListCard";

const MyList = () => {
    const {user} = useContext(AuthContext)
    const userEmail = user.email
    console.log(userEmail)

    const [savedData,setSavedData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/allitems')
        .then(res => res.json())
        .then(data => setSavedData(data))
    },[])

    const filterEmail = savedData?.filter(singleData => singleData.User_Email == userEmail)
    console.log(filterEmail)

    return (
        <div className="min-h-screen container mx-auto py-14">
            <CommonTitle text={"My Lists"}></CommonTitle>

            {filterEmail.length == 0 ? 
            <div className="h-full w-full flex items-center justify-center">
                <p>You have not added any items yet!</p>
            </div>
            :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    filterEmail?.map(item => <MyListCard key={item._id} item={item}></MyListCard>)
                }
            </div>    
        }
        </div>
    );
};

export default MyList;