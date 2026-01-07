import { useForm } from "react-hook-form";
import "../../assets/css/contact.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log("Form Data:", data);
    reset();
  }

  return (
    <div className="contact-wrapper">
      {/* Header */}
      <div className="contact-header">
        <h2>GET IN TOUCH</h2>
        <p>
          Trysail transom furl Sea Legs scallywag Jack Ketch chandler mizzenmast
          reef sails skysail. Shiver me timbers loot bucko belaying pin Sea Legs
          boom gunwalls booty jury mast fore.
        </p>
      </div>

      {/* Form Card */}
      <div className="contact-card">
        <h3>Contact Form</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-wrap">
            <div className="form-row">
              {/* Name */}
              <div className="form-group">
                <label>
                  Name <span>*</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <small className="error">{errors.name.message}</small>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label>
                  Email Address <span>*</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <small className="error">{errors.email.message}</small>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="form-group full">
              <label>
                Message <span>*</span>
              </label>
              <textarea
                rows="4"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 characters",
                  },
                })}
              />
              {errors.message && (
                <small className="error">{errors.message.message}</small>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="form-actions">
            <button type="submit" className="send-btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
