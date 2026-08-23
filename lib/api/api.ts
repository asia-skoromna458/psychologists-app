import { db } from "../firebase/firebase"
import { get, ref, query, limitToFirst, startAfter, orderByKey } from "firebase/database";
import type { Psychologist } from "@/types/psychologist"
interface PsychologistsResponse {
    psychologist: Psychologist[],
    lastKey: string | null
}

export const getPsychologist = async (lastKey: string | null): Promise<PsychologistsResponse> => {
    let psychologistQuery;
    if (lastKey) {
        psychologistQuery = query(ref(db),orderByKey(), startAfter(lastKey), limitToFirst(3))
    } else {
        psychologistQuery = query(ref(db),orderByKey(), limitToFirst(3))
    }
    const data = await get(psychologistQuery);
   
    
    if (!data.exists()) {
        return {psychologist: [], lastKey: null}
    }
    const psychologists = Object.values(data.val()) as Psychologist[];
     const keys = Object.keys(data.val());
    return {
        psychologist: psychologists,
        lastKey: keys[keys.length - 1]
     }
    
}