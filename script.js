function getAge() {
   
    const dateOfBirthInput = document.getElementById('dateOfBirth').value;
    const currentDateInput = document.getElementById('currentDate').value;

    if (!dateOfBirthInput || !currentDateInput) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }

    const dateOfBirth = new Date(dateOfBirthInput);
    const currentDate = new Date(currentDateInput);

    const years = currentDate.getFullYear() - dateOfBirth.getFullYear();
    const months = currentDate.getMonth() - dateOfBirth.getMonth();
    const days = currentDate.getDate() - dateOfBirth.getDate();

    return document.getElementById('Age').innerHTML =  
    "Age is: " + years + " years. " + months + " months " + days + " days ";

}