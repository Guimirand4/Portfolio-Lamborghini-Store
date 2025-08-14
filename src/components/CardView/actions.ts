import { fetchGetCarData } from "../../apis/getCars";
import { CarModel } from "./props"

export const handlePreviousItem = async () => {

}

export const handleNextItem = async () => {

}

//fazer solicitação para a api
export const loadCarData = async (id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
      const response = await fetchGetCarData(id)
    try {
        if(response){
            setCarData(response);
        }
    } catch (error) {
        console.error("Error fetching car data:", error);
        setCarData(null);
    }
};



