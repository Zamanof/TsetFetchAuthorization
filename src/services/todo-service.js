class TodoService {
    _base = 'https://localhost:7129/api/ToDoItems'

    async getAll() {
        const resource = await fetch(`${this._base}?page=1&pageSize=100`,
            {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Content-Type': 'application/json'
                }
            })
        const result = await resource.json()
        return result.items
    }

    async getById(id) {
        const resource = await fetch(`${this._base}/${id}`,
            {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Content-Type': 'application/json'
                }
            })
        return resource.json()
    }

    async addItem(text) {
        return await fetch(this._base,
            {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({text: text})
            }
        )
    }

    changeStatus(id, status) {
        fetch(`${this._base}/${id}/status`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: status
            })
    }

    register = async (e, email, password) => {
        let statusCode;
        e.preventDefault()
        let result = await fetch("https://localhost:7129/api/Auth/register", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(
                {
                    email: email,
                    password: password
                }
            )
        })
            .then((responce) => {
                if (responce.status !== 200) throw (responce.status)
                statusCode = responce.status
                return responce.json()
            })
            .then((result) => {
                localStorage.setItem('accessToken', result.accessToken)
            })
            .catch((error) => {

            })
        return statusCode
    }
    login = async (e, email, password) => {
        let statusCode;
        e.preventDefault()
        let result = await fetch("https://localhost:7129/api/Auth/login", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(
                {
                    email: email,
                    password: password
                }
            )
        })
            .then((responce) => {
                if (responce.status !== 200) throw (responce.status)
                statusCode = responce.status
                return responce.json()
            })
            .then((result) => {
                localStorage.setItem('accessToken', result.accessToken)
            })
            .catch((error) => {

            })
        return statusCode
    }
}

export default TodoService