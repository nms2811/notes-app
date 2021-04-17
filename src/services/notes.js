import { ActionCreators } from "../redux/notesReducer";

export const GetNotes = async (dispatch) => {
    try {
        const response = [
            { value: ' Study for exam in 3weeks', id: 1 },
            { value: ' At this rate I will be a master in no time', id: 2 },
            { value: ' Build more full-stack application', id: 3 },
            { value: ' I love writing notes', id: 4 },
        ];
        
        dispatch(ActionCreators.setNotes(response));
    } catch {
        console.log('Error!');
    }
}