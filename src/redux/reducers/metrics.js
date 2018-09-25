const initialState = {
    metrics: [],
    metric: {},
    graphData: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_METRICS':
            return {
                ...state,
                metrics: action.metrics
            }

        case 'SET_GRAPH_DATA':
            return {
                ...state,
                graphData: action.graphData
            }

        case 'Add_METRIC':
            return {
                ...state,
                metric: action.metric
            }
        case 'AGGREGATE_METRICS':
            return {
                ...state,
                metrics: action.aggregateResults
            }
        default:
            return state
    }
}