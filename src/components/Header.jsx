import React from "react";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = async() => {
    await signOut(auth);
  }
  const user = useSelector(state => state.user);
    // ("unsubscribe is provided by Firebase to stop a listener. useEffect is used to control when to start and stop that listener using its cleanup function.");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          }),
        );
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="px-6 py-2 absolute bg-gradient-to-b h-32 from-black z-10 w-full flex justify-between">
      <img
        src=" https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-03-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="background netflix img"
        className="w-60 h-24"
      />
      {user && <div className="flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-full object-cover mx-3"
          alt="userImgUrl"
          src={user.photoURL} />
        <button className="font-bold text-2xl text-red-500 hover:text-red-700 transition mr-3"
          onClick={handleSignOut}>Sign Out</button>

      </div>}
    </div>
  );
};

export default Header;
