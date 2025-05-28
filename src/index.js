const onClickAdd = () => {
    const inputText = document.getElementById('add-text').value
    createIncompleteTodo(inputText)
    document.getElementById('add-text').value = ''
}

const createIncompleteTodo = (todo) => {
    const li = document.createElement('li')
    const div = document.createElement('div')
    div.className = 'list-row'
    const p = document.createElement('p')
    p.className = 'todo-item'
    p.innerText = todo

    const completeButon = document.createElement('button')
    completeButon.innerText = '完了'
    completeButon.addEventListener('click', () => {
        const moveTargt = completeButon.closest('li')
        completeButon.nextElementSibling.remove()
        completeButon.remove()

        const backButton = document.createElement('button')
        backButton.innerText = '戻す'
        backButton.addEventListener('click', () => {
            const todoText = backButton.previousElementSibling.innerText
            createIncompleteTodo(todoText)
            backButton.closest('li').remove()
        })

        moveTargt.firstElementChild.appendChild(backButton)
        document.getElementById('complete-list').appendChild(moveTargt)
    })

    const deleteButon = document.createElement('button')
    deleteButon.innerText = '削除'
    deleteButon.addEventListener('click', () => {
        const deleteTargt = deleteButon.closest('li')
        document.getElementById('incomplete-list').removeChild(deleteTargt)
    })

    div.appendChild(p)
    div.appendChild(completeButon)
    div.appendChild(deleteButon)
    li.appendChild(div)

    document.getElementById('incomplete-list').appendChild(li)
}

document.getElementById('add-button').addEventListener('click', onClickAdd)

