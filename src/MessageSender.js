import React, {useState, useContext, useEffect } from 'react';
import "./MessageSender.css";
import { AuthContext, useAuthState } from "./context/AuthContext";
import { Link, useHistory } from 'react-router-dom'; //Deze er later waarsch uit gooien
import {Avatar} from "@material-ui/core";

//import VideocamIcon from "@material-ui/icons/Videocam";
//import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
//import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";

import axios from "axios";

function MessageSender() {

    const [clientImage, setClientImage] = useState("");
    const [clientName, setClientName] = useState("");
    const [clientText, setClientText] = useState("");
    const [contestImage, setContest_Image] = useState("");

    //state voor gebruikers-feedback
    const [createUserSucces, setCreateUserSucces] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    //Convert contestImage to base64
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setContest_Image(base64);
    };

    async function onSubmit(event) {
        toggleLoading(true);
        setError('');
        event.preventDefault();

        console.log(contestImage); //hiermee kan je die dichtstaande dingen evt ook nog openen.

        const base64 = await convertBase64(contestImage);

        console.log("base 64", base64);

        console.log(clientImage, clientName, clientText, contestImage);

        const token = localStorage.getItem('token');

        console.log("contestImage", contestImage);

        try {
            const response = await axios.post(`http://localhost:8080/messages`, {

                clientImage: clientImage,
                clientName: clientName,
                clientText: clientText,
                contestImage: base64,
            }, {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);

            if(response.status === 200) {
                setCreateUserSucces(true);
            }
        } catch (e) {
            console.log(e);

            if (e.message.includes('400')) {
                setError('Er bestaat al een account met deze gebruikersnaam');
            } else {
                setError('Er is iets misgegaan bij het zenden. Probeer het nog eens');
            }
        }
        toggleLoading(false);
    }

    const convertBase64 = (file) => {
        let reader = new FileReader();
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    return (
        <>
            <h1>Fotowedstrijd</h1>
            <p>vul hier je naam en de verblijfplaats in; wie weet win jij dan wel een gratis weekendje weg in het
            huisje naar keuze!</p>
            {createUserSucces === true}
            <form className="messagebutton" onSubmit={onSubmit}>

                <label htmlFor="clientImage-field">
                    Avatar:
                    <input
                    type="text"
                    id="clientImage-field"
                    value={clientImage}
                    onChange={(e) => setClientImage(e.target.value)}
                    />
                </label>

                <label htmlFor="clientName-field">
                    Je naam:
                    <input
                    type="text"
                    id="clientName-field"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    />
                </label>

                <label htmlFor="clientText-field">
                    Laat een leuk berichtje achter:
                    <input
                    type="text"
                    id="clientText-field"
                    value={clientText}
                    onChange={(e) => setClientText(e.target.value)}
                    />
                </label>

                <label htmlFor="contestImage-field">
                    Upload hier je vakantiefoto!
                    <input
                        type="file"
                        id="contestImage-field"

                        onChange={(e) => setContest_Image(e.target.files[0])}
                    />
                </label>

                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Upload een foto'}
                </button>
                {error && <p>{error}</p>}

                <img src={clientImage} height="200px" />

            </form>


        </>

    )

    //----------------------------------------------------
    //Dit is het oorspronkelijke spul -->Uit zetten
    /*const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        //some clever databse stuff

        setInput("");
        setImageUrl("");
    };*/
    //-----------------------------------------------------

    /*return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender_input"
                        placeholder={`What's on your mind?`}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional)" />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender_option">
                    <InsertEmotionIcon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )*/
};

export default MessageSender;