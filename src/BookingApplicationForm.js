import React, { useState } from "react";
import "./BookingApplicationForm.css";


function BookingApplicationForm() {

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        //More clever database stuff

        setStartDate("");
        setEndDate("");
        setComment("");
    }

    return (
        <div className="bookingApplicationForm">
            <div className="bookingApplicationForm_top">
                <form>
                    <input
                        value={startDate}
                        onChange={(e) =>setStartDate(e.target.value)}
                        className="bookingApplicationForm_startDate"
                        placeholder={`Aankomstdatum`}
                    />
                    <input
                        value={endDate}
                        onChange={(e) =>setEndDate(e.target.value)}
                        className="bookingApplicationForm_endDate"
                        placeholder={`Vertrekdatum`}
                    />
                </form>
            </div>
            <div className="bookingApplicationForm_bottom">
                <form>
                    <input
                        value={comment}
                        onChange={(e) =>setComment(e.target.value)}
                        className="bookingApplicationForm_comment"
                        placeholder={`Opmerkingen (of een gezellig berichtje:-))`}
                    />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

        </div>
    )
}

export default BookingApplicationForm;