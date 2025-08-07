
const Contact = () => {
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact us</h2>
  
        <div style={styles.infoContainer}>
          <div style={styles.infoBox}>
            <img
              src={iconPhone}
              alt="Call us"
              style={styles.iconImage}
            />
            <div>
              <h4 style={styles.infoTitle}>Call us</h4>
              <p style={styles.infoText}>+9779813104240</p>
            </div>
          </div>
          <div style={styles.infoBox}>
            <img
              src={iconMail}
              alt="Mail us"
              style={styles.iconImage}
            />
            <div>
              <h4 style={styles.infoTitle}>Mail us</h4>
              <p style={styles.infoText}>support@bhojmandu.com</p>
            </div>
          </div>
          <div style={styles.infoBox}>
            <img
              src={iconLocation}
              alt="Find us"
              style={styles.iconImage}
            />
            <div>
              <h4 style={styles.infoTitle}>Find us</h4>
              <p style={styles.infoText}>
                China Town Rd 35, Kathmandu 44600, Nepal
              </p>
            </div>
          </div>
        </div>
  
        <div style={styles.formContainer}>
          <form style={styles.form}>
            <h3 style={styles.subHeading}>Type here</h3>
            <input type="text" placeholder="Name" style={styles.input} />
            <input
              type="email"
              placeholder="Email Address"
              style={styles.input}
            />
            <textarea
              placeholder="Type your message here"
              rows="5"
              style={styles.textarea}
            ></textarea>
            <button type="submit" style={styles.submitBtn}>
              Submit
            </button>
          </form>
  
          <div>
            <img
              src="https://cdn.dribbble.com/users/926537/screenshots/14819678/media/9ec04c2996b59781b760b5664d29df9e.png"
              alt="Contact illustration"
              style={styles.image}
            />
          </div>
        </div>
      </div>
    );
  };
  
  // Replace these URLs with static assets or your own icons
  const iconPhone =
    "https://i.imgur.com/OJkaFvU.png"; // red round phone icon
  const iconMail =
    "https://i.imgur.com/YdBXmUb.png"; // red round mail icon
  const iconLocation =
    "https://i.imgur.com/zZVd4gQ.png"; // red round location icon
  
  const styles = {
    container: {
      padding: "50px 20px",
      maxWidth: "1100px",
      margin: "auto",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center",
      fontSize: "32px",
      color: "red",
      fontWeight: "bold",
      marginBottom: "30px",
    },
    infoContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginBottom: "40px",
      gap: "20px",
    },
    infoBox: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      flex: "1",
      minWidth: "250px",
    },
    iconImage: {
      width: "48px",
      height: "48px",
    },
    infoTitle: {
      margin: "0",
      fontWeight: "bold",
    },
    infoText: {
      margin: "2px 0 0",
      color: "red",
    },
    formContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "30px",
      justifyContent: "space-between",
      alignItems: "center",
    },
    form: {
      flex: "1",
      minWidth: "300px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    subHeading: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "5px",
      color: "#333",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
    textarea: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
    submitBtn: {
      backgroundColor: "red",
      color: "white",
      padding: "12px",
      fontSize: "16px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      width: "120px",
      boxShadow: "0 5px 15px rgba(255,0,0,0.3)",
    },
    image: {
      maxWidth: "380px",
      width: "100%",
    },
  };
  
  export default Contact;