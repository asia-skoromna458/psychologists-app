import { db } from "../firebase/firebase"
import { get, ref } from "firebase/database";
import type { Psychologist } from "@/types/psychologist"
export const getPsychologist = async (): Promise<Psychologist[]> => {
    const data = await get(ref(db));
    if (!data.exists()) {
        return []
    }
    return Object.values(data.val()) as Psychologist[]
    
}