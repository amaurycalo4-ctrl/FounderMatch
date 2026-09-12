const form = document.getElementById("founderForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(
      "https://foundermatch-api.amaurycalo4.workers.dev/api/profile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );

    const result = await response.json();

   if (response.ok && result.success) {
  alert("Your FounderMatch profile has been created successfully!");
  window.location.href = `matches.html?profile_id=${result.id}`;
}
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Unable to create your profile. Please try again.");
  }
});
