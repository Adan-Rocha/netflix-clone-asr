import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Movie } from "../../typings";
import firebaseApp from "../../firebase";

const db = getFirestore(firebaseApp);
function useList(uid: string | undefined) {
  const [list, setList] = useState<DocumentData[] | Movie[]>([]);

  useEffect(() => {
    if (!uid) return;

    return onSnapshot(
      collection(db, "customers", uid, "myList"),
      (snapshot) => {
        setList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
        );
      }
    );
  }, [db, uid]);

  return list;
}

export default useList;
