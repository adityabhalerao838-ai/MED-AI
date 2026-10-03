import type { AuthError } from "firebase/auth";

export function getAuthErrorMessage(error: unknown): string {
  const code =
    typeof error === "object" &&
    error !== null &&
    "code" in error
      ? String((error as { code?: unknown }).code ?? "")
      : "";

  const messages: Record<string, string> = {
    // Email/password authentication
    "auth/user-not-found":
      "We could not find an account with that email address.",

    "auth/wrong-password":
      "The password you entered is incorrect.",

    "auth/invalid-credential":
      "The email or password you entered is incorrect.",

    "auth/invalid-email":
      "Please enter a valid email address.",

    "auth/email-already-in-use":
      "An account already exists with this email address.",

    "auth/weak-password":
      "Your password must be at least 6 characters long.",

    "auth/missing-password":
      "Please enter your password.",

    // Google / redirect authentication
    "auth/redirect-cancelled-by-user":
      "Google sign-in was cancelled. Please try again.",

    "auth/redirect-operation-pending":
      "A Google sign-in request is already in progress. Please wait.",

    "auth/account-exists-with-different-credential":
      "An account already exists with this email using a different sign-in method.",

    "auth/credential-already-in-use":
      "This sign-in method is already connected to another account.",

    "auth/popup-closed-by-user":
      "Google sign-in was cancelled. Please try again.",

    "auth/popup-blocked":
      "Google sign-in could not be started. Please try again.",

    // Rate limiting
    "auth/too-many-requests":
      "Too many attempts. Please wait a moment and try again.",

    // Firebase configuration / authorization
    "auth/operation-not-allowed":
      "This sign-in method is currently disabled. Please contact support.",

    "auth/unauthorized-domain":
      "This website is not authorized for Firebase sign-in. Please check the Firebase authorized domains.",

    "auth/invalid-api-key":
      "Firebase authentication is not configured correctly. Please check the Firebase configuration.",

    // Network
    "auth/network-request-failed":
      "A network error occurred. Please check your internet connection and try again.",

    // Session
    "auth/user-disabled":
      "This account has been disabled. Please contact support.",

    "auth/user-token-expired":
      "Your session has expired. Please sign in again.",

    "auth/requires-recent-login":
      "Please sign in again before performing this action.",
  };

  return (
    messages[code] ??
    "We could not complete your request. Please try again."
  );
}