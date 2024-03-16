import User from "../models/user.model.js";

export const admissionForm = async (req, res) => {
  const { fullName, fathersName, mothersName, phoneNumber, emailAddress } = req.body;

  if (
    !fullName ||
    !fathersName ||
    !mothersName ||
    !phoneNumber ||
    !emailAddress ||
    fullName === "" ||
    fathersName === "" ||
    mothersName === "" ||
    phoneNumber === "" ||
    emailAddress === ""
  ) {
    return res.status(400).json({ message: "Please fill in all the fields" });
  } else if (phoneNumber.length < 10) {
    return res
      .status(400)
      .json({ message: "Phone number should be 10 digits" });
  } else if (!emailAddress.includes("@")) {
    return res.status(400).json({ message: "Invalid Email" });
  } else if (emailAddress.includes(" ") && phoneNumber.includes(" ")) {
    return res.status(400).json({ message: "Email should not contain spaces" });
  }

  const newUser = new User({
    fullName,
    fathersName,
    mothersName,
    phoneNumber,
    emailAddress,
  });

  try {
    await newUser.save();
    res.json({ message: "Form submitted successfully. We'll Give you a call" });
    console.log(newUser)
  } catch (err) {
    res.status(400).json({ message: "Form submission failed" });
  }
};
