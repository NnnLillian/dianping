import { get } from "../../utils/request";
import url from "../../utils/url";

export const types = {
    FETCH_LIKES_REQUEST: "home/fetch_likes_request", //获取猜你喜欢请求
    FETCH_LIKES_SUCCESS: "home/fetch_likes_success", //获取请求成功
    FETCH_LIKES_FAIL: "home/fetch_likes_fail", //获取请求失败
}

export const actions = {
    loadLikes: () => {
        return (dispatch) => {
            dispatch(fetchLikesRequest());
            return get(url.getProductList(0, 10)).then(
                data => {
                    dispatch(fetchLikesSuccess(data))
                },
                error => {
                    dispatch(fetchLikesFail(error))
                }
            )
        }
    }
}

const fetchLikesRequest = () => ({
    type: types.FETCH_LIKES_REQUEST,
})

const fetchLikesSuccess = (data) => ({
    type: types.FETCH_LIKES_SUCCESS,
    data
})

const fetchLikesFail = (error) => ({
    type: types.FETCH_LIKES_FAIL,
    error
})


const reducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_LIKES_REQUEST:
        //ToDo
        case types.FETCH_LIKES_SUCCESS:
        //ToDo
        case types.FETCH_LIKES_FAIL:
        //todo
        default:
            return state;
    }
}

export default reducer;