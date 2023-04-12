const EN_US = "en-US";
const ES_ES = "es-ES";
const PT_BR = "pt-BR";

export const defaultLocale = ES_ES;
export const locales: { [key: string]: string } = {
  EN_US,
  ES_ES,
  PT_BR,
};

export const localeNames: { [key: string]: string } = {
  [EN_US]: "English",
  [ES_ES]: "Español",
  [PT_BR]: "Português",
};

export interface ITEXTS_BY_LANGUAGE {
  [key: string]: {
    HEADER: {
      TYCS: string;
      PRODUCTS: string;
    };
    MAIN: {
      TYCS: string;
      PRODUCTS: string;
    };
    META: {
      PRODUCTS_DESCRIPTION_CONTENT: string;
      TYCS_DESCRIPTION_CONTENT: string;
    };
  };
}

export const TEXTS_BY_LANGUAGE: ITEXTS_BY_LANGUAGE = {
  [EN_US]: {
    HEADER: {
      TYCS: "Terms and conditions",
      PRODUCTS: "Featured Products",
    },
    MAIN: {
      PRODUCTS: "Featured Products",
      TYCS: "Terms and conditions",
    },
    META: {
      PRODUCTS_DESCRIPTION_CONTENT:
        "List of featured products from Tienda Libre",
      TYCS_DESCRIPTION_CONTENT: "Terms and conditions of Tienda Libre",
    },
  },
  [ES_ES]: {
    HEADER: {
      TYCS: "Términos y condiciones",
      PRODUCTS: "Productos destacados",
    },
    MAIN: {
      PRODUCTS: "Productos destacados",
      TYCS: "Términos y condiciones",
    },
    META: {
      PRODUCTS_DESCRIPTION_CONTENT:
        "listado de productos destacados de Tienda Libre",
      TYCS_DESCRIPTION_CONTENT: "Términos y condiciones de Tienda Libre",
    },
  },
  [PT_BR]: {
    HEADER: {
      TYCS: "Termos e Condições",
      PRODUCTS: "Produtos em destaque",
    },
    MAIN: {
      PRODUCTS: "Produtos em destaque",
      TYCS: "Termos e Condições",
    },
    META: {
      PRODUCTS_DESCRIPTION_CONTENT:
        "Lista de produtos em destaque da Tienda Libre",
      TYCS_DESCRIPTION_CONTENT: "Termos e condições da Tienda Libre",
    },
  },
};
