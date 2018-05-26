import React, { Fragment } from "react";
import { I18n } from "react-i18next";

const Translate = props => {
  let { value } = props;

  return <I18n>{(t, { i18n }) => <Fragment>{t(value)}</Fragment>}</I18n>;
};

export default Translate;
