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
                setSharedData(docSnap.data().babyData);
            }
        });

        return () => unsubscribe();
    }, []);

    const invitePartner = async () => {
        if (!partnerEmail) return alert("enter a valid email.");

        try {
            const userRef = doc(db, "users", auth.currentUser.uid);
            await setDoc(userRef, { partner: partnerEmail }, { merge: true });
            alert("Partner invited successfully!");
        }
    };

    return (
        <div className="partner-agreenent-container">
            <h1>Partner Management</h1>
            {partner ? (
                <p>Connected Partner: {partner}</p>
            ) : (
                <div>
                    <label>Invite Partner: </label>
                    <input
                        type="email"
                        value={partnerEmail}
                        onChange={(e) => setPartnerEmail(e.target.value)}
                        placeholder="Enter partner's email"
                    />
                    <button onClick={invitePartner}>Send Invite</button>
                </div>
            )}

            <h2>Shared Data</h2>
            {sharedData ? (
                <pre>{JSON.stringify(sharedData, null, 2)}</pre>
            ) : (
                <p>No shared data available.</p>
            )}

            <button onClick={fetchPartnerData}>Fetch Partner Data</button>
            {partnerData && (
                <div>
                    <h3>Partner's Info:</h3>
                    <pre>{JSON.stringify(partnerData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default PartnerManagement;