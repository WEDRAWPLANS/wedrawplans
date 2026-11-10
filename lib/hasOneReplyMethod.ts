/** Match the form's one-contact requirement with the existing server acceptance rules. */
export function hasOneReplyMethod(form: HTMLFormElement): boolean {
  const data = new FormData(form);
  if (String(data.get("phone") || "").trim() || String(data.get("email") || "").trim()) return true;
  window.alert("Please provide a phone number OR email address so WEDRAWPLANS can reply.");
  form.querySelector<HTMLInputElement>('input[name="phone"]')?.focus();
  return false;
}
