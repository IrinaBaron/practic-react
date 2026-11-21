import { useQuery } from "@tanstack/react-query"
import { fetchMe } from "../../api/User"
import { Loader } from "../Loader";
import { AuthForm } from "../AuthForm";
import { NoteForm } from "../NoteForm";
import { LogoutButton } from "../LogoutButton";
import { FetchUserView } from "../UserView/FetchUserView";
import { FetchNotesListView } from "../NotesListView/FetchNotesListView";

export const Account = () => {
    const meQuery = useQuery({
        queryFn: () => fetchMe(),
        queryKey: ["users", "me"],
    });

    switch(meQuery.status) {
        case "pending": 
            return <Loader />;

        case "error":
            return <AuthForm />

        case "success":
            return <div>
                <header style={{position: "relative", minHeight: "50px"}}>
                    <FetchUserView userId={'me'} />
                    <LogoutButton />
                </header>
                <NoteForm />
                <FetchNotesListView />
            </div>;
        
    }
};