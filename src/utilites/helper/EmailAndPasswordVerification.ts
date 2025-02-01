export const validateEmail = (email: string) => {
  const re =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*)@((?!-)[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*(?:\.[A-Za-z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (
  password: string
): { isValid: boolean; message?: string } => {
  const minLength = 12;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const hasNoRepeatingChars = !/(.)\1{2,}/.test(password); // No more than 2 repeating characters
  const hasNoSequentialChars =
    !/(123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i.test(
      password
    );
  const hasNoPersonalInfo = true; // Add logic to check against user's personal info (e.g., name, email, etc.)
  const isNotCommonPassword = true; // Add logic to check against a list of common passwords

  if (password.length < minLength) {
    return {
      isValid: false,
      message: `Password must be at least ${minLength} characters long.`,
    };
  }
  if (!hasUppercase) {
    return {
      isValid: false,
      message: "Password must include at least one uppercase letter.",
    };
  }
  if (!hasLowercase) {
    return {
      isValid: false,
      message: "Password must include at least one lowercase letter.",
    };
  }
  if (!hasDigit) {
    return {
      isValid: false,
      message: "Password must include at least one digit.",
    };
  }
  if (!hasSpecialChar) {
    return {
      isValid: false,
      message: "Password must include at least one special character.",
    };
  }
  if (!hasNoRepeatingChars) {
    return {
      isValid: false,
      message: "Password must not contain repeating characters.",
    };
  }
  if (!hasNoSequentialChars) {
    return {
      isValid: false,
      message: "Password must not contain sequential characters.",
    };
  }
  if (!hasNoPersonalInfo) {
    return {
      isValid: false,
      message: "Password must not contain personal information.",
    };
  }
  if (!isNotCommonPassword) {
    return {
      isValid: false,
      message: "Password is too common. Please choose a stronger password.",
    };
  }

  return { isValid: true };
};
