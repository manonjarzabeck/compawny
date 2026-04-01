import * as jose from "jose";
class SecurityService {
  // stocker l'utilisateur
  static user;
  // stocker le JWT
  static token;
  // déconnexion
  logout = () => {
    SecurityService.user = null;
    SecurityService.token = null;
  };
  // getter / setter ( accesseur / mutateur )
  getUser = () => {
    "use server";
    return SecurityService.user;
  };
  setUser = (value) => {
    "use server";
    SecurityService.user = value;
  };
  setToken = async (user) => {
    const secret = new TextEncoder().encode(void 0);
    const alg = "HS256";
    if (user) {
      SecurityService.token = await new jose.SignJWT(user).setProtectedHeader({ alg }).setExpirationTime("10h").sign(secret);
    }
  };
  getToken = () => SecurityService.token;
}
export {
  SecurityService as S
};
