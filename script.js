document.getElementById("certificateForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const certificateId = document.getElementById("certificateId").value.trim();
    const resultMessage = document.getElementById("resultMessage");
  
    // Simulated Certificate Data (Replace this with real data or API call)
    const certificateData = {
      CERT123: {
        name: "John Doe",
        domain: "Web Development",
        period: "June 2024 - August 2024",
      },
      bb1567: {
        name: "Sumit Srivastava",
        domain: "Android Development",
        period: "1st October 2024 - 31st October 2024",
      },
      re9123: {
        name: "Piyush Agrahari",
        domain: "Android Development",
        period: "1st October 2024 - 31st October 2024",
      },
      CERT789: {
        name: "Emily Brown",
        domain: "Graphic Design",
        period: "May 2024 - July 2024",
      },
    };
  
    // Check if certificate ID exists in the data
    if (certificateData[certificateId]) {
      const { name, domain, period } = certificateData[certificateId];
  
      resultMessage.innerHTML = `
        ✅ Certificate Verified Successfully!<br>
        <strong>Name:</strong> ${name}<br>
        <strong>Internship Domain:</strong> ${domain}<br>
        <strong>Internship Period:</strong> ${period}
      `;
      resultMessage.style.color = "yellow";
    } else {
      resultMessage.textContent = "❌ Invalid Certificate ID. Please try again.";
      resultMessage.style.color = "red";
    }
  });
  