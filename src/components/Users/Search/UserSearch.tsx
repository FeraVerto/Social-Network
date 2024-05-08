import React from 'react';
import { useFormik } from 'formik';
import s from './UserSearch.module.sass';
import { Button } from '../../common/Button/Button';

export const UserSearch = (props: any) => {
  const formik = useFormik({
    initialValues: {
      term: '',
    },
    onSubmit: (values) => {
      props.onSearch(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={s.search_form}>
      <input
        id="term"
        name="term"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.term}
        className={s.search_input}
      />
      <Button style={s.search_button}>Search</Button>
    </form>
  );
};
