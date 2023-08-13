/**
 * Result struct of tempaltes
 * 
 * @template Element
 * @typedef {Object} TemplateResult
 * @property {Element} element
 * @property {{[key: string]: any}} components
 */

/**
 * Template to build a material symbol outline with the specified symbol/icon
 * name.
 * 
 * ```html
 * <span class="material-symbols-outlined d-block">{{symbolName}}</span>
 * ```
 * 
 * @param {string} symbolName
 * @returns {TemplateResult<HTMLSpanElement>}
 */
function templateMaterialSymbolOutline(symbolName) {
    const span = document.createElement("span");

    span.classList.add("material-symbols-outlined")
    span.textContent = symbolName

    return {
        element: span,
        components: {}
    }
}

/**
 * Template to build a subject item.
 * 
 * ### Components
 * 
 * - `inputText`
 * - `deleteButton`
 * 
 * ```html
 * <li class="input-group">
 *      <input class="form-control no-validate" type="text" id="text" name="subjects"
 *          value="{{subjectName}}">
 *      <button class="btn btn-danger py-2" type="button" title="Remover">
 *          <span class="material-symbols-outlined d-block">delete</span>
 *      </button>
 *  </li>
 * ```
 * @param {string} subjectName
 * 
 * @returns {TemplateResult<HTMLLIElement>}
 */
function templateSubjectItem(subjectName) {
    const item = document.createElement("li")
    item.classList.add("input-group")

    const inputText = document.createElement("input")
    {
        inputText.type = "text"
        inputText.id = "text"
        inputText.name = "subjects"
        inputText.value = subjectName.trim()
        inputText.classList.add("form-control", "no-validate")

        item.append(inputText)
    }

    const deleteButton = document.createElement("button")
    {
        deleteButton.type = "button"
        deleteButton.title = "Remover"
        deleteButton.classList.add("btn", "btn-danger", "py-2")

        const deleteIconTemplate = templateMaterialSymbolOutline("delete");
        const deleteIcon = deleteIconTemplate.element
        deleteIcon.classList.add("d-block")
        deleteButton.append(deleteIcon)

        item.append(deleteButton)
    }

    return {
        element: item,
        components: {
            inputText,
            deleteButton
        }
    };
}