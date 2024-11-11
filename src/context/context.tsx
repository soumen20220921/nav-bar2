import { createContext, Dispatch, SetStateAction } from "react";

// Define an interface for the context value
interface ProductContextType {
    mode: boolean;
    setMode: Dispatch<SetStateAction<boolean>>;

}

// Create the context with the initial value as undefined
const productContext = createContext<ProductContextType | undefined>(undefined);

export default productContext;
