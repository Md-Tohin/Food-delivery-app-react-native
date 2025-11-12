import Store from '../Store';

export const getToken = () => Store?.getState()?.generalState?.token;