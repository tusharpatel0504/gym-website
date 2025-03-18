import { Contact } from "../models/Contact.js";

export const submitContactForm = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact information submitted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// export const getContactForms = async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 });
//     // const contacts = await Contact.find();
//     res.status(200).json(contacts);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };