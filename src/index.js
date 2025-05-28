const onClickAdd = () => {
    const inputText = document.getElementById('add-text').value

    const li = document.createElement('li')
    const div = document.createElement('div')
    div.className = 'list-row'
    const p = document.createElement('p')
    p.className = 'todo-item'
    p.innerText = inputText

    const completeButon = document.createElement('button')
    completeButon.innerText = '完了'
    completeButon.addEventListener('click', () => {
        console.log('完了--------------')
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
    document.getElementById('add-text').value = ''
}

document.getElementById('add-button').addEventListener('click', onClickAdd)

