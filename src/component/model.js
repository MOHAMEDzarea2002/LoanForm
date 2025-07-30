import "../form.css"

export default function Modal({ isvisible , ErrorMessage = null ,onClose }) {
    if (isvisible) {
        return (
            <div id="model">
                <div id="model-content">
                    {/* <h1>the form mas been submitted successfully</h1>  */}
                    <h1 style={{color: ErrorMessage ? "red" : "green"}}> {ErrorMessage != null ?  ErrorMessage :"The form has been submitted successfully"}</h1> 
                    <button onClick={onClose}>Close</button>
                    </div>
            </div>
        )
    } else {

        return (<></>);
    }

}