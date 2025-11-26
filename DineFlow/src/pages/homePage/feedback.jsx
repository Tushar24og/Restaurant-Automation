import React from "react";

export default function Feedback() {
  const sectionStyle = {
    width: "100%",
    padding: "50px 20px",
    background: "#fff",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif"
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#111"
  };

  const gridStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px"
  };

  const cardStyle = {
    width: "300px",
    padding: "20px",
    border: "1px solid #e6e6e6",
    borderRadius: "12px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
    textAlign: "left",
    background: "#fff"
  };

  const textStyle = {
    fontStyle: "italic",
    fontSize: "14px",
    lineHeight: "1.5",
    marginBottom: "20px",
    color: "#444"
  };

  const userRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  };

  const avatarStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    objectFit: "cover",
    background: "#f0f0f0"
  };

  const nameStyle = {
    fontSize: "15px",
    fontWeight: "600",
    margin: "0",
    color: "#222"
  };

  const roleStyle = {
    fontSize: "12px",
    margin: "2px 0 0 0",
    color: "#888"
  };

  const testimonials = [
    {
      text: "DineFlow has completely transformed our operations. Orders are smoother, and our kitchen staff loves real-time tracking. Highly recommend!",
      name: "Alice Johnson",
      role: "Restaurant Owner",
      avatar: "/mnt/data/321a3ff6-ff64-4dad-8165-a628dec9b9fa.png"
    },
    {
      text: "The digital menu is fantastic! Customers love the easy browsing and ordering. It's made a huge difference.",
      name: "Bob Williams",
      role: "Head Chef",
      avatar: "/mnt/data/822d5412-dae1-4c4d-9a94-24dd36cafed4.png"
    },
    {
      text: "Efficiency is key in our diner, and DineFlow delivers. Billing is quick and dashboards give great insights.",
      name: "Charlie Davis",
      role: "Operations Manager",
      avatar: null
    }
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>What Our Diners Say</h2>

      <div style={gridStyle}>
        {testimonials.map((t, i) => (
          <div key={i} style={cardStyle}>
            <p style={textStyle}>{t.text}</p>

            <div style={userRowStyle}>
              {t.avatar ? (
                <img src={t.avatar} alt={t.name} style={avatarStyle} />
              ) : (
                <div style={{...avatarStyle, display:"flex", justifyContent:"center", alignItems:"center", fontWeight:"600"}}>
                  {t.name[0]}{t.role[0]}
                </div>
              )}

              <div>
                <p style={nameStyle}>{t.name}</p>
                <p style={roleStyle}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

