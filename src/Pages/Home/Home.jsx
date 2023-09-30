import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';
import app from '../../Firecode/firacode.init';

const auth = getAuth(app);

const Home = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleSingInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result?.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSingInWithGitHub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => setUser(result?.user))
      .catch((error) => console.log(error));
  };
  const handleSingInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => setUser(result.user))
      .catch((error) => console.error(error));
  };
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1>Home</h1>

      <div>
        {user && (
          <div className="my-6 space-y-4 text-center">
            <img className="mx-auto" src={user?.photoURL} alt="" />
            <h2 className="text-3xl font-bold">Name: {user?.displayName}</h2>
            <p>Email: {user?.email}</p>
          </div>
        )}
      </div>
      {user ? (
        <button onClick={handleSingOut} className="border px-4 py-2 rounded-lg bg-red-600">
          Log Out
        </button>
      ) : (
        <div className="space-x-4">
          <button onClick={handleSingInWithGoogle} className="border px-4 py-2 rounded-lg bg-green-400">
            Login with Google
          </button>
          <button onClick={handleSingInWithGitHub} className="border px-4 py-2 rounded-lg bg-green-400">
            Login with GitHub
          </button>
          <button onClick={handleSingInWithFacebook} className="border px-4 py-2 rounded-lg bg-green-400">
            Login with Facebook
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
