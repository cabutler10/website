import { translate } from "react-i18next";

const Translate = props => {
  let { value, t } = props;

  return t(value);
};

export default translate()(Translate);
