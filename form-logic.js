const registerStudentForm = document.getElementById("register-student-form")
const submitButton = document.getElementById("submit-button")
const cancelButton = document.getElementById("cancel-button")

const subjectNameInput = document.getElementById("subject-name")
const addSubjectButton = document.getElementById("add-subject")

if (
    !(registerStudentForm instanceof HTMLFormElement) ||
    !(subjectNameInput instanceof HTMLInputElement) ||
    !(addSubjectButton instanceof HTMLButtonElement) ||
    !(submitButton instanceof HTMLButtonElement) ||
    !(cancelButton instanceof HTMLButtonElement)
) {
    throw new Error("form-logic.js: required elements not found")
}

submitButton.addEventListener("click", ev => {
    registerStudentForm.classList.add("was-validated")
})

cancelButton.addEventListener("click", ev => {
    history.back()
})

registerStudentForm.addEventListener("submit", ev => {
    subjectNameInput.disabled = true
})

subjectNameInput.addEventListener("keydown", ev => {
    validateSubjectAlreadyInTheList()

    if (ev.key !== "Enter")
        return
    ev.preventDefault()

    if (subjectNameInput.classList.contains("is-invalid"))
        return

    appendToList("subject-list", "subject-name")
})

subjectNameInput.addEventListener("input", ev => {
    validateSubjectAlreadyInTheList()
})

addSubjectButton.addEventListener("click", ev => {
    validateSubjectAlreadyInTheList()
    subjectNameInput.focus()

    if (subjectNameInput.classList.contains("is-invalid"))
        return

    appendToList("subject-list", "subject-name")
})
