const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Build login body for the API from the username-or-email field. */
export function buildLoginPayload(identifier, password) {
  const trimmed = identifier.trim();
  const usesEmail = trimmed.includes("@");

  if (usesEmail) {
    if (!EMAIL_REGEX.test(trimmed)) {
      return { error: "Please enter valid email id" };
    }
    return { payload: { email: trimmed, password } };
  }

  const username = trimmed.startsWith("@") ? trimmed.slice(1).trim() : trimmed;
  if (!username) {
    return { error: "Username or email is required" };
  }

  return { payload: { username, password } };
}
