import { useQuery } from "@tanstack/react-query";
import { fetchNoteList } from "../../api/Note"
import { Loader } from "../Loader";
import { NotesListView } from "./NotesListView";
import { queryClient } from "../../api/queryClient";

export const FetchNotesListView = () => {
    const noteListQuery = useQuery({
        queryFn: () => fetchNoteList(),
        queryKey: ["notes"]
    }, queryClient)

    switch(noteListQuery.status) {
        case 'pending':
            return <Loader />;
        
        case "success":
            return <NotesListView noteList={noteListQuery.data.list} />;

        case "error":
            return <div>
                <span>something wrong :(</span>
                <button onClick={() => noteListQuery.refetch()}>Repeat request</button>
            </div>
    }
}