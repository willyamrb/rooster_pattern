import { useContext } from "react";
import { AuthContext } from "../providers/AuthPovider";

export default function useAuthContext() {
    return useContext(AuthContext);
}
