// lib/submitBoroughLead.ts

export async function submitBoroughLead(
  e: React.FormEvent<HTMLFormElement>,
  options: { boroughName: string }
) {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);

  const payload = {
    name: data.get("name"),
    email: data.get("email"),
    phone: data.get("phone"),
    postcode: data.get("postcode") || data.get("boroughPostcode"),
    service: data.get("projectType") || data.get("service"),
    message: data.get("message") || data.get("description"),
    borough: options.boroughName,
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
