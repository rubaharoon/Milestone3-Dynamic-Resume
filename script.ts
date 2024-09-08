//Listing Element

document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    //Get references to form elements using their IDs

    const profilePictureInput = document.getElementById(`profile-picture`) as HTMLInputElement;
    const nameElement = document.getElementById(`name`) as HTMLInputElement;
    const contactElement = document.getElementById(`contact`) as HTMLInputElement;
    const emailElement = document.getElementById(`email`) as HTMLInputElement;
    const addressElement = document.getElementById(`address`) as HTMLInputElement;
    const ageElement = document.getElementById(`age`) as HTMLInputElement;
    const educationElement = document.getElementById(`education`) as HTMLInputElement;
    const WorkexperienceElement = document.getElementById(`experience`) as HTMLInputElement;
    const skillsElement = document.getElementById(`skills`) as HTMLInputElement;
    const certificationsElement = document.getElementById(`certifications`) as HTMLInputElement;
    const hobbiesElement = document.getElementById(`hobbies`) as HTMLInputElement;

    //Check if all form elements are present

    if (profilePictureInput && nameElement && contactElement && emailElement && addressElement && ageElement && educationElement && WorkexperienceElement && skillsElement && certificationsElement && hobbiesElement) {
        
        const name = nameElement.value;
        const contact = contactElement.value;
        const email = emailElement.value;
        const address = addressElement.value;
        const age = ageElement.value;
        const education = educationElement.value;
        const Workexperience = WorkexperienceElement.value;
        const skills = skillsElement.value;
        const certifications = certificationsElement.value;
        const hobbies = hobbiesElement.value;

        //picture elements

        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : ``;
    
    //Create Resume Output

   const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture">` : ""}
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Contact:</strong>${contact}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Address:</strong>${address}</p>
    <p><strong>age:</strong>${age}</p>
   
    <h3>Education</h3>
    <p>${education}</p>
    
    <h3>Work Experience</h3>
    <p>${Workexperience}</p>
    
    <h3>Skills</h3>
    <p>${skills}</p>

    <h3>Certifications</h3>
    <p>${certifications}</p>

    <h3>Hobbies</h3>
    <p>${hobbies}</p>
    `;

    //Display Resume Output

    const resumeOutputElement = document.getElementById(`resumeOutput`);
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    } else {
        console.error(`The resumeOutput elements are missing.`);
    }
    } 
    
     else {
        console.error(`One or more output elements are missing.`);
    }

});


