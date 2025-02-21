import React, { useState, useEffect } from "react";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";

const PartnerManagement = () => {
    const [partnerEmail, setPartnerEmail] = useState("");
    const [partner, setPartner] = useState(null);
    const [shareData, setSharedData] = useState(null);

    useEffect(() => {
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
        if (!partnerEmail) return alert("Enter a valid email.");
        try {
            const userRef = doc(db, "users", auth.currentUser.uid);
            await setDoc(userRef, { partner: partnerEmail }, { merge: true });
            alert("Partner invited successfully!");
        } catch (error) {
            console.error("Error inviting partner:", error);
        }
    };

    return (
        <div className="partner-agreement-container">
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
            {shareData ? (
                <pre>{JSON.stringify(shareData, null, 2)}</pre>
            ) : (
                <p>No shared data available.</p>    
            )}
        </div>
    );
};

export default PartnerManagement;