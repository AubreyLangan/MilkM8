import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const PartnerManagement = () => {
    const [partnerEmail, setPartnerEmail] = useState("");
    const [partner, setPartner] = useState(null);
    const [sharedData, setSharedData] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                setUserId(null);
            }
        });
        return () => unsubscribeAuth();
    }, []);

    useEffect(() => {
        if (!userId) return;

        const userRef = doc(db, "users", userId);
        const unsubscribe = onSnapshot(userRef, (docSnap) => {
            if (docSnap.exists()) {
                setPartner(docSnap.data().partner);
                setSharedData(docSnap.data().babyData);
            }
        });

        return () => unsubscribe();
    }, [userId]);

    const invitePartner = async () => {
        if (!partnerEmail) return alert("Enter a valid email.");
        if (!userId) return alert("User not authenticated!");


        try {
            const userRef = doc(db, "users", userId);
            await setDoc(userRef, { partner: partnerEmail }, { merge: true });
            alert("Partner invited successfully!");
        } catch (error) {
            console.error("Error inviting partner:", error);
        }
    };

    const fetchPartnerData = async (partnerId) => {
        const partnerRef = doc(db, "users", partnerId);
        const partnerSnap = await getDoc(partnerRef);

        if (partnerSnap.exists()) {
            console.log("Partner Data:", partnerSnap.data());
        } else {
            console.log("No such partner found!");
        }
    };

    return (
        <div className="partner-agreement-container">
            <h1>Partner Management</h1>
            {partner ? (
                <>
                    <p>Connected Partner: {partner}</p>
                    <button onClick={() => fetchPartnerData(partner)}>Fetch Partner Data</button>
                </>
            ) : (
                <div className="invite-section">
                    <label>Invite Partner: </label>
                    <input
                        type="email"
                        value={partnerEmail}
                        onChange={(e) => setPartnerEmail(e.target.value)}
                        placeholder="Enter partner's email"
                    />
                    <button onClick={invitePartner} className="invite-button">
                        Send Invite
                    </button>
                </div>
            )}
            <h2>Shared Data</h2>
            {sharedData ? (
                <pre>{JSON.stringify(sharedData, null, 2)}</pre>
            ) : (
                <p>No shared data available.</p>    
            )}
        </div>
    );
};

export default PartnerManagement;