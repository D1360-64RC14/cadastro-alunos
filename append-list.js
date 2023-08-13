/**
 * @param {string} listId 
 * @param {string} textInputId 
 */
function appendToList(listId, textInputId) {
    const list = document.getElementById(listId)
    if (!list) {
        throw new Error(`appendToList: element with id '${listId}' was not found`)
    }

    const textInput = document.getElementById(textInputId)
    if (!textInput || !("value" in textInput) || !(typeof textInput.value === "string")) {
        throw new Error(`appendToList: element with id '${listId}' was not found or is an element that doesn't have attribute 'value'`)
    }
    const subjectName = textInput.value.trim()

    if (subjectName.length === 0)
        return

    const subjectItemTemplate = templateSubjectItem(subjectName)
    const subjectItem = subjectItemTemplate.element

    subjectItemTemplate.components?.deleteButton.addEventListener("click", ev => {
        list.removeChild(subjectItem)
    })

    subjectItemTemplate.components?.inputText.addEventListener("focusout", ev => {
        const { value } = subjectItemTemplate.components.inputText

        if (value.trim().length === 0) {
            list.removeChild(subjectItem)
        }
    })

    list.append(subjectItem)
    textInput.value = ""
}
