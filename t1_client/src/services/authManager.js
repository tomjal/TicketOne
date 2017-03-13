import { ROLES } from './../consts/roles';

class AuthManager {
  isRoleAllowed(roleString) {
    if (this.isClient(roleString)
      || this.isEmployee(roleString)
      || this.isUnspecified(roleString)) {
      return true;
    }
    return false;
  }
  isClient(roleString) {
    if (roleString === ROLES.CLIENT) {
      return true;
    }
    return false;
  }
  isEmployee(roleString) {
    if (roleString === ROLES.EMPLOYEE) {
      return true;
    }
    return false;
  }
  isUnspecified(roleString) {
    if (roleString === ROLES.UNSPECIFIED) {
      return true;
    }
    return false;
  }
}

export const authManager = new AuthManager();
