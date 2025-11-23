// lib/submitBoroughLead.ts

export async function submitBoroughLead(
  e: React.FormEvent<HTMLFormElement>,
  options: { boroughName: string }
) {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);

  // Capture ALL raw fields so we never lose any information
  const raw = Object.fromEntries(data.entries());

  // Try to find a good "description / message" field by checking
  // several likely names that might be used on different pages.
  const descriptionField =
    (data.get("message") as string | null) ||
    (data.get("description") as string | null) ||
    (data.get("projectDescription") as string | null) ||
    (data.get("projectDetails") as string | null) ||
    (data.get("details") as string | null) ||
    (data.get("brief") as string | null) ||
    (data.get("briefDescription") as string | null);

  const payload = {
    name: data.get("name"),
    email: data.get("email"),
    phone: data.get("phone"),
    postcode: data.get("postcode") || data.get("boroughPostcode"),
    service: data.get("projectType") || data.get("service"),
    message: descriptionField,
    borough: options.boroughName,
    raw, // send everything as backup
  };

  try {
    const res = await fetch("/api/contact-resend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert(
        `Thank you — your ${options.boroughName} enquiry has been sent. WEDRAWPLANS will contact you shortly.`
      );
      form.reset();
    } else {
      alert("Something went wrong. Please try again or call us directly.");
    }
  } catch (err) {
    alert("Network error — please try again.");
  }
}
