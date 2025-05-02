const type = {
  NAV: "NAV",
  ANIMATION: "ANIMATION",
  MODAL: "MODAL",
  EXPERIENCEMODAL: "EXPERIENCEMODAL",
  SERVICEMODAL: "SERVICEMODAL",
  PORTFOLIOMODAL: "PORTFOLIOMODAL",
  BLOGMODAL: "BLOGMODAL",
};
const {
  NAV,
  ANIMATION,
  MODAL,
  EXPERIENCEMODAL,
  SERVICEMODAL,
  PORTFOLIOMODAL,
  BLOGMODAL,
} = type;

import { createContext, useCallback, useReducer } from "react";
const context = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case ANIMATION:
      return {
        ...state,
        animation: payload,
      };
    case MODAL:
      return {
        ...state,
        modal: payload,
      };
    case EXPERIENCEMODAL:
      return {
        ...state,
        experienceModal: payload,
      };
    case SERVICEMODAL:
      return {
        ...state,
        serviceModal: payload,
      };
    case PORTFOLIOMODAL:
      return {
        ...state,
        portfolioModal: payload,
      };
    case BLOGMODAL:
      return {
        ...state,
        blogModal: payload,
      };
    default:
      return state;
  }
};

const state = (props) => {
  const initialState = {
    nav: "home",
    animation: "fadeInLeft",
    modal: false,
    experienceModal: null,
    serviceModal: null,
    portfolioModal: null,
    blogModal: null,
    menus: [
      { id: 1, name: "Inicio", href: "home" },
      { id: 2, name: "Servicios", href: "service" },
      { id: 3, name: "Sobre mi", href: "about" },
      { id: 6, name: "Contacto", href: "contact" },
    ],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const navChange = useCallback((value) => {
    dispatch({
      type: NAV,
      payload: value,
    });
  }, []);

  const animationChnage = useCallback((value) => {
    dispatch({
      type: ANIMATION,
      payload: value,
    });
  }, []);

  const modalToggle = useCallback((value) => {
    dispatch({
      type: MODAL,
      payload: value,
    });
  }, []);

  const setexperienceModal = useCallback((value) => {
    dispatch({
      type: EXPERIENCEMODAL,
      payload: value,
    });
  }, []);
  const setServiceModal = useCallback((value) => {
    dispatch({
      type: SERVICEMODAL,
      payload: value,
    });
  }, []);
  const setPortfolioModal = useCallback((value) => {
    dispatch({
      type: PORTFOLIOMODAL,
      payload: value,
    });
  }, []);
  const setBlogModal = useCallback((value) => {
    dispatch({
      type: BLOGMODAL,
      payload: value,
    });
  }, []);

  const {
    nav,
    animation,
    menus,
    modal,
    experienceModal,
    serviceModal,
    portfolioModal,
    blogModal,
  } = state;
  return (
    <context.Provider
      value={{
        navChange,
        nav,
        animation,
        animationChnage,
        menus,
        modal,
        modalToggle,
        experienceModal,
        setexperienceModal,
        serviceModal,
        setServiceModal,
        portfolioModal,
        setPortfolioModal,
        blogModal,
        setBlogModal,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default state;

export { context };
