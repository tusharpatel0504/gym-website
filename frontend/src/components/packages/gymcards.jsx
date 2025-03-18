import React from "react";

const GymCards = () => {
  return (
    <div style={styles.container}  >
      {/* First Card - 30 Days (Left) */}
      <div style={styles.cardLeft}>
        <p style={styles.duration}>30 Days</p>
        <p style={styles.packageText}>Package</p>
        <p style={styles.discount}>20%</p>
        <p style={styles.discount}>OFF </p>
      </div>

      {/* Middle Card - 60 Days */}
      <div style={styles.cardMiddle}>
        <p style={styles.duration}>60 Days</p>
        <p style={styles.packageText}>Package</p>
        <p style={styles.discount}>30%</p>
        <p style={styles.discount}>OFF </p>
      </div>

      {/* Third Card - 90 Days (Right) */}
      <div style={styles.cardRight}>
        <p style={styles.duration}>90 Days</p>
        <p style={styles.packageText}>Package</p>
        <p style={styles.discount}>50% </p>
        <p style={styles.discount}>OFF </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "absolute",
    width: "708.26px",
    height: "418.54px",
    left: "78px",
    top: "1144px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  cardLeft: {
    width: "230.23px",
    height: "330.78px",
    background: "linear-gradient(180deg, #5B2619 0%, #2F140D 100%)",
    border: "5px solid #FFFFFF",
    borderRadius: "15px",
    // transform: "matrix(0.99, -0.1, 0.11, 0.99, 0, 0)", // Tilt effect
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "Instrument Sans, sans-serif",
    fontWeight: "700",
    boxShadow: "0px 0px 50px rgba(255, 255, 255, 0.25)",
    position:"absolute",
    transform: "rotate(-5.25deg)",
    left:"10px",

  },

  cardMiddle: {
    width: "230.85px",
    height: "312.72px",
    background: "linear-gradient(180deg, #FF762E 0%, #842D12 100%)",
    border: "5px solid #FFFFFF",
    borderRadius: "15px",
    transform: "matrix(1, 0.05, -0.04, 1, 0, 0)", // Slight tilt
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "Instrument Sans, sans-serif",
    fontWeight: "700",
    boxShadow: "0px 0px 50px rgba(255, 255, 255, 0.25)",
    margin: "0 20px",
    position: "absolute",
    // top:"1074px",
    // left:"319.08px",
  },

  cardRight: {
    width: "230.26px",
    height: "325.45px",
    background: "linear-gradient(180deg, #EBE6C5 0%, #5A584B 100%)",
    border: "5px solid #FFFFFF",
    borderRadius: "15px",
    // transform: "matrix(0.99, 0.14, -0.15, 0.99, 0, 0)", // Tilt in the opposite direction
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "Instrument Sans, sans-serif",
    fontWeight: "700",
    boxShadow: "0px 0px 50px rgba(255, 255, 255, 0.25)",
    position:"absolute",
    left:"450px",
    transform: "rotate(8.25deg)",
  },

  packageText: {
    fontSize: "45px",
    fontWeight: "700",
    marginBottom: "5px",
    color: "#EAE2C6",
  },

  discount: {
    fontSize: "65px",
    lineHeight: "80px",
    fontWeight: "700",
  },

  offText: {
    fontSize: "20px",
    fontWeight: "400",
  },

  duration: {
    fontSize: "15px",
    fontWeight: "700",
    // marginTop: "10px",
    lineHeight:"80px",
  },
};

export default GymCards;
