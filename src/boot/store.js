import store from '../store'

export default async({app}) =>{
    app.provide('store', store)
}