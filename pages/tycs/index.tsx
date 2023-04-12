import { GetStaticProps, NextPage } from "next";
import React from "react";
import { TyC, TyCsAPIResponse } from "../../types";
import styles from "../../styles/TYC.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { TEXTS_BY_LANGUAGE, defaultLocale } from "../../locale/constants";

type IProps = {
  data: TyCsAPIResponse;
};

const TerminosYCondiciones: NextPage<IProps> = ({ data }) => {
  const path = useRouter();
  const language = path.locale || defaultLocale;

  if (!data) return null;

  const { version, tycs } = data;

  const renderTyc: (tyc: TyC) => JSX.Element = ({ id, description, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={styles.tycContainer}>
      <Head>
        <title>Tienda Libre - {TEXTS_BY_LANGUAGE[language].HEADER.TYCS}</title>
        <meta
          name="description"
          content={TEXTS_BY_LANGUAGE[language].META.TYCS_DESCRIPTION_CONTENT}
        />
      </Head>
      <h2>{TEXTS_BY_LANGUAGE[language].HEADER.TYCS}</h2>
      <p>Versión: {version}</p>
      {tycs.map(renderTyc)}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const url = `${process.env.BASE_URL}/api/tycs/${context.locale}`;
  console.log(">>>>>>URL: ", url);
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: { data },
  };
};

export default TerminosYCondiciones;
