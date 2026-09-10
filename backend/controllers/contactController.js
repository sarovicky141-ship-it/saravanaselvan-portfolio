import ContactMessage from '../models/ContactMessage.js';

export async function createContact(req, res) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const entry = await ContactMessage.create({ name, email, message });
    return res.status(201).json({ success: true, id: entry._id });
  } catch {
    return res.status(500).json({ error: 'Server error. Please try again later.' });
  }
}
