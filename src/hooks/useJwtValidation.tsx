import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface TokenData {
    iat: number;
    exp: number;
}

export const useJwtValidation = (): boolean => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
        try {
            const decodedToken = jwtDecode<TokenData>(accessToken);

            if (decodedToken.exp * 1000 > Date.now()) {
                return true;
            } else {
                Cookies.remove("accessToken");
                return false;
            }
        } catch (err) {
            console.error(err);
        }
    }

    return false;
};
