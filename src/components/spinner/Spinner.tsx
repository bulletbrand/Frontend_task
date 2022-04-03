import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";
import styles from "./spinner.module.scss";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: orange;
`;

export const Spinner = ({ loading }: { loading: boolean }): JSX.Element => {
  return (
    <div className={styles.spinnerWrapper}>
      <PacmanLoader color="black" loading={loading} css={override} size={30} />
    </div>
  );
};
