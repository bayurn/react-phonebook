import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:1919/api/',
    timeout: 1000
});

// start load phonebook

const loadPhonebookSuccess = (phonebook) => ({
    type: 'LOAD_PHONEBOOK_SUCCESS',
    phonebook
})

const loadPhonebookFailure = () => ({
    type: 'LOAD_PHONEBOOK_FAILURE'
})

export const loadPhonebook = () => {
    return dispatch => {
        return request.get('phonebook')
        .then(function (response) {
            dispatch(loadPhonebookSuccess(response.data))
        })
        .catch(function (error) {
            console.error(error);
            dispatch(loadPhonebookFailure())
        });  
    }
}

// end load phonebook

// start post phonebook 

const postPhonebookSuccess = (phonebook) => ({
    type: 'POST_PHONEBOOK_SUCCESS',
    chats
})

const postPhonebookFailure = (id) => ({
    type: 'POST_PHONEBOOK_FAILURE',
    id
})

const postPhonebookRedux = (id, name, phone) => ({
    type: 'POST_PHONEBOOK',
    id,
    name,
    phone
})

export const postPhonebook = (name, phone) => {
    let id = Date.now();
    return dispatch => {
        dispatch(postPhonebookRedux(id, name, phone))
        return request.post('phonebook', {id, name, phone})
        .then(function (response) {
            dispatch(postPhonebookSuccess(response.data))
        })
        .catch(function (error) {
            console.error(error);
            dispatch(postPhonebookFailure(id))
        });
    }
}

// end post phonebook

// start delete phonebook

const deletePhonebookRedux = (id) => ({
    type: 'DELETE_PHONEBOOK',
    id
})

const deletePhonebookSuccess = (phonebook) => ({
    type: 'DELETE_PHONEBOOK_SUCCESS'
})

const deletePhonebookFailure = () => ({
    type: 'DELETE_PHONEBOOK_FAILURE'
})

export const deletePhonebook = (id) => {
    return dispatch => {
        dispatch(deletePhonebookRedux(id))
        return request.delete(`phonebook/${id}`)
        .then(function (response) {
            dispatch(deletePhonebookSuccess(response.data))
        })
        .catch(function (error) {
            console.error(error);
            dispatch(deletePhonebookFailure())
        })
    }
}

// end delete phonebook

// start edit phonebook


// end edit phonebook