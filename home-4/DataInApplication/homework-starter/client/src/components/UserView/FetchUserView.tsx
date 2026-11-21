import { useQuery } from "@tanstack/react-query"
import { FC } from "react"
import { fetchUser } from "../../api/User"
import { queryClient } from "../../api/queryClient"
import { Loader } from "../Loader"
import { UserView } from "./UserView"

interface FetchUserViewProps {
    userId: string
}

export const FetchUserView: FC<FetchUserViewProps> = () => {
    const userQuery = useQuery({
        queryFn: () => fetchUser(),
        queryKey: ['users', 'me'],
    }, queryClient);

    switch(userQuery.status) {
        case 'pending':
            return <Loader />;
        
        case 'success': 
            return <UserView user={userQuery.data} />;

        case 'error': <div>
                <span>something wrong :(</span>
                <button onClick={() => userQuery.refetch()}>Repeat request</button>
            </div>
    }
}