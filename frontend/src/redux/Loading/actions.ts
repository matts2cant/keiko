import { createStandardAction } from 'typesafe-actions';

export const setLoading = createStandardAction('Loader/SET')<{
  key: string;
  value: boolean;
}>();

export default {
  setLoading
};
