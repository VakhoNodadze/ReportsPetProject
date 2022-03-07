import ajax from './ajax'

export const getProjects = () => ajax.get('/projects')

export const getUsers = () => ajax.get('/users')

export const getGateways = () => ajax.get('/gateways')