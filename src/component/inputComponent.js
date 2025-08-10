export default function inputsComponent({ value, handleChange,inputName }) {
    return(
        <>
            <label>{inputName}:</label>
        <input
          type="tel"
          name="phone"
          value={value}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        />
        </>
    )
}