import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "kodobe-react-components";
import Router, { useRouter } from "next/router";
import {store} from "../state-management/storeComponent";
// import { DispatchType, ContextCustomType } from "../interfaces";

const withAuth = (AuthComponent: any) => {
  const Wrapper = (props: any) => {
    console.log("props", props)
    // const {
    //   state: {
    //     showLayout,
    //     baseUrls: { baseUrl },
    //   },
    //   dispatch,
    // }: ContextCustomType = useContext(store);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (loading) {
        checkIfUserAuth();
      }
    }, []);

    const checkIfUserAuth = async () => {
      // let localData: any = localStorage.getItem(tokenStore);

      //Logout for page is happening here
      // if (!localData) {
      //   return;
      // }
      //
      // localData = JSON.parse(localData);
      // const { token, refresh, clientId } = localData;

      // const res = await axiosHandler({
      //   method: "get",
      //   url: ME_URL(baseUrl),
      //   token,
      //   clientID: clientId,
      // }).catch((_: any) => logout(dispatch));
      //
      // if (res) {
      //   localStorage.setItem(tokenStore, JSON.stringify({ token, refresh, clientId, hasPassword: true }));
      //
      //   dispatch({
      //     type: actionTypes.updateClientInfo,
      //     payload: res.data.data,
      //   });
      //
      //   dispatch({
      //     type: actionTypes.setCheckedUser,
      //     payload: true,
      //   });
      //
      //   setLoading(false);
      // }
    };

    if (loading) {
      return (
        <div className="center">
          <Spinner />
        </div>
      );
    }

    return <AuthComponent {...props} />;
  };
  return Wrapper;
};

export default withAuth;
