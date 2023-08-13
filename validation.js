/**
 * @returns {boolean}
 */
function validateSubjectAlreadyInTheList() {
    const subjectNameInput = document.getElementById("subject-name")
    if (!(subjectNameInput instanceof HTMLInputElement)) {
        throw new Error("validateSubjectAlreadyInTheList: element of type HTMLInputElement with id 'subject-name' not found")
    }
    const subjectName = subjectNameInput.value.trim()

    const subjectListElement = document.getElementById("subject-list")
    if (!(subjectListElement instanceof HTMLUListElement)) {
        throw new Error("validateSubjectAlreadyInTheList: element of type HTMLUListElement with id 'subject-list' not found")
    }

    let alreadyInTheList = false

    for (let i = 0; i < subjectListElement.childElementCount; i++) {
        const listItem = subjectListElement.children[i]

        const inputText = listItem.querySelector("input#text")
        if (!(inputText instanceof HTMLInputElement))
            continue

        if (inputText.value.toLowerCase() === subjectName.toLowerCase()) {
            alreadyInTheList = true
            break
        }
    }

    if (alreadyInTheList) {
        subjectNameInput.classList.add("is-invalid")
    } else {
        subjectNameInput.classList.remove("is-invalid")
    }

    return alreadyInTheList
}
