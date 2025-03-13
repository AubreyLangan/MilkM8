import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const PartnerManagement = () => {
    const [partnerEmail, setPartnerEmail] = useState("");
    const [partner, setPartner] = useState(null);
    const [sharedData, setSharedData] = useState(null);
    const [partnerData, setPartnerData] = useState(null);

    useEffect(() => {
        if (!auth.currentUser) return;

        const userRef = doc(db, "users", auth.currentUser.uid);
        const unsubscribe = onSnapshot(userRef, (docSnap) => {
            if (docSnap.exists()) {
                setPartner(docSnap.data().partner);
                
            }
        })
    })
};

export default PartnerManagement;