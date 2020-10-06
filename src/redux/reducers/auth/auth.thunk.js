import types from './auth.types';
import axios from 'axios';


export const userLogin = (data) => {
    return (dispatch) => {
        dispatch({type: types.LOGIN_START})
        axios.post('/api/login/', data).then(res => {
            dispatch({type: types.LOGIN_SUCCESS, payload: res.data})
        }).catch(error => {
            dispatch({type: types.LOGIN_FAIL, payload: error.response.data})
        })
    }
}

// export const userLogin = (data) => {
//     return (dispatch, getState) => {
//         dispatch({type: types.LOGIN_START});
//         const state = getState();
//         const {token} = state.auth;
//         const config = {
//             headers: {'Authorization': `Token ${token}`},
//         };
//         return new Promise((resolve, reject) => {
//             axios.post('/api/contacts/', data, config).then(res => {
//                 dispatch({type: types.LOGIN_SUCCESS, payload: res.data})
//                 resolve()
//             }).catch(error => {
//                 dispatch({type: types.LOGIN_FAIL, payload: error.response.data})
//                 reject()
//             })
//         })
//
//     }
// }