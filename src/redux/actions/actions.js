import axios from 'axios'

const url = "http://localhost:5000/api/"

export function loadMetrics() {
    return (dispatch) => {
        axios.get(`${url}metrics`)
            .then((res) => {
                let metrics = res.data
                dispatch({ type: 'LOAD_METRICS', metrics })
            }).catch((err) => { console.log(err) })
    }
}
export function getUser(_id) {
    return axios.get(`${url}user/${_id}`).then((res) => {
        return res.data
    }).catch(err => console.log(err))
}

export function getGraphData() {
    const counter = this
    return (dispatch) => {
        axios.get(`${url}graphData/${counter}`).then((res) => {
            let graphData = res.data
            dispatch({ type: 'SET_GRAPH_DATA', graphData })
        }).catch(err => console.log(err))
    }
}

export function getMetric(article_id) {
    return (dispatch) => {
        axios.get(`${url}metric/${article_id}`)
            .then((res) => {
                let metric = res.data
                dispatch({ type: 'VIEW_METRIC', metric })
            }).catch((err) => console.log(err))
    }
}

export function SignInUser(user_data) {
    return (dispatch) => {
        console.log('adding us..')
        axios.post(`${url}user`, user_data).then((res) => {
            let user = res.data
            localStorage.setItem('Auth', JSON.stringify(user))
            dispatch({ type: 'SET_USER', user })
        }).catch((err) => console.log(err))
    }
}

export function toggleClose() {
    return (dispatch) => {
        dispatch({ type: 'TOGGLE_MODAL', modalMode: false })
    }
}
export function toggleOpen() {
    return (dispatch) => {
        dispatch({ type: 'TOGGLE_MODAL', modalMode: true })
    }
}



export function aggregateMetric() {
    return (dispatch) => {
        axios.get(`${url}agg-metric`)
            .then((res) => {
                let aggregateResults = res.data
                dispatch({ type: 'AGGREGATE_METRICS', aggregateResults })
            }).catch((err) => console.log(err))
    }
}



export function addMetric() {
    const metric_data = {
        counter: this._id.counter,
        counterDescription: this._id.counterDescription,
        countValue: document.getElementById(this._id.counter).value
    }
    return (dispatch) => {
        axios.post(`${url}metric`, metric_data).then((res) => {
            const val = Number(document.getElementById(this._id.counterDescription).innerText)
            document.getElementById(this._id.counterDescription).innerText = val + res.data.countValue
            let data = res.data
            dispatch({ type: 'Add_METRIC', data })
        }).catch((err) => console.log(err))
    }
}


export function addNewMetric() {
    const metric_data = {
        counter: document.getElementById('counterName').value,
        counterDescription: document.getElementById('counterDescription').value,
        countValue: document.getElementById('counterValue').value,
    }
    return (dispatch) => {
        axios.post(`${url}metric`, metric_data).then((res) => {
            let data = res.data
            dispatch({ type: 'Add_METRIC', data })
        }).catch((err) => console.log(err))
    }
}